import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '04-awf-1',
    topic: '04-cicd',
    text: {
      es: '¿Qué describe mejor el modelo de permisos de GITHUB_TOKEN en un workflow?',
      en: 'What best describes the GITHUB_TOKEN permissions model in a workflow?',
    },
    options: [
      { id: 'a', text: { es: 'Es un PAT que tú creas y rota a mano cada cierto tiempo', en: 'It is a PAT you create and rotate by hand periodically' } },
      { id: 'b', text: { es: 'Un token efímero, creado al empezar y revocado solo al terminar, cuyos permisos declaras con least privilege en el bloque permissions', en: 'An ephemeral token, created at start and revoked on its own at the end, whose permissions you declare with least privilege in the permissions block' } },
      { id: 'c', text: { es: 'Un token con permisos de admin que no se puede acotar', en: 'A token with admin permissions that cannot be scoped down' } },
      { id: 'd', text: { es: 'Una variable de entorno cualquiera que defines tú', en: 'Just an environment variable you define yourself' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'GitHub lo crea por corrida y lo revoca solo. Declarar permissions acotados (p.ej. contents: read) es least privilege: si una acción de terceros se compromete, el daño queda limitado.',
      en: 'GitHub creates it per run and revokes it on its own. Declaring scoped permissions (e.g. contents: read) is least privilege: if a third-party action is compromised, the damage stays limited.',
    },
  },
  {
    id: '04-awf-2',
    topic: '04-cicd',
    text: {
      es: '¿Cuándo importa más un bloque concurrency con cancel-in-progress?',
      en: 'When does a concurrency block with cancel-in-progress matter most?',
    },
    options: [
      { id: 'b', text: { es: 'Nunca; concurrency solo afecta el nombre del workflow', en: 'Never; concurrency only affects the workflow name' } },
      { id: 'c', text: { es: 'Solo cuando usas runners self-hosted', en: 'Only when you use self-hosted runners' } },
      { id: 'd', text: { es: 'Solo en workflows que no tienen jobs', en: 'Only in workflows that have no jobs' } },
      { id: 'a', text: { es: 'Cuando una corrida despliega: empujas dos commits seguidos y no quieres dos deploys de la misma rama pisándose', en: 'When a run deploys: you push two commits in a row and do not want two deploys of the same branch stepping on each other' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Agrupar por rama y cancelar la corrida vieja evita deploys duplicados o fuera de orden cuando llegan varios pushes juntos.',
      en: 'Grouping by branch and cancelling the old run avoids duplicate or out-of-order deploys when several pushes arrive together.',
    },
  },
  {
    id: '04-awf-3',
    topic: '04-cicd',
    text: {
      es: 'Un colaborador abre un pull_request desde un fork. ¿Qué pasa con tus secrets?',
      en: 'A contributor opens a pull_request from a fork. What happens to your secrets?',
    },
    options: [
      { id: 'a', text: { es: 'Quedan disponibles igual que en un push a tus ramas', en: 'They are available just like on a push to your branches' } },
      { id: 'b', text: { es: 'Se exponen solo si el PR modifica el workflow', en: 'They are exposed only if the PR modifies the workflow' } },
      { id: 'c', text: { es: 'GitHub no los expone al workflow, para que un PR malicioso no pueda imprimir tus credenciales', en: 'GitHub does not expose them to the workflow, so a malicious PR cannot print your credentials' } },
      { id: 'd', text: { es: 'Se borran del repo permanentemente', en: 'They are permanently deleted from the repo' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Los secrets no llegan a workflows disparados por PRs de forks. Por eso los jobs que publican imágenes corren en push a tus ramas, no en PRs de forks.',
      en: 'Secrets do not reach workflows triggered by fork PRs. That is why jobs that publish images run on push to your branches, not on fork PRs.',
    },
  },
];
