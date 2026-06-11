import type { QuizQuestion } from '@/data/questions/types';
import { curriculum, type ModuleId } from '@/data/curriculum';
import { ASSESSMENT_THRESHOLD } from './progress';

export function isAnswerCorrect(q: QuizQuestion, selected: string[]): boolean {
  if (selected.length !== q.correct.length) return false;
  const sel = new Set(selected);
  return q.correct.every((c) => sel.has(c));
}

export function scoreByTopic(
  questions: QuizQuestion[],
  answers: Record<string, string[]>,
): Record<string, number> {
  const byTopic: Record<string, { correct: number; total: number }> = {};
  for (const q of questions) {
    byTopic[q.topic] ??= { correct: 0, total: 0 };
    byTopic[q.topic]!.total++;
    if (isAnswerCorrect(q, answers[q.id] ?? [])) byTopic[q.topic]!.correct++;
  }
  return Object.fromEntries(
    Object.entries(byTopic).map(([t, stat]) => [t, stat.correct / stat.total]),
  );
}

export function passedModules(
  topicScores: Record<string, number>,
  threshold = ASSESSMENT_THRESHOLD,
): ModuleId[] {
  return curriculum.map((m) => m.id).filter((id) => (topicScores[id] ?? 0) >= threshold);
}

export function recommendedStart(passed: string[]): ModuleId {
  const set = new Set(passed);
  const found = curriculum.find((m) => !set.has(m.id));
  return (found ?? curriculum[0] ?? curriculum.find(() => true)!).id;
}
