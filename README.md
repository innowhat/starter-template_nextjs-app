![Build Status](https://img.shields.io/badge/build-passing-brightgreen)
![Coverage](https://img.shields.io/badge/coverage-100%25-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

# Next.js Starter Template

Starter template\*\* for building modern [Next.js](https://nextjs.org) applications, bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app)

A unique feature of this template is its dual-router support. It comes configured with the modern **App Router** by default, while maintaining full compatibility with the traditional **Pages Router**. The modular architecture allows seamless switching between routing strategies without major refactoring.

## Key Features

- **Dual Router Support**:
    - Modern **App Router** (default)
    - Legacy **Pages Router** compatibility
    - Easy switching between routing strategies
- **Type Safety**:
    - **TypeScript** configured for maximum type safety
    - Strict type checking enabled
- **Testing Excellence**:
    - **Vitest** for lightning-fast unit testing
    - **Playwright** for comprehensive E2E testing
    - **100% code coverage** setup and enforcement
- **Code Quality**:
    - **ESLint** with strict preset
    - **Prettier** for consistent formatting
    - **Husky** for Git hooks
    - Automated PR checks
- **Performance**:
    - Optimized fonts with [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
    - [Geist](https://vercel.com/font) font integration
    - Pre-configured performance monitoring
- **Developer Experience**:
    - Hot module replacement
    - Fast refresh
    - Intuitive folder structure
    - Comprehensive documentation

## Project Structure

The project follows a domain-driven, modular architecture optimized for scalability and maintainability. It adopts the "colocation" principle - test files are placed alongside their implementation in `__tests__` folders, making the relationship between code and tests explicit and maintainable.

```
starter-template_nextjs-app/
 ┣ src/
 ┃ ┣ app/           # App Router routes
 ┃ ┃ ┣ (home)/      # Home page group
 ┃ ┃ ┣ about/       # About page
 ┃ ┃ ┣ api/         # API routes
 ┃ ┃ ┗ layout.tsx   # Root layout
 ┃ ┣ _pages/        # Pages Router (optional)
 ┃ ┃ ┣ _app.tsx     # App component
 ┃ ┃ ┗ index.tsx    # Home page
 ┃ ┣ components/    # React components
 ┃ ┃ ┣ common/      # Shared components (Header, Footer)
 ┃ ┃ ┣ ui/          # UI components (Button, Input)
 ┃ ┃ ┗ view/        # Page-specific components
 ┃ ┣ lib/           # Shared utilities
 ┃ ┃ ┣ hooks/       # Custom React hooks
 ┃ ┃ ┗ utils/       # Helper functions
 ┃ ┣ server/        # Server-side code
 ┃ ┃ ┣ actions/     # Server actions
 ┃ ┃ ┗ db/          # Database operations
 ┃ ┗ styles/        # CSS modules and global styles
 ┣ public/          # Static assets
 ┣ playwright/      # E2E tests
 ┣ coverage/        # Test reports
 ┗ config files     # Various configuration files
```

### Router Strategy

The template supports both routing strategies:

1. **App Router (Default)**
    - Modern routing in `src/app/`
    - Server components by default
    - Nested layouts
    - Route groups
    - Server actions

2. **Pages Router**
    - Traditional routing in `src/_pages/`
    - Client-side navigation
    - API routes
    - Simple page-based routing

To switch between routers:

1. Move your pages from `app/` to `_pages/` (or vice versa)
2. Update `next.config.ts` configuration
3. Adjust components for the target router's patterns

## Quick Start

1. **Clone and Install**

```bash
git clone <your-repo-url>
cd starter-template_nextjs-app
npm install   # or yarn, pnpm, bun
```

2. **Set Up Environment**

```bash
cp .env.example .env.local   # Configure your environment variables
```

3. **Start Development**

```bash
npm run dev   # or yarn dev, pnpm dev, bun dev
```

Your app will be running at [http://localhost:3000](http://localhost:3000).

### Development Workflow

1. **Create New Pages**
    - App Router: Add new route in `src/app/`
    - Pages Router: Add new page in `src/_pages/`

2. **Add Components**
    - UI components in `src/components/ui/`
    - Page components in `src/components/view/`
    - Shared components in `src/components/common/`

3. **Testing**
    - Add unit tests alongside components
    - Write E2E tests in `playwright/`
    - Run tests frequently during development

## Available Scripts

```bash
# Development
npm run dev           # Start development server
npm run build        # Build for production
npm run start        # Start production server

# Testing
npm run test         # Run unit tests (Vitest)
npm run test:watch   # Run tests in watch mode
npm run test:ui      # Open Vitest UI
npm run coverage     # Generate coverage report
npm run playwright:e2e   # Run E2E tests
npm run playwright:ui    # Open Playwright UI

# Code Quality
npm run lint         # Run ESLint
npm run lint:fix     # Fix ESLint errors
npm run format       # Format with Prettier
npm run type-check   # TypeScript type checking

# Git Hooks (Husky)
npm run prepare      # Install Husky hooks
```

## Testing Strategy

The template implements a comprehensive testing strategy:

### Unit Testing (Vitest)

- Fast, parallel test execution
- React Testing Library integration
- Component, hook, and utility testing
- Watch mode for development
- Coverage reporting

```bash
npm run test        # Run all tests
npm run test:watch  # Development mode
```

### E2E Testing (Playwright)

- Multi-browser testing
- Mobile viewport testing
- Visual regression tests
- Network interception
- Test recording

```bash
npm run playwright:e2e  # Run all E2E tests
npm run playwright:ui   # Open test explorer
```

### Code Quality Checks

```bash
npm run lint       # Check for issues
npm run format     # Format code
```

## Deployment

This template is optimized for deployment on various platforms:

### Vercel (Recommended)

```bash
npm run build
vercel deploy
```

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Fstarter-template_nextjs-app)

### Other Platforms

- AWS Amplify
- Netlify
- Docker containers
- Traditional hosting

See [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific instructions.

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for:

- Code of Conduct
- Development workflow
- Pull request process
- Testing requirements
- Style guidelines

## Support & Documentation

### Official Documentation

- [Next.js Docs](https://nextjs.org/docs)
- [Vitest Guide](https://vitest.dev/)
- [Playwright Testing](https://playwright.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### Template-Specific Docs

- [Component Guidelines](/docs/COMPONENTS.md)
- [Testing Strategy](/docs/TESTING.md)
- [Style Guide](/docs/STYLE_GUIDE.md)

## License

This project is open source under the [MIT License](LICENSE).

---

<div align="center">

**[Get Started](#quick-start)** • **[Features](#key-features)** • **[Documentation](#support--documentation)**
