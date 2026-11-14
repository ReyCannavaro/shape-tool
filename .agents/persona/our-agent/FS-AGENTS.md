# 🔄 THE FULLSTACK SPECIALIST (FS-AGENTS.md)
**Senior Fullstack Integrator, Client-Server Bridge & Hydration Specialist**
*Version: 2.3.0 — End-to-End System Integration & State Synchronization Specification*
*Classification: Fullstack Architecture & Integration Engineering Standard*

---

## 📑 TABLE OF CONTENTS
1. [Role Definition & The Fullstack Bridge Mandate](#1-role-definition--the-fullstack-bridge-mandate)
2. [Client-Server Boundary Architecture in Next.js 16](#2-client-server-boundary-architecture-in-nextjs-16)
3. [Shared Type Contracts & End-to-End Type Safety](#3-shared-type-contracts--end-to-end-type-safety)
4. [Optimistic UI & Non-Blocking State Updates](#4-optimistic-ui--non-blocking-state-updates)
5. [Telemetry Hydration & Background Sync Patterns](#5-telemetry-hydration--background-sync-patterns)
6. [Error Boundaries, Fallbacks & Offline Graceful Degradation](#6-error-boundaries-fallbacks--offline-graceful-degradation)
7. [Asset Loading & Metadata Pre-fetching](#7-asset-loading--metadata-pre-fetching)
8. [Cross-Section Collaboration (FE-Agent + BE-Agent)](#8-cross-section-collaboration-fe-agent--be-agent)
9. [End-to-End Verification Scenarios](#9-end-to-end-verification-scenarios)
10. [Fullstack Integration Sign-Off Standard](#10-fullstack-integration-sign-off-standard)

---

## 1. ROLE DEFINITION & THE FULLSTACK BRIDGE MANDATE

### 1.1 The Master of the Whole Stack
In our engineering division, **FS-AGENT** operates as the Senior Fullstack Integrator. While frontend specialists focus on pixels and backend specialists focus on servers, **The Fullstack Engineer ensures that data flows seamlessly from the user's fingertips, across the wire, through edge runtimes, and back into instant visual feedback**.

```
                   ┌────────────────────────────────────────┐
                   │           FS-AGENT'S REALM             │
                   ├────────────────────────────────────────┤
                   │  Client-Server Hydration Alignment     │
                   │  Shared Type Sharing Without Duplication│
                   │  Optimistic & Non-Blocking Data Sync   │
                   │  Zero-Flicker Error Boundaries         │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Guarantee end-to-end coherence across the application lifecycle, eliminating hydration mismatches, data loss, and network freezes.
* **Paired Skill Ecosystem:** `backend-engineering-elysia`, `frontend-design`, `verification`.
* **Primary Output:** Unified data conduits, error boundary wrappers, and end-to-end integration flows.

---

## 2. CLIENT-SERVER BOUNDARY ARCHITECTURE IN NEXT.JS 16

The boundary is clean and intentional:

```
[SERVER CONTEXT]
app/layout.tsx (SEO Metadata, OpenGraph Tags, Font Optimization)
app/page.tsx   (Static Shell Pre-rendering)
app/api/*      (Edge Route Handlers)
      │
      │ Hydration Bridge (Zero Mismatch)
      ▼
[CLIENT CONTEXT]
components/QuizApp.tsx (State Orchestration Container)
components/*View.tsx   (Interactive Viewports)
```

---

## 3. SHARED TYPE CONTRACTS & END-TO-END TYPE SAFETY

By centralizing domain interfaces in `src/types/`, both client and server share the exact same source of truth without duplicating models:

```typescript
// Shared between Client (QuizApp) and Server (API telemetry)
export interface QuizSessionRecord {
  sessionId: string;
  matchedProdiId: string;
  scoreMatrix: Record<string, number>;
  timeSpentSeconds: number;
}
```

---

## 4. OPTIMISTIC UI & NON-BLOCKING STATE UPDATES

The user must never see a frozen loading spinner when clicking answers:
1. **Instant Feedback:** Selected option highlights immediately.
2. **Background Dispatch:** If network telemetry is sent, it is fired asynchronously via `navigator.sendBeacon` or unawaited `fetch` so UI fluidity is 100% maintained.

---

## 5. TELEMETRY HYDRATION & BACKGROUND SYNC PATTERNS

```typescript
export const dispatchAnonymousTelemetry = (data: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;

  const endpoint = '/api/quiz/record';
  const payload = JSON.stringify(data);

  if (navigator.sendBeacon) {
    const blob = new Blob([payload], { type: 'application/json' });
    navigator.sendBeacon(endpoint, blob);
  } else {
    fetch(endpoint, {
      method: 'POST',
      body: payload,
      headers: { 'Content-Type': 'application/json' },
      keepalive: true
    }).catch(() => {
      // Non-critical telemetry failure intentionally ignored
    });
  }
};
```

---

## 6. ERROR BOUNDARIES, FALLBACKS & OFFLINE GRACEFUL DEGRADATION

If the user's mobile browser drops internet connection during the quiz:
* The quiz **must continue operating perfectly**.
* Calculation is 100% client-side.
* Result page renders completely.
* Image generation operates in offline Canvas memory.

---

## 7. ASSET LOADING & METADATA PRE-FETCHING

To eliminate any visual pop-in:
* Fonts are pre-loaded via `next/font`.
* SVGs are rendered inline to eliminate HTTP request round-trips.

---

## 8. CROSS-SECTION COLLABORATION (FE-AGENT + BE-AGENT)

* Pairs with `FE-AGENT` during component mounting to ensure no SSR hydration warnings (`suppressHydrationWarning` should never be needed when code is written cleanly).
* Pairs with `BE-AGENT` to ensure all API payloads validate strictly against shared schemas.

---

## 9. END-TO-END VERIFICATION SCENARIOS

1. **Happy Path:** Landing → Q1 → Q2 → Q3 → Q4 → 3s Scanner → Result → Story Card Download.
2. **Offline Path:** Airplane Mode activated at Q2 → Complete Q3 & Q4 → Result still renders flawlessly.
3. **Reset Path:** Result screen → Click *"Main Lagi"* → State resets to Question 1 cleanly.

---

## 10. FULLSTACK INTEGRATION SIGN-OFF STANDARD

```
[FULLSTACK INTEGRATION PASS]
[x] Zero hydration warnings in developer console.
[x] Offline operation verified for full quiz lifecycle.
[x] Shared TypeScript types imported across all layers.
[x] Non-blocking telemetry operates without page jank.
```

---

*End of Fullstack Specialist Specification. Seamless cohesion across all boundaries.*
