# Agent Guidelines for abhilash-portfolio

This document provides instructions and conventions for agents working in this codebase.

---

## ⚠️ GIT BRANCH: ALWAYS USE `opencode`

**CRITICAL:** All commits MUST be made to the `opencode` branch. Never commit to `master` or `main`.

```bash
# Before any git operations, ensure you're on opencode branch:
git checkout opencode

# Commit workflow:
git add -A
git commit -m "your message"

# DO NOT use: git checkout master, git checkout main, or commit to master/main
```

---

## Project Overview

A modern DevOps portfolio website for **Abhilash Makode** - AWS Cloud Engineer & DevOps Specialist.

**Tech Stack:**
- React 19 + TypeScript 5.9
- Vite 8 (beta)
- Framer Motion for animations
- Lucide React for icons
- ESLint 9 (flat config)

---

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start development server (with HMR)
npm run dev

# Production build (TypeScript check + Vite build)
npm run build

# TypeScript type checking only
npx tsc -b

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

**Running Single Commands:**
```bash
# Run ESLint on specific files
npx eslint src/App.tsx

# TypeScript check specific file
npx tsc --noEmit src/App.tsx

# Vite build without type check (for speed)
npx vite build
```

---

## Code Style Guidelines

### TypeScript Configuration
- **Strict mode enabled** (`strict: true` in tsconfig.app.json)
- **No unused locals/parameters** - always remove or prefix with `_`
- **ES2022 target** with DOM and DOM.Iterable libs
- Use `verbatimModuleSyntax` - avoid `import type` shorthand

### Naming Conventions

| Element | Convention | Example |
|---------|-----------|---------|
| Components | PascalCase | `MyComponent`, `ContactForm` |
| Functions/Hooks | camelCase | `useAuth`, `handleSubmit` |
| Variables | camelCase | `userName`, `isLoading` |
| Constants | camelCase | `maxRetries`, `apiEndpoint` |
| CSS Classes | kebab-case | `.hero-section`, `.glass-card` |
| Files | PascalCase (components), camelCase (utils) | `App.tsx`, `useAuth.ts` |

### Imports

**Order (enforced by default project structure):**
1. React/Framework imports
2. Third-party libraries (framer-motion, lucide-react)
3. Internal components/hooks
4. Types/interfaces
5. Styles (CSS)

```typescript
// Correct
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github } from 'lucide-react';
import { Button } from './components';
import type { User } from '../types';
import './styles.css';

// Incorrect
import './styles.css';
import type { User } from '../types';
import { Mail } from 'lucide-react';
import { useState } from 'react';
```

### Component Patterns

**Functional Components Only:**
```typescript
// Preferred
function Hero() {
  return <section className="hero">...</section>;
}

// Avoid class components
```

**Props Interface:**
```typescript
interface ButtonProps {
  label: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children?: React.ReactNode;
}

function Button({ label, onClick, variant = 'primary', children }: ButtonProps) {
  return <button className={`btn btn-${variant}`}>{children || label}</button>;
}
```

**Avoid Inline Function Props in JSX:**
```typescript
// Preferred - define outside JSX
const handleClick = () => { /* ... */ };

// Avoid
<button onClick={() => { /* ... */ }} />
```

### CSS Conventions

**Use CSS Variables for Theming:**
```css
:root {
  --accent-primary: #00d4ff;
  --accent-secondary: #8b5cf6;
  --bg-primary: #030014;
}

.component {
  color: var(--accent-primary);
  background: var(--bg-primary);
}
```

**BEM-like Naming for Custom CSS:**
```css
.hero-section {}
.hero-section__title {}
.hero-section--active {}
```

**Prefer CSS over Inline Styles:**
- Use CSS classes for styling
- Inline styles only for dynamic values from JS

### Error Handling

**Always handle promise rejections:**
```typescript
// Preferred
try {
  const data = await fetchUser();
} catch (error) {
  console.error('Failed to fetch user:', error);
}

// Avoid unhandled promises
fetchUser(); // No catch!
```

**Use Type Guards for External Data:**
```typescript
function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' && obj !== null && 'name' in obj;
}
```

---

## Framer Motion Guidelines

**Use Meaningful Animation Variants:**
```typescript
const fadeInUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] }
};
```

**Reuse Animation Patterns:**
- Define common variants at top of file
- Use `staggerContainer` for lists
- Prefer `useInView` with `once: true` for scroll animations

---

## Accessibility

- Use semantic HTML elements (`<section>`, `<nav>`, `<main>`, `<footer>`)
- Add `alt` text for images
- Ensure color contrast meets WCAG guidelines
- Use `aria-label` for icon-only buttons

---

## Performance

- Use `React.memo()` for expensive components (avoid premature optimization)
- Lazy load images with `loading="lazy"`
- Avoid inline function definitions in render
- Use `useCallback` for event handlers passed to child components

---

## File Structure

```
src/
├── App.tsx           # Main app component
├── App.css           # Main styles
├── index.css         # Global resets/variables
├── main.tsx          # Entry point
└── assets/           # Static assets
```

---

## Common Issues & Solutions

**"Cannot find module" errors:**
- Run `npm install` to ensure dependencies are installed
- Check import paths are relative (e.g., `./components/Button` not `components/Button`)

**Type errors after refactoring:**
- Run `npx tsc --noEmit` to see all type errors
- Check for unused imports (causes TS6133 errors)

**Build fails but dev server works:**
- Usually TypeScript strict mode catching issues
- Run `npm run lint` and `npx tsc -b` to diagnose

---

## Before Committing

1. Run `npm run build` to ensure production build succeeds
2. Run `npm run lint` to check for linting errors
3. Ensure no TypeScript errors: `npx tsc -b`
4. Test in browser via `npm run preview`

---

*Last updated: April 2026*
