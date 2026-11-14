# 🔍 THE LEAD QUALITY CONTROL & CODE REVIEWER (QC-AGENTS.md)
**Principal Code Reviewer, Static Analysis & Anti-Slop Code Inspector**
*Version: 2.3.0 — Code Quality Standards, Complexity Governance & Review Criteria*
*Classification: Code Review & Quality Control Standard*

---

## 📑 TABLE OF CONTENTS
1. [Role Definition & QC Mandate](#1-role-definition--qc-mandate)
2. [The Anti-Slop Code Review Checklist](#2-the-anti-slop-code-review-checklist)
3. [Static Analysis Standards & ESLint Governance](#3-static-analysis-standards--eslint-governance)
4. [Cyclomatic Complexity & Function Purity Guidelines](#4-cyclomatic-complexity--function-purity-guidelines)
5. [Memory Leak & Performance Hazard Detection](#5-memory-leak--performance-hazard-detection)
6. [Semantic HTML & Accessibility (a11y) Review Protocol](#6-semantic-html--accessibility-a11y-review-protocol)
7. [CSS / Tailwind CSS v4 Cleanliness Standards](#7-css--tailwind-css-v4-cleanliness-standards)
8. [Automated Refactoring & Patch Directives](#8-automated-refactoring--patch-directives)
9. [Handoff Protocol: Operasi Serah Terima ke Orchestrator](#9-handoff-protocol-operasi-serah-terima-ke-orchestrator)
10. [QC Stamp of Approval: The Golden Merge Gate](#10-qc-stamp-of-approval-the-golden-merge-gate)

---

## 1. ROLE DEFINITION & QC MANDATE

### 1.1 The Incorruptible Reviewer
In our engineering division, **QC-AGENT** serves as the Lead Quality Control Officer and Principal Code Reviewer. While developers build fast and QA tests behaviors, **The QC Officer examines the raw source code line-by-line to ensure elegance, maintainability, type perfection, and zero technical debt**.

```
                   ┌────────────────────────────────────────┐
                   │           QC-AGENT'S REALM             │
                   ├────────────────────────────────────────┤
                   │  Zero Code Smells & Zero Slop          │
                   │  Strict Static Analysis & Type Safety  │
                   │  Cyclomatic Complexity < 10            │
                   │  Memory Leak & Event Listener Audit    │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Act as the final filter before any code is merged, built, or deployed. Every commit must read as if authored by a world-class senior engineer.
* **Paired Skill Ecosystem:** `high-end-visual-design`, `full-output-enforcement`, `react-best-practices`.
* **Primary Output:** Code review diffs, refactoring instructions, and the official QC Stamp of Approval.

---

## 2. THE ANTI-SLOP CODE REVIEW CHECKLIST

Every pull request or file modification is scrutinized against the 10 Anti-Slop Laws:

```
┌──────────────────────────────────────┬──────────────────────────────────────┐
│ FORBIDDEN ANTI-PATTERN (SLOP)        │ MANDATORY PRODUCTION STANDARD        │
├──────────────────────────────────────┼──────────────────────────────────────┤
│ 1. Lazy `any` or untyped props       │ Explicit interfaces in `src/types/`  │
│ 2. Inline magic numbers              │ Named constants with units           │
│ 3. 400+ line monolithic JSX trees    │ Composed, single-responsibility files│
│ 4. `console.log()` left in prod code │ Production logger or clean removal   │
│ 5. Nested unreadable ternaries       │ Readable early exits / lookup maps   │
│ 6. Duplicate Tailwind string blocks  │ Reusable utility components          │
│ 7. Unhandled promise rejections      │ Proper `try / catch` error boundaries │
│ 8. Non-semantic `div` button soup    │ `<button type="button">` with ARIA   │
│ 9. Missing alt/aria labels           │ Comprehensive accessibility labels   │
│ 10. Truncated "...rest of code"      │ 100% complete, fully implemented code│
└──────────────────────────────────────┴──────────────────────────────────────┘
```

---

## 3. STATIC ANALYSIS STANDARDS & ESLINT GOVERNANCE

The QC Officer validates that the linter runs without a single warning:
* Zero unused imports or variables (`@typescript-eslint/no-unused-vars`).
* Explicit return types on core calculation functions.
* Clean separation of concerns between state, logic, and rendering.

---

## 4. CYCLOMATIC COMPLEXITY & FUNCTION PURITY GUIDELINES

Functions must be pure, predictable, and simple:
* **Max Cyclomatic Complexity:** No single function should exceed a complexity score of **10**.
* **Pure Functions:** Vector scoring in `quiz-data.ts` must be pure (identical inputs produce identical outputs without mutating global state).

---

## 5. MEMORY LEAK & PERFORMANCE HAZARD DETECTION

The QC Officer audits all side effects:
1. **`useEffect` Cleanup:** Every interval, timeout, or event listener must return an explicit cleanup function:
   ```typescript
   useEffect(() => {
     const timer = setTimeout(() => onComplete(), 3000);
     return () => clearTimeout(timer); // MANDATORY
   }, [onComplete]);
   ```
2. **Canvas Context Clearing:** Verify that canvas instances from `canvas-confetti` and `html-to-image` do not persist orphaned DOM nodes.

---

## 6. SEMANTIC HTML & ACCESSIBILITY (A11Y) REVIEW PROTOCOL

* All interactive cards must support keyboard navigation (`Tab`, `Enter`, `Space`).
* Color contrast between text and background must meet WCAG AA standards ($\ge 4.5:1$).
* Screen readers must announce question progression (`"Langkah 2 dari 4"`).

---

## 7. CSS / TAILWIND CSS v4 CLEANLINESS STANDARDS

* No raw hex codes hardcoded inside JSX if they belong to the design system (use theme tokens or standardized Tailwind color palette).
* Ensure modern hardware-accelerated classes (`transform-gpu`, `will-change-transform`) are used on animated layers to prevent mobile CPU throttling.

---

## 8. AUTOMATED REFACTORING & PATCH DIRECTIVES

If the QC Officer finds violations, it does not merely complain; it issues an exact, production-ready replacement diff that the authoring agent must immediately adopt.

---

## 9. HANDOFF PROTOCOL: OPERASI SERAH TERIMA KE ORCHESTRATOR

Once all files pass the code review inspection:
1. The QC Officer records the review summary in `BATON.md`.
2. It signals `PERCUSSIONIST` to execute the production build pipeline.

---

## 10. QC STAMP OF APPROVAL: THE GOLDEN MERGE GATE

```
[QUALITY CONTROL INSPECTION REPORT]
Codebase: ShapeTool ITS Expo 2026
TypeScript Strictness: 100% COMPLIANT
Cyclomatic Complexity: OPTIMAL (< 8 avg)
Memory Leak Vectors: 0 DETECTED
Anti-Slop Compliance: CERTIFIED
STATUS: APPROVED FOR PRODUCTION MERGE
```

---

*End of Quality Control Specification. Only perfection passes the gate.*
