import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '08-pan-1',
    topic: '08-cloud-aws',
    text: {
      es: '¿Qué relación hay entre región y zona de disponibilidad (AZ) en AWS?',
      en: 'What is the relationship between a region and an availability zone (AZ) in AWS?',
    },
    options: [
      { id: 'a', text: { es: 'Una región está dentro de una AZ', en: 'A region is inside an AZ' } },
      { id: 'b', text: { es: 'Una región contiene varias AZs, que son datacenters separados conectados con baja latencia', en: 'A region contains several AZs, which are separate datacenters connected with low latency' } },
      { id: 'c', text: { es: 'Región y AZ son sinónimos', en: 'Region and AZ are synonyms' } },
      { id: 'd', text: { es: 'Una AZ abarca varias regiones para dar alta disponibilidad', en: 'An AZ spans several regions to provide high availability' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Una región es una zona geográfica con varias AZs (datacenters físicamente separados). Distribuir en varias AZs es lo que da HA si una cae.',
      en: 'A region is a geographic area with several AZs (physically separate datacenters). Spreading across AZs is what gives HA if one fails.',
    },
  },
  {
    id: '08-pan-2',
    topic: '08-cloud-aws',
    text: {
      es: 'Desde Santiago, ¿cuál es la región AWS completa más cercana y qué es scl1?',
      en: 'From Santiago, which is the nearest full AWS region, and what is scl1?',
    },
    options: [
      { id: 'a', text: { es: 'us-east-1 es la más cercana; scl1 es una región completa en Chile', en: 'us-east-1 is the nearest; scl1 is a full region in Chile' } },
      { id: 'b', text: { es: 'No hay nada cerca; toda AWS está solo en EE.UU.', en: 'Nothing is close; all of AWS is only in the US' } },
      { id: 'c', text: { es: 'sa-east-1 (São Paulo) es la más cercana; scl1 es la Local Zone de Santiago (padre us-east-1) con catálogo reducido', en: 'sa-east-1 (São Paulo) is the nearest; scl1 is the Santiago Local Zone (parent us-east-1) with a reduced catalog' } },
      { id: 'd', text: { es: 'scl1 reemplaza a sa-east-1 y tiene todos los servicios', en: 'scl1 replaces sa-east-1 and has all services' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'La región completa más cercana es sa-east-1 (São Paulo). scl1 es la Local Zone de Santiago, cuyo padre es us-east-1, con un catálogo de servicios reducido.',
      en: 'The nearest full region is sa-east-1 (São Paulo). scl1 is the Santiago Local Zone, whose parent is us-east-1, with a reduced service catalog.',
    },
  },
  {
    id: '08-pan-3',
    topic: '08-cloud-aws',
    text: {
      es: '¿Cuál es la trampa de costo que más infla facturas inesperadas en AWS?',
      en: 'Which cost trap most inflates unexpected AWS bills?',
    },
    options: [
      { id: 'a', text: { es: 'El costo de crear una cuenta', en: 'The cost of creating an account' } },
      { id: 'b', text: { es: 'El tráfico de entrada (ingress) hacia AWS', en: 'Inbound (ingress) traffic into AWS' } },
      { id: 'c', text: { es: 'El número de regiones que visitas en la consola', en: 'The number of regions you visit in the console' } },
      { id: 'd', text: { es: 'El egress: el tráfico que sale hacia internet, sobre todo en patrones chatty', en: 'Egress: traffic leaving toward the internet, especially in chatty patterns' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'El egress (tráfico de salida a internet) se cobra y un patrón chatty entre tu k3s y AWS puede generar una factura sorpresa. El ingress suele ser gratis.',
      en: 'Egress (outbound traffic to the internet) is billed, and a chatty pattern between your k3s and AWS can produce a surprise bill. Ingress is usually free.',
    },
  },
];
