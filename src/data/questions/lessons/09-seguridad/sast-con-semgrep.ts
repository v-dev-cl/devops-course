import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '09-sast-1',
    topic: '09-seguridad',
    text: {
      es: 'El SAST de tu código pasa en verde, pero igual quedaste expuesto. ¿Cuál de estos problemas NO encuentra Semgrep?',
      en: 'Your SAST scan is green, yet you are still exposed. Which of these does Semgrep NOT find?',
    },
    options: [
      { id: 'a', text: { es: 'Una CVE crítica en una dependencia de npm que importas', en: 'A critical CVE in an npm dependency you import' } },
      { id: 'b', text: { es: 'Una query SQL armada concatenando strings en tu worker', en: 'A SQL query built by concatenating strings in your worker' } },
      { id: 'c', text: { es: 'Un uso inseguro de `eval` en tu propio código', en: 'An unsafe use of `eval` in your own code' } },
      { id: 'd', text: { es: 'Validación de entrada que falta en un handler', en: 'Missing input validation in a handler' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'SAST mira patrones en tu propio código. Una CVE de una dependencia la encuentra el SCA, y los secretos commiteados el escaneo de secretos: son otros scanners, no Semgrep.',
      en: 'SAST looks at patterns in your own code. A dependency CVE is the job of SCA, and committed secrets of secret scanning: those are other scanners, not Semgrep.',
    },
  },
  {
    id: '09-sast-2',
    topic: '09-seguridad',
    text: {
      es: 'En Semgrep, ¿qué es un ruleset como `p/typescript` o `p/owasp-top-ten`?',
      en: 'In Semgrep, what is a ruleset like `p/typescript` or `p/owasp-top-ten`?',
    },
    options: [
      { id: 'a', text: { es: 'Una imagen de contenedor lista para correr en CI', en: 'A container image ready to run in CI' } },
      { id: 'b', text: { es: 'Una colección curada de reglas (patrones de código) del registry que aplicas con `--config`', en: 'A curated collection of rules (code patterns) from the registry that you apply with `--config`' } },
      { id: 'c', text: { es: 'La base de datos de CVEs que Semgrep usa para escanear dependencias', en: 'The CVE database Semgrep uses to scan dependencies' } },
      { id: 'd', text: { es: 'Un archivo que lista los hallazgos que quieres ignorar', en: 'A file that lists the findings you want to ignore' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Un ruleset es un paquete curado de reglas del registry; cada regla describe un patrón de código a buscar. Lo aplicas con `semgrep --config p/typescript .` o vía `semgrep ci`.',
      en: 'A ruleset is a curated bundle of rules from the registry; each rule describes a code pattern to match. You apply it with `semgrep --config p/typescript .` or via `semgrep ci`.',
    },
  },
  {
    id: '09-sast-3',
    topic: '09-seguridad',
    text: {
      es: 'Una regla marca una línea que sabes que es segura: es un falso positivo. ¿Cuál es la mejor forma de manejarlo?',
      en: 'A rule flags a line you know is safe: it is a false positive. What is the best way to handle it?',
    },
    options: [
      { id: 'a', text: { es: 'Apagar el gate de Semgrep en el pipeline para que nada frene el build', en: 'Turn off the Semgrep gate in the pipeline so nothing fails the build' } },
      { id: 'b', text: { es: 'Borrar el ruleset entero del registry', en: 'Delete the entire registry ruleset' } },
      { id: 'c', text: { es: 'Suprimir ese hallazgo puntual (comentario `nosemgrep` o `.semgrepignore`) o usar baseline para no ahogarte en hallazgos legacy', en: 'Suppress that one finding (a `nosemgrep` comment or `.semgrepignore`) or use a baseline so legacy findings do not drown you' } },
      { id: 'd', text: { es: 'Mergear con "merge anyway" e ignorar todos los hallazgos futuros', en: 'Merge with "merge anyway" and ignore all future findings' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Triageas el falso positivo puntual con un comentario `nosemgrep` o `.semgrepignore`, y usas baseline scanning para que solo te avisen los hallazgos nuevos. Nunca apagues el gate entero: eso te deja ciego ante los verdaderos positivos.',
      en: 'You triage the single false positive with a `nosemgrep` comment or `.semgrepignore`, and use baseline scanning so only new findings alert you. Never disable the whole gate: that blinds you to the true positives.',
    },
  },
];
