import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-acd-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'En syncPolicy.automated, ¿qué hace prune: true?',
      en: 'In syncPolicy.automated, what does prune: true do?',
    },
    options: [
      { id: 'a', text: { es: 'Comprime las imágenes del registry', en: 'Compresses the registry images' } },
      { id: 'b', text: { es: 'Si borras un recurso de git, Argo CD lo borra del cluster (sin prune quedaría huérfano vivo)', en: 'If you delete a resource from git, Argo CD deletes it from the cluster (without prune it would be left orphaned and alive)' } },
      { id: 'c', text: { es: 'Revierte los cambios hechos a mano en el cluster', en: 'Reverts changes made by hand in the cluster' } },
      { id: 'd', text: { es: 'Borra el historial de git tras cada sync', en: 'Deletes git history after each sync' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'prune elimina del cluster lo que ya no está en git. Revertir cambios manuales es selfHeal, no prune.',
      en: 'prune removes from the cluster what is no longer in git. Reverting manual changes is selfHeal, not prune.',
    },
  },
  {
    id: '05-acd-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Alguien hace kubectl scale a mano sobre un Deployment gestionado por Argo CD con selfHeal: true. ¿Qué pasa?',
      en: 'Someone runs kubectl scale by hand on a Deployment managed by Argo CD with selfHeal: true. What happens?',
    },
    options: [
      { id: 'a', text: { es: 'Argo CD revierte el cambio para que el cluster vuelva a lo que dice git (auto-sanación contra drift)', en: 'Argo CD reverts the change so the cluster goes back to what git says (self-healing against drift)' } },
      { id: 'b', text: { es: 'El cambio queda permanente y git se actualiza solo', en: 'The change stays permanent and git updates itself' } },
      { id: 'c', text: { es: 'Argo CD borra el Deployment', en: 'Argo CD deletes the Deployment' } },
      { id: 'd', text: { es: 'No pasa nada hasta el próximo push', en: 'Nothing happens until the next push' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'selfHeal compara continuamente real vs deseado y revierte la diferencia: el cluster vuelve a lo que dice git, solo. Git sigue siendo la única fuente de verdad.',
      en: 'selfHeal continuously compares actual vs desired and reverts the difference: the cluster returns to what git says, on its own. Git remains the single source of truth.',
    },
  },
  {
    id: '05-acd-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Para qué sirve el patrón app-of-apps?',
      en: 'What is the app-of-apps pattern for?',
    },
    options: [
      { id: 'a', text: { es: 'Para cifrar secretos en git', en: 'To encrypt secrets in git' } },
      { id: 'b', text: { es: 'Para correr Argo CD sin cluster', en: 'To run Argo CD without a cluster' } },
      { id: 'c', text: { es: 'Para exponer la UI sin port-forward', en: 'To expose the UI without port-forward' } },
      { id: 'd', text: { es: 'Una Application raíz apunta a un directorio de Applications; sincronizarla crea las hijas, así no aplicas N Applications a mano', en: 'A root Application points at a directory of Applications; syncing it creates the children, so you don\'t apply N Applications by hand' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Con muchos servicios, la raíz app-of-apps sincroniza un directorio de Applications hijas. Agregar un servicio nuevo es comitear un archivo de Application: la plataforma entera queda declarativa.',
      en: 'With many services, the app-of-apps root syncs a directory of child Applications. Adding a new service is committing an Application file: the whole platform becomes declarative.',
    },
  },
];
