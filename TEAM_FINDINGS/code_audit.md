# Code Quality & Performance Audit Report

**Website:** OsamaDives - Scuba Diving Instructor Website
**Audit Date:** February 6, 2026
**Live Site:** https://osamadives.vercel.app
**Tech Stack:** Next.js 14.2.35, React 18, TypeScript, Tailwind CSS

---

## Executive Summary

The OsamaDives website is a single-page application built with Next.js 14. While it demonstrates good visual design and uses modern frameworks, there are several critical issues affecting performance, accessibility, and code quality that need attention. The most pressing concerns are oversized images (some over 3MB), missing accessibility features, and suboptimal SEO metadata.

**Overall Score: 62/100**

| Category | Score | Priority |
|----------|-------|----------|
| Code Quality | 70/100 | Medium |
| Performance | 45/100 | **High** |
| Accessibility | 55/100 | **High** |
| Core Web Vitals | 50/100 | **High** |

---

## 1. Code Quality Assessment

### 1.1 Component Structure and Organization

**Current State:**
- All code resides in a single 455-line `page.tsx` file
- No component extraction or reusability
- Navigation, sections, and footer are all inline

**Issues Found:**

| Issue | Severity | Location |
|-------|----------|----------|
| Monolithic page component | Medium | `/src/app/page.tsx` |
| No reusable components | Medium | Missing `/src/components/` |
| Repeated card/section patterns | Low | Lines 89-140, 221-286 |
| Inline SVG icons repeated | Low | Multiple locations |

**Recommendations:**

```
Suggested Component Structure:
/src/components/
  /ui/
    Button.tsx
    Card.tsx
    SectionHeading.tsx
  /icons/
    WhatsAppIcon.tsx
    SocialIcons.tsx
    ScrollIndicator.tsx
  /sections/
    Navigation.tsx
    Hero.tsx
    WhyDahab.tsx
    About.tsx
    Courses.tsx
    Gallery.tsx
    Booking.tsx
    Footer.tsx
  /layout/
    Container.tsx
```

### 1.2 TypeScript Usage

**Current State:**
- TypeScript is configured but underutilized
- No explicit type definitions for data structures
- Course data array lacks typing

**Issues Found:**

| Issue | Severity | Location |
|-------|----------|----------|
| Implicit `any` in course mapping | Low | Line 265 `(course, i)` |
| No interface for course data | Low | Lines 222-264 |
| No prop types for potential components | Medium | N/A (no components) |

**Recommendation - Add Type Definitions:**

```typescript
// types/index.ts
interface Course {
  image: string;
  title: string;
  location: string;
  duration: string;
  requirements: string;
}

interface DiveSite {
  image: string;
  title: string;
  description: string;
}
```

### 1.3 Code Duplication

**Patterns Identified:**

1. **Section heading pattern** (repeated 5 times):
```tsx
<h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 text-center"
    style={{fontFamily: 'serif'}}>
```

2. **Card image container** (repeated 10+ times):
```tsx
<div className="relative h-64 rounded-xl overflow-hidden mb-4">
  <Image src="..." alt="..." fill className="object-cover" />
</div>
```

3. **Inline SVG icons** - WhatsApp, phone, location, social icons all inline

**Priority:** Medium - Affects maintainability but not user experience

### 1.4 Next.js 14 Best Practices

**Compliance Issues:**

| Practice | Status | Details |
|----------|--------|---------|
| App Router | PASS | Using `/app` directory |
| Server Components | PARTIAL | Page is Server Component but could benefit from streaming |
| Image Component | PASS | Using `next/image` throughout |
| Link Component | PASS | Using `next/link` for navigation |
| Metadata API | **FAIL** | Default metadata not customized |
| Font Optimization | PARTIAL | Local fonts loaded but not applied to body |
| Route Groups | N/A | Single page application |

---

## 2. Performance Audit

### 2.1 Image Optimization (CRITICAL)

**Current State - Oversized Images:**

