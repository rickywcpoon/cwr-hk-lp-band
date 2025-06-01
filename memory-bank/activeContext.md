# Active Context

*This document tracks the current work focus, recent changes, next steps, active decisions and considerations, important patterns and preferences, and learnings from the project.*

## Current Work Focus

**Project Status**: All major development phases completed successfully. The Classic Watch Repair landing page is now fully functional with comprehensive optimizations, latest design refinements, and final performance tuning.

**Immediate State**: 
- **Hero Section Refined**: H1 font size reduced by one step, line spacing increased between two lines
- **Parallax Effects Redesigned**: Modern, subtle parallax implementation across hero and loose-vs-right-fit sections
- **Image Loading Optimized**: Removed placeholder blur, ensured priority loading for critical images
- **Content Updates**: Improved messaging in loose-vs-right-fit section
- **CTA Button Redesign**: All buttons now use creamy yellow background instead of white
- **Restoration Process UX**: Removed reddish tint overlay, clean text transitions maintained
- **CTA Background Loading**: Final CTA section background image now loads eagerly for immediate visibility
- **Testimonials Integration**: Real customer testimonial images with consistent circular frames
- GTM tracking system fully implemented and verified
- Performance optimizations completed with strategic image loading
- All hydration errors resolved
- Mobile optimization completed with consistent display

**Next Major Task**: Git repository sync, then PostHog integration for advanced user behavior analytics

## Recent Changes (Current Session)

### Hero Section Typography Refinements
- **H1 Font Size Reduction**: Reduced by one step across all breakpoints
  - **Before**: `text-5xl sm:text-6xl lg:text-8xl`
  - **After**: `text-4xl sm:text-5xl lg:text-7xl`
- **Line Spacing Enhancement**: Added `mt-3` to second line for better visual separation
- **Gradient Text Contrast**: Temporarily removed, then restored gradient effect for "是時候重拾緊緻！"

### Parallax Effects Redesign
- **Hero Background**: Reduced from aggressive `0.3` to subtle `0.1` multiplier
- **Modern CSS Transforms**: Updated to `translate3d()` for hardware acceleration
- **Performance Optimizations**: Added `{ passive: true }` scroll listeners and `willChange: 'transform'`
- **Loose vs Right Fit Section**: Smart activation only when section is halfway visible
- **Coordinated Movement**: Gentle upward drift (`0.05` multiplier) that complements hero section

### Image Loading Optimizations
- **Removed Placeholder Blur**: Eliminated blur effect from loose-vs-good-fitting.webp
- **Priority Loading Alignment**: Ensured both hero background and loose-vs-right-fit images load together
- **Parallax Image Overflow**: Initially allowed image to break container bounds, then refined to contained effect
- **CTA Background Optimization**: Changed final CTA section background from `loading="lazy"` to `loading="eager"`

### Content Updates
- **Loose vs Right Fit Section**: Updated messaging for better impact
  - **Heading**: "告別錶帶「虛位」" / "重現無縫的佩戴體驗"
  - **Description**: Enhanced to emphasize safety concerns and professional solutions

### CTA Button Color Redesign
- **New Color Palette**: Added creamy yellow colors to Tailwind config
  - `cream-lightest`: `#FFFEF9`
  - `cream-lighter`: `#FFF9E6` (button background)
  - `cream-light`: `#FFF2CC` (hover state)
- **Global Update**: All CTA buttons changed from `bg-neutral-lightest` to `bg-cream-lighter`
- **Components Updated**: Hero section, button component, testimonials modal, main page (4 buttons)

### Restoration Process UX Improvements
- **Removed Reddish Tint**: Eliminated `card-hover-glow` class causing unwanted overlay
- **Clean Text Transitions**: Maintained smooth text animations without visual interference
- **Navigation Polish**: Preserved instant image switching with clean visual feedback

### Final Performance Tuning
- **CTA Section Background**: Updated `/central-workshop-vibe.webp` to load eagerly for immediate visibility
- **Complete Image Loading Strategy**: All critical images now optimized for their specific use cases

