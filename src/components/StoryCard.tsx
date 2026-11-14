'use client';

import React from 'react';
import type { QuizResult } from '@/types/quiz';
import { Sparkles, Award } from 'lucide-react';

interface StoryCardProps {
  result: QuizResult;
}

export default function StoryCard({ result }: StoryCardProps) {
  const { topProgram, matchPercentage } = result;

  return (
    <div
      style={{ width: '540px', height: '960px' }}
      className="relative flex flex-col justify-between overflow-hidden bg-[#001433] p-10 text-white shadow-2xl"
    >
      {/* Decorative Brand Background Vectors */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[#002C6C] blur-3xl opacity-70" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[#00E5FF] blur-3xl opacity-20" />
      <div className="absolute top-1/3 left-10 h-72 w-72 rounded-full bg-[#FFB800] blur-3xl opacity-10" />

      {/* Top Header Section */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-6">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00E5FF]/20 text-[#00E5FF]">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-mono text-xs font-bold tracking-widest text-[#00E5FF]">
              SHAPETOOL MAGAZINE
            </h4>
            <p className="text-xs text-white/60">ITS Open Campus & Expo 2026</p>
          </div>
        </div>
        <span className="rounded-full bg-[#FFB800] px-3 py-1 font-mono text-xs font-bold text-[#001433]">
          OFFICIAL DNA
        </span>
      </div>

      {/* Core Result Body */}
      <div className="relative z-10 flex flex-col items-center text-center my-auto">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold text-[#00E5FF]">
          <Award className="h-4 w-4" />
          {topProgram.faculty}
        </div>

        <h1 className="mb-3 text-4xl font-black tracking-tight text-white leading-tight">
          {topProgram.name}
        </h1>

        <p className="mb-8 font-serif text-lg italic text-[#FFB800]">
          &ldquo;{topProgram.tagline}&rdquo;
        </p>

        {/* Circular Percentage Meter */}
        <div className="mb-8 flex h-36 w-36 flex-col items-center justify-center rounded-full border-4 border-[#00E5FF] bg-[#002C6C]/60 shadow-[0_0_30px_rgba(0,229,255,0.4)]">
          <span className="font-mono text-4xl font-extrabold text-white">
            {matchPercentage}%
          </span>
          <span className="text-xs font-semibold uppercase tracking-wider text-[#00E5FF]">
            Kecocokan
          </span>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-white/80">
          {topProgram.description}
        </p>
      </div>

      {/* Bottom Footer Section */}
      <div className="relative z-10 border-t border-white/10 pt-6">
        <div className="flex items-center justify-between text-xs text-white/60">
          <div>
            <p className="font-bold text-white">Temukan Masa Depanmu di ITS</p>
            <p className="font-mono text-[11px] text-[#00E5FF]">
              Baca ulasan lengkap: {topProgram.magazinePage}
            </p>
          </div>
          <div className="text-right font-mono text-[10px] text-white/40">
            <p>INSTITUT TEKNOLOGI</p>
            <p>SEPULUH NOPEMBER</p>
          </div>
        </div>
      </div>
    </div>
  );
}
