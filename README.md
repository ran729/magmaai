# MagmaAI

**The Authority for AI-Native R&D**

MagmaAI is a B2B SaaS platform that provides orchestration and governance for AI-native engineering organizations. Our speXAI platform sits between human intent and agentic AI systems, enabling teams to safely scale from manual coding through AI copilots into the full agentic era.

🌐 **Live Site**: [magmaai.dev](https://magmaai.dev)

---

## Overview

MagmaAI addresses the critical challenges organizations face when adopting AI-driven development:

- **AI Governance**: Prevent architectural chaos while maintaining innovation velocity
- **Safe Delegation**: Enable engineers to delegate to AI agents without requiring 10X supervision overhead
- **Orchestration**: Coordinate AI agent swarms without breaking existing systems
- **Context Preservation**: Maintain organizational memory and architectural DNA across AI-generated code

### The speXAI Platform

Our platform provides four core capabilities:

1. **Orchestration & Authorization Layer** - Operating system for AI-native R&D
2. **Spec-to-Insightful Code** - Converts human intent into structured data agents can consume
3. **Organizational Memory & Context** - Captures architectural patterns and business intent
4. **Closed-Loop Learning Flywheel** - Continuous improvement through plan vs. production analysis

---

## Tech Stack

### Core Technologies

- **Framework**: React 18.3 + TypeScript 5.5
- **Build Tool**: Vite 5.4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Styling**: Tailwind CSS 3.4 with custom magma/volcanic theme
- **Routing**: React Router v6
- **Forms**: React Hook Form + Zod validation
- **State Management**: TanStack React Query
- **Testing**: Vitest + Testing Library

### Development Tools

- ESLint with TypeScript support
- Vite SWC for fast refresh
- Custom fonts: Space Grotesk (display), Inter (body)

---

## Getting Started

### Prerequisites

- Node.js 18+ and npm (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/ran729/magmaai.git

# Navigate to project directory
cd magmaai

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:8090`

### Available Scripts

```bash
npm run dev          # Start development server with hot reload
npm run build        # Production build
npm run build:dev    # Development build (for testing)
npm run preview      # Preview production build locally
npm run lint         # Run ESLint
npm test             # Run test suite
```

---

## Project Structure

```
magmaai/
├── src/
│   ├── components/          # React components
│   │   ├── ui/             # shadcn/ui base components
│   │   ├── Hero.tsx        # Hero section with branding
│   │   ├── Problem.tsx     # Problem statement section
│   │   ├── Solution.tsx    # Platform features section
│   │   ├── Team.tsx        # Founder profiles
│   │   └── ...
│   ├── pages/              # Page components
│   │   ├── Index.tsx       # Main landing page
│   │   └── NotFound.tsx    # 404 page
│   ├── hooks/              # Custom React hooks
│   ├── lib/                # Utility functions
│   ├── assets/             # Images and static assets
│   └── App.tsx             # Root application component
├── public/                 # Public static files
├── index.html              # HTML entry point
└── vite.config.ts          # Vite configuration
```

---

## Deployment

### GitHub Pages

This project is deployed to GitHub Pages with a custom domain configuration.

**Automatic Deployment**: Pushes to the main branch trigger automatic deployment.

**Custom Domain**: Configured for `magmaai.dev` via CNAME settings.

**SPA Routing**: The `404.html` redirect ensures client-side routing works correctly on GitHub Pages.

### Build Configuration

For subdirectory hosting, set the `VITE_BASE_PATH` environment variable:

```bash
# Example: deploying to github.io/magmaai/
VITE_BASE_PATH=/magmaai/ npm run build
```

---

## Design System

### Color Palette

- **Magma Theme**: Orange/red gradient palette with glow effects
- **Volcanic Theme**: Dark surface colors for backgrounds
- **Custom Animations**: Fade-in, slide-in, scale-in effects

### Typography

- **Display Font**: Space Grotesk (headings, hero text)
- **Body Font**: Inter (paragraphs, UI elements)

### Components

Built with shadcn/ui for accessible, customizable React components including:
- Forms (Input, Textarea, Button)
- Navigation (Navbar with mobile responsiveness)
- Toast notifications
- Cards and layouts

---

## Team

**Matan Zur** - CEO
Former CTO at Similarweb, architected Data Partnership Vertical ($0→$80M ARR)

**Ran Sasportas** - CTO
Elite IDF veteran, 15+ years R&D, led Similarweb's $80M Data Vertical

---

## Contributing

This is a private project currently in development. For inquiries, please contact the team through [magmaai.dev](https://magmaai.dev).

---

## License

Copyright © 2025 MagmaAI. All rights reserved.
