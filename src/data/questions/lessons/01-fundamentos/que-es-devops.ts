import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '01-qed-1',
    topic: '01-fundamentos',
    text: {
      es: '¿Cuál es la mejor definición de DevOps?',
      en: 'Which is the best definition of DevOps?',
    },
    options: [
      { id: 'b', text: { es: 'El equipo que administra Kubernetes', en: 'The team that manages Kubernetes' } },
      { id: 'c', text: { es: 'Un conjunto de herramientas de CI/CD', en: 'A set of CI/CD tools' } },
      { id: 'a', text: { es: 'Una forma de trabajar donde quienes construyen el software también lo operan', en: 'A way of working where the people who build the software also operate it' } },
      { id: 'd', text: { es: 'Un cargo senior de infraestructura', en: 'A senior infrastructure role' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Las herramientas y cargos pueden ayudar, pero DevOps es la práctica de unir construcción y operación.',
      en: 'Tools and roles can help, but DevOps is the practice of unifying building and operating.',
    },
  },
  {
    id: '01-qed-2',
    topic: '01-fundamentos',
    text: {
      es: 'En CALMS, ¿qué significa "Lean"?',
      en: 'In CALMS, what does "Lean" mean?',
    },
    options: [
      { id: 'b', text: { es: 'Usar pocas herramientas', en: 'Using few tools' } },
      { id: 'c', text: { es: 'Equipos pequeños', en: 'Small teams' } },
      { id: 'd', text: { es: 'Reducir costos de infraestructura', en: 'Reducing infrastructure costs' } },
      { id: 'a', text: { es: 'Lotes chicos: muchos cambios pequeños en vez de releases gigantes', en: 'Small batches: many small changes instead of giant releases' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Lean viene de manufactura: lotes chicos reducen el riesgo y aceleran el feedback.',
      en: 'Lean comes from manufacturing: small batches reduce risk and speed up feedback.',
    },
  },
  {
    id: '01-qed-3',
    topic: '01-fundamentos',
    text: {
      es: 'Tienes CI que publica imágenes a GHCR pero despliegas con skaffold a mano. ¿Qué letra de CALMS está más débil?',
      en: 'You have CI publishing images to GHCR but you deploy manually with skaffold. Which CALMS letter is weakest?',
    },
    options: [
      { id: 'b', text: { es: 'Culture', en: 'Culture' } },
      { id: 'a', text: { es: 'Automation: el deploy sigue siendo un paso manual', en: 'Automation: the deploy is still a manual step' } },
      { id: 'c', text: { es: 'Sharing', en: 'Sharing' } },
      { id: 'd', text: { es: 'Lean', en: 'Lean' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'La cadena se automatizó hasta el registry; el último tramo (deploy) sigue manual — eso es un gap de Automation.',
      en: 'The chain is automated up to the registry; the last mile (deploy) is still manual — an Automation gap.',
    },
  },
];