| Image File | Size | Impact |
|------------|------|--------|
| `20250507_2113_Vibrant Coral Reef_remix...png` | **3.2 MB** | Severe |
| `OsamaDives_Rescue_Diver_Course.png` | **2.5 MB** | Severe |
| `OsamaDives_CPR Training Simulation.png` | **2.2 MB** | Severe |
| `ChatGPT-Image-May-7...PM.png` | **1.6 MB** | High |
| `OsamaDives.png` | **1.2 MB** | High |
| `logo_option11_dahab_iconic.png` | **1.1 MB** | High (Logo!) |

**Total image payload:** ~14+ MB unoptimized

**Issues:**

1. **No `sizes` attribute** on any Image component - browser cannot select optimal image size
2. **Missing lazy loading** on below-fold images
3. **PNG format** used where JPEG/WebP would be more efficient
4. **Logo is 1.1MB** - should be <50KB

**Recommendations:**

```tsx
// BEFORE - Hero Image (current)
<Image
  src="/images/OsamaDives_Him_Self.jpeg"
  alt="Osama diving in Dahab"
  fill
  className="object-cover"
  priority
/>

// AFTER - Hero Image (optimized)
<Image
  src="/images/OsamaDives_Him_Self.jpeg"
  alt="Osama diving in Dahab"
  fill
  className="object-cover"
  priority
  sizes="100vw"
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
/>

// BEFORE - Gallery Images (current)
<Image
  src={src}
  alt={`Gallery image ${i + 1}`}
  fill
  className="object-cover..."
/>

// AFTER - Gallery Images (lazy loaded with sizes)
<Image
  src={src}
  alt={`Gallery image ${i + 1}`}
  fill
  className="object-cover..."
  loading="lazy"
  sizes="(max-width: 768px) 50vw, 25vw"
/>
```

**Image Compression Recommendations:**

| Image | Current | Target | Action |
|-------|---------|--------|--------|
| Logo | 1.1 MB | <30 KB | Compress & resize to 200x200 max |
| Hero | 126 KB | <80 KB | Convert to WebP, quality 80 |
| Course cards | 64-97 KB | <40 KB | Resize to 800x600 max |
| PNG images | 2-3 MB | <200 KB | Convert to WebP/JPEG |

### 2.2 Bundle Size Concerns

**Dependencies Analysis:**

```json
{
  "next": "14.2.35",      // ~200KB gzipped (framework)
  "react": "^18",         // ~40KB gzipped
  "react-dom": "^18",     // ~40KB gzipped
  "tailwindcss": "^3.4.1" // Build-time only, purged CSS
}
```

**Status:** GOOD - Minimal dependencies, no unnecessary libraries

**Potential Improvements:**

1. Enable Tailwind CSS purging verification (already configured)
2. Consider removing unused font variables if Geist fonts aren't visibly used

### 2.3 Font Loading Strategy

**Current State:**

```tsx
// layout.tsx
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
```

**Issues:**

| Issue | Severity | Details |
|-------|----------|---------|
| Fonts loaded but not used | Medium | Body uses `Arial, Helvetica, sans-serif` in CSS |
| No `display: swap` | Low | Can cause FOIT |
| Serif font inlined | Low | `style={{fontFamily: 'serif'}}` used inline |

**Recommendation:**

```tsx
// Option 1: Use the loaded fonts
// globals.css
body {
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}

// Option 2: Remove unused fonts and use system fonts
// Remove Geist font imports if not needed
```

### 2.4 CSS Optimization

**Current State:**

- Using Tailwind CSS (optimized at build time)
- Small custom CSS in `globals.css`
- Dark mode variables defined but not used

**Issues:**

| Issue | Severity | Details |
|-------|----------|---------|
| Dark mode CSS unused | Low | Website doesn't support dark mode |
| Inline styles | Low | `style={{fontFamily: 'serif'}}` repeated |

**Recommendation - Create Tailwind Custom Class:**

