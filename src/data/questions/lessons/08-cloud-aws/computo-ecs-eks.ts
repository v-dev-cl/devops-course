import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '08-cmp-1',
    topic: '08-cloud-aws',
    text: {
      es: 'Ya operas k3s con ArgoCD, ESO y kustomize. ¿Qué opción de cómputo conserva mejor esa inversión?',
      en: 'You already run k3s with ArgoCD, ESO, and kustomize. Which compute option best preserves that investment?',
    },
    options: [
      { id: 'a', text: { es: 'EKS: es Kubernetes gestionado, así que tus manifiestos y tu stack GitOps funcionan igual', en: 'EKS: it is managed Kubernetes, so your manifests and GitOps stack work the same' } },
      { id: 'b', text: { es: 'ECS + Fargate, que usa el mismo vocabulario que k8s', en: 'ECS + Fargate, which uses the same vocabulary as k8s' } },
      { id: 'c', text: { es: 'Lambda, reescribiendo cada servicio como función', en: 'Lambda, rewriting each service as a function' } },
      { id: 'd', text: { es: 'EC2 crudo sin orquestador', en: 'Raw EC2 with no orchestrator' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'EKS es Kubernetes gestionado: ArgoCD, ESO y kustomize funcionan igual. ECS trae vocabulario nuevo (task definitions) y más lock-in.',
      en: 'EKS is managed Kubernetes: ArgoCD, ESO, and kustomize work the same. ECS brings new vocabulary (task definitions) and more lock-in.',
    },
  },
  {
    id: '08-cmp-2',
    topic: '08-cloud-aws',
    text: {
      es: 'Aproximadamente, ¿cuánto cuesta el control plane de EKS y qué incluye?',
      en: 'Roughly, how much does the EKS control plane cost, and what does it include?',
    },
    options: [
      { id: 'a', text: { es: 'Es gratis; solo pagas el almacenamiento', en: 'It is free; you only pay for storage' } },
      { id: 'b', text: { es: '~$0.10/hora (~$73/mes) e incluye además todos los nodos sin costo extra', en: '~$0.10/hour (~$73/month) and also includes all nodes at no extra cost' } },
      { id: 'c', text: { es: '~$0.10/hora (~$73/mes) por el control plane, y los nodos se pagan aparte', en: '~$0.10/hour (~$73/month) for the control plane, with nodes billed separately' } },
      { id: 'd', text: { es: 'Un pago único de $73 de por vida', en: 'A one-time $73 payment for life' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El control plane de EKS cuesta ~$0.10/h (~$73/mes); los nodos (EC2 o Fargate) se pagan por separado. En k3s ese control plane no te cuesta extra.',
      en: 'The EKS control plane costs ~$0.10/h (~$73/mo); nodes (EC2 or Fargate) are billed separately. On k3s that control plane costs you nothing extra.',
    },
  },
  {
    id: '08-cmp-3',
    topic: '08-cloud-aws',
    text: {
      es: '¿Para qué workload son apropiadas las spot instances?',
      en: 'For which workload are spot instances appropriate?',
    },
    options: [
      { id: 'a', text: { es: 'La base de datos primaria de producción', en: 'The primary production database' } },
      { id: 'b', text: { es: 'Workers de cola o jobs batch tolerantes a interrupción (AWS puede quitarlas con ~2 min de aviso)', en: 'Interruption-tolerant queue workers or batch jobs (AWS can reclaim them with ~2 min notice)' } },
      { id: 'c', text: { es: 'El único nodo de un servicio crítico que no puede caer', en: 'The single node of a critical service that cannot go down' } },
      { id: 'd', text: { es: 'Cualquier cosa, no hay diferencia con on-demand', en: 'Anything, there is no difference from on-demand' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Spot es capacidad con 60–90% de descuento pero AWS te la puede quitar con ~2 min de aviso: ideal para jobs batch y workers que reintentan, no para lo crítico.',
      en: 'Spot is 60–90%-off capacity but AWS can reclaim it with ~2 min notice: ideal for batch jobs and retrying workers, not for critical services.',
    },
  },
];
