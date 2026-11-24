# LINKO Web

Landing page for **LINKO**, a project-based technology education brand. Tagline: "Code. Create. Innovate." The site presents the program to parents of children who want to learn to build with code.

Live site: https://linko-web-ochre.vercel.app

## What is on the page
- Hero, features, "Why LINKO" impact stats, curriculum roadmap, how it works, testimonials, FAQ, final call to action and footer.
- The curriculum section shows four stages: Python Fundamentals, Web Development, React & Modern Frontend, and Capstone Projects.
- Login and signup forms in a modal.
- Animated background, scroll progress bar and motion effects.
- A small design system: shared `Section`, `Container`, `Card`, `Button`, `Heading` and `Text` components.

## Tech stack
Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4.

## Run locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Project structure
```text
src/
  app/                 layout, page, fonts, robots and sitemap
  components/
    marketing/         page sections (Hero, Features, Curriculum, FAQ, ...)
    layout/            Navbar, Footer, Section, Container, background
    auth/              login and signup forms, auth modal
    ui/                reusable UI primitives
  config/              site and navigation settings
  lib/                 utilities and motion variants
docs/component-manifest.md   map of each page section to its source file
```
