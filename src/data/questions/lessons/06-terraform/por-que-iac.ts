import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '06-iac-1',
    topic: '06-terraform',
    text: {
      es: '¿Qué problema describe mejor el término "drift" en infraestructura?',
      en: 'Which problem does the term "drift" in infrastructure best describe?',
    },
    options: [
      { id: 'a', text: { es: 'Que un apply tarda demasiado en completarse', en: 'That an apply takes too long to complete' } },
      { id: 'b', text: { es: 'Que la infraestructura real se desvía de lo que está declarado en el código', en: 'That the real infrastructure diverges from what is declared in the code' } },
      { id: 'c', text: { es: 'Que el provider quedó en una versión desactualizada', en: 'That the provider is on an outdated version' } },
      { id: 'd', text: { es: 'Que dos personas editan el mismo archivo HCL a la vez', en: 'That two people edit the same HCL file at once' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Drift es cuando alguien cambia algo a mano (típico del click-ops) y la realidad ya no coincide con lo declarado. El código deja de ser la fuente de verdad hasta que reconcilias.',
      en: 'Drift is when someone changes something by hand (typical of click-ops) and reality no longer matches what was declared. The code stops being the source of truth until you reconcile.',
    },
  },
  {
    id: '06-iac-2',
    topic: '06-terraform',
    text: {
      es: 'Ya despliegas tus servicios NestJS con manifiestos de Kubernetes en git aplicados por ArgoCD. ¿Qué capa cubre Terraform que ese setup no cubre?',
      en: 'You already deploy your NestJS services with Kubernetes manifests in git applied by ArgoCD. Which layer does Terraform cover that this setup does not?',
    },
    options: [
      { id: 'a', text: { es: 'Los Deployments y Services de las aplicaciones', en: 'The applications\' Deployments and Services' } },
      { id: 'b', text: { es: 'El rollout progresivo de nuevas versiones de las apps', en: 'The progressive rollout of new app versions' } },
      { id: 'c', text: { es: 'Los ConfigMaps de cada microservicio', en: 'Each microservice\'s ConfigMaps' } },
      { id: 'd', text: { es: 'La capa de abajo: VMs, DNS, firewall, buckets, bases administradas y el cluster mismo', en: 'The layer below: VMs, DNS, firewall, buckets, managed databases, and the cluster itself' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'GitOps cubre los workloads. Terraform vive en la capa de abajo que Kubernetes da por sentado: el VPS, su firewall, el DNS, y mañana la VPC y los buckets de AWS.',
      en: 'GitOps covers the workloads. Terraform lives in the layer below that Kubernetes takes for granted: the VPS, its firewall, DNS, and tomorrow the AWS VPC and buckets.',
    },
  },
  {
    id: '06-iac-3',
    topic: '06-terraform',
    text: {
      es: '¿Qué afirmación sobre OpenTofu es correcta?',
      en: 'Which statement about OpenTofu is correct?',
    },
    options: [
      { id: 'a', text: { es: 'Es un fork de Terraform, drop-in compatible: misma sintaxis HCL y providers, comando tofu', en: 'It is a fork of Terraform, drop-in compatible: same HCL syntax and providers, tofu command' } },
      { id: 'b', text: { es: 'Es un lenguaje nuevo incompatible con la sintaxis HCL de Terraform', en: 'It is a new language incompatible with Terraform\'s HCL syntax' } },
      { id: 'c', text: { es: 'Solo funciona con AWS y no soporta otros providers', en: 'It only works with AWS and supports no other providers' } },
      { id: 'd', text: { es: 'Es la versión paga y con licencia BSL de Terraform', en: 'It is the paid, BSL-licensed version of Terraform' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'OpenTofu nació cuando HashiCorp cambió Terraform a la licencia BSL. Es open source (MPL, Linux Foundation) y drop-in compatible: mismo HCL, mismos providers, comando tofu en vez de terraform.',
      en: 'OpenTofu was born when HashiCorp moved Terraform to the BSL license. It is open source (MPL, Linux Foundation) and drop-in compatible: same HCL, same providers, tofu command instead of terraform.',
    },
  },
];
