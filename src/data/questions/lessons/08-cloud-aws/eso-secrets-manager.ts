import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '08-eso-1',
    topic: '08-cloud-aws',
    text: {
      es: 'En tu k3s on-premise (no EKS), ¿cómo autenticas ESO contra AWS Secrets Manager de forma pragmática?',
      en: 'On your on-premise k3s (not EKS), how do you pragmatically authenticate ESO against AWS Secrets Manager?',
    },
    options: [
      { id: 'a', text: { es: 'Con IRSA, que funciona en cualquier cluster', en: 'With IRSA, which works on any cluster' } },
      { id: 'b', text: { es: 'Un usuario IAM con access keys guardadas en un Secret de k8s que el SecretStore referencia (rotándolas)', en: 'An IAM user with access keys stored in a k8s Secret the SecretStore references (rotating them)' } },
      { id: 'c', text: { es: 'No se puede usar Secrets Manager fuera de EKS', en: 'You cannot use Secrets Manager outside EKS' } },
      { id: 'd', text: { es: 'Pegando la access key en texto plano en el ExternalSecret', en: 'Pasting the access key in plaintext into the ExternalSecret' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'IRSA es solo para EKS (depende de su OIDC). En k3s lo pragmático es un usuario IAM con access keys en un Secret de k8s, referenciado por el SecretStore, rotándolas con disciplina.',
      en: 'IRSA is EKS-only (depends on its OIDC). On k3s the pragmatic path is an IAM user with access keys in a k8s Secret, referenced by the SecretStore, rotated with discipline.',
    },
  },
  {
    id: '08-eso-2',
    topic: '08-cloud-aws',
    text: {
      es: 'En el SecretStore con provider.aws, ¿qué campos referencian las credenciales estáticas?',
      en: 'In the SecretStore with provider.aws, which fields reference the static credentials?',
    },
    options: [
      { id: 'a', text: { es: 'auth.secretRef.accessKeyIDSecretRef y secretAccessKeySecretRef (cada uno con name y key)', en: 'auth.secretRef.accessKeyIDSecretRef and secretAccessKeySecretRef (each with name and key)' } },
      { id: 'b', text: { es: 'spec.username y spec.password', en: 'spec.username and spec.password' } },
      { id: 'c', text: { es: 'provider.aws.token', en: 'provider.aws.token' } },
      { id: 'd', text: { es: 'data.remoteRef.accessKey', en: 'data.remoteRef.accessKey' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El bloque auth.secretRef tiene accessKeyIDSecretRef y secretAccessKeySecretRef, cada uno apuntando (name + key) al Secret de k8s con las llaves. En EKS con IRSA el bloque auth se omite.',
      en: 'The auth.secretRef block has accessKeyIDSecretRef and secretAccessKeySecretRef, each pointing (name + key) to the k8s Secret with the keys. On EKS with IRSA the auth block is omitted.',
    },
  },
  {
    id: '08-eso-3',
    topic: '08-cloud-aws',
    text: {
      es: 'Para decenas de servicios con muchos secretos y sin necesidad de rotación gestionada, ¿qué backend conviene por defecto?',
      en: 'For dozens of services with many secrets and no need for managed rotation, which backend is the better default?',
    },
    options: [
      { id: 'a', text: { es: 'Secrets Manager, porque $0.40 por secreto al mes es insignificante', en: 'Secrets Manager, because $0.40 per secret per month is negligible' } },
      { id: 'b', text: { es: 'Volver a comitear los secretos a git', en: 'Going back to committing secrets to git' } },
      { id: 'c', text: { es: 'No usar ESO en absoluto', en: 'Not using ESO at all' } },
      { id: 'd', text: { es: 'Parameter Store (tier estándar gratis): mismo ESO con service: ParameterStore, fracción del costo', en: 'Parameter Store (free standard tier): same ESO with service: ParameterStore, a fraction of the cost' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'A $0.40 por secreto/mes, Secrets Manager se suma con decenas de servicios. Parameter Store (tier estándar gratis) usa el mismo ESO cambiando service: ParameterStore; reserva Secrets Manager para los pocos que necesiten rotación automática.',
      en: 'At $0.40 per secret/mo, Secrets Manager adds up across dozens of services. Parameter Store (free standard tier) uses the same ESO by switching service: ParameterStore; reserve Secrets Manager for the few needing automatic rotation.',
    },
  },
];
