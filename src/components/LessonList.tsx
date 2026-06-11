import { t, url, type Locale } from '@/i18n/ui';
import { isLessonDone } from '@/lib/progress';
import { useProgress } from '@/lib/useProgress';

export interface LessonItem {
  slug: string;
  title: string;
  minutes: number;
  status: 'ready' | 'outline';
}

export default function LessonList({ locale, moduleId, lessons }: { locale: Locale; moduleId: string; lessons: LessonItem[] }) {
  const progress = useProgress();
  return (
    <ol className="space-y-2">
      {lessons.map((l, i) => {
        const done = isLessonDone(progress, `${moduleId}/${l.slug}`);
        return (
          <li key={l.slug}>
            <a
              href={url(locale, moduleId, l.slug)}
              className="flex items-center justify-between rounded border border-zinc-300 px-4 py-3 hover:border-blue-500 dark:border-zinc-700"
            >
              <span className={done ? 'text-zinc-400 line-through' : ''}>
                {i + 1}. {l.title} {done && '✓'}
              </span>
              <span className="text-xs text-zinc-500">
                {l.status === 'outline' && `${t(locale, 'module.outline')} · `}{l.minutes} {t(locale, 'lesson.minutes')}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}