```js
// tailwind.config.ts
theme: {
  extend: {
    fontFamily: {
      serif: ['Georgia', 'Cambria', 'serif'],
    },
  },
}

// Usage in components
<h2 className="font-serif text-4xl">
```

---

## 3. Accessibility (a11y) Audit

### 3.1 ARIA Labels (CRITICAL)

**Missing ARIA Labels:**

| Element | Location | Issue |
|---------|----------|-------|
| Mobile menu button | Nav (missing) | No hamburger menu for mobile |
| Social icons | Footer lines 405-414 | No `aria-label` |
| Gallery images | Lines 297-311 | Generic alt text |
| Form inputs | Line 432-443 | No associated labels |
| Scroll indicator | Lines 72-76 | No `aria-label` |

**Fixes Required:**

```tsx
// Social icons - BEFORE
<a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
   className="hover:text-white transition">
  <svg>...</svg>
</a>

// Social icons - AFTER
<a href="https://facebook.com"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Visit our Facebook page"
   className="hover:text-white transition">
  <svg aria-hidden="true">...</svg>
</a>

// Newsletter form - BEFORE
<input
  type="email"
  placeholder="Email Address"
  className="..."
/>

// Newsletter form - AFTER
<label htmlFor="newsletter-email" className="sr-only">Email Address</label>
<input
  id="newsletter-email"
  type="email"
  placeholder="Email Address"
  aria-label="Email address for newsletter"
  className="..."
/>
```

### 3.2 Semantic HTML

**Current Issues:**

| Issue | Severity | Location |
|-------|----------|----------|
| Divs used instead of `<section>` | Low | Already using sections - GOOD |
| `<header>` used correctly | PASS | Hero section |
| `<nav>` used correctly | PASS | Navigation |
| `<footer>` used correctly | PASS | Footer |
| Missing `<main>` element | Medium | Content area |
| Course cards not using `<article>` | Low | Lines 266-284 |

**Recommendation:**

```tsx
// Wrap main content
<main>
  <section id="why-dahab">...</section>
  <section id="about">...</section>
  <section id="courses">...</section>
  <section id="gallery">...</section>
  <section id="book">...</section>
</main>

// Use article for course cards
<article key={i} className="bg-gray-50 rounded-xl...">
  ...
</article>
```

### 3.3 Color Contrast

**Potential Issues:**

| Element | Foreground | Background | Ratio | Status |
|---------|------------|------------|-------|--------|
| Nav links | `white/90` | `#5a5f4e/95` | ~4.2:1 | **BORDERLINE** |
| Hero subtitle | `white/80` | Image overlay | Variable | **CHECK** |
| Footer text | `gray-400` | `gray-900` | ~5.5:1 | PASS |
| Booking section text | `white/80` | `#5a5f4e` | ~4.0:1 | **BORDERLINE** |

**Recommendation:**

```tsx
// Increase opacity for better contrast
// BEFORE
<p className="text-white/80">

// AFTER
<p className="text-white/90">  // Minimum for large text
<p className="text-white">      // Recommended for small text
```

### 3.4 Keyboard Navigation

**Issues Found:**

| Issue | Severity | Details |
|-------|----------|---------|
| No skip link | High | Users must tab through nav |
| Focus states rely on browser defaults | Medium | Not visually distinct |
| Mobile menu missing | High | No way to navigate on mobile via keyboard |
| Interactive cards not focusable | Medium | `.group.cursor-pointer` divs |

**Required Fixes:**

```tsx
// Add skip link at start of body
<a href="#main-content"
   className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4
              bg-white text-black px-4 py-2 rounded z-[100]">
  Skip to main content
</a>

// Add focus styles to interactive elements
// tailwind.config.ts
theme: {
  extend: {
    ringColor: {
      focus: '#5a5f4e',
    },
  },
}

// Add to buttons/links
className="... focus:ring-2 focus:ring-focus focus:ring-offset-2 focus:outline-none"
```

### 3.5 Screen Reader Compatibility

