# Component Manifest

This document maps all the visible landing page sections to their respective source files in the LINKO repository, including any shared sub-components and design system tokens.

## Landing Page Component Map

| Section | File Path | Component Name | Shared Sub-components | Notes |
|---------|-----------|----------------|------------------------|-------|
| **Hero** | `src/components/marketing/Hero.tsx` | `Hero` | `Container`, `Section`, `Heading`, `Text`, `Button` | The main hero section with glowing background tokens and floating Lucide icons. |
| **Features** | `src/components/marketing/Features.tsx` | `Features` | `Container`, `Section`, `SectionTitle`, `Card`, `Text` | 2x2 Bento Box grid displaying the four core methodology pillars. |
| **Impact Stats & Benefits** | `src/components/marketing/WhyLinko.tsx` | `WhyLinko` | `Container`, `Section`, `SectionTitle`, `Card`, `Heading`, `Text` | Displays the "Our Impact" stats bar alongside a 3-column benefits grid in a full-width bento layout. |
| **Roadmap & Curriculum** | `src/components/marketing/Curriculum.tsx` | `Curriculum` | `Container`, `Section`, `SectionTitle`, `Card`, `Heading`, `Text` | A horizontal progression timeline displaying the four learning stages with checklist bullets. |
| **Testimonials** | `src/components/marketing/Testimonials.tsx` | `Testimonials` | `Container`, `Section`, `SectionTitle`, `Card`, `Heading`, `Text` | A compact, top-heavy grid layout displaying student reviews and 5-star ratings. |
| **Process** | `src/components/marketing/HowItWorks.tsx` | `HowItWorks` | `Container`, `Section`, `SectionTitle`, `Card`, `Heading`, `Text` | A stylized process pipeline featuring glowing connectors and premium floating cards. |
| **FAQ** | `src/components/marketing/FAQ.tsx` | `FAQ` | `Container`, `Section`, `SectionTitle`, `Card`, `Text` | An interactive accordion for common questions with very subtle primary background tinting. |
| **Final CTA** | `src/components/marketing/FinalCTA.tsx` | `FinalCTA` | `Container`, `Section`, `Heading`, `Text`, `Button`, `Badge` | A full-width high-conversion banner utilizing primary/accent color background blurs. |
| **Footer** | `src/components/layout/Footer.tsx` | `Footer` | `Container`, `Heading`, `Text` | Contains the logo, Quick Links, Programs, and Social contact information. |

## Shared UI Primitives

The landing page heavily relies on a unified library of reusable UI primitives located in `src/components/ui/` and `src/components/layout/`. 

These components enforce our design system and are reused across almost every marketing section above:

- **`Section`**: Controls vertical flow, global rhythm padding (`spacing="default" | "tight" | "none"`), and container bounding.
- **`Container`**: Controls the maximum responsive width of the content constraints (`size="default" | "narrow" | "full"`).
- **`Card`**: Controls depth, border hierarchy, hover elevations, and glassmorphism styling (`variant="elevated" | "outline"`).
- **`SectionTitle`**: Generates the standardized `Eyebrow -> Title -> Description` header block used across 6+ sections.
- **`Heading` & `Text`**: Controls all typography, responsive scaling, and font weights (`variant="muted"`, `size="heading-4"`).
- **`Badge` & `Button`**: Controls interactive states, standard CTAs, and semantic tags (`variant="primary" | "accent" | "success"`).

## Shared Design Tokens
All components rely exclusively on Tailwind CSS configuration variables (CSS custom properties) defined globally:
- **Colors**: `bg-background`, `bg-muted`, `bg-primary`, `bg-accent` (and their respective fractional opacities for blurs/glows).
- **Shadows**: `shadow-sm`, `shadow-xl`, `shadow-linko`
- **Border Radius**: Defined within the UI primitives (e.g., `rounded-xl`, `rounded-2xl`, `rounded-3xl` cards).
- **Animations**: Reuses `framer-motion` variants `fadeUpVariant` and `staggerContainerVariant` imported from `src/lib/motion/variants.ts`.
