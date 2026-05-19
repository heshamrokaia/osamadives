import { NextResponse } from "next/server";
import { fetchInstagramFeed } from "@/lib/instagram";

export const revalidate = 21600;

export async function GET() {
  const feed = await fetchInstagramFeed(9);
  return NextResponse.json(feed, {
    headers: {
      "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400",
    },
  });
}
