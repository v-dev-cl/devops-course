import type { Locale } from '@/i18n/ui';

export type ModuleId =
  | '01-fundamentos'
  | '02-linux-redes'
  | '03-docker'
  | '04-cicd'
  | '05-kubernetes-gitops'
  | '06-terraform'
  | '07-observabilidad'
  | '08-cloud-aws'
  | '09-seguridad'
  | '10-seguridad-red';

export type LessonStatus = 'ready' | 'outline';

export interface LessonDef {
  slug: string;
  status: LessonStatus;
}

export interface ModuleDef {
  id: ModuleId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  lessons: LessonDef[]; // ordered
}

export const curriculum: ModuleDef[] = [
  {
    id: '01-fundamentos',
    title: { es: 'Fundamentos DevOps y cultura', en: 'DevOps Fundamentals & Culture' },
    description: {
      es: 'Qué es DevOps, el ciclo de vida de entrega y cómo medirlo con DORA.',
      en: 'What DevOps is, the delivery lifecycle, and how to measure it with DORA.',
    },
    lessons: [
      { slug: 'que-es-devops', status: 'ready' },
      { slug: 'ciclo-de-vida', status: 'ready' },
      { slug: 'metricas-dora', status: 'ready' },
      { slug: 'devops-en-tu-stack', status: 'ready' },
    ],
  },
  {
    id: '02-linux-redes',
    title: { es: 'Linux, shell y redes esenciales', en: 'Linux, Shell & Networking Essentials' },
    description: {
      es: 'Lo mínimo de sistema operativo y redes que necesitas para operar servicios.',
      en: 'The minimum OS and networking knowledge you need to operate services.',
    },
    lessons: [
      { slug: 'shell-supervivencia', status: 'ready' },
      { slug: 'procesos-systemd', status: 'ready' },
      { slug: 'redes-basicas', status: 'ready' },
      { slug: 'ssh-y-archivos', status: 'ready' },
    ],
  },
  {
    id: '03-docker',
    title: { es: 'Docker a fondo', en: 'Docker Deep-Dive' },
    description: {
      es: 'Imágenes, multi-stage, compose, registries y seguridad de imágenes.',
      en: 'Images, multi-stage, compose, registries, and image security.',
    },
    lessons: [
      { slug: 'imagenes-y-capas', status: 'ready' },
      { slug: 'dockerfile-multi-stage', status: 'ready' },
      { slug: 'compose-entornos-locales', status: 'ready' },
      { slug: 'registries-y-tags', status: 'ready' },
      { slug: 'seguridad-de-imagenes', status: 'ready' },
    ],
  },
  {
    id: '04-cicd',
    title: { es: 'CI/CD con GitHub Actions', en: 'CI/CD with GitHub Actions' },
    description: {
      es: 'Pipelines, publicación a GHCR, tags inmutables y el salto de CI a CD.',
      en: 'Pipelines, publishing to GHCR, immutable tags, and the jump from CI to CD.',
    },
    lessons: [
      { slug: 'anatomia-de-un-workflow', status: 'ready' },
      { slug: 'ci-build-test-publish', status: 'ready' },
      { slug: 'tags-inmutables-y-rollback', status: 'ready' },
      { slug: 'environments-y-promocion', status: 'ready' },
      { slug: 'de-ci-a-cd', status: 'ready' },
    ],
  },
  {
    id: '05-kubernetes-gitops',
    title: { es: 'Kubernetes y GitOps', en: 'Kubernetes & GitOps' },
    description: {
      es: 'Buenas prácticas de workloads, Kustomize, ArgoCD, secretos con ESO y multi-cluster.',
      en: 'Workload good practices, Kustomize, ArgoCD, secrets with ESO, and multi-cluster.',
    },
    lessons: [
      { slug: 'kubernetes-repaso-practico', status: 'ready' },
      { slug: 'buenas-practicas-workloads', status: 'ready' },
      { slug: 'kustomize-base-overlays', status: 'ready' },
      { slug: 'argocd-gitops', status: 'ready' },
      { slug: 'secretos-con-eso', status: 'ready' },
      { slug: 'multi-cluster-applicationset', status: 'ready' },
      { slug: 'migrar-a-gitops', status: 'ready' },
      { slug: 'hub-and-spoke', status: 'ready' },
    ],
  },
  {
    id: '06-terraform',
    title: { es: 'Infraestructura como Código con Terraform', en: 'Infrastructure as Code with Terraform' },
    description: {
      es: 'Por qué IaC, estado remoto, módulos y workspaces.',
      en: 'Why IaC, remote state, modules, and workspaces.',
    },
    lessons: [
      { slug: 'por-que-iac', status: 'ready' },
      { slug: 'terraform-basico', status: 'ready' },
      { slug: 'state-y-backends', status: 'ready' },
      { slug: 'modulos-y-workspaces', status: 'ready' },
    ],
  },
  {
    id: '07-observabilidad',
    title: { es: 'Observabilidad', en: 'Observability' },
    description: {
      es: 'Logs, métricas y trazas; Prometheus, Grafana, alerting y SLOs.',
      en: 'Logs, metrics, and traces; Prometheus, Grafana, alerting, and SLOs.',
    },
    lessons: [
      { slug: 'tres-pilares', status: 'ready' },
      { slug: 'prometheus-grafana', status: 'ready' },
      { slug: 'alerting-slos', status: 'ready' },
      { slug: 'logs-estructurados', status: 'ready' },
    ],
  },
  {
    id: '08-cloud-aws',
    title: { es: 'Cloud y on-premise (AWS)', en: 'Cloud & On-Premise (AWS)' },
    description: {
      es: 'AWS esencial, híbrido con on-premise, costos y contexto Chile.',
      en: 'AWS essentials, hybrid with on-premise, costs, and the Chile context.',
    },
    lessons: [
      { slug: 'aws-panorama', status: 'ready' },
      { slug: 'iam-vpc', status: 'ready' },
      { slug: 'computo-ecs-eks', status: 'ready' },
      { slug: 'datos-s3-rds', status: 'ready' },
      { slug: 'eso-secrets-manager', status: 'ready' },
    ],
  },
  {
    id: '09-seguridad',
    title: { es: 'Seguridad en el pipeline (DevSecOps)', en: 'Pipeline Security (DevSecOps)' },
    description: {
      es: 'Shift-left: SAST, dependencias, secretos, supply chain y policy-as-code en tu pipeline.',
      en: 'Shift-left: SAST, dependencies, secrets, supply chain, and policy-as-code in your pipeline.',
    },
    lessons: [
      { slug: 'shift-left-seguridad', status: 'ready' },
      { slug: 'sast-con-semgrep', status: 'ready' },
      { slug: 'dependencias-y-sca', status: 'ready' },
      { slug: 'escaneo-de-secretos', status: 'ready' },
      { slug: 'supply-chain-e-imagenes', status: 'ready' },
      { slug: 'policy-as-code', status: 'ready' },
    ],
  },
  {
    id: '10-seguridad-red',
    title: { es: 'Seguridad de red e infraestructura', en: 'Network & Infrastructure Security' },
    description: {
      es: 'El perímetro en runtime: firewall en k8s bare-metal, CDN y origen, confianza cero y red privada.',
      en: 'The runtime perimeter: bare-metal k8s firewall, CDN and origin, zero-trust, and private networking.',
    },
    lessons: [
      { slug: 'firewall-en-kubernetes', status: 'ready' },
    ],
  },
];

export function lessonId(moduleId: ModuleId, slug: string): string {
  return `${moduleId}/${slug}`;
}

export function getModule(id: string): ModuleDef | undefined {
  return curriculum.find((m) => m.id === id);
}

/** Flat ordered list of all lesson IDs, used for resume + progress totals. */
export const allLessonIds: string[] = curriculum.flatMap((m) =>
  m.lessons.map((l) => lessonId(m.id, l.slug)),
);
