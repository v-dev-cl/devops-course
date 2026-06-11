import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '01-cdv-1',
    topic: '01-fundamentos',
    text: {
      es: '¿Cuál es el orden correcto de estas etapas del ciclo de entrega?',
      en: 'Which is the correct order of these delivery-lifecycle stages?',
    },
    options: [
      { id: 'a', text: { es: 'build → test → deploy → release', en: 'build → test → deploy → release' } },
      { id: 'b', text: { es: 'build → test → release → deploy', en: 'build → test → release → deploy' } },
      { id: 'c', text: { es: 'test → build → release → deploy', en: 'test → build → release → deploy' } },
      { id: 'd', text: { es: 'release → build → test → deploy', en: 'release → build → test → deploy' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Primero construyes la imagen, la testeas, la publicas (release) y recién entonces la pones a correr en un entorno (deploy).',
      en: 'You build the image first, test it, publish it (release), and only then put it running in an environment (deploy).',
    },
  },
  {
    id: '01-cdv-2',
    topic: '01-fundamentos',
    text: {
      es: '¿Cuál es la diferencia entre "release" y "deploy"?',
      en: 'What is the difference between "release" and "deploy"?',
    },
    options: [
      { id: 'a', text: { es: 'Son sinónimos exactos', en: 'They are exact synonyms' } },
      { id: 'b', text: { es: 'Release es desplegar a prod; deploy es desplegar a dev', en: 'Release means deploying to prod; deploy means deploying to dev' } },
      { id: 'c', text: { es: 'Deploy publica el artefacto y release lo ejecuta', en: 'Deploy publishes the artifact and release runs it' } },
      { id: 'd', text: { es: 'Release publica un artefacto versionado; deploy lo pone a correr en un entorno', en: 'Release publishes a versioned artifact; deploy puts it running in an environment' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Release es hacer disponible la imagen en GHCR; deploy es ponerla a correr. Puedes hacer release y desplegar después.',
      en: 'Release makes the image available in GHCR; deploy puts it running. You can release first and deploy later.',
    },
  },
  {
    id: '01-cdv-3',
    topic: '01-fundamentos',
    text: {
      es: 'Tu pipeline solo hace CI (build, test, push a GHCR). ¿Qué etapa que cierra el loop de feedback sigue sin cubrir?',
      en: 'Your pipeline only does CI (build, test, push to GHCR). Which stage that closes the feedback loop is still uncovered?',
    },
    options: [
      { id: 'a', text: { es: 'Monitor: sin observabilidad el loop no se cierra', en: 'Monitor: without observability the loop is not closed' } },
      { id: 'b', text: { es: 'Build, porque GHCR no construye', en: 'Build, because GHCR does not build' } },
      { id: 'c', text: { es: 'Code, porque falta versionar', en: 'Code, because versioning is missing' } },
      { id: 'd', text: { es: 'Test, porque CI no testea', en: 'Test, because CI does not test' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'CI cubre build/test/release; el monitoreo de producción suele ser el hueco que corta el loop de feedback.',
      en: 'CI covers build/test/release; production monitoring is usually the gap that cuts the feedback loop.',
    },
  },
];
