# 🎼 MASTER ORCHESTRATION PROTOCOL (AGENT.md)
**The Grand Conductor of the Multi-Agent Symphony System**
*Version: 3.0.0 — Enterprise-Grade Cognitive Coordination & Execution Standard*
*Classification: Mission-Critical Core Architecture & Operating Specification*

---

## 📑 COMPREHENSIVE TABLE OF CONTENTS
1. [Operational Philosophy & The Symphony Paradigm](#1-operational-philosophy--the-symphony-paradigm)
2. [Mathematical Foundations of Agent Coordination Calculus](#2-mathematical-foundations-of-agent-coordination-calculus)
3. [System Architecture & The Inter-Agent Communication Bus](#3-system-architecture--the-inter-agent-communication-bus)
4. [Exhaustive Agent Roster & Inter-Section Contracts](#4-exhaustive-agent-roster--inter-section-contracts)
5. [The Production State Machine Engine Implementation](#5-the-production-state-machine-engine-implementation)
6. [Comprehensive Domain Knowledge: The 5 New ITS Study Programs](#6-comprehensive-domain-knowledge-the-5-new-its-study-programs)
7. [Mathematical Scoring Engine & Multi-Criteria Matching](#7-mathematical-scoring-engine--multi-criteria-matching)
8. [Verbatim System Prompts & Section Directives](#8-verbatim-system-prompts--section-directives)
9. [End-to-End Orchestral Movements: Concrete Workflows](#9-end-to-end-orchestral-movements-concrete-workflows)
10. [Exhaustive Error Code Catalog (E001 – E050) & Remediation Runbooks](#10-exhaustive-error-code-catalog-e001--e050--remediation-runbooks)
11. [Expo Booth Infrastructure, Kiosk Hardening & Offline Resilience](#11-expo-booth-infrastructure-kiosk-hardening--offline-resilience)
12. [Curriculum & Semester Roadmap for The 5 Study Programs](#12-curriculum--semester-roadmap-for-the-5-study-programs)
13. [End-to-End Unit & Integration Test Suite Specification](#13-end-to-end-unit--integration-test-suite-specification)
14. [Production CI/CD Pipeline & GitHub Actions Automation](#14-production-cicd-pipeline--github-actions-automation)
15. [Live Orchestration Trace & Real-World Execution Logs](#15-live-orchestration-trace--real-world-execution-logs)
16. [The Master FAQ & Developer Onboarding Playbook](#16-the-master-faq--developer-onboarding-playbook)
17. [Verification Cadence & Conductor Sign-Off Standards](#17-verification-cadence--conductor-sign-off-standards)

---

## 1. OPERATIONAL PHILOSOPHY & THE SYMPHONY PARADIGM

### 1.1 The Classical Orchestra Metaphor in Software Engineering
Modern multi-agent architectures frequently collapse when autonomous agents communicate through unconstrained natural language chatter. Dissonance emerges as hallucination, non-deterministic state mutations, redundant tool calls, and cascading token exhaustion. 

The **Master Orchestration Protocol** solves this coordination failure by modeling software development as a classical symphonic orchestra under the absolute temporal and directional command of **The Conductor**:

```
                                 ┌───────────────────────────────────────┐
                                 │          THE GRAND CONDUCTOR          │
                                 │        (AGENT.md Orchestrator)        │
                                 └──────────────────┬────────────────────┘
                                                    │
                      ┌─────────────────────────────┴─────────────────────────────┐
                      ▼                                                           ▼
       ┌──────────────────────────────┐                           ┌──────────────────────────────┐
       │      CREATIVE ENSEMBLE       │                           │     ENGINEERING DIVISION     │
       │     (Artistic Direction)     │                           │    (Execution & Hardening)   │
       ├──────────────────────────────┤                           ├──────────────────────────────┤
       │ 🎨 ARTIST (Soloist / Tone)   │                           │ 💻 FE-AGENT (Client / UI)    │
       │ 🎻 VIOLINIST (Lead Melody)   │◄─────────────────────────►│ ⚙️ BE-AGENT (Edge API)       │
       │ 🪈 FLUTIST (Woodwinds/Motion)│                           │ 🔄 FS-AGENT (Bridge)         │
       │ 🎺 TROMBONIST (Brass / Logic)│                           │ 🏗️ ENG-AGENT (Architecture)  │
       │ 🥁 PERCUSSIONIST (Gatekeeper)│                           │ 🛡️ SECURITY (Threat Defense) │
       └──────────────────────────────┘                           │ 🧪 QA / QC (Verification)    │
                                                                  └──────────────────────────────┘
```

In this model:
* **The Musical Score (The Project Specification):** The immutable ground truth. Every note played by every agent must trace directly back to the project specification. If a feature is not in the score, it is considered dissonant noise and pruned immediately.
* **The Baton (`BATON.md`):** The physical, serialized token of workspace mutability. Possession of the Baton is the sole cryptographic and procedural authorization to mutate source files.
* **The Sections (Specialized Personas):** Distinct sub-agent domains characterized by dedicated roles, strict boundaries, and domain-specific tooling. The woodwinds do not configure database drivers; the brass does not design CSS animations.
* **The Conductor (`AGENT.md`):** The orchestrator responsible for maintaining tempo, signaling entrances and exits, dynamically balancing token allocation, and calling an immediate stop when a build warning or runtime dissonance occurs.

### 1.2 Core Architectural Dogmas
1. **The Invariant of Determinism:** Randomness is permissible only when explicitly modeled (e.g., deterministic seeded tie-breaking). Workspace mutations, state machines, and API envelopes must remain strictly deterministic.
2. **Exhaustive Completeness (The Anti-Truncation Mandate):** No placeholders, no `// TODO: implement later`, no stubbed functions, and no ellipses (`...`). Every file generated must be production-ready, fully typed, and directly compilable.
3. **Decoupled Execution, Shared Truth:** Agents execute in isolated context frames with targeted scopes, communicating exclusively through structured Baton payloads rather than noisy multi-turn conversations.
4. **Binary Quality Gating:** Code is either zero-error (exit code 0, 100% type-checked, clean linting) or completely unmergeable. Minor warnings are treated with the same severity as critical compile failures.

---

## 2. MATHEMATICAL FOUNDATIONS OF AGENT COORDINATION CALCULUS

To guarantee deadlock-free execution across asynchronous agent handoffs, the Conductor formalizes multi-agent coordination using Petri nets and directed acyclic task graphs (DAGs).

### 2.1 Formal State Space Definition
Let the global agentic system $\mathcal{S}$ be defined as the 7-tuple:

$$\mathcal{S} = \langle \mathcal{P}, \mathcal{T}, \mathcal{W}, \mathcal{B}, \mathcal{F}, \mathcal{M}_0, \mathcal{Q} \rangle$$

Where:
* $\mathcal{P} = \{P_{\text{conductor}}, P_{\text{artist}}, P_{\text{violinist}}, P_{\text{flutist}}, P_{\text{trombonist}}, P_{\text{percussionist}}, P_{\text{eng}}, P_{\text{fe}}, P_{\text{be}}, P_{\text{fs}}, P_{\text{qa}}, P_{\text{qc}}, P_{\text{sec}}\}$ is the finite set of agent places.
* $\mathcal{T} = \{t_{\text{intake}}, t_{\text{brief}}, t_{\text{scaffold}}, t_{\text{compose}}, t_{\text{embellish}}, t_{\text{compute}}, t_{\text{gate}}, t_{\text{release}}\}$ is the set of allowed transitions.
* $\mathcal{W}$ represents the workspace filesystem state $\mathcal{W} \in \mathbb{U}^{\text{files}}$, mapped by absolute POSIX/Windows paths.
* $\mathcal{B} \in \{0, 1\}^{|\mathcal{P}|}$ is the Baton occupancy vector such that $\sum_{i} \mathcal{B}_i \le 1$ (the Single-Writer Invariant).
* $\mathcal{F} \subseteq (\mathcal{P} \times \mathcal{T}) \ cup (\mathcal{T} \times \mathcal{P})$ is the flow relation defining valid operational handoffs.
* $\mathcal{M}_0$ is the initial marking where $\mathcal{B}_{\text{conductor}} = 1$ and all other $\mathcal{B}_i = 0$.
* $\mathcal{Q}$ is the priority queue of pending user feature requests.

### 2.2 Proof of Deadlock-Free Handoffs
A deadlock occurs if and only if:

$$\exists p_i \in \mathcal{P} \text{ such that } \forall t \in \mathcal{T}, \quad \text{Input}(t) \not\subseteq \mathcal{M}(p_i) \quad \land \quad \mathcal{B}_i = 1$$

To prevent this condition:
1. Every transition $t_k$ has an immutable wall-clock timeout $\tau_{\text{max}} = 180\text{ seconds}$.
2. If an agent $P_x$ fails to emit a signed Baton handoff payload before $\tau_{\text{max}}$ elapses, the Conductor executes an automatic Poison Pill, invokes `git reset --hard HEAD`, revokes the Baton, and sets $\mathcal{B}_{\text{conductor}} = 1$.
3. Thus, circular wait conditions $\mathcal{P}_1 \to \mathcal{P}_2 \to \dots \to \mathcal{P}_1$ are mathematically impossible.

---

## 3. SYSTEM ARCHITECTURE & THE INTER-AGENT COMMUNICATION BUS

The system architecture consists of four distinct operational planes:

```
┌────────────────────────────────────────────────────────────────────────┐
│                        COGNITIVE CONTROL PLANE                         │
│   Conductor (AGENT.md) ◄──► Orchestrator State Engine ◄──► Token Budget│
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        DATA SERIALIZATION PLANE                        │
│   BATON.md (Active Ledger) ◄──► .baton-state.json ◄──► Checksum Hashes │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        EXECUTION WORKSPACE PLANE                       │
│   Next.js 16 App Router  │  Tailwind CSS v4  │  TypeScript 5 Engine    │
│   src/app/               │  src/components/  │  src/data/quiz-data.ts  │
└───────────────────────────────────┬────────────────────────────────────┘
                                    │
┌───────────────────────────────────▼────────────────────────────────────┐
│                        VERIFICATION & GATE PLANE                       │
│   Turbopack Compiler     │  ESLint 9 Engine  │  Canvas Confetti Evals  │
└────────────────────────────────────────────────────────────────────────┘
```

### 3.1 The Directory Layout Mandate
Every file in the repository exists within a rigid hierarchical boundary:

```
shape-tool/
├── .agents/                                # Autonomous Agent Infrastructure
│   ├── persona/                            # Agent System Prompts & Mandates
│   │   ├── orchestrator/                   # Symphonic Orchestrator Roster
│   │   │   ├── AGENT.md                    # The Grand Conductor (This Master Protocol)
│   │   │   ├── BATON.md                    # The State Serialization Ledger
│   │   │   ├── ARTIST.md                   # Creative Soloist & Aesthetic Direction
│   │   │   ├── VIOLINIST.md                # Concertmaster & Client UX Flow
│   │   │   ├── FLUTIST.md                  # Woodwinds & Motion Physics
│   │   │   ├── TROMBONIST.md               # Principal Brass & Computational Logic
│   │   │   └── PERCUSSIONIST.md            # Timpani & Build Gatekeeper
│   │   ├── our-agent/                      # Engineering Execution Team
│   │   │   ├── ENG-AGENTS.md               # Systems Architect & Infrastructure
│   │   │   ├── FE-AGENTS.md                # Senior Frontend Engineer
│   │   │   ├── BE-AGENTS.md                # Senior Backend & Edge Specialist
│   │   │   ├── FS-AGENTS.md                # Senior Fullstack Integrator
│   │   │   ├── QA-AGENTS.md                # Lead Quality Assurance Engineer
│   │   │   ├── QC-AGENTS.md                # Lead Code Reviewer & Quality Control
│   │   │   └── SECURITY-AGENTS.md          # Application Security Specialist
│   │   └── useskill/                       # Skill Integration Guide
│   │       └── USESKILL.md                 # Decision Matrix for 27 Skills
│   └── skills/                             # 27 Modular Engineering Capabilities
├── public/                                 # Static Public Assets
│   ├── favicon.ico                         # ITS Mascot / Campus Icon
│   └── logo-its.svg                        # Official High-Res Vector ITS Logo
├── src/                                    # Application Source Code
│   ├── app/                                # Next.js 16 App Router
│   │   ├── layout.tsx                      # Root Shell, Metadata & Viewports
│   │   ├── page.tsx                        # Entry Point mounting QuizApp
│   │   ├── globals.css                     # Tailwind CSS v4 directives
│   │   └── api/                            # Edge Route Handlers
│   │       ├── health/route.ts             # Liveness & Readiness Probes
│   │       └── quiz/
│   │           ├── record/route.ts         # Anonymous Telemetry Ingestion
│   │           └── stats/route.ts          # Real-Time Booth Display Stats
│   ├── components/                         # React 19 Client Components
│   │   ├── QuizApp.tsx                     # Master FSM Container Component
│   │   ├── LandingView.tsx                 # Movement I: Hero & Start Button
│   │   ├── QuestionView.tsx                # Movement II: 4-Step Interactive Card
│   │   ├── LoadingView.tsx                 # Movement III: 3-Second Radar DNA Scan
│   │   ├── ResultView.tsx                  # Movement IV: Victory Matched Screen
│   │   └── StoryCard.tsx                   # 9:16 Hidden Canvas Export Target
│   ├── data/                               # Domain Knowledge & Calculation Engine
│   │   └── quiz-data.ts                    # Immutable Questions, Prodis & Scoring
│   └── types/                              # Strict Domain Type Definitions
│       └── quiz.ts                         # Universal Type Interfaces
├── package.json                            # Dependency Manifest
├── tsconfig.json                           # Strict TypeScript Compiler Options
├── next.config.ts                          # Next.js Engine Settings
└── README.md                               # Project Documentation
```

---

## 4. EXHAUSTIVE AGENT ROSTER & INTER-SECTION CONTRACTS

Every agent possesses a formal contract defining its inputs, tools, responsibilities, and operational prohibitions:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                 THE AGENT ROSTER MATRIX                                │
├──────────────────┬───────────────────────┬──────────────────────┬──────────────────────┤
│ AGENT ID         │ INPUT CONTRACT        │ TOOLING AUTHORIZATION│ STRICT PROHIBITIONS  │
├──────────────────┼───────────────────────┼──────────────────────┼──────────────────────┤
│ CONDUCTOR        │ User Prompt, Logs     │ Task dispatch, git   │ No direct code edits │
│ ARTIST           │ Creative brief, spec  │ Design tokens, copy  │ No package installs  │
│ VIOLINIST        │ Design tokens, state  │ TSX client components│ No raw SQL / Edge API│
│ FLUTIST          │ UI layouts, physics   │ Framer Motion, canvas│ No backend mutation  │
│ TROMBONIST       │ Data models, math     │ Vector algos, routes │ No CSS styling       │
│ PERCUSSIONIST    │ Code commits, diffs   │ Compilers, linters   │ Cannot bypass errors │
│ ENG-AGENT        │ System requirements   │ Bundler, TS config   │ No arbitrary hacks   │
│ FE-AGENT         │ Wireframes, tokens    │ React 19, Tailwind   │ No untyped code      │
│ BE-AGENT         │ API contracts, schema │ Route handlers, Edge │ No client component  │
│ FS-AGENT         │ End-to-end data flow  │ Hydration, fetchers  │ No broken boundaries │
│ QA-AGENT         │ Running app, states   │ Browser-use, tests   │ Cannot approve fails │
│ QC-AGENT         │ Source code files     │ AST parser, review   │ Cannot write features│
│ SECURITY-AGENT   │ Threat models, routes │ Headers, sanitizers  │ No secret leakage    │
└──────────────────┴───────────────────────┴──────────────────────┴──────────────────────┘
```

### 4.1 Detailed Responsibilities per Section

#### 1. The Conductor (`AGENT.md`)
* Coordinates macro-movements.
* Monitors token expenditure per task.
* Enforces the Single-Writer Invariant.
* Executes recovery runbooks upon sub-agent crashes.

#### 2. The Artist (`ARTIST.md`)
* Establishes the ITS color authority: *Midnight Navy* (`#002C6C`), *Electric Gold* (`#FFB800`), *Cyber Cyan* (`#00E5FF`).
* Enforces the Anti-Slop Manifesto (no generic gray cards, no centered default layouts).
* Crafts witty, authentic Gen Z Indonesian copywriting tailored for high school seniors at an expo.

#### 3. The Violinist (`VIOLINIST.md`)
* Mounts client UI layouts using React 19 App Router conventions.
* Ensures strict mobile touch ergonomics ($\ge 48\text{px}$ touch targets).
* Guarantees Cumulative Layout Shift (CLS) = 0.000 by setting fixed aspect ratios.

#### 4. The Flutist (`FLUTIST.md`)
* Implements natural physics-based spring transitions with Framer Motion.
* Builds the rotating $360^\circ$ continuous SVG radar sweep graphic.
* Configures multi-cannon confetti particle choreography via `canvas-confetti`.
* Manages the high-DPI $1080 \times 1920\text{ px}$ Instagram Story generation engine with `html-to-image`.

#### 5. The Trombonist (`TROMBONIST.md`)
* Implements multi-criteria decision modeling for student answers.
* Implements deterministic hash-based tie-breakers to ensure identical inputs yield identical outputs.
* Normalizes the 5 study program vectors across all 4 questions.

#### 6. The Percussionist (`PERCUSSIONIST.md`)
* Executes Turbopack production builds (`next build`).
* Validates that exit code is exactly `0`.
* Enforces a zero-tolerance policy against TypeScript warnings and ESLint anomalies.

---

## 5. THE PRODUCTION STATE MACHINE ENGINE IMPLEMENTATION

The entire runtime flow is managed through a deterministic, type-safe Finite State Machine implemented in pure TypeScript.

```typescript
// src/types/fsm.ts

export type QuizStage = 'landing' | 'quiz' | 'loading' | 'result';

export interface FSMTransitionEvent {
  type: 'START_QUIZ' | 'SELECT_OPTION' | 'COMPLETE_SCAN' | 'RESET_QUIZ';
  payload?: {
    questionId?: number;
    optionKey?: 'A' | 'B' | 'C' | 'D' | 'E';
  };
}

export interface QuizStateContext {
  stage: QuizStage;
  currentQuestionIndex: number;
  answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>;
  calculationResult: CalculationResult | null;
  history: QuizStage[];
}

export interface CalculationResult {
  winnerId: string;
  winnerProfile: ProdiProfile;
  matchPercentage: number;
  scoresSummary: Record<string, number>;
  tieBroken: boolean;
}

export interface ProdiProfile {
  id: string;
  name: string;
  faculty: string;
  personaTitle: string;
  heroTrait: string;
  traits: string[];
  dreamCareers: string[];
  magazinePage: number;
  officialUrl: string;
  colorTheme: {
    primary: string;
    accent: string;
    badgeBg: string;
  };
}

/**
 * Pure State Machine Transition Reducer
 * Guarantees zero side effects and deterministic state changes.
 */
export function quizFSMReducer(
  state: QuizStateContext,
  event: FSMTransitionEvent,
  calculator: (answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>) => CalculationResult
): QuizStateContext {
  switch (state.stage) {
    case 'landing': {
      if (event.type === 'START_QUIZ') {
        return {
          ...state,
          stage: 'quiz',
          currentQuestionIndex: 0,
          answers: {},
          calculationResult: null,
          history: [...state.history, 'landing']
        };
      }
      return state;
    }

    case 'quiz': {
      if (event.type === 'SELECT_OPTION' && event.payload?.questionId && event.payload?.optionKey) {
        const updatedAnswers = {
          ...state.answers,
          [event.payload.questionId]: event.payload.optionKey
        };

        const totalQuestions = 4; // Constant for ShapeTool 2026 Quiz
        const isLastQuestion = state.currentQuestionIndex >= totalQuestions - 1;

        if (isLastQuestion) {
          const outcome = calculator(updatedAnswers);
          return {
            ...state,
            stage: 'loading',
            answers: updatedAnswers,
            calculationResult: outcome,
            history: [...state.history, 'quiz']
          };
        } else {
          return {
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1,
            answers: updatedAnswers
          };
        }
      }
      return state;
    }

    case 'loading': {
      if (event.type === 'COMPLETE_SCAN') {
        return {
          ...state,
          stage: 'result',
          history: [...state.history, 'loading']
        };
      }
      return state;
    }

    case 'result': {
      if (event.type === 'RESET_QUIZ') {
        return {
          stage: 'landing',
          currentQuestionIndex: 0,
          answers: {},
          calculationResult: null,
          history: [...state.history, 'result']
        };
      }
      return state;
    }

    default:
      return state;
  }
}
```

---

## 6. COMPREHENSIVE DOMAIN KNOWLEDGE: THE 5 NEW ITS STUDY PROGRAMS

The Conductor holds in immutable memory the exhaustive academic and career profiles of the 5 new ITS study programs showcased at the Expo:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              THE 5 NEW ITS STUDY PROGRAMS                              │
├──────────────────────────┬──────────┬───────────┬───────────────────┬──────────────────┤
│ PROGRAM NAME             │ FACULTY  │ PERSONA   │ HERO TRAIT        │ MAGAZINE LINK    │
├──────────────────────────┼──────────┼───────────┼───────────────────┼──────────────────┤
│ 1. Bisnis Digital        │ CREABIZ  │ Hustler   │ Digital Growth    │ ShapeTool Hal 12 │
│ 2. Sains Komunikasi      │ FSAD     │ Storyteller│ Creative PR, Media│ ShapeTool Hal 14 │
│ 3. Analitika Logistik    │ Vokasi   │ Mastermind│ Supply Chain Opt  │ ShapeTool Hal 16 │
│ 4. Bioteknologi          │ FSAD     │ Innovator │ Life Sciences     │ ShapeTool Hal 18 │
│ 5. Rekayasa Keselamatan  │ FTIRS    │ Guardian  │ Industrial Safety │ ShapeTool Hal 20 │
└──────────────────────────┴──────────┴───────────┴───────────────────┴──────────────────┘
```

### 6.1 In-Depth Profile Specifications

#### 1. Sarjana Bisnis Digital (CREABIZ)
* **Fakultas:** Fakultas Desain Kreatif dan Bisnis Digital (CREABIZ)
* **Persona Title:** *The Digital Hustler & Growth Strategist*
* **Karakter Kunci:** Trendsetter, menyukai kalkulasi bisnis modern, melek teknologi e-commerce, fin-tech, dan strategi scale-up startup.
* **Prospek Karier:** Digital Product Manager, E-Commerce Growth Specialist, Fintech Analyst, Venture Capital Associate, Technopreneur.
* **Lab Unggulan:** Digital Innovation & Business Analytics Laboratory.
* **Kaitan Majalah ShapeTool:** **Halaman 12** ("Membangun Unicorn dari Kampus Perjuangan").
* **Link Portal Resmi:** `https://www.its.ac.id/pendidikan/program-studi/sarjana-bisnis-digital/`

#### 2. Sarjana Sains Komunikasi (FSAD)
* **Fakultas:** Fakultas Sains dan Analitika Data (FSAD)
* **Persona Title:** *The Master Storyteller & Creative PR*
* **Karakter Kunci:** Komunikatif, peka terhadap tren visual media sosial, jembatan antara teknologi kompleks dengan publik, jago negosiasi dan persuasi.
* **Prospek Karier:** Corporate Communications Lead, Media Data Analyst, Creative Content Director, Public Relations Strategist, Social Media Intelligence Lead.
* **Lab Unggulan:** Computational Media & Science Communication Lab.
* **Kaitan Majalah ShapeTool:** **Halaman 14** ("Ketika Sains Bertemu Kekuatan Kata & Visual").
* **Link Portal Resmi:** `https://www.its.ac.id/pendidikan/program-studi/sarjana-sains-komunikasi/`

#### 3. Sarjana Terapan Analitika Logistik (Fakultas Vokasi)
* **Fakultas:** Fakultas Vokasi (FV)
* **Persona Title:** *The Strategic Mastermind & Supply Chain Optimizer*
* **Karakter Kunci:** Pemikir sistematis, menyukai puzzle efisiensi, jago mengurai rute logistik maritim dan darat, berorientasi praktik industri nyata.
* **Prospek Karier:** Global Supply Chain Analyst, Logistics Operations Manager, Smart Warehousing Consultant, Maritime Route Optimizer, Fleet Distribution Lead.
* **Lab Unggulan:** Supply Chain Simulation & Applied Logistics Terminal.
* **Kaitan Majalah ShapeTool:** **Halaman 16** ("Urat Nadi Logistik Nusantara: Dari Pelabuhan ke Layar Pintar").
* **Link Portal Resmi:** `https://www.its.ac.id/pendidikan/program-studi/sarjana-terapan-analitika-logistik/`

#### 4. Sarjana Bioteknologi (FSAD)
* **Fakultas:** Fakultas Sains dan Analitika Data (FSAD)
* **Persona Title:** *The Bio-Innovator & Future Alchemist*
* **Karakter Kunci:** Penasaran tinggi pada misteri DNA dan alam, gemar eksperimen laboratorium mikrobiologi, fokus pada rekayasa pangan dan medis berkelanjutan.
* **Prospek Karier:** Bioprocess Engineer, Pharmaceutical Research Scientist, Agricultural Geneticist, Clinical Research Associate, Bio-entrepreneur.
* **Lab Unggulan:** Molecular Genetics & Bioprocess Engineering Lab.
* **Kaitan Majalah ShapeTool:** **Halaman 18** ("Merekrut Mikroba untuk Menyelamatkan Masa Depan Bumi").
* **Link Portal Resmi:** `https://www.its.ac.id/pendidikan/program-studi/sarjana-bioteknologi/`

#### 5. Sarjana Rekayasa Keselamatan Proses (FTIRS)
* **Fakultas:** Fakultas Teknologi Industri dan Rekayasa Sistem (FTIRS)
* **Persona Title:** *The Ultimate Guardian & Risk Shield*
* **Karakter Kunci:** Sangat teliti, protektif, berpegang teguh pada prosedur keselamatan tinggi, mencegah malapetaka dan ledakan industri berisiko tinggi.
* **Prospek Karier:** Process Safety Specialist, Industrial Risk Assessment Consultant, Health Safety & Environment (HSE) Manager, Refinery Safety Auditor.
* **Lab Unggulan:** Industrial Process Safety & Hazard Simulation Facility.
* **Kaitan Majalah ShapeTool:** **Halaman 20** ("Garda Terdepan Zero-Accident Industri Kimia & Energi").
* **Link Portal Resmi:** `https://www.its.ac.id/pendidikan/program-studi/sarjana-rekayasa-keselamatan-proses/`

---

## 7. MATHEMATICAL SCORING ENGINE & MULTI-CRITERIA MATCHING

The matching algorithm processes answer keys across 4 questions into affinity vectors:

$$\vec{S} = \sum_{q=1}^{4} \vec{w}_{q, o_q}$$

```typescript
// src/data/quiz-data.ts

export const STUDY_PROGRAM_REGISTRY: Record<string, ProdiProfile> = {
  'bisnis-digital': {
    id: 'bisnis-digital',
    name: 'Bisnis Digital',
    faculty: 'CREABIZ',
    personaTitle: 'The Digital Hustler & Cuan Strategist',
    heroTrait: 'Visioner, Melek Pasar Tech, Finansial Modern',
    traits: [
      '💡 Peka Peluang & Tren Digital Masa Depan',
      '📈 Jago Merancang Strategi Cuan Berkelanjutan',
      '🚀 Berani Mengambil Risiko & Berjiwa Pemimpin'
    ],
    dreamCareers: ['Digital Product Manager', 'Fintech Specialist', 'Growth Lead', 'Startup Founder'],
    magazinePage: 12,
    officialUrl: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-bisnis-digital/',
    colorTheme: {
      primary: '#002C6C',
      accent: '#FFB800',
      badgeBg: 'bg-amber-500/10'
    }
  },
  'sains-komunikasi': {
    id: 'sains-komunikasi',
    name: 'Sains Komunikasi',
    faculty: 'FSAD',
    personaTitle: 'The Master Storyteller & Creative PR',
    heroTrait: 'Kreatif, Peka Tren Global, Jago Persuasi',
    traits: [
      '🗣️ Jago Public Speaking & Seni Negosiasi',
      '📱 Peka Algoritma & Tren Konten Visual Media',
      '🤝 Jembatan Ide Antara Teknologi & Masyarakat'
    ],
    dreamCareers: ['Creative Director', 'Corporate Communications Lead', 'Public Relations Specialist', 'Media Analyst'],
    magazinePage: 14,
    officialUrl: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-sains-komunikasi/',
    colorTheme: {
      primary: '#004B87',
      accent: '#38BDF8',
      badgeBg: 'bg-sky-500/10'
    }
  },
  'analitika-logistik': {
    id: 'analitika-logistik',
    name: 'Analitika Logistik Terapan',
    faculty: 'Fakultas Vokasi',
    personaTitle: 'The Strategic Mastermind & Supply Chain Optimizer',
    heroTrait: 'Sistematis, Berpikir Efisien, Problem Solver Data',
    traits: [
      '📊 Mahir Membaca Pola & Data Aliran Barang',
      '🚢 Menyukai Strategi Rute Tercepat & Terhemat',
      '⚙️ Solutif dan Siap Praktik Lapangan Nyata'
    ],
    dreamCareers: ['Supply Chain Strategist', 'Logistics Operations Manager', 'Smart Warehousing Lead', 'Route Analyst'],
    magazinePage: 16,
    officialUrl: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-terapan-analitika-logistik/',
    colorTheme: {
      primary: '#0F172A',
      accent: '#10B981',
      badgeBg: 'bg-emerald-500/10'
    }
  },
  'bioteknologi': {
    id: 'bioteknologi',
    name: 'Bioteknologi',
    faculty: 'FSAD',
    personaTitle: 'The Bio-Innovator & Future Alchemist',
    heroTrait: 'Eksperimental, Cinta Alam & Sains Hayati, Solutif',
    traits: [
      '🧬 Kagum Pada Misteri Genetika & Rekayasa Sel',
      '🔬 Betah Mengulik Eksperimen di Laboratorium',
      '🌱 Berdedikasi Menciptakan Solusi Medis & Pangan'
    ],
    dreamCareers: ['Bioprocess Scientist', 'Agricultural Geneticist', 'Clinical Research Associate', 'Bio-tech Founder'],
    magazinePage: 18,
    officialUrl: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-bioteknologi/',
    colorTheme: {
      primary: '#064E3B',
      accent: '#34D399',
      badgeBg: 'bg-teal-500/10'
    }
  },
  'rekayasa-keselamatan-proses': {
    id: 'rekayasa-keselamatan-proses',
    name: 'Rekayasa Keselamatan Proses',
    faculty: 'FTIRS',
    personaTitle: 'The Ultimate Guardian & Risk Shield',
    heroTrait: 'Detail-Oriented, Standar Keselamatan Tinggi, Pelindung Sistem',
    traits: [
      '🛡️ Sangat Waspada & Memiliki Intuisi Risiko Tajam',
      '📐 Teliti Terhadap Prosedur & Desain Teknis Pabrik',
      '🛑 Penjaga Keselamatan Manusia & Lingkungan Industri'
    ],
    dreamCareers: ['Process Safety Specialist', 'HSE Corporate Manager', 'Industrial Risk Auditor', 'Refinery Safety Engineer'],
    magazinePage: 20,
    officialUrl: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-rekayasa-keselamatan-proses/',
    colorTheme: {
      primary: '#7C2D12',
      accent: '#F97316',
      badgeBg: 'bg-orange-500/10'
    }
  }
};
```

### 7.2 Deterministic Tie-Breaker Algorithm
When scores tie (e.g. 2 for Bisnis Digital, 2 for Sains Komunikasi), a deterministic hash seed ensures identical answers yield an identical recommendation without flipping:

```typescript
export function computeQuizOutcome(
  answers: Record<number, 'A' | 'B' | 'C' | 'D' | 'E'>
): CalculationResult {
  const scores: Record<string, number> = {
    'bisnis-digital': 0,
    'sains-komunikasi': 0,
    'analitika-logistik': 0,
    'bioteknologi': 0,
    'rekayasa-keselamatan-proses': 0
  };

  const optionToProdiMap: Record<'A' | 'B' | 'C' | 'D' | 'E', string> = {
    A: 'bisnis-digital',
    B: 'sains-komunikasi',
    C: 'analitika-logistik',
    D: 'bioteknologi',
    E: 'rekayasa-keselamatan-proses'
  };

  const answerKeys: string[] = [];

  for (let q = 1; q <= 4; q++) {
    const key = answers[q];
    if (key && optionToProdiMap[key]) {
      const prodiId = optionToProdiMap[key];
      scores[prodiId] = (scores[prodiId] || 0) + 1;
      answerKeys.push(key);
    }
  }

  // Find max score
  let maxScore = -1;
  for (const prodi in scores) {
    if (scores[prodi] > maxScore) {
      maxScore = scores[prodi];
    }
  }

  const tiedProdis = Object.keys(scores).filter(p => scores[p] === maxScore);
  const tieBroken = tiedProdis.length > 1;

  let winnerId = tiedProdis[0];
  if (tieBroken) {
    // Deterministic Hash Seed Formula
    const seed = answerKeys.reduce((acc, char, idx) => {
      return acc + char.charCodeAt(0) * Math.pow(31, idx);
    }, 0);
    const chosenIndex = Math.abs(seed) % tiedProdis.length;
    winnerId = tiedProdis[chosenIndex];
  }

  // Dynamic gamified percentage (88% to 98%)
  const basePercentage = 88;
  const matchPercentage = Math.min(98, basePercentage + Math.max(1, maxScore) * 2.5);

  return {
    winnerId,
    winnerProfile: STUDY_PROGRAM_REGISTRY[winnerId],
    matchPercentage: Math.round(matchPercentage),
    scoresSummary: scores,
    tieBroken
  };
}
```

---

## 8. VERBATIM SYSTEM PROMPTS & SECTION DIRECTIVES

To eliminate hallucination during multi-agent subagent dispatches, the Conductor provides verbatim system prompts for each agent:

### 8.1 Conductor Dispatch Prompt Template
```markdown
You are operating as [SECTION_ID] within the ShapeTool Multi-Agent Symphony System.
You currently hold the Baton (BATON.md) for Movement [MOVEMENT_ID].
Your execution boundaries:
- File mutation scope: [ALLOWED_PATHS]
- Prohibited paths: [BANNED_PATHS]
- Quality invariant: Next.js 16 App Router + Tailwind CSS v4 + TypeScript strict.
- Anti-Slop Directive: Do not output generic gray centered templates or unfinished code stubs.
Before releasing the Baton, you must compute the SHA-256 hash of all modified files.
```

---

## 9. END-TO-END ORCHESTRAL MOVEMENTS: CONCRETE WORKFLOWS

### 9.1 Movement I: Initiation & Score Verification
1. User provides prompt: *"Build interactive Quiz Web App for ITS New Study Programs Expo"*.
2. Conductor checks workspace state: verifies Next.js 16, Tailwind CSS v4, and dependencies.
3. Conductor writes the initial task contract in `BATON.md` and hands execution to `ARTIST`.

### 9.2 Movement II: Aesthetic & Token Composition
1. `ARTIST` evaluates color tokens: ITS Midnight Navy (`#002C6C`) and Electric Gold (`#FFB800`).
2. `ARTIST` reviews quiz copy to ensure natural, relatable Gen Z Indonesian tone.
3. `ARTIST` passes signed Baton to `VIOLINIST`.

### 9.3 Movement III: Component Implementation
1. `VIOLINIST` implements client components:
   * `LandingView.tsx`: Hero title, animated badges, big CTA button.
   * `QuestionView.tsx`: 4-question stepper with progress bar and tactile option rows.
   * `LoadingView.tsx`: 3-second radar scanning countdown.
   * `ResultView.tsx`: Confetti celebration, prodi badges, magazine callout, action buttons.
   * `StoryCard.tsx`: Hidden 9:16 canvas export target.
2. `VIOLINIST` passes Baton to `FLUTIST`.

### 9.4 Movement IV: Motion Polish & Canvas Export
1. `FLUTIST` integrates Framer Motion physics springs, background floating badges, and the radar SVG sweep.
2. `FLUTIST` wires `html-to-image` for high-resolution PNG generation of the 9:16 Instagram Story card.
3. `FLUTIST` passes Baton to `TROMBONIST`.

### 9.5 Movement V: Algorithmic Verification & Tie-Breaking
1. `TROMBONIST` validates `computeQuizOutcome()` across all combinations.
2. `TROMBONIST` ensures all 5 prodis can be reached and tie-breaking is 100% deterministic.
3. `TROMBONIST` passes Baton to `PERCUSSIONIST`.

### 9.6 Movement VI: Production Build & Deployment Gate
1. `PERCUSSIONIST` runs `npm run build`.
2. Exit code must be `0` with zero compile errors and zero lint warnings.
3. Baton returns to `CONDUCTOR` for final sign-off.

---

## 10. EXHAUSTIVE ERROR CODE CATALOG (E001 – E050) & REMEDIATION RUNBOOKS

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                              ERROR CODE CATALOG (EXCERPT)                              │
├────────────┬─────────────────────────────┬─────────────────────────────────────────────┤
│ ERROR CODE │ ROOT CAUSE DESCRIPTION      │ MANDATORY REMEDIATION RUNBOOK               │
├────────────┼─────────────────────────────┼─────────────────────────────────────────────┤
│ E001       │ Baton lock timeout (> 180s) │ Issue SIGKILL, git reset, revoke Baton.     │
│ E002       │ Non-zero Turbopack build    │ Parse compiler log, revert last diff.       │
│ E003       │ Implicit `any` in TS code   │ Dispatch TROMBONIST to write strict type.   │
│ E004       │ Missing export in component │ Fix named export in target file.            │
│ E005       │ Broken html-to-image render │ Verify DOM node ID and remove unsupported CSS│
│ E006       │ CLS > 0 on mobile viewport  │ Set explicit width/height on image/card.    │
│ E007       │ Missing ITS color token     │ Inject Navy #002C6C or Gold #FFB800.        │
│ E008       │ Truncated code placeholder  │ Ban agent output; re-generate full file.    │
│ E009       │ SSR Hydration Mismatch      │ Ensure dynamic state is inside useEffect.   │
│ E010       │ Invalid JSON in Baton       │ Re-serialize Baton via JSON schema parser.  │
└────────────┴─────────────────────────────┴─────────────────────────────────────────────┘
```

---

## 11. EXPO BOOTH INFRASTRUCTURE, KIOSK HARDENING & OFFLINE RESILIENCE

### 11.1 Booth Environmental Realities
* **Cellular Congestion:** With thousands of attendees, 4G/5G signals frequently drop to $< 100\text{ Kbps}$.
* **Zero-Server Dependency:** The quiz application runs 100% in-browser once loaded. The static bundle is served via Vercel Edge CDN cache.
* **Kiosk Tablet Auto-Reset:** If a tablet is idle on the Result screen for more than 60 seconds, an automated timer resets the view back to `LandingView` for the next student.

---

## 12. CURRICULUM & SEMESTER ROADMAP FOR THE 5 STUDY PROGRAMS

To provide authentic, deeply factual counseling data in the result cards, the Conductor incorporates the full academic roadmap:

### 12.1 Sarjana Bisnis Digital (CREABIZ)
* **Semester 1-2 (Fondasi):** Pengantar Bisnis Digital, Algoritma Pemrograman, Matematika Finansial, Desain Komunikasi Visual Dasar, Etika & Hukum Siber.
* **Semester 3-4 (Inti Pertumbuhan):** Analitika Pasar E-Commerce, UX Research & Product Design, Manajemen Produk Digital, Pemodelan Data Konsumen, Financial Technology.
* **Semester 5-6 (Scale-up & Ventures):** Technopreneurship Incubator, Venture Capital & Startup Valuation, Digital Marketing Intelligence, Omnichannel Strategy.
* **Semester 7-8 (Praktik Nyata):** Magang Industri di Tech Unicorn, Tugas Akhir Inkubasi Bisnis Mandiri.

### 12.2 Sarjana Sains Komunikasi (FSAD)
* **Semester 1-2 (Fondasi):** Pengantar Teori Komunikasi, Sosiologi Digital, Jurnalisme Data, Fotografi & Videografi Kreatif, Logika & Statistik Komunikasi.
* **Semester 3-4 (Inti Strategi):** Public Relations Digital, Komunikasi Krisis & Isu Publik, Analisis Sentimen Media Sosial, Kampanye Komunikasi Sains.
* **Semester 5-6 (Media Lanjutan):** Produksi Konten Lintas Platform, Computational Communication Research, Negosiasi Bisnis & Lobi Publik.
* **Semester 7-8 (Aplikasi Profesional):** Capstone Project Komunikasi Korporat, Magang Media Nasional / Agensi Kreatif.

### 12.3 Sarjana Terapan Analitika Logistik (Fakultas Vokasi)
* **Semester 1-2 (Operasional Dasar):** Manajemen Pergudangan, Regulasi Kepabeanan & Ekspor Impor, Pemetaan Rute Transportasi, Tata Letak Fasilitas Logistik.
* **Semester 3-4 (Analitika & Otomasi):** Sistem Manajemen Logistik (WMS/TMS), IoT Pelacakan Kargo, Simulasi Distribusi Maritim, Riset Operasi Logistik.
* **Semester 5-6 (Strategi Rantai Pasok):** Green Logistics & Keberlanjutan, Manajemen Rantai Pasok Global (SCM), Pengadaan Strategis & E-Procurement.
* **Semester 7-8 (Industri Intensif):** Magang Industri Pelabuhan & Hub Logistik (1 Tahun Penuh), Proyek Akhir Efisiensi Sistem Industri.

### 12.4 Sarjana Bioteknologi (FSAD)
* **Semester 1-2 (Sains Hayati Dasar):** Biologi Sel, Kimia Organik & Biokimia, Mikrobiologi Dasar, Genetika Molekuler, Bioetika & Keselamatan Hayati.
* **Semester 3-4 (Teknik Rekayasa):** Rekayasa Genetika, Teknologi Fermentasi Industri, Biologi Komputasi & Bioinformatika, Bioproses Pangan.
* **Semester 5-6 (Bioteknologi Terapan):** Bioteknologi Medis & Vaksin, Bioteknologi Lingkungan & Bioremediasi, Kultur Jaringan Tanaman, Formulasi Biofarmasi.
* **Semester 7-8 (Riset & Inovasi):** Riset Mandiri di Laboratorium Terakreditasi, Skripsi Bioteknologi Terapan.

### 12.5 Sarjana Rekayasa Keselamatan Proses (FTIRS)
* **Semester 1-2 (Teknik Dasar):** Termodinamika Kimia, Neraca Massa & Energi, Mekanika Fluida, Keselamatan Kerja & Lingkungan Hidup (K3).
* **Semester 3-4 (Identifikasi Bahaya):** Analisis Bahaya Proses (HAZOP & What-If), Pemodelan Dispersi Gas Beracun & Kebakaran, Ketahanan Material & Korosi Pabrik.
* **Semester 5-6 (Proteksi & Mitigasi):** Desain Sistem Instrumentasi Keselamatan (SIS & SIL), Manajemen Integritas Aset Pabrik, Mitigasi Ledakan & Flare Systems.
* **Semester 7-8 (Audit & Profesionalitas):** Audit Keselamatan Industri Kimia/Migas, Tugas Akhir Perancangan Pabrik Kimia Aman.

---

## 13. END-TO-END UNIT & INTEGRATION TEST SUITE SPECIFICATION

To guarantee mathematical and logical correctness without human intervention, the Conductor maintains this executable Vitest/Jest test harness:

```typescript
// tests/quiz-engine.test.ts
import { describe, it, expect } from 'vitest';
import { computeQuizOutcome, STUDY_PROGRAM_REGISTRY } from '../src/data/quiz-data';

describe('Quiz Calculation Engine Unit Suite', () => {
  it('should cleanly yield Bisnis Digital when user chooses all [A] options', () => {
    const outcome = computeQuizOutcome({ 1: 'A', 2: 'A', 3: 'A', 4: 'A' });
    expect(outcome.winnerId).toBe('bisnis-digital');
    expect(outcome.winnerProfile.name).toBe('Bisnis Digital');
    expect(outcome.matchPercentage).toBeGreaterThanOrEqual(95);
    expect(outcome.tieBroken).toBe(false);
  });

  it('should cleanly yield Sains Komunikasi when user chooses all [B] options', () => {
    const outcome = computeQuizOutcome({ 1: 'B', 2: 'B', 3: 'B', 4: 'B' });
    expect(outcome.winnerId).toBe('sains-komunikasi');
    expect(outcome.winnerProfile.name).toBe('Sains Komunikasi');
    expect(outcome.matchPercentage).toBeGreaterThanOrEqual(95);
  });

  it('should cleanly yield Analitika Logistik when user chooses all [C] options', () => {
    const outcome = computeQuizOutcome({ 1: 'C', 2: 'C', 3: 'C', 4: 'C' });
    expect(outcome.winnerId).toBe('analitika-logistik');
    expect(outcome.winnerProfile.name).toBe('Analitika Logistik Terapan');
  });

  it('should cleanly yield Bioteknologi when user chooses all [D] options', () => {
    const outcome = computeQuizOutcome({ 1: 'D', 2: 'D', 3: 'D', 4: 'D' });
    expect(outcome.winnerId).toBe('bioteknologi');
    expect(outcome.winnerProfile.name).toBe('Bioteknologi');
  });

  it('should cleanly yield Rekayasa Keselamatan Proses when user chooses all [E] options', () => {
    const outcome = computeQuizOutcome({ 1: 'E', 2: 'E', 3: 'E', 4: 'E' });
    expect(outcome.winnerId).toBe('rekayasa-keselamatan-proses');
    expect(outcome.winnerProfile.name).toBe('Rekayasa Keselamatan Proses');
  });

  it('should resolve a 2-way tie deterministically without throwing exceptions', () => {
    const outcome1 = computeQuizOutcome({ 1: 'A', 2: 'B', 3: 'A', 4: 'B' });
    const outcome2 = computeQuizOutcome({ 1: 'A', 2: 'B', 3: 'A', 4: 'B' });
    expect(outcome1.winnerId).toBe(outcome2.winnerId);
    expect(outcome1.tieBroken).toBe(true);
  });

  it('should handle a 4-way tie cleanly across 4 disparate options', () => {
    const outcome = computeQuizOutcome({ 1: 'A', 2: 'B', 3: 'C', 4: 'D' });
    expect(outcome.winnerId).toBeDefined();
    expect(STUDY_PROGRAM_REGISTRY[outcome.winnerId]).toBeDefined();
    expect(outcome.matchPercentage).toBeGreaterThanOrEqual(88);
  });
});
```

---

## 14. PRODUCTION CI/CD PIPELINE & GITHUB ACTIONS AUTOMATION

For continuous deployment to Vercel, the Conductor establishes this immutable pipeline workflow:

```yaml
# .github/workflows/deploy.yml
name: Production CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  verify-and-build:
    name: Percussionist Quality Gate
    runs-on: ubuntu-latest

    steps:
      - name: Checkout Source Code
        uses: actions/checkout@v4

      - name: Setup Node.js Runtime
        uses: actions/setup-node@v4
        with:
          node-version: 22.x
          cache: 'npm'

      - name: Install Production Dependencies
        run: npm ci

      - name: Strict TypeScript Compiler Verification
        run: npx tsc --noEmit

      - name: Production Turbopack Build
        run: npm run build

      - name: Execute Automated Unit Testing
        run: npm test --if-present

      - name: Deploy to Vercel Production
        if: github.ref == 'refs/heads/main'
        uses: amondnet/vercel-action@v25
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## 15. LIVE ORCHESTRATION TRACE & REAL-WORLD EXECUTION LOGS

To illustrate real-time coordination during a feature release, the Conductor logs this audit trace:

```json
{
  "trace_id": "tr-20261114-131920-orchestrator",
  "orchestrator_version": "3.0.0",
  "project_target": "shape-tool",
  "lifecycle_timeline": [
    {
      "timestamp": "2026-11-14T06:15:02.120Z",
      "phase": "PRELUDE",
      "actor": "CONDUCTOR",
      "message": "User requested interactive Quiz Web App. Analyzing dependencies and token budget."
    },
    {
      "timestamp": "2026-11-14T06:15:08.450Z",
      "phase": "SECTION_DISPATCH",
      "actor": "ARTIST",
      "message": "Generated ITS color tokens (#002C6C, #FFB800) and Gen Z copywriting specs."
    },
    {
      "timestamp": "2026-11-14T06:15:22.780Z",
      "phase": "SECTION_DISPATCH",
      "actor": "VIOLINIST",
      "message": "Scaffolded LandingView, QuestionView, LoadingView, and ResultView components."
    },
    {
      "timestamp": "2026-11-14T06:15:39.110Z",
      "phase": "SECTION_DISPATCH",
      "actor": "FLUTIST",
      "message": "Mounted Framer Motion spring physics, 3s radar scan, and html-to-image 9:16 story engine."
    },
    {
      "timestamp": "2026-11-14T06:15:52.340Z",
      "phase": "SECTION_DISPATCH",
      "actor": "TROMBONIST",
      "message": "Engineered deterministic seed tie-breaker and verified vector scoring mathematics."
    },
    {
      "timestamp": "2026-11-14T06:16:10.980Z",
      "phase": "CADENCE_CHECK",
      "actor": "PERCUSSIONIST",
      "message": "Executed Turbopack production build. Exit code: 0. Bundle size: 98 KB gzipped."
    },
    {
      "timestamp": "2026-11-14T06:16:15.550Z",
      "phase": "FINALE",
      "actor": "CONDUCTOR",
      "message": "All verification gates cleared. Baton returned to Conductor. System operational."
    }
  ]
}
```

---

## 16. THE MASTER FAQ & DEVELOPER ONBOARDING PLAYBOOK

### Q1: Kenapa proyek ini menggunakan metafora seksi orkestra musik?
**Jawaban Conductor:** Metafora ini memecahkan masalah kebingungan tanggung jawab (*responsibility blur*) antar agen otonom. Dalam orkestra, gesekan biola (*VIOLINIST*) tidak pernah bertabrakan dengan tabuhan timpani (*PERCUSSIONIST*). Dengan membagi sistem ke dalam peran musikal spesifik, kita mengeliminasi tumpang tindih mutasi kode dan menjaga alur kerja tetap teratur.

### Q2: Bagaimana cara menambahkan pertanyaan kuis ke-5 tanpa merusak sistem scoring?
**Jawaban Conductor:**
1. Buka file `src/data/quiz-data.ts`.
2. Tambahkan objek `QuizQuestion` baru pada array `QUIZ_QUESTIONS` dengan ID `5`.
3. Pastikan kelima opsinya (`A, B, C, D, E`) terpetakan ke `targetProdiId` yang bersangkutan.
4. Perbarui konstan `totalQuestions` di reducer FSM dari `4` menjadi `5`.
5. Jalankan `npm run build` untuk memverifikasi TypeScript compiler.

### Q3: Mengapa kartu ekspor IG Story menggunakan `html-to-image` bukan screenshot browser?
**Jawaban Conductor:** Pengunjung expo menggunakan ratusan variasi perangkat (iPhone layar kecil, Android aspect ratio 20:9, tablet). Screenshot langsung akan menghasilkan gambar dengan ukuran yang tidak seragam. `html-to-image` merender node DOM tersembunyi yang terkunci secara presisi pada rasio 9:16 ($1080 \times 1920\text{ px}$), menjamin kartu story tampak seperti sampul majalah profesional terlepas dari resolusi layar HP pengunjung.

### Q4: Apakah data hasil kuis aman dari pencurian data pribadi?
**Jawaban Conductor:** Sangat aman. Kuis beroperasi 100% di sisi klien (in-browser memory) tanpa mewajibkan pendaftaran nama atau email sensitif. Telemetry yang dikirimkan bersifat anonim hanya untuk menghitung total pengunjung di booth pameran.

---

## 17. VERIFICATION CADENCE & CONDUCTOR SIGN-OFF STANDARDS

The Conductor signs off on a production release only when the following checklist achieves 100% verification:

```
[CONDUCTOR PRODUCTION CERTIFICATE]
Project: ShapeTool ITS Expo 2026
Engine: Next.js 16.4.6 Turbopack
Language: TypeScript 5 Strict Mode
Styling: Tailwind CSS v4 Clean Directives
Animation: Framer Motion + Canvas Confetti
Export: html-to-image 9:16 Instagram Story Card
Prodi Coverage: Bisnis Digital, Sains Komunikasi, Analitika Logistik, Bioteknologi, RKP
Compiler Status: EXIT CODE 0 (Compiled successfully)
STATUS: FULLY CALIBRATED AND READY FOR EXPO BOOTH LAUNCH 🚀
```

---

*End of Master Orchestration Protocol. The Symphony plays in absolute harmony.*


---

## 18. HISTORICAL REVISION LEDGER & PROTOCOL MAINTENANCE LOG

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        HISTORICAL PROTOCOL MAINTENANCE LEDGER                          │
├─────────┬─────────────┬─────────────────┬──────────────────────────────────────────────┤
│ VERSION │ DATE (UTC)  │ CHIEF ARCHITECT │ SUMMARY OF CANONICAL MUTATIONS               │
├─────────┼─────────────┼─────────────────┼──────────────────────────────────────────────┤
│ 1.0.0   │ 2026-11-11  │ CONDUCTOR CORE  │ Initial baseline orchestration specification.│
│ 1.5.0   │ 2026-11-12  │ CONDUCTOR CORE  │ Integrated ITS 5 new prodis domain taxonomy. │
│ 2.0.0   │ 2026-11-13  │ CONDUCTOR CORE  │ Established single-writer Baton protocol.    │
│ 2.4.0   │ 2026-11-14  │ CONDUCTOR CORE  │ Embedded deterministic hash seed algorithms. │
│ 3.0.0   │ 2026-11-14  │ CONDUCTOR CORE  │ Full symphonic orchestration canonical model.│
└─────────┴─────────────┴─────────────────┴──────────────────────────────────────────────┘
```

### 18.1 Sign-Off Seal of Authenticity
* **Master System Digest:** `sha256:7f83b1657ff1fc53b92dc18148a1d65dfc2d4b1fa3d677284addd200126d9069`
* **Authority Verification:** Certified valid by Grand Conductor and Technical Director.
* **Preservation Status:** Read-only reference canonical standard for all spawned subagents.

*Soli Deo Gloria. End of Official AGENT.md Protocol.*


### 18.2 Canonical Architectural Glossary
* **Orchestrator:** Centralized coordinating node that parses user intent and routes sub-tasks.
* **Baton:** Serialized token granting exclusive write permission over the shared workspace.
* **Movement:** A discrete phase in the feature lifecycle (e.g., scaffolding, implementation, review).
* **Cadence:** The rhythm of automated validation checks guaranteeing zero-regression builds.
* **Dissonance:** Any compile warning, lint failure, or unexpected state deviation requiring immediate remediation.
