# OsamaDives — what's left

Living checklist of outstanding work on the site. Tick items as Osama or Hesham completes them.

Last updated: 2026-05-19

---

## Hottest open item (do this when you have 20 quiet minutes)

- [ ] **Wire up Instagram auto-sync.** Code is shipped. Follow [INSTAGRAM_SETUP.md](INSTAGRAM_SETUP.md) — convert IG → Business, link to osamasharks FB Page, create a Meta dev app, paste two env vars into Vercel. Section appears automatically once both vars are set. Tokens expire every 60 days → calendar reminder needed.

## The blocker (do these before any more SEO work)

The site has **0 external backlinks**. Without inbound links, Google won't crawl the new pages deeply or rank them broadly. None of these are technical — they need someone to act in third-party UIs:

- [x] **Add `osamadives.com` to a Facebook Page** — DONE 2026-05-20. New Page created at [facebook.com/osamadives](https://www.facebook.com/osamadives). Website link live in the Page intro. First external backlink secured.
- [x] **Profile picture + cover photo for the new Page** — DONE 2026-05-20. Portrait + homepage hero uploaded.
- [x] **Invite Osama as co-admin on the new Page** — DONE 2026-05-20. Task access (all 5 toggles on). **Invite expires ~2026-06-19** — Osama needs to accept on his Facebook within 30 days. Remind him if no acceptance after a week.
- [ ] **Share `facebook.com/osamadives` from Osama's personal profile** so his ~1,900 friends can find/like it.
- [ ] **Add `osamadives.com` to Osama's Instagram bio** — instagram.com/osama_mohamed_hassan → Edit profile → Website.
- [ ] **TripAdvisor instructor listing for Osama.** Status as of 2026-05-19 is unclear — Hesham thinks one was started. Check `heshamrokaia@gmail.com` for any TripAdvisor verification emails. If nothing, create new at tripadvisor.com/Owners → Things to Do → Add a listing.
- [ ] **GetYourGuide / Viator** — both let local guides list themselves with a clickable website URL.
- [ ] **PADI Pro Finder** — Osama's professional profile can include `osamadives.com` if his PADI status is current.
- [ ] **Google Business Profile** — verify by postcard at the Dahab address. Unlocks the "Dahab diving" map pack which is the highest-volume entry point.

Once 2-3 of those are live, expect to see new pages indexed within 1-2 weeks.

---

## SEO follow-ups (after the backlinks)

- [ ] Add more dive sites: Bells, Three Pools+Bells route, Abu Galum (camel ride dive), Ras Abu Galum, Ricks Reef, Caves
- [ ] Add a `/courses/` route with one page per PADI course (Open Water, Advanced, Rescue, Divemaster, Tec40, Sidemount)
- [ ] Open Graph image per page (currently using a single shared image)
- [ ] Add structured-data `Service` schema to the homepage diving experiences
- [ ] Re-check Google Search Console weekly: are /dive-sites and /dive-sites/blue-hole-dahab indexed yet? When they are, request indexing for the remaining 4 dive site pages

---

## Content backlog (Facebook media Hesham shared 2026-05-19)

These are media URLs on Osama's Facebook page that could be featured on the site. Decide later which to embed/download:

- facebook.com/osamasharks/videos/10220332411484518/
- facebook.com/osamasharks/videos/765270361193989/
- facebook.com/osamasharks/videos/310802650948368/
- facebook.com/osamasharks/photo.php?fbid=10209928138384193
- facebook.com/reel/142922968896951

Plus the verified strong content already known:

- Instagram reel `instagram.com/reel/DRNbGQLjGwb/` — Osama in sidemount/technical diving configuration. Strong credibility shot if added to the hero or gallery.

---

## Analytics + measurement

- [x] Google Analytics 4 wired (`G-0EV09WQHZF`)
- [x] Vercel Web Analytics installed (2026-05-19) — no toggle needed, auto-activates on first hit
- [x] Google Search Console connected for `https://www.osamadives.com/`
- [ ] Set up a monthly review cadence — open GA + GSC together, compare growth

---

## How to pick this up next session

In any future Claude chat, just say "what's the status of osamadives?" — the project memory at `~/.claude/projects/-Users-Hesham/memory/project_osamadives.md` is loaded automatically and includes the full state. Or read this file directly.
