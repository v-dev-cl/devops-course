import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '08-dat-1',
    topic: '08-cloud-aws',
    text: {
      es: 'La durabilidad de 11 nueves de S3 significa que...',
      en: "S3's 11 nines of durability means that...",
    },
    options: [
      { id: 'a', text: { es: 'el bucket siempre estará disponible para leer sin caídas', en: 'the bucket will always be available to read with no downtime' } },
      { id: 'b', text: { es: 'la probabilidad de perder un objeto es ínfima porque AWS lo replica entre varias AZs', en: 'the chance of losing an object is minuscule because AWS replicates it across several AZs' } },
      { id: 'c', text: { es: 'los objetos se cifran 11 veces', en: 'objects are encrypted 11 times' } },
      { id: 'd', text: { es: 'puedes guardar como máximo 11 versiones de cada objeto', en: 'you can store at most 11 versions of each object' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Durabilidad = no perder el dato (AWS replica entre AZs). Es distinto de disponibilidad (poder accederlo siempre); no son lo mismo.',
      en: 'Durability = not losing the data (AWS replicates across AZs). It is distinct from availability (always being able to access it); they are not the same.',
    },
  },
  {
    id: '08-dat-2',
    topic: '08-cloud-aws',
    text: {
      es: 'Quieres que un usuario suba un archivo a S3 sin darle credenciales AWS. ¿Qué usas?',
      en: 'You want a user to upload a file to S3 without giving them AWS credentials. What do you use?',
    },
    options: [
      { id: 'a', text: { es: 'Una presigned URL: un link temporal y firmado con permiso acotado a ese objeto', en: 'A presigned URL: a temporary, signed link with scoped permission to that object' } },
      { id: 'b', text: { es: 'Le compartes tu access key', en: 'You share your access key with them' } },
      { id: 'c', text: { es: 'Haces el bucket público', en: 'You make the bucket public' } },
      { id: 'd', text: { es: 'No es posible sin credenciales', en: 'It is not possible without credentials' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Una presigned URL la firma tu backend y da permiso acotado y temporal sobre un objeto; el cliente sube directo a S3 sin pasar por tu servidor ni tener credenciales.',
      en: 'A presigned URL is signed by your backend and grants scoped, temporary permission on an object; the client uploads straight to S3 without your server or any credentials.',
    },
  },
  {
    id: '08-dat-3',
    topic: '08-cloud-aws',
    text: {
      es: 'Corres Mongo autogestionado en tu VPS y funciona bien. ¿Qué NO te compra migrar a RDS/DocumentDB?',
      en: 'You run self-managed Mongo on your VPS and it works fine. What does migrating to RDS/DocumentDB NOT buy you?',
    },
    options: [
      { id: 'a', text: { es: 'Backups automáticos sin operarlos', en: 'Automated backups you do not operate' } },
      { id: 'b', text: { es: 'Failover Multi-AZ gestionado', en: 'Managed Multi-AZ failover' } },
      { id: 'c', text: { es: 'Réplicas de lectura para escalar lecturas', en: 'Read replicas to scale reads' } },
      { id: 'd', text: { es: 'Menor costo y control fino del host; además DocumentDB no cubre el 100% de features de Mongo', en: 'Lower cost and fine-grained host control; plus DocumentDB does not cover 100% of Mongo features' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'RDS/DocumentDB da backups, Multi-AZ y réplicas gestionadas, pero sale más caro, con menos control del host, y DocumentDB no es Mongo real al 100%.',
      en: 'RDS/DocumentDB gives managed backups, Multi-AZ, and replicas, but costs more, with less host control, and DocumentDB is not 100% real Mongo.',
    },
  },
];
