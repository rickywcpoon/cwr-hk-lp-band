# Technical Context

*This document details the technologies used, development setup, technical constraints, dependencies, and tool usage patterns.*

## Technologies Used

*   **Framework:** Next.js (v15.2.4)
*   **Language:** TypeScript (v5)
*   **Styling:** Tailwind CSS (v3.4.17), CSS Modules (implied by Next.js conventions)
*   **UI Components:** Radix UI (various components), Shadcn/UI (implied by `components.json` and typical Radix usage for UI)
*   **Forms:** React Hook Form (v7.54.1) with Zod (v3.24.1) for validation
*   **Animation:** Framer Motion
*   **Icons:** Lucide React
*   **Linting/Formatting:** ESLint (via `next lint`), Prettier (commonly used with Next.js, though not explicitly listed, good practice)
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

*   **Build System:** Relies on Next.js build process.
*   **ESLint and TypeScript errors are ignored during builds** (`ignoreDuringBuilds: true` in `next.config.mjs` for ESLint, `ignoreBuildErrors: true` for TypeScript). This is a potential risk and should be noted.
*   **Images are unoptimized** by Next.js Image Optimization (`unoptimized: true` in `next.config.mjs`). This might be for specific deployment reasons or could impact performance.

## Key Dependencies

### Core
*   `next`: Framework
*   `react`, `react-dom`: UI library
*   `typescript`: Language

### UI & Styling
*   `tailwindcss`: Utility-first CSS framework
*   `@radix-ui/*`: Headless UI components (Accordion, Dialog, Dropdown, etc.)
*   `lucide-react`: Icon library
*   `class-variance-authority`, `clsx`, `tailwind-merge`: Utilities for styling and class name management
*   `next-themes`: Theme management (e.g., dark mode)
*   `tailwindcss-animate`: Tailwind plugin for animations

### Forms & Validation
*   `react-hook-form`: Form handling
*   `@hookform/resolvers`: Resolver for `react-hook-form` (likely for Zod)
*   `zod`: Schema validation

### Utilities & Others
*   `date-fns`: Date utility library
*   `embla-carousel-react`: Carousel component
*   `framer-motion`: Animation library
*   `input-otp`: One-time password input component
*   `react-compare-slider`: Component for comparing two images/elements
*   `react-day-picker`: Date picker component
*   `react-icons`: Icon library (alternative or supplementary to Lucide)
*   `react-resizable-panels`: Resizable panel components
*   `recharts`: Charting library
*   `sonner`: Toast notification library
*   `vaul`: Drawer component

### Dev Dependencies
*   `@types/node`, `@types/react`, `@types/react-dom`: TypeScript definitions
*   `autoprefixer`: PostCSS plugin for vendor prefixes
*   `postcss`: CSS processing tool (used by Tailwind)

## Tool Usage Patterns

*   **Component Structure:** Likely follows Shadcn/UI conventions given `components.json` and the use of Radix UI. Components are probably in `components/ui` and `components/` general.
*   **Styling:** Primarily Tailwind CSS, with custom themes and colors defined in `tailwind.config.ts`. `hsl` color variables are used, indicating a themable setup.
*   **State Management:** Likely React Context API for global state (e.g., themes via `next-themes`) and component-level state. More complex state management isn't immediately apparent.
*   **Routing:** Next.js App Router (inferred from `app/` directory and modern Next.js versions).
*   **Path Aliases:** `@/*` is configured in `tsconfig.json` to point to the project root (`./*`). 