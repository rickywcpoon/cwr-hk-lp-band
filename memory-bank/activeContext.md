# Active Context

*This document tracks the current work focus, recent changes, next steps, active decisions and considerations, important patterns and preferences, and learnings from the project.*

## Current Work Focus

**Project Status**: All major development phases completed successfully. The Classic Watch Repair landing page is now fully functional with comprehensive optimizations, latest design refinements, mobile carousel enhancements, and final performance tuning.

**Immediate State**: 
- **Mobile Carousel Implementation**: Added Facebook/Instagram style swipeable carousel for restoration images
- **Responsive Image Display**: Mobile-only carousel with peek view, desktop maintains three-column grid
- **Dynamic Dot Indicators**: Active slide highlighting with burgundy color, smooth transitions
- **Mobile-First UX**: Removed navigation arrows for cleaner interface, implemented 85% width peek view
- **Image Integration**: Added Rolex and VC bracelet restoration sample images
- **Conditional Rendering**: Smart mobile vs desktop layout switching with useIsMobile hook
- **Hero Section Refined**: H1 font size reduced by one step, line spacing increased between two lines
- **Parallax Effects Redesigned**: Modern, subtle parallax implementation across hero and loose-vs-right-fit sections
- **Image Loading Optimized**: Removed placeholder blur, ensured priority loading for critical images
- **Content Updates**: Improved messaging in loose-vs-right-fit section with mobile-only Rolex content
- **CTA Button Redesign**: All buttons now use creamy yellow background instead of white
- **Restoration Process UX**: Removed reddish tint overlay, clean text transitions maintained
- **CTA Background Loading**: Final CTA section background image now loads eagerly for immediate visibility
- **Testimonials Integration**: Real customer testimonial images with consistent circular frames
- GTM tracking system fully implemented and verified
- Performance optimizations completed with strategic image loading
- All hydration errors resolved
- Mobile optimization completed with consistent display

**Next Major Task**: PostHog integration for advanced user behavior analytics

## Recent Changes (Current Session)

### Mobile Carousel Enhancement
- **Facebook/Instagram Style Design**: Implemented peek view carousel with 85% slide width
- **Dynamic State Management**: Added `currentSlide` state tracking for active dot indicators
- **Carousel API Integration**: Connected Embla carousel API for slide change detection
- **Active Dot Highlighting**: Current slide dot shows in burgundy, inactive dots in gray
- **Smooth Transitions**: Added `transition-colors duration-200` for dot color changes
- **Navigation Removal**: Eliminated arrow buttons for cleaner mobile interface
- **Peek View Implementation**: Next image visible on right side to indicate swipeable content

### Image Content Additions
- **Rolex Restoration Images**: Added `/rolex-before-after-1.webp` and `/rolex-before-after-2.webp`
- **VC Bracelet Sample**: Added `/vc-bracelet-restored-sample.webp` for variety
- **Mobile-Only Rolex Content**: Added Rolex-specific restoration text and image in loose-vs-right-fit section
- **Responsive Image Sizing**: Optimized sizes attribute for mobile (85vw) vs desktop (33vw)

### Conditional Rendering Implementation
- **useIsMobile Hook Integration**: Smart breakpoint detection at 768px
- **Mobile vs Desktop Layouts**: Carousel for mobile, three-column grid for desktop
- **Component Architecture**: Clean separation of mobile and desktop rendering logic
- **Performance Optimization**: Conditional loading based on device type

### Previous Session Context (Hero H1 & Process Optimization)
- **Hero H1 Updated**: New 2-line format with optimized typography for 390px viewport
- **Restoration Process Optimized**: Fixed slow loading issue - now instant navigation between steps
- **GTM Implementation**: Comprehensive WhatsApp click tracking for all CTAs
- **Performance Optimization**: Hero background loading optimized for fastest LCP

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

