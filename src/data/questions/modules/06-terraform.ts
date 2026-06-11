import type { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'm06-1',
    topic: '06-terraform',
    text: {
      es: '¿Qué significa que Terraform sea declarativo en vez de imperativo?',
      en: 'What does it mean that Terraform is declarative rather than imperative?',
    },
    options: [
      { id: 'b', text: { es: 'Escribes paso a paso cada comando de creación en orden', en: 'You write each creation command step by step in order' } },
      { id: 'a', text: { es: 'Describes el estado final deseado y Terraform calcula los pasos para llegar', en: 'You describe the desired end state and Terraform figures out the steps to get there' } },
      { id: 'c', text: { es: 'Solo funciona con la consola web del proveedor', en: 'It only works with the provider’s web console' } },
      { id: 'd', text: { es: 'Aplica cambios sin guardar ningún registro de lo hecho', en: 'It applies changes without keeping any record of what it did' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'En el modelo declarativo describes el resultado deseado; Terraform compara con la realidad y deriva el plan de acciones para converger.',
      en: 'In the declarative model you describe the desired result; Terraform compares it to reality and derives the action plan to converge.',
    },
  },
  {
    id: 'm06-2',
    topic: '06-terraform',
    text: {
      es: '¿Cuál es el rol de `terraform plan` antes de `terraform apply`?',
      en: 'What is the role of `terraform plan` before `terraform apply`?',
    },
    options: [
      { id: 'b', text: { es: 'Aplica los cambios inmediatamente sin confirmación', en: 'Applies the changes immediately without confirmation' } },
      { id: 'a', text: { es: 'Muestra qué recursos se crearán, cambiarán o destruirán sin tocar nada', en: 'Shows which resources will be created, changed, or destroyed without touching anything' } },
      { id: 'c', text: { es: 'Descarga los providers necesarios', en: 'Downloads the required providers' } },
      { id: 'd', text: { es: 'Borra el archivo de state para empezar de cero', en: 'Deletes the state file to start fresh' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'plan calcula el diff entre el estado deseado y el actual y te lo muestra para revisión, sin aplicar ningún cambio.',
      en: 'plan computes the diff between desired and current state and shows it for review, without applying any change.',
    },
  },
  {
    id: 'm06-3',
    topic: '06-terraform',
    text: {
      es: '¿Para qué sirve el archivo de state de Terraform?',
      en: 'What is the Terraform state file for?',
    },
    options: [
      { id: 'b', text: { es: 'Guardar las credenciales de acceso al proveedor', en: 'To store the provider access credentials' } },
      { id: 'c', text: { es: 'Reemplazar al control de versiones de tu código HCL', en: 'To replace version control of your HCL code' } },
      { id: 'a', text: { es: 'Mapear los recursos de tu configuración a los objetos reales del proveedor', en: 'To map the resources in your config to the real provider objects' } },
      { id: 'd', text: { es: 'Compilar el HCL a binario', en: 'To compile HCL to a binary' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El state mantiene el mapeo entre los recursos de tu configuración y los objetos reales en el proveedor, permitiendo a Terraform detectar diffs y drift.',
      en: 'State keeps the mapping between the resources in your config and the real objects in the provider, letting Terraform detect diffs and drift.',
    },
  },
  {
    id: 'm06-4',
    topic: '06-terraform',
    text: {
      es: '¿Por qué un equipo usa un backend remoto (por ejemplo S3 + DynamoDB) en vez del state local?',
      en: 'Why would a team use a remote backend (e.g. S3 + DynamoDB) instead of local state?',
    },
    options: [
      { id: 'd', text: { es: 'Para compartir el state y bloquearlo y evitar aplicaciones concurrentes', en: 'To share state and lock it to prevent concurrent applies' } },
      { id: 'b', text: { es: 'Para ejecutar Terraform más rápido en CPU', en: 'To run Terraform faster on CPU' } },
      { id: 'c', text: { es: 'Para evitar escribir archivos HCL', en: 'To avoid writing HCL files' } },
      { id: 'a', text: { es: 'Para que el state sea legible por humanos en texto plano', en: 'To make state human-readable in plain text' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Un backend remoto guarda el state en un lugar compartido y, con un mecanismo de lock (DynamoDB), evita que dos personas apliquen a la vez y lo corrompan.',
      en: 'A remote backend stores state in a shared place and, with a lock mechanism (DynamoDB), prevents two people from applying at once and corrupting it.',
    },
  },
  {
    id: 'm06-5',
    topic: '06-terraform',
    text: {
      es: '¿Qué problema resuelve principalmente un módulo de Terraform?',
      en: 'What problem does a Terraform module primarily solve?',
    },
    options: [
      { id: 'b', text: { es: 'Encriptar el archivo de state', en: 'Encrypting the state file' } },
      { id: 'c', text: { es: 'Acelerar el comando apply', en: 'Speeding up the apply command' } },
      { id: 'd', text: { es: 'Reemplazar al provider del cloud', en: 'Replacing the cloud provider' } },
      { id: 'a', text: { es: 'Empaquetar recursos reutilizables con inputs y outputs para no repetir configuración', en: 'Packaging reusable resources with inputs and outputs to avoid repeating configuration' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Un módulo encapsula un conjunto de recursos con inputs y outputs, permitiendo reutilizar la misma infraestructura parametrizada (por ejemplo una VPC) en varios lugares.',
      en: 'A module encapsulates a set of resources with inputs and outputs, letting you reuse the same parametrized infrastructure (e.g. a VPC) in several places.',
    },
  },
];
