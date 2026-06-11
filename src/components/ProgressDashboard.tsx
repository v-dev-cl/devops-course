import { useRef, type ChangeEvent } from 'react';
import { curriculum, allLessonIds } from '@/data/curriculum';
import { t, url, type Locale } from '@/i18n/ui';
import { exportProgress, importProgress, isLessonDone, isModulePassedByAssessment, moduleStats } from '@/lib/progress';
import { useProgress } from '@/lib/useProgress';

export default function ProgressDashboard({ locale }: { locale: Locale }) {
  const progress = useProgress();
  const fileRef = useRef<HTMLInputElement>(null);

  // Resume: first lesson (curriculum order) not done and not in an assessment-passed module.
  const resumeId = allLessonIds.find((id) => {
    const moduleId = id.split('/')[0] ?? '';
    return !isLessonDone(progress, id) && !isModulePassedByAssessment(progress, moduleId);
  });

  function download() {
    const blob = new Blob([exportProgress()], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'devops-course-progress.json';
    a.click();
    URL.revokeObjectURL(a.href);
  }

  async function upload(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    try {
      importProgress(await file.text());
    } catch {
      alert('Invalid progress file');
    }
    e.target.value = '';
  }

  return (
    <div className="my-8">
      {resumeId && (
        <a
          href={url(locale, ...resumeId.split('/'))}
          className="mb-6 inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          {t(locale, 'progress.resume')} →
        </a>
      )}
      <div className="grid gap-4 sm:grid-cols-2">
        {curriculum.map((m, i) => {
          const s = moduleStats(progress, m);
          return (
            <a
              key={m.id}
              href={url(locale, m.id)}
              className="rounded-lg border border-zinc-300 p-4 hover:border-blue-500 dark:border-zinc-700"
            >
              <p className="text-xs text-zinc-500">{t(locale, 'module.label')} {i + 1}</p>
              <h3 className="font-semibold">{m.title[locale]}</h3>
              <p className="mb-2 text-sm text-zinc-500">{m.description[locale]}</p>
              <div className="h-2 rounded bg-zinc-200 dark:bg-zinc-800">
                <div className="h-2 rounded bg-green-600" style={{ width: `${s.pct}%` }} />
              </div>
              <p className="mt-1 text-xs text-zinc-500">
                {s.viaAssessment
                  ? t(locale, 'assessment.passed')
                  : `${s.done}/${s.total} ${t(locale, 'progress.lessonsDone')}`}
              </p>
            </a>
          );
        })}
      </div>
      <div className="mt-6 flex gap-3 text-sm">
        <button onClick={download} className="underline">{t(locale, 'progress.export')}</button>
        <button onClick={() => fileRef.current?.click()} className="underline">{t(locale, 'progress.import')}</button>
        <input ref={fileRef} type="file" accept="application/json" onChange={upload} hidden />
      </div>
    </div>
  );
}
