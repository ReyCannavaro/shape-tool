import { useState, useCallback, useMemo } from 'react';
import type { QuizState, Question, AnswerRecord, QuizResult, OptionKey } from '@/types/quiz';
import { QUESTIONS } from '@/data/quiz-data';
import { computeQuizResult } from '@/lib/scoring-engine';

export interface UseQuizEngineReturn {
  state: QuizState;
  currentQuestionIndex: number;
  currentQuestion: Question;
  totalQuestions: number;
  answers: AnswerRecord;
  result: QuizResult | null;
  startQuiz: () => void;
  selectOption: (key: OptionKey) => void;
  previousQuestion: () => void;
  restartQuiz: () => void;
  isFirstQuestion: boolean;
  isLastQuestion: boolean;
}

export function useQuizEngine(): UseQuizEngineReturn {
  const [state, setState] = useState<QuizState>('LANDING');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [answers, setAnswers] = useState<AnswerRecord>({});
  const [result, setResult] = useState<QuizResult | null>(null);

  const totalQuestions = QUESTIONS.length;
  const currentQuestion = useMemo(
    () => QUESTIONS[currentQuestionIndex] || QUESTIONS[0],
    [currentQuestionIndex]
  );

  const startQuiz = useCallback(() => {
    setAnswers({});
    setCurrentQuestionIndex(0);
    setResult(null);
    setState('QUESTION');
  }, []);

  const selectOption = useCallback(
    (key: OptionKey) => {
      const currentQId = QUESTIONS[currentQuestionIndex]?.id;
      if (!currentQId) return;

      const nextAnswers: AnswerRecord = {
        ...answers,
        [currentQId]: key,
      };
      setAnswers(nextAnswers);

      if (currentQuestionIndex < totalQuestions - 1) {
        setCurrentQuestionIndex((prev) => prev + 1);
      } else {
        setState('LOADING');
        const computedResult = computeQuizResult(nextAnswers);
        setResult(computedResult);

        setTimeout(() => {
          setState('RESULT');
        }, 2200);
      }
    },
    [currentQuestionIndex, totalQuestions, answers]
  );

  const previousQuestion = useCallback(() => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  }, [currentQuestionIndex]);

  const restartQuiz = useCallback(() => {
    setState('LANDING');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setResult(null);
  }, []);

  return {
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
    isFirstQuestion: currentQuestionIndex === 0,
    isLastQuestion: currentQuestionIndex === totalQuestions - 1,
  };
}
