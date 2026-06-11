import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '07-le-1',
    topic: '07-observabilidad',
    text: {
      es: '¿Cuál es la ventaja principal de un log estructurado en JSON sobre uno de texto plano?',
      en: 'What is the main advantage of a structured JSON log over a plain-text one?',
    },
    options: [
      { id: 'a', text: { es: 'Ocupa menos espacio en disco siempre', en: 'It always takes less disk space' } },
      { id: 'b', text: { es: 'Es consultable: filtras por campos como service o topic y saltas a un trace_id exacto, sin regex frágiles', en: 'It is queryable: you filter by fields like service or topic and jump to an exact trace_id, no brittle regex' } },
      { id: 'c', text: { es: 'Se ve más bonito en la consola', en: 'It looks prettier in the console' } },
      { id: 'd', text: { es: 'No necesita niveles de log', en: 'It does not need log levels' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El JSON es un objeto con campos: la máquina lo filtra y agrupa por service/topic y salta a un trace_id exacto. El texto plano hay que parsearlo con regex frágiles.',
      en: 'JSON is an object with fields: the machine filters and groups by service/topic and jumps to an exact trace_id. Plain text must be parsed with brittle regex.',
    },
  },
  {
    id: '07-le-2',
    topic: '07-observabilidad',
    text: {
      es: 'Una request gatilla un job de Kafka que el worker procesa después. ¿Cómo propagas el correlation id para no perder el rastro en el salto asíncrono?',
      en: 'A request triggers a Kafka job the worker processes later. How do you propagate the correlation id so you do not lose the trail at the async hop?',
    },
    options: [
      { id: 'a', text: { es: 'No se puede correlacionar a través de una cola', en: 'You cannot correlate across a queue' } },
      { id: 'b', text: { es: 'Confías en que la marca de tiempo basta para unir los eventos', en: 'You trust the timestamp is enough to join the events' } },
      { id: 'c', text: { es: 'Lo guardas solo en el logger del gateway', en: 'You keep it only in the gateway\'s logger' } },
      { id: 'd', text: { es: 'Incluyes el trace_id dentro del payload del mensaje; el worker lo saca y lo pone en su logger', en: 'You include the trace_id inside the message payload; the worker pulls it out and puts it on its logger' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'En jobs de cola el id debe viajar dentro del payload del mensaje. El consumidor lo extrae y lo adjunta a su logger (logger.child), manteniendo el hilo a través del salto asíncrono.',
      en: 'In queue jobs the id must travel inside the message payload. The consumer extracts it and attaches it to its logger (logger.child), keeping the thread across the async hop.',
    },
  },
  {
    id: '07-le-3',
    topic: '07-observabilidad',
    text: {
      es: 'En k3s sin presupuesto para un SaaS, kubectl logs se te queda corto porque no busca across servicios ni sobrevive al pod. ¿Cuál es el siguiente paso barato?',
      en: 'On k3s with no budget for a SaaS, kubectl logs falls short because it does not search across services or survive the pod. What is the cheap next step?',
    },
    options: [
      { id: 'a', text: { es: 'Loki: un agente recolecta los stdout, los indexa por labels (barato) y los consultas desde el mismo Grafana', en: 'Loki: an agent collects the stdouts, indexes them by labels (cheap), and you query them from the same Grafana' } },
      { id: 'b', text: { es: 'Volver a console.log y mirar la consola', en: 'Go back to console.log and watch the console' } },
      { id: 'c', text: { es: 'Guardar todos los logs en una variable de entorno', en: 'Store all logs in an environment variable' } },
      { id: 'd', text: { es: 'Desactivar los logs en producción', en: 'Disable logs in production' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Loki es el "Prometheus de los logs": indexa por labels en vez de contenido completo (por eso es barato) y se consulta desde Grafana. Es el upgrade natural cuando kubectl logs no alcanza.',
      en: 'Loki is the "Prometheus of logs": it indexes by labels instead of full content (that is why it is cheap) and you query it from Grafana. It is the natural upgrade when kubectl logs falls short.',
    },
  },
];
