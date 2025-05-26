# Active Context

*This document tracks the current work focus, recent changes, next steps, active decisions and considerations, important patterns and preferences, and learnings from the project.*

## Current Work Focus

**Project Status**: All major development phases completed successfully. The Classic Watch Repair landing page is now fully functional with comprehensive optimizations.

**Immediate State**: 
- GTM tracking system fully implemented and verified
- Performance optimizations completed with strategic image loading
- Hero background loading optimized for fastest LCP
- Restoration process navigation optimized for instant switching
- All hydration errors resolved
- Mobile optimization completed with consistent three-line H1 display

**Next Major Task**: PostHog integration for advanced user behavior analytics

## Recent Changes (Latest Session)

### Google Tag Manager Implementation
- **GTM Container**: Integrated GTM-WNMHG6DQ with proper script placement
- **Event Tracking**: Comprehensive WhatsApp click tracking for all CTAs
- **Unique IDs**: Each CTA button has distinct tracking ID
  - `cta-hero-whatsapp` - Hero section CTA
  - `cta-restoration-process` - Process section CTA  
  - `cta-usp-whatsapp` - USP section CTA
  - `cta-final-whatsapp` - Final CTA
  - `cta-widget-chat-now` - WhatsApp widget
- **Event Data Structure**: Includes event type, source, element ID, page location, conversion action
- **Client Component Conversion**: Updated `app/page.tsx` to support onClick handlers

### Performance Optimization Achievements
- **Hero Background Priority**: Implemented multiple preloading strategies
  - DNS prefetch and preconnect to image service
  - Resource preload with `fetchPriority="high"`
  - Unoptimized Next.js Image for bypassing processing delays
  - Critical CSS for immediate loading
- **Image Loading Hierarchy**: Established clear priority structure
  1. Hero background (highest priority)
  2. Header logo (high priority)
  3. Loose vs right fit section (high priority, second visual element)
  4. Process step images (medium priority with prefetch)
  5. Below-the-fold images (low priority with lazy loading)

### Restoration Process Optimization
- **Instant Navigation**: Multiple preloading strategies for step images
  - Browser prefetch links in layout
  - JavaScript Promise.all preloading on component mount
  - Hidden Image elements with `loading="eager"`
- **User Experience**: Loading indicators and disabled navigation until ready
- **Quality Optimization**: Reduced to 75% for faster loading

### Technical Fixes
- **Hydration Errors**: Resolved server/client mismatches
  - Fixed text content consistency ("經典再現。" with period)
  - Removed conflicting image loading attributes
- **Hero Animations**: Removed all animation delays for clean immediate display
- **Parallax Effects**: Maintained visual effects while optimizing performance

## Next Steps

### Immediate (Next Session)
1. **PostHog Integration Planning**
   - Research PostHog setup for Next.js App Router
   - Plan event tracking structure beyond GTM
   - Design conversion funnel analysis approach
   - Consider heatmap and session recording implementation

### Short Term (1-2 Sessions)
2. **PostHog Implementation**
   - Install and configure PostHog SDK
   - Implement user behavior tracking
   - Set up conversion funnel analysis
   - Add heatmap and session recording capabilities
   - Create A/B testing framework

### Medium Term (Future Considerations)
3. **Performance Monitoring**
   - Implement Lighthouse CI for automated testing
   - Add Real User Monitoring for Core Web Vitals
   - Set up bundle analysis for dependency optimization

4. **Advanced Optimizations**
   - Consider Service Worker for offline functionality
   - Further critical CSS optimization
   - Advanced resource hints optimization

## Active Decisions and Considerations

### Performance Philosophy
- **LCP Priority**: Hero background must load before all other images
- **User Experience First**: Instant navigation takes precedence over file size
- **Strategic Preloading**: Use multiple preloading strategies for critical resources
- **Quality vs Speed**: Reduce image quality when it improves loading without visual impact

### GTM Implementation Approach
- **Comprehensive Tracking**: Every WhatsApp CTA tracked with unique identifiers
- **Detailed Event Data**: Include source, element ID, page location for analysis
- **Type Safety**: Use TypeScript with proper window.dataLayer handling
- **Performance Conscious**: afterInteractive strategy to avoid blocking render

