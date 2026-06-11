import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '09-sl-1',
    topic: '09-seguridad',
    text: {
      es: '¿Qué scanner detecta una vulnerabilidad en una librería de npm que usas?',
      en: 'Which scanner detects a vulnerability in an npm library you use?',
    },
    options: [
      { id: 'a', text: { es: 'SAST', en: 'SAST' } },
      { id: 'b', text: { es: 'SCA (análisis de dependencias)', en: 'SCA (dependency analysis)' } },
      { id: 'c', text: { es: 'Escaneo de secretos', en: 'Secret scanning' } },
      { id: 'd', text: { es: 'DAST', en: 'DAST' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'SCA analiza tus dependencias (directas y transitivas) contra bases de CVEs; SAST mira tu propio código.',
      en: 'SCA analyzes your dependencies (direct and transitive) against CVE databases; SAST looks at your own code.',
    },
  },
  {
    id: '09-sl-2',
    topic: '09-seguridad',
    text: {
      es: 'Tu gate de seguridad rompe cada PR con 80 hallazgos low sin fix y el equipo ya aprieta "merge anyway" sin mirar. ¿Cuál es el ajuste correcto?',
      en: 'Your security gate breaks every PR with 80 low-severity findings that have no fix, and the team now hits "merge anyway" without looking. What is the right adjustment?',
    },
    options: [
      { id: 'a', text: { es: 'Apagar el scanner por completo para no molestar', en: 'Turn the scanner off entirely so it stops bothering anyone' } },
      { id: 'b', text: { es: 'Frenar el build con cualquier hallazgo, sin importar la severidad', en: 'Fail the build on any finding, regardless of severity' } },
      { id: 'c', text: { es: 'Mover el scan a una auditoría manual al final del release', en: 'Move the scan to a manual audit at the end of the release' } },
      { id: 'd', text: { es: 'Frenar el build solo por lo accionable y de alta severidad; el resto a warn-only o a un backlog triageado', en: 'Fail the build only on actionable, high-severity findings; send the rest to warn-only or a triaged backlog' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Un gate demasiado ruidoso se ignora (alert fatigue, como en el módulo 7). Frena solo por lo accionable y de alta severidad; un gate que la gente respeta vale más que uno que dispara siempre.',
      en: 'A gate that is too noisy gets ignored (alert fatigue, like in module 7). Fail only on actionable, high-severity findings; a gate people respect is worth more than one that always fires.',
    },
  },
  {
    id: '09-sl-3',
    topic: '09-seguridad',
    text: {
      es: '¿Por qué shift-left (scanners en cada PR) sale más barato que una auditoría de seguridad al final?',
      en: 'Why is shift-left (scanners on every PR) cheaper than a security audit at the end?',
    },
    options: [
      { id: 'a', text: { es: 'Porque los scanners son gratis y los auditores cobran caro', en: 'Because scanners are free and auditors charge a lot' } },
      { id: 'b', text: { es: 'Porque la auditoría tardía encuentra más bugs que los scanners', en: 'Because the late audit finds more bugs than the scanners do' } },
      { id: 'c', text: { es: 'Porque el dev arregla el problema mientras el cambio está fresco, antes de que se entierre en prod entre decenas de servicios', en: 'Because the dev fixes the problem while the change is fresh, before it gets buried in prod among dozens of services' } },
      { id: 'd', text: { es: 'Porque shift-left elimina la necesidad de cualquier revisión humana', en: 'Because shift-left removes the need for any human review' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Encontrar el problema temprano es barato: el contexto está fresco y el cambio aún no se enterró en producción. La auditoría tardía llega cuando arreglar duele.',
      en: 'Catching the problem early is cheap: the context is fresh and the change is not yet buried in production. The late audit arrives when fixing hurts.',
    },
  },
];
