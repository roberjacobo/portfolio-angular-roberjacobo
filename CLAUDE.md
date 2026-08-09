# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Angular 22 portfolio website for Rob Jacobo, deployed to GitHub Pages at www.robjacobo.dev. No UI library — all components are custom, styled with plain modern CSS. Requires Node.js >= 24.15 (toolchain runtime only).

**Package manager is pnpm** (`packageManager` field + `angular.json` cli.packageManager). Do not use npm; there is no `package-lock.json`, only `pnpm-lock.yaml`. pnpm settings (build-script approvals, overrides) live in `pnpm-workspace.yaml`. All commands go through pnpm.

## Commands

```bash
pnpm start                # Dev server (opens browser, binds 0.0.0.0)
pnpm build                # Production build (default configuration)
pnpm test                 # Unit tests (Vitest via @angular/build:unit-test, jsdom environment)
pnpm lint                 # ESLint (flat config in eslint.config.mjs)
pnpm lint:fix             # ESLint with auto-fix
```

### Deployment

GitHub Pages serves the site from the `docs/` folder. `pnpm build:github` is the full pipeline for the custom domain: builds with `--base-href ./`, deletes `docs/`, copies `dist/portfolio/browser/` into `docs/` (structure preserved), and writes the CNAME file. `build:github2` is the same pipeline but uses `--base-href /portfolio-angular-roberjacobo/` (repo-path hosting instead of the custom domain).

## Architecture

- **NgModule-based, not standalone.** Components explicitly set `standalone: false`. New components must be declared in their feature module (`HomeModule`, `ExperienceModule`, or `SharedModule`).
- **Feature modules:** `home`, `experience`, and `writing`, each split into `pages/` (routed components) and `components/` (sections composing the page). `shared/` holds `sidebar` (drawer), `card`, and `icon` plus `SharedModule`.
- **All UI is custom** — drawer, cards, buttons, chips are hand-built with ARIA roles and keyboard support. There is no component library dependency; do not add one. Every section shares the hero's visual signature: `.section-eyebrow` + `.section-title` (global classes in `styles.css`) over glass panels.
- **Icons are inline SVG** via `<app-icon name="...">` (`shared/icon`). Valid names are the `IconName` union in `src/app/models/interfaces.ts`; adding an icon means a new `@case` in the icon template plus the union member. Paths come from Lucide.
- **Tech logos come from `simple-icons`** (CC0), imported per brand in `src/objects.ts` so the bundle only carries what is used. They are monochrome, tinted to their brand color on hover via a `--brand` custom property. Add a technology by importing its `si*` export there. When a brand is missing upstream (Azure and SQL Server are absent for trademark reasons), give the entry either an inline `path` or an `imageUrl` — image logos are painted as a CSS mask over `currentColor`, so they must be single-color art with a transparent background to match the rest.
- **Design tokens live in `src/styles.css`** (`:root` custom properties): colors, accent, glass tokens (`--glass-*`), radii, transitions. Component CSS consumes tokens — style changes belong in tokens first, component CSS second.
- **Routing uses `HashLocationStrategy`** (provided in `AppModule`) so deep links work on GitHub Pages. Routes: `/home`, `/experience`, `/writing`, everything else redirects to `/home`. Section navigation relies on the router's own anchor scrolling (`anchorScrolling: 'enabled'`, `scrollPositionRestoration: 'top'`, `onSameUrlNavigation: 'reload'`) — there is no custom scroll service, and `scroll-behavior: smooth` is deliberately not set globally so links land exactly on the target section.
- **Site content lives in `src/objects.ts`** (hero identity, about text, contact links, technologies, company history, blog posts) typed by interfaces in `src/app/models/interfaces.ts`. Edit content there, not in component templates. The public positioning is deliberate: "AI Infrastructure Engineer", sober and evidence-based — keep any profile text realistic, never inflated.
- **AOS loads from a CDN in `src/index.html`** (the `aos` npm dependency is unused at runtime). Scroll animations are applied via `data-aos` attributes; component transitions respect `prefers-reduced-motion`.
- **Mobile matters**: full-screen sections use `min-height: 100dvh`, fluid sizing uses `clamp()`/`vw`. Verify portrait-phone layouts when touching section or component CSS.
- **Tests run on Vitest** (`@angular/build:unit-test` builder) in jsdom.

## Code Style

ESLint 10 flat config (`eslint.config.mjs`) enforces: tab indentation, single quotes, required semicolons, unix (LF) line endings. Run `pnpm lint` before committing.
