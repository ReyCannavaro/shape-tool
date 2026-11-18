'use client';

import React, { useRef } from 'react';
import { Layers, RotateCcw, Download, BookOpen, Award } from 'lucide-react';
import type { QuizResult } from '@/types/quiz';
import StoryCard from '@/components/StoryCard';
import { useCardExporter } from '@/hooks/useCardExporter';

export interface ResultViewProps {
  result: QuizResult;
  onRestart: () => void;
  onVictoryMount?: () => void;
}

/**
 * Placeholder component for Result / Match Showcase View.
 * Ready for celebratory confetti, detailed analytics breakdown, and thermal receipt integration.
 */
export default function ResultView({ result, onRestart }: ResultViewProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { isExporting, exportSuccess, downloadStoryCard } = useCardExporter(
    cardRef,
    result.topProgram.name
  );

  const { topProgram, matchPercentage } = result;

  return (
    <div className="flex flex-col items-center w-full p-6 rounded-3xl border border-white/10 bg-[#001F4D]/60 backdrop-blur-md">
      {/* Scaffold Badge */}
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00E5FF]/40 bg-[#002C6C]/50 px-4 py-1 text-xs font-mono text-[#00E5FF]">
        <Layers className="h-3.5 w-3.5" />
        <span>[COMPONENT: ResultView.tsx - PLACEHOLDER]</span>
      </div>

      {/* Program Summary Card Wireframe */}
      <div className="w-full mb-6 rounded-2xl border border-[#00E5FF]/30 bg-gradient-to-b from-[#002C6C]/60 to-[#001F4D]/80 p-5 text-center">
        <div className="mb-2 inline-flex items-center gap-1.5 rounded-full bg-[#FFB800]/20 px-3 py-0.5 text-xs font-semibold text-[#FFB800]">
          <Award className="h-3.5 w-3.5" />
          <span>{topProgram.faculty}</span>
        </div>

        <h2 className="text-2xl font-black text-white sm:text-3xl">
          {topProgram.name}
        </h2>
        <p className="mt-1 text-xs italic text-[#FFB800]">
          &ldquo;{topProgram.tagline}&rdquo;
        </p>

        {/* Match Percentage Pill */}
        <div className="my-4 inline-block rounded-xl border border-[#00E5FF] bg-[#001433] px-4 py-2">
          <span className="font-mono text-2xl font-extrabold text-[#00E5FF]">
            {matchPercentage}%
          </span>
          <span className="ml-2 text-xs font-medium text-white/70">Tingkat Kecocokan</span>
        </div>

        <p className="text-xs sm:text-sm text-white/80 leading-relaxed text-left">
          {topProgram.description}
        </p>

        {/* Magazine Reference */}
        <div className="mt-4 flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs">
          <span className="flex items-center gap-1.5 text-white/70">
            <BookOpen className="h-4 w-4 text-[#FFB800]" />
            Baca ulasan lengkap di:
          </span>
          <span className="font-mono font-bold text-[#FFB800]">
            {topProgram.magazinePage}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-3 w-full">
        <button
          onClick={downloadStoryCard}
          disabled={isExporting}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#00E5FF] py-3 px-4 text-xs sm:text-sm font-bold text-[#001433] transition-transform hover:scale-105 active:scale-95 disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          <span>{isExporting ? 'Mengekspor...' : exportSuccess ? 'Tersimpan!' : 'Unduh Story'}</span>
        </button>

        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 py-3 px-4 text-xs sm:text-sm font-bold text-white transition-colors hover:bg-white/10"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Ulangi Kuis</span>
        </button>
      </div>

      {/* Hidden Offscreen Canvas for Export */}
      <div className="fixed -left-[9999px] top-0 pointer-events-none">
        <div ref={cardRef}>
          <StoryCard result={result} />
        </div>
      </div>
    </div>
  );
}
