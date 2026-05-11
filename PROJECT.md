# abhilash-portfolio — Complete Project Reference

> A single-page portfolio website for **Abhilash Makode** — AWS Cloud Engineer & DevOps Specialist.
> Built with React 19 + TypeScript 5.9 + Vite 8. Hosted on GitHub Pages via CI/CD.

---

## 0. How This Project Works

**Language:** TypeScript (`.tsx`/`.ts`), vanilla CSS, one HTML entry point.

**Runtime:**
- **Browser** — static SPA, no backend, no database, no API calls. All content is hardcoded in `src/data/`.
- **Dev:** Node.js 20 + Vite dev server (port 5173)
- **Prod:** Built to static files → GitHub Pages
- **Container:** Docker (Ubuntu + Node 20)

**Flow:**
1. `index.html` loads `/src/main.tsx`
2. `main.tsx` mounts `<App />` into `<div id="root">`
3. `App.tsx` assembles all sections in order: Hero → About → Experience → Projects → Skills → Resume → Certifications → Contact
4. Each section reads data from `src/data/` files
5. `npm run build` → Vite compiles TypeScript → JS, outputs to `dist/`
6. GitHub Actions CI/CD runs lint → type-check → build → deploy on push to `opencode`

---

## 1. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Framework | React | ^19.2.0 |
| Language | TypeScript | ~5.9.3 |
| Build Tool | Vite | ^8.0.0-beta.13 |
| Animation | Framer Motion | ^12.35.2 |
| Icons | Lucide React | ^0.577.0 |
| PDF Viewer | react-pdf | ^9.2.1 |
| Linter | ESLint | ^9.39.1 |
| Container | Docker (Ubuntu + Node 20) | — |
| CI/CD | GitHub Actions | — |
| Hosting | GitHub Pages | — |

---

## 2. Project Structure

```
abhilash-portfolio/
├── .github/workflows/deploy.yml    # CI/CD: test → build → deploy
├── AGENTS.md                        # AI agent instructions
├── Dockerfile                       # Ubuntu + Node 20 container
├── PROJECT.md                       # This file
├── color-palettes.html              # Color palette preview page
├── eslint.config.js                 # ESLint flat config
├── index.html                       # HTML entry + SEO/OG meta tags
├── package.json                     # Dependencies & scripts
├── tsconfig.json                    # Root TS config
├── tsconfig.app.json                # App TS config (ES2022, strict)
├── tsconfig.node.json               # Node TS config (vite.config.ts)
├── vite.config.ts                   # Vite config (base: /abhilash-portfolio/)
├── vitest.config.ts                 # Vitest config (jsdom)
├── public/
│   ├── Abhilash_Makode_Resume.pdf   # Downloadable PDF resume
│   └── profile.png                  # Profile photo / favicon
└── src/
    ├── main.tsx                     # React entry point
    ├── App.tsx                      # Root component
    ├── App.css                      # CSS @import aggregator
    ├── index.css                    # Global reset
    ├── components/
    │   ├── layout/
    │   │   ├── Navigation.tsx        # Sticky navbar + mobile hamburger
    │   │   └── Footer.tsx            # Footer with links + social icons
    │   ├── sections/
    │   │   ├── Hero.tsx              # Landing (typewriter, stats, CTA)
    │   │   ├── About.tsx             # Bio, photo, highlight cards
    │   │   ├── Experience.tsx        # Job timeline
    │   │   ├── Projects.tsx          # Project cards grid
    │   │   ├── Skills.tsx            # Tabbed skill categories + marquee
    │   │   ├── Resume.tsx            # PDF viewer modal + download
    │   │   ├── Certifications.tsx    # Certification cards
    │   │   └── Contact.tsx           # Contact form + methods + socials
    │   ├── ui/
    │   │   ├── AnimatedSection.tsx    # Scroll-triggered fade-in
    │   │   ├── ScrollProgress.tsx     # Top scroll progress bar
    │   │   ├── SkillBadge.tsx         # Skill pill badge
    │   │   ├── StatCounter.tsx        # Animated number counter
    │   │   └── TechMarquee.tsx        # Infinite scrolling tech names
    │   └── icons/
    │       └── CustomIcons.tsx        # 16 SVG icons (AWS, Docker, K8s, etc.)
    ├── data/                          # Static content (no API calls)
    │   ├── experiences.ts            # 4 job entries
    │   ├── projects.tsx              # 6 featured projects
    │   ├── skillCategories.tsx       # 8 categories, 100+ skills
    │   ├── certifications.ts         # 4 certifications
    │   ├── roles.ts                  # 9 roles for typewriter
    │   ├── resume.ts                 # Full resume data object
    │   └── techStack.ts              # 35 tech names for marquee
    ├── hooks/
    │   ├── useAnimatedCounter.ts     # Scroll-triggered number counter
    │   └── useTypewriter.ts          # Typing/deleting animation
    ├── styles/                        # Vanilla CSS
    │   ├── globals.css               # CSS variables, bg, responsive
    │   ├── animations.css            # Keyframes, buttons, progress bar
    │   └── components/               # One CSS file per section
    │       ├── navigation.css        # Navbar, mobile menu, badges
    │       ├── hero.css              # Hero layout, stats, typewriter
    │       ├── about.css             # Bio grid, image, highlights
    │       ├── experience.css        # Timeline, items
    │       ├── projects.css          # Project cards, tech tags
    │       ├── skills.css            # Tabs, panels, badges, marquee
    │       ├── resume.css            # Resume section, PDF viewer
    │       ├── certifications.css    # Cert cards
    │       ├── contact.css           # Form, methods, socials
    │       └── footer.css            # Footer + section base styles
    ├── types/
    │   └── index.ts                  # TypeScript interfaces
    └── utils/
        └── resumeGenerator.ts        # HTML resume generator
```

