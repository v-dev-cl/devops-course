import { useState } from 'react';
import { assessmentQuestions } from '@/data/questions/assessment';
import { curriculum, getModule } from '@/data/curriculum';
import { t, url, type Locale } from '@/i18n/ui';
import { passedModules, recommendedStart, scoreByTopic } from '@/lib/scoring';
import { setAssessment } from '@/lib/progress';
import { useProgress } from '@/lib/useProgress';

export default function Assessment({ locale }: { locale: Locale }) {
  const progress = useProgress();
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const [selected, setSelected] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const existing = progress.assessment;
  const q = assessmentQuestions[index];

  function answer() {
    if (selected.length === 0 || !q) return;
    const nextAnswers = { ...answers, [q.id]: selected };
    setAnswers(nextAnswers);
    setSelected([]);
    if (index + 1 < assessmentQuestions.length) {
      setIndex(index + 1);
    } else {
      setAssessment(scoreByTopic(assessmentQuestions, nextAnswers));
      setDone(true);
    }
  }

  if (!started && !done) {
    return (
      <div>
        <p className="mb-4">{t(locale, 'assessment.intro')}</p>
        {existing && <Results locale={locale} scores={existing.topicScores} />}
        <button onClick={() => setStarted(true)} className="rounded bg-blue-600 px-4 py-2 text-white">
          {existing ? t(locale, 'assessment.retake') : t(locale, 'assessment.start')}
        </button>
      </div>
    );
  }

  if (done && progress.assessment) {
    return <Results locale={locale} scores={progress.assessment.topicScores} />;
  }

  if (!q) return null;

  const multi = q.correct.length > 1;
  return (
    <div>
      <p className="mb-2 text-sm text-zinc-500">{index + 1} / {assessmentQuestions.length}</p>
      <p className="mb-3 font-medium">{q.text[locale]}</p>
      <ul className="space-y-2">
        {q.options.map((o) => (
          <li key={o.id}>
            <label className="flex cursor-pointer items-start gap-2">
              <input
                type={multi ? 'checkbox' : 'radio'}
                name={q.id}
                checked={selected.includes(o.id)}
                onChange={() =>
                  setSelected((prev) =>
                    multi
                      ? prev.includes(o.id) ? prev.filter((x) => x !== o.id) : [...prev, o.id]
                      : [o.id],
                  )
                }
              />
              <span>{o.text[locale]}</span>
            </label>
          </li>
        ))}
      </ul>
      <button onClick={answer} className="mt-4 rounded bg-blue-600 px-3 py-1 text-sm text-white">
        {index + 1 < assessmentQuestions.length ? t(locale, 'quiz.nextQuestion') : t(locale, 'quiz.finish')}
      </button>
    </div>
  );
}

function Results({ locale, scores }: { locale: Locale; scores: Record<string, number> }) {
  const passed = passedModules(scores);
  const start = recommendedStart(passed);
  const startMod = getModule(start)!;
  return (
    <div className="mb-6">
      <h2 className="mb-3 font-semibold">{t(locale, 'assessment.results')}</h2>
      <ul className="space-y-1">
        {curriculum.map((m) => {
          const score = scores[m.id] ?? 0;
          const ok = passed.includes(m.id);
          return (
            <li key={m.id} className="flex items-center justify-between gap-4 text-sm">
              <span>{m.title[locale]}</span>
              <span className={ok ? 'text-green-600' : 'text-zinc-500'}>
                {Math.round(score * 100)}% {ok && `· ${t(locale, 'assessment.passed')}`}
              </span>
            </li>
          );
        })}
      </ul>
      <p className="mt-4">
        {t(locale, 'assessment.recommended')}{' '}
        <a href={url(locale, start)} className="font-semibold underline">{startMod.title[locale]}</a>
      </p>
    </div>
  );
}
