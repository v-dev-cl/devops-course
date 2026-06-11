import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '08-iam-1',
    topic: '08-cloud-aws',
    text: {
      es: 'Tu app NestJS en AWS necesita leer un bucket S3. ¿Qué identidad IAM debe usar?',
      en: 'Your NestJS app on AWS needs to read an S3 bucket. Which IAM identity should it use?',
    },
    options: [
      { id: 'a', text: { es: 'Un rol IAM que la app asume y que entrega credenciales temporales', en: 'An IAM role the app assumes, handing out temporary credentials' } },
      { id: 'b', text: { es: 'Un usuario IAM con access keys de larga vida horneadas en la imagen', en: 'An IAM user with long-lived access keys baked into the image' } },
      { id: 'c', text: { es: 'La cuenta root', en: 'The root account' } },
      { id: 'd', text: { es: 'Una política sola, sin identidad', en: 'A policy alone, with no identity' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Para workloads se usan roles: credenciales temporales que rotan solas. Las access keys de larga vida en una app son la brecha número uno en AWS.',
      en: 'Workloads use roles: temporary, self-rotating credentials. Long-lived access keys in an app are the number-one breach in AWS.',
    },
  },
  {
    id: '08-iam-2',
    topic: '08-cloud-aws',
    text: {
      es: 'En una política de solo lectura sobre un bucket, ¿por qué se listan dos ARN (el bucket y el bucket/*)?',
      en: 'In a read-only policy on a bucket, why list two ARNs (the bucket and bucket/*)?',
    },
    options: [
      { id: 'a', text: { es: 'Por estilo; uno solo basta', en: 'For style; one is enough' } },
      { id: 'b', text: { es: 'ListBucket aplica al bucket en sí y GetObject aplica a los objetos (/*); cada acción necesita su recurso', en: 'ListBucket applies to the bucket itself and GetObject to the objects (/*); each action needs its resource' } },
      { id: 'c', text: { es: 'Para duplicar permisos por seguridad', en: 'To duplicate permissions for security' } },
      { id: 'd', text: { es: 'Porque AWS exige siempre al menos dos recursos', en: 'Because AWS always requires at least two resources' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'ListBucket opera sobre el ARN del bucket; GetObject sobre los objetos dentro (/*). Si pones solo uno, la otra acción falla.',
      en: 'ListBucket operates on the bucket ARN; GetObject on the objects inside (/*). List only one and the other action fails.',
    },
  },
  {
    id: '08-iam-3',
    topic: '08-cloud-aws',
    text: {
      es: 'Vienes de iptables/ufw en tus VMs. ¿Qué afirmación sobre security groups es correcta?',
      en: 'You come from iptables/ufw on your VMs. Which statement about security groups is correct?',
    },
    options: [
      { id: 'a', text: { es: 'Son stateless y operan a nivel de subnet, con reglas allow y deny', en: 'They are stateless and operate at the subnet level, with allow and deny rules' } },
      { id: 'b', text: { es: 'Reemplazan a la VPC', en: 'They replace the VPC' } },
      { id: 'c', text: { es: 'Solo se pueden aplicar a la cuenta root', en: 'They can only be applied to the root account' } },
      { id: 'd', text: { es: 'Son un firewall stateful por recurso (solo reglas allow); el NACL es el stateless por subnet', en: 'They are a stateful firewall per resource (allow rules only); the NACL is the stateless one per subnet' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'El security group es stateful y por recurso (solo allow): si permites la entrada, la respuesta de salida va sola. El NACL es stateless, por subnet, con allow y deny.',
      en: 'A security group is stateful and per-resource (allow only): allow inbound and the outbound response is automatic. The NACL is the stateless, per-subnet one with allow and deny.',
    },
  },
];