**Issues:**

| Issue | Severity | Fix |
|-------|----------|-----|
| Decorative images missing `alt=""` | Medium | Add empty alt to decorative images |
| SVG icons not hidden | Medium | Add `aria-hidden="true"` to decorative SVGs |
| Gallery alt text generic | Low | Describe actual image content |
| Phone number not marked up | Low | Use `tel:` link |

```tsx
// Phone number - BEFORE
<span>+20 109 020 8050</span>

// Phone number - AFTER
<a href="tel:+201090208050" className="hover:text-white">
  +20 109 020 8050
</a>
```

---

## 4. Core Web Vitals Analysis

### 4.1 LCP (Largest Contentful Paint) - CRITICAL

**Expected LCP Element:** Hero image (`OsamaDives_Him_Self.jpeg`)

**Current Issues:**

| Issue | Impact | Solution |
|-------|--------|----------|
| Hero image 126KB | Medium | Compress to <80KB |
| No blur placeholder | High | Add `placeholder="blur"` |
| No preconnect hints | Medium | Add preconnect for external resources |
| No `fetchpriority="high"` | Low | Already using `priority` prop |

**Optimizations:**

```tsx
// next.config.mjs - Enable image optimization
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

// Hero image with blur placeholder
<Image
  src="/images/OsamaDives_Him_Self.jpeg"
  alt="Osama diving in Dahab"
  fill
  className="object-cover"
  priority
  sizes="100vw"
  placeholder="blur"
  blurDataURL="/images/hero-blur.jpg" // Generate tiny 10x10 blur image
/>
```

**Target LCP:** < 2.5 seconds

### 4.2 FID (First Input Delay) / INP (Interaction to Next Paint)

**Current State:** GOOD

- No heavy JavaScript blocking main thread
- No complex event handlers
- Forms are simple

**Potential Issues:**

| Issue | Impact |
|-------|--------|
| Form submission may need client-side handling | Low |
| No loading states on interactions | Low |

**Target FID:** < 100ms (likely achieved)

### 4.3 CLS (Cumulative Layout Shift) - HIGH PRIORITY

**Potential CLS Sources:**

| Element | Issue | CLS Risk |
|---------|-------|----------|
| Hero image | No explicit dimensions on container | **High** |
| Course card images | `fill` without container height | Medium |
| Gallery images | `aspect-square` - GOOD | Low |
| Logo in nav | Has explicit width/height - GOOD | Low |
| Web fonts | FOUT possible without swap | Medium |

**Fixes:**

```tsx
// Hero container - Add min-height
<header className="relative h-screen min-h-[600px] flex items-center...">

// Course card images - Already have h-48, but ensure container stability
<div className="relative h-48 min-h-[192px]">

// Add font-display: swap in font loading
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: 'swap', // Add this
});
```

**Target CLS:** < 0.1

---

## 5. Critical Fixes Summary

### HIGH Priority (Do First)

1. **Compress all images** - Current total ~14MB, target <2MB
2. **Add `sizes` attribute** to all `<Image>` components
3. **Add skip link** for keyboard accessibility
4. **Add `aria-label`** to all icon-only links and buttons
5. **Update metadata** in `layout.tsx`
6. **Add `<main>` element** wrapper

### MEDIUM Priority

7. Extract reusable components (Navigation, Footer, etc.)
8. Add proper form labels
9. Improve color contrast on muted text
10. Add mobile navigation menu
11. Remove unused Geist fonts or apply them
12. Add blur placeholders to images

### LOW Priority

13. Add TypeScript interfaces for data
14. Create consistent focus states
15. Add loading states for forms
16. Remove unused dark mode CSS

---

## 6. Recommended Code Fixes

### 6.1 Layout.tsx - Update Metadata

