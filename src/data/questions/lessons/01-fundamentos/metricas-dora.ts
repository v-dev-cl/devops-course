import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '01-dora-1',
    topic: '01-fundamentos',
    text: {
      es: '"Tiempo desde que haces commit hasta que el cambio corre en producción." ¿Qué métrica DORA es?',
      en: '"Time from making a commit to the change running in production." Which DORA metric is it?',
    },
    options: [
      { id: 'a', text: { es: 'Frecuencia de deploy', en: 'Deployment frequency' } },
      { id: 'b', text: { es: 'MTTR', en: 'MTTR' } },
      { id: 'c', text: { es: 'Lead time para cambios', en: 'Lead time for changes' } },
      { id: 'd', text: { es: 'Tasa de fallo de cambios', en: 'Change failure rate' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El lead time mide cuánto tarda un cambio en llegar a producción desde el commit.',
      en: 'Lead time measures how long a change takes to reach production from the commit.',
    },
  },
  {
    id: '01-dora-2',
    topic: '01-fundamentos',
    text: {
      es: 'Tu change failure rate es muy alta. ¿Qué sugiere principalmente?',
      en: 'Your change failure rate is very high. What does it mainly suggest?',
    },
    options: [
      { id: 'a', text: { es: 'Una fracción grande de tus deploys causa incidentes que hay que remediar', en: 'A large fraction of your deploys cause incidents that need remediation' } },
      { id: 'b', text: { es: 'Que despliegas demasiado seguido', en: 'That you deploy too often' } },
      { id: 'c', text: { es: 'Que tu lead time es bajo', en: 'That your lead time is low' } },
      { id: 'd', text: { es: 'Que escribes pocas líneas de código', en: 'That you write few lines of code' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'La change failure rate es el porcentaje de deploys que requieren rollback o hotfix; alta significa releases inestables.',
      en: 'Change failure rate is the percentage of deploys needing rollback or hotfix; high means unstable releases.',
    },
  },
  {
    id: '01-dora-3',
    topic: '01-fundamentos',
    text: {
      es: '¿Por qué medir bien la frecuencia de deploy prácticamente requiere deploys automáticos?',
      en: 'Why does measuring deployment frequency well practically require automated deploys?',
    },
    options: [
      { id: 'a', text: { es: 'Porque los deploys manuales son siempre más lentos', en: 'Because manual deploys are always slower' } },
      { id: 'b', text: { es: 'Porque DORA prohíbe los deploys manuales', en: 'Because DORA forbids manual deploys' } },
      { id: 'c', text: { es: 'Porque la métrica solo aplica en la nube', en: 'Because the metric only applies in the cloud' } },
      { id: 'd', text: { es: 'Porque un pipeline registra cada deploy solo; a mano dependes de tu memoria', en: 'Because a pipeline records each deploy automatically; by hand you rely on memory' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Cuando el deploy pasa por un pipeline queda registrado; los skaffold manuales no dejan datos confiables.',
      en: 'When the deploy runs through a pipeline it gets recorded; manual skaffold runs leave no reliable data.',
    },
  },
];
