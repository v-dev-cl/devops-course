import type { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'm07-1',
    topic: '07-observabilidad',
    text: {
      es: '¿Cuáles son los tres pilares de la observabilidad?',
      en: 'What are the three pillars of observability?',
    },
    options: [
      { id: 'b', text: { es: 'CPU, memoria y disco', en: 'CPU, memory, and disk' } },
      { id: 'c', text: { es: 'Alertas, dashboards y runbooks', en: 'Alerts, dashboards, and runbooks' } },
      { id: 'a', text: { es: 'Logs, métricas y trazas', en: 'Logs, metrics, and traces' } },
      { id: 'd', text: { es: 'Build, test y deploy', en: 'Build, test, and deploy' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Los tres pilares son logs (eventos), métricas (números agregados en el tiempo) y trazas (el camino de una petición entre servicios).',
      en: 'The three pillars are logs (events), metrics (aggregated numbers over time), and traces (a request’s path across services).',
    },
  },
  {
    id: 'm07-2',
    topic: '07-observabilidad',
    text: {
      es: '¿Cómo obtiene Prometheus las métricas de tus microservicios?',
      en: 'How does Prometheus get metrics from your microservices?',
    },
    options: [
      { id: 'b', text: { es: 'Los servicios le hacen push de cada métrica al servidor', en: 'Services push every metric to the server' } },
      { id: 'a', text: { es: 'Prometheus hace scrape (pull) del endpoint /metrics de cada target', en: 'Prometheus scrapes (pulls) each target’s /metrics endpoint' } },
      { id: 'c', text: { es: 'Lee las métricas desde los logs en disco', en: 'It reads metrics from logs on disk' } },
      { id: 'd', text: { es: 'Las recibe por un webhook de cada deploy', en: 'It receives them via a webhook on each deploy' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Prometheus usa un modelo pull: scrapea periódicamente el endpoint /metrics que cada servicio expone; el push es la excepción (Pushgateway para jobs efímeros).',
      en: 'Prometheus uses a pull model: it periodically scrapes the /metrics endpoint each service exposes; push is the exception (Pushgateway for ephemeral jobs).',
    },
  },
  {
    id: 'm07-3',
    topic: '07-observabilidad',
    text: {
      es: '¿Por qué es peligroso poner un user_id como label de una métrica Prometheus?',
      en: 'Why is it dangerous to put a user_id as a label on a Prometheus metric?',
    },
    options: [
      { id: 'd', text: { es: 'Dispara la cardinalidad: cada valor crea una serie temporal nueva y revienta la memoria', en: 'It explodes cardinality: each value creates a new time series and blows up memory' } },
      { id: 'b', text: { es: 'Porque los labels deben ser numéricos', en: 'Because labels must be numeric' } },
      { id: 'c', text: { es: 'Porque Prometheus no soporta labels', en: 'Because Prometheus doesn’t support labels' } },
      { id: 'a', text: { es: 'Porque los user_id son secretos y no deben loguearse', en: 'Because user_ids are secrets and must not be logged' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Cada combinación única de labels es una serie temporal; un label de alta cardinalidad como user_id genera millones de series y agota la memoria de Prometheus.',
      en: 'Each unique label combination is a time series; a high-cardinality label like user_id generates millions of series and exhausts Prometheus’ memory.',
    },
  },
  {
    id: 'm07-4',
    topic: '07-observabilidad',
    text: {
      es: 'Para reducir la fatiga de alertas, ¿sobre qué conviene alertar?',
      en: 'To reduce alert fatigue, what should you alert on?',
    },
    options: [
      { id: 'b', text: { es: 'Cada pico de CPU por encima del 50% en cualquier nodo', en: 'Every CPU spike above 50% on any node' } },
      { id: 'c', text: { es: 'Cada vez que se despliega una versión nueva', en: 'Every time a new version is deployed' } },
      { id: 'd', text: { es: 'Todos los logs de nivel INFO', en: 'All INFO-level logs' } },
      { id: 'a', text: { es: 'Síntomas que afectan al usuario (latencia, errores) ligados a un SLO', en: 'User-facing symptoms (latency, errors) tied to an SLO' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Alertar sobre síntomas que duelen al usuario y que consumen el error budget de un SLO genera alertas accionables; alertar sobre causas ruidosas produce fatiga.',
      en: 'Alerting on user-facing symptoms that burn an SLO’s error budget yields actionable alerts; alerting on noisy causes produces fatigue.',
    },
  },
  {
    id: 'm07-5',
    topic: '07-observabilidad',
    text: {
      es: '¿Qué ventaja principal tiene el logging estructurado (JSON) sobre el texto plano?',
      en: 'What is the main advantage of structured logging (JSON) over plain text?',
    },
    options: [
      { id: 'd', text: { es: 'Permite consultar y filtrar por campos (ej. correlationId) sin parsear con regex', en: 'It lets you query and filter by fields (e.g. correlationId) without regex parsing' } },
      { id: 'b', text: { es: 'Ocupa menos espacio en disco siempre', en: 'It always takes less disk space' } },
      { id: 'c', text: { es: 'No necesita timestamps', en: 'It doesn’t need timestamps' } },
      { id: 'a', text: { es: 'Es más fácil de leer para un humano en la terminal', en: 'It’s easier for a human to read in the terminal' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Con campos estructurados puedes filtrar y agregar logs por atributos (correlationId, nivel, servicio) en tu backend de logs, en vez de depender de regex frágiles sobre texto.',
      en: 'With structured fields you can filter and aggregate logs by attributes (correlationId, level, service) in your log backend, instead of relying on brittle regex over text.',
    },
  },
];
