'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';
import type { Question, OptionKey } from '@/types/quiz';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

interface QuestionViewProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedKey?: OptionKey;
  onSelectOption: (key: OptionKey) => void;
  onBack: () => void;
  isFirstQuestion: boolean;
}

export default function QuestionView({
  question,
  currentIndex,
  totalQuestions,
  selectedKey,
  onSelectOption,
  onBack,
  isFirstQuestion,
}: QuestionViewProps) {
  useKeyboardShortcuts(true, onSelectOption, onBack);

  const progressPercentage = ((currentIndex + 1) / totalQuestions) * 100;

  return (
    <div className="flex flex-col w-full">
      {/* Top Header: Navigation & Progress */}
      <div className="mb-6 flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={isFirstQuestion}
          className={`flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#001F4D]/60 text-white transition-all ${
            isFirstQuestion ? 'opacity-30 cursor-not-allowed' : 'hover:bg-[#002C6C] active:scale-95'
          }`}
          aria-label="Kembali ke soal sebelumnya"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex flex-col items-end">
          <span className="font-mono text-xs text-[#00E5FF]">
            PERTANYAAN {currentIndex + 1} DARI {totalQuestions}
          </span>
          <span className="text-[11px] text-white/50">ITS DNA Diagnostic Engine</span>
        </div>
      </div>

      {/* Animated Visual Progress Bar */}
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full bg-gradient-to-r from-[#00E5FF] to-[#FFB800]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercentage}%` }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        />
      </div>

      {/* Question Narrative Card */}
      <div className="mb-6 rounded-2xl border border-white/10 bg-[#001F4D]/70 p-5 backdrop-blur-md">
        <span className="mb-2 inline-block rounded-md bg-[#00E5FF]/20 px-2 py-0.5 font-mono text-[10px] font-bold text-[#00E5FF]">
          SKENARIO STUDI KASUS #{currentIndex + 1}
        </span>
        <h2 className="text-lg font-bold leading-snug text-white sm:text-xl">
          {question.scenario}
        </h2>
      </div>

      {/* 5 Option Cards Stack */}
      <div className="flex flex-col gap-3">
        {question.options.map((option, idx) => {
          const isSelected = selectedKey === option.key;

          return (
            <motion.button
              key={option.key}
              onClick={() => onSelectOption(option.key)}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              whileTap={{ scale: 0.98 }}
              className={`group flex min-h-[56px] w-full items-center gap-3.5 rounded-2xl border p-4 text-left transition-all duration-200 ${
                isSelected
                  ? 'border-[#00E5FF] bg-[#002C6C] shadow-[0_0_20px_rgba(0,229,255,0.25)]'
                  : 'border-white/10 bg-[#001F4D]/50 hover:border-white/30 hover:bg-[#001F4D]'
              }`}
            >
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold transition-colors ${
                  isSelected
                    ? 'bg-[#00E5FF] text-[#001433]'
                    : 'bg-white/10 text-white group-hover:bg-[#FFB800] group-hover:text-[#001433]'
                }`}
              >
                {option.key}
              </div>
              <span className="text-sm font-medium leading-relaxed text-white/90 sm:text-base">
                {option.text}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
