import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-kbo-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Por qué el sufijo de hash de configMapGenerator hace rodar los pods cuando cambias la config?',
      en: 'Why does configMapGenerator\'s hash suffix roll the pods when you change the config?',
    },
    options: [
      { id: 'a', text: { es: 'Porque al cambiar el contenido cambia el hash y el nombre del ConfigMap; el Deployment pasa a referenciar un objeto nuevo y eso dispara un rollout', en: 'Because changing the content changes the hash and the ConfigMap name; the Deployment now references a new object and that triggers a rollout' } },
      { id: 'b', text: { es: 'Porque Kustomize reinicia el nodo entero', en: 'Because Kustomize restarts the whole node' } },
      { id: 'c', text: { es: 'Porque el ConfigMap borra los pods viejos a mano', en: 'Because the ConfigMap deletes the old pods by hand' } },
      { id: 'd', text: { es: 'Porque envFrom revisa el ConfigMap cada 30 segundos', en: 'Because envFrom polls the ConfigMap every 30 seconds' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Kustomize agrega un hash del contenido al nombre (sample-app-config-<hash>) y reescribe el envFrom. Si el contenido cambia, el nombre cambia, el Deployment referencia un objeto nuevo y k8s rueda los pods automáticamente.',
      en: 'Kustomize appends a content hash to the name (sample-app-config-<hash>) and rewrites the envFrom. If the content changes, the name changes, the Deployment references a new object, and k8s rolls the pods automatically.',
    },
  },
  {
    id: '05-kbo-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Tras el commit-back del Lab 1, ¿dónde queda registrado el tag de imagen que debe correr?',
      en: 'After Lab 1\'s commit-back, where is the image tag that should run recorded?',
    },
    options: [
      { id: 'a', text: { es: 'En el Deployment de la base', en: 'In the base Deployment' } },
      { id: 'b', text: { es: 'En el campo images: del kustomization.yaml del overlay (newTag), que es lo que edita kustomize edit set image', en: 'In the overlay kustomization.yaml\'s images: field (newTag), which is what kustomize edit set image edits' } },
      { id: 'c', text: { es: 'En un Secret del cluster', en: 'In a cluster Secret' } },
      { id: 'd', text: { es: 'En una variable de entorno del runner de CI', en: 'In a CI runner environment variable' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'kustomize edit set image cambia el newTag (y newName) de la entrada images: del overlay. Por eso el tag vive en el overlay, no en la base: el overlay es el estado deseado por entorno.',
      en: 'kustomize edit set image changes the newTag (and newName) of the overlay\'s images: entry. That is why the tag lives in the overlay, not the base: the overlay is the per-environment desired state.',
    },
  },
  {
    id: '05-kbo-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Por qué poner API_KEY en los literales de secretGenerator es un anti-patrón?',
      en: 'Why is putting API_KEY in secretGenerator literals an anti-pattern?',
    },
    options: [
      { id: 'a', text: { es: 'Porque Kustomize no soporta Secrets', en: 'Because Kustomize does not support Secrets' } },
      { id: 'b', text: { es: 'Porque el Secret no se materializa nunca', en: 'Because the Secret never materializes' } },
      { id: 'c', text: { es: 'Porque el valor real queda en texto plano en git, y el historial lo guarda para siempre; un secreto comiteado se considera comprometido y hay que rotarlo', en: 'Because the real value ends up in plaintext in git, and history keeps it forever; a committed secret is considered compromised and must be rotated' } },
      { id: 'd', text: { es: 'Porque sube demasiado el tamaño del repo', en: 'Because it bloats the repo size too much' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El literal pone el secreto en texto plano en el kustomization.yaml, que vive en git. Aunque lo borres después, el historial lo conserva. La cura es External Secrets Operator, que vemos en el Lab 3.',
      en: 'The literal puts the secret in plaintext in the kustomization.yaml, which lives in git. Even if you delete it later, history keeps it. The cure is External Secrets Operator, which we cover in Lab 3.',
    },
  },
];
