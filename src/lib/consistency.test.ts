import { describe, expect, it } from 'vitest';
import { existsSync } from 'node:fs';
import { join } from 'node:path';
import { curriculum, lessonId } from '@/data/curriculum';
import { LOCALES } from '@/i18n/ui';
import { lessonQuizzes } from '@/data/questions';
import { moduleQuizzes } from '@/data/questions/modules';
import { assessmentQuestions } from '@/data/questions/assessment';
import type { QuizQuestion } from '@/data/questions/types';

const CONTENT = join(process.cwd(), 'src/content/lessons');
const OUTLINE_MODULES = curriculum.filter((m) => m.lessons.every((l) => l.status === 'outline'));

function assertBilingual(q: QuizQuestion, where: string) {
  for (const locale of LOCALES) {
    expect(q.text[locale], `${where}/${q.id} text.${locale}`).toBeTruthy();
    expect(q.explanation[locale], `${where}/${q.id} explanation.${locale}`).toBeTruthy();
    for (const o of q.options) expect(o.text[locale], `${where}/${q.id} option ${o.id}.${locale}`).toBeTruthy();
  }
  expect(q.correct.length, `${where}/${q.id} correct`).toBeGreaterThan(0);
  const optionIds = new Set(q.options.map((o) => o.id));
  for (const c of q.correct) expect(optionIds.has(c), `${where}/${q.id} correct id ${c}`).toBe(true);
}

describe('curriculum consistency', () => {
  it('every lesson has an MDX file in both locales', () => {
    for (const mod of curriculum) {
      for (const lesson of mod.lessons) {
        for (const locale of LOCALES) {
          const file = join(CONTENT, locale, mod.id, `${lesson.slug}.mdx`);
          expect(existsSync(file), `missing ${file}`).toBe(true);
        }
      }
    }
  });

  it('every ready lesson has a registered quiz of >= 3 bilingual questions', () => {
    for (const mod of curriculum) {
      for (const lesson of mod.lessons.filter((l) => l.status === 'ready')) {
        const id = lessonId(mod.id, lesson.slug);
        const quiz = lessonQuizzes[id];
        expect(quiz, `missing quiz for ${id}`).toBeTruthy();
        expect(quiz.length, `quiz ${id} size`).toBeGreaterThanOrEqual(3);
        for (const q of quiz) {
          expect(q.topic).toBe(mod.id);
          assertBilingual(q, id);
        }
      }
    }
  });

  it('every outline module has a module quiz of >= 5 bilingual questions', () => {
    for (const mod of OUTLINE_MODULES) {
      const quiz = moduleQuizzes[mod.id];
      expect(quiz, `missing module quiz for ${mod.id}`).toBeTruthy();
      expect(quiz!.length).toBeGreaterThanOrEqual(5);
      for (const q of quiz!) assertBilingual(q, mod.id);
    }
  });

  it('assessment covers every module with >= 2 bilingual questions', () => {
    for (const mod of curriculum) {
      const qs = assessmentQuestions.filter((q) => q.topic === mod.id);
      expect(qs.length, `assessment coverage for ${mod.id}`).toBeGreaterThanOrEqual(2);
    }
    for (const q of assessmentQuestions) assertBilingual(q, 'assessment');
    const ids = assessmentQuestions.map((q) => q.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
