import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '04-tir-1',
    topic: '04-cicd',
    text: {
      es: '¿Por qué un tag por SHA (:sha-a1b2c3d) es mejor que un tag de rama (:master)?',
      en: 'Why is a SHA tag (:sha-a1b2c3d) better than a branch tag (:master)?',
    },
    options: [
      { id: 'a', text: { es: 'Porque ocupa menos espacio en el registry', en: 'Because it takes less space in the registry' } },
      { id: 'b', text: { es: 'Porque está atado a un commit exacto y nunca se sobrescribe: sabes qué corre en prod y el tag anterior sigue existiendo para volver', en: 'Because it is tied to an exact commit and is never overwritten: you know what runs in prod and the previous tag still exists to roll back to' } },
      { id: 'c', text: { es: 'Porque GHCR rechaza los tags de rama', en: 'Because GHCR rejects branch tags' } },
      { id: 'd', text: { es: 'Porque los tags por SHA se bajan más rápido', en: 'Because SHA tags pull faster' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El tag por SHA identifica una imagen única e inmutable. Con :master no sabes qué commit corre y el anterior fue sobrescrito; con :sha-... cada deploy es reproducible y reversible.',
      en: 'A SHA tag identifies a unique, immutable image. With :master you do not know which commit runs and the previous one was overwritten; with :sha-... each deploy is reproducible and reversible.',
    },
  },
  {
    id: '04-tir-2',
    topic: '04-cicd',
    text: {
      es: 'El step de commit-back hace git push al overlay. ¿Cuál es el riesgo y cómo se evita?',
      en: 'The commit-back step does a git push to the overlay. What is the risk and how is it avoided?',
    },
    options: [
      { id: 'a', text: { es: 'Riesgo de borrar el repo; se evita con contents: read', en: 'Risk of deleting the repo; avoided with contents: read' } },
      { id: 'b', text: { es: 'No hay riesgo; el push nunca dispara el workflow', en: 'There is no risk; the push never triggers the workflow' } },
      { id: 'c', text: { es: 'Un loop infinito: el push dispararía el workflow otra vez. Se evita con paths-ignore: [\'k8s/**\'] (o [skip ci]), porque el bump solo toca k8s/overlays', en: 'An infinite loop: the push would trigger the workflow again. Avoided with paths-ignore: [\'k8s/**\'] (or [skip ci]), since the bump only touches k8s/overlays' } },
      { id: 'd', text: { es: 'El riesgo es que GHCR borre la imagen; se evita con un PAT', en: 'The risk is GHCR deleting the image; avoided with a PAT' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'on: push + un push de CI = recursión sin fin. Como el bump solo modifica k8s/**, el paths-ignore hace que ese push no dispare otra corrida y rompe el loop.',
      en: 'on: push + a push from CI = endless recursion. Since the bump only modifies k8s/**, paths-ignore makes that push not trigger another run and breaks the loop.',
    },
  },
  {
    id: '04-tir-3',
    topic: '04-cicd',
    text: {
      es: 'Con commit-back y tags por SHA, ¿cómo se hace rollback de un deploy malo?',
      en: 'With commit-back and SHA tags, how do you roll back a bad deploy?',
    },
    options: [
      { id: 'a', text: { es: 'Reconstruyendo la imagen anterior desde cero y rezando que salga igual', en: 'Rebuilding the previous image from scratch and praying it comes out the same' } },
      { id: 'b', text: { es: 'Haciendo git revert del commit del bump: restaura el newTag anterior, que sigue existiendo en el registry porque nunca se sobrescribió', en: 'Doing git revert of the bump commit: it restores the previous newTag, which still exists in the registry because it was never overwritten' } },
      { id: 'c', text: { es: 'Borrando el overlay y dejando que k8s adivine la versión', en: 'Deleting the overlay and letting k8s guess the version' } },
      { id: 'd', text: { es: 'Editando :master a mano para que apunte al commit viejo', en: 'Editing :master by hand to point at the old commit' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Cada deploy es un commit que cambia el tag, así que el historial de git es el historial de deploys. Revertir el commit del bump vuelve al SHA anterior, que es inmutable y sigue en el registry.',
      en: 'Each deploy is a commit that changes the tag, so the git history is the deploy history. Reverting the bump commit returns to the previous SHA, which is immutable and still in the registry.',
    },
  },
];
