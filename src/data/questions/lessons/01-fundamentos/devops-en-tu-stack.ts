import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '01-stack-1',
    topic: '01-fundamentos',
    text: {
      es: '¿Por qué usar tags mutables como :master o :development es un antipatrón?',
      en: 'Why is using mutable tags like :master or :development an anti-pattern?',
    },
    options: [
      { id: 'a', text: { es: 'Porque ocupan más espacio en el registry', en: 'Because they take more space in the registry' } },
      { id: 'b', text: { es: 'Porque la imagen cambia bajo tus pies y no puedes reproducir ni hacer rollback a una versión exacta', en: 'Because the image changes under your feet and you cannot reproduce or roll back to an exact version' } },
      { id: 'c', text: { es: 'Porque GHCR no soporta tags con texto', en: 'Because GHCR does not support text tags' } },
      { id: 'd', text: { es: 'Porque son más lentos de descargar', en: 'Because they are slower to pull' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Un tag mutable apunta a contenido distinto en el tiempo; pierdes reproducibilidad y rollback confiable.',
      en: 'A mutable tag points to different content over time; you lose reproducibility and reliable rollback.',
    },
  },
  {
    id: '01-stack-2',
    topic: '01-fundamentos',
    text: {
      es: 'Los secretos están commiteados como literales en el secretGenerator de kustomize. ¿Cuál es el riesgo principal?',
      en: 'Secrets are committed as literals in kustomize secretGenerator. What is the main risk?',
    },
    options: [
      { id: 'a', text: { es: 'Que kustomize no los pueda leer', en: 'That kustomize cannot read them' } },
      { id: 'b', text: { es: 'Que ocupan mucho espacio en el repo', en: 'That they take up a lot of repo space' } },
      { id: 'c', text: { es: 'Que quedan en el historial de git para siempre y cualquiera con acceso al repo los tiene', en: 'That they stay in git history forever and anyone with repo access has them' } },
      { id: 'd', text: { es: 'Que k3s los ignora al desplegar', en: 'That k3s ignores them on deploy' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Un secreto en git vive en el historial aunque lo borres después; basta un clon viejo para filtrarlo.',
      en: 'A secret in git lives in history even if you delete it later; an old clone is enough to leak it.',
    },
  },
  {
    id: '01-stack-3',
    topic: '01-fundamentos',
    text: {
      es: 'En el roadmap del curso, ¿qué módulo agrega CD real y saca los secretos de git?',
      en: 'In the course roadmap, which module adds real CD and pulls secrets out of git?',
    },
    options: [
      { id: 'a', text: { es: 'Módulo 5 (Kubernetes + GitOps)', en: 'Module 5 (Kubernetes + GitOps)' } },
      { id: 'b', text: { es: 'Módulo 3 (Docker)', en: 'Module 3 (Docker)' } },
      { id: 'c', text: { es: 'Módulo 4 (CI/CD)', en: 'Module 4 (CI/CD)' } },
      { id: 'd', text: { es: 'Módulo 1 (Fundamentos)', en: 'Module 1 (Fundamentals)' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El módulo 5 introduce CD con GitOps y gestión segura de secretos; el 3 endurece imágenes y el 4 arregla tags y CI.',
      en: 'Module 5 introduces CD with GitOps and secure secret management; module 3 hardens images and module 4 fixes tags and CI.',
    },
  },
];
