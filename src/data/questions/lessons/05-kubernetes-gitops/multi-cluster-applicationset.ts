import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-mas-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Qué hace el list generator de un ApplicationSet?',
      en: 'What does an ApplicationSet\'s list generator do?',
    },
    options: [
      { id: 'a', text: { es: 'Lista los pods de todos los namespaces', en: 'Lists the pods of all namespaces' } },
      { id: 'b', text: { es: 'Produce un conjunto de elementos (cada uno un mapa de parámetros) que rellenan el template; por cada elemento se genera una Application', en: 'Produces a set of elements (each a map of parameters) that fill the template; one Application is generated per element' } },
      { id: 'c', text: { es: 'Genera un Secret por cada cluster', en: 'Generates a Secret per cluster' } },
      { id: 'd', text: { es: 'Lista las versiones de imagen disponibles en GHCR', en: 'Lists the image versions available in GHCR' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El list generator define a mano los elementos con sus parámetros. El controlador rellena los placeholders {{...}} del template y crea una Application por elemento.',
      en: 'The list generator defines the elements with their parameters by hand. The controller fills the template\'s {{...}} placeholders and creates one Application per element.',
    },
  },
  {
    id: '05-mas-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'En multi-cluster de verdad (no la simulación con namespaces), ¿qué cambia respecto al lab?',
      en: 'In real multi-cluster (not the namespace simulation), what changes from the lab?',
    },
    options: [
      { id: 'a', text: { es: 'Hay que abandonar Kustomize y usar Helm', en: 'You must drop Kustomize and use Helm' } },
      { id: 'b', text: { es: 'El template deja de existir y se escriben Applications a mano', en: 'The template disappears and you write Applications by hand' } },
      { id: 'c', text: { es: 'Registras cada cluster con argocd cluster add y el destination.server apunta al API server de cada cluster (típicamente con {{server}} de un cluster generator)', en: 'You register each cluster with argocd cluster add and destination.server points at each cluster\'s API server (typically with {{server}} from a cluster generator)' } },
      { id: 'd', text: { es: 'Hay que desactivar prune y selfHeal', en: 'You must disable prune and selfHeal' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'La estructura (un template, N elementos, N Applications) no cambia. Solo registras los clusters y apuntas destination.server a cada API server, normalmente con un cluster generator en vez del list generator.',
      en: 'The structure (one template, N elements, N Applications) does not change. You just register the clusters and point destination.server at each API server, usually with a cluster generator instead of the list generator.',
    },
  },
  {
    id: '05-mas-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Cuándo conviene un ApplicationSet en vez de N Applications escritas a mano?',
      en: 'When is an ApplicationSet preferable to N hand-written Applications?',
    },
    options: [
      { id: 'a', text: { es: 'Cuando tienes el mismo patrón repetido con parámetros (mismo servicio en varios clusters); una fuente de verdad en vez de N copias que se desincronizan', en: 'When you have the same pattern repeated with parameters (same service across several clusters); one source of truth instead of N copies that drift apart' } },
      { id: 'b', text: { es: 'Siempre; N Applications nunca son la respuesta', en: 'Always; N Applications are never the answer' } },
      { id: 'c', text: { es: 'Cuando cada destino es completamente distinto en estructura y lógica', en: 'When each destination is completely different in structure and logic' } },
      { id: 'd', text: { es: 'Solo cuando no usas Argo CD', en: 'Only when you do not use Argo CD' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'ApplicationSet brilla con el mismo patrón parametrizado (un template, N elementos). Si cada destino es distinto entre sí, N Applications a mano es más claro.',
      en: 'ApplicationSet shines with the same parameterized pattern (one template, N elements). If each destination is different from the others, N hand-written Applications is clearer.',
    },
  },
];
