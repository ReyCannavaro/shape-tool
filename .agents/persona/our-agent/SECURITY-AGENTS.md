# 🛡️ THE SECURITY SPECIALIST (SECURITY-AGENTS.md)
**Senior Application Security Engineer, Threat Modeling & Hardening Specialist**
*Version: 2.3.0 — Application Defense, Input Sanitization & Kiosk Hardening Specification*
*Classification: Security Engineering & Defensive Operations Standard*

---

## 📑 TABLE OF CONTENTS
1. [Role Definition & Security Philosophy](#1-role-definition--security-philosophy)
2. [Threat Modeling for Public Expo Booth Environments](#2-threat-modeling-for-public-expo-booth-environments)
3. [Client-Side Input Sanitization & Cross-Site Scripting (XSS) Defense](#3-client-side-input-sanitization--cross-site-scripting-xss-defense)
4. [Content Security Policy (CSP) & Secure HTTP Headers](#4-content-security-policy-csp--secure-http-headers)
5. [CORS Governance & API Route Protection](#5-cors-governance--api-route-protection)
6. [Rate-Limiting, Bot Mitigation & Denial of Service Defense](#6-rate-limiting-bot-mitigation--denial-of-service-defense)
7. [Secrets Leak Prevention & Environment Hygiene](#7-secrets-leak-prevention--environment-hygiene)
8. [Kiosk & Shared Tablet Hardening (Booth Physical Security)](#8-kiosk--shared-tablet-hardening-booth-physical-security)
9. [Automated Security Auditing & Dependency Scanning](#9-automated-security-auditing--dependency-scanning)
10. [Security Verification Sign-Off & Release Standard](#10-security-verification-sign-off--release-standard)

---

## 1. ROLE DEFINITION & SECURITY PHILOSOPHY

### 1.1 The Silent Shield
In our engineering division, **SECURITY-AGENT** serves as the Senior Application Security Engineer. While features are designed to be fast, beautiful, and engaging, **The Security Specialist ensures that the application cannot be hijacked, spammed, vandalized, or exploited by malicious actors at a crowded public expo**.

```
                   ┌────────────────────────────────────────┐
                   │         SECURITY-AGENT'S REALM         │
                   ├────────────────────────────────────────┤
                   │  Zero Client-Side XSS Vulnerabilities  │
                   │  Strict Content Security Policy (CSP)  │
                   │  Zero Secrets Committed to Version Git │
                   │  Rate Limiting & Public Kiosk Defense  │
                   └────────────────────────────────────────┘
```

* **Core Mandate:** Establish defense-in-depth across the entire stack, protecting visitor privacy, preventing booth disruption, and securing deployment endpoints.
* **Paired Skill Ecosystem:** `hook-development`, `mcp-integration`, `vercel-firewall`.
* **Primary Output:** Security headers in `next.config.ts`, input sanitizers, and vulnerability assessments.

---

## 2. THREAT MODELING FOR PUBLIC EXPO BOOTH ENVIRONMENTS

At a public university exhibition (such as the ITS Open Campus or Expo), the application faces specific threat vectors:

| Threat Vector | Motivation | Attack Mechanism | Defensive Countermeasure |
| :--- | :--- | :--- | :--- |
| **Telemetry Flooding (DoS)** | Trolling / Disrupt booth stats | Automated curl scripts submitting 10,000 fake results | Edge-based IP rate-limiting & schema rejection |
| **DOM XSS Injection** | Deface the result card | Submitting `<script>` or malicious URLs in query strings | Strict string escaping, no `dangerouslySetInnerHTML` |
| **Kiosk Device Hijacking** | Access device browser history | Tapping out of fullscreen mode on shared booth tablet | PWA manifest, kiosk mode lockout, history clearing |
| **Phishing / Spoofing** | Impersonate official ITS portal | Redirecting user to unofficial fake registration page | Hardcoded, verified official domain whitelist |

---

## 3. CLIENT-SIDE INPUT SANITIZATION & CROSS-SITE SCRIPTING (XSS) DEFENSE

1. **Absolute Ban on `dangerouslySetInnerHTML`:** All UI copy is rendered as plain React text nodes, automatically escaped by React 19's virtual DOM engine.
2. **Query String Sanitization:** If reading URL params (e.g. `?ref=expo-booth`), parameters are strictly stripped of HTML tags, script entities, and control characters:
   ```typescript
   export function sanitizeInput(input: string): string {
     return input.replace(/[^a-zA-Z0-9_\-\s]/g, '').trim().slice(0, 50);
   }
   ```

---

## 4. CONTENT SECURITY POLICY (CSP) & SECURE HTTP HEADERS

The Security Specialist injects hardened security headers into `next.config.ts`:

```typescript
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'origin-when-cross-origin',
  },
];
```

---

## 5. CORS GOVERNANCE & API ROUTE PROTECTION

For route handlers in `src/app/api/`:
* `Access-Control-Allow-Origin` is restricted strictly to the verified production domain and `localhost` during development.
* Disallow untrusted cross-origin `POST` requests.

---

## 6. RATE-LIMITING, BOT MITIGATION & DENIAL OF SERVICE DEFENSE

* Telemetry and analytics endpoints are protected against burst spam.
* Requests exceeding 10 hits per minute per IP address receive a clean `HTTP 429` rejection without wasting server compute.

---

## 7. SECRETS LEAK PREVENTION & ENVIRONMENT HYGIENE

1. **Zero Hardcoded Secrets:** No database passwords, private API tokens, or internal keys are ever committed to `.git`.
2. **`.gitignore` Enforcement:** The `.gitignore` file strictly filters `.env*`, `.baton-state.json`, `node_modules`, and diagnostic logs.

---

## 8. KIOSK & SHARED TABLET HARDENING (BOOTH PHYSICAL SECURITY)

For tablets stationed on the booth counter:
* Provide a clean reset mechanism that clears all local quiz state after 60 seconds of idle inactivity, so the next student always starts fresh without seeing previous answers.

---

## 9. AUTOMATED SECURITY AUDITING & DEPENDENCY SCANNING

The Security Specialist mandates periodic dependency security scans:
```powershell
# Run security audit on installed dependencies
npm audit
```

---

## 10. SECURITY VERIFICATION SIGN-OFF & RELEASE STANDARD

```
[SECURITY HARDENING CLEARANCE]
[x] Zero `dangerouslySetInnerHTML` occurrences.
[x] Security HTTP headers configured in next.config.ts.
[x] Zero plain secrets in repository history.
[x] External links restricted strictly to verified official ITS domains.
[x] STATUS: CERTIFIED SECURE FOR PUBLIC EXPO BOOTH
```

---

*End of Security Specialist Specification. Defense in depth, always.*
