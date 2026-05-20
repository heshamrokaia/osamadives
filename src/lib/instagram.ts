export type InstagramMediaType = "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";

export interface InstagramMedia {
  id: string;
  caption?: string;
  media_type: InstagramMediaType;
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

export type InstagramStatus = "ok" | "no_token" | "expired" | "error";

export interface InstagramFeedResponse {
  status: InstagramStatus;
  posts: InstagramMedia[];
  fetched_at?: string;
  message?: string;
}

const IG_USERNAME = "osama_mohamed_hassan";

// Instagram's public web app ID. Without this header the endpoint returns
// "useragent mismatch". This is the same ID instagram.com itself sends from
// the browser, and it's effectively a public constant.
const IG_WEB_APP_ID = "936619743392459";

// Browser-style User-Agent so the endpoint doesn't 403 us as a bot.
const USER_AGENT =
  "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 " +
  "(KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36";

interface IGEdgeNode {
  id: string;
  shortcode: string;
  display_url: string;
  thumbnail_src?: string;
  is_video?: boolean;
  __typename?: string;
  taken_at_timestamp: number;
  edge_media_to_caption?: {
    edges?: Array<{ node?: { text?: string } }>;
  };
}

interface IGProfileResponse {
  data?: {
    user?: {
      id?: string;
      username?: string;
      edge_owner_to_timeline_media?: {
        edges?: Array<{ node: IGEdgeNode }>;
      };
    };
  };
}

export async function fetchInstagramFeed(limit = 9): Promise<InstagramFeedResponse> {
  const url = `https://www.instagram.com/api/v1/users/web_profile_info/?username=${IG_USERNAME}`;

  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        "X-IG-App-ID": IG_WEB_APP_ID,
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
      },
      next: { revalidate: 21600 },
    });

    if (!res.ok) {
      const body = await res.text();
      return {
        status: "error",
        posts: [],
        message: `Instagram returned ${res.status}. Body: ${body.slice(0, 300)}`,
      };
    }

    const data: IGProfileResponse = await res.json();
    const edges = data?.data?.user?.edge_owner_to_timeline_media?.edges ?? [];

    const posts: InstagramMedia[] = edges.slice(0, limit).map((edge) => {
      const node = edge.node;
      const caption = node.edge_media_to_caption?.edges?.[0]?.node?.text;
      const mediaType: InstagramMediaType = node.is_video
        ? "VIDEO"
        : node.__typename === "GraphSidecar"
        ? "CAROUSEL_ALBUM"
        : "IMAGE";

      return {
        id: node.id,
        caption,
        media_type: mediaType,
        media_url: node.display_url,
        thumbnail_url: node.thumbnail_src ?? node.display_url,
        permalink: `https://www.instagram.com/p/${node.shortcode}/`,
        timestamp: new Date(node.taken_at_timestamp * 1000).toISOString(),
      };
    });

    return {
      status: "ok",
      posts,
      fetched_at: new Date().toISOString(),
    };
  } catch (err) {
    return {
      status: "error",
      posts: [],
      message: err instanceof Error ? err.message : "Unknown error fetching Instagram feed.",
    };
  }
}
