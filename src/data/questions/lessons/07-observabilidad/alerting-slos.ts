import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '07-as-1',
    topic: '07-observabilidad',
    text: {
      es: '¿Cuál es una alerta basada en síntoma (la que deberías preferir)?',
      en: 'Which is a symptom-based alert (the kind you should prefer)?',
    },
    options: [
      { id: 'a', text: { es: 'El 5% de las requests a /search están fallando', en: '5% of requests to /search are failing' } },
      { id: 'b', text: { es: 'La CPU del nodo está sobre 90%', en: 'Node CPU is over 90%' } },
      { id: 'c', text: { es: 'Un pod se reinició', en: 'A pod restarted' } },
      { id: 'd', text: { es: 'El uso de memoria subió 200 MB', en: 'Memory usage rose 200 MB' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Una alerta de síntoma se dispara por lo que el usuario sufre (errores en /search). CPU, reinicios y memoria son causas internas que pueden no afectar a nadie: page only on user pain.',
      en: 'A symptom alert fires on what the user feels (errors on /search). CPU, restarts, and memory are internal causes that may affect no one: page only on user pain.',
    },
  },
  {
    id: '07-as-2',
    topic: '07-observabilidad',
    text: {
      es: 'SLO: 99% de las requests a /search bajo 500 ms en 30 días. Si /search recibe 2.000.000 de requests en ese período, ¿cuántas requests "malas" permite el error budget?',
      en: 'SLO: 99% of requests to /search under 500 ms over 30 days. If /search gets 2,000,000 requests in that period, how many "bad" requests does the error budget allow?',
    },
    options: [
      { id: 'a', text: { es: '200.000', en: '200,000' } },
      { id: 'b', text: { es: '2.000', en: '2,000' } },
      { id: 'c', text: { es: '99.000', en: '99,000' } },
      { id: 'd', text: { es: '20.000', en: '20,000' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'El error budget es el complemento del SLO: (1 − 0.99) × 2.000.000 = 0.01 × 2.000.000 = 20.000 requests malas permitidas en los 30 días.',
      en: 'The error budget is the complement of the SLO: (1 − 0.99) × 2,000,000 = 0.01 × 2,000,000 = 20,000 bad requests allowed over the 30 days.',
    },
  },
  {
    id: '07-as-3',
    topic: '07-observabilidad',
    text: {
      es: 'Tu servicio quema budget a burn rate 10× sostenido por una hora. ¿Qué significa y qué haces?',
      en: 'Your service is burning budget at a sustained 10× burn rate for an hour. What does it mean and what do you do?',
    },
    options: [
      { id: 'a', text: { es: 'Es solo ruido pasajero, lo ignoras', en: 'It is just passing noise, ignore it' } },
      { id: 'b', text: { es: 'Significa que ya se acabó el budget; no hay nada que hacer', en: 'It means the budget is already gone; nothing to do' } },
      { id: 'c', text: { es: 'A ese ritmo gastarías el budget de 30 días 10× más rápido (en ~3 días): es un incidente real que merece una página', en: 'At that pace you\'d spend the 30-day budget 10× faster (in ~3 days): a real incident worth a page' } },
      { id: 'd', text: { es: 'Burn rate 10× siempre es seguro de ignorar bajo cualquier duración', en: 'A 10× burn rate is always safe to ignore at any duration' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Burn rate 1× gasta todo el budget en la ventana completa; 10× lo gasta 10 veces más rápido. Sostenido por una hora es daño rápido y real: alertas. Un pico de 30 s sí sería ruido.',
      en: 'Burn rate 1× spends the whole budget over the full window; 10× spends it 10 times faster. Sustained for an hour it is fast, real damage: page. A 30 s spike would indeed be noise.',
    },
  },
];
