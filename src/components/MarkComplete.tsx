import { t, type Locale } from '@/i18n/ui';
import { completeLesson, isLessonDone } from '@/lib/progress';
import { useProgress } from '@/lib/useProgress';

export default function MarkComplete({ lessonId, locale }: { lessonId: string; locale: Locale }) {
  const progress = useProgress();
  const done = isLessonDone(progress, lessonId);
  if (done) return <p className="my-6 text-sm font-semibold text-green-700 dark:text-green-400">✓ {t(locale, 'lesson.completed')}</p>;
  return (
    <button
      onClick={() => completeLesson(lessonId)}
      className="my-6 rounded bg-green-600 px-3 py-1 text-sm text-white"
    >
      {t(locale, 'lesson.markComplete')}
    </button>
  );
}
