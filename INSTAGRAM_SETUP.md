# Instagram auto-sync setup — one-time, ~20 minutes

This wires Osama's Instagram (`@osama_mohamed_hassan`) into the site's "Latest from Instagram" section. Code is already shipped — this is the Meta-side setup.

You'll come out of this with two values to paste into Vercel:
- `IG_USER_ID` — Osama's Instagram Business Account ID (a long number)
- `IG_ACCESS_TOKEN` — a long-lived access token (valid 60 days)

The section is currently hidden on the site. It will turn on automatically once both env vars are set.

---

## Step 1 — Convert Osama's Instagram to a Business or Creator account

On Osama's phone (the account holder must do this, not you):

1. Open Instagram → Profile → ☰ menu → Settings → For professionals → **Switch to professional account**
2. Pick category: **Local Service** or **Travel & Tourism** (either works)
3. Pick **Business** (gives more API access than Creator)
4. Skip the contact info screen if you don't want it public

This is free, doesn't lose followers, doesn't notify anyone. It does add an "Insights" tab to his profile.

---

## Step 2 — Connect Osama's Instagram to the Shark Restaurant Facebook page

The Meta Graph API only reaches Instagram accounts that are linked to a Facebook page you control.

1. Go to [business.facebook.com](https://business.facebook.com) — log in as the admin of `facebook.com/osamadives`
2. Left sidebar → **Accounts → Instagram accounts**
3. Click **Add** → log into Osama's Instagram
4. **Settings → Pages → osamadives → Connect Instagram** → confirm

Verify by opening osamadives's settings; under "Instagram" you should see `@osama_mohamed_hassan` listed.

---

## Step 3 — Create a Meta for Developers app

1. Go to [developers.facebook.com/apps](https://developers.facebook.com/apps) → log in with the same Facebook account that admins osamadives
2. Click **Create App** → use case: **Other** → app type: **Business**
3. Name it whatever — "OsamaDives Web", "Site Feed", anything
4. On the dashboard left sidebar, click **Add product** and add **Instagram Graph API**
5. Find **App settings → Basic** → note your **App ID** (you'll need it briefly)

---

## Step 4 — Get a long-lived access token + the Instagram User ID

The easiest path is through Meta's Graph API Explorer:

1. Open [developers.facebook.com/tools/explorer](https://developers.facebook.com/tools/explorer)
2. Top right: select your app from the **Meta App** dropdown
3. Click **Generate Access Token** → log in → grant ALL of these permissions:
   - `instagram_basic`
   - `instagram_manage_insights` (optional but useful)
   - `pages_show_list`
   - `business_management`
   - `pages_read_engagement`
4. Copy the **short-lived token** that appears in the box. It looks like `EAAxxxxx...` and is hundreds of characters long.

Now exchange it for a long-lived (60-day) token. Paste this into a terminal, replacing the three values:

```bash
curl -i -X GET "https://graph.facebook.com/v18.0/oauth/access_token?grant_type=fb_exchange_token&client_id=YOUR_APP_ID&client_secret=YOUR_APP_SECRET&fb_exchange_token=YOUR_SHORT_LIVED_TOKEN"
```

(App secret is in App settings → Basic, click **Show**.)

The response includes the long-lived token. **Copy it — this is `IG_ACCESS_TOKEN`.**

Now get the Instagram User ID. With the long-lived token, run:

```bash
curl -i -X GET "https://graph.facebook.com/v18.0/me/accounts?access_token=YOUR_LONG_LIVED_TOKEN"
```

You'll see a list of pages. Find `osamadives` and note its `id`. Now:

```bash
curl -i -X GET "https://graph.facebook.com/v18.0/PAGE_ID?fields=instagram_business_account&access_token=YOUR_LONG_LIVED_TOKEN"
```

The response contains `instagram_business_account.id` — that's a 17-digit number. **Copy it — this is `IG_USER_ID`.**

---

## Step 5 — Paste both into Vercel

1. Go to [vercel.com/heshams-projects-0df70a0d/osamadives/settings/environment-variables](https://vercel.com/heshams-projects-0df70a0d/osamadives/settings/environment-variables)
2. Add a new variable:
   - Key: `IG_ACCESS_TOKEN`
   - Value: the long-lived token from Step 4
   - Environments: tick **Production**, **Preview**, and **Development**
3. Add another:
   - Key: `IG_USER_ID`
   - Value: the 17-digit number from Step 4
   - Same environments
4. Save. Vercel will automatically redeploy.

Within 2-3 minutes you should see "Latest from Instagram" appear on `www.osamadives.com` between the gallery and the contact section.

---

## Step 6 — The 60-day refresh (calendar reminder)

The long-lived token expires every 60 days. **Set a recurring calendar reminder for 50 days from setup day.** When it fires:

1. Run this curl to get a new 60-day token:

```bash
curl -i -X GET "https://graph.facebook.com/v18.0/refresh_access_token?grant_type=ig_refresh_token&access_token=YOUR_CURRENT_LONG_LIVED_TOKEN"
```

2. Paste the new token into Vercel env vars (replacing the old `IG_ACCESS_TOKEN`)
3. Done. The feed continues uninterrupted.

If you forget for too long and it expires, the feed section will hide itself automatically. No broken-looking page. Just re-run steps 4-5 to recover.

---

## What you can't do

- You can't auto-refresh the token from Vercel without setting up Vercel KV + a cron job. That's a v2 enhancement. For now, 50-day calendar reminder is the simplest path.
- You can't pull other people's Instagram feeds — only accounts you admin via a linked FB page.
- Reels show up in the API as `media_type: VIDEO` with a thumbnail. The site shows the thumbnail with a play icon. Clicking opens the reel on Instagram (full audio, etc.).

---

## What was built code-side

- `src/lib/instagram.ts` — Meta Graph API fetch helper, types, error handling
- `src/app/api/instagram/route.ts` — server-side cached endpoint, 6h ISR + 24h SWR
- `src/components/InstagramFeed.tsx` — 9-post grid with hover captions + video/carousel icons; auto-hides if no token
- `src/app/page.tsx` — embedded between Gallery and Contact sections

If you ever want to remove the section, comment out the `<InstagramFeed />` line in `src/app/page.tsx`. The rest is dormant code, costs nothing.
