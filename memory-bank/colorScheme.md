# Color Scheme

This document defines the color scheme for the Classic Watch Repair landing page, including palette definitions and section-specific colors.

## Color Palettes

### Primary Palette (Casal - Teal)
| Name | Hex Code | Use Cases |
|------|----------|-----------|
| Casal-Lightest | #E9EEEE | Light backgrounds, hover states |
| Casal-Lighter | #D3DEDD | Secondary backgrounds, borders |
| Casal-Light | #678E8A | Accents, secondary buttons |
| Casal | #275E59 | Primary brand color, main buttons, Navbar background |
| Casal-Dark | #1F4B47 | Button hover states, text emphasis |
| Casal-Darker | #0F2523 | Customer Problem section background |
| Casal-Darkest | #0B1C1A | Footer background, dark accents |

### Secondary Palette (Cocoa-Bean - Burgundy)
| Name | Hex Code | Use Cases |
|------|----------|-----------|
| Cocoa-Bean-Lightest | #EEE9E9 | Light secondary backgrounds |
| Cocoa-Bean-Lighter | #DED3D3 | Secondary borders, dividers |
| Cocoa-Bean-Light | #8E6565 | Accents, secondary UI elements |
| Cocoa-Bean | #5E2424 | Secondary buttons, alerts |
| Cocoa-Bean-Dark | #4B1C1C | Secondary button hover states |
| Cocoa-Bean-Darker | #250E0E | CWRstats and Testimonials section backgrounds |
| Cocoa-Bean-Darkest | #1C0A0A | Dark accents, shadows |

### Neutral Palette
| Name | Hex Code | Use Cases |
|------|----------|-----------|
| Neutral-Lightest | #F2F2F2 | Very light backgrounds |
| Neutral-Lighter | #D8D8D8 | Light backgrounds (ServiceBrands, ServiceProcess), text on dark backgrounds |
| Neutral-Light | #B2B2B2 | Secondary text, disabled elements |
| Neutral | #7F7F7F | Placeholders, less important text |
| Neutral-Dark | #4C4C4C | Secondary body text |
| Neutral-Darker | #191919 | Primary body text |
| Neutral-Darkest | #000000 | USP section background, text on light backgrounds |

## Section-Specific Colors

### Background Colors
| Section | Background Color |
|---------|-----------------|
| Navbar | Casal-Darker (#0F2523) |
| Hero | Casal-Darker (#0F2523) |
| Customer Problem | Casal (#275E59) |
| USP | Neutral-Darkest (#000000) |
| ServiceBrands | Neutral-Lighter (#D8D8D8) |
| CWRstats | Cocoa-Bean-Darker (#250E0E) |
| Testimonials | Cocoa-Bean-Darker (#250E0E) |
| ServiceProcess | Neutral-Lighter (#D8D8D8) |
| ThreePillars | Casal-Darker (#0F2523) |
| Footer | Casal-Darker (#0F2523) |

### Font Colors
| Section | Font Color |
|---------|-----------|
| Navbar | Neutral-Lighter (#D8D8D8) |
| Hero | Neutral-Lighter (#D8D8D8) |
| Customer Problem | Neutral-Lighter (#D8D8D8) |
| USP | Neutral-Lighter (#D8D8D8) |
| ServiceBrands | Neutral-Darkest (#000000) |
| CWRstats | Neutral-Lighter (#D8D8D8) |
| Testimonials | Neutral-Lighter (#D8D8D8) |
| ServiceProcess | Neutral-Darkest (#000000) |
| ThreePillars | Neutral-Lighter (#D8D8D8) |
| ContactCTA | Neutral-Lighter (#D8D8D8) |
| Footer | Neutral-Lighter (#D8D8D8) |

## Implementation Guidelines

1. **Text Contrast**: Ensure all text has sufficient contrast against background colors (WCAG AA compliance minimum)
2. **Consistency**: Use the defined colors consistently across components
3. **UI Elements**: 
   - Buttons on dark backgrounds: Neutral-Lighter text with Casal or Casal-Light background
   - Buttons on light backgrounds: Neutral-Lighter text with Casal or Cocoa-Bean background
4. **Accessibility**: Test all color combinations for accessibility compliance
5. **Hover States**: Use darker versions of the same color for hover states (e.g., Casal → Casal-Dark)

## Tailwind Implementation

These colors will be added to the Tailwind configuration for consistent usage throughout the codebase. The theme extension in tailwind.config.js will include these custom colors for easy reference in class names.

Example implementation:
```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'casal': {
          lightest: '#E9EEEE',
          lighter: '#D3DEDD',
          light: '#678E8A',
          DEFAULT: '#275E59',
          dark: '#1F4B47',
          darker: '#0F2523',
          darkest: '#0B1C1A',
        },
        'cocoa-bean': {
          lightest: '#EEE9E9',
          lighter: '#DED3D3',
          light: '#8E6565',
          DEFAULT: '#5E2424',
          dark: '#4B1C1C',
          darker: '#250E0E',
          darkest: '#1C0A0A',
        },
        'neutral': {
          lightest: '#F2F2F2',
          lighter: '#D8D8D8',
          light: '#B2B2B2',
          DEFAULT: '#7F7F7F',
          dark: '#4C4C4C',
          darker: '#191919',
          darkest: '#000000',
        },
      },
    },
  },
}
``` 