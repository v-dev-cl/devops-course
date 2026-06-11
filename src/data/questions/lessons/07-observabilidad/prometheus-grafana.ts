import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '07-pg-1',
    topic: '07-observabilidad',
    text: {
      es: 'En el modelo pull de Prometheus, ¿quién inicia la transferencia de métricas?',
      en: 'In Prometheus\' pull model, who initiates the metrics transfer?',
    },
    options: [
      { id: 'a', text: { es: 'El servicio hace push de sus métricas a Prometheus cada 15 s', en: 'The service pushes its metrics to Prometheus every 15 s' } },
      { id: 'b', text: { es: 'Grafana scrapea directamente al servicio', en: 'Grafana scrapes the service directly' } },
      { id: 'c', text: { es: 'Alertmanager pide las métricas al servicio', en: 'Alertmanager requests the metrics from the service' } },
      { id: 'd', text: { es: 'Prometheus hace un GET periódico al endpoint /metrics del servicio', en: 'Prometheus does a periodic GET to the service\'s /metrics endpoint' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Pull = Prometheus va a buscar: hace un GET a /metrics de cada target. Si el scrape falla, sabe al instante que el target cayó.',
      en: 'Pull = Prometheus fetches: it GETs /metrics of each target. If the scrape fails, it knows instantly the target is down.',
    },
  },
  {
    id: '07-pg-2',
    topic: '07-observabilidad',
    text: {
      es: 'Quieres la tasa de jobs procesados por segundo en los últimos 5 minutos, agrupada por topic. ¿Qué PromQL es correcta?',
      en: 'You want the rate of processed jobs per second over the last 5 minutes, grouped by topic. Which PromQL is correct?',
    },
    options: [
      { id: 'a', text: { es: 'worker_jobs_processed_total (el counter crudo)', en: 'worker_jobs_processed_total (the raw counter)' } },
      { id: 'b', text: { es: 'sum by (topic) (rate(worker_jobs_processed_total[5m]))', en: 'sum by (topic) (rate(worker_jobs_processed_total[5m]))' } },
      { id: 'c', text: { es: 'rate(worker_jobs_processed_total) sin rango', en: 'rate(worker_jobs_processed_total) with no range' } },
      { id: 'd', text: { es: 'histogram_quantile(0.95, worker_jobs_processed_total)', en: 'histogram_quantile(0.95, worker_jobs_processed_total)' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'rate() necesita un counter y un range vector ([5m]); sum by (topic) lo agrega por ese label. El counter crudo no sirve y rate() sin rango es inválido.',
      en: 'rate() needs a counter and a range vector ([5m]); sum by (topic) aggregates by that label. The raw counter is useless and rate() without a range is invalid.',
    },
  },
  {
    id: '07-pg-3',
    topic: '07-observabilidad',
    text: {
      es: '¿Por qué NO debes poner un label user_id en una métrica de Prometheus?',
      en: 'Why should you NOT put a user_id label on a Prometheus metric?',
    },
    options: [
      { id: 'a', text: { es: 'Porque los labels solo aceptan números', en: 'Because labels only accept numbers' } },
      { id: 'b', text: { es: 'Porque Prometheus encripta los labels y se vuelve lento', en: 'Because Prometheus encrypts labels and gets slow' } },
      { id: 'c', text: { es: 'Cada valor distinto crea una serie temporal nueva; un id de alta cardinalidad genera millones y revienta Prometheus', en: 'Each distinct value creates a new time series; a high-cardinality id spawns millions and blows up Prometheus' } },
      { id: 'd', text: { es: 'No hay problema, es una buena práctica para segmentar usuarios', en: 'No problem at all, it is good practice to segment users' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'La cardinalidad explota: una serie por usuario son millones de series y Prometheus se cae por memoria. Los ids de alta cardinalidad van a logs/trazas, no a labels.',
      en: 'Cardinality explodes: one series per user is millions of series and Prometheus dies of memory. High-cardinality ids go to logs/traces, not labels.',
    },
  },
];
