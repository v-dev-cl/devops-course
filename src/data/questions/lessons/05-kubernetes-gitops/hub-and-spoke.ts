import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-hns-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'El hub de Argo CD de DealHive se cae por una hora. ¿Qué le pasa a los workloads que ya corren en `edge-eu`, `extractors-1` y `data-1`?',
      en: "DealHive's Argo CD hub goes down for an hour. What happens to the workloads already running on `edge-eu`, `extractors-1`, and `data-1`?",
    },
    options: [
      { id: 'a', text: { es: 'Todos los pods de los spokes se detienen hasta que el hub vuelva', en: 'All spoke pods stop until the hub comes back' } },
      { id: 'b', text: { es: 'Siguen corriendo sin interrupción; solo se pausan los nuevos syncs (un commit no se despliega, selfHeal queda en pausa)', en: 'They keep running with no interruption; only new syncs pause (a commit does not deploy, selfHeal is paused)' } },
      { id: 'c', text: { es: 'Los spokes eligen un nuevo hub entre ellos automáticamente', en: 'The spokes automatically elect a new hub among themselves' } },
      { id: 'd', text: { es: 'Cada spoke hace rollback a su última versión conocida', en: 'Each spoke rolls back to its last known version' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Los pods de cada spoke los maneja su propio kubelet/k3s, independiente del hub. Si el hub se cae, los workloads siguen sirviendo tráfico; lo único que se pausa es la reconciliación —no hay nuevos syncs ni selfHeal—. El hub es un single point of failure del plano de control, no del plano de datos.',
      en: "Each spoke's pods are managed by its own kubelet/k3s, independent of the hub. If the hub goes down, the workloads keep serving traffic; the only thing that pauses is reconciliation —no new syncs and no selfHeal—. The hub is a single point of failure for the control plane, not the data plane.",
    },
  },
  {
    id: '05-hns-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'En la topología hub-and-spoke, ¿por qué el hub es la caja más sensible y la primera a endurecer (privada, sin exponer a internet)?',
      en: 'In the hub-and-spoke topology, why is the hub the most sensitive box and the first to harden (private, not exposed to the internet)?',
    },
    options: [
      { id: 'a', text: { es: 'Porque guarda las credenciales para desplegar en cada spoke; comprometerlo es comprometer toda la flota de un golpe', en: 'Because it holds the credentials to deploy to every spoke; compromising it compromises the whole fleet at once' } },
      { id: 'b', text: { es: 'Porque es el único cluster que tiene acceso a internet', en: 'Because it is the only cluster with internet access' } },
      { id: 'c', text: { es: 'Porque corre los workloads de producción más pesados', en: 'Because it runs the heaviest production workloads' } },
      { id: 'd', text: { es: 'Porque sin él los spokes pierden todos sus datos', en: 'Because without it the spokes lose all their data' } },
    ],
    correct: ['a'],
    explanation: {
      es: '`argocd cluster add` guarda el kubeconfig/token de cada spoke como un Secret dentro del hub. Por eso el hub tiene credenciales para aplicar cualquier manifiesto a cualquier cluster: es la llave maestra. Comprometerlo entrega toda la flota, así que debe ser la caja más endurecida y de acceso solo privado.',
      en: '`argocd cluster add` stores each spoke\'s kubeconfig/token as a Secret inside the hub. That is why the hub holds credentials to apply any manifest to any cluster: it is the master key. Compromising it hands over the whole fleet, so it must be the most-hardened, private-only box.',
    },
  },
  {
    id: '05-hns-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Un colega dice que Argo CD "corre en cada cluster de la flota". ¿Cómo corriges esa idea en un montaje hub-and-spoke?',
      en: 'A colleague says Argo CD "runs on every cluster in the fleet." How do you correct that idea in a hub-and-spoke setup?',
    },
    options: [
      { id: 'a', text: { es: 'Tiene razón: hay un controlador Argo CD por cada spoke', en: 'They are right: there is one Argo CD controller per spoke' } },
      { id: 'b', text: { es: 'Argo CD no corre en ningún lado; es solo un CLI que aplica manifiestos', en: 'Argo CD runs nowhere; it is just a CLI that applies manifests' } },
      { id: 'c', text: { es: 'El controlador corre solo en el hub; los spokes no tienen Argo CD, solo reciben los manifiestos que el hub les aplica vía su API', en: 'The controller runs only on the hub; the spokes have no Argo CD, they just receive the manifests the hub applies via their API' } },
      { id: 'd', text: { es: 'Argo CD corre en el hub y se replica como DaemonSet en cada spoke', en: 'Argo CD runs on the hub and is replicated as a DaemonSet on each spoke' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Hay que separar dónde corre el controlador de dónde despliega. En hub-and-spoke, los pods de Argo CD (application-controller, repo-server, server) viven solo en el hub; los spokes no tienen Argo CD y solo reciben los manifiestos que el hub aplica contra la API de Kubernetes de cada uno.',
      en: 'You must separate where the controller runs from where it deploys. In hub-and-spoke the Argo CD pods (application-controller, repo-server, server) live only on the hub; the spokes have no Argo CD and merely receive the manifests the hub applies against each one\'s Kubernetes API.',
    },
  },
];