---

## 3. Key Components

### Layout
| Component | File | Purpose |
|-----------|------|---------|
| Navigation | `layout/Navigation.tsx` | Sticky navbar with desktop links, mobile hamburger, "Available" badge |
| Footer | `layout/Footer.tsx` | Brand, nav links, social icons (GitHub, LinkedIn, Email), copyright |

### Sections (rendered in order in App.tsx)
| Component | File | Data Source | Description |
|-----------|------|-------------|-------------|
| Hero | `sections/Hero.tsx` | `roles.ts` | Full-viewport landing: typewriter role cycling, CTA buttons, 4 stat counters, scroll indicator |
| About | `sections/About.tsx` | static text | Photo + bio, 4 highlight cards (AWS, DevOps, Security, DB) |
| Experience | `sections/Experience.tsx` | `experiences.ts` | Vertical timeline of 4 jobs with markers |
| Projects | `sections/Projects.tsx` | `projects.tsx` | 3-column responsive grid of 6 project cards with tech tags |
| Skills | `sections/Skills.tsx` | `skillCategories.tsx`, `techStack.ts` | Infinite tech marquee + 8 tabbed skill categories |
| Resume | `sections/Resume.tsx` | `Abhilash_Makode_Resume.pdf` | CTA with PDF viewer modal (react-pdf) + download |
| Certifications | `sections/Certifications.tsx` | `certifications.ts` | 4 cert cards with Award icon |
| Contact | `sections/Contact.tsx` | static | Contact card, 4 methods, social links, message form |

### UI Components
| Component | File | Description |
|-----------|------|-------------|
| AnimatedSection | `ui/AnimatedSection.tsx` | Scroll-triggered fade-in + slide-up wrapper (uses `useInView`) |
| ScrollProgress | `ui/ScrollProgress.tsx` | Fixed top progress bar (uses `useScroll` + `useSpring`) |
| StatCounter | `ui/StatCounter.tsx` | Number animates from 0 on scroll into view |
| SkillBadge | `ui/SkillBadge.tsx` | Colored skill pill with cycling accent colors |
| TechMarquee | `ui/TechMarquee.tsx` | Infinite horizontal scroll of tech names |

### Hooks
| Hook | Description |
|------|-------------|
| `useTypewriter` | Cycles through an array of strings (type → pause → delete → next) |
| `useAnimatedCounter` | Counts 0 → target via requestAnimationFrame, triggered on scroll |

---

## 4. Data Layer

All content is static TypeScript arrays/objects in `src/data/`:

| File | Content |
|------|---------|
| `experiences.ts` | 4 jobs: Mindtrail (2021–Present), Freelancer (2022–Present), Hexaware (2018–2019), VanraSoft (2017–2018) |
| `projects.tsx` | 6 projects: AI CRM, Chatbot, Hobby Class, Fintech, Healthcare, Multi-Cloud Migration |
| `skillCategories.tsx` | 8 categories × 100+ skills with icon references |
| `certifications.ts` | AWS Solutions Architect, AWS Developer Associate, K8s Admin, DevOps Engineer |
| `roles.ts` | 9 roles for typewriter animation |
| `resume.ts` | Full resume: personal info, experience, education, skills, certs, projects |
| `techStack.ts` | 35 tech names for marquee animation |

---

## 5. Design System

### Colors (Midnight Ember palette)
| Variable | Hex | Usage |
|----------|-----|-------|
| `--neon-cyan` | `#ffb300` | Primary accent (amber) |
| `--neon-purple` | `#7c4dff` | Secondary accent |
| `--neon-pink` | `#ff5252` | Tertiary accent (rust) |
| `--neon-green` | `#ff6d00` | Availability indicator (orange) |
| `--bg-primary` | `#0d0d12` | Page background |
| `--text-primary` | `#ececec` | Body text |
| `--glass-bg` | `rgba(22, 22, 30, 0.55)` | Glass card backgrounds |

### Typography
| Font | Usage | Weights |
|------|-------|---------|
| Inter | Body text | 300–800 |
| Outfit | Headings, logo | 300–800 |
| JetBrains Mono | Code labels, dates | 400–600 |

### Patterns
- **Glass cards:** `backdrop-filter: blur(16px)`, subtle border, clean hover with `translateY(-4px)`
- **Buttons:** Rounded (8px), solid amber fill or outline, `translateY(-2px)` on hover
- **Sections:** `max-width: 1200px`, centered, `padding: 5rem 2rem`
- **Animations:** Subtle Framer Motion fade-in + slide-up on scroll

---

## 6. CI/CD Pipeline

File: `.github/workflows/deploy.yml`

Triggered by push to `opencode` branch or manual dispatch.

```
[test] → npm ci → npm run lint → npx tsc -b
[build] → needs test → npm ci → npm run build → upload dist/
[deploy] → needs build → deploy-pages@v4 → github-pages
```

---

## 7. Docker

```bash
docker build -t abhilash-portfolio .
docker run -p 5173:5173 abhilash-portfolio
# → http://localhost:5173
```

---

## 8. Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | `tsc -b && vite build` |
| `npm run lint` | ESLint on all files |
| `npm run preview` | Preview production build |
| `npm test` | Run Vitest |

---

## 9. Quick Start

```bash
git checkout opencode
npm install
npm run dev        # → http://localhost:5173
```

Before committing:
```bash
npm run lint && npx tsc -b && npm run build
```

Branch: always use `opencode`. Push triggers automatic GitHub Pages deploy.
