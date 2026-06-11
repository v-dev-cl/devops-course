import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '07-3p-1',
    topic: '07-observabilidad',
    text: {
      es: 'Tu dashboard muestra que la tasa de error de un servicio subió a 5%. ¿Qué señal abres para saber *por qué* y ver el stack trace?',
      en: 'Your dashboard shows a service\'s error rate climbed to 5%. Which signal do you open to find out *why* and see the stack trace?',
    },
    options: [
      { id: 'a', text: { es: 'Los logs: contienen el detalle del evento, incluido el stack trace', en: 'The logs: they hold the event detail, including the stack trace' } },
      { id: 'b', text: { es: 'Otra métrica: las métricas explican el porqué', en: 'Another metric: metrics explain the why' } },
      { id: 'c', text: { es: 'El uso de CPU del nodo', en: 'The node\'s CPU usage' } },
      { id: 'd', text: { es: 'Ninguna, la métrica ya te dio todo lo que necesitas', en: 'None, the metric already gave you everything you need' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Las métricas te dicen cuánto y cuándo, pero no por qué. El detalle del evento y el stack trace viven en los logs.',
      en: 'Metrics tell you how much and when, but not why. The event detail and stack trace live in the logs.',
    },
  },
  {
    id: '07-3p-2',
    topic: '07-observabilidad',
    text: {
      es: 'Una request lenta cruza gateway → catalog → pricing → Mongo. ¿Qué señal responde mejor "¿en qué eslabón se fue el tiempo?"?',
      en: 'A slow request crosses gateway → catalog → pricing → Mongo. Which signal best answers "which link ate the time?"',
    },
    options: [
      { id: 'a', text: { es: 'Un counter de requests totales', en: 'A counter of total requests' } },
      { id: 'b', text: { es: 'Los logs de texto plano de cada servicio por separado', en: 'Each service\'s plain-text logs, separately' } },
      { id: 'c', text: { es: 'Una traza distribuida: muestra el recorrido y el tiempo por servicio', en: 'A distributed trace: it shows the journey and time per service' } },
      { id: 'd', text: { es: 'Un gauge de memoria', en: 'A memory gauge' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Las trazas reconstruyen el recorrido de una request a través de varios servicios y muestran cuánto tiempo gastó en cada eslabón.',
      en: 'Traces reconstruct a request\'s journey across several services and show how much time it spent in each link.',
    },
  },
  {
    id: '07-3p-3',
    topic: '07-observabilidad',
    text: {
      es: '¿Cuál distingue mejor monitoreo de observabilidad?',
      en: 'Which best distinguishes monitoring from observability?',
    },
    options: [
      { id: 'a', text: { es: 'Monitoreo usa Grafana; observabilidad usa Prometheus', en: 'Monitoring uses Grafana; observability uses Prometheus' } },
      { id: 'b', text: { es: 'Monitoreo vigila preguntas que ya sabes hacer; observabilidad te deja responder preguntas no anticipadas sin desplegar código', en: 'Monitoring watches questions you already know to ask; observability lets you answer unanticipated questions without shipping code' } },
      { id: 'c', text: { es: 'Son sinónimos exactos', en: 'They are exact synonyms' } },
      { id: 'd', text: { es: 'Observabilidad solo aplica a la nube; monitoreo a on-premise', en: 'Observability only applies to the cloud; monitoring to on-premise' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Monitoreo responde preguntas conocidas (¿está arriba?); observabilidad te deja explorar preguntas nuevas durante un incidente sin tocar el código.',
      en: 'Monitoring answers known questions (is it up?); observability lets you explore new questions during an incident without touching code.',
    },
  },
];
