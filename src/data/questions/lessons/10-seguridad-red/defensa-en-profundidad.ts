import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '10-dep-1',
    topic: '10-seguridad-red',
    text: {
      es: 'Tu firewall solo deja pasar a una allowlist con las IPs de tus propios nodos. ¿Cuál es el riesgo que esa allowlist NO cubre?',
      en: 'Your firewall only lets through an allowlist of your own nodes’ IPs. Which risk does that allowlist NOT cover?',
    },
    options: [
      { id: 'a', text: { es: 'Que un atacante de internet escanee tus puertos desde afuera', en: 'An internet attacker scanning your ports from outside' } },
      { id: 'b', text: { es: 'Que el certificado TLS del borde expire', en: 'The edge TLS certificate expiring' } },
      { id: 'c', text: { es: 'Que un nodo de adentro quede comprometido y, como todo confía en todo, llegue a cualquier datastore sin auth', en: 'An inside node getting compromised and, since everything trusts everything, reaching any datastore with no auth' } },
      { id: 'd', text: { es: 'Que el proveedor de cloud cambie sus rangos de IP', en: 'The cloud provider changing its IP ranges' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'La allowlist es un control de perímetro (norte-sur): filtra a los de afuera, pero adentro deja una zona de confianza plana. Si un nodo cae, todo le habla a todo y un solo host comprometido alcanza cada caché/DB sin autenticación. Eso es justo lo que la allowlist no protege (tráfico este-oeste).',
      en: 'The allowlist is a perimeter control (north-south): it filters outsiders, but inside it leaves a flat trust zone. If a node falls, everything talks to everything and one compromised host reaches every cache/DB with no authentication. That is exactly what the allowlist does not protect (east-west traffic).',
    },
  },
  {
    id: '10-dep-2',
    topic: '10-seguridad-red',
    text: {
      es: 'Alguien argumenta: "no le pongamos contraseña a Redis ni a Mongo, total solo nuestros servidores los alcanzan en la red privada". ¿Por qué sigue siendo mala idea?',
      en: 'Someone argues: "let’s not put a password on Redis or Mongo, only our servers can reach them on the private network anyway". Why is it still a bad idea?',
    },
    options: [
      { id: 'a', text: { es: 'Porque Redis y Mongo no soportan autenticación', en: 'Because Redis and Mongo do not support authentication' } },
      { id: 'b', text: { es: 'Porque la red privada es más lenta sin auth', en: 'Because the private network is slower without auth' } },
      { id: 'c', text: { es: 'Porque la auth solo importa para datos cifrados en reposo', en: 'Because auth only matters for data encrypted at rest' } },
      { id: 'd', text: { es: '"Estar en la red" no es una identidad: si un servidor de la flota se compromete, un datastore sin auth es movimiento lateral gratis hacia todo lo demás', en: '"Being on the network" is not an identity: if one fleet server is compromised, an unauthenticated datastore is free lateral movement to everything else' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Zero-trust parte de que la red no es una identidad. "Solo nuestros servidores lo alcanzan" es una suposición que un host comprometido rompe en un segundo: un Redis/Mongo/Memcached/Elasticsearch sin auth en la red interna es la receta clásica del movimiento lateral. Autenticar adentro detiene al atacante que ya cruzó el perímetro.',
      en: 'Zero-trust starts from the fact that the network is not an identity. "Only our servers can reach it" is an assumption a compromised host breaks in a second: an unauthenticated Redis/Mongo/Memcached/Elasticsearch on the internal network is the classic recipe for lateral movement. Authenticating inside stops the attacker who already crossed the perimeter.',
    },
  },
  {
    id: '10-dep-3',
    topic: '10-seguridad-red',
    text: {
      es: 'Aplicas defensa en profundidad sobre tu flota. ¿Qué combinación de capas refleja mejor la idea, más allá del firewall de perímetro?',
      en: 'You apply defense in depth to your fleet. Beyond the perimeter firewall, which combination of layers best reflects the idea?',
    },
    options: [
      { id: 'a', text: { es: 'Solo subir el firewall del proveedor a una allowlist más estricta', en: 'Just tighten the provider firewall to a stricter allowlist' } },
      { id: 'b', text: { es: 'Auth servicio a servicio + credenciales acotadas por servicio (mínimo privilegio) + segmentación con NetworkPolicy/subredes separadas', en: 'Service-to-service auth + scoped per-service credentials (least privilege) + segmentation with NetworkPolicy / separate subnets' } },
      { id: 'c', text: { es: 'Cambiar las IPs de los datastores cada cierto tiempo para que no las descubran', en: 'Rotate the datastores’ IPs periodically so they don’t get discovered' } },
      { id: 'd', text: { es: 'Una sola credencial compartida por toda la flota, fácil de rotar', en: 'A single credential shared by the whole fleet, easy to rotate' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Defensa en profundidad apila capas que no dependen del perímetro: autenticar y autorizar servicio a servicio aunque la conexión venga de adentro, dar a cada servicio su propia credencial acotada (mínimo privilegio) para limitar el daño si cae, y segmentar (NetworkPolicy, subredes separadas) para recortar el blast radius. Una credencial compartida o esconder IPs no son capas reales.',
      en: 'Defense in depth stacks layers that don’t depend on the perimeter: authenticate and authorize service to service even when the connection comes from inside, give each service its own scoped credential (least privilege) to limit the damage if it falls, and segment (NetworkPolicy, separate subnets) to cut the blast radius. A shared credential or hiding IPs are not real layers.',
    },
  },
];
