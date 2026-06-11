import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '03-cel-1',
    topic: '03-docker',
    text: {
      es: 'En compose, ¿qué garantiza depends_on por sí solo, sin condición?',
      en: 'In compose, what does depends_on guarantee on its own, without a condition?',
    },
    options: [
      { id: 'a', text: { es: 'Que el servicio dependido está listo para aceptar conexiones', en: 'That the depended-on service is ready to accept connections' } },
      { id: 'b', text: { es: 'Solo el orden de arranque del contenedor, no que el servicio adentro esté listo', en: 'Only the container startup order, not that the service inside is ready' } },
      { id: 'c', text: { es: 'Que ambos servicios compartan el mismo volumen', en: 'That both services share the same volume' } },
      { id: 'd', text: { es: 'Que el healthcheck pase automáticamente', en: 'That the healthcheck passes automatically' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Mongo puede tardar en aceptar conexiones tras arrancar su contenedor. Para esperar a que esté realmente listo se combina con condition: service_healthy y un healthcheck.',
      en: 'Mongo can take time to accept connections after its container starts. To wait until it is truly ready you combine it with condition: service_healthy and a healthcheck.',
    },
  },
  {
    id: '03-cel-2',
    topic: '03-docker',
    text: {
      es: '¿Para qué sirve un volumen con nombre como mongo-data?',
      en: 'What is a named volume like mongo-data for?',
    },
    options: [
      { id: 'a', text: { es: 'Para exponer un puerto al host', en: 'To expose a port to the host' } },
      { id: 'b', text: { es: 'Para inyectar variables de entorno', en: 'To inject environment variables' } },
      { id: 'c', text: { es: 'Para acelerar el build de la imagen', en: 'To speed up the image build' } },
      { id: 'd', text: { es: 'Para que los datos sobrevivan al ciclo de vida del contenedor: puedes hacer down y up sin perder la base', en: 'So data survives the container lifecycle: you can down and up without losing the database' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Por defecto, borrar un contenedor pierde lo que escribió. El volumen con nombre guarda los datos fuera del contenedor, montado en la ruta donde el servicio escribe (/data/db).',
      en: 'By default, deleting a container loses what it wrote. The named volume stores data outside the container, mounted at the path where the service writes (/data/db).',
    },
  },
  {
    id: '03-cel-3',
    topic: '03-docker',
    text: {
      es: '¿Cuándo es docker compose la herramienta equivocada?',
      en: 'When is docker compose the wrong tool?',
    },
    options: [
      { id: 'a', text: { es: 'Para desarrollo local', en: 'For local development' } },
      { id: 'b', text: { es: 'Para correr tests en CI', en: 'For running tests in CI' } },
      { id: 'c', text: { es: 'Como orquestador de producción: no reprograma entre nodos, no escala con balanceo real ni hace rolling updates con health gates', en: 'As a production orchestrator: it does not reschedule across nodes, scale with real load balancing, or do rolling updates with health gates' } },
      { id: 'd', text: { es: 'Para levantar mongo y redis juntos', en: 'To bring up mongo and redis together' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Compose brilla en local y CI. Para producción está Kubernetes (k3s), que aporta auto-recuperación y alta disponibilidad; usar compose en prod es el antipatrón.',
      en: 'Compose shines locally and in CI. Production is Kubernetes (k3s), which provides self-healing and high availability; using compose in prod is the anti-pattern.',
    },
  },
];
