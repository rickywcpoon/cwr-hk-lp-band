# Active Context

*This document tracks the current work focus, recent changes, next steps, active decisions and considerations, important patterns and preferences, learnings, and project insights.*

## Current Work Focus

**Google Tag Manager Implementation:** Recently implemented comprehensive GTM tracking with ID `GTM-WNMHG6DQ` for conversion tracking and analytics. Focus on CTA button click tracking, WhatsApp widget interactions, and page view monitoring without impacting loading performance.

## Recent Changes

### **Google Tag Manager Implementation**
- **GTM Container Setup (`app/layout.tsx`)**: Implemented GTM script with ID `GTM-WNMHG6DQ` using Next.js Script component with `afterInteractive` strategy for optimal performance.
- **Performance Optimization**: Added preconnect and dns-prefetch hints for `googletagmanager.com` to reduce connection latency.
- **Click Tracking**: Added comprehensive click tracking to all CTA buttons with unique IDs and event data.
- **Page View Tracking (`components/gtm-page-view.tsx`)**: Client component for tracking page views and client-side navigation using Next.js App Router hooks.
- **WhatsApp Widget Tracking**: Enhanced WhatsApp chat widget with click tracking for "Chat Now" button.
- **Utility Functions (`lib/gtm.ts`)**: Created GTM utility functions for consistent event tracking across components.

### **CTA Button Tracking Implementation**
- **Hero Section**: `cta-hero-whatsapp` - tracks hero section WhatsApp clicks
- **Restoration Process**: `cta-restoration-process` - tracks consultation requests from process section
- **USP Section**: `cta-usp-whatsapp` - tracks free assessment clicks
- **Final CTA**: `cta-final-whatsapp` - tracks final section conversion clicks
- **Widget Chat**: `cta-widget-chat-now` - tracks WhatsApp widget chat button clicks

### **Previous: Microanimations Implementation**
- **CSS Animation System (`app/globals.css`)**: Added comprehensive animation classes including scroll-triggered, hover effects, and interactive feedback.
- **Intersection Observer (`hooks/useIntersectionObserver.ts`)**: Custom hook for triggering animations when elements enter viewport.
- **Animation Wrapper (`components/scroll-animation-wrapper.tsx`)**: Reusable component for applying scroll animations with stagger delays.
- **Animation Observer (`components/animation-observer.tsx`)**: Global observer for managing all animated elements on the page.

### **Hero Section Enhancements**
- **Staggered Text Reveal (`components/hero-section.tsx`)**: Hero text elements animate in sequence with 0.2s delays.
- **Gradient Text Animation**: Animated gradient background on main headline for visual appeal.
- **Button Pulse Effect**: WhatsApp CTA button includes ripple effect on hover.
- **Subtle Parallax**: Background image moves slower than scroll for depth perception.

### **Interactive Elements**
- **Card Hover Effects**: Service cards, testimonials, and Michael Young card include glow effects and lift animations.
- **Process Step Interactions**: Restoration process includes touch/swipe support for mobile navigation.
- **Brand Logo Animations**: Brand carousel logos include hover effects with scale and filter changes.
- **Button Animations**: All CTA buttons include pulse effects and gentle bounce animations.

### **Scroll-Triggered Animations**
- **Section Reveals**: All major sections animate in from bottom with staggered timing.
- **Directional Slides**: Brand carousel slides in from left, some elements from right.
- **Scale Animations**: Image compare slider, pricing table, and CTA sections scale in.
- **Testimonial Cards**: Individual testimonial cards animate with staggered delays.

### **OpenGraph Update**
- **Social Sharing Image**: Changed from `cwr-logo.png` to `cwr-whatsapp-logo.webp` (512x512) for better social media appearance.

### **Michael Young Portrait Implementation**
- **Hero Card Treatment (`app/page.tsx`)**: Transformed Michael Young section from standard 4-column grid to 3-column + hero card layout.
- **Portrait Integration**: Added `/michael-young.webp` in circular format with casal-light border and gradient overlay.
- **Enhanced Layout**: Side-by-side layout (portrait left, content right) on desktop, stacked on mobile.
- **Visual Hierarchy**: Larger title (text-2xl), enhanced typography, and distinguished background gradient.
- **Brand Consistency**: Used casal color scheme and maintained professional aesthetic.

### **Mobile Optimization**
- **Hero H1 Line Breaks (`components/hero-section.tsx`)**: Modified to display in three lines on mobile:
  - Line 1: "手錶錶帶失色？"
  - Line 2: "重拾原廠氣派，"
  - Line 3: "經典再現。"

