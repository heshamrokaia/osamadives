"use client";

import Link from "next/link";
import * as gtag from "@/lib/gtag";

type Variant = "hero" | "inline";

interface Props {
  variant?: Variant;
}

export default function GuestReviewsRibbon({ variant = "hero" }: Props) {
  const baseClasses =
    "group inline-flex items-center gap-2 sm:gap-3 px-4 py-2 rounded-full backdrop-blur-md border transition-colors";

  const variantClasses =
    variant === "hero"
      ? "bg-white/10 hover:bg-white/15 border-white/20 text-white/90"
      : "bg-black/5 hover:bg-black/10 border-black/10 text-[#3a3f33]";

  const chevronColor = variant === "hero" ? "text-white/60" : "text-black/40";

  return (
    <Link
      href="#featured-review"
      className={`${baseClasses} ${variantClasses}`}
      aria-label="Read what guests say about diving with Osama - jump to the verified Google review"
      onClick={() =>
        gtag.event({
          action: "cta_click",
          category: "engagement",
          label: "hero_guest_reviews_ribbon",
        })
      }
    >
      <svg
        className="w-4 h-4 shrink-0"
        fill="#FBBC05"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.539 1.118l-3.37-2.448a1 1 0 00-1.176 0l-3.37 2.448c-.783.57-1.838-.197-1.539-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.05 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.957z" />
      </svg>
      <span className="text-xs sm:text-sm font-medium tracking-wide whitespace-nowrap">
        <span className="sm:hidden">5.0 Guest reviews</span>
        <span className="hidden sm:inline">
          <span className="font-semibold">5.0</span> &middot; Verified guest reviews
        </span>
      </span>
      <span
        className={`text-base leading-none transition-transform group-hover:translate-x-0.5 ${chevronColor}`}
        aria-hidden="true"
      >
        ›
      </span>
    </Link>
  );
}
