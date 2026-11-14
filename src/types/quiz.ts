/**
 * ShapeTool Magazine Vol. 12 - ITS Open Campus 2026
 * Core TypeScript definitions for the "Cocoklogi DNA Prodi Baru ITS" Interactive Engine.
 */

export type ProdiId =
  | 'bisnis-digital'
  | 'sains-komunikasi'
  | 'analitika-logistik'
  | 'bioteknologi'
  | 'rekayasa-keselamatan-proses';

export type OptionKey = 'A' | 'B' | 'C' | 'D' | 'E';

export type QuizState = 'LANDING' | 'QUESTION' | 'LOADING' | 'RESULT';

export interface QuizOption {
  key: OptionKey;
  text: string;
  scores: Record<ProdiId, number>;
}

export interface Question {
  id: string;
  scenario: string;
  options: QuizOption[];
}

export interface StudyProgram {
  id: ProdiId;
  name: string;
  faculty: string;
  tagline: string;
  description: string;
  magazinePage: string;
  color: string;
  badgeToken: string;
  competencies: string[];
  careerPaths: string[];
}

export type AnswerRecord = Record<string, OptionKey>;

export interface QuizResult {
  topProgram: StudyProgram;
  scores: Record<ProdiId, number>;
  matchPercentage: number;
  calculatedAt: string;
}
