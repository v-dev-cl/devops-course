import { useState, type SubmitEvent } from 'react';
import { t, type Locale } from '@/i18n/ui';
import { matchCommand, type CommandMatcher } from '@/lib/matchers';

interface Props {
  locale: Locale;
  /** The task statement, already in the right language (authored in the MDX). */
  task: string;
  accept: CommandMatcher[];
  hints?: string[];
  solution: string;
}

export default function TerminalExercise({ locale, task, accept, hints = [], solution }: Props) {
  const [value, setValue] = useState('');
  const [attempts, setAttempts] = useState<{ cmd: string; ok: boolean }[]>([]);
  const [hintsShown, setHintsShown] = useState(0);
  const [solutionShown, setSolutionShown] = useState(false);
  const solved = attempts.some((a) => a.ok);

  function submit(e: SubmitEvent) {
    e.preventDefault();
    if (!value.trim() || solved) return;
    setAttempts((prev) => [...prev, { cmd: value, ok: matchCommand(value, accept) }]);
    setValue('');
  }

  return (
    <section className="my-6 overflow-hidden rounded-lg border border-zinc-700 bg-zinc-900 font-mono text-sm text-zinc-100">
      <p className="border-b border-zinc-700 bg-zinc-800 px-3 py-2 font-sans">{task}</p>
      <div className="px-3 py-2">
        {attempts.map((a, i) => (
          <div key={i}>
            <p><span className="text-green-400">$</span> {a.cmd}</p>
            <p className={a.ok ? 'text-green-400' : 'text-red-400'}>
              {t(locale, a.ok ? 'terminal.correct' : 'terminal.incorrect')}
            </p>
          </div>
        ))}
        {!solved && (
          <form onSubmit={submit} className="flex items-center gap-2">
            <span className="text-green-400">$</span>
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={t(locale, 'terminal.placeholder')}
              className="w-full bg-transparent outline-none"
              spellCheck={false}
              autoCapitalize="off"
            />
          </form>
        )}
      </div>
      {!solved && (
        <div className="flex gap-3 border-t border-zinc-700 px-3 py-2 font-sans text-xs">
          {hintsShown < hints.length && (
            <button onClick={() => setHintsShown(hintsShown + 1)} className="underline">
              {t(locale, 'terminal.hint')} ({hintsShown + 1}/{hints.length})
            </button>
          )}
          {!solutionShown && (
            <button onClick={() => setSolutionShown(true)} className="underline">
              {t(locale, 'terminal.solution')}
            </button>
          )}
        </div>
      )}
      {(hintsShown > 0 || solutionShown) && !solved && (
        <div className="border-t border-zinc-700 px-3 py-2 font-sans text-xs text-zinc-300">
          {hints.slice(0, hintsShown).map((h, i) => <p key={i}>💡 {h}</p>)}
          {solutionShown && <p className="font-mono text-zinc-100">$ {solution}</p>}
        </div>
      )}
    </section>
  );
}
