import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-krp-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Cuál es la cadena de propiedad correcta cuando aplicas un Deployment?',
      en: 'What is the correct ownership chain when you apply a Deployment?',
    },
    options: [
      { id: 'a', text: { es: 'Pod → ReplicaSet → Deployment', en: 'Pod → ReplicaSet → Deployment' } },
      { id: 'b', text: { es: 'Deployment → ReplicaSet → Pod', en: 'Deployment → ReplicaSet → Pod' } },
      { id: 'c', text: { es: 'Deployment → Pod → Service', en: 'Deployment → Pod → Service' } },
      { id: 'd', text: { es: 'ReplicaSet → Deployment → Pod', en: 'ReplicaSet → Deployment → Pod' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El Deployment crea un ReplicaSet por versión del template, y el ReplicaSet crea y mantiene los Pods. Por eso borrar un pod no basta: su ReplicaSet lo recrea.',
      en: 'The Deployment creates a ReplicaSet per template version, and the ReplicaSet creates and keeps the Pods. That is why deleting a pod is not enough: its ReplicaSet recreates it.',
    },
  },
  {
    id: '05-krp-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Necesitas enrutar HTTP por host/path hacia varios Services y terminar TLS. ¿Qué objeto usas?',
      en: 'You need to route HTTP by host/path to several Services and terminate TLS. Which object do you use?',
    },
    options: [
      { id: 'a', text: { es: 'Un Service ClusterIP por cada destino', en: 'One ClusterIP Service per destination' } },
      { id: 'b', text: { es: 'Un NodePort en cada nodo', en: 'A NodePort on each node' } },
      { id: 'c', text: { es: 'Un Ingress, que es L7 y enruta hacia varios Services', en: 'An Ingress, which is L7 and routes to several Services' } },
      { id: 'd', text: { es: 'Un LoadBalancer por Service', en: 'A LoadBalancer per Service' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El Service da conectividad L4 (IP:puerto). El Ingress es L7: enruta HTTP por host/path hacia varios Services y es donde vive el TLS. Un Service no es un Ingress.',
      en: 'A Service gives L4 connectivity (IP:port). The Ingress is L7: it routes HTTP by host/path to several Services and is where TLS lives. A Service is not an Ingress.',
    },
  },
  {
    id: '05-krp-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Editas un ConfigMap consumido por envFrom. ¿Qué pasa con los pods que ya corren y cómo se arregla?',
      en: 'You edit a ConfigMap consumed via envFrom. What happens to the pods already running, and how is it fixed?',
    },
    options: [
      { id: 'a', text: { es: 'Se reinician solos al instante; no hay nada que arreglar', en: 'They restart on their own instantly; nothing to fix' } },
      { id: 'b', text: { es: 'El cluster los borra; se arregla con un Service nuevo', en: 'The cluster deletes them; fixed with a new Service' } },
      { id: 'c', text: { es: 'Fallan la liveness probe; se arregla subiendo el timeout', en: 'They fail the liveness probe; fixed by raising the timeout' } },
      { id: 'd', text: { es: 'No se reinician (las env vars se inyectan una vez al arrancar); los generadores con sufijo de hash de Kustomize cambian el nombre y disparan el rollout', en: 'They do not restart (env vars are injected once at startup); Kustomize hash-suffixed generators change the name and trigger the rollout' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'envFrom inyecta las variables una sola vez al arrancar el contenedor, así que los pods quedan con el valor viejo. Un configMapGenerator con sufijo de hash cambia el nombre del ConfigMap al cambiar el contenido, el Deployment apunta al nombre nuevo y eso sí rueda los pods.',
      en: 'envFrom injects the variables once at container startup, so pods keep the old value. A hash-suffixed configMapGenerator changes the ConfigMap name when content changes, the Deployment points at the new name, and that does roll the pods.',
    },
  },
];
