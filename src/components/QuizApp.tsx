'use client';

import React, { useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useQuizEngine } from '@/hooks/useQuizEngine';
import { useAudioEffects } from '@/hooks/useAudioEffects';
import LandingView from '@/components/LandingView';
import QuestionView from '@/components/QuestionView';
import LoadingView from '@/components/LoadingView';
import ResultView from '@/components/ResultView';
import QuizErrorBoundary from '@/components/QuizErrorBoundary';
import type { OptionKey } from '@/types/quiz';

export default function QuizApp() {
  const {
    state,
    currentQuestionIndex,
    currentQuestion,
    totalQuestions,
    answers,
    result,
    startQuiz,
    selectOption,
    previousQuestion,
    restartQuiz,
    isFirstQuestion,
  } = useQuizEngine();

  const { playClick, playSelect, playVictory } = useAudioEffects();
  const containerRef = useRef<HTMLDivElement>(null);

  const handleStart = () => {
    playClick();
    startQuiz();
  };

  const handleOptionSelect = (key: OptionKey) => {
    playSelect();
    selectOption(key);
  };

  const handleBack = () => {
    playClick();
    previousQuestion();
  };

  const handleRestart = () => {
    playClick();
    restartQuiz();
  };

  return (
    <QuizErrorBoundary>
      <div
        ref={containerRef}
        className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden bg-[#001433] px-4 py-6 sm:px-6 md:py-10"
      >
        {/* Ambient Radial Cyber Glows */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#002C6C]/40 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-10 -z-10 h-[400px] w-[400px] rounded-full bg-[#00E5FF]/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/2 left-10 -z-10 h-[350px] w-[350px] -translate-y-1/2 rounded-full bg-[#FFB800]/5 blur-[100px]" />

        {/* Main Kiosk Content Container */}
        <div className="flex w-full max-w-xl flex-1 flex-col justify-center">
          <AnimatePresence mode="wait">
            {state === 'LANDING' && (
              <motion.div
                key="landing"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.3 }}
              >
                <LandingView onStart={handleStart} />
              </motion.div>
            )}

            {state === 'QUESTION' && (
              <motion.div
                key={`question-${currentQuestion.id}`}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -24 }}
                transition={{ duration: 0.25 }}
              >
                <QuestionView
                  question={currentQuestion}
                  currentIndex={currentQuestionIndex}
                  totalQuestions={totalQuestions}
                  selectedKey={answers[currentQuestion.id]}
                  onSelectOption={handleOptionSelect}
                  onBack={handleBack}
                  isFirstQuestion={isFirstQuestion}
                />
              </motion.div>
            )}

            {state === 'LOADING' && (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.35 }}
              >
                <LoadingView />
              </motion.div>
            )}

            {state === 'RESULT' && result && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <ResultView
                  result={result}
                  onRestart={handleRestart}
                  onVictoryMount={playVictory}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Persistent Booth Branding Footer */}
        <footer className="mt-8 flex flex-col items-center gap-1 text-center text-xs text-white/50">
          <p className="font-mono tracking-wider text-[#00E5FF]">
            ITS OPEN CAMPUS 2026 • BOOTH SHAPETOOL
          </p>
          <p className="text-white/40">
            Institut Teknologi Sepuluh Nopember • Surabaya, Jawa Timur
          </p>
        </footer>
      </div>
    </QuizErrorBoundary>
  );
}
