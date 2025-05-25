# Active Context

*This document tracks the current work focus, recent changes, next steps, active decisions and considerations, important patterns and preferences, learnings, and project insights.*

## Current Work Focus

**Design Enhancement & Personal Branding:** Recently implemented Michael Young's portrait in a hero card design to add human connection and credibility. Focus on mobile optimization and social media sharing improvements.

## Recent Changes

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

### **Design & UX Polish (Current Priority)**
- Monitor Michael Young hero card performance and user engagement.
- Consider additional personal branding elements if effective.
- Review mobile experience across different screen sizes.

### **Social Media Optimization**
- Test WhatsApp link preview appearance.
- Consider creating dedicated OpenGraph image (1200x630) for optimal social sharing.

### **Performance Monitoring (Ongoing)**
- Maintain LCP <2.5s target with new portrait image.
- Monitor Core Web Vitals after recent changes.

## Active Decisions & Considerations

- **Personal Branding Strategy**: Michael Young's portrait adds human connection - monitor impact on trust and conversions.
- **Mobile-First Design**: Ensuring three-line H1 works across all mobile screen sizes.
- **Social Sharing**: Using company logo for OpenGraph maintains professional brand consistency.
- **Bilingual Approach**: Chinese primary with English brand name for broader appeal.

## Important Patterns & Preferences

- **Hero Card Treatment**: Successful pattern for highlighting key personnel/expertise.
- **Circular Portraits**: Professional presentation with brand color borders.
- **Three-Line Mobile Headlines**: Ensures readability across device sizes.
- **Metadata-Driven Favicons**: Next.js 13+ best practices for icon management.
- **Brand Color Consistency**: Casal color scheme maintained throughout new elements.

## Learnings & Project Insights

- **Portrait Integration**: Hero card treatment more effective than simple grid addition.
- **Mobile Typography**: Line breaks crucial for consistent mobile display.
- **Favicon Caching**: Browser cache clearing often needed for favicon updates.
- **OpenGraph Testing**: Social media previews require specific testing tools.
- **Personal Branding**: "錶帶魔術師" nickname with portrait creates strong credibility signal. 