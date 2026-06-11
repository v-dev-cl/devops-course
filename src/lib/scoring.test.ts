import { describe, expect, it } from 'vitest';
import { isAnswerCorrect, scoreByTopic, passedModules, recommendedStart } from './scoring';
import type { QuizQuestion } from '@/data/questions/types';

const q = (id: string, topic: QuizQuestion['topic'], correct: string[]): QuizQuestion => ({
  id,
  topic,
  text: { es: id, en: id },
  options: ['a', 'b', 'c'].map((o) => ({ id: o, text: { es: o, en: o } })),
  correct,
  explanation: { es: '', en: '' },
});

describe('isAnswerCorrect', () => {
  it('single-select requires the exact option', () => {
    expect(isAnswerCorrect(q('q1', '03-docker', ['b']), ['b'])).toBe(true);
    expect(isAnswerCorrect(q('q1', '03-docker', ['b']), ['a'])).toBe(false);
  });
  it('multi-select requires the exact set, order-insensitive', () => {
    expect(isAnswerCorrect(q('q1', '03-docker', ['a', 'c']), ['c', 'a'])).toBe(true);
    expect(isAnswerCorrect(q('q1', '03-docker', ['a', 'c']), ['a'])).toBe(false);
    expect(isAnswerCorrect(q('q1', '03-docker', ['a', 'c']), ['a', 'b', 'c'])).toBe(false);
  });
});

describe('scoreByTopic / passedModules / recommendedStart', () => {
  const questions = [
    q('d1', '03-docker', ['a']),
    q('d2', '03-docker', ['b']),
    q('f1', '01-fundamentos', ['a']),
  ];
  it('scores each topic independently', () => {
    const scores = scoreByTopic(questions, { d1: ['a'], d2: ['a'], f1: ['a'] });
    expect(scores['03-docker']).toBe(0.5);
    expect(scores['01-fundamentos']).toBe(1);
  });
  it('treats unanswered questions as wrong', () => {
    expect(scoreByTopic(questions, {})['03-docker']).toBe(0);
  });
  it('passedModules applies the 0.8 threshold', () => {
    expect(passedModules({ '03-docker': 0.5, '01-fundamentos': 1 })).toEqual(['01-fundamentos']);
  });
  it('recommendedStart is the first curriculum module not passed', () => {
    expect(recommendedStart(['01-fundamentos'])).toBe('02-linux-redes');
    expect(recommendedStart([])).toBe('01-fundamentos');
  });
});
