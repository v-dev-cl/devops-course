import { useState } from 'react';
import type { QuizQuestion } from '@/data/questions/types';
import { t, type Locale } from '@/i18n/ui';
import { isAnswerCorrect } from '@/lib/scoring';
import { completeLesson } from '@/lib/progress';

interface Props {
  questions: QuizQuestion[];
  locale: Locale;
  /** When set, finishing the quiz marks this lesson complete with the score. */
  lessonId?: string;
  title?: string;
}

export default function Quiz({ questions, locale, lessonId, title }: Props) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string[]>([]);
  const [checked, setChecked] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = questions[index];
  if (!q) return null;

  const multi = q.correct.length > 1;
  const wasCorrect = checked && isAnswerCorrect(q, selected);

  function toggle(optionId: string) {
    if (checked) return;
    setSelected((prev) =>
      multi
        ? prev.includes(optionId) ? prev.filter((o) => o !== optionId) : [...prev, optionId]
        : [optionId],
    );
  }

  function check() {
    if (selected.length === 0) return;
    setChecked(true);
    if (isAnswerCorrect(q, selected)) setCorrectCount((c) => c + 1);
  }

  function next() {
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected([]);
      setChecked(false);
    } else {
      setFinished(true);
      if (lessonId) completeLesson(lessonId, correctCount / questions.length);
    }
  }

  function retry() {
    setIndex(0); setSelected([]); setChecked(false); setCorrectCount(0); setFinished(false);
  }

  if (finished) {
    return (
      <section className="my-8 rounded-lg border border-zinc-300 p-4 dark:border-zinc-700">
        <p className="font-semibold">
          {t(locale, 'quiz.score')}: {correctCount}/{questions.length}
        </p>
        <button onClick={retry} className="mt-2 rounded bg-zinc-200 px-3 py-1 text-sm dark:bg-zinc-800">
          {t(locale, 'quiz.retry')}
        </button>
      </section>
    );
  }

  return (
    <section className="my-8 rounded-lg border border-zinc-300 p-4 dark:border-zinc-700">
      <h3 className="mb-1 font-semibold">{title ?? t(locale, 'quiz.title')}</h3>
      <p className="mb-2 text-sm text-zinc-500">{index + 1} / {questions.length}</p>
      <p className="mb-3">{q.text[locale]}</p>
      <ul className="space-y-2">
        {q.options.map((o) => (
          <li key={o.id}>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type={multi ? 'checkbox' : 'radio'}
                name={q.id}
                checked={selected.includes(o.id)}
                onChange={() => toggle(o.id)}
                disabled={checked}
              />
              <span>{o.text[locale]}</span>
            </label>
          </li>
        ))}
      </ul>
      {checked && (
        <div className={`mt-3 rounded p-3 text-sm ${wasCorrect ? 'bg-green-100 dark:bg-green-950' : 'bg-red-100 dark:bg-red-950'}`}>
          <p className="font-semibold">{t(locale, wasCorrect ? 'quiz.correct' : 'quiz.incorrect')}</p>
          <p>{q.explanation[locale]}</p>
        </div>
      )}
      <div className="mt-4">
        {!checked ? (
          <button onClick={check} className="rounded bg-blue-600 px-3 py-1 text-sm text-white">
            {t(locale, 'quiz.check')}
          </button>
        ) : (
          <button onClick={next} className="rounded bg-blue-600 px-3 py-1 text-sm text-white">
            {index + 1 < questions.length ? t(locale, 'quiz.nextQuestion') : t(locale, 'quiz.finish')}
          </button>
        )}
      </div>
    </section>
  );
}
