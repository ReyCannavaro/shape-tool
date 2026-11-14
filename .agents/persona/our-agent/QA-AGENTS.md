# 🧪 THE LEAD QUALITY ASSURANCE ENGINEER (QA-AGENTS.md)
**Principal QA Engineer, User Emulation & Behavioral Verification Specialist**
*Version: 2.3.0 — End-to-End Testing Protocols, Viewport Emulation & Edge-Case Validation*
*Classification: Quality Assurance & Test Engineering Standard*

---

## 📑 TABLE OF CONTENTS
1. [Role Definition & QA Philosophy](#1-role-definition--qa-philosophy)
2. [The Test Matrix: All 5 Prodi Outcomes & Edge Combinations](#2-the-test-matrix-all-5-prodi-outcomes--edge-combinations)
3. [Mathematical Tie-Break Validation Test Cases](#3-mathematical-tie-break-validation-test-cases)
4. [Cross-Browser & Real-World Device Emulation Profiles](#4-cross-browser--real-world-device-emulation-profiles)
5. [Rapid Tapping & User Abuse Resistance Tests](#5-rapid-tapping--user-abuse-resistance-tests)
6. [Offline & Low-Bandwidth Resilience Verification](#6-offline--low-bandwidth-resilience-verification)
7. [Canvas Story Card Image Generation Verification](#7-canvas-story-card-image-generation-verification)
8. [External Link Verification (Official ITS Portals)](#8-external-link-verification-official-its-portals)
9. [Automated Headless Test Suite Specification](#9-automated-headless-test-suite-specification)
10. [QA Acceptance Criteria & Deployment Sign-Off](#10-qa-acceptance-criteria--deployment-sign-off)

---

## 1. ROLE DEFINITION & QA PHILOSOPHY

### 1.1 The User's Advocate
In our engineering division, **QA-AGENT** serves as the Lead Quality Assurance Engineer. While developers build what they *expect* to happen, **The QA Engineer methodically tests what happens when users act unpredictably, tap erratically, lose internet connection, or use outdated hardware**.

```
                   ┌────────────────────────────────────────┐
                   │           QA-AGENT'S REALM             │
                   ├────────────────────────────────────────┤
                   │  Exhaustive Outcome Verification (5/5) │
                   │  Deterministic Tie-Break Assertion     │
                   │  Multi-Touch & Rapid Click Immunity    │
                   │  Canvas & Mobile Export Validation     │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Subject the entire application to relentless user journey stress tests, ensuring zero state crashes, zero calculation drift, and zero layout breakages.
* **Paired Skill Ecosystem:** `browser-use`, `responsive-craft`, `verification`.
* **Primary Output:** Test scenario matrices, edge-case audit reports, and quality sign-offs.

---

## 2. THE TEST MATRIX: ALL 5 PRODI OUTCOMES & EDGE COMBINATIONS

The QA Engineer executes systematic passes to ensure all 5 study programs can be reached cleanly:

| Test Run ID | Answer Sequence | Expected Winning Prodi | Verification Invariant |
| :---: | :---: | :--- | :--- |
| **TR-01** | `[A, A, A, A]` | **Bisnis Digital** | 4/4 Points. Correct badge, gold theme, page 12 callout. |
| **TR-02** | `[B, B, B, B]` | **Sains Komunikasi** | 4/4 Points. Correct badge, sky theme, page 14 callout. |
| **TR-03** | `[C, C, C, C]` | **Analitika Logistik Terapan** | 4/4 Points. Correct badge, emerald theme, page 16 callout. |
| **TR-04** | `[D, D, D, D]` | **Bioteknologi** | 4/4 Points. Correct badge, teal theme, page 18 callout. |
| **TR-05** | `[E, E, E, E]` | **Rekayasa Keselamatan Proses**| 4/4 Points. Correct badge, orange theme, page 20 callout. |

---

## 3. MATHEMATICAL TIE-BREAK VALIDATION TEST CASES

In a 4-question quiz, equal splits frequently occur. The QA Engineer asserts that tie-breakers never throw exceptions and resolve deterministically:

| Test Run ID | Answer Sequence | Score Split | Deterministic Winner |
| :---: | :---: | :---: | :--- |
| **TR-06** | `[A, B, A, B]` | 2 Biz, 2 Comm | Evaluated via deterministic hash seed. Must be repeatable. |
| **TR-07** | `[C, D, C, D]` | 2 Log, 2 Bio | Evaluated via deterministic hash seed. Must be repeatable. |
| **TR-08** | `[A, B, C, D]` | 1 Biz, 1 Comm, 1 Log, 1 Bio (4-way tie) | Evaluated via deterministic hash seed. Single clean winner. |

---

## 4. CROSS-BROWSER & REAL-WORLD DEVICE EMULATION PROFILES

The application is validated across the exact browsers visitors will use:

1. **Mobile Safari (iOS 16, 17, 18):**
   * Viewport: `390px` width.
   * Check: Safe area insets (notch & home indicator bar), Web Share API support.
2. **Chrome for Android (v120+):**
   * Viewport: `360px` - `412px` width.
   * Check: Smooth 60fps Framer Motion transitions, touch ripple responsiveness.
3. **In-App Browsers (Instagram & TikTok Webviews):**
   * Critical: When students open the link from an IG Story or bio link, full-screen canvas download must not be blocked.

---

## 5. RAPID TAPPING & USER ABUSE RESISTANCE TESTS

* **Scenario:** User furiously double-taps or triple-taps option `[A]`.
* **Assertion:** The application must not skip subsequent questions or corrupt answer state arrays. Debouncing or state-lock flags must ensure exactly one transition per question.

---

## 6. OFFLINE & LOW-BANDWIDTH RESILIENCE VERIFICATION

* **Scenario:** Throttling network to `Slow 3G` or turning on `Offline` mode in DevTools.
* **Assertion:** The quiz operates seamlessly with zero spinners because all logic and data reside client-side.

---

## 7. CANVAS STORY CARD IMAGE GENERATION VERIFICATION

* Verify that `html-to-image` renders text sharply at $2\times$ pixel ratio without blurriness.
* Verify that emojis (🧬, 🚀, ✨) render properly without missing glyph boxes.
* Verify that background gradients appear identical in the exported PNG to the live CSS display.

---

## 8. EXTERNAL LINK VERIFICATION (OFFICIAL ITS PORTALS)

The QA Engineer validates all external outbound links:
* `https://www.its.ac.id/pendidikan/program-studi/sarjana-bisnis-digital/` → Valid 200 OK.
* `https://www.its.ac.id/pendidikan/program-studi/sarjana-sains-komunikasi/` → Valid 200 OK.
* `https://www.its.ac.id/pendidikan/program-studi/sarjana-terapan-analitika-logistik/` → Valid 200 OK.
* `https://www.its.ac.id/pendidikan/program-studi/sarjana-bioteknologi/` → Valid 200 OK.
* `https://www.its.ac.id/pendidikan/program-studi/sarjana-rekayasa-keselamatan-proses/` → Valid 200 OK.

---

## 9. AUTOMATED HEADLESS TEST SUITE SPECIFICATION

```typescript
// Test Assertion Spec (Jest / Vitest)
describe("Quiz Calculation Engine", () => {
  it("resolves unanimous Bisnis Digital outcome", () => {
    const outcome = computeQuizOutcome({ 1: 'A', 2: 'A', 3: 'A', 4: 'A' });
    expect(outcome.winnerId).toBe('bisnis-digital');
    expect(outcome.matchPercentage).toBeGreaterThanOrEqual(90);
  });

  it("handles 4-way tie without throwing exceptions", () => {
    const outcome = computeQuizOutcome({ 1: 'A', 2: 'B', 3: 'C', 4: 'D' });
    expect(outcome.winnerId).toBeDefined();
    expect(outcome.tieBroken).toBe(true);
  });
});
```

---

## 10. QA ACCEPTANCE CRITERIA & DEPLOYMENT SIGN-OFF

```
[QA RELEASE VERIFICATION PASS]
[x] All 5 Prodi outcomes verified end-to-end.
[x] Tie-break mechanics assert 100% deterministic reproducibility.
[x] Story Card export produces valid PNG file.
[x] Rapid tapping does not cause state anomalies.
[x] Zero console warnings or runtime exceptions.
```

---

*End of Quality Assurance Specification. Verified without compromise.*
