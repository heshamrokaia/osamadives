# OsamaDives Conversation Summary - February 12, 2026

## What Was Done

### 1. Gallery Image Addition (81 images, now 78)
- Reviewed ~107 original images from `/Users/Hesham/Documents/🤿 Personal/OsamaDives/`
- Removed 34 duplicates using MD5 hash comparison
- Optimized all images (resized to max 1600px, compressed)
- Visually reviewed all 79 images and categorized into 7 folders:
  - `diving/` (22 → 19 after removing 3 screenshots)
  - `team/` (19 files)
  - `teaching/` (8 files)
  - `dahab/` (14 files)
  - `heritage/` (7 files)
  - `equipment/` (3 files)
  - `stories/` (8 files - underwater proposal series)
- Updated `src/lib/gallery-config.ts` with all photo metadata
- Enhanced gallery page with scroll-reveal animations, lightbox, category tabs

### 2. Mobile UI Fix
- Fixed lightbox text cutoff on mobile - story text was getting cut off at bottom of viewport
- Made lightbox container scrollable on mobile (`max-h-[90vh] overflow-y-auto`)
- Reduced mobile image height from `60vh` to `40vh` to leave room for story text
- Added responsive text sizing for hero section

### 3. Removed Ahmed Gabr Screenshots
- Identified and removed 3 images that were Instagram screenshots from `@ahmedgabrdiver`
- These were not Osama's photos - they were screenshots from Ahmed Gabr's Instagram showing him with many tanks
- Files removed: `whatsapp-image-2025-05-05-at-16.48.19.jpeg` (and -1, -2 variants)

### 4. Deployments
- All changes committed to GitHub (`heshamrokaia/osamadives`, main branch)
- Deployed to Vercel production: www.osamadives.com
- Key commits:
  - `6cb90db` - Add 81 gallery images with categories, animations, and lightbox
  - `e7a5449` - Fix mobile lightbox text cutoff and remove Ahmed Gabr screenshots

## Pending Tasks

### 1. Connect Vercel to GitHub Auto-Deploy
**Status**: Cannot be done via CLI - requires browser login to Vercel dashboard.

**Steps to do it yourself:**
1. Go to https://vercel.com/heshams-projects-0df70a0d/osamadives/settings/git
2. Click "Connect Git Repository"
3. Select GitHub → `heshamrokaia/osamadives`
4. Choose branch: `main`
5. Save

After this, every `git push` to main will automatically deploy to www.osamadives.com.

### 2. Google Drive Auto-Update Workflow for Images
**Recommended approach**: Google Drive Sync + GitHub Actions

#### Option A: Simple (Google Drive Desktop + Script)
1. Install Google Drive for Desktop on your Mac
2. Create folder: `Google Drive/OsamaDives/gallery-images/`
3. Create a shell script that:
   - Watches the Google Drive folder for new images
   - Optimizes them (resize, compress)
   - Copies to `osamadives/public/images/gallery/` with correct category
   - Updates `gallery-config.ts` with new entries
   - Commits and pushes to GitHub
   - If Vercel auto-deploy is connected, it deploys automatically

#### Option B: Cloud-Native (GitHub Actions + Google Drive API)
1. Upload images to a shared Google Drive folder
2. A GitHub Action runs periodically to:
   - Check Google Drive folder for new images via API
   - Download new images
   - Optimize and add to the repo
   - Auto-commit and deploy

#### Option C: Simplest (Just use Claude Code from anywhere)
- SSH into your Mac from anywhere (set up remote access)
- Or use GitHub Codespaces with the repo
- Chat with Claude Code to add images just like we did today

**Recommendation**: Option A is the most practical. You need Google Drive Desktop installed, which syncs files locally, then a script processes them.

## Project Technical Details
- **Local path**: `/Users/Hesham/Documents/DiveWithLocals/osamadives`
- **GitHub**: `heshamrokaia/osamadives` (public, main branch)
- **Vercel project**: `heshams-projects-0df70a0d/osamadives`
- **Domain**: www.osamadives.com (also osamadives.vercel.app)
- **GA4**: G-0EV09WQHZF (env var in Vercel)
- **Node version**: 20 required (18.16 fails, need >= 18.17)
- **Deploy command**: `vercel --prod --yes` (manual, not connected to Git)
- **Framework**: Next.js 14.2.35

## Key Files
- `src/app/gallery/page.tsx` - Gallery page with lightbox, categories, tabs
- `src/lib/gallery-config.ts` - All gallery photo metadata
- `src/lib/facebook-content.ts` - Facebook stories/posts content
- `src/components/FloatingBadge.tsx` - Heritage badge component
- `src/components/FacebookGalleryItem.tsx` - Story card component
- `src/components/StoriesLightbox.tsx` - Stories lightbox component
- `src/app/page.tsx` - Homepage with hero, about, experiences, contact
- `public/images/gallery/` - All gallery images in category folders

## Gallery Categories & Counts
| Category | Folder | Count | Label |
|----------|--------|-------|-------|
| diving | diving/ | 19 | Deep Blue |
| team | team/ | 19 | The Dive Team |
| teaching | teaching/ | 8 | Teaching & Training |
| dahab | dahab/ | 14 | Life in Dahab |
| heritage | heritage/ | 7 | Heritage |
| equipment | equipment/ | 3 | Gear & Equipment |
| stories | stories/ | 8 | Stories |
| underwater | (original) | varies | Underwater |
| marine-life | (original) | varies | Marine Life |
| dive-sites | (original) | varies | Dive Sites |
| training | (original) | varies | Training |
| adventures | (original) | varies | Adventures |

## Lesson Learned
- Always commit and push to Git before/after deploying to Vercel
- The Vercel project does NOT have auto-deploy from GitHub (needs manual setup in dashboard)
- Screenshot images from other people's social media should not be included in the gallery
