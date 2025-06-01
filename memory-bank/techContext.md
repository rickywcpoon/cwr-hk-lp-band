# Technical Context

*This document outlines the technologies used, development setup, technical constraints, dependencies, and tool usage patterns for the Classic Watch Repair landing page.*

## Technologies Used

### Core Framework & Language
- **Next.js 15.2.4** - React framework with App Router
- **React 19.1.0** - UI library with latest features
- **TypeScript** - Type safety and development experience
- **Tailwind CSS** - Utility-first CSS framework

### UI Components & Styling
- **Shadcn/UI** - Component library built on Radix UI
- **Radix UI** - Unstyled, accessible UI primitives
- **Lucide React** - Icon library for consistent iconography
- **Custom CSS animations** - Performance-optimized animations

### Performance & Optimization
- **Next.js Image Optimization** - Automatic image optimization with WebP
- **Font Optimization** - next/font with Inter and Playfair Display
- **Critical CSS Inlining** - Above-the-fold styles for faster rendering
- **Resource Preloading** - Strategic preload/prefetch for critical assets
- **Modern Parallax Effects** - Hardware-accelerated transforms with passive listeners
- **Eager Loading Strategy** - Critical sections load immediately when in view

### Analytics & Tracking
- **Google Tag Manager (GTM-WNMHG6DQ)** - Comprehensive event tracking
- **Custom GTM Events** - WhatsApp click tracking with detailed data
- **PostHog** - Planned for advanced user behavior analytics (Future)

### Development Tools
- **ESLint** - Code linting with custom rules for GTM
- **TypeScript Compiler** - Type checking and compilation
- **PNPM** - Package manager for efficient dependency management

### Design System
- **Creamy Yellow CTA Palette** - Warm color scheme for better conversion
- **Refined Typography** - Optimized font sizes and spacing across breakpoints
- **Modern Parallax** - Subtle, performance-optimized visual effects

## Development Setup

### Project Structure
```
cwr-hk-lp-band/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with GTM, fonts, metadata
│   ├── page.tsx           # Main landing page (Client Component)
│   └── globals.css        # Global styles and animations
├── components/            # React components
│   ├── ui/               # Shadcn/UI components
│   ├── hero-section.tsx  # Hero with optimized background loading
│   ├── loose-vs-right-fit.tsx # High-priority section
│   ├── restoration-process.tsx # Optimized step navigation
│   ├── gtm-page-view.tsx # GTM page view tracking
│   └── whatsapp-widget-loader.tsx # WhatsApp widget with tracking
├── lib/                   # Utility functions
│   └── gtm.ts            # GTM event tracking utilities
├── public/               # Static assets
│   ├── hero-band-restoration.webp # Hero background (20KB)
│   ├── loose-vs-good-fitting.webp # Section image (102KB)
│   ├── process/          # Process step images
│   └── brands/           # Brand logos
├── memory-bank/          # Project documentation
└── next.config.mjs       # Next.js configuration
```

### Key Configuration Files

#### next.config.mjs
- Image optimization enabled with WebP/AVIF formats
- Cache headers for static assets (1-year caching)
- Conditional build error handling for development
- Performance optimizations (compression, powered-by header removal)

#### tailwind.config.ts
- Custom color scheme (Casal, Cocoa-Bean, Neutral palettes)
- Font family configuration for Inter and Playfair Display
- Custom animations and utilities

#### app/layout.tsx
- GTM script integration with afterInteractive strategy
- Font optimization with preload and fallbacks
- Critical CSS inlining for hero section
- Strategic resource preloading hierarchy

## Technical Constraints

### Performance Requirements
- **LCP < 2.5s** - Largest Contentful Paint optimization
- **Hero background priority** - Must load before all other images
- **Instant navigation** - Process steps must switch without delay
- **Mobile optimization** - Responsive layouts with refined typography
- **Eager loading for CTAs** - Critical sections load immediately when visible

### Browser Compatibility
- **Modern browsers** - ES2020+ features used
- **Mobile-first** - Responsive design with touch interactions
- **Accessibility** - WCAG AA compliance for color contrast
- **Hardware acceleration** - CSS transforms optimized for smooth performance

### SEO & Social Sharing
- **Traditional Chinese content** - Primary language for Hong Kong market
- **OpenGraph optimization** - WhatsApp sharing with CWR logo
- **Structured metadata** - Comprehensive meta tags and descriptions

### Design Standards
- **Creamy yellow CTAs** - Consistent warm color scheme across all buttons
- **Subtle parallax effects** - Modern, performance-optimized visual enhancements
- **Typography hierarchy** - Proper font sizing and spacing for readability

## Dependencies

### Production Dependencies
```json
{
  "next": "15.2.4",
  "react": "19.1.0",
  "react-dom": "19.1.0",
  "@radix-ui/react-*": "Various versions",
  "lucide-react": "^0.454.0",
  "tailwindcss": "^3.4.1"
}
```

