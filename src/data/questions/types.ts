import type { Locale } from '@/i18n/ui';
import type { ModuleId } from '@/data/curriculum';

export interface QuizQuestion {
  id: string; // locale-independent, unique within its bank
  topic: ModuleId;
  text: Record<Locale, string>;
  options: { id: string; text: Record<Locale, string> }[];
  /** option ids; length 1 = single-select, >1 = multi-select */
  correct: string[];
  explanation: Record<Locale, string>;
}
