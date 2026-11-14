'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, Download, BookOpen, CheckCircle2 } from 'lucide-react';
import type { QuizResult } from '@/types/quiz';
import { useConfettiCannon } from '@/hooks/useConfettiCannon';
import { useCardExporter } from '@/hooks/useCardExporter';
import StoryCard from '@/components/StoryCard';

interface ResultViewProps {
  result: QuizResult;
  onRestart: () => void;
  onVictoryMount?: () => void;
}

export default function ResultView({ result, onRestart, onVictoryMount }: ResultViewProps) {
  const { fireCelebration } = useConfettiCannon();
  const cardRef = useRef<HTMLDivElement>(null);
  const { isExporting, exportSuccess, downloadStoryCard } = useCardExporter(
    cardRef,
    result.topProgram.name
  );

  useEffect(() => {
    fireCelebration();
    if (onVictoryMount) onVictoryMount();
  }, [fireCelebration, onVictoryMount]);

  const { topProgram, matchPercentage } = result;

  return (
    <div className="flex flex-col items-center w-full">
      {/* Top Banner Tag */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-[#FFB800]/40 bg-[#FFB800]/10 px-4 py-1 text-xs font-semibold text-[#FFB800]"
      >
        <CheckCircle2 className="h-4 w-4" />
        HASIL DIAGNOSIS RESMI ITS EXPO 2026
      </motion.div>

      {/* Main Study Program Card */}
      <div className="relative mb-6 w-full overflow-hidden rounded-3xl border border-[#00E5FF]/30 bg-gradient-to-b from-[#002C6C]/80 to-[#001F4D]/90 p-6 backdrop-blur-xl shadow-2xl">
        <div className="flex items-start justify-between">
          <div>
            <span className="font-mono text-xs uppercase tracking-wider text-[#00E5FF]">
              {topProgram.faculty}
            </span>
            <h2 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
              {topProgram.name}
            </h2>
            <p className="mt-1 text-sm font-semibold italic text-[#FFB800]">
              &ldquo;{topProgram.tagline}&rdquo;
            </p>
          </div>

          <div className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-3">
            <span className="font-mono text-2xl font-black text-[#00E5FF]">
              {matchPercentage}%
            </span>
            <span className="text-[10px] font-medium uppercase text-white/60">
              Kecocokan
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-white/80">
          {topProgram.description}
        </p>

        {/* Magazine Reference Ribbon */}
        <div className="mt-5 flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-2.5">
          <div className="flex items-center gap-2 text-xs font-medium text-white/70">
            <BookOpen className="h-4 w-4 text-[#FFB800]" />
            <span>Baca Ulasan Lengkap di Majalah</span>
          </div>
          <span className="rounded-lg bg-[#FFB800] px-2 py-0.5 font-mono text-xs font-bold text-[#001433]">
            {topProgram.magazinePage}
          </span>
        </div>
      </div>

      {/* Action Buttons Grid */}
      <div className="grid grid-cols-2 gap-3 w-full mb-6">
        <button
          onClick={downloadStoryCard}
          disabled={isExporting}
          className="flex items-center justify-center gap-2 rounded-2xl bg-[#00E5FF] py-3.5 px-4 text-sm font-bold text-[#001433] shadow-[0_0_20px_rgba(0,229,255,0.2)] transition-all hover:brightness-110 active:scale-95 disabled:opacity-50"
        >
          <Download className="h-4 w-4" />
          <span>{isExporting ? 'Mengekspor...' : exportSuccess ? 'Tersimpan!' : 'Unduh Story'}</span>
        </button>

        <button
          onClick={onRestart}
          className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-3.5 px-4 text-sm font-bold text-white transition-all hover:bg-white/10 active:scale-95"
        >
          <RotateCcw className="h-4 w-4" />
          <span>Ulangi Kuis</span>
        </button>
      </div>

      {/* Hidden Offscreen Canvas for High-DPI Image Rendering */}
      <div className="fixed -left-[9999px] top-0 pointer-events-none">
        <div ref={cardRef}>
          <StoryCard result={result} />
        </div>
      </div>
    </div>
  );
}
