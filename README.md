# 🌌 Stardock

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)
![Version](https://img.shields.io/badge/version-0.1.0-orange)

**Stardock** is a cosmic-grade CSS framework that combines atomic utility classes with elegant components. Built from the ground up with modern SCSS, it gives developers interstellar power to create responsive, accessible interfaces at warp speed.

## 📂 Project Architecture

```
stardock/
├── core/                     # Framework source and development
│ ├── src/
│ │ ├── assets/
│ │ │ └── nova.scss           # Primary SCSS entry point
│ │ ├── styles/
│ │ │ ├── base/               # Reset, typography, root variables
│ │ │ ├── components/         # Button, Card, Form styles
│ │ │ ├── grid/               # 12-column responsive grid system
│ │ │ ├── themes/             # Theme configuration (light/dark)
│ │ │ └── utilities/          # Utility classes
│ │ ├── App.tsx               # Component development playground
│ │ └── main.tsx              # Vite entry point
│ ├── public/                 # Static assets
│ ├── vite.config.ts          # Vite configuration
│ └── package.json            # Core framework dependencies
│
└── site/                     # Documentation website
├── app/
│ ├── layout.tsx              # Root layout (App Router)
│ ├── page.tsx                # Homepage
│ └── docs/                   # Documentation routes
│   ├── [id]/                 # Dynamic documentation pages
│   └── ui/                   # UI Components for docs
├── ui/                       # Website UI components
│ ├── Header.tsx              # Navigation bar
│ ├── HeroSection.tsx         # Landing page hero
│ └── Footer.tsx              # Site footer
├── library/                  # Pre-Built Components
├── globals.css               # Website-specific styles
├── next.config.ts            # Next.js configuration
└── package.json              # Website dependencies

```
