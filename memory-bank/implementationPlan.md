# Implementation Plan

*Detailed technical implementation plan for performance optimization and layout restructuring. Note: Phase 1 is complete. Phase 2 has been largely addressed through iterative styling and content updates rather than a full restructure.*

## Phase 1: Critical Performance Fixes (Days 1-2) - COMPLETED ✅

### **1.1 Next.js Configuration Updates - COMPLETED** ✅

**File: `next.config.mjs`**
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false, // Ensuring linter runs during build
  },
  typescript: {
    ignoreBuildErrors: false, // Ensuring TS errors are caught during build
  },
  images: {
    unoptimized: false, // Optimization enabled
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Performance optimizations
  poweredByHeader: false,
  compress: true,
}

export default nextConfig
```

### **1.2 Font Optimization Setup - COMPLETED** ✅

**File: `app/layout.tsx`**
```typescript
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

// Optimize fonts with subsetting and display strategies
const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
})

export const metadata: Metadata = {
  title: 'Classic Watch Repair HK - Watch Band Restoration',
  description: 'Professional watch band restoration for luxury timepieces. 20+ years experience, 50,000+ bands restored.',
  generator: 'CUSP Growth',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-HK" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preload" href="/images/hero.webp" as="image" />
        <link rel="preconnect" href="https://wa.me" />
      </head>
      <body className="font-inter">{children}</body>
    </html>
  )
}
```

### **1.3 Hero Section Performance Optimization - COMPLETED** ✅

**File: `components/hero-section.tsx`**
```typescript
import Image from "next/image"
import Link from "next/link"
import { ScrollHandler } from "./scroll-handler" // Separate client component

interface HeroSectionProps {
  whatsappLink: string
}

export default function HeroSection({ whatsappLink }: HeroSectionProps) {
  return (
    <div className="relative pt-48 pb-12 bg-black xl:pt-60 sm:pb-16 lg:pb-32 xl:pb-48 2xl:pb-56">
      {/* Header - Server Component */}
      <ScrollHandler whatsappLink={whatsappLink} />

      {/* Optimized Background Image */}
      <div className="absolute inset-0">
        <Image 
          src="/images/hero.webp" 
          alt="豪華手錶錶帶系列" 
          fill 
          sizes="100vw"
          className="object-cover brightness-50" 
          priority 
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/60"></div>
      </div>

      {/* Hero Content - Rest remains the same */}
      {/* ... */}
    </div>
  )
}
```

## Phase 2: Styling, Content & Minor Layout Enhancements (Ongoing - Iterative)

*This phase focuses on refining the UI, copy, and component presentation based on user feedback, rather than a complete section overhaul as originally planned. The case-restoration site serves as a visual and structural guide.*

### **Recent Key Changes (Examples):**
- **Hero Section (`components/hero-section.tsx`)**:
    - H1 size adjustments (mobile: `text-3xl`, tablet: `sm:text-6xl`, desktop: `lg:text-8xl`).
    - Subtitle text contrast improvements (using `text-neutral-lightest` and `text-opacity-90`).
    - Left column width increased to `w-[60%]`.
    - H1 sub-line "重拾原廠氣派，經典再現。" bolded.
- **Image Compare Slider (`components/image-compare-slider.tsx`)**:
    - Implemented new images: `/image-compare-slider-before.webp` and `/image-compare-slider-after.webp`.
    - Changed aspect ratio to `3/2` and `object-fit` to `cover` for better presentation.
- **WhatsApp Widget (`components/WhatsappChatWidget.tsx`)**: Logo updated to `/cwr-whatsapp-logo.webp`.
- **"Why Choose Us" Section (`app/page.tsx`)**: Updated one item to feature "「錶帶魔術師」Michael Young".
- **Testimonials Section (`components/testimonials-section.tsx`)**: Updated names and content for testimonials.
- **Brand Carousel (`components/brand-carousel.tsx`, `app/page.tsx`)**: Spacing adjusted, title removed, enabled edge-to-edge scroll.
- **General Button Styling**: Standardized across the site.

### **Style Alignment with Case-Restoration (Ongoing Guide)**
- **Color Scheme**: Existing scheme is in use, adjustments made as needed for contrast and appeal.
- **Typography**: Inter and Playfair Display are primary fonts.
- **Component Styling**: Iterative refinements to match user expectations and improve clarity.

### **Component Checklist (Current State - Most components exist and are being refined)**
- `components/hero-section.tsx` (Previously `hero-section-optimized.tsx`) - Actively refined.
- `components/loose-vs-right-fit.tsx` (Addresses Problem/Solution aspects) - Actively refined.
- `components/image-compare-slider.tsx` (Previously `before-after-gallery`) - Actively refined.
- `components/testimonials-section.tsx` (Addresses Trust & Credibility) - Actively refined.
- `components/brand-carousel.tsx` (Previously `ServiceBrands`, addresses Brand Expertise) - Actively refined.
- `components/restoration-process.tsx` (Addresses Process Overview) - Exists, minor refinements if needed.
- Final CTA section is part of `app/page.tsx` - Actively refined.
- `components/whatsapp-widget-loader.tsx` and `components/WhatsappChatWidget.tsx` - Stable.

## Phase 3: Performance Monitoring & Final Optimization (Future)

### **3.1 Performance Measurement Setup**

**File: `lib/performance.ts` (Example - to be implemented)**
```typescript
// Web Vitals measurement
export function measureWebVitals() {
  if (typeof window !== 'undefined') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(console.log);
      getFID(console.log);
      getFCP(console.log);
      getLCP(console.log);
      getTTFB(console.log);
    });
  }
}
```

### **3.2 Bundle Analysis Setup**

**File: `package.json` additions (Example - to be implemented)**
```json
{
  "scripts": {
    "analyze": "cross-env ANALYZE=true next build",
    "lighthouse": "lhci autorun"
  },
  "devDependencies": {
    "@next/bundle-analyzer": "^latest",
    "@lhci/cli": "^latest"
  }
}
```

## Implementation Priority Order (Revised)

1. **COMPLETED**: Configuration fixes, font optimization, initial Hero section optimization.
2. **ONGOING**: Iterative styling, content updates, and component refinements across all sections based on user feedback.
3. **FUTURE**: Implementation of formal performance monitoring (Lighthouse CI, Web Vitals) and advanced bundle analysis/optimizations.

## Success Metrics (Targets Remain)

- **LCP**: <2.5 seconds
- **FCP**: <1.0 second
- **CLS**: <0.1
- **Lighthouse Score**: >90
- **Bundle Size**: Monitor and optimize as needed. 