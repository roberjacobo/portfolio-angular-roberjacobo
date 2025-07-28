# Portfolio Angular Project

This is an Angular 17 portfolio website for Rob Jacobo showcasing experience, technologies, and personal information.

## Project Structure
- Angular 17 application
- PrimeNG UI components with Lara Dark Teal theme
- Modular architecture with feature modules (home, experience)
- TypeScript with ESLint configuration
- GitHub Pages deployment ready

## Common Commands

### Development
```bash
npm start                    # Start dev server with host binding
npm run watch               # Build and watch for changes
npm run watch:localnetwork  # Build for local network access
```

### Building
```bash
npm run build              # Standard build
npm run build:href         # Build with relative base href
npm run build:ghpages      # Build for GitHub Pages
npm run build:github       # Full GitHub deployment build
```

### Code Quality
```bash
npm run lint               # Run ESLint
npm run lint:fix          # Run ESLint with auto-fix
npm test                  # Run unit tests
```

### Deployment
```bash
npm run build:github2     # Build and prepare for GitHub Pages deployment
```

## Key Technologies
- Angular 17
- PrimeNG UI Library
- TypeScript
- RxJS
- AOS (Animate On Scroll)
- ESLint for code quality

## Architecture
- Feature modules: home, experience
- Shared components: card, sidebar
- Services: scroll service
- Models: TypeScript interfaces
- Custom styling with CSS

## Deployment
The project is configured for GitHub Pages deployment with custom domain (www.robjacobo.dev).