import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '03-img-1',
    topic: '03-docker',
    text: {
      es: '¿Cuál es la diferencia entre una imagen y un contenedor?',
      en: 'What is the difference between an image and a container?',
    },
    options: [
      { id: 'a', text: { es: 'Son lo mismo con distinto nombre', en: 'They are the same thing with different names' } },
      { id: 'b', text: { es: 'La imagen es una plantilla inmutable; el contenedor es una instancia en ejecución de esa imagen', en: 'The image is an immutable template; the container is a running instance of that image' } },
      { id: 'c', text: { es: 'El contenedor es la plantilla y la imagen es la instancia', en: 'The container is the template and the image is the instance' } },
      { id: 'd', text: { es: 'La imagen corre en el registry y el contenedor en local', en: 'The image runs in the registry and the container runs locally' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'La imagen es la clase (plantilla congelada); el contenedor es el objeto (instancia con una capa de escritura encima).',
      en: 'The image is the class (frozen template); the container is the object (instance with a writable layer on top).',
    },
  },
  {
    id: '03-img-2',
    topic: '03-docker',
    text: {
      es: 'En un Dockerfile NestJS, ¿por qué copiar package.json y correr la instalación de deps ANTES de COPY . .?',
      en: 'In a NestJS Dockerfile, why copy package.json and run the dependency install BEFORE COPY . .?',
    },
    options: [
      { id: 'a', text: { es: 'Porque npm exige ese orden', en: 'Because npm requires that order' } },
      { id: 'b', text: { es: 'Por seguridad, para no exponer el código', en: 'For security, to avoid exposing the code' } },
      { id: 'c', text: { es: 'Para que la imagen final pese menos', en: 'So the final image weighs less' } },
      { id: 'd', text: { es: 'Para que el cache de la instalación de deps se reuse cuando solo cambia el código fuente', en: 'So the dependency-install cache is reused when only the source code changes' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Las deps cambian poco; el código en cada commit. Copiarlas primero deja la capa pesada de install cacheada hasta que cambie package.json o el lockfile.',
      en: 'Deps change rarely; code changes every commit. Copying them first keeps the heavy install layer cached until package.json or the lockfile changes.',
    },
  },
  {
    id: '03-img-3',
    topic: '03-docker',
    text: {
      es: '¿Qué pasa con el cache cuando una capa intermedia del Dockerfile se invalida?',
      en: 'What happens to the cache when an intermediate Dockerfile layer is invalidated?',
    },
    options: [
      { id: 'a', text: { es: 'Todas las capas que vienen DESPUÉS se reconstruyen, hayan cambiado o no', en: 'Every layer that comes AFTER it is rebuilt, whether it changed or not' } },
      { id: 'b', text: { es: 'Solo esa capa se reconstruye, las demás se reusan', en: 'Only that layer is rebuilt, the rest are reused' } },
      { id: 'c', text: { es: 'Se reconstruye toda la imagen desde el FROM', en: 'The whole image is rebuilt from the FROM' } },
      { id: 'd', text: { es: 'Docker aborta el build con error', en: 'Docker aborts the build with an error' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El cache es una racha que se corta en el primer cambio: invalidada una capa, todas las de abajo se reconstruyen aunque su contenido sea idéntico.',
      en: 'The cache is a streak that breaks at the first change: once a layer is invalidated, every layer below it rebuilds even if its content is identical.',
    },
  },
];
