import type { QuizQuestion } from '../types';
import type { ModuleId } from '@/data/curriculum';
import { questions as m02 } from './02-linux-redes';
import { questions as m06 } from './06-terraform';
import { questions as m07 } from './07-observabilidad';
import { questions as m08 } from './08-cloud-aws';

/** Module-level quizzes for outline modules (02, 06, 07, 08). */
export const moduleQuizzes: Partial<Record<ModuleId, QuizQuestion[]>> = {
  '02-linux-redes': m02,
  '06-terraform': m06,
  '07-observabilidad': m07,
  '08-cloud-aws': m08,
};
