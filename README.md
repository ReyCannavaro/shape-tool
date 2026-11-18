# 🧬 Cocoklogi: DNA Prodi Baru ITS Kamu Banget!
> **Interactive Diagnostic Quiz App for ITS Open Campus & Expo 2026**  
> Kolaborasi Resmi Bersama **ShapeTool Magazine Vol. 12** • Institut Teknologi Sepuluh Nopember (ITS) Surabaya

[![Next.js](https://img.shields.io/badge/Next.js-16.4.6-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.3.0-blue?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3.3-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x_Strict-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Branch](https://img.shields.io/badge/Active_Branch-dev-brightgreen?style=for-the-badge&logo=git)](https://github.com/ReyCannavaro/shape-tool/tree/dev)

---

## 📌 1. TENTANG PROYEK (PROJECT OVERVIEW)

**Cocoklogi DNA Prodi Baru ITS** adalah aplikasi web interaktif berbasis kuis situasional yang dirancang khusus untuk anjungan (booth) pameran **ITS Open Campus & Expo 2026** serta pembaca majalah fisik **ShapeTool Magazine Vol. 12**.

Aplikasi ini mengajak calon mahasiswa baru (siswa SMA/SMK/MA sederajat) menjawab 5 studi kasus praktis untuk mengungkap program studi baru di ITS yang paling selaras dengan naluri analitis, gaya kepemimpinan, dan visi masa depan mereka. Di akhir kuis, pengunjung mendapatkan **Kartu DNA Personalisasi berukuran 9:16 (Instagram Story ready)** yang dapat diunduh langsung atau ditunjukkan ke meja souvenir ShapeTool untuk menukarkan merchandise eksklusif.

---

## 🏛️ 2. PROGRAM STUDI BARU ITS YANG DILIPUT (5 TARGET PRODI)

Sesuai kurasi pada **ShapeTool Magazine Vol. 12**, kuis ini memetakan profil kecocokan ke dalam 5 program studi terbaru di ITS:

| No | Program Studi | Fakultas | Halaman Majalah | Fokus Utama & Keunggulan |
|:---:|:---|:---|:---:|:---|
| **1** | **S1 Bisnis Digital** | **CREABIZ** (Desain Kreatif & Bisnis Digital) | **Halaman 12** | Model bisnis teknologi, *growth hacking*, monetisasi digital, dan inkubasi startup modern. |
| **2** | **S1 Sains Komunikasi** | **FSAD** (Sains & Analitika Data) | **Halaman 14** | Komunikasi komputasional, analisis jaringan media sosial, jurnalisme sains, dan etika AI. |
| **3** | **D4 Analitika Logistik Terapan** | **Fakultas Vokasi (FV)** | **Halaman 16** | Rantai pasok maritim, otomatisasi pergudangan cerdas, dan analitika rute distribusi terpadu. |
| **4** | **S1 Bioteknologi** | **FSAD** (Sains & Analitika Data) | **Halaman 18** | Rekayasa genetika molekuler, bioenergi mikroalga, bioproses industri, dan biomedis terbarukan. |
| **5** | **S1 Rekayasa Keselamatan Proses** | **FTIRS** (Teknologi Industri & Rekayasa Sistem) | **Halaman 20** | Proteksi industri petrokimia, mitigasi bahaya katastropik, HAZOP, dan keselamatan kilang energi. |

---

## 🛠️ 3. TECH STACK & ARSITEKTUR TEKNOLOGI

- **Framework:** [Next.js 16.4.6](https://nextjs.org/) (App Router, Turbopack, Partial Prefetching, Cache Components)
- **UI Runtime:** [React 19.3.0](https://react.dev/) (`'use client'` boundary segregation, functional state machine)
- **Styling:** [Tailwind CSS v4.3.3](https://tailwindcss.com/) (CSS-first `@theme` configuration, variable scoping)
- **Bahasa:** [TypeScript 5](https://www.typescriptlang.org/) (Strict mode, zero `any`, compile-time validation)
- **Animasi & Motion:** [Framer Motion 14+](https://www.framer.com/motion/) (Hardware-accelerated springs, 60/120 FPS)
- **Ikonografi:** [Lucide React](https://lucide.dev/) (Clean, modern geometric SVG icons)
- **Grafis & Partikel:** [Canvas Confetti](https://www.npmjs.com/package/canvas-confetti) (Dual-cannon celebration shower)
- **Export Engine:** [html-to-image](https://www.npmjs.com/package/html-to-image) (High-DPI 2x retina canvas screenshotting)
- **Palet Warna Identitas:**
  - 🌌 **ITS Midnight Navy:** `#002C6C` & `#001433` (Warna utama institusi & backdrop booth)
  - ⚡ **Electric Gold:** `#FFB800` (Aksen prestasi & energi eksplorasi)
  - 🌐 **Cyber Cyan:** `#00E5FF` (Aksen teknologi, radar scanner, dan masa depan)

---

## 📂 4. STRUKTUR FOLDER PROYEK (FOLDER TOPOLOGY)

Proyek ini menggunakan struktur modular yang rapi agar mudah dipahami oleh anggota tim dan agent AI:

```
shape-tool/
├── .agents/                      # Spesifikasi & persona multi-agent orchestra (1.000+ baris/file)
│   ├── persona/
│   │   ├── orchestrator/         # Konduktor sistem (AGENT, BATON, ARTIST, VIOLINIST, FLUTIST, TROMBONIST, PERCUSSIONIST)
│   │   ├── our-agent/            # Divisi rekayasa (ENG, FE, BE, FS, QA, QC, SECURITY)
│   │   └── useskill/             # Integrasi skill toolsets (USESKILL)
│   └── skills/                   # Kumpulan custom agent skills
├── src/
│   ├── app/                      # Next.js 16 App Router
│   │   ├── api/                  # Route Handlers
│   │   │   └── health/route.ts   # System health probe (JSON standard envelope)
│   │   ├── favicon.ico
│   │   ├── globals.css           # Tailwind CSS v4 @theme & ITS CSS variables
│   │   ├── layout.tsx            # Server Component Root Layout (SEO & Meta tags)
│   │   └── page.tsx              # Entry page (Development Scaffold / Main view)
│   ├── components/               # Komponen UI modular
│   │   ├── LandingView.tsx       # Tampilan pembuka & badge 5 prodi
│   │   ├── QuestionView.tsx      # Tampilan soal interaktif & stack opsi (48px touch)
│   │   ├── LoadingView.tsx       # Animasi radar scanner 5-axis SVG
│   │   ├── ResultView.tsx        # Tampilan diagnosis hasil & kecocokan prodi
│   │   ├── StoryCard.tsx         # Template 9:16 kartu Instagram Story (540x960 / 1080x1920)
│   │   ├── QuizErrorBoundary.tsx # Boundary penangkap crash runtime booth
│   │   └── QuizApp.tsx           # Master state machine controller
│   ├── data/
│   │   └── quiz-data.ts          # Bank 5 soal studi kasus & dataset 5 program studi ITS
│   ├── hooks/                    # Reusable React custom hooks
│   │   ├── useQuizEngine.ts      # Logika state transisi & navigasi soal
│   │   ├── useAudioEffects.ts    # Web Audio API Synthesizer (Zero asset MP3)
│   │   ├── useKeyboardShortcuts.ts # Shortcut keyboard fisik booth (A-E, 1-5, Backspace)
│   │   ├── useCardExporter.ts    # Pipeline ekspor PNG kartu story via html-to-image
│   │   └── useConfettiCannon.ts  # Efek partikel konfeti emas & cyan
│   ├── lib/                      # Helper & utility murni
│   │   ├── motion-presets.ts     # Konstanta fisika spring Framer Motion
│   │   ├── scoring-engine.ts     # Algoritma perhitungan vektor 5D & tie-breaker
│   │   └── utils.ts              # Penggabung class Tailwind (clsx + twMerge)
│   └── types/                    # Kontrak tipe data TypeScript
│       ├── api.ts                # Standar envelope ApiResponse<T> & RFC 7807
│       └── quiz.ts               # Tipe domain (ProdiId, OptionKey, QuizResult, dsb)
├── AGENTS.md                     # Pedoman umum untuk AI Coding Agent tim (Cursor/Claude/Copilot)
├── package.json                  # Dependensi proyek & npm scripts
├── tsconfig.json                 # Konfigurasi TypeScript strict
└── README.md                     # Dokumentasi utama proyek ini
```

---

## 🚀 5. MEMULAI PENGEMBANGAN (GETTING STARTED)

### 5.1 Prasyarat
- **Node.js:** Versi `18.18.0` atau yang lebih baru (disarankan Node 20 LTS)
- **Package Manager:** `npm` (atau `pnpm` / `bun`)
- **Git:** Terhubung ke remote repositori `ReyCannavaro/shape-tool`

### 5.2 Langkah Instalasi & Menjalankan Lokal

1. **Clone repository dan beralih ke branch `dev`:**
   ```bash
   git clone https://github.com/ReyCannavaro/shape-tool.git
   cd shape-tool
   git checkout dev
   ```

2. **Install seluruh dependensi:**
   ```bash
   npm install
   ```

3. **Jalankan development server:**
   ```bash
   npm run dev
   ```

4. **Buka di peramban:**
   Akses `http://localhost:3000` pada browser pilihan Anda.

5. **Uji Validasi Build Production:**
   ```bash
   npm run build
   ```

---

## 🤖 6. PANDUAN PENGEMBANGAN DENGAN AI AGENTS

Jika Anda atau rekan tim menggunakan AI coding assistant (**Cursor, Claude Code, Windsurf, GitHub Copilot, Gemini CLI, Antigravity**):

1. **Wajib membaca [`AGENTS.md`](./AGENTS.md):** Berisi aturan baku, konvensi penulisan kode Next.js 16 App Router, larangan *anti-slop*, dan panduan arsitektur.
2. **Spesifikasi Lengkap per Role:** Tersedia di folder [`.agents/persona/`](./.agents/persona/), meliputi divisi Konduktor Orkestra (`orchestrator/`) dan Divisi Rekayasa Teknis (`our-agent/`).
3. **Branch Kebijakan Pengembangan:**
   - **Semua pekerjaan fitur dan perbaikan harus dibuat dari dan di-merge ke branch `dev`**.
   - Branch `main` diproteksi untuk rilis produksi booth saat hari H expo.

---

## 👥 7. KONTRIBUSI & TATA CARA KERJA (CONTRIBUTING)

1. Pastikan Anda berada di branch `dev`:
   ```bash
   git checkout dev
   git pull origin dev
   ```
2. Buat branch fitur baru jika diperlukan:
   ```bash
   git checkout -b feature/nama-fitur
   ```
3. Lakukan pengujian build sebelum membuat commit:
   ```bash
   npm run build
   ```
4. Push dan buat Pull Request (PR) ke branch `dev`.

---

## 📄 8. KREDIT & LISENSI

Dikembangkan dengan bangga untuk menyemarakkan **ITS Open Campus & Expo 2026** oleh Tim **ShapeTool Magazine Vol. 12**.  
*Institut Teknologi Sepuluh Nopember, Surabaya.*
