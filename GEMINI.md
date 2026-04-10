# GEMINI.md - Project Context for abhilash-portfolio

This file provides instructional context for Gemini CLI to understand the `abhilash-portfolio` project, its architecture, and development workflows.

## 🚀 Project Overview
A modern, responsive portfolio application built with React and TypeScript, leveraging Vite for a fast development experience.

- **Technology Stack:**
  - **Framework:** [React 19](https://react.dev/)
  - **Build Tool:** [Vite 8](https://vite.dev/) (Beta)
  - **Language:** [TypeScript 5.9](https://www.typescriptlang.org/)
  - **Linting:** [ESLint 9](https://eslint.org/)
- **Architecture:** Standard Vite-React project structure with a focus on modular components and type safety.

## 🛠️ Building and Running
The following commands are defined in `package.json`:

- **Development Server:** `npm run dev`
  - Starts the Vite development server with Hot Module Replacement (HMR).
- **Production Build:** `npm run build`
  - Compiles TypeScript and builds the application for production using Vite.
- **Linting:** `npm run lint`
  - Runs ESLint to check for code quality and style issues.
- **Preview Build:** `npm run preview`
  - Locally previews the production build.

## 📂 Directory Structure
- `src/`: Main source code directory.
  - `main.tsx`: Entry point for the React application.
  - `App.tsx`: Root component.
  - `assets/`: Static assets like images and SVGs.
- `public/`: Public assets served directly.
- `index.html`: Main HTML template.
- `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`: TypeScript configurations.
- `vite.config.ts`: Vite configuration.
- `eslint.config.js`: ESLint flat configuration.

## 📜 Development Conventions
- **Component Pattern:** Use functional components with React Hooks.
- **Type Safety:** Ensure all props and state have appropriate TypeScript interfaces or types.
- **Styling:** Prefers modern CSS (Vanilla CSS, CSS Modules, or Tailwind if integrated).
- **Code Quality:** Adhere to the rules defined in `eslint.config.js`.
- **HMR:** Rely on Vite's HMR for a fast feedback loop during development.
