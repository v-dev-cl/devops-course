export type CommandMatcher = string | RegExp;

export function normalizeCommand(input: string): string {
  return input.trim().replace(/\s+/g, ' ');
}

export function matchCommand(input: string, accept: CommandMatcher[]): boolean {
  const cmd = normalizeCommand(input);
  return accept.some((m) =>
    typeof m === 'string' ? normalizeCommand(m) === cmd : m.test(cmd),
  );
}
