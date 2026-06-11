import { describe, expect, it } from 'vitest';
import { normalizeCommand, matchCommand } from './matchers';

describe('normalizeCommand', () => {
  it('trims and collapses whitespace', () => {
    expect(normalizeCommand('  kubectl   get  pods ')).toBe('kubectl get pods');
  });
});

describe('matchCommand', () => {
  it('matches exact strings after normalization', () => {
    expect(matchCommand(' docker  build -t app . ', ['docker build -t app .'])).toBe(true);
  });
  it('matches any of several accepted forms', () => {
    const accept = ['kubectl scale deployment app --replicas=5', 'kubectl scale deploy app --replicas=5'];
    expect(matchCommand('kubectl scale deploy app --replicas=5', accept)).toBe(true);
    expect(matchCommand('kubectl scale deployment app --replicas=3', accept)).toBe(false);
  });
  it('supports regex matchers anchored to the full command', () => {
    const accept = [/^kubectl scale (deployment|deploy)(\.apps)? app --replicas[= ]5$/];
    expect(matchCommand('kubectl scale deployment.apps app --replicas 5', accept)).toBe(true);
    expect(matchCommand('kubectl scale deployment app --replicas=5 --dry-run', accept)).toBe(false);
  });
  it('is case-sensitive (commands are)', () => {
    expect(matchCommand('Docker ps', ['docker ps'])).toBe(false);
  });
});