### Testimonials Integration
- **Real Customer Images**: Replaced placeholder avatars with actual testimonial photos
  - Ryan Lai: `/testimonials/testimonial-ryan-lai.webp` (11KB)
  - Edith C.: `/testimonials/testimonial-edith-c.webp` (131KB)
  - Sarah Miller: `/testimonials/testimonial-sarah-miller.webp` (191KB)
- **Consistent Circular Frames**: All testimonial photos use uniform 48px circular frames with borders
- **Professional Styling**: Enhanced with `object-cover object-center` for optimal face positioning

### Previous Session Context (Hero H1 & Process Optimization)
- **Hero H1 Updated**: New 2-line format with optimized typography for 390px viewport
- **Restoration Process Optimized**: Fixed slow loading issue - now instant navigation between steps
- **GTM Implementation**: Comprehensive WhatsApp click tracking for all CTAs
- **Performance Optimization**: Hero background loading optimized for fastest LCP

## Next Steps

### Immediate (Next Session)
1. **Git Repository Sync**
   - Ensure local changes are properly committed and pushed to GitHub
   - Verify remote repository reflects latest design refinements

2. **PostHog Integration Planning**
   - Research PostHog setup for Next.js App Router
   - Plan event tracking structure beyond GTM
   - Design conversion funnel analysis approach
   - Consider heatmap and session recording implementation

### Short Term (1-2 Sessions)
3. **PostHog Implementation**
   - Install and configure PostHog SDK
   - Implement user behavior tracking
   - Set up conversion funnel analysis
   - Add heatmap and session recording capabilities
   - Create A/B testing framework

### Medium Term (Future Considerations)
4. **Performance Monitoring**
   - Implement Lighthouse CI for automated testing
   - Add Real User Monitoring for Core Web Vitals
   - Set up bundle analysis for dependency optimization

5. **Advanced Optimizations**
   - Consider Service Worker for offline functionality
   - Further critical CSS optimization
   - Advanced resource hints optimization

## Active Decisions and Considerations

### Design Philosophy
- **Subtle Over Dramatic**: Parallax effects should enhance, not distract
- **Typography Hierarchy**: Proper font sizing for readability across devices
- **Color Psychology**: Creamy yellow CTAs feel warmer and more inviting than stark white
- **Visual Consistency**: All interactive elements should follow the same design language

### Performance Philosophy
- **LCP Priority**: Hero background must load before all other images
- **User Experience First**: Instant navigation takes precedence over file size
- **Strategic Preloading**: Use multiple preloading strategies for critical resources
- **Quality vs Speed**: Reduce image quality when it improves loading without visual impact

### Parallax Implementation Approach
- **Hardware Acceleration**: Use `translate3d()` for smooth performance
- **Passive Listeners**: Prevent scroll blocking with `{ passive: true }`
- **Smart Activation**: Only activate effects when elements are visible
- **Coordinated Movement**: Multiple parallax elements should complement each other

### CTA Button Strategy
- **Warm Color Palette**: Creamy yellow creates more inviting appearance
- **Consistent Application**: All CTAs use the same color scheme
- **Hover States**: Slightly darker yellow for clear interaction feedback
- **Accessibility**: Maintain excellent contrast with dark text

## Important Patterns and Preferences

### Modern Parallax Pattern
```tsx
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
```tsx
// Standard CTA button styling
className="bg-cream-lighter text-neutral-darker hover:bg-cream-light border-2 border-neutral-darker"
```

### Priority Image Loading Pattern
```tsx
// Critical images that must load together
<Image
  src="/critical-image.webp"
  alt="Description"
  priority={true}
  fetchPriority="high"
  loading="eager"
  unoptimized={true}
  // ... other props
/>
```

## Learnings and Project Insights

### Design Refinement Insights
1. **Typography Scaling**: Font sizes need careful consideration across breakpoints
2. **Parallax Subtlety**: Less is more - subtle effects feel more professional
3. **Color Psychology**: Warm colors (creamy yellow) feel more inviting than stark white
4. **Visual Hierarchy**: Proper spacing between elements improves readability

### Performance vs Visual Effects Balance
1. **Hardware Acceleration**: `translate3d()` performs better than `translateY()`