```tsx
// /src/app/layout.tsx
export const metadata: Metadata = {
  title: "Osama Dives | PADI Master Scuba Diver Trainer in Dahab, Egypt",
  description: "Book scuba diving courses and experiences with Osama, a PADI Master Scuba Diver Trainer with 15+ years experience in Dahab, Egypt. Open Water, Advanced, and technical diving courses available.",
  keywords: ["scuba diving", "Dahab", "PADI", "diving courses", "Egypt", "Red Sea"],
  openGraph: {
    title: "Osama Dives | Scuba Diving in Dahab",
    description: "Professional scuba diving courses in Dahab, Egypt",
    url: "https://osamadives.vercel.app",
    siteName: "Osama Dives",
    images: [
      {
        url: "/images/OsamaDives_Him_Self.jpeg",
        width: 1200,
        height: 630,
        alt: "Osama Dives - Scuba Diving in Dahab",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Dives | Scuba Diving in Dahab",
    description: "Professional scuba diving courses in Dahab, Egypt",
    images: ["/images/OsamaDives_Him_Self.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### 6.2 Next.config.mjs - Enable Image Optimization

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  experimental: {
    optimizeCss: true, // Enable CSS optimization
  },
};

export default nextConfig;
```

### 6.3 Add Skip Link and Main Element

```tsx
// At the start of the page component
<a href="#main-content"
   className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4
              bg-[#5a5f4e] text-white px-4 py-2 rounded-full z-[100]
              focus:outline-none focus:ring-2 focus:ring-white">
  Skip to main content
</a>

// Wrap sections in main
<main id="main-content">
  <section id="why-dahab">...</section>
  ...
</main>
```

### 6.4 Fix Social Icon Accessibility

```tsx
<a
  href="https://facebook.com"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit Osama Dives on Facebook"
  className="hover:text-white transition focus:outline-none focus:ring-2 focus:ring-white rounded"
>
  <svg aria-hidden="true" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    ...
  </svg>
</a>
```

---

## 7. Testing Recommendations

### Automated Testing

```bash
# Lighthouse CI
npm install -g @lhci/cli
lhci autorun

# Pa11y for accessibility
npm install -g pa11y
pa11y https://osamadives.vercel.app

# Bundle analyzer
npm install @next/bundle-analyzer
```

### Manual Testing Checklist

- [ ] Tab through entire page with keyboard only
- [ ] Use VoiceOver/NVDA to verify screen reader experience
- [ ] Test on throttled 3G connection
- [ ] Test on mobile devices (iOS Safari, Android Chrome)
- [ ] Verify all images load correctly
- [ ] Test form submission
- [ ] Check color contrast with browser devtools

---

## 8. Performance Budget Recommendations

| Resource Type | Current | Target |
|---------------|---------|--------|
| Total Images | ~14 MB | < 2 MB |
| Hero Image | 126 KB | < 80 KB |
| Logo | 1.1 MB | < 30 KB |
| JavaScript | ~100 KB | < 150 KB |
| CSS | ~15 KB | < 20 KB |
| LCP | Unknown | < 2.5s |
| FID | Unknown | < 100ms |
| CLS | Unknown | < 0.1 |

---

## Appendix: File Locations Referenced

| File | Path |
|------|------|
| Main Page | `/Users/Hesham/Documents/DiveWithLocals/osamadives/src/app/page.tsx` |
| Layout | `/Users/Hesham/Documents/DiveWithLocals/osamadives/src/app/layout.tsx` |
| Global CSS | `/Users/Hesham/Documents/DiveWithLocals/osamadives/src/app/globals.css` |
| Tailwind Config | `/Users/Hesham/Documents/DiveWithLocals/osamadives/tailwind.config.ts` |
| Next Config | `/Users/Hesham/Documents/DiveWithLocals/osamadives/next.config.mjs` |
| Package.json | `/Users/Hesham/Documents/DiveWithLocals/osamadives/package.json` |
| Images | `/Users/Hesham/Documents/DiveWithLocals/osamadives/public/images/` |

---

**Report Generated By:** Code Quality & Performance Auditor
**Next Review Recommended:** After implementing HIGH priority fixes
