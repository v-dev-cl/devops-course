import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '03-dms-1',
    topic: '03-docker',
    text: {
      es: '¿Por qué la imagen multi-stage final es mucho más chica que la single-stage naive?',
      en: 'Why is the final multi-stage image much smaller than the naive single-stage one?',
    },
    options: [
      { id: 'a', text: { es: 'Porque comprime las capas con gzip', en: 'Because it gzip-compresses the layers' } },
      { id: 'b', text: { es: 'Porque usa menos instrucciones RUN', en: 'Because it uses fewer RUN instructions' } },
      { id: 'c', text: { es: 'Porque la etapa runner solo copia dist/ y las deps de producción, dejando fuera el compilador, devDependencies y el código fuente', en: 'Because the runner stage only copies dist/ and production deps, leaving out the compiler, devDependencies, and source code' } },
      { id: 'd', text: { es: 'Porque borra node_modules después de copiarlo', en: 'Because it deletes node_modules after copying it' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El builder compila con todo el toolchain; el runner es una base limpia que recibe solo los artefactos de runtime. El compilador vivió y murió en el builder.',
      en: 'The builder compiles with the full toolchain; the runner is a clean base that receives only the runtime artifacts. The compiler lived and died in the builder.',
    },
  },
  {
    id: '03-dms-2',
    topic: '03-docker',
    text: {
      es: '¿Contra qué protege correr el proceso con USER node en vez de root?',
      en: 'What does running the process with USER node instead of root protect against?',
    },
    options: [
      { id: 'a', text: { es: 'Si un atacante logra ejecución dentro del contenedor, queda contenido en vez de poder escribir en todo el filesystem e intentar escapar', en: 'If an attacker achieves execution inside the container, they stay contained instead of being able to write across the whole filesystem and try to escape' } },
      { id: 'b', text: { es: 'Hace que la imagen pese menos', en: 'It makes the image weigh less' } },
      { id: 'c', text: { es: 'Acelera el arranque del contenedor', en: 'It speeds up container startup' } },
      { id: 'd', text: { es: 'Evita que el build use el cache de capas', en: 'It prevents the build from using the layer cache' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Es defensa en profundidad: barata de aplicar y valiosa cuando algo sale mal. node:24-alpine ya trae el usuario node sin privilegios listo para activar.',
      en: 'It is defense in depth: cheap to apply and valuable when something goes wrong. node:24-alpine already ships the unprivileged node user ready to activate.',
    },
  },
  {
    id: '03-dms-3',
    topic: '03-docker',
    text: {
      es: '¿Qué artefactos del builder copia la etapa runner a la imagen final?',
      en: 'Which builder artifacts does the runner stage copy into the final image?',
    },
    options: [
      { id: 'a', text: { es: 'El directorio src/ completo y los tests', en: 'The full src/ directory and the tests' } },
      { id: 'b', text: { es: 'Todo el filesystem del builder', en: 'The builder\'s entire filesystem' } },
      { id: 'c', text: { es: 'Solo el binario de node', en: 'Just the node binary' } },
      { id: 'd', text: { es: 'node_modules de producción (etapa prod-deps), dist/ compilado y package.json', en: 'production node_modules (prod-deps stage), compiled dist/, and package.json' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'COPY --from trae solo lo que corre en runtime: node_modules de la etapa prod-deps, dist/ de la etapa build y package.json (para type y metadata). Copiar src/ sería peso muerto.',
      en: 'COPY --from brings only what runs at runtime: node_modules from the prod-deps stage, dist/ from the build stage, and package.json (for type and metadata). Copying src/ would be dead weight.',
    },
  },
];
