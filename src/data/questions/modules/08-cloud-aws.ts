import type { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'm08-1',
    topic: '08-cloud-aws',
    text: {
      es: 'Tu app en EKS necesita leer un bucket S3. ¿Qué entidad IAM le asignas en vez de incrustar credenciales?',
      en: 'Your app on EKS needs to read an S3 bucket. Which IAM entity do you assign it instead of embedding credentials?',
    },
    options: [
      { id: 'b', text: { es: 'Un IAM user con access key y secret en una variable de entorno', en: 'An IAM user with access key and secret in an env var' } },
      { id: 'c', text: { es: 'La cuenta root de AWS', en: 'The AWS root account' } },
      { id: 'a', text: { es: 'Un IAM role que la app asume (sin claves de larga vida)', en: 'An IAM role the app assumes (no long-lived keys)' } },
      { id: 'd', text: { es: 'Una contraseña de la consola web', en: 'A web console password' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Los roles entregan credenciales temporales que se rotan solas; un user con access keys estáticas es un secreto de larga vida que puede filtrarse. Para cargas en EKS se usa IRSA.',
      en: 'Roles hand out temporary, auto-rotating credentials; a user with static access keys is a long-lived secret that can leak. For EKS workloads you use IRSA.',
    },
  },
  {
    id: 'm08-2',
    topic: '08-cloud-aws',
    text: {
      es: 'En una VPC, ¿qué distingue a una subnet privada de una pública?',
      en: 'In a VPC, what distinguishes a private subnet from a public one?',
    },
    options: [
      { id: 'b', text: { es: 'La subnet privada usa IPv6 y la pública IPv4', en: 'The private subnet uses IPv6 and the public one IPv4' } },
      { id: 'a', text: { es: 'La subnet pública tiene ruta a un Internet Gateway; la privada no', en: 'The public subnet has a route to an Internet Gateway; the private one doesn’t' } },
      { id: 'c', text: { es: 'La privada no puede tener instancias EC2', en: 'The private one can’t host EC2 instances' } },
      { id: 'd', text: { es: 'La pública no tiene security groups', en: 'The public one has no security groups' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Lo que hace pública a una subnet es su route table apuntando a un Internet Gateway; las privadas salen a internet, si acaso, vía un NAT Gateway.',
      en: 'What makes a subnet public is its route table pointing to an Internet Gateway; private subnets reach the internet, if at all, via a NAT Gateway.',
    },
  },
  {
    id: 'm08-3',
    topic: '08-cloud-aws',
    text: {
      es: 'Vienes de operar k3s on-premise y quieres lo mismo gestionado en AWS con mínima fricción de migración. ¿Qué eliges y qué trade-off aceptas?',
      en: 'You come from operating k3s on-premise and want the same thing managed on AWS with minimal migration friction. What do you pick and what trade-off do you accept?',
    },
    options: [
      { id: 'b', text: { es: 'ECS, aceptando reescribir tus manifiestos de Kubernetes a task definitions', en: 'ECS, accepting you rewrite your Kubernetes manifests as task definitions' } },
      { id: 'c', text: { es: 'EC2 puro, aceptando operar el cluster a mano', en: 'Plain EC2, accepting you operate the cluster by hand' } },
      { id: 'a', text: { es: 'Lambda, aceptando reescribir todo como funciones', en: 'Lambda, accepting you rewrite everything as functions' } },
      { id: 'd', text: { es: 'EKS, aceptando más complejidad y costo de control plane a cambio de seguir usando Kubernetes', en: 'EKS, accepting more complexity and control-plane cost in exchange for keeping Kubernetes' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'EKS es Kubernetes gestionado, así que tus manifiestos y conocimiento de k3s se trasladan casi directo; el trade-off es más complejidad y el costo del control plane frente a ECS, que es más simple pero no es Kubernetes.',
      en: 'EKS is managed Kubernetes, so your k3s manifests and know-how carry over almost directly; the trade-off is more complexity and the control-plane cost versus ECS, which is simpler but isn’t Kubernetes.',
    },
  },
  {
    id: 'm08-4',
    topic: '08-cloud-aws',
    text: {
      es: 'Tienes backups que casi nunca lees pero debes conservar barato por años. ¿Qué storage class de S3 conviene?',
      en: 'You have backups you almost never read but must keep cheaply for years. Which S3 storage class fits?',
    },
    options: [
      { id: 'b', text: { es: 'S3 Standard', en: 'S3 Standard' } },
      { id: 'c', text: { es: 'S3 Express One Zone', en: 'S3 Express One Zone' } },
      { id: 'd', text: { es: 'Ninguna: S3 no sirve para backups', en: 'None: S3 isn’t for backups' } },
      { id: 'a', text: { es: 'S3 Glacier / Glacier Deep Archive', en: 'S3 Glacier / Glacier Deep Archive' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Todas las clases comparten la misma durabilidad (11 nueves); Glacier sacrifica latencia de acceso a cambio de un costo de almacenamiento mucho menor, ideal para archivado de acceso raro.',
      en: 'All classes share the same durability (11 nines); Glacier trades access latency for a much lower storage cost, ideal for rarely accessed archival.',
    },
  },
  {
    id: 'm08-5',
    topic: '08-cloud-aws',
    text: {
      es: '¿Cuál es el principal trade-off de usar una base de datos gestionada (RDS) en vez de correr tu propio Postgres en un EC2?',
      en: 'What is the main trade-off of using a managed database (RDS) instead of running your own Postgres on an EC2?',
    },
    options: [
      { id: 'd', text: { es: 'Pagas más y cedes acceso al SO subyacente a cambio de que AWS opere backups, parches y multi-AZ', en: 'You pay more and give up underlying-OS access in exchange for AWS handling backups, patching, and multi-AZ' } },
      { id: 'b', text: { es: 'RDS no soporta réplicas de lectura', en: 'RDS doesn’t support read replicas' } },
      { id: 'c', text: { es: 'RDS te obliga a gestionar los parches del SO tú mismo', en: 'RDS forces you to manage OS patching yourself' } },
      { id: 'a', text: { es: 'RDS es siempre más barato y te da acceso root al host', en: 'RDS is always cheaper and gives you root access to the host' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'RDS delega la operación (backups, parches, failover multi-AZ) a AWS a cambio de un precio mayor y de perder el acceso al sistema operativo del host; self-hosted es más barato pero tú cargas con toda la operación.',
      en: 'RDS offloads operations (backups, patching, multi-AZ failover) to AWS in exchange for a higher price and losing host-OS access; self-hosting is cheaper but you carry all the operational burden.',
    },
  },
];
