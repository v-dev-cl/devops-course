import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '04-cicd-1',
    topic: '04-cicd',
    text: {
      es: '¿Cuál es el trade-off principal entre CD push y CD pull?',
      en: 'What is the main trade-off between push CD and pull CD?',
    },
    options: [
      { id: 'a', text: { es: 'Push exige credenciales del cluster en GitHub (superficie de ataque); pull deja al agente dentro del cluster traer el estado, sin exponer credenciales', en: 'Push requires cluster credentials in GitHub (attack surface); pull lets an in-cluster agent fetch the state, exposing no credentials' } },
      { id: 'b', text: { es: 'Push es siempre más lento que pull', en: 'Push is always slower than pull' } },
      { id: 'c', text: { es: 'Pull no funciona con Kubernetes', en: 'Pull does not work with Kubernetes' } },
      { id: 'd', text: { es: 'No hay diferencia real entre ambos', en: 'There is no real difference between the two' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'En push, CI corre kubectl con un KUBECONFIG guardado en GitHub. En pull, el agente vive en el cluster y nadie afuera tiene acceso de escritura.',
      en: 'In push, CI runs kubectl with a KUBECONFIG stored in GitHub. In pull, the agent lives in the cluster and nobody outside has write access.',
    },
  },
  {
    id: '04-cicd-2',
    topic: '04-cicd',
    text: {
      es: '¿Por qué el modelo pull (GitOps) es el que funciona para un k3s on-premise detrás de NAT?',
      en: 'Why is the pull (GitOps) model the one that works for an on-premise k3s behind NAT?',
    },
    options: [
      { id: 'a', text: { es: 'Porque GitHub puede abrir un puerto en tu router automáticamente', en: 'Because GitHub can automatically open a port on your router' } },
      { id: 'b', text: { es: 'Porque detrás de NAT GitHub no puede iniciar conexión hacia tu k3s, pero tu k3s sí puede salir hacia GitHub; el agente hace git pull desde adentro', en: 'Because behind NAT GitHub cannot initiate a connection to your k3s, but your k3s can reach out to GitHub; the agent does git pull from the inside' } },
      { id: 'c', text: { es: 'Porque pull no usa la red', en: 'Because pull does not use the network' } },
      { id: 'd', text: { es: 'Porque NAT bloquea las conexiones salientes', en: 'Because NAT blocks outbound connections' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Detrás de NAT no hay IP pública ni puerto abierto, así que push tendría que perforar la red. Pull invierte la dirección: la conexión sale del cluster, no entra.',
      en: 'Behind NAT there is no public IP or open port, so push would have to punch through the network. Pull reverses the direction: the connection goes out of the cluster, not in.',
    },
  },
  {
    id: '04-cicd-3',
    topic: '04-cicd',
    text: {
      es: '¿Qué es el "drift" y cómo lo maneja un agente pull?',
      en: 'What is "drift" and how does a pull agent handle it?',
    },
    options: [
      { id: 'a', text: { es: 'Es cuando una imagen pesa demasiado; el agente la comprime', en: 'It is when an image is too heavy; the agent compresses it' } },
      { id: 'b', text: { es: 'Es la latencia de red; el agente la reduce con caché', en: 'It is network latency; the agent reduces it with caching' } },
      { id: 'c', text: { es: 'Es cuando el estado real del cluster se aparta del estado deseado en git (p.ej. un kubectl edit a mano); el agente compara real vs deseado y revierte la diferencia (auto-sanación)', en: 'It is when the cluster\'s actual state diverges from the desired state in git (e.g. a manual kubectl edit); the agent compares actual vs desired and reverts the difference (self-healing)' } },
      { id: 'd', text: { es: 'Es un tipo de release; el agente lo etiqueta con semver', en: 'It is a kind of release; the agent tags it with semver' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El drift es la divergencia entre cluster y git. Un agente pull reconcilia continuamente: vuelve el cluster a lo que git dice, sin intervención manual.',
      en: 'Drift is the divergence between cluster and git. A pull agent continuously reconciles: it returns the cluster to what git says, with no manual intervention.',
    },
  },
];