### Image Optimization Strategy
- **Hero Background**: Unoptimized for speed, with priority and preload
- **High Priority Sections**: Preload with fetchPriority="high"
- **Process Steps**: Prefetch for instant navigation
- **Below-the-fold**: Lazy loading with prefetch for smooth scrolling

### Component Architecture Preferences
- **Server Components Default**: Use Client Components only when necessary
- **Composition Pattern**: Small, focused components with clear responsibilities
- **TypeScript Interfaces**: All component props properly typed
- **Performance Conscious**: Minimize client-side JavaScript

## Important Patterns and Preferences

### Code Organization
```typescript
// GTM Event Tracking Pattern
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

### Image Loading Pattern
```tsx
// High Priority Image Pattern
<Image
  src="/image.webp"
  alt="Description"
  priority
  fetchPriority="high"
  loading="eager"
  quality={85}
  // ... other props
/>
```

### Resource Preloading Pattern
```html
<!-- Critical resource preloading in layout -->
<link rel="preload" href="/critical-image.webp" as="image" type="image/webp" fetchPriority="high" crossOrigin="" />
```

### Component Props Pattern
```typescript
interface ComponentProps {
  whatsappLink: string
  // Other typed props
}

export default function Component({ whatsappLink }: ComponentProps) {
  // Implementation
}
```

## Learnings and Project Insights

### Performance Optimization Insights
1. **Image Loading Order Matters**: Next.js processes images in DOM order, not priority order
2. **Multiple Preloading Strategies**: Combine browser prefetch, JavaScript preloading, and hidden images
3. **Unoptimized for Speed**: Sometimes bypassing optimization improves loading for critical resources
4. **Critical CSS Impact**: Inline styles can significantly improve above-the-fold rendering

### GTM Implementation Learnings
1. **Client Component Necessity**: onClick handlers require Client Components
2. **Type Safety with GTM**: Use `(window as any).dataLayer` for TypeScript compatibility
3. **ESLint Configuration**: Allow `any` types specifically for GTM integration
4. **Event Data Structure**: Comprehensive data improves analysis capabilities

### User Experience Discoveries
1. **Instant Navigation Expectation**: Users expect immediate response to clicks
2. **Loading States Important**: Visual feedback during loading improves perceived performance
3. **Mobile Display Consistency**: Three-line H1 must display consistently across devices
4. **Animation vs Performance**: Sometimes removing animations improves user experience

### Technical Architecture Insights
1. **Server vs Client Components**: Use Client Components sparingly for better performance
2. **Hydration Error Prevention**: Ensure server/client consistency in all rendered content
3. **Resource Priority Hierarchy**: Establish clear loading priorities for optimal LCP
4. **Cache Strategy**: Long-term caching for static assets improves repeat visits

## Project Context Reminders

### Target Audience
- **Primary**: Hong Kong luxury watch owners (Mr. Leung profile)
- **Language**: Traditional Chinese with English brand elements
- **Platform**: Mobile-first with WhatsApp as primary conversion channel

### Business Goals
- **Primary Conversion**: WhatsApp contact for watch band restoration
- **Trust Building**: Michael Young personal branding and expertise showcase
- **Service Differentiation**: Laser welding technology and original restoration approach

### Technical Excellence Standards
- **Performance**: LCP < 2.5s non-negotiable
- **Accessibility**: WCAG AA compliance for color contrast
- **SEO**: Comprehensive metadata for Hong Kong market
- **Analytics**: Comprehensive tracking for conversion optimization

## Memory Bank Maintenance Notes

**Last Updated**: Current session with comprehensive GTM implementation and performance optimization completion

**Key Files Updated**:
- `progress.md` - Updated with all completed phases and PostHog next steps
- `techContext.md` - Comprehensive technical documentation created
- `activeContext.md` - Current state and patterns documented

**Next Memory Bank Update Triggers**:
- PostHog integration completion
- Performance monitoring implementation
- Any significant architectural changes
- User feedback requiring major adjustments 