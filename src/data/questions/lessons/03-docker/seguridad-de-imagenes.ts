import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '03-sec-1',
    topic: '03-docker',
    text: {
      es: 'Copias un .env a una capa, lo usas en el build y al final haces RUN rm .env. ¿El secret está seguro?',
      en: 'You copy a .env into a layer, use it in the build, and at the end RUN rm .env. Is the secret safe?',
    },
    options: [
      { id: 'a', text: { es: 'Sí, rm lo elimina de la imagen', en: 'Yes, rm removes it from the image' } },
      { id: 'b', text: { es: 'Sí, mientras no publiques la imagen', en: 'Yes, as long as you do not publish the image' } },
      { id: 'c', text: { es: 'No: las capas son inmutables y acumulativas; el rm crea una capa nueva que oculta el archivo, pero la capa anterior con el secret sigue dentro', en: 'No: layers are immutable and cumulative; the rm creates a new layer that hides the file, but the earlier layer with the secret is still inside' } },
      { id: 'd', text: { es: 'No, pero docker scout lo borra al escanear', en: 'No, but docker scout deletes it when scanning' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Cualquiera con la imagen puede leer esa capa con docker history o extrayéndola. Un secret que tocó una capa está comprometido: rótalo y usa --mount=type=secret en build.',
      en: 'Anyone with the image can read that layer via docker history or by extracting it. A secret that touched a layer is compromised: rotate it and use --mount=type=secret at build.',
    },
  },
  {
    id: '03-sec-2',
    topic: '03-docker',
    text: {
      es: '¿Cuál es la razón principal para correr el contenedor como usuario no-root?',
      en: 'What is the main reason to run the container as a non-root user?',
    },
    options: [
      { id: 'a', text: { es: 'Reduce el tamaño de la imagen', en: 'It reduces the image size' } },
      { id: 'b', text: { es: 'Limita el daño si un atacante logra ejecución dentro del contenedor: queda contenido en vez de poder escribir en todo el filesystem e intentar escapar', en: 'It limits the damage if an attacker achieves execution inside the container: they stay contained instead of writing across the whole filesystem and trying to escape' } },
      { id: 'c', text: { es: 'Hace que el build use mejor el cache de capas', en: 'It makes the build use the layer cache better' } },
      { id: 'd', text: { es: 'Es obligatorio para hacer push a GHCR', en: 'It is required to push to GHCR' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Como root, un atacante con ejecución puede escribir en todo el filesystem del contenedor e intentar escapar por bugs del kernel. Como usuario sin privilegios, queda acotado.',
      en: 'As root, an attacker with execution can write across the container filesystem and try to escape through kernel bugs. As an unprivileged user, they are constrained.',
    },
  },
  {
    id: '03-sec-3',
    topic: '03-docker',
    text: {
      es: '¿Qué evita un .dockerignore bien configurado?',
      en: 'What does a well-configured .dockerignore prevent?',
    },
    options: [
      { id: 'a', text: { es: 'Que basura y secrets (.env, .git, node_modules) entren al build context y terminen en la imagen por un COPY . . descuidado', en: 'Junk and secrets (.env, .git, node_modules) entering the build context and ending up in the image through a careless COPY . .' } },
      { id: 'b', text: { es: 'Que el contenedor corra como root', en: 'The container from running as root' } },
      { id: 'c', text: { es: 'Que la imagen use una base demasiado grande', en: 'The image from using too large a base' } },
      { id: 'd', text: { es: 'Que el tag sea mutable', en: 'The tag from being mutable' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El build context es todo el directorio que se manda al daemon. Excluir .env y .git no es cosmético: evita embeber credenciales en una imagen que sube a un registry compartido.',
      en: 'The build context is the whole directory sent to the daemon. Excluding .env and .git is not cosmetic: it avoids embedding credentials in an image pushed to a shared registry.',
    },
  },
];
