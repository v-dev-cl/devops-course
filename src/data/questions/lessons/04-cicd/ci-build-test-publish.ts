import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '04-btp-1',
    topic: '04-cicd',
    text: {
      es: '¿Por qué docker/login-action usa secrets.GITHUB_TOKEN y no un PAT para publicar a GHCR?',
      en: 'Why does docker/login-action use secrets.GITHUB_TOKEN instead of a PAT to publish to GHCR?',
    },
    options: [
      { id: 'a', text: { es: 'Porque un PAT no funciona con GHCR', en: 'Because a PAT does not work with GHCR' } },
      { id: 'b', text: { es: 'Porque el GITHUB_TOKEN es más rápido al bajar imágenes', en: 'Because GITHUB_TOKEN is faster at pulling images' } },
      { id: 'c', text: { es: 'Es el token efímero del workflow: con permissions: packages: write alcanza para publicar, no expones credenciales tuyas y se revoca solo', en: 'It is the workflow\'s ephemeral token: with permissions: packages: write it is enough to publish, exposes none of your credentials, and revokes itself' } },
      { id: 'd', text: { es: 'Porque GitHub prohíbe los PAT en cualquier workflow', en: 'Because GitHub forbids PATs in any workflow' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El GITHUB_TOKEN dura lo que el workflow y se revoca solo; un PAT es para fuera de Actions. No metas un PAT si el token efímero basta.',
      en: 'GITHUB_TOKEN lasts as long as the workflow and revokes itself; a PAT is for outside Actions. Do not add a PAT if the ephemeral token suffices.',
    },
  },
  {
    id: '04-btp-2',
    topic: '04-cicd',
    text: {
      es: 'Con tags: type=ref,event=branch, ¿qué genera metadata-action en un push a master?',
      en: 'With tags: type=ref,event=branch, what does metadata-action generate on a push to master?',
    },
    options: [
      { id: 'b', text: { es: 'Un tag por digest sha256 inmutable', en: 'An immutable sha256 digest tag' } },
      { id: 'c', text: { es: 'Un tag semver como :1.0.0', en: 'A semver tag like :1.0.0' } },
      { id: 'd', text: { es: 'Ningún tag; solo labels', en: 'No tag at all; only labels' } },
      { id: 'a', text: { es: 'El tag :master, que se sobrescribe en cada push a esa rama (un tag mutable)', en: 'The tag :master, overwritten on every push to that branch (a mutable tag)' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'type=ref,event=branch usa el nombre de la rama como tag. Como la rama se mueve, :master se sobrescribe: ese es el problema que arregla el lab con tags por SHA.',
      en: 'type=ref,event=branch uses the branch name as the tag. Since the branch moves, :master gets overwritten: that is the problem the lab fixes with SHA tags.',
    },
  },
  {
    id: '04-btp-3',
    topic: '04-cicd',
    text: {
      es: 'El workflow tiene paths-ignore: [\'k8s/**\']. ¿Es un error de cara a usar GitOps después?',
      en: 'The workflow has paths-ignore: [\'k8s/**\']. Is that a mistake given we will use GitOps later?',
    },
    options: [
      { id: 'a', text: { es: 'Sí: CD nunca podrá ver los manifiestos si CI los ignora', en: 'Yes: CD will never be able to see the manifests if CI ignores them' } },
      { id: 'b', text: { es: 'No: la separación es correcta. CI vigila el código y produce imágenes; CD vigila los manifiestos k8s/** y los aplica. Cada uno mira su parte', en: 'No: the separation is correct. CI watches code and produces images; CD watches the k8s/** manifests and applies them. Each one looks at its own part' } },
      { id: 'c', text: { es: 'Sí: habría que quitar el paths-ignore para que CI reconstruya en cada cambio de manifiesto', en: 'Yes: you should drop paths-ignore so CI rebuilds on every manifest change' } },
      { id: 'd', text: { es: 'No importa, porque GitOps no usa git', en: 'It does not matter, because GitOps does not use git' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Un cambio de manifiesto no cambia la imagen, así que CI no debe reconstruir. CD (módulo 5) es otro pipeline que vigila k8s/**. La separación por paths-ignore mantiene cada uno en su carril.',
      en: 'A manifest change does not change the image, so CI should not rebuild. CD (module 5) is a separate pipeline that watches k8s/**. The paths-ignore separation keeps each one in its lane.',
    },
  },
];
