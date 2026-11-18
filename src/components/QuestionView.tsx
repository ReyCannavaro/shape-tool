'use client';

import React from 'react';
import { ChevronLeft, Layers, HelpCircle } from 'lucide-react';
import type { Question, OptionKey } from '@/types/quiz';
import { useKeyboardShortcuts } from '@/hooks/useKeyboardShortcuts';

export interface QuestionViewProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  selectedKey?: OptionKey;
  onSelectOption: (key: OptionKey) => void;
  onBack: () => void;
  isFirstQuestion: boolean;
}

/**
 * Placeholder component for Interactive Question View.
 * Ready for detailed styling, micro-animations, and keyboard ergonomics.
 */
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

  const progressPercent = Math.round(((currentIndex + 1) / totalQuestions) * 100);

  return (
    <div className="flex flex-col w-full p-6 rounded-3xl border border-white/10 bg-[#001F4D]/60 backdrop-blur-md">
      {/* Scaffold Badge */}
      <div className="mb-4 inline-flex items-center justify-between w-full">
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#00E5FF]">
          <Layers className="h-3.5 w-3.5" />
          [COMPONENT: QuestionView.tsx - PLACEHOLDER]
        </span>
        <span className="font-mono text-xs text-[#FFB800]">
          SOAL {currentIndex + 1} / {totalQuestions} ({progressPercent}%)
        </span>
      </div>

      {/* Progress Bar Wireframe */}
      <div className="mb-6 h-2 w-full overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full bg-gradient-to-r from-[#00E5FF] to-[#FFB800] transition-all duration-300"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      {/* Navigation & Header */}
      <div className="mb-4 flex items-center justify-between">
        <button
          onClick={onBack}
          disabled={isFirstQuestion}
          className={`flex items-center gap-1 rounded-lg px-3 py-1.5 text-xs font-semibold text-white/80 border border-white/10 transition-colors ${
            isFirstQuestion ? 'opacity-30 cursor-not-allowed' : 'hover:bg-white/10'
          }`}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Sebelumnya</span>
        </button>
        <span className="text-xs text-white/50">Gunakan tombol atau tekan [A - E]</span>
      </div>

      {/* Question Card Placeholder */}
      <div className="mb-6 rounded-2xl border border-[#00E5FF]/20 bg-[#002C6C]/40 p-5">
        <div className="flex items-center gap-2 mb-2 text-[#00E5FF]">
          <HelpCircle className="h-4 w-4" />
          <span className="font-mono text-xs font-bold uppercase">Skenario #{currentIndex + 1}</span>
        </div>
        <h2 className="text-base font-bold text-white sm:text-lg">
          {question.scenario}
        </h2>
      </div>

      {/* 5 Options Placeholder List */}
      <div className="flex flex-col gap-2.5">
        {question.options.map((option) => {
          const isSelected = selectedKey === option.key;
          return (
            <button
              key={option.key}
              onClick={() => onSelectOption(option.key)}
              className={`flex items-start gap-3 rounded-xl border p-3.5 text-left transition-all ${
                isSelected
                  ? 'border-[#00E5FF] bg-[#002C6C] text-white shadow-md'
                  : 'border-white/10 bg-white/5 text-white/90 hover:border-white/30 hover:bg-white/10'
              }`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg font-mono text-xs font-bold ${
                  isSelected ? 'bg-[#00E5FF] text-[#001433]' : 'bg-white/10 text-white'
                }`}
              >
                {option.key}
              </span>
              <span className="text-xs sm:text-sm leading-relaxed">{option.text}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
