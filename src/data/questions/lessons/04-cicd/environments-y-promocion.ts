import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '04-enp-1',
    topic: '04-cicd',
    text: {
      es: '¿Qué logra atar un job a un GitHub environment con required reviewers?',
      en: 'What does tying a job to a GitHub environment with required reviewers achieve?',
    },
    options: [
      { id: 'a', text: { es: 'Que el job corra más rápido en runners dedicados', en: 'The job runs faster on dedicated runners' } },
      { id: 'b', text: { es: 'Que GitHub pause el job y exija la aprobación de un humano antes de continuar, dejando registrado quién aprobó qué deploy', en: 'GitHub pauses the job and requires a human approval before continuing, recording who approved which deploy' } },
      { id: 'c', text: { es: 'Que los secrets del repo se vuelvan públicos', en: 'The repo secrets become public' } },
      { id: 'd', text: { es: 'Que el workflow se ejecute sin tests', en: 'The workflow runs without tests' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Un environment con required reviewers es una puerta manual: el job se pausa hasta que alguien aprueba, y la aprobación queda auditada. Ideal para prod.',
      en: 'An environment with required reviewers is a manual gate: the job pauses until someone approves, and the approval is audited. Ideal for prod.',
    },
  },
  {
    id: '04-enp-2',
    topic: '04-cicd',
    text: {
      es: '¿Por qué branch-por-entorno (una rama dev y una prod) tiende a hacer daño?',
      en: 'Why does branch-per-environment (a dev branch and a prod branch) tend to cause harm?',
    },
    options: [
      { id: 'a', text: { es: 'Porque los merges arrastran todo lo que está en dev, las ramas divergen con conflictos y "qué hay en prod" vuelve a ser difícil de leer', en: 'Because merges carry everything in dev, the branches diverge with conflicts, and "what is in prod" becomes hard to read again' } },
      { id: 'b', text: { es: 'Porque GitHub cobra por cada rama', en: 'Because GitHub charges per branch' } },
      { id: 'c', text: { es: 'Porque Kustomize no soporta ramas', en: 'Because Kustomize does not support branches' } },
      { id: 'd', text: { es: 'No hace daño; es el patrón recomendado', en: 'It causes no harm; it is the recommended pattern' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Promover por merge entre ramas largas arrastra cambios no deseados y diverge. Por eso se prefiere overlay-por-entorno: una sola rama, historial lineal.',
      en: 'Promoting by merging long-lived branches carries unwanted changes and diverges. That is why overlay-per-environment is preferred: one branch, linear history.',
    },
  },
  {
    id: '04-enp-3',
    topic: '04-cicd',
    text: {
      es: 'Con overlay-por-entorno, ¿cómo se promueve a prod el SHA que ya validaste en dev?',
      en: 'With overlay-per-environment, how do you promote to prod the SHA you already validated in dev?',
    },
    options: [
      { id: 'a', text: { es: 'Mergeando la rama dev completa en la rama prod', en: 'Merging the whole dev branch into the prod branch' } },
      { id: 'b', text: { es: 'Editando el digest directamente en el cluster con kubectl', en: 'Editing the digest directly on the cluster with kubectl' } },
      { id: 'c', text: { es: 'Con un PR de una línea: kustomize edit set image en el overlay de prod fijando ese mismo :sha-...; el reviewer lo aprueba y CD lo aplica', en: 'With a one-line PR: kustomize edit set image in the prod overlay pinning that same :sha-...; the reviewer approves it and CD applies it' } },
      { id: 'd', text: { es: 'Reconstruyendo la imagen con tag :prod', en: 'Rebuilding the image with a :prod tag' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'La promoción es un cambio explícito y revisable de una línea en el overlay de prod, atado a un SHA inmutable. El PR muestra exactamente qué entra a prod.',
      en: 'Promotion is an explicit, reviewable one-line change in the prod overlay, tied to an immutable SHA. The PR shows exactly what enters prod.',
    },
  },
];
