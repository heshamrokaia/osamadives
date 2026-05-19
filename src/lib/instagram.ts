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

const GRAPH_API_VERSION = "v18.0";
const GRAPH_API_BASE = `https://graph.facebook.com/${GRAPH_API_VERSION}`;
const FIELDS = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";

export async function fetchInstagramFeed(limit = 9): Promise<InstagramFeedResponse> {
  const token = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;

  if (!token || !userId) {
    return {
      status: "no_token",
      posts: [],
      message: "Instagram credentials not yet configured. See INSTAGRAM_SETUP.md.",
    };
  }

  const url = `${GRAPH_API_BASE}/${userId}/media?fields=${FIELDS}&limit=${limit}&access_token=${token}`;

  try {
    const res = await fetch(url, {
      next: { revalidate: 21600 },
    });

    if (!res.ok) {
      const body = await res.text();
      const isExpired = /expired|invalid|OAuth/i.test(body);
      return {
        status: isExpired ? "expired" : "error",
        posts: [],
        message: `Meta API returned ${res.status}. ${isExpired ? "Token likely expired - run the refresh step from INSTAGRAM_SETUP.md." : ""}`,
      };
    }

    const data = await res.json();
    const posts: InstagramMedia[] = Array.isArray(data?.data) ? data.data : [];

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
