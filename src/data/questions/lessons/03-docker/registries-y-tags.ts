import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '03-ryt-1',
    topic: '03-docker',
    text: {
      es: '¿Por qué un tag mutable como :master es un problema para producción?',
      en: 'Why is a mutable tag like :master a problem for production?',
    },
    options: [
      { id: 'a', text: { es: 'Porque cada push lo mueve, así que "qué corre en prod" no tiene respuesta y el rollback obliga a reconstruir', en: 'Because each push moves it, so "what runs in prod" has no answer and rollback forces a rebuild' } },
      { id: 'b', text: { es: 'Porque GHCR no acepta el tag master', en: 'Because GHCR does not accept the master tag' } },
      { id: 'c', text: { es: 'Porque ocupa más espacio en el registry', en: 'Because it takes more space in the registry' } },
      { id: 'd', text: { es: 'Porque los tags mutables son más lentos de bajar', en: 'Because mutable tags are slower to pull' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El :master que corre tu pod puede no ser el :master de hoy en el registry, y el tag anterior fue sobrescrito: no hay a qué volver. Este es el puente al módulo 4.',
      en: 'The :master your pod runs may not be today\'s :master in the registry, and the previous tag was overwritten: there is nothing to roll back to. This is the bridge to module 4.',
    },
  },
  {
    id: '03-ryt-2',
    topic: '03-docker',
    text: {
      es: 'Para hacer push a GHCR desde un job de GitHub Actions, ¿cuál es la forma correcta de autenticar?',
      en: 'To push to GHCR from a GitHub Actions job, what is the correct way to authenticate?',
    },
    options: [
      { id: 'a', text: { es: 'Hardcodear tu contraseña de GitHub en el workflow', en: 'Hardcode your GitHub password in the workflow' } },
      { id: 'b', text: { es: 'Crear un PAT y guardarlo como secret aunque GITHUB_TOKEN alcance', en: 'Create a PAT and store it as a secret even though GITHUB_TOKEN is enough' } },
      { id: 'c', text: { es: 'Usar GITHUB_TOKEN, el token efímero que Actions inyecta y se revoca solo al terminar el workflow', en: 'Use GITHUB_TOKEN, the ephemeral token Actions injects that revokes itself when the workflow ends' } },
      { id: 'd', text: { es: 'No hace falta autenticar para push a GHCR', en: 'No authentication is needed to push to GHCR' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'GITHUB_TOKEN no lo creas tú, dura lo que el workflow y se revoca solo. El PAT es para fuera de Actions (tu notebook). No metas un PAT si GITHUB_TOKEN basta.',
      en: 'You do not create GITHUB_TOKEN; it lasts as long as the workflow and revokes itself. A PAT is for outside Actions (your laptop). Do not add a PAT if GITHUB_TOKEN suffices.',
    },
  },
  {
    id: '03-ryt-3',
    topic: '03-docker',
    text: {
      es: '¿Qué es anclar (pin) una imagen por digest sha256 y por qué es la referencia más fuerte?',
      en: 'What is pinning an image by sha256 digest and why is it the strongest reference?',
    },
    options: [
      { id: 'a', text: { es: 'Es otro nombre para el tag :latest', en: 'It is another name for the :latest tag' } },
      { id: 'b', text: { es: 'El digest es el hash del contenido de la imagen; aunque muevan un tag, siempre apunta a los mismos bytes exactos', en: 'The digest is the hash of the image content; even if a tag is moved, it always points to the same exact bytes' } },
      { id: 'c', text: { es: 'Hace la imagen más liviana al deduplicar capas', en: 'It makes the image lighter by deduplicating layers' } },
      { id: 'd', text: { es: 'Convierte el tag mutable en semver automáticamente', en: 'It automatically converts the mutable tag into semver' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'ghcr.io/v-dev-cl/worker@sha256:... fija el contenido exacto. Anclar por digest en los manifiestos de k8s garantiza desplegar la imagen que probaste, byte por byte.',
      en: 'ghcr.io/v-dev-cl/worker@sha256:... fixes the exact content. Pinning by digest in k8s manifests guarantees you deploy the image you tested, byte for byte.',
    },
  },
];
