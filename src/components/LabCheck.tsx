import { t, type Locale } from '@/i18n/ui';
import { setLabChecked } from '@/lib/progress';
import { useProgress } from '@/lib/useProgress';

export default function LabCheck({ stepId, locale, label }: { stepId: string; locale: Locale; label?: string }) {
  const progress = useProgress();
  const checked = stepId in progress.labs;
  return (
    <label className="my-4 flex cursor-pointer items-center gap-2 rounded border border-dashed border-zinc-400 p-3 text-sm dark:border-zinc-600">
      <input type="checkbox" checked={checked} onChange={(e) => setLabChecked(stepId, e.target.checked)} />
      <span>{label ?? t(locale, 'lab.verified')}</span>
    </label>
  );
}
