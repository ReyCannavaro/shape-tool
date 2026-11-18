<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# 🤖 UNIVERSAL AGENTS BLUEPRINT & COLLABORATION DIRECTIVE
**Project: "Cocoklogi: DNA Prodi Baru ITS Kamu Banget!"**  
*ShapeTool Magazine Vol. 12 × ITS Open Campus & Expo 2026*  
*Target Environment: Next.js 16.4.6 (Turbopack) | React 19.3.0 | Tailwind CSS v4.3.3 | TypeScript 5 Strict*  
*Active Development Branch: `dev`*

---

## 🎯 1. EXECUTIVE CONTEXT & PURPOSE
This file serves as the **Universal Master System Prompt & Operational Guide** for any AI Coding Agent (**Cursor, Claude Code, Windsurf, GitHub Copilot, Gemini CLI, Antigravity**) operating within this repository.

Whenever a human teammate activates an AI agent, the agent must read and adhere to the rules, folder structures, design tokens, and architectural constraints documented here.

### 1.1 The Core Mission
We are building a responsive, high-speed, tactile interactive web application for high school students visiting the **ITS Open Campus & Expo 2026** booth. Students take a 5-question situational quiz that reveals their alignment with one of the **5 new study programs at ITS** featured in **ShapeTool Magazine Vol. 12**, generating an exportable 9:16 Instagram Story DNA card.

---

## 🏛️ 2. THE 5 TARGET STUDY PROGRAMS (DOMAIN KNOWLEDGE)
The AI agent must be intimately familiar with the 5 target programs:

1. **S1 Bisnis Digital** (`bisnis-digital`)
   - **Fakultas:** CREABIZ (Desain Kreatif dan Bisnis Digital)
   - **Referensi:** ShapeTool Magazine Hal 12
   - **Fokus:** Digital business models, startup scaling, e-commerce, fintech, UI/UX management.
2. **S1 Sains Komunikasi** (`sains-komunikasi`)
   - **Fakultas:** FSAD (Sains dan Analitika Data)
   - **Referensi:** ShapeTool Magazine Hal 14
   - **Fokus:** Computational communication, social media network analysis, science storytelling, AI ethics.
3. **D4 Analitika Logistik Terapan** (`analitika-logistik`)
   - **Fakultas:** Fakultas Vokasi (FV)
   - **Referensi:** ShapeTool Magazine Hal 16
   - **Fokus:** Maritime logistics, automated warehousing, smart supply chain analytics, multimodal freight.
4. **S1 Bioteknologi** (`bioteknologi`)
   - **Fakultas:** FSAD (Sains dan Analitika Data)
   - **Referensi:** ShapeTool Magazine Hal 18
   - **Fokus:** Genetic engineering, molecular biology, bioenergy (microalgae), industrial bioprocess.
5. **S1 Rekayasa Keselamatan Proses** (`rekayasa-keselamatan-proses`)
   - **Fakultas:** FTIRS (Teknologi Industri dan Rekayasa Sistem)
   - **Referensi:** ShapeTool Magazine Hal 20
   - **Fokus:** Process safety systems, HAZOP, quantitative risk assessment, catastrophic explosion mitigation.

---

## 🎼 3. MULTI-AGENT ORCHESTRATION ROLES (`.agents/persona/`)
This repository contains detailed specifications (each over 1,000 lines) for specialized agent personas located in `.agents/persona/`:

### 3.1 The Orchestrator Division (`.agents/persona/orchestrator/`)
- **`AGENT.md` (The Grand Conductor):** Finite State Machine (FSM), view transition lifecycle (`LANDING` -> `QUESTION` -> `LOADING` -> `RESULT`).
- **`BATON.md` (State Protocol):** Single-writer state serialization standard, Merkle state integrity.
- **`ARTIST.md` (Aesthetic Soloist):** Anti-slop visual manifesto, ITS branding typography, color harmonies.
- **`VIOLINIST.md` (Concertmaster / Lead UX):** Touch ergonomics, 48px hit boxes, mobile gesture responsiveness.
- **`FLUTIST.md` (Woodwinds / Motion & Sound):** Framer Motion physics, Web Audio synthesizer, canvas confetti, 9:16 export canvas.
- **`TROMBONIST.md` (Principal Brass / Scoring Engine):** 5D vector accumulation mathematical scoring, deterministic tie-breaking.
- **`PERCUSSIONIST.md` (Timpani / Zero-Tolerance Verification):** 7-strike verification protocol, bundle budget (< 120KB gzip), kiosk circuit breakers.

### 3.2 The Engineering Division (`.agents/persona/our-agent/`)
- **`ENG-AGENTS.md`:** Principal Systems Architect & Repository Topology Lead.
- **`FE-AGENTS.md`:** Senior Frontend Engineer, React 19 Client Component & Tailwind v4 Master.
- **`BE-AGENTS.md`:** Senior Backend Engineer, Edge Route Handlers, Telemetry, and Drizzle/Postgres.
- **`FS-AGENTS.md`:** Fullstack & State Synchronization Specialist (Hydration invariants, optimistic UI).
- **`QA-AGENTS.md`:** Quality Assurance Specialist (625 answer matrix test suites, Playwright E2E).
- **`QC-AGENTS.md`:** Quality Control & Anti-Slop Code Review Inspector.
- **`SECURITY-AGENTS.md`:** Security & Kiosk Hardening Specialist (CSP Level 3, XSS sanitization, kiosk lock).

