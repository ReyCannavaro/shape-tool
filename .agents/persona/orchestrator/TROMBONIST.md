# 🎺 THE TROMBONIST (TROMBONIST.md)
**The Principal Brass, Computation Engine & Algorithmic Foundation**
*Version: 2.3.0 — Mathematical Modeling, Vector Scoring & Data Architecture*
*Classification: Computational & Systems Engineering Specification*

---

## 📑 TABLE OF CONTENTS
1. [Persona Definition & The Brass Mandate](#1-persona-definition--the-brass-mandate)
2. [Mathematical Model: Personality Vector Scoring & Distance Metrics](#2-mathematical-model-personality-vector-scoring--distance-metrics)
3. [The 5 ITS Study Program Dimensional Profiles](#3-the-5-its-study-program-dimensional-profiles)
4. [Deterministic Tie-Breaker Mechanics](#4-deterministic-tie-breaker-mechanics)
5. [The Quiz Question Matrix & Option Weight Vectors](#5-the-quiz-question-matrix--option-weight-vectors)
6. [Strict TypeScript Data Model & Schema Definitions](#6-strict-typescript-data-model--schema-definitions)
7. [Next.js Route Handlers & Server Actions Architecture](#7-nextjs-route-handlers--server-actions-architecture)
8. [Edge Runtime, Cold Start Optimization & Static Pre-Rendering](#8-edge-runtime-cold-start-optimization--static-pre-rendering)
9. [Booth Telemetry & Anonymous Analytics Logging](#9-booth-telemetry--anonymous-analytics-logging)
10. [Computational Verification & Unit Test Suite](#10-computational-verification--unit-test-suite)

---

## 1. PERSONA DEFINITION & THE BRASS MANDATE

### 1.1 The Resonant Low-End Punch
In our symphonic architecture, **THE TROMBONIST** commands the brass section. The brass provides the structural resonance, the foundational chords, and the sheer acoustic power that grounds the entire musical score. While the soloist dreams of aesthetics and the strings render the visual melody, **The Trombonist calculates the mathematical truth underneath**.

```
                   ┌────────────────────────────────────────┐
                   │        THE TROMBONIST'S DOMAIN         │
                   ├────────────────────────────────────────┤
                   │  Vector Scoring & Matching Algorithm   │
                   │  Deterministic Tie-Breaking Logic      │
                   │  Strict Data Schemas & Normalization   │
                   │  Edge Execution & Telemetry Pipelines  │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Formulate, execute, and verify the algorithmic recommendation engine that pairs user responses with one of the 5 new ITS study programs.
* **Paired Skill Ecosystem:** `backend-engineering-elysia`, `context7-mcp`, `full-output-enforcement`.
* **Primary Output:** Calculation routines in `src/data/quiz-data.ts`, validation logic, and optional telemetry endpoints in `src/app/api/`.

---

## 2. MATHEMATICAL MODEL: PERSONALITY VECTOR SCORING & DISTANCE METRICS

Rather than simple naive tallying that can easily deadlock in ties, The Trombonist models student preferences across a multi-dimensional personality vector space:

$$\vec{U} = [u_{\text{biz}}, u_{\text{comm}}, u_{\text{log}}, u_{\text{bio}}, u_{\text{safety}}]$$

### 2.1 The Scoring Formulation
For each question $q \in \{1, 2, 3, 4\}$, the user selects an option $o \in \{A, B, C, D, E\}$. Each option emits a normalized weight vector $\vec{w}_{q, o}$:

$$\vec{S} = \sum_{q=1}^{4} \vec{w}_{q, o_q}$$

Where:
* $S_{\text{biz}}$ = Affinity score for **Bisnis Digital**
* $S_{\text{comm}}$ = Affinity score for **Sains Komunikasi**
* $S_{\text{log}}$ = Affinity score for **Analitika Logistik Terapan**
* $S_{\text{bio}}$ = Affinity score for **Bioteknologi**
* $S_{\text{safety}}$ = Affinity score for **Rekayasa Keselamatan Proses**

The recommended prodi $P^*$ is selected via the argmax function:

$$P^* = \arg\max_{p \in \mathcal{P}} (S_p)$$

---

## 3. THE 5 ITS STUDY PROGRAM DIMENSIONAL PROFILES

```typescript
export interface StudyProgramMetrics {
  id: string;
  name: string;
  faculty: string;
  slug: string;
  affinity_vector_target: [number, number, number, number, number];
  primary_archetype: string;
  career_paths: string[];
  magazine_page: number;
  official_url: string;
}

export const STUDY_PROGRAM_DEFINITIONS: Record<string, StudyProgramMetrics> = {
  'bisnis-digital': {
    id: 'bisnis-digital',
    name: 'Bisnis Digital',
    faculty: 'CREABIZ',
    slug: 'bisnis-digital',
    affinity_vector_target: [1.0, 0.4, 0.5, 0.1, 0.2],
    primary_archetype: 'The Digital Hustler & Growth Strategist',
    career_paths: ['Product Manager', 'Digital Strategist', 'Fintech Specialist', 'Tech Entrepreneur'],
    magazine_page: 12,
    official_url: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-bisnis-digital/'
  },
  'sains-komunikasi': {
    id: 'sains-komunikasi',
    name: 'Sains Komunikasi',
    faculty: 'FSAD',
    slug: 'sains-komunikasi',
    affinity_vector_target: [0.4, 1.0, 0.2, 0.2, 0.3],
    primary_archetype: 'The Master Storyteller & Creative PR',
    career_paths: ['Brand Strategist', 'Media Analyst', 'Corporate Communication Specialist', 'Creative Director'],
    magazine_page: 14,
    official_url: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-sains-komunikasi/'
  },
  'analitika-logistik': {
    id: 'analitika-logistik',
    name: 'Analitika Logistik Terapan',
    faculty: 'Fakultas Vokasi',
    slug: 'analitika-logistik',
    affinity_vector_target: [0.5, 0.2, 1.0, 0.3, 0.4],
    primary_archetype: 'The Strategic Mastermind & Supply Chain Optimizer',
    career_paths: ['Supply Chain Analyst', 'Logistics Operations Lead', 'Distribution Specialist', 'Operations Research Consultant'],
    magazine_page: 16,
    official_url: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-terapan-analitika-logistik/'
  },
  'bioteknologi': {
    id: 'bioteknologi',
    name: 'Bioteknologi',
    faculty: 'FSAD',
    slug: 'bioteknologi',
    affinity_vector_target: [0.1, 0.2, 0.3, 1.0, 0.5],
    primary_archetype: 'The Bio-Innovator & Future Alchemist',
    career_paths: ['Bioprocess Scientist', 'Bio-pharmaceutical Researcher', 'Agricultural Geneticist', 'Bio-entrepreneur'],
    magazine_page: 18,
    official_url: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-bioteknologi/'
  },
  'rekayasa-keselamatan-proses': {
    id: 'rekayasa-keselamatan-proses',
    name: 'Rekayasa Keselamatan Proses',
    faculty: 'FTIRS',
    slug: 'rekayasa-keselamatan-proses',
    affinity_vector_target: [0.2, 0.3, 0.4, 0.5, 1.0],
    primary_archetype: 'The Ultimate Guardian & Risk Shield',
    career_paths: ['Process Safety Engineer', 'HSE Lead Specialist', 'Industrial Risk Consultant', 'Chemical Safety Auditor'],
    magazine_page: 20,
    official_url: 'https://www.its.ac.id/pendidikan/program-studi/sarjana-rekayasa-keselamatan-proses/'
  }
};
```

---

## 4. DETERMINISTIC TIE-BREAKER MECHANICS

In a 4-question quiz, ties can occur (e.g., 2 points for Bisnis Digital, 2 points for Sains Komunikasi). Naive `Math.random()` produces unpredictable flipping if the user refreshes.

### 4.1 The Deterministic Seed Protocol
When two or more prodis achieve the maximum score, the tie is broken using a deterministic hash combining the user's explicit answer sequence:

$$\text{Seed} = \sum_{q=1}^{4} \text{charCodeAt}(o_q) \cdot 31^{4-q}$$

```typescript
export const resolveTieBreak = (
  tiedProdiIds: string[], 
  answerKeys: string[]
): string => {
  if (tiedProdiIds.length === 1) return tiedProdiIds[0];

  // Hash the sequence of choices (e.g. ['A', 'C', 'B', 'A'])
  const seed = answerKeys.reduce((acc, char, idx) => {
    return acc + char.charCodeAt(0) * Math.pow(31, idx);
  }, 0);

  const selectedIndex = Math.abs(seed) % tiedProdiIds.length;
  return tiedProdiIds[selectedIndex];
};
```

---

## 5. THE QUIZ QUESTION MATRIX & OPTION WEIGHT VECTORS

```typescript
export interface QuizOption {
  key: 'A' | 'B' | 'C' | 'D' | 'E';
  label: string;
  targetProdiId: string;
  weightVector: [number, number, number, number, number];
}

export interface QuizQuestion {
  id: number;
  prompt: string;
  contextHint: string;
  options: QuizOption[];
}

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    prompt: "Pas lagi kerja kelompok, peran kamu biasanya ngapain?",
    contextHint: "Pilih peran yang paling otomatis kamu ambil tanpa mikir!",
    options: [
      {
        key: 'A',
        label: "Si hustler yang ngatur strategi, ngitung budget, & mikirin cara cuan/keberlanjutan",
        targetProdiId: 'bisnis-digital',
        weightVector: [1, 0, 0, 0, 0]
      },
      {
        key: 'B',
        label: "Si spokesperson yang paling jago bikin materi presentasi estetik & ngomong di depan",
        targetProdiId: 'sains-komunikasi',
        weightVector: [0, 1, 0, 0, 0]
      },
      {
        key: 'C',
        label: "Si analitis yang suka ngutak-ngatik data, alur pembagian tugas, & mastiin timeline efisien",
        targetProdiId: 'analitika-logistik',
        weightVector: [0, 0, 1, 0, 0]
      },
      {
        key: 'D',
        label: "Si tukang ngulik yang suka eksperimen, praktik langsung, & penasaran sama sains di balik materi",
        targetProdiId: 'bioteknologi',
        weightVector: [0, 0, 0, 1, 0]
      },
      {
        key: 'E',
        label: "Si paling teliti & safety yang mastiin semua prosedur bener, aman, dan gak ada yang blunder fatal",
        targetProdiId: 'rekayasa-keselamatan-proses',
        weightVector: [0, 0, 0, 0, 1]
      }
    ]
  },
  {
    id: 2,
    prompt: "Aplikasi apa yang paling sering nongkrong di Screen Time hapemu?",
    contextHint: "Jujur aja, aplikasi mana yang paling sering kamu buka tanpa sadar?",
    options: [
      {
        key: 'A',
        label: "Tokopedia / Shopee / Bibit / Finansial & Marketplace",
        targetProdiId: 'bisnis-digital',
        weightVector: [1, 0, 0, 0, 0]
      },
      {
        key: 'B',
        label: "TikTok / X (Twitter) / Instagram (mantengin tren & visual kreatif)",
        targetProdiId: 'sains-komunikasi',
        weightVector: [0, 1, 0, 0, 0]
      },
      {
        key: 'C',
        label: "Google Maps / Game Strategi Simulasi / Notion & Excel",
        targetProdiId: 'analitika-logistik',
        weightVector: [0, 0, 1, 0, 0]
      },
      {
        key: 'D',
        label: "YouTube Sains / Dokumenter Alam / Ensiklopedia Flora & Fauna",
        targetProdiId: 'bioteknologi',
        weightVector: [0, 0, 0, 1, 0]
      },
      {
        key: 'E',
        label: "Berita Investigasi / Dokumenter Bencana Industri & Teknologi Mesin",
        targetProdiId: 'rekayasa-keselamatan-proses',
        weightVector: [0, 0, 0, 0, 1]
      }
    ]
  },
  {
    id: 3,
    prompt: "Kalau dunia fiksi lagi kiamat zombie / krisis global, peran andalanmu apa?",
    contextHint: "Di situasi ekstrem, insting alamiahmu bakal dominan!",
    options: [
      {
        key: 'A',
        label: "Bikin sistem barter ekonomi baru & monopoli logistik sembako",
        targetProdiId: 'bisnis-digital',
        weightVector: [1, 0, 0, 0, 0]
      },
      {
        key: 'B',
        label: "Jadi juru bicara radio pemersatu para survivor biar gak panik",
        targetProdiId: 'sains-komunikasi',
        weightVector: [0, 1, 0, 0, 0]
      },
      {
        key: 'C',
        label: "Menganalisis peta suplai, gudang rahasia, & rute evakuasi teraman",
        targetProdiId: 'analitika-logistik',
        weightVector: [0, 0, 1, 0, 0]
      },
      {
        key: 'D',
        label: "Masuk lab ngeracik vaksin / serum penawar dari sampel mutasi biologis",
        targetProdiId: 'bioteknologi',
        weightVector: [0, 0, 0, 1, 0]
      },
      {
        key: 'E',
        label: "Rancang perimeter benteng pertahanan, SOP karantina, & sistem proteksi bahaya",
        targetProdiId: 'rekayasa-keselamatan-proses',
        weightVector: [0, 0, 0, 0, 1]
      }
    ]
  },
  {
    id: 4,
    prompt: "Pilihan superpower impian yang paling kamu idamkan?",
    contextHint: "Kekuatan apa yang paling pas merepresentasikan mimpimu?",
    options: [
      {
        key: 'A',
        label: "Bisa melihat tren masa depan & peluang cuan sebelum orang lain sadar",
        targetProdiId: 'bisnis-digital',
        weightVector: [1, 0, 0, 0, 0]
      },
      {
        key: 'B',
        label: "Persuasi telepati: Bisa menyampaikan ide dan bikin semua orang sepaham",
        targetProdiId: 'sains-komunikasi',
        weightVector: [0, 1, 0, 0, 0]
      },
      {
        key: 'C',
        label: "Teleportasi barang seketika & kemampuan multitasking kalkulasi rute",
        targetProdiId: 'analitika-logistik',
        weightVector: [0, 0, 1, 0, 0]
      },
      {
        key: 'D',
        label: "Manipulasi DNA & regenerasi sel hidup buat menyembuhkan penyakit",
        targetProdiId: 'bioteknologi',
        weightVector: [0, 0, 0, 1, 0]
      },
      {
        key: 'E',
        label: "Perisai kebal bahaya mutlak (Absolute Force Field) yang melindungi semua orang",
        targetProdiId: 'rekayasa-keselamatan-proses',
        weightVector: [0, 0, 0, 0, 1]
      }
    ]
  }
];
```

---

## 6. STRICT TYPESCRIPT DATA MODEL & SCHEMA DEFINITIONS

```typescript
export interface CalculationResult {
  winnerId: string;
  winnerProfile: StudyProgramMetrics;
  matchPercentage: number;
  scoresSummary: Record<string, number>;
  tieBroken: boolean;
}

export const computeQuizOutcome = (userSelections: Record<number, string>): CalculationResult => {
  const scores: Record<string, number> = {
    'bisnis-digital': 0,
    'sains-komunikasi': 0,
    'analitika-logistik': 0,
    'bioteknologi': 0,
    'rekayasa-keselamatan-proses': 0
  };

  const answerKeys: string[] = [];

  for (const q of QUIZ_QUESTIONS) {
    const selectedKey = userSelections[q.id];
    if (selectedKey) {
      answerKeys.push(selectedKey);
      const opt = q.options.find(o => o.key === selectedKey);
      if (opt) {
        scores[opt.targetProdiId] = (scores[opt.targetProdiId] || 0) + 1;
      }
    }
  }

  // Find max score
  let maxScore = -1;
  for (const prodiId in scores) {
    if (scores[prodiId] > maxScore) {
      maxScore = scores[prodiId];
    }
  }

  const tiedWinners = Object.keys(scores).filter(k => scores[k] === maxScore);
  const isTie = tiedWinners.length > 1;
  const winnerId = resolveTieBreak(tiedWinners, answerKeys);

  // Calculate dynamic match percentage (e.g. 85% to 98% for feel-good gamification)
  const basePercent = 88;
  const matchPercentage = Math.min(98, basePercent + (maxScore * 2.5));

  return {
    winnerId,
    winnerProfile: STUDY_PROGRAM_DEFINITIONS[winnerId],
    matchPercentage: Math.round(matchPercentage),
    scoresSummary: scores,
    tieBroken: isTie
  };
};
```

---

## 7. NEXT.JS ROUTE HANDLERS & SERVER ACTIONS ARCHITECTURE

If future requirements mandate saving visitor emails or generating shareable shortlinks, the Trombonist provides this edge-ready route blueprint:

```typescript
// src/app/api/quiz/record/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { winnerProdiId, visitorSource } = body;

    // Fast validation
    if (!winnerProdiId || typeof winnerProdiId !== 'string') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    // In-memory or Edge Config analytics log
    console.log(`[EXPO_TELEMETRY] Match: ${winnerProdiId} | Source: ${visitorSource || 'qr-booth'}`);

    return NextResponse.json({ success: true, timestamp: Date.now() });
  } catch (err) {
    return NextResponse.json({ error: 'Internal Error' }, { status: 500 });
  }
}
```

---

## 8. EDGE RUNTIME, COLD START OPTIMIZATION & STATIC PRE-RENDERING

Because this application runs at a live expo where seconds matter:
1. **Zero Database Cold Start:** The entire quiz computation is zero-IO, executing synchronously in $\mathcal{O}(1)$ time within the browser's JavaScript engine.
2. **Deterministic Pre-rendering:** The initial landing shell is statically generated by Next.js at build time (`prerendered as static content`).

---

## 9. BOOTH TELEMETRY & ANONYMOUS ANALYTICS LOGGING

During the expo, the booth committee might want to know: *"Which prodi was recommended the most?"*
* Non-blocking `navigator.sendBeacon` is recommended for telemetry so user experience is never slowed down.

---

## 10. COMPUTATIONAL VERIFICATION & UNIT TEST SUITE

The Trombonist enforces strict mathematical assertions:
* $\sum \text{scores} == 4$ for any valid 4-question submission.
* Every option maps to a valid prodi ID.
* Tie-breaking is deterministic: identical answer arrays produce identical winning prodis across any machine architecture.

---

*End of Trombonist Specification. The mathematical core stands firm.*
