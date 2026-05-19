"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { InstagramFeedResponse, InstagramMedia } from "@/lib/instagram";

const IG_PROFILE_URL = "https://instagram.com/osama_mohamed_hassan";
const HANDLE = "@osama_mohamed_hassan";

function relativeTime(iso: string): string {
  const then = new Date(iso).getTime();
  const now = Date.now();
  const diff = Math.max(0, now - then);
  const day = 86_400_000;
  const hour = 3_600_000;
  const minute = 60_000;
  if (diff < hour) return `${Math.max(1, Math.round(diff / minute))}m ago`;
  if (diff < day) return `${Math.round(diff / hour)}h ago`;
  const days = Math.round(diff / day);
  if (days < 7) return `${days}d ago`;
  if (days < 30) return `${Math.round(days / 7)}w ago`;
  if (days < 365) return `${Math.round(days / 30)}mo ago`;
  return `${Math.round(days / 365)}y ago`;
}

function MediaTypeIcon({ type }: { type: InstagramMedia["media_type"] }) {
  if (type === "VIDEO") {
    return (
      <svg className="w-5 h-5" fill="white" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M8 5v14l11-7z" />
      </svg>
    );
  }
  if (type === "CAROUSEL_ALBUM") {
    return (
      <svg className="w-5 h-5" fill="none" stroke="white" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="14" height="14" rx="2" />
        <path d="M7 7h14v14H7z" />
      </svg>
    );
  }
  return null;
}

export default function InstagramFeed() {
  const [feed, setFeed] = useState<InstagramFeedResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/instagram")
      .then((res) => res.json())
      .then((data: InstagramFeedResponse) => {
        if (!cancelled) {
          setFeed(data);
          setLoading(false);
        }
      })
      .catch(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  if (loading) {
    return (
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2
            className="text-4xl md:text-5xl font-light text-gray-900 mb-2 text-center"
            style={{ fontFamily: "serif" }}
          >
            Latest from Instagram
          </h2>
          <p className="text-center text-gray-500 mb-12">{HANDLE}</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="aspect-square bg-gray-100 rounded-md animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (!feed || feed.status !== "ok" || feed.posts.length === 0) {
    return null;
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2
            className="text-4xl md:text-5xl font-light text-gray-900 mb-2"
            style={{ fontFamily: "serif" }}
          >
            Latest from Instagram
          </h2>
          <a
            href={IG_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-800 transition"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="text-sm">{HANDLE}</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 max-w-4xl mx-auto">
          {feed.posts.map((post) => {
            const src = post.media_type === "VIDEO" ? post.thumbnail_url ?? post.media_url : post.media_url;
            const captionSnip = post.caption?.split("\n")[0]?.slice(0, 90) ?? "";
            return (
              <a
                key={post.id}
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden rounded-md bg-gray-100 group focus:outline-none focus:ring-2 focus:ring-[#5a5f4e] focus:ring-offset-2"
                aria-label={`Instagram post${captionSnip ? ": " + captionSnip : ""}`}
              >
                {src && (
                  <Image
                    src={src}
                    alt={captionSnip || `Instagram post by ${HANDLE}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    unoptimized
                  />
                )}
                <div className="absolute top-2 right-2 z-10">
                  <MediaTypeIcon type={post.media_type} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                  <p className="text-white text-xs leading-snug line-clamp-3">
                    {captionSnip}
                    <span className="block text-white/70 text-[10px] mt-1">{relativeTime(post.timestamp)}</span>
                  </p>
                </div>
              </a>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <a
            href={IG_PROFILE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#5a5f4e] font-semibold hover:underline"
          >
            Follow {HANDLE} on Instagram
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