### Development Dependencies
```json
{
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^8",
  "eslint-config-next": "15.2.4",
  "typescript": "^5"
}
```

## Tool Usage Patterns

### Image Optimization Strategy
1. **Hero Background**: Unoptimized Next.js Image with priority loading
2. **High Priority Images**: Preload + priority + fetchPriority="high"
3. **Process Steps**: Prefetch + JavaScript preloading + hidden images
4. **Below-the-fold**: Lazy loading with prefetch
5. **CTA Backgrounds**: Eager loading for immediate visibility when in view

### Modern Parallax Pattern
```typescript
// Subtle, performance-optimized parallax
useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY
    setParallaxOffset(scrollY * 0.1) // Very gentle movement
  }

  window.addEventListener("scroll", handleScroll, { passive: true })
  return () => window.removeEventListener("scroll", handleScroll)
}, [])

// Hardware-accelerated transform
style={{
  transform: `translate3d(0, ${parallaxOffset}px, 0)`,
  willChange: 'transform'
}}
className="transition-transform duration-75 ease-out"
```

### Creamy Yellow CTA Pattern
```typescript
// Standard CTA button styling
className="bg-cream-lighter text-neutral-darker hover:bg-cream-light border-2 border-neutral-darker"
```

### GTM Event Tracking Pattern
```typescript
// Standard GTM event structure
if (typeof window !== 'undefined' && (window as any).dataLayer) {
  ;(window as any).dataLayer.push({
    event: 'whatsapp_click',
    click_source: 'section_name',
    click_element_id: 'unique_id',
    page_location: window.location.href,
    conversion_action: 'whatsapp_contact',
  })
}
```

### Component Architecture
- **Client Components** - Used sparingly for interactivity (hero, page)
- **Server Components** - Default for static content
- **Composition Pattern** - Small, focused components with clear responsibilities
- **Props Interface** - TypeScript interfaces for all component props

### Animation Strategy
- **CSS-based animations** - Performance-optimized with GPU acceleration
- **Intersection Observer** - Trigger animations on scroll
- **Reduced motion respect** - Accessibility consideration
- **Hero animations removed** - Clean immediate display

## Performance Optimizations

### Loading Priority Hierarchy
1. **Hero background** - Absolute highest priority
2. **Header logo** - High priority with preload
3. **Loose vs right fit** - High priority, second visual element
4. **Process steps** - Medium priority with prefetch
5. **Below-the-fold** - Low priority with lazy loading

### Critical Resource Strategy
- **DNS prefetch** - Immediate connection to image service
- **Preconnect** - Establish early connections
- **Resource preload** - Critical images with fetchPriority="high"
- **Critical CSS** - Inline above-the-fold styles

### Caching Strategy
- **Static assets** - 1-year cache with immutable flag
- **Images** - Optimized with Next.js automatic optimization
- **Fonts** - Preloaded with swap display strategy

## Known Technical Patterns

### Error Handling
- **Hydration errors resolved** - Server/client consistency maintained
- **Image loading fallbacks** - Graceful degradation for failed loads
- **GTM safety checks** - Prevent errors when dataLayer unavailable

### TypeScript Usage
- **Strict mode enabled** - Maximum type safety
- **Interface definitions** - All component props typed
- **Utility type usage** - Leveraging TypeScript advanced types
- **ESLint integration** - Consistent code quality

### Build Optimization
- **Conditional error handling** - Development vs production builds
- **Tree shaking** - Unused code elimination
- **Bundle optimization** - Efficient chunk splitting
- **Static generation** - Pre-rendered pages for performance

## Future Technical Considerations

### PostHog Integration (Next Major Task)
- **User behavior tracking** - Heatmaps, session recordings
- **Conversion funnel analysis** - Detailed user journey tracking
- **A/B testing capability** - Feature flag implementation
- **Advanced analytics** - Beyond basic GTM tracking

### Performance Monitoring
- **Lighthouse CI** - Automated performance testing
- **Real User Monitoring** - Core Web Vitals tracking
- **Bundle analysis** - Dependency optimization

### Advanced Optimizations
- **Service Worker** - Offline functionality
- **Advanced Critical CSS** - Further optimization
- **Resource hints optimization** - Fine-tuned preloading

### Testimonials Integration Patterns
- **Real Customer Images**: Replaced placeholder avatars with actual customer photos
- **Consistent Circular Frames**: 48px circular avatars with `border-2 border-gray-200`
- **Professional Image Styling**: `object-cover object-center` for optimal face positioning
- **Optimized Loading**: Lazy loading for testimonial images with proper sizing hints
- **File Organization**: Testimonial images stored in `/public/testimonials/` directory