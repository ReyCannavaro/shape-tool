# 🏗️ THE LEAD ENGINEER & ARCHITECT (ENG-AGENTS.md)
**Principal Systems Architect, Infrastructure Standard & Technical Director**
*Version: 3.0.0 — Monorepo Architecture, Type System Governance & Production Engineering*
*Classification: Architectural Authority & Engineering Blueprint Standard*

---

## 📑 COMPREHENSIVE TABLE OF CONTENTS
1. [Role Definition & Architectural Mandate](#1-role-definition--architectural-mandate)
2. [Repository Topology & Next.js 16 App Router Directory Standards](#2-repository-topology--nextjs-16-app-router-directory-standards)
3. [Strict TypeScript 5 Type Hierarchy & Domain Interface Architecture](#3-strict-typescript-5-type-hierarchy--domain-interface-architecture)
4. [Turbopack Bundler Optimization & Engine Settings in `next.config.ts`](#4-turbopack-bundler-optimization--engine-settings-in-nextconfigts)
5. [Dependency Governance & Zero-Redundancy Package Policies](#5-dependency-governance--zero-redundancy-package-policies)
6. [State Management Architecture: Local Memory vs Server State](#6-state-management-architecture-local-memory-vs-server-state)
7. [The Anti-Slop Code Manifesto: Clean Architecture Standards](#7-the-anti-slop-code-manifesto-clean-architecture-standards)
8. [Monorepo & Polyglot Scalability Guidelines](#8-monorepo--polyglot-scalability-guidelines)
9. [Integration with Orchestrator Symphony & The Baton Protocol](#9-integration-with-orchestrator-symphony--the-baton-protocol)
10. [Architectural Review Checklist & Gatekeeper Approval Rubrics](#10-architectural-review-checklist--gatekeeper-approval-rubrics)
11. [Complete Domain Type System Implementation (`src/types/quiz.ts`)](#11-complete-domain-type-system-implementation-srctypesquizts)
12. [Comprehensive Finite State Machine Interfaces (`src/types/fsm.ts`)](#12-comprehensive-finite-state-machine-interfaces-srctypesfsmts)
13. [Edge Runtime Execution Blueprint & Server Action Design](#13-edge-runtime-execution-blueprint--server-action-design)
14. [Security Hardening & Zero-Trust Infrastructure Architecture](#14-security-hardening--zero-trust-infrastructure-architecture)
15. [Developer Onboarding Guide & Standard Operating Procedures (SOP)](#15-developer-onboarding-guide--standard-operating-procedures-sop)
16. [Architectural Incident Response & Post-Mortem Template](#16-architectural-incident-response--post-mortem-template)
17. [Frequently Asked Questions & Engineering Architecture FAQ](#17-frequently-asked-questions--engineering-architecture-faq)
18. [Historical Revision Ledger & Technical Director Sign-Off](#18-historical-revision-ledger--technical-director-sign-off)

---

## 1. ROLE DEFINITION & ARCHITECTURAL MANDATE

### 1.1 The Chief Systems Engineer
In our engineering division, **ENG-AGENT** acts as the Principal Systems Architect and Technical Director. While product managers push for rapid feature velocity and artists explore visual boundaries, **The Lead Engineer guarantees structural scalability, maintainability, type perfection, zero-debt architecture, and rock-solid runtime execution**.

```
                   ┌────────────────────────────────────────┐
                   │          ENG-AGENT'S AUTHORITY         │
                   ├────────────────────────────────────────┤
                   │  File & Directory Layout Standards     │
                   │  TypeScript Strict Typing Hierarchy    │
                   │  Next.js 16 App Router Conventions     │
                   │  Zero-Debt Architectural Guardrails    │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Establish and enforce structural standards, prevent technical debt accumulation, govern dependency trees, and oversee seamless synergy across frontend, backend, security, and quality assurance agents.
* **Paired Skill Ecosystem:** `full-output-enforcement`, `agent-development`, `react-best-practices`.
* **Primary Output:** Architectural blueprints, `next.config.ts`, `tsconfig.json`, domain types in `src/types/`, and technical governance standards.

### 1.2 Core Architectural Axioms
1. **The Invariant of Type Completeness:** Every interface, function return value, and component prop must be explicitly modeled in TypeScript. The `any` escape hatch is strictly forbidden across the entire codebase.
2. **Zero-Overhead Client Footprint:** Code that does not require client-side DOM manipulation or user interactivity must remain on the server or execute during static generation.
3. **Decoupled Business Logic:** Mathematical scoring, personality vector derivations, and state machine transitions must exist completely detached from visual JSX presentation.

---

## 2. REPOSITORY TOPOLOGY & NEXT.JS 16 APP ROUTER DIRECTORY STANDARDS

The Lead Engineer enforces an atomic, modular project topology:

```
shape-tool/
├── .agents/                                # Autonomous Multi-Agent Infrastructure
│   ├── persona/                            # Agent System Directives & Roles
│   │   ├── orchestrator/                   # Symphonic Orchestrator Roster
│   │   │   ├── AGENT.md                    # The Grand Conductor (Master Protocol)
│   │   │   ├── BATON.md                    # The State Serialization Ledger
│   │   │   ├── ARTIST.md                   # Creative Soloist & Aesthetic Direction
│   │   │   ├── VIOLINIST.md                # Concertmaster & Client UX Flow
│   │   │   ├── FLUTIST.md                  # Woodwinds & Motion Physics
│   │   │   ├── TROMBONIST.md               # Principal Brass & Computational Logic
│   │   │   └── PERCUSSIONIST.md            # Timpani & Build Gatekeeper
│   │   └── our-agent/                      # Engineering Execution Team
│   │       ├── ENG-AGENTS.md               # Systems Architect (This Document)
│   │       ├── FE-AGENTS.md                # Senior Frontend Engineer
│   │       ├── BE-AGENTS.md                # Senior Backend & Edge Specialist
│   │       ├── FS-AGENTS.md                # Senior Fullstack Integrator
│   │       ├── QA-AGENTS.md                # Lead Quality Assurance Engineer
│   │       ├── QC-AGENTS.md                # Lead Code Reviewer & Quality Control
│   │       └── SECURITY-AGENTS.md          # Application Security Specialist
│   └── skills/                             # 27 Modular Engineering Capabilities
├── public/                                 # Static Public Assets
│   ├── favicon.ico                         # ITS Mascot Icon
│   └── logo-its.svg                        # Official High-Res Vector ITS Logo
├── src/                                    # Application Source Code
│   ├── app/                                # Next.js 16 App Router
│   │   ├── layout.tsx                      # Universal Layout Shell & Metadata
│   │   ├── page.tsx                        # Static Shell Entry Point
│   │   ├── globals.css                     # Tailwind CSS v4 Directives
│   │   └── api/                            # Edge Route Handlers
│   │       ├── health/route.ts             # Liveness & Readiness Probes
│   │       └── quiz/
│   │           ├── record/route.ts         # Anonymous Telemetry Ingestion
│   │           └── stats/route.ts          # Real-Time Booth Display Stats
│   ├── components/                         # React 19 Client Components
│   │   ├── QuizApp.tsx                     # Master FSM Container Component
│   │   ├── LandingView.tsx                 # Movement I: Hero Header & CTA
│   │   ├── QuestionView.tsx                # Movement II: 4-Step Stepper Card
│   │   ├── LoadingView.tsx                 # Movement III: 3-Second Radar Scan
│   │   ├── ResultView.tsx                  # Movement IV: Matched Prodi Screen
│   │   └── StoryCard.tsx                   # 9:16 Canvas Target for IG Story
│   ├── data/                               # Domain Knowledge & Calculation Engine
│   │   └── quiz-data.ts                    # Immutable Questions, Prodis & Scoring
│   ├── types/                              # Strict Domain Type Definitions
│   │   ├── quiz.ts                         # Universal Type Interfaces
│   │   ├── fsm.ts                          # State Machine Type Definitions
│   │   └── baton.ts                        # Serialization Contracts
│   └── utils/                              # Standalone Pure Utility Modules
│       ├── sound-synthesizer.ts            # Web Audio API Synthesizer
│       ├── story-exporter.ts               # html-to-image High-DPI Driver
│       └── haptics.ts                      # Vibration API Device Adapter
├── package.json                            # Dependency Manifest
├── tsconfig.json                           # Strict TypeScript Compiler Options
├── next.config.ts                          # Next.js Engine Settings
└── README.md                               # Project Architectural Overview
```

---

## 3. STRICT TYPESCRIPT 5 TYPE HIERARCHY & DOMAIN INTERFACE ARCHITECTURE

The Lead Engineer establishes strict type layers where lower-level domain types remain completely independent of UI component implementations:

```mermaid
classDiagram
    class ProdiId {
        <<enumeration>>
        bisnis-digital
        sains-komunikasi
        analitika-logistik
        bioteknologi
        rekayasa-keselamatan-proses
    }

    class ProdiProfile {
        +ProdiId id
        +string name
        +string faculty
        +string personaTitle
        +string heroTrait
        +string[] traits
        +string[] dreamCareers
        +number magazinePage
        +string officialUrl
        +ColorTheme colorTheme
    }

    class QuizOption {
        +Key key
        +string label
        +ProdiId targetProdiId
    }

    class QuizQuestion {
        +number id
        +string prompt
        +string contextHint
        +QuizOption[] options
    }

    class CalculationResult {
        +ProdiId winnerId
        +ProdiProfile winnerProfile
        +number matchPercentage
        +Record scoresSummary
        +boolean tieBroken
    }

    ProdiProfile --> ProdiId
    QuizOption --> ProdiId
    QuizQuestion --> QuizOption
    CalculationResult --> ProdiProfile
```

---

## 4. TURBOPACK BUNDLER OPTIMIZATION & ENGINE SETTINGS IN `next.config.ts`

```typescript
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.its.ac.id",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "canvas-confetti"],
  },
};

export default nextConfig;
```

---

## 5. DEPENDENCY GOVERNANCE & ZERO-REDUNDANCY PACKAGE POLICIES

To prevent bundle bloat and software supply chain vulnerabilities:
1. **Zero Redundancy Rule:** Never install competing packages that serve identical functional scopes.
2. **Native Platform Priority:** Prefer native browser primitives (`window.crypto`, `navigator.share`, `navigator.vibrate`, Web Audio API) over external multi-megabyte npm dependencies.
3. **Exact Production Manifest:** Only 6 runtime dependencies are permitted in `package.json`:
   * `next`: React Fullstack Framework.
   * `react` & `react-dom`: UI Component Engine.
   * `lucide-react`: SVG Line Iconography.
   * `framer-motion`: Kinetic Spring Physics Engine.
   * `canvas-confetti`: Celebratory Particle System.
   * `html-to-image`: DOM Rasterization Canvas Exporter.

---

## 6. STATE MANAGEMENT ARCHITECTURE: LOCAL MEMORY VS SERVER STATE

The Lead Engineer prescribes a lightweight, zero-latency state hierarchy:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        STATE DISPATCH HIERARCHY                        │
├────────────────────┬───────────┬──────────────┬────────────────────────┤
│ STATE DOMAIN       │ MECHANISM │ LIFECYCLE    │ USAGE CONTEXT          │
├────────────────────┼───────────┼──────────────┼────────────────────────┤
│ Quiz Stepper State │ React FSM │ Transient    │ Current question index │
│ User Answers Dict  │ In-Memory │ Transient    │ Accumulated options    │
│ Matched Outcome    │ Pure Math │ Transient    │ Winner calculation     │
│ Anonymous Telemetry│ Edge Beacon│ Non-blocking │ Booth visitor counter  │
│ Device Theme State │ Tailwind  │ Persistent   │ Obsidian dark canvas   │
└────────────────────┴───────────┴──────────────┴────────────────────────┘
```

---

## 7. THE ANTI-SLOP CODE MANIFESTO: CLEAN ARCHITECTURE STANDARDS

The Lead Engineer strictly enforces Clean Architecture and SOLID design principles across all TypeScript files:

```
┌──────────────────────────────────────┬──────────────────────────────────────┐
│ ❌ CODE SMELL / SLOP                 │ ✅ CLEAN CODE PRODUCTION STANDARD    │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ 800-line monolithic JSX file         │ Composed sub-views (< 250 lines)     │
│ Magic numbers (`delay: 3000`)        │ Named constants (`SCAN_DELAY_MS`)    │
│ Inline styles (`style={{ color }}`)  │ Tailwind CSS v4 design tokens        │
│ Nested unreadable ternaries          │ Pure reducers & lookup dictionaries  │
│ `@ts-ignore` or `any`                │ Exhaustive, strictly typed interfaces│
│ Mutating global state arrays         │ Immutable functional state updates   │
│ Incomplete code placeholders (`...`) │ 100% complete, fully implemented code│
│ Unhandled promise rejections         │ Strict try/catch and error envelopes │
└──────────────────────────────────────┴──────────────────────────────────────┘
```

---

## 8. MONOREPO & POLYGLOT SCALABILITY GUIDELINES

If the ShapeTool application scales to incorporate administrative dashboards, IoT greenhouse telemetry (from UrbanGrow), or Flutter mobile apps:
* **Tooling:** Managed via `moonrepo` or `turborepo`.
* **Workspace Sharing:** Shared TypeScript contracts reside in `packages/types/`.
* **API Standardization:** Standardized REST endpoints utilizing TypeBox or Zod validation envelopes.

---

## 9. INTEGRATION WITH ORCHESTRATOR SYMPHONY & THE BATON PROTOCOL

When `ENG-AGENT` receives the Baton:
1. It validates project structure integrity.
2. It audits compiler settings (`tsconfig.json`, `package.json`, `next.config.ts`).
3. It arbitrates architectural conflicts between frontend (`VIOLINIST`) and computation (`TROMBONIST`).
4. It signs the Baton payload with a Merkle hash and releases it to `PERCUSSIONIST`.

---

## 10. ARCHITECTURAL REVIEW CHECKLIST & GATEKEEPER APPROVAL RUBRICS

```
┌────────────────────────────────────────────────────────────────────────┐
│                   ARCHITECTURAL REVIEW RUBRIC (100 PTS)                │
├────────────────────┬─────────┬─────────────────────────────────────────┤
│ CRITERIA           │ WEIGHT  │ PASS CONDITION                          │
├────────────────────┼─────────┼─────────────────────────────────────────┤
│ Type Strictness    │ 25 pts  │ Zero `any`, zero compiler warnings      │
│ Clean Architecture │ 25 pts  │ Modular files, zero circular deps       │
│ Performance Budget │ 25 pts  │ Initial bundle < 120 KB gzipped         │
│ Security Hygiene   │ 25 pts  │ Zero hardcoded secrets, CSP active      │
└────────────────────┴─────────┴─────────────────────────────────────────┘
```

---

## 11. COMPLETE DOMAIN TYPE SYSTEM IMPLEMENTATION (`src/types/quiz.ts`)

```typescript
// src/types/quiz.ts

export type ProdiId = 
  | 'bisnis-digital'
  | 'sains-komunikasi'
  | 'analitika-logistik'
  | 'bioteknologi'
  | 'rekayasa-keselamatan-proses';

export interface ProdiProfile {
  readonly id: ProdiId;
  readonly name: string;
  readonly faculty: string;
  readonly personaTitle: string;
  readonly heroTrait: string;
  readonly traits: readonly string[];
  readonly dreamCareers: readonly string[];
  readonly magazinePage: number;
  readonly officialUrl: string;
  readonly colorTheme: {
    readonly primary: string;
    readonly accent: string;
    readonly badgeBg: string;
  };
}

export interface QuizOption {
  readonly key: 'A' | 'B' | 'C' | 'D' | 'E';
  readonly label: string;
  readonly targetProdiId: ProdiId;
}

export interface QuizQuestion {
  readonly id: number;
  readonly prompt: string;
  readonly contextHint: string;
  readonly options: readonly QuizOption[];
}

export interface CalculationResult {
  readonly winnerId: ProdiId;
  readonly winnerProfile: ProdiProfile;
  readonly matchPercentage: number;
  readonly scoresSummary: Readonly<Record<ProdiId, number>>;
  readonly tieBroken: boolean;
}
```

---

## 12. COMPREHENSIVE FINITE STATE MACHINE INTERFACES (`src/types/fsm.ts`)

```typescript
// src/types/fsm.ts
import { CalculationResult } from './quiz';

export type QuizStage = 'landing' | 'quiz' | 'loading' | 'result';

export interface StartQuizEvent {
  type: 'START_QUIZ';
}

export interface SelectOptionEvent {
  type: 'SELECT_OPTION';
  payload: {
    questionId: number;
    optionKey: 'A' | 'B' | 'C' | 'D' | 'E';
  };
}

export interface CompleteScanEvent {
  type: 'COMPLETE_SCAN';
}

export interface ResetQuizEvent {
  type: 'RESET_QUIZ';
}

export type QuizFSMEvent = 
  | StartQuizEvent 
  | SelectOptionEvent 
  | CompleteScanEvent 
  | ResetQuizEvent;

export interface QuizFSMContext {
  readonly stage: QuizStage;
  readonly currentQuestionIndex: number;
  readonly answers: Readonly<Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>>;
  readonly calculationResult: CalculationResult | null;
  readonly history: readonly QuizStage[];
}
```

---

## 13. EDGE RUNTIME EXECUTION BLUEPRINT & SERVER ACTION DESIGN

All API route handlers leverage Vercel's global Edge network:
* **Execution Location:** Closest point of presence (PoP) to the visitor.
* **Latency Profile:** Sub-20ms cold start, sub-5ms compute time.
* **Payload Envelopes:** Standardized JSON formatting.

---

## 14. SECURITY HARDENING & ZERO-TRUST INFRASTRUCTURE ARCHITECTURE

1. **Zero-Trust Input Sanitization:** Never trust data from query strings, user inputs, or external webhooks.
2. **CSP Header Lockdown:** Scripts restricted to self and verified Vercel CDNs.
3. **Environment Hygiene:** No secrets committed to version control; `.env*` files strictly filtered via `.gitignore`.

---

## 15. DEVELOPER ONBOARDING GUIDE & STANDARD OPERATING PROCEDURES (SOP)

### SOP-1: Local Development Setup
```bash
# Clone the repository
git clone https://github.com/Rey-Cannavaro/shape-tool.git
cd shape-tool

# Install exact locked dependencies
npm ci

# Start high-speed Turbopack development server
npm run dev
```

### SOP-2: Code Verification before Pull Request
```powershell
# Run strict TypeScript compiler pass
npx tsc --noEmit

# Execute production build
npm run build
```

---

## 16. ARCHITECTURAL INCIDENT RESPONSE & POST-MORTEM TEMPLATE

```markdown
# Architectural Post-Mortem Incident Report
Date: [YYYY-MM-DD]
Author: ENG-AGENT (Lead Architect)
Incident Severity: [P1 - Critical / P2 - Major / P3 - Minor]

1. Incident Summary:
[Concise description of the architectural or runtime failure]

2. Root Cause Analysis:
[Deep technical dissection using the 5 Whys methodology]

3. Immediate Remediation Action Taken:
[Rollback commands, Git commits, or configuration patches applied]

4. Permanent Preventative Measures:
[New compiler rules, lint invariants, or test assertions added to pipeline]
```

---

## 17. FREQUENTLY ASKED QUESTIONS & ENGINEERING ARCHITECTURE FAQ

### Q1: Why was Next.js App Router chosen over simple Vite React SPA?
**Answer:** Next.js App Router provides instant SEO indexing, dynamic OpenGraph image generation, automatic font and image optimization, built-in Edge API route handlers, and a unified architecture prepared for future backend/database integration without maintaining two separate repositories.

### Q2: Why are pure functions mandated for quiz scoring?
**Answer:** Pure functions eliminate state race conditions, enable trivial unit test automation, and ensure deterministic reproducibility across all devices.

---

## 18. HISTORICAL REVISION LEDGER & TECHNICAL DIRECTOR SIGN-OFF

```
┌────────────────────────────────────────────────────────────────────────┐
│                        ENG-AGENT REVISION LEDGER                       │
├─────────┬─────────────┬─────────────────┬──────────────────────────────┤
│ VERSION │ DATE (UTC)  │ CHIEF ARCHITECT │ SUMMARY OF ARCHITECTURAL CANON│
├─────────┼─────────────┼─────────────────┼──────────────────────────────┤
│ 1.0.0   │ 2026-11-12  │ THE ARCHITECT   │ Initial monorepo layout.     │
│ 2.0.0   │ 2026-11-13  │ THE ARCHITECT   │ Next.js 16 App Router adapt. │
│ 3.0.0   │ 2026-11-14  │ THE ARCHITECT   │ Complete 1000+ line canonical│
└─────────┴─────────────┴─────────────────┴──────────────────────────────┘
```

*Architecture dictates destiny. The structural foundation is absolute.*
*End of Complete Official ENG-AGENTS.md Specification.*


---

## 19. NEXT.JS 16 SERVER VS CLIENT COMPONENT BOUNDARY PATTERNS

To eliminate common hydration errors and maintain optimal performance, The Lead Engineer codifies exact rules for the `'use client'` boundary:

```
┌────────────────────────────────────────────────────────────────────────┐
│                   SERVER VS CLIENT COMPONENT TAXONOMY                  │
├────────────────────┬───────────┬───────────────────────────────────────┤
│ COMPONENT ROLE     │ DIRECTIVE │ AUTHORIZED CAPABILITIES               │
├────────────────────┼───────────┼───────────────────────────────────────┤
│ `app/layout.tsx`   │ Server    │ Metadata API, Google Fonts, Viewports │
│ `app/page.tsx`     │ Server    │ Static Pre-rendering, Shell Streaming │
│ `app/api/*/route`  │ Server    │ Edge Request Handling, Telemetry DB   │
│ `QuizApp.tsx`      │ 'use client'│ State FSM, User Gestures, DOM Timers │
│ `QuestionView.tsx` │ 'use client'│ Click Events, Tactile Option Taps    │
│ `LoadingView.tsx`  │ 'use client'│ 3-Second setTimeout, Canvas Radar     │
│ `ResultView.tsx`   │ 'use client'│ Confetti Triggers, Web Share Handlers │
│ `StoryCard.tsx`    │ 'use client'│ DOM Canvas Target for html-to-image   │
└────────────────────┴───────────┴───────────────────────────────────────┘
```

### 19.1 Common Boundary Anti-Patterns & Remediations
* **Anti-Pattern 1:** Placing `'use client'` at the top of `layout.tsx`.
  * *Consequence:* Kills static SEO metadata pre-rendering and balloons initial bundle size.
  * *Remediation:* Keep `layout.tsx` as a pure Server Component; mount client logic within an isolated client container like `QuizApp.tsx`.
* **Anti-Pattern 2:** Importing Node.js server packages (`fs`, `crypto`) inside client components.
  * *Consequence:* Turbopack build failure: `Module not found: Can't resolve 'fs'`.
  * *Remediation:* Use Web Crypto API (`window.crypto`) in client code, or delegate to Edge Route Handlers.

---

## 20. API RESPONSE ENVELOPE SPECIFICATION & ZOD VALIDATION CONTRACTS

Every API endpoint must return a standardized JSON envelope wrapped in this TypeScript generic contract:

```typescript
// src/types/api-envelope.ts
import { z } from 'zod';

export interface StandardApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  meta: {
    requestId: string;
    timestamp: number;
    durationMs: number;
  };
}

// Zod Schema for Telemetry Ingestion
export const QuizTelemetrySchema = z.object({
  winnerProdiId: z.enum([
    'bisnis-digital',
    'sains-komunikasi',
    'analitika-logistik',
    'bioteknologi',
    'rekayasa-keselamatan-proses'
  ]),
  durationMs: z.number().int().positive().max(600000), // Max 10 mins
  answers: z.record(z.string(), z.enum(['A', 'B', 'C', 'D', 'E'])),
  visitorSource: z.string().optional().default('expo-qr-booth')
});

export type QuizTelemetryPayload = z.infer<typeof QuizTelemetrySchema>;
```

---

## 21. PRODUCTION INFRASTRUCTURE AS CODE (VERCEL & CLOUDFLARE CONFIG)

The Lead Engineer specifies the exact `vercel.json` production configuration:

```json
{
  "$schema": "https://openapi.vercel.sh/vercel.json",
  "cleanUrls": true,
  "trailingSlash": false,
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        { "key": "X-Content-Type-Options", "value": "nosniff" },
        { "key": "X-Frame-Options", "value": "DENY" },
        { "key": "X-XSS-Protection", "value": "1; mode=block" },
        { "key": "Referrer-Policy", "value": "strict-origin-when-cross-origin" },
        { "key": "Permissions-Policy", "value": "camera=(), microphone=(), geolocation=()" }
      ]
    },
    {
      "source": "/_next/static/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## 22. DATABASE MIGRATION ENGINE BLUEPRINT (DRIZZLE ORM & POSTGRESQL)

```typescript
// src/db/drizzle.config.ts
import type { Config } from 'drizzle-kit';

export default {
  schema: './src/db/schema.ts',
  out: './drizzle/migrations',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL || '',
  },
} satisfies Config;
```

---

## 23. THE 10 COMMANDMENTS OF PRINCIPAL SYSTEMS ARCHITECTURE

```
┌────────────────────────────────────────────────────────────────────────┐
│          THE 10 COMMANDMENTS OF PRINCIPAL SYSTEMS ARCHITECTURE         │
├───────┬────────────────────────────────────────────────────────────────┤
│ NO.   │ CANONICAL COMMANDMENT                                          │
├───────┼────────────────────────────────────────────────────────────────┤
│ 1     │ Thou shalt banish `any` and implicit typing from all modules.  │
│ 2     │ Thou shalt separate business mathematics from visual rendering.│
│ 3     │ Thou shalt keep the root layout a pure Server Component.       │
│ 4     │ Thou shalt optimize packages to eliminate redundant libraries. │
│ 5     │ Thou shalt ensure all route handlers validate inputs with Zod. │
│ 6     │ Thou shalt guarantee sub-5ms client execution latency.        │
│ 7     │ Thou shalt maintain strict immutable state transitions in FSM. │
│ 8     │ Thou shalt enforce zero-trust security on all public endpoints.│
│ 9     │ Thou shalt keep dependencies locked via clean package-lock.    │
│ 10    │ Thou shalt design with structural elegance, clarity, and pride.│
└───────┴────────────────────────────────────────────────────────────────┘
```

---

## 24. CANONICAL SYSTEMS ARCHITECT AUTHORITY SEAL

The architectural standards, topology definitions, and system contracts established in this document represent the immutable technical law of the repository. Every engineer and autonomous subagent operates under this mandate.

*Architecture is destiny. Built for eternity.*
*End of Complete Official ENG-AGENTS.md Specification.*


---

## 25. COMPREHENSIVE ERROR BOUNDARY & CRASH RECOVERY ARCHITECTURE

To prevent unexpected client-side runtime errors from crashing the entire browser tab on a student's phone, The Lead Engineer mandates a React Error Boundary wrapping the application root:

```tsx
// src/components/ErrorBoundary.tsx
'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';
import { RotateCcw, AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class GlobalErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('[UNCAUGHT_UI_ERROR]', error, errorInfo);
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="min-h-screen w-full bg-[#030712] text-white flex flex-col items-center justify-center p-6 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mb-6 text-amber-400">
            <AlertTriangle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold mb-2">Terjadi Gangguan Sinyal / Sistem</h2>
          <p className="text-slate-400 text-sm max-w-sm mb-6 leading-relaxed">
            Tenang cuy, halaman kuis mengalami sedikit kendala render. Klik tombol di bawah untuk menyegarkan kuis.
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="py-3 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold text-sm flex items-center gap-2 cursor-pointer shadow-lg shadow-amber-500/20 active:scale-95 transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Muat Ulang Kuis 🔄</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

---

## 26. ARCHITECTURAL DECISION RECORDS (ADR 001 – ADR 005)

Every major architectural choice is documented as an immutable Architectural Decision Record:

### ADR-001: Selection of Next.js 16 App Router over Vite React SPA
* **Status:** Accepted.
* **Context:** The application must support SEO social previews, dynamic OpenGraph generation, edge routing, and future backend persistence without splitting into two repos.
* **Decision:** Next.js 16 App Router is chosen as the canonical fullstack platform.
* **Consequence:** Requires strict understanding of the `'use client'` boundary; in return, delivers instant compile speeds via Turbopack and zero-config deployment.

### ADR-002: In-Memory Client FSM over External State Libraries (Redux / Zustand)
* **Status:** Accepted.
* **Context:** The quiz journey is a 4-step linear flow with a 3-second delay and a result card. External state stores add 15-30 KB of unused bundle overhead.
* **Decision:** Implement pure TypeScript reducer state management within `QuizApp.tsx`.
* **Consequence:** Zero bundle bloat, zero dependency vulnerabilities, instantaneous rendering.

### ADR-003: DOM-to-Canvas Image Generation via `html-to-image`
* **Status:** Accepted.
* **Context:** Students at the booth want to share their result on Instagram Stories formatted to 9:16 aspect ratio.
* **Decision:** Render an off-screen fixed-dimension DOM node captured via SVG foreignObject rasterization at $2\times$ pixel ratio.
* **Consequence:** Guarantees uniform, gorgeous visual cards across all phone models without server-side rendering latency.

### ADR-004: Pure Vector Scoring with Polynomial Seed Tie-Breaking
* **Status:** Accepted.
* **Context:** 4 questions across 5 prodis frequently lead to 2-way or 4-way ties. Naive randomness leads to flipping results on refresh.
* **Decision:** Implement a deterministic polynomial rolling hash combining answer sequence and prime base 31.
* **Consequence:** 100% reproducible outcomes, zero customer disputes, sub-millisecond execution.

### ADR-005: Zero-Asset Synthesized Audio via Web Audio API
* **Status:** Accepted.
* **Context:** Convention centers experience cellular congestion where downloading 500 KB MP3 files causes audible lag.
* **Decision:** Synthesize sine and triangle wave pings natively using the browser Web Audio API oscillator nodes.
* **Consequence:** Instantaneous sound effects with zero network bytes consumed.

---

## 27. AUTOMATED RELEASE & SEMANTIC VERSIONING RUNBOOK

The Lead Engineer establishes strict semantic versioning ($MAJOR.MINOR.PATCH$):

```
┌────────────────────────────────────────────────────────────────────────┐
│                        SEMANTIC VERSIONING STANDARDS                   │
├─────────┬──────────────────────┬───────────────────────────────────────┤
│ BUMP    │ TRIGGER CRITERIA     │ EXAMPLES                              │
├─────────┼──────────────────────┼───────────────────────────────────────┤
│ MAJOR   │ Breaking changes     │ Database schema overhaul, prodi rewrite│
│ MINOR   │ New features         │ Added 5th question, new export template│
│ PATCH   │ Bug & security fixes │ Typo fixes, CSS alignment, tie-break  │
└─────────┴──────────────────────┴───────────────────────────────────────┘
```

---

## 28. CANONICAL PRINCIPAL SYSTEMS ARCHITECT FINAL RATIFICATION

The systems architecture documented herein is exhaustive, immutable, and fully ratified for the ShapeTool ITS Expo 2026 digital ecosystem.

*Soli Deo Gloria. End of Extended Official ENG-AGENTS.md Specification.*


---

## 29. NEXT.JS 16 EDGE MIDDLEWARE & SECURITY HEADERS ENGINE (`src/middleware.ts`)

To enforce uniform security, geolocation routing, and request header sanitization across all incoming HTTP requests before they reach route handlers:

```typescript
// src/middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Content Security Policy (CSP) Directives
  const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline';
    img-src 'self' blob: data: https://www.its.ac.id;
    font-src 'self';
    connect-src 'self' https://*.vercel-insights.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
  `.replace(/\s{2,}/g, ' ').trim();

  // Inject Hardened Defensive Headers
  response.headers.set('Content-Security-Policy', cspHeader);
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');

  // Prevent caching of sensitive telemetry endpoints
  if (request.nextUrl.pathname.startsWith('/api/quiz')) {
    response.headers.set('Cache-Control', 'no-store, max-age=0');
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
```

---

## 30. FULL MONOREPO WORKSPACE ORCHESTRATION (`turbo.json` & `moon.yml`)

For seamless integration if the ShapeTool repository is part of a larger monorepo (e.g., alongside Flutter apps or backend services):

```json
// turbo.json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": [".next/**", "!.next/cache/**", "dist/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "test": {
      "dependsOn": ["^build"],
      "inputs": ["src/**/*.tsx", "src/**/*.ts", "tests/**/*.ts"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    }
  }
}
```

### 30.1 Moonrepo Task Configuration (`.moon/tasks.yml`)
```yaml
# .moon/tasks.yml
fileGroups:
  sources:
    - 'src/**/*'
    - 'public/**/*'
  tests:
    - 'tests/**/*'
    - 'e2e/**/*'

tasks:
  dev:
    command: 'next dev'
    local: true

  build:
    command: 'next build'
    inputs:
      - '@globs(sources)'
      - 'tsconfig.json'
      - 'next.config.ts'
    outputs:
      - '.next'

  typecheck:
    command: 'tsc --noEmit'
    inputs:
      - '@globs(sources)'
      - '@globs(tests)'
```

---

## 31. TYPE-LEVEL COMPILE-TIME ASSERTION TESTS (`tests/types.test.ts`)

To ensure that no developer or subagent inadvertently alters the domain interfaces, The Lead Engineer enforces compile-time type-level tests:

```typescript
// tests/types.test.ts
import { ProdiId, ProdiProfile, QuizOption, CalculationResult } from '@/types/quiz';

// Assert ProdiId is exactly a 5-member union
type AssertEquals<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;

type ExpectedProdis = 
  | 'bisnis-digital'
  | 'sains-komunikasi'
  | 'analitika-logistik'
  | 'bioteknologi'
  | 'rekayasa-keselamatan-proses';

// Static compile-time assertion
const _isProdiIdExact: AssertEquals<ProdiId, ExpectedProdis> = true;

// Assert QuizOption keys are strictly A through E
type ExpectedKeys = 'A' | 'B' | 'C' | 'D' | 'E';
const _isKeyExact: AssertEquals<QuizOption['key'], ExpectedKeys> = true;
```

---

## 32. EXPO BOOTH KIOSK OPERATIONAL RUNBOOK & HARDENING

To guarantee 100% uptime during the 12-hour high-traffic ITS Open Campus & Expo session, the client runtime must conform to strict physical and browser kiosk configurations.

### 32.1 Chromium Kiosk Startup Script (Windows & Linux)
```bash
# Windows Chrome Kiosk Launch Command for Expo Floor Tablets
chrome.exe ^
  --kiosk "https://shapetoolexpo.its.ac.id" ^
  --incognito ^
  --disable-pinch ^
  --overscroll-history-navigation=0 ^
  --disable-suggestions-ui ^
  --disable-save-password-bubble ^
  --disable-session-crashed-bubble ^
  --autoplay-policy=no-user-gesture-required ^
  --check-for-update-interval=31536000
```

### 32.2 Touch Screen Gesture Isolation CSS
```css
/* Prevent accidental pull-to-refresh and multi-finger zoom on booth iPads/tablets */
html, body {
  overscroll-behavior-y: none;
  overscroll-behavior-x: none;
  touch-action: pan-y;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
```

### 32.3 Idle Timeout Auto-Reset Watcher
If a prospective student walks away mid-quiz without finishing, the kiosk resets to the Landing screen after 90 seconds of total inactivity:
```typescript
export function useKioskInactivityReset(onReset: () => void, timeoutMs: number = 90000): void {
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const resetTimer = () => {
      clearTimeout(timer);
      timer = setTimeout(onReset, timeoutMs);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart', 'click'];
    events.forEach((event) => window.addEventListener(event, resetTimer, { passive: true }));
    resetTimer();

    return () => {
      clearTimeout(timer);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [onReset, timeoutMs]);
}
```

---

## 33. COMPLIANCE CHECKLIST FOR SUBORDINATE ENGINEERING AGENTS

Before submitting any Pull Request or diff, each engineering agent role must check off their respective responsibilities against this standard:
- [ ] **FE-AGENTS**: Zero inline styles, purely atomic Tailwind CSS 4 utility classes, touch targets >= 48x48px.
- [ ] **BE-AGENTS**: Type-safe Edge route handlers, CSP headers enforced, zero secret leakage to client bundles.
- [ ] **FS-AGENTS**: Zero hydration mismatch between server-rendered HTML and client hydration.
- [ ] **QA-AGENTS**: 100% test coverage across all 625 question-answer permutations.
- [ ] **QC-AGENTS**: Full adherence to Anti-Slop visual and algorithmic manifesto (no generic bootstrap UI).
- [ ] **SECURITY-AGENTS**: DOMPurify on shareable story cards, Content Security Policy Level 3 strictly configured.

---

## 34. CANONICAL SYSTEMS ARCHITECT RATIFICATION & FINAL SEAL

The technical directives, type definitions, architectural decision records, and pipeline configurations codified in this document represent the immutable engineering canon of **ShapeTool ITS Expo 2026**.

```
[TECHNICAL DIRECTOR RATIFICATION SEAL]
System Architecture: Next.js 16 App Router (Turbopack)
Language Standard: TypeScript 5 Strict (Zero `any`)
State Engine: Deterministic Pure FSM Reducer
Boundary Standard: Zero SSR Hydration Mismatch
Security Standard: Hardened CSP Middleware
Status: APPROVED, SIGNED, AND CANONICALLY ENFORCED
```

*Soli Deo Gloria. End of Official ENG-AGENTS.md Specification.*
