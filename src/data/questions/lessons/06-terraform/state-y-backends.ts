import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '06-stb-1',
    topic: '06-terraform',
    text: {
      es: '¿Por qué un state local en tu carpeta deja de funcionar cuando el equipo crece o entra un pipeline?',
      en: 'Why does a local state in your folder stop working once the team grows or a pipeline comes in?',
    },
    options: [
      { id: 'a', text: { es: 'Porque el archivo local es demasiado grande para git', en: 'Because the local file is too large for git' } },
      { id: 'b', text: { es: 'Porque cada quien tiene su copia y dos apply simultáneos se pisan y corrompen el state', en: 'Because everyone has their own copy and two simultaneous applies clobber and corrupt the state' } },
      { id: 'c', text: { es: 'Porque Terraform deja de soportar state local en equipos', en: 'Because Terraform stops supporting local state for teams' } },
      { id: 'd', text: { es: 'Porque el state local no guarda dependencias entre recursos', en: 'Because local state does not store dependencies between resources' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Con state local cada persona o pipeline tiene su propia copia; los applies se pisan y dos a la vez corrompen el state. Por eso se usa un backend remoto compartido y con bloqueo (lock).',
      en: 'With local state each person or pipeline has their own copy; applies clobber each other and two at once corrupt the state. That is why you use a shared remote backend with locking.',
    },
  },
  {
    id: '06-stb-2',
    topic: '06-terraform',
    text: {
      es: 'En el backend canónico de AWS (S3 + DynamoDB), ¿para qué sirve la tabla DynamoDB?',
      en: 'In the canonical AWS backend (S3 + DynamoDB), what is the DynamoDB table for?',
    },
    options: [
      { id: 'a', text: { es: 'Guardar el state en lugar de S3', en: 'To store the state instead of S3' } },
      { id: 'b', text: { es: 'Cifrar el state en reposo', en: 'To encrypt the state at rest' } },
      { id: 'c', text: { es: 'Servir como backup del bucket S3', en: 'To serve as a backup of the S3 bucket' } },
      { id: 'd', text: { es: 'Bloquear el state (lock) para que solo un apply escriba a la vez', en: 'To lock the state so only one apply writes at a time' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'S3 guarda el state; DynamoDB es el método clásico de locking, para que dos apply no escriban a la vez. (Terraform 1.10+ ya soporta lock nativo de S3 sin DynamoDB, pero el patrón con DynamoDB es el más documentado.)',
      en: 'S3 stores the state; DynamoDB is the classic locking method, so two applies do not write at once. (Terraform 1.10+ now supports native S3 locking without DynamoDB, but the DynamoDB pattern is the most documented.)',
    },
  },
  {
    id: '06-stb-3',
    topic: '06-terraform',
    text: {
      es: 'Marcaste la contraseña de un RDS como variable sensitive. ¿Qué es cierto sobre dónde queda?',
      en: 'You marked an RDS password as a sensitive variable. What is true about where it ends up?',
    },
    options: [
      { id: 'a', text: { es: 'sensitive la cifra dentro del state, así que el state se puede commitear', en: 'sensitive encrypts it inside the state, so the state can be committed' } },
      { id: 'b', text: { es: 'No queda en ninguna parte porque es sensitive', en: 'It is stored nowhere because it is sensitive' } },
      { id: 'c', text: { es: 'sensitive solo la oculta de los logs y el plan; el state la guarda en texto plano, por eso el state nunca va a git y debe estar cifrado y privado', en: 'sensitive only hides it from logs and the plan; the state stores it in plaintext, so the state never goes to git and must be encrypted and private' } },
      { id: 'd', text: { es: 'sensitive impide que Terraform la guarde en el state', en: 'sensitive prevents Terraform from storing it in the state' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'sensitive solo evita que el valor aparezca en logs y en el plan; el state guarda en texto plano todos los valores de los recursos, incluidos los secretos. De ahí: el state nunca va a git y el backend debe estar cifrado y privado.',
      en: 'sensitive only keeps the value out of logs and the plan; the state stores every resource value in plaintext, secrets included. Hence: state never goes to git and the backend must be encrypted and private.',
    },
  },
];
