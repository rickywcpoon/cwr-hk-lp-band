# System Patterns

*This document outlines the system architecture, key technical decisions, design patterns in use, component relationships, and critical implementation paths.*

## System Architecture Overview

- **Frontend Framework:** Next.js (App Router) optimized for landing page performance
- **Rendering Strategy:** Static Site Generation (SSG) prioritized for speed, with selective client components
- **UI Layer:** React with minimal client-side JavaScript for maximum performance
- **Styling:** Tailwind CSS with critical path optimization for above-the-fold content
- **Performance-First Architecture:** Every technical decision evaluated against LCP <2.5s requirement
- **Conversion-Focused Design:** Component hierarchy designed to drive WhatsApp contact actions

## Key Technical Decisions

### **Performance-Critical Decisions**
- **Static generation preferred**: Use Next.js SSG where possible for fastest loading
- **Image optimization enabled and mandatory**: Next.js image optimization is active
- **Minimal client-side JavaScript**: Avoid heavy bundles that impact LCP
- **Critical CSS inlining**: Above-the-fold styles must load immediately (achieved via Tailwind utility classes and Next.js build process)
- **Resource preloading**: Critical assets (fonts, hero image) are preloaded

### **Landing Page Specific Decisions**
- **Single-page architecture**: No navigation, focused conversion flow
- **Mobile-first approach**: Ad traffic primarily mobile, design accordingly
- **WhatsApp integration**: Primary CTA method, sticky widget implementation
- **Conversion tracking**: (Future consideration) Every interaction measurable for optimization

### **Configuration Status**
- **Image optimization ENABLED**
- **Build errors NOT ignored**: ESLint and TypeScript errors are checked during build
- **Performance monitoring**: Basic checks via browser dev tools; formal tracking to be implemented

## Design Patterns in Use

### **Performance Patterns**
- **Critical Path Optimization**: Above-the-fold content prioritized
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Lazy Loading**: Below-the-fold content loaded after critical path (Next.js default behavior for images not marked `priority`)
- **Resource Hints**: Preload for fonts and hero image

### **Conversion Patterns**
- **Single Call-to-Action (CTA)**: WhatsApp contact as primary action
- **Sticky Elements**: WhatsApp widget always accessible
- **Trust Signals**: Credibility elements (experience, testimonials, expertise) integrated throughout
- **Friction Reduction**: Minimal steps between landing and contact

### **Personal Branding Patterns**
- **Hero Card Treatment**: Enhanced grid layout with portrait integration for key personnel
- **Circular Portrait Design**: Professional presentation with brand color borders and gradient overlays
- **Asymmetric Grid Layouts**: 3-column standard + 1 hero card for visual hierarchy
- **Human Connection Elements**: Personal photos and stories to build trust and credibility

### **Mobile Optimization Patterns**
- **Three-Line Headlines**: Strategic line breaks for consistent mobile display across screen sizes
- **Responsive Portrait Integration**: Side-by-side desktop, stacked mobile layouts
- **Touch-Friendly Interactions**: Swipe functionality for mobile navigation components
- **Mobile-First Typography**: Scalable text sizing (text-3xl → sm:text-6xl → lg:text-8xl)

### **Technical Patterns**
- **Static Site Generation (Next.js)**: For optimal loading performance
- **Component Composition (React)**: Reusable UI elements
- **Utility-First CSS (Tailwind)**: Rapid styling with performance considerations
- **Headless Components (Radix UI)**: Used selectively via Shadcn/UI components
- **Metadata-Driven Assets**: Next.js 13+ approach for favicons and OpenGraph images

## Component Relationships (Current Structure)

```
app/page.tsx (SSG)
├── components/hero-section.tsx (Critical Path)
│   ├── Header (part of Hero)
│   ├── Headline (Three-line mobile display), Value Proposition, Subtitles
│   └── Primary CTA (WhatsApp)
├── components/loose-vs-right-fit.tsx
├── components/restoration-process.tsx (with mobile swipe functionality)
├── "Why Choose Us" Section (in app/page.tsx)
│   ├── 3-Column Standard Grid (Shield, Tool, Award icons)
│   └── Michael Young Hero Card (Portrait + Enhanced Content)
├── components/image-compare-slider.tsx (Before/After Gallery)
├── components/brand-carousel.tsx (Brand Expertise, edge-to-edge)
├── Pricing Section (in app/page.tsx)
├── components/testimonials-section.tsx (Trust & Credibility)
├── Final CTA Section (in app/page.tsx)
└── components/WhatsappChatWidget.tsx (Sticky, updated logo)
```

## Critical Implementation Paths

### **Performance Critical Path (Current State - Optimized)**
1. HTML delivery
2. Critical CSS load (Tailwind + Next.js)
3. Core content render (FCP)
4. Images load (optimized, priority for hero)
5. Complete page load (LCP <2.5s target being met)

### **Conversion Critical Path (Current Focus)**
1. Immediate value communication (hero section)
2. Trust establishment (credentials, testimonials, expertise throughout)
3. Clear action (WhatsApp CTA visibility and consistency)
4. Contact completion (WhatsApp integration)

### **Technical Implementation Path (Revised)**
1. **COMPLETED**: Configuration fixes, image optimization, font optimization
2. **ONGOING**: Iterative styling and content refinements for conversion optimization
3. **FUTURE**: Formal performance monitoring implementation

## Optimized Section Flow (Iterative Approach)

*The page structure is evolving based on user feedback, aiming for a conversion-optimized flow. The case-restoration.classicwatchrepair.com site serves as a reference.*

### **Current Key Sections & Their Purpose**
- **Hero Section**: Grab attention, strong value proposition, immediate CTA
- **Loose vs Right Fit**: Address a specific customer pain point
- **Restoration Process**: Explain the service steps simply
- **Why Choose Us**: Highlight key differentiators and trust factors (including "Bracelet Magician")
- **Image Compare Slider**: Visual proof of results
- **Brand Carousel**: Showcase expertise with high-end brands
- **Pricing Section**: Provide transparency on investment
- **Testimonials Section**: Build social proof and trust
- **Final CTA Section**: Strong closing message to encourage contact

### **Conversion Optimization Principles Applied**

#### **Above-the-fold Optimization**
- Clear value proposition within hero
- Immediate CTA visibility
- Trust signals integrated early

#### **Progressive Disclosure**
- Information presented logically to guide the user towards conversion

#### **Mobile-First Considerations**
- Responsive design is a priority, with ongoing checks for readability and usability on mobile 