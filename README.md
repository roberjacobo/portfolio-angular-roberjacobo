# Portfolio — Roberto Jacobo

[![CI](https://github.com/roberjacobo/portfolio-angular-roberjacobo/actions/workflows/ci.yml/badge.svg)](https://github.com/roberjacobo/portfolio-angular-roberjacobo/actions/workflows/ci.yml)

Personal portfolio website, live at [www.robjacobo.dev](https://www.robjacobo.dev). Single-page application with three routes: home (hero + about, with a compact "beyond the code" strip), experience (technologies, companies), and writing (published articles, linking out to Medium).

## Stack

| Layer | Technology |
|---|---|
| Framework | Angular 22 (NgModule-based, TypeScript 6) |
| UI components | Custom components, plain modern CSS (design tokens, glassmorphism) |
| Icons | Inline SVG — UI icons from Lucide (`app-icon` component), tech logos from `simple-icons` |
| Scroll animations | AOS (bundled from npm) |
| Unit tests | Vitest (`@angular/build:unit-test` builder, jsdom) |
| Linting | ESLint 10 (flat config) + typescript-eslint |
| Package manager | pnpm |
| Hosting | GitHub Pages (`docs/` folder, custom domain) |

No UI library: drawer, cards, buttons, and chips are hand-built components with accessible markup (ARIA roles, keyboard navigation) styled with CSS custom properties.

## Requirements

- Node.js >= 24.15 (runtime for the Angular CLI; never invoked directly)
- pnpm >= 11

## Getting started

```bash
pnpm install
pnpm start          # dev server at http://localhost:4200, opens the browser
```

The dev server binds `0.0.0.0`, so the site is also reachable from other devices on the local network via the machine's IP.

## Commands

```bash
pnpm start          # dev server with live reload
pnpm build          # production build to dist/portfolio
pnpm watch          # development build in watch mode (no server)
pnpm test           # unit tests (Vitest, jsdom)
pnpm lint           # ESLint
pnpm lint:fix       # ESLint with auto-fix
```

## Project structure

```
src/
├── app/
│   ├── home/                  # feature module: hero, about + home page
│   │   ├── components/
│   │   └── pages/
│   ├── experience/            # feature module: technologies, companies + experience page
│   │   ├── components/
│   │   └── pages/
│   ├── writing/               # feature module: article list page (posts link to Medium)
│   │   └── pages/
│   ├── shared/                # sidebar (drawer), card, icon + SharedModule
│   ├── models/                # TypeScript interfaces (content, nav items, icon names)
│   ├── app.module.ts          # root module: routing, HashLocationStrategy
│   └── app-routing.module.ts  # routes: /home, /experience, fallback → /home
├── objects.ts                 # site content: technologies list, company history
├── styles.css                 # design tokens, reset, global section styles
└── index.html                 # meta/OpenGraph tags (no external resources)
```

## How it works

### Architecture

- **NgModules, not standalone components.** Every component declares `standalone: false` and belongs to a feature module (`HomeModule`, `ExperienceModule`, `SharedModule`).
- **Routing uses `HashLocationStrategy`** (URLs like `/#/home`) so deep links work on GitHub Pages without server-side rewrites. Unknown routes redirect to `/home`.
- **Section navigation** works through URL fragments: the drawer links to route + fragment (e.g. `/home#hobbies`) and the Angular router's anchor scrolling jumps straight to the matching element ID. Landings are instant by design — global `scroll-behavior: smooth` is intentionally absent so a link never drops you on the wrong section and then animates.

### UI components (all custom, in `shared/` and feature modules)

- **Drawer** (`shared/sidebar`): fixed `<aside>` + backdrop, opens from the right with a transform transition. Closes on backdrop click, close button, or Escape. Nav data is a typed `NavItem[]` in the component.
- **Icons** (`shared/icon`): `<app-icon name="...">` renders an inline SVG (Lucide paths, ISC license) sized `1em` and colored with `currentColor`. Icon names are the `IconName` union in `models/interfaces.ts` — adding an icon means adding a case to the template and the union.
- **Tech logos** (`experience/technologies`): brand paths come from the `simple-icons` package (CC0) — imported per brand in `src/objects.ts`, so only the icons in use are bundled. They render monochrome and fade to their brand color on hover, driven by a `--brand` custom property set per item. Brands missing upstream fall back to an inline path (SQL, Azure) or an `imageUrl`; image logos are drawn as a CSS mask filled with `currentColor`, so they follow the same monochrome-to-brand-color behaviour. Below the grid, practice areas that have no logo (LLM Infrastructure, AI Agents, DevOps) are listed as chips.
- **About panel** (`home/about`): editorial glass panel — eyebrow + title column, lead paragraph, accent pull-quote, and a compact "Beyond the code" chip strip (`id="hobbies"`, the drawer's Hobbies link lands here).
- **Cards** (`shared/card`): plain `<article>` with logo header; used in the companies carousel (horizontal scroll + `scroll-snap`).

### Content

Site content is data, not markup. The hero identity, about text, contact links, company history, technology list, practice-area chips, and published articles all live in `src/objects.ts`, typed by the interfaces in `src/app/models/interfaces.ts`. To add a company, technology, focus area, or blog post, edit that file — no template changes needed. Only company logos remain as image assets, in `src/assets/`.

Blog posts are entries in the `writing.posts` array (title, summary, date, external URL); the writing page renders them as cards that link out to the original publication.

### Styling

- **Design tokens** in `src/styles.css` (`:root` custom properties): colors, accent (`--color-accent`), spacing scale (`--space-*`), layout (`--page-max-width`, `--page-inline`), glass tokens (`--glass-bg`, `--glass-blur-sm/md/lg`, `--glass-border`), depth levels (`--depth-1/2/3`), radii, and transition durations. Components consume tokens — change the look in one place.
- **Layered background system** (base → ambient lights → grid → noise → glass → content): sections paint ambient `radial-gradient` lights from a shared aurora palette (`--aurora-*`) over near-black base colors (`--background`/`--background-secondary`), layered with a near-invisible blueprint grid (`--bg-grid`) and a global SVG film-grain overlay — no background images anywhere.
- **Composition rhythm**: sections alternate layout instead of stacking everything centered — hero is left-weighted, about is a centered editorial panel, technologies is a full-width glass band, companies is a full-width snap carousel, writing is left-weighted. Ambient lights sit opposite the content to balance each section. Every section opens with the shared eyebrow + title treatment (`.section-eyebrow`/`.section-title`).
- **Glassmorphism identity**: translucent panels with `backdrop-filter: blur()`; floating controls (drawer, menu button) use stronger blur and deeper shadows than in-flow cards.
- **Mobile-first care**: full-screen sections use `min-height: 100dvh` (correct on phones with dynamic URL bars), fluid sizes via `clamp()`/`vw`, and the drawer caps at `85vw` on narrow screens.
- **Motion**: AOS handles scroll reveals (`data-aos` attributes); component transitions are explicit and disabled under `prefers-reduced-motion`.

### Performance

- **Zoneless change detection** — no `zone.js` in the production bundle (`provideZonelessChangeDetection`).
- **Lazy routes** — `/experience` and `/writing` load on demand; the initial bundle carries only the home page (~88 KB transferred).
- **Zero external requests** — AOS is bundled, fonts are system-ui, backgrounds are CSS gradients. Everything ships from the site's own origin.

### Tests

Vitest runs through the Angular CLI (`pnpm test`) in a jsdom environment. Specs live next to their components (`*.spec.ts`).

### Code style

ESLint flat config (`eslint.config.mjs`): tab indentation, single quotes, mandatory semicolons, LF line endings. Run `pnpm lint` before committing.

### Package management

pnpm only — there is no `package-lock.json`, the lockfile is `pnpm-lock.yaml`. pnpm-specific settings live in `pnpm-workspace.yaml`:

- `allowBuilds`: native toolchain packages allowed to run install scripts (esbuild, @parcel/watcher, lmdb, msgpackr-extract).
- `overrides`: forces a patched `@modelcontextprotocol/sdk` inside the Angular CLI until upstream ships the fix.

### Continuous integration

GitHub Actions (`.github/workflows/ci.yml`) runs lint, tests, and the production build on every push and pull request to `main`.

## Deployment

The site deploys to GitHub Pages from the `docs/` folder on `main`, with the custom domain set via a `CNAME` file.

```bash
pnpm build:github     # custom-domain build (base-href ./) → docs/ + CNAME
pnpm build:github2    # repo-path build (base-href /portfolio-angular-roberjacobo/) → docs/ + CNAME
```

Both pipelines: build → clear `docs/` → copy `dist/portfolio/browser/` into `docs/` (structure preserved) → write `CNAME`. After running one, commit and push; GitHub Pages serves the result.
