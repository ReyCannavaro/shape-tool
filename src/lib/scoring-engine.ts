import type { AnswerRecord, QuizResult, ProdiId } from '@/types/quiz';
import { QUESTIONS, STUDY_PROGRAMS } from '@/data/quiz-data';

export function computeQuizResult(answers: AnswerRecord): QuizResult {
  const scores: Record<ProdiId, number> = {
    'bisnis-digital': 0,
    'sains-komunikasi': 0,
    'analitika-logistik': 0,
    'bioteknologi': 0,
    'rekayasa-keselamatan-proses': 0,
  };

  QUESTIONS.forEach((q) => {
    const selectedKey = answers[q.id];
    if (!selectedKey) return;
    const option = q.options.find((opt) => opt.key === selectedKey);
    if (!option) return;

    Object.entries(option.scores).forEach(([prodi, val]) => {
      scores[prodi as ProdiId] += val;
    });
  });

  let topProdi: ProdiId = 'bisnis-digital';
  let maxScore = -1;
  const prodis: ProdiId[] = [
    'bisnis-digital',
    'sains-komunikasi',
    'analitika-logistik',
    'bioteknologi',
    'rekayasa-keselamatan-proses',
  ];

  prodis.forEach((p) => {
    if (scores[p] > maxScore) {
      maxScore = scores[p];
      topProdi = p;
    }
  });

  const totalPossible = Object.values(scores).reduce((a, b) => a + b, 0);
  const matchPercentage = totalPossible > 0
    ? Math.min(99, Math.max(68, Math.round((maxScore / totalPossible) * 220)))
    : 88;

  return {
    topProgram: STUDY_PROGRAMS[topProdi],
    scores,
    matchPercentage,
    calculatedAt: new Date().toISOString(),
  };
}