### **Technical & SEO Improvements**
- **Favicon Implementation (`app/layout.tsx`)**: Fixed favicon display using Next.js 13+ metadata.icons approach instead of manual head links.
- **Enhanced Metadata**: Updated title to "錶帶魔術師 Michael Young | Classic Watch Repair HK - 專業錶帶修復" with comprehensive Chinese description and keywords.
- **OpenGraph Optimization**: Added CWR logo (`/cwr-logo.png`) as social sharing image with proper dimensions (288x77).
- **WhatsApp Preview**: Title updated to "錶帶魔術師 Michael Young | Classic Watch Repair" for better brand recognition.

### **Previous Completed Work**
- **Phase 1 Implementation completed**: All critical performance fixes successfully implemented.
- **Restoration Process**: Added swipe functionality for mobile navigation in 4-step process component.
- **Image Updates**: Process step images (step-1.webp through step-4.webp) implemented.
- **Copy Refinements**: Comprehensive Traditional Chinese copy implementation with Rory Sutherland/Eugene Schwartz approach.
- **UI Adjustments**: Text hierarchy fixes, contrast improvements, spacing optimizations.
- **Component Updates**: Testimonials, brand carousel, image compare slider all refined.

## Next Steps

### **GTM Implementation Complete ✅**
- ✅ **GTM Container**: Successfully implemented with ID `GTM-WNMHG6DQ`
- ✅ **Performance Optimized**: Added preconnect/dns-prefetch for faster loading
- ✅ **Click Tracking**: All CTA buttons and WhatsApp widget properly tracked
- ✅ **Page View Tracking**: Automatic page view tracking for all routes
- ✅ **Build Success**: Next.js build completed with no errors
- ✅ **TypeScript Fixed**: Resolved all dataLayer type conflicts
- 📊 **Ready for Testing**: GTM Preview Mode testing can now begin

### **User Experience Testing**
- A/B test animation effectiveness on user engagement metrics.
- Monitor bounce rate and time on page improvements.
- Test touch/swipe functionality across mobile devices.

### **Animation Refinements**
- Consider adding loading state animations for better perceived performance.
- Evaluate adding micro-interactions for form elements if needed.
- Fine-tune animation timing and easing curves based on user feedback.

### **Performance Optimization (Ongoing)**
- Maintain LCP <2.5s target with new animations.
- Monitor FCP improvements from perceived performance enhancements.
- Ensure animations are GPU-accelerated where appropriate.

## Active Decisions & Considerations

- **CSS-Only Animations**: Chose CSS over JavaScript libraries (like Framer Motion) for better performance and smaller bundle size.
- **Intersection Observer Strategy**: Using single global observer vs individual component observers for better performance.
- **Animation Accessibility**: Ensuring animations respect user preferences and don't cause motion sickness.
- **Touch Interaction**: Added swipe support for mobile users to enhance process step navigation.
- **Performance vs. Polish**: Balancing visual appeal with loading speed and Core Web Vitals.

## Important Patterns & Preferences

- **Staggered Animations**: 0.1-0.4s delays for sequential element reveals create natural flow.
- **Cubic-Bezier Easing**: Using `cubic-bezier(0.25, 0.46, 0.45, 0.94)` for smooth, natural motion.
- **Scroll-Triggered Reveals**: Elements animate when 10% visible with 50px bottom margin for timing.
- **Hover State Consistency**: All interactive elements include hover feedback with consistent timing (0.3s).
- **Touch-First Mobile**: Swipe gestures complement button navigation for better mobile UX.
- **GPU Acceleration**: Transform and opacity animations for optimal performance.
- **Brand Color Integration**: Animation effects use casal color scheme for consistency.

## Learnings & Project Insights

- **Animation Performance**: CSS animations significantly outperform JavaScript libraries for simple transitions.
- **Intersection Observer**: Single global observer more efficient than multiple component-level observers.
- **Mobile Touch UX**: Swipe gestures feel more natural than button-only navigation on mobile devices.
- **Perceived Performance**: Well-timed animations make page feel faster even if load times are similar.
- **Animation Hierarchy**: Staggered reveals guide user attention naturally through content flow.
- **Accessibility Considerations**: Motion preferences and reduced motion settings crucial for inclusive design.
- **Bundle Size Impact**: Removing Framer Motion dependency reduced JavaScript bundle significantly. 