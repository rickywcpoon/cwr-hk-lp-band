# System Patterns

*This document outlines the system architecture, key technical decisions, design patterns in use, component relationships, and critical implementation paths.*

## System Architecture Overview

*   **Frontend Framework:** Next.js (App Router)
*   **UI Layer:** React with server components and client components as needed.
*   **Styling:** Tailwind CSS with a pre-configured design system (HSL variables, custom radii) likely managed via Shadcn/UI or a similar methodology.
*   **Component-Based Architecture:** The project uses a component-based approach, with UI elements likely organized in `components/ui` (for reusable Shadcn/UI-like components) and `components/` for more specific or composite components.
*   **Directory Structure:** Standard Next.js App Router structure (`app/` for routes, `public/` for static assets, `lib/` for utilities, `hooks/` for custom hooks).

## Key Technical Decisions

*   **Adoption of Next.js App Router:** This dictates the routing, data fetching, and rendering patterns.
*   **Use of TypeScript:** For static typing and improved code quality.
*   **Reliance on Tailwind CSS for Styling:** Prioritizing utility-first CSS for rapid UI development and consistency.
*   **Integration of Radix UI (likely via Shadcn/UI):** Leveraging headless components for accessibility and customizability.
*   **Ignoring ESLint and TypeScript errors during build:** (As noted in `next.config.mjs`) This is a significant decision, potentially to speed up CI/CD or due to legacy issues, but carries risk.
*   **Unoptimized Images in Next.js:** (As noted in `next.config.mjs`) This implies either a specific deployment target that handles optimization differently or a conscious decision to bypass Next.js image optimization.
*   **Use of `pnpm`:** For package management.

## Design Patterns in Use

*   **Server Components & Client Components (Next.js):** For optimizing rendering and interactivity.
*   **Utility-First CSS (Tailwind):** For styling.
*   **Headless UI Components (Radix UI):** For building custom UIs with accessible foundations.
*   **Provider Pattern (React Context):** Likely used by `next-themes` for theme management and potentially for other global state.
*   **Hooks (React):** Custom hooks are likely in the `hooks/` directory for reusable logic.
*   **Directory-based Routing (Next.js App Router).**
*   **Configuration-as-Code:** `tailwind.config.ts`, `tsconfig.json`, `next.config.mjs` define key aspects of the system.

## Component Relationships

*   **Layouts and Pages:** The `app/` directory will define layouts that wrap pages/routes. Server components will likely fetch data and pass it to client components.
*   **Shadcn/UI Components:** `components/ui` likely houses base UI elements (Button, Card, Input, etc.) that are used to build more complex components in `components/` or directly in pages within `app/`.
*   **Shared Utilities:** `lib/utils.ts` (a common pattern with Shadcn/UI) likely contains helper functions, especially for `clsx` and `tailwind-merge`.

## Critical Implementation Paths

*   **Routing and Data Fetching:** Defined by the Next.js App Router structure within the `app/` directory.
*   **UI Component Implementation:** Based on Tailwind CSS and Radix UI, likely following Shadcn/UI patterns.
*   **Form Handling:** Using `react-hook-form` and `zod` for forms throughout the application.
*   **Theming:** Managed by `next-themes` and configured in `tailwind.config.ts`. 