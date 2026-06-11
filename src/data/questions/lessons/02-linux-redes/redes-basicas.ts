import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '02-red-1',
    topic: '02-linux-redes',
    text: {
      es: 'Dentro de un pod de Kubernetes, ¿qué resuelve los nombres como search-api.search.svc.cluster.local?',
      en: 'Inside a Kubernetes pod, what resolves names like search-api.search.svc.cluster.local?',
    },
    options: [
      { id: 'a', text: { es: 'El DNS público de Google (8.8.8.8)', en: 'Google\'s public DNS (8.8.8.8)' } },
      { id: 'b', text: { es: 'El archivo /etc/hosts del nodo', en: 'The node\'s /etc/hosts file' } },
      { id: 'c', text: { es: 'CoreDNS, el DNS interno del cluster', en: 'CoreDNS, the cluster\'s internal DNS' } },
      { id: 'd', text: { es: 'El router de la red local', en: 'The local network router' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El resolv.conf del pod apunta a CoreDNS, que resuelve los nombres *.svc.cluster.local a la ClusterIP del Service y delega los nombres externos al DNS de upstream.',
      en: 'The pod\'s resolv.conf points to CoreDNS, which resolves *.svc.cluster.local names to the Service\'s ClusterIP and delegates external names to the upstream DNS.',
    },
  },
  {
    id: '02-red-2',
    topic: '02-linux-redes',
    text: {
      es: 'Esperas que tu worker escuche en el puerto 4000. ¿Qué comando te dice qué proceso abrió ese puerto?',
      en: 'You expect your worker to listen on port 4000. Which command tells you which process opened that port?',
    },
    options: [
      { id: 'a', text: { es: 'ss -tlnp | grep 4000', en: 'ss -tlnp | grep 4000' } },
      { id: 'b', text: { es: 'dig +short 4000', en: 'dig +short 4000' } },
      { id: 'c', text: { es: 'ping localhost:4000', en: 'ping localhost:4000' } },
      { id: 'd', text: { es: 'curl 4000', en: 'curl 4000' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'ss -tlnp lista sockets TCP en escucha (-l) con número de puerto (-n) y el proceso dueño (-p). dig es para DNS, ping prueba ICMP y no entiende puertos, y curl necesita una URL completa.',
      en: 'ss -tlnp lists listening (-l) TCP sockets with the port number (-n) and the owning process (-p). dig is for DNS, ping tests ICMP and doesn\'t understand ports, and curl needs a full URL.',
    },
  },
  {
    id: '02-red-3',
    topic: '02-linux-redes',
    text: {
      es: 'curl -v a un servicio muestra "Connected to ..." y luego "< HTTP/1.1 503". ¿En qué capa está la falla?',
      en: 'curl -v to a service shows "Connected to ..." and then "< HTTP/1.1 503". Which layer is the failure in?',
    },
    options: [
      { id: 'a', text: { es: 'Capa DNS: el nombre no resuelve', en: 'DNS layer: the name doesn\'t resolve' } },
      { id: 'b', text: { es: 'Capa TCP: nadie acepta la conexión', en: 'TCP layer: nobody accepts the connection' } },
      { id: 'c', text: { es: 'Capa física: el cable de red', en: 'Physical layer: the network cable' } },
      { id: 'd', text: { es: 'Capa aplicación: el nombre resuelve y el TCP conecta, pero el servicio responde con error', en: 'Application layer: the name resolves and TCP connects, but the service responds with an error' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Si curl ya imprimió "Connected" y recibió un código HTTP, descartaste DNS y TCP: la app respondió. Un 503 es un error de la aplicación, no de red.',
      en: 'If curl already printed "Connected" and received an HTTP code, you\'ve ruled out DNS and TCP: the app replied. A 503 is an application error, not a network one.',
    },
  },
];
