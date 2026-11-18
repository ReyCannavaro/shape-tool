'use client';

import React from 'react';
import { useQuizEngine } from '@/hooks/useQuizEngine';
import LandingView from '@/components/LandingView';
import QuestionView from '@/components/QuestionView';
import LoadingView from '@/components/LoadingView';
import ResultView from '@/components/ResultView';
import QuizErrorBoundary from '@/components/QuizErrorBoundary';
import { GitBranch, FolderGit2 } from 'lucide-react';

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

  return (
    <QuizErrorBoundary>
      <div className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-x-hidden bg-[#001433] px-4 py-6 sm:px-6 md:py-8">
        {/* Development & Scaffold Header Ribbon */}
        <div className="w-full max-w-2xl mb-6 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-white/10 bg-[#001F4D]/80 px-4 py-2 text-xs font-mono backdrop-blur-md">
          <div className="flex items-center gap-2 text-[#00E5FF]">
            <FolderGit2 className="h-4 w-4" />
            <span>shape-tool / src/components/</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1 text-[#FFB800]">
              <GitBranch className="h-3.5 w-3.5" />
              <span>dev</span>
            </span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-white/80">
              STATE: <strong className="text-[#00E5FF]">{state}</strong>
            </span>
          </div>
        </div>

        {/* Dynamic View Placeholder Renderer */}
        <div className="flex w-full max-w-xl flex-1 flex-col justify-center">
          {state === 'LANDING' && <LandingView onStart={startQuiz} />}

          {state === 'QUESTION' && (
            <QuestionView
              question={currentQuestion}
              currentIndex={currentQuestionIndex}
              totalQuestions={totalQuestions}
              selectedKey={answers[currentQuestion.id]}
              onSelectOption={selectOption}
              onBack={previousQuestion}
              isFirstQuestion={isFirstQuestion}
            />
          )}

          {state === 'LOADING' && <LoadingView />}

          {state === 'RESULT' && result && (
            <ResultView result={result} onRestart={restartQuiz} />
          )}
        </div>

        {/* Footer */}
        <footer className="mt-8 flex flex-col items-center gap-1 text-center text-xs text-white/40 font-mono">
          <p>ITS EXPO 2026 • BOOTH SHAPETOOL MAGAZINE VOL. 12</p>
          <p className="text-[10px]">Folder Structure & Scaffolding Phase — Branch: dev</p>
        </footer>
      </div>
    </QuizErrorBoundary>
  );
}
