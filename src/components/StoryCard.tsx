'use client';

import React from 'react';
import type { QuizResult } from '@/types/quiz';
import { Sparkles, Award } from 'lucide-react';

export interface StoryCardProps {
  result: QuizResult;
}

/**
 * Placeholder component for 9:16 Instagram Story Canvas (1080x1920 / scaled 540x960).
 * Ready for visual polish and asset embedding by the creative division.
 */
export default function StoryCard({ result }: StoryCardProps) {
  const { topProgram, matchPercentage } = result;

  return (
    <div
      style={{ width: '540px', height: '960px' }}
      className="relative flex flex-col justify-between overflow-hidden bg-[#001433] p-10 text-white shadow-2xl border-4 border-[#002C6C]"
    >
      {/* Background Glows */}
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[#002C6C] blur-3xl opacity-60" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#00E5FF] blur-3xl opacity-20" />

      {/* Header Slot */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E5FF]/20 text-[#00E5FF]">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold tracking-wider text-[#00E5FF]">
              SHAPETOOL MAGAZINE VOL. 12
            </h4>
            <p className="text-[11px] text-white/60">ITS Open Campus & Expo 2026</p>
          </div>
        </div>
        <span className="rounded-full bg-[#FFB800] px-3 py-1 font-mono text-[10px] font-bold text-[#001433]">
          OFFICIAL DNA
        </span>
      </div>

      {/* Main Content Slot */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-semibold text-[#00E5FF]">
          <Award className="h-4 w-4" />
          <span>{topProgram.faculty}</span>
        </div>

        <h1 className="mb-2 text-3xl font-black text-white leading-tight">
          {topProgram.name}
        </h1>

        <p className="mb-6 font-serif text-sm italic text-[#FFB800]">
          &ldquo;{topProgram.tagline}&rdquo;
        </p>

        {/* Circular Percentage Meter Placeholder */}
        <div className="mb-6 flex h-32 w-32 flex-col items-center justify-center rounded-full border-4 border-[#00E5FF] bg-[#002C6C]/60 shadow-[0_0_20px_rgba(0,229,255,0.3)]">
          <span className="font-mono text-3xl font-extrabold text-white">
            {matchPercentage}%
          </span>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-[#00E5FF]">
            Kecocokan
          </span>
        </div>

        <p className="max-w-sm text-xs text-white/80 leading-relaxed">
          {topProgram.description}
        </p>
      </div>

      {/* Footer Slot */}
      <div className="relative z-10 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between text-xs text-white/60">
          <div>
            <p className="font-bold text-white">Institut Teknologi Sepuluh Nopember</p>
            <p className="font-mono text-[11px] text-[#00E5FF]">
              {topProgram.magazinePage}
            </p>
          </div>
          <div className="text-right font-mono text-[10px] text-white/40">
            <p>BOOTH SHAPETOOL</p>
            <p>SURABAYA, 2026</p>
          </div>
        </div>
      </div>
    </div>
  );
}
