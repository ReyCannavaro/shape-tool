'use client';

import React from 'react';
import { Sparkles, ArrowRight, BookOpen, Layers } from 'lucide-react';

export interface LandingViewProps {
  onStart: () => void;
}

/**
 * Placeholder component for Landing / Welcome View.
 * Ready for detailed styling & creative iteration by frontend agents.
 */
export default function LandingView({ onStart }: LandingViewProps) {
  const targetProdis = [
    { name: 'Bisnis Digital', faculty: 'CREABIZ', page: 'Hal 12' },
    { name: 'Sains Komunikasi', faculty: 'FSAD', page: 'Hal 14' },
    { name: 'Analitika Logistik Terapan', faculty: 'VOKASI', page: 'Hal 16' },
    { name: 'Bioteknologi', faculty: 'FSAD', page: 'Hal 18' },
    { name: 'Rekayasa Keselamatan Proses', faculty: 'FTIRS', page: 'Hal 20' },
  ];

  return (
    <div className="flex flex-col items-center text-center p-6 rounded-3xl border border-white/10 bg-[#001F4D]/60 backdrop-blur-md">
      {/* Scaffold Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/40 bg-[#002C6C]/50 px-4 py-1 text-xs font-mono text-[#00E5FF]">
        <Layers className="h-3.5 w-3.5" />
        <span>[COMPONENT: LandingView.tsx - PLACEHOLDER SCAFFOLD]</span>
      </div>

      <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[#FFB800]/10 px-3 py-1 text-xs font-bold text-[#FFB800]">
        <Sparkles className="h-3.5 w-3.5" />
        <span>ShapeTool Magazine Vol. 12 × ITS Expo 2026</span>
      </div>

      <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        Cocoklogi <span className="text-[#00E5FF]">DNA Prodi Baru</span> ITS
      </h1>

      <p className="mb-6 max-w-md text-sm text-white/70">
        Temukan program studi baru ITS yang paling selaras dengan naluri analitis, kepemimpinan, dan bakat masa depanmu!
      </p>

      {/* Target Program Badges Preview */}
      <div className="mb-6 flex flex-wrap justify-center gap-2 max-w-md">
        {targetProdis.map((prodi) => (
          <div
            key={prodi.name}
            className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/80"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#00E5FF]" />
            <span className="font-medium">{prodi.name}</span>
            <span className="font-mono text-[10px] text-[#FFB800]">({prodi.faculty})</span>
          </div>
        ))}
      </div>

      <div className="mb-6 flex items-center gap-2 text-xs text-white/50">
        <BookOpen className="h-4 w-4 text-[#FFB800]" />
        <span>Panduan Resmi: ShapeTool Magazine Halaman 12-20</span>
      </div>

      {/* Trigger CTA */}
      <button
        onClick={onStart}
        className="flex w-full max-w-xs items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#FFB800] to-[#FFA000] py-3.5 px-6 font-bold text-[#001433] shadow-lg transition-transform hover:scale-105 active:scale-95"
      >
        <span>Mulai Uji DNA</span>
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  );
}
