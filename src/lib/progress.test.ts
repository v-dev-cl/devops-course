import { beforeEach, describe, expect, it } from 'vitest';
import {
  STORAGE_KEY,
  loadProgress,
  completeLesson,
  setLabChecked,
  setAssessment,
  isLessonDone,
  isModulePassedByAssessment,
  moduleStats,
  exportProgress,
  importProgress,
  getSnapshot,
  subscribe,
} from './progress';
import { curriculum } from '@/data/curriculum';

beforeEach(() => localStorage.clear());

describe('progress store', () => {
  it('returns an empty progress when nothing is stored', () => {
    const p = loadProgress();
    expect(p).toEqual({ version: 1, assessment: null, lessons: {}, labs: {} });
  });

  it('returns empty progress when stored JSON is corrupt', () => {
    localStorage.setItem(STORAGE_KEY, '{not json');
    expect(loadProgress().lessons).toEqual({});
  });

  it('completes a lesson with an optional quiz score', () => {
    completeLesson('01-fundamentos/que-es-devops', 0.75);
    const p = loadProgress();
    expect(p.lessons['01-fundamentos/que-es-devops'].quizScore).toBe(0.75);
    expect(isLessonDone(p, '01-fundamentos/que-es-devops')).toBe(true);
    expect(isLessonDone(p, '01-fundamentos/ciclo-de-vida')).toBe(false);
  });

  it('checks and unchecks lab steps', () => {
    setLabChecked('04-cicd/lab-1/step-1', true);
    expect(loadProgress().labs['04-cicd/lab-1/step-1']).toBeTruthy();
    setLabChecked('04-cicd/lab-1/step-1', false);
    expect(loadProgress().labs['04-cicd/lab-1/step-1']).toBeUndefined();
  });

  it('marks modules passed by assessment at >= 0.8', () => {
    setAssessment({ '01-fundamentos': 1, '03-docker': 0.5 });
    const p = loadProgress();
    expect(isModulePassedByAssessment(p, '01-fundamentos')).toBe(true);
    expect(isModulePassedByAssessment(p, '03-docker')).toBe(false);
    expect(isModulePassedByAssessment(p, '06-terraform')).toBe(false);
  });

  it('computes module stats counting assessment passes as full', () => {
    const m1 = curriculum[0]; // 01-fundamentos, 4 lessons
    completeLesson('01-fundamentos/que-es-devops');
    let s = moduleStats(loadProgress(), m1);
    expect(s).toEqual({ done: 1, total: 4, pct: 25, viaAssessment: false });
    setAssessment({ '01-fundamentos': 0.9 });
    s = moduleStats(loadProgress(), m1);
    expect(s.pct).toBe(100);
    expect(s.viaAssessment).toBe(true);
  });

  it('round-trips export/import and rejects garbage', () => {
    completeLesson('03-docker/imagenes-y-capas');
    const json = exportProgress();
    localStorage.clear();
    importProgress(json);
    expect(isLessonDone(loadProgress(), '03-docker/imagenes-y-capas')).toBe(true);
    expect(() => importProgress('"just a string"')).toThrow();
    expect(() => importProgress('{"version":99}')).toThrow();
  });

  it('notifies subscribers and refreshes the snapshot on writes', () => {
    const before = getSnapshot();
    let calls = 0;
    const unsub = subscribe(() => calls++);
    completeLesson('01-fundamentos/que-es-devops');
    expect(calls).toBe(1);
    expect(getSnapshot()).not.toBe(before);
    expect(getSnapshot()).toBe(getSnapshot()); // stable between writes
    unsub();
  });
});