### Mobile-First Carousel Design
- **Peek View Strategy**: 85% width allows next image to show, indicating swipeable content
- **No Arrow Navigation**: Clean interface following modern mobile app patterns
- **Active State Feedback**: Dot indicators provide clear position feedback
- **Smooth Interactions**: Hardware-accelerated transitions for professional feel

### Responsive Design Philosophy
- **Conditional Rendering**: Different layouts for mobile vs desktop rather than CSS-only responsive
- **Performance Consideration**: Load appropriate components based on device capabilities
- **User Experience Priority**: Mobile gets carousel, desktop gets full grid view
- **Content Adaptation**: Mobile-specific content additions where beneficial

### Design Philosophy
- **Subtle Over Dramatic**: Parallax effects should enhance, not distract
- **Typography Hierarchy**: Proper font sizing for readability across devices
- **Color Psychology**: Creamy yellow CTAs feel warmer and more inviting than stark white
- **Visual Consistency**: All interactive elements should follow the same design language
- **Mobile UX Standards**: Follow established patterns from popular social media apps

### Performance Philosophy
- **LCP Priority**: Hero background must load before all other images
- **User Experience First**: Instant navigation takes precedence over file size
- **Strategic Preloading**: Use multiple preloading strategies for critical resources
- **Quality vs Speed**: Reduce image quality when it improves loading without visual impact
- **Conditional Loading**: Only load components needed for current device type

## Important Patterns and Preferences

### Mobile Carousel Pattern
```tsx
// Facebook/Instagram style carousel with peek view
<Carousel 
  opts={{ 
    loop: true,
    align: "start"
  }}
  className="w-full"
  setApi={(api) => {
    if (api) {
      api.on("select", () => {
        setCurrentSlide(api.selectedScrollSnap())
      })
    }
  }}
>
  <CarouselContent className="-ml-2 md:-ml-4">
    {images.map((image, index) => (
      <CarouselItem key={index} className="pl-2 md:pl-4 basis-[85%]">
        {/* Image content */}
      </CarouselItem>
    ))}
  </CarouselContent>
</Carousel>

// Dynamic dot indicators
{images.map((_, index) => (
  <div 
    key={index}
    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
      currentSlide === index ? 'bg-burgundy' : 'bg-gray-300'
    }`}
  />
))}
```

### Conditional Rendering Pattern
```tsx
// Mobile vs desktop layout switching
const isMobile = useIsMobile()

{isMobile ? (
  <MobileCarouselComponent />
) : (
  <DesktopGridComponent />
)}
```

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

### Mobile Carousel Implementation
1. **Peek View Effectiveness**: 85% width creates perfect balance between current image focus and next image preview
2. **State Management**: Carousel API callbacks essential for dynamic dot indicator updates
3. **Performance Considerations**: Conditional rendering prevents unnecessary component loading
4. **User Experience**: Removing arrows creates cleaner interface when peek view provides navigation cues

### Responsive Design Strategy
1. **Hook-Based Breakpoints**: useIsMobile provides more control than CSS-only responsive design
2. **Component Separation**: Different components for mobile vs desktop allows for optimized experiences
3. **Content Adaptation**: Mobile-specific content additions enhance relevance without desktop bloat
4. **Performance Benefits**: Loading only necessary components improves mobile performance

### Design Refinement Insights
1. **Typography Scaling**: Font sizes need careful consideration across breakpoints
2. **Parallax Subtlety**: Less is more - subtle effects feel more professional
3. **Color Psychology**: Warm colors (creamy yellow) feel more inviting than stark white
4. **Visual Hierarchy**: Proper spacing between elements improves readability
5. **Mobile UX Standards**: Following established patterns improves user familiarity

### Performance vs Visual Effects Balance
1. **Hardware Acceleration**: `translate3d()` performs better than `translateY()`
2. **Passive Listeners**: Prevent scroll blocking for smooth interactions
3. **Strategic Preloading**: Multiple approaches ensure instant user interactions
4. **Quality Optimization**: Balance visual quality with loading performance
5. **Conditional Loading**: Device-appropriate content loading improves performance