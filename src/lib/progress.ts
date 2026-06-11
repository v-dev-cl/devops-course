import type { ModuleDef } from '@/data/curriculum';

export const STORAGE_KEY = 'devops-course:progress:v1';
export const ASSESSMENT_THRESHOLD = 0.8;

export interface Progress {
  version: 1;
  assessment: { takenAt: string; topicScores: Record<string, number> } | null;
  lessons: Record<string, { completedAt: string; quizScore?: number }>;
  labs: Record<string, { checkedAt: string }>;
}

const EMPTY: Progress = { version: 1, assessment: null, lessons: {}, labs: {} };

const listeners = new Set<() => void>();
let snapshot: Progress | null = null;

function emit() {
  snapshot = null;
  for (const fn of listeners) fn();
}

export function subscribe(fn: () => void): () => void {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function loadProgress(): Progress {
  if (typeof localStorage === 'undefined') return structuredClone(EMPTY);
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(EMPTY);
    const parsed = JSON.parse(raw);
    if (parsed?.version !== 1) return structuredClone(EMPTY);
    return { ...structuredClone(EMPTY), ...parsed };
  } catch {
    return structuredClone(EMPTY);
  }
}

/** Stable-reference snapshot for useSyncExternalStore. */
export function getSnapshot(): Progress {
  if (!snapshot) snapshot = loadProgress();
  return snapshot;
}

export function getServerSnapshot(): Progress {
  return EMPTY;
}

function save(p: Progress) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  emit();
}

export function completeLesson(lessonId: string, quizScore?: number) {
  const p = loadProgress();
  p.lessons[lessonId] = { completedAt: new Date().toISOString(), ...(quizScore !== undefined && { quizScore }) };
  save(p);
}

export function setLabChecked(stepId: string, checked: boolean) {
  const p = loadProgress();
  if (checked) p.labs[stepId] = { checkedAt: new Date().toISOString() };
  else delete p.labs[stepId];
  save(p);
}

export function setAssessment(topicScores: Record<string, number>) {
  const p = loadProgress();
  p.assessment = { takenAt: new Date().toISOString(), topicScores };
  save(p);
}

export function isLessonDone(p: Progress, lessonId: string): boolean {
  return lessonId in p.lessons;
}

export function isModulePassedByAssessment(p: Progress, moduleId: string): boolean {
  const score = p.assessment?.topicScores[moduleId];
  return score !== undefined && score >= ASSESSMENT_THRESHOLD;
}

export interface ModuleStats { done: number; total: number; pct: number; viaAssessment: boolean }

export function moduleStats(p: Progress, mod: ModuleDef): ModuleStats {
  const total = mod.lessons.length;
  const viaAssessment = isModulePassedByAssessment(p, mod.id);
  const done = mod.lessons.filter((l) => isLessonDone(p, `${mod.id}/${l.slug}`)).length;
  const pct = viaAssessment ? 100 : Math.round((done / total) * 100);
  return { done, total, pct, viaAssessment };
}

export function exportProgress(): string {
  return JSON.stringify(loadProgress(), null, 2);
}

export function importProgress(json: string): void {
  const parsed = JSON.parse(json);
  if (typeof parsed !== 'object' || parsed === null || parsed.version !== 1) {
    throw new Error('Invalid progress file');
  }
  save({ ...structuredClone(EMPTY), ...parsed });
}
