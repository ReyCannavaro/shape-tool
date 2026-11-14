# ⚙️ THE BACKEND SPECIALIST (BE-AGENTS.md)
**Senior Backend Systems Engineer, API Architecture & Data Pipeline Specialist**
*Version: 2.3.0 — Server Runtimes, Data Validation & API Governance Specification*
*Classification: Backend Architecture & Server Systems Standard*

---

## 📑 TABLE OF CONTENTS
1. [Role Definition & Backend Mandate](#1-role-definition--backend-mandate)
2. [Next.js App Router API Route Architecture (`/api/...`)](#2-nextjs-app-router-api-route-architecture-api)
3. [Server Actions vs Route Handlers: Decision Guide](#3-server-actions-vs-route-handlers-decision-guide)
4. [Input Validation, Schemas & Payload Sanitization](#4-input-validation-schemas--payload-sanitization)
5. [Future-Proof Database Integration (PostgreSQL, Drizzle / Prisma)](#5-future-proof-database-integration-postgresql-drizzle--prisma)
6. [Rate-Limiting & Anti-Spam Defense for Expo Booths](#6-rate-limiting--anti-spam-defense-for-expo-booths)
7. [Edge Runtime Configuration & Cold-Start Elimination](#7-edge-runtime-configuration--cold-start-elimination)
8. [Telemetry Ingestion & Expo Analytics Pipeline](#8-telemetry-ingestion--expo-analytics-pipeline)
9. [Integration with Trombonist & Fullstack Agents](#9-integration-with-trombonist--fullstack-agents)
10. [Backend Operational Checklist & Health Monitoring](#10-backend-operational-checklist--health-monitoring)

---

## 1. ROLE DEFINITION & BACKEND MANDATE

### 1.1 The Engine Beneath the Hull
In our engineering division, **BE-AGENT** serves as the Senior Backend Systems Engineer. While the client delights the eye, **The Backend Engineer guarantees that all server transactions, data integrity, future database schemas, and API communications operate with zero failure, deterministic latency, and impenetrable security**.

```
                   ┌────────────────────────────────────────┐
                   │           BE-AGENT'S REALM             │
                   ├────────────────────────────────────────┤
                   │  Next.js 16 Route Handlers (`app/api`) │
                   │  Edge Runtime Telemetry Ingestion      │
                   │  Strict Schema Validation              │
                   │  Future DB Readiness (PostgreSQL/ORM)  │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Architect, implement, and maintain high-efficiency backend services, input validators, and telemetry collectors.
* **Paired Skill Ecosystem:** `backend-engineering-elysia`, `context7-mcp`, `create-a-backend`.
* **Primary Output:** Route handlers in `src/app/api/`, server utility modules, and schema validators.

---

## 2. NEXT.JS APP ROUTER API ROUTE ARCHITECTURE (`/api/...`)

Every API endpoint must follow strict REST conventions with standardized JSON envelopes:

```
src/app/api/
├── health/
│   └── route.ts               # Healthcheck & ping endpoint
├── quiz/
│   ├── record/
│   │   └── route.ts           # Telemetry submission for completed quiz
│   └── stats/
│       └── route.ts           # Aggregated prodi popularity stats for booth screen
```

### 2.1 Standardized Response Envelope
```typescript
export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: unknown;
  };
  timestamp: string;
}
```

---

## 3. SERVER ACTIONS VS ROUTE HANDLERS: DECISION GUIDE

* **Route Handlers (`/api/...`):** Preferred for public telemetry beacons, external webhook integrations, and third-party data consumers.
* **Server Actions (`"use server"`):** Preferred when mutations are initiated directly by Next.js client components without manual `fetch` boilerplate.

---

## 4. INPUT VALIDATION, SCHEMAS & PAYLOAD SANITIZATION

All incoming payloads are strictly validated before processing:

```typescript
export interface QuizSubmissionPayload {
  answers: Record<string, string>;
  winnerProdiId: string;
  durationMs: number;
  clientTimestamp: number;
}

export function validateSubmissionPayload(body: unknown): body is QuizSubmissionPayload {
  if (!body || typeof body !== 'object') return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.winnerProdiId === 'string' &&
    typeof b.durationMs === 'number' &&
    typeof b.answers === 'object' &&
    b.answers !== null
  );
}
```

---

## 5. FUTURE-PROOF DATABASE INTEGRATION (POSTGRESQL, DRIZZLE / PRISMA)

If the committee later decides to persist quiz leads (e.g. name, school origin, WhatsApp for doorprizes), the database schema is pre-architected:

```sql
-- Future PostgreSQL Schema Migration
CREATE TABLE IF NOT EXISTS quiz_participants (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(120),
  phone_whatsapp VARCHAR(20),
  school_origin VARCHAR(150),
  matched_prodi_id VARCHAR(50) NOT NULL,
  match_percentage INTEGER NOT NULL,
  answers_json JSONB NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE INDEX IF NOT EXISTS idx_participants_prodi ON quiz_participants(matched_prodi_id);
```

---

## 6. RATE-LIMITING & ANTI-SPAM DEFENSE FOR EXPO BOOTHS

To prevent bot scripts or malicious visitors from spamming the telemetry endpoint:
* Simple in-memory sliding window rate limiter (or Vercel Edge KV rate limit):
  * Limit: Max 10 requests per minute per IP address.
  * Excess requests return `HTTP 429 Too Many Requests`.

---

## 7. EDGE RUNTIME CONFIGURATION & COLD-START ELIMINATION

```typescript
// Explicit Edge runtime declaration
export const runtime = 'edge';
export const dynamic = 'force-dynamic';
```
Edge execution ensures response times $< 50\text{ms}$ globally, terminating traffic directly at the nearest CDN node.

---

## 8. TELEMETRY INGESTION & EXPO ANALYTICS PIPELINE

```typescript
// src/app/api/quiz/record/route.ts
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    if (!payload.winnerProdiId) {
      return NextResponse.json(
        { success: false, error: { code: 'INVALID_INPUT', message: 'Missing prodi id' } },
        { status: 400 }
      );
    }

    // Telemetry processing (logged or forwarded)
    return NextResponse.json({
      success: true,
      data: { acknowledged: true },
      timestamp: new Date().toISOString()
    });
  } catch (err) {
    return NextResponse.json(
      { success: false, error: { code: 'INTERNAL_ERROR', message: 'Failed to process telemetry' } },
      { status: 500 }
    );
  }
}
```

---

## 9. INTEGRATION WITH TROMBONIST & FULLSTACK AGENTS

* Works synchronously with `TROMBONIST` to mirror calculation models.
* Coordinates with `FS-AGENT` for data serialization contracts between client and server.

---

## 10. BACKEND OPERATIONAL CHECKLIST & HEALTH MONITORING

```
[BACKEND READINESS VERIFICATION]
[x] Edge API route handlers compile cleanly.
[x] Input payload schema validation active.
[x] Error responses conform to standardized envelope format.
[x] Zero unhandled promise rejections.
[x] Future database migration scripts prepared.
```

---

*End of Backend Specialist Specification. Solid logic, unbreakable infrastructure.*
