'use client';

import React from 'react';
import { Layers, Loader2 } from 'lucide-react';

/**
 * Placeholder component for Loading / Radar Analysis View.
 * Ready for detailed SVG radar scanner graphics & sound effects.
 */
export default function LoadingView() {
  return (
    <div className="flex flex-col items-center justify-center p-10 text-center rounded-3xl border border-white/10 bg-[#001F4D]/60 backdrop-blur-md">
      {/* Scaffold Badge */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/40 bg-[#002C6C]/50 px-4 py-1 text-xs font-mono text-[#00E5FF]">
        <Layers className="h-3.5 w-3.5" />
        <span>[COMPONENT: LoadingView.tsx - PLACEHOLDER]</span>
      </div>

      {/* Animated Radar Placeholder */}
      <div className="relative mb-6 flex h-32 w-32 items-center justify-center rounded-full border border-[#00E5FF]/40 bg-[#002C6C]/40">
        <Loader2 className="h-12 w-12 animate-spin text-[#00E5FF]" />
        <div className="absolute inset-0 animate-ping rounded-full bg-[#00E5FF]/10" />
      </div>

      <h3 className="mb-2 font-mono text-xs uppercase tracking-widest text-[#00E5FF]">
        PROSES IDENTIFIKASI DNA PRODI
      </h3>
      <p className="max-w-xs text-sm text-white/80">
        Menghitung bobot vektor jawaban dan menyelaraskan dengan 5 prodi baru ITS...
      </p>
    </div>
  );
}
