# 💻 THE FRONTEND SPECIALIST (FE-AGENTS.md)
**Senior Frontend Engineer, React 19 & Tailwind CSS v4 Implementation Master**
*Version: 2.3.0 — Client Component Architecture & User Experience Engineering*
*Classification: Frontend Engineering Specification*

---

## 📑 TABLE OF CONTENTS
1. [Role Definition & Implementation Scope](#1-role-definition--implementation-scope)
2. [React 19 & Next.js 16 Client Component Paradigms](#2-react-19--nextjs-16-client-component-paradigms)
3. [Tailwind CSS v4 Styling Standards & Class Compositions](#3-tailwind-css-v4-styling-standards--class-compositions)
4. [Master Component Implementation: `QuizApp.tsx`](#4-master-component-implementation-quizapptsx)
5. [Landing View Implementation: `LandingView.tsx`](#5-landing-view-implementation-landingviewtsx)
6. [Interactive Question Flow: `QuestionView.tsx`](#6-interactive-question-flow-questionviewtsx)
7. [Radar Scanner Implementation: `LoadingView.tsx`](#7-radar-scanner-implementation-loadingviewtsx)
8. [Victory Result Implementation: `ResultView.tsx`](#8-victory-result-implementation-resultviewtsx)
9. [Story Canvas Generator Component: `StoryCard.tsx`](#9-story-canvas-generator-component-storycardtsx)
10. [Frontend Quality Verification & Polish Checklist](#10-frontend-quality-verification--polish-checklist)

---

## 1. ROLE DEFINITION & IMPLEMENTATION SCOPE

### 1.1 The Client Interface Craftsman
In our engineering division, **FE-AGENT** is the Senior Frontend Specialist. While `VIOLINIST` designs the UX melody and `ARTIST` sets the aesthetic tone, **The Frontend Engineer writes the actual, battle-tested TSX code that renders flawlessly in the browser**.

```
                   ┌────────────────────────────────────────┐
                   │           FE-AGENT'S SCOPE             │
                   ├────────────────────────────────────────┤
                   │  Next.js 16 App Router Client Trees    │
                   │  React 19 Hooks (`useState`, `useRef`) │
                   │  Tailwind CSS v4 Utility Precision     │
                   │  Mobile Ergonomics & Responsive Touch  │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Implement clean, maintainable, high-performance React components adhering to the design specs of `ARTIST` and the interaction flow of `VIOLINIST`.
* **Paired Skill Ecosystem:** `design-taste-frontend`, `responsive-craft`, `react-best-practices`.
* **Primary Output:** `src/components/*.tsx` and `src/app/page.tsx`.

---

## 2. REACT 19 & NEXT.JS 16 CLIENT COMPONENT PARADIGMS

1. **`'use client'` Boundary Precision:** The root `layout.tsx` remains a Server Component for optimal SEO and metadata injection. Client interactivity is cleanly encapsulated within `QuizApp.tsx`.
2. **Predictable State Transitions:** All state mutators use pure functional updates to avoid race conditions:
   ```typescript
   setAnswers(prev => ({ ...prev, [questionId]: optionKey }));
   ```
3. **No Unnecessary Re-renders:** Component props are strictly typed, callbacks are memoized where expensive, and DOM mutations are batched.

---

## 3. TAILWIND CSS v4 STYLING STANDARDS & CLASS COMPOSITIONS

We enforce consistent utility class order and naming:

* **Container Foundation:** `min-h-screen w-full bg-[#030712] text-slate-100 flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans`.
* **Obsidian Glass Slab:** `bg-slate-900/80 border border-slate-700/60 backdrop-blur-xl rounded-2xl shadow-2xl`.
* **High-Impact Button:** `bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-extrabold rounded-xl shadow-[0_0_25px_rgba(255,184,0,0.35)] active:scale-95 transition-all`.

---

## 4. MASTER COMPONENT IMPLEMENTATION: `QuizApp.tsx`

`QuizApp.tsx` coordinates state across all four movements:

```typescript
export type QuizStage = 'landing' | 'quiz' | 'loading' | 'result';

export function QuizApp() {
  const [stage, setStage] = useState<QuizStage>('landing');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [calculationResult, setCalculationResult] = useState<CalculationResult | null>(null);

  const handleStart = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setStage('quiz');
  };

  const handleAnswerSelect = (questionId: number, optionKey: string) => {
    const updatedAnswers = { ...answers, [questionId]: optionKey };
    setAnswers(updatedAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIndex(prev => prev + 1);
      }, 180);
    } else {
      // Quiz completed -> Transition to Loading Radar
      const result = computeQuizOutcome(updatedAnswers);
      setCalculationResult(result);
      setStage('loading');
    }
  };

  const handleScanComplete = () => {
    setStage('result');
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setCalculationResult(null);
    setStage('landing');
  };
  
  // Render views conditionally based on stage
}
```

---

## 5. LANDING VIEW IMPLEMENTATION: `LandingView.tsx`

* Floating background elements: DNA, laptop, books, rocket.
* Hero Typography with ITS Heritage Navy/Gold.
* Mobile-optimized CTA button leading into the quiz.

---

## 6. INTERACTIVE QUESTION FLOW: `QuestionView.tsx`

* 4-step progressive questions.
* High-contrast option buttons with letter badge `[A]`, `[B]`, `[C]`, `[D]`, `[E]`.
* Animated progress bar tracking completion percentage.

---

## 7. RADAR SCANNER IMPLEMENTATION: `LoadingView.tsx`

* 3000ms delay timer with dynamic status copy changing every 1000ms.
* Concentric radar circles with rotating scanning beam.
* Smooth auto-trigger into `ResultView` upon timeout.

---

## 8. VICTORY RESULT IMPLEMENTATION: `ResultView.tsx`

* Celebratory confetti animation.
* Personalized study program card with matching color accent and badge.
* ShapeTool Magazine page callout box.
* Action buttons: Share to IG Story, Main Lagi, and Cek Info Resmi ITS.

---

## 9. STORY CANVAS GENERATOR COMPONENT: `StoryCard.tsx`

* Formatted to 9:16 aspect ratio ($1080 \times 1920\text{ px}$ scale).
* Uses `html-to-image` to generate a shareable image file.
* Integrates with `navigator.share` on mobile or falls back to direct download.

---

## 10. FRONTEND QUALITY VERIFICATION & POLISH CHECKLIST

```
[FRONTEND POLISH SIGN-OFF]
[x] Zero console errors during full user journey.
[x] Touch interactions feel instant with no sluggish delay.
[x] Tailwind CSS v4 compiles without unparsed directives.
[x] All text is comfortably readable with high contrast on mobile screens.
[x] Ready for deployment.
```

---

*End of Frontend Specialist Specification. Code with craftsmanship.*