---

## 🎨 4. DESIGN TOKENS & TAILWIND CSS v4 RULES

### 4.1 Canonical ITS Color Palette
- **ITS Midnight Navy:** `#002C6C` (Primary Brand), `#001433` (Deep Background), `#001F4D` (Surface Card)
- **Electric Gold:** `#FFB800` (Accent, Badges, Highlights)
- **Cyber Cyan:** `#00E5FF` (Secondary Accent, Radar Beam, Progress Glow)
- **Gunmetal / Dark Slate:** `#0A192F` (Deep Contrast Elements)

### 4.2 Tailwind CSS v4 CSS-First Styling
- Do **NOT** use `tailwind.config.js` (Tailwind v4 uses `@theme` in `src/app/globals.css`).
- Do **NOT** write arbitrary hex codes repeatedly (`bg-[#002C6C]`). Use semantic CSS tokens or classes defined in `globals.css`.
- All class merging must use `cn(...)` from `@/lib/utils` (combines `clsx` and `tailwind-merge`).

---

## 📐 5. CODING STANDARDS & ARCHITECTURAL DIRECTIVES

### 5.1 Next.js 16 & React 19 Boundaries
1. **Root `page.tsx` and `layout.tsx`:** Keep as Server Components unless interactivity is strictly required.
2. **Client Components:** Mark explicitly with `'use client'` at line 1.
3. **No Unsafe State Mutations:** Always use pure functional updates:
   ```typescript
   setAnswers(prev => ({ ...prev, [questionId]: key }));
   ```
4. **No Hydration Mismatches:** Avoid `typeof window !== 'undefined'` checks inside JSX rendering trees. Use `useEffect` or safe client wrappers.

### 5.2 Strict TypeScript 5 Directives
- **Zero `any` Policy:** Strictly forbidden. Use generics, unknown with type narrowing, or domain types.
- **Path Aliases:** Always use `@/...` pointing to `src/...` (e.g., `@/components/...`, `@/lib/...`).
- **Domain Types:** Import canonical types from `@/types/quiz` and `@/types/api`.

### 5.3 Physical Kiosk & Touch Ergonomics (WCAG 2.2 AAA)
- **Minimum 48×48px Hit Targets:** Every button, card, and clickable element must meet this minimum target bounding box.
- **Gesture Isolation:** Kiosks must have `overscroll-behavior: none` and `touch-action: pan-y` to prevent accidental swipe-to-navigate or pinch-to-zoom on expo touchscreens.
- **Zero-Latency Visual Feedback:** Provide active tap states (`active:scale-98`) and instantaneous feedback.

---

## 📂 6. FILE PLACEMENT MAP

Agents must place new files into their strictly designated folders:

```
src/
├── app/               -> Route entries (page.tsx, layout.tsx, globals.css)
│   └── api/           -> Route handlers (health, score, telemetry)
├── components/        -> React UI components (LandingView, QuestionView, ResultView, etc.)
├── data/              -> Static datasets (quiz-data.ts, study programs info)
├── hooks/             -> Custom React hooks (useQuizEngine, useAudioEffects, etc.)
├── lib/               -> Utility functions (utils.ts, scoring-engine.ts, motion-presets.ts)
└── types/             -> TypeScript interfaces and types (quiz.ts, api.ts)
```

---

## 🚫 7. THE ANTI-SLOP CODE MANIFESTO
Any AI agent working on this repo must reject "AI Slop":
1. ❌ **No Generic Bootstrap/Grey Templates:** Keep the dark cyber-navy aesthetic with glowing neon gold and cyan accents.
2. ❌ **No Heavyweight UI Frameworks:** Do not install Material-UI, Chakra UI, Ant Design, or Bootstrap. Pure Tailwind CSS v4 and Framer Motion only.
3. ❌ **No External Audio Assets:** Audio clicks and victory chimes are synthesized directly in real-time via the Web Audio API (`useAudioEffects.ts`).
4. ❌ **No Placeholders or `// TODO` Truncation:** When writing code, write complete, production-ready, compilable code without skipping sections.
5. ❌ **No Barrel-File Overload:** Import modules directly from their designated files to keep bundle size minimal (< 120KB parsed).

---

## 🌿 8. GIT & COLLABORATION WORKFLOW FOR AGENTS
1. **Active Branch:** Always work on **`dev`** (`git checkout dev`).
2. **Never push directly to `main`:** Branch `main` is reserved for frozen production releases.
3. **Pre-Commit Verification:** Always run `npm run build` to verify exit code 0 before committing.
4. **Commit Format:** Conventional Commits (`feat(scope): ...`, `fix(scope): ...`, `refactor(scope): ...`).

*Together we create the highest standard of interactive booth experience for ITS Expo 2026!*
