# Technical Context

*This document details the technologies used, development setup, technical constraints, dependencies, and tool usage patterns.*

## Technologies Used

*   **Framework:** Next.js (v15.2.4)
*   **Language:** TypeScript (v5)
*   **Styling:** Tailwind CSS (v3.4.17), CSS Modules (implied by Next.js conventions)
*   **UI Components:** Radix UI (various components), Shadcn/UI (implied by `components.json` and typical Radix usage for UI)
*   **Forms:** React Hook Form (v7.54.1) with Zod (v3.24.1) for validation (Note: No complex forms currently on the landing page)
*   **Animation:** Framer Motion (Used by some Shadcn components, e.g., `embla-carousel`)
*   **Icons:** Lucide React
*   **Linting/Formatting:** ESLint (via `next lint`), Prettier (commonly used with Next.js, good practice)
*   **Package Manager:** pnpm (inferred from `pnpm-lock.yaml`)

## Development Setup

*   **Node.js Environment:** Required (version ^22 for `@types/node`)
*   **Package Manager:** pnpm
*   **Commands:**
    *   `pnpm dev`: Starts the development server (Next.js)
    *   `pnpm build`: Builds the application for production (Next.js)
    *   `pnpm start`: Starts the production server (Next.js)
    *   `pnpm lint`: Lints the codebase (Next.js/ESLint)
*   **IDE:** Any TypeScript-aware editor (e.g., VS Code)

## Technical Constraints

### **Performance Requirements (Critical)**
- **First Contentful Paint (FCP)**: ~1 second target
- **Largest Contentful Paint (LCP)**: <2.5 seconds (non-negotiable, currently being met)
- **Mobile-first optimization**: Primary ad traffic source
- **Bundle size optimization**: Minimal JavaScript for faster loading
- **Critical path prioritization**: Above-the-fold content must load immediately

### **Configuration Status (Resolved Initial Issues)**
- **Image optimization ENABLED** (`unoptimized: false` in `next.config.mjs`).
- **Build errors NOT ignored** (`ignoreDuringBuilds: false` for ESLint, `ignoreBuildErrors: false` for TypeScript in `next.config.mjs`).
- **Performance monitoring**: Basic checks via browser dev tools; formal tracking to be implemented (Phase 3).
- **Favicon implementation**: Next.js 13+ metadata.icons approach implemented for proper browser tab display.
- **OpenGraph optimization**: Social media sharing metadata configured with CWR logo and bilingual content.
- **SEO enhancement**: Comprehensive Chinese metadata with keywords and proper locale settings.

### **Landing Page Constraints**
- **Single-page focus**: No complex routing or navigation.
- **Conversion-driven**: Every technical decision must support WhatsApp contact goal.
- **Ad platform optimization**: Fast loading critical for ad quality scores.
- **Multi-language support**: Currently Traditional Chinese primary with English brand elements.
- **Social media optimization**: WhatsApp link sharing optimized with proper OpenGraph metadata.
- **Mobile-first responsive design**: Three-line headlines, touch-friendly interactions, scalable typography.

## Key Dependencies

### Core
*   `next`: Framework
*   `react`, `react-dom`: UI library
*   `typescript`: Language

### UI & Styling
*   `tailwindcss`: Utility-first CSS framework
*   `@radix-ui/*`: Headless UI components (used by Shadcn)
*   `lucide-react`: Icon library
*   `class-variance-authority`, `clsx`, `tailwind-merge`: Utilities for styling and class name management
*   `next-themes`: Theme management (not actively used for multiple themes, but present)
*   `tailwindcss-animate`: Tailwind plugin for animations

### Forms & Validation (Present, but not heavily used on current page)
*   `react-hook-form`: Form handling
*   `@hookform/resolvers`: Resolver for `react-hook-form`
*   `zod`: Schema validation

### Utilities & Others
*   `date-fns`: Date utility library
*   `embla-carousel-react`: Used by `BrandCarousel`.
*   `framer-motion`: Animation library (dependency of some UI components)
*   `input-otp`: (Not currently used)
*   `react-compare-slider`: Component for comparing two images/elements. 
*   `react-day-picker`: (Not currently used)
*   `react-icons`: Icon library (specifically `FaWhatsapp`, `IoClose` in `WhatsappChatWidget`).
*   `react-resizable-panels`: (Not currently used)
*   `recharts`: (Not currently used)
*   `sonner`: (Not currently used)
*   `vaul`: (Not currently used)

### Dev Dependencies
*   `@types/node`, `@types/react`, `@types/react-dom`: TypeScript definitions
*   `autoprefixer`: PostCSS plugin for vendor prefixes
*   `postcss`: CSS processing tool (used by Tailwind)

## Tool Usage Patterns

*   **Component Structure:** Shadcn/UI conventions are followed (`components/ui`, `components/`).
*   **Styling:** Primarily Tailwind CSS, with custom themes and colors defined in `tailwind.config.ts`.
*   **State Management:** React Context API for global state (e.g., `WhatsappChatWidget` internal state) and component-level state.
*   **Routing:** Next.js App Router (`app/` directory).
*   **Path Aliases:** `@/*` is configured in `tsconfig.json` to point to the project root (`./*`).