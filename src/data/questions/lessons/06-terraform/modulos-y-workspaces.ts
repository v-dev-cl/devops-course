import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '06-myw-1',
    topic: '06-terraform',
    text: {
      es: 'Usas un módulo del Terraform Registry sin especificar la línea version. ¿Cuál es el riesgo?',
      en: 'You use a module from the Terraform Registry without specifying the version line. What is the risk?',
    },
    options: [
      { id: 'a', text: { es: 'Ninguno, los módulos del registry son siempre estables', en: 'None, registry modules are always stable' } },
      { id: 'b', text: { es: 'Terraform se niega a inicializar sin version', en: 'Terraform refuses to initialize without version' } },
      { id: 'c', text: { es: 'El módulo solo funciona en local', en: 'The module only works locally' } },
      { id: 'd', text: { es: 'Cada init puede traer una versión nueva que rompa tu apply: drift disfrazado de upgrade', en: 'Each init can pull a new version that breaks your apply: drift disguised as an upgrade' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Sin pinear la versión, init puede actualizar el módulo a lo último y romperte el apply sin que cambies tu código. Siempre pínalo, por ejemplo version = "~> 5.0".',
      en: 'Without pinning the version, init can update the module to the latest and break your apply without you changing your code. Always pin it, e.g. version = "~> 5.0".',
    },
  },
  {
    id: '06-myw-2',
    topic: '06-terraform',
    text: {
      es: 'Quieres aislar prod de verdad de dev. ¿Cuál es el enfoque recomendado por la industria?',
      en: 'You want to truly isolate prod from dev. What is the industry-recommended approach?',
    },
    options: [
      { id: 'a', text: { es: 'Directorios separados por entorno, cada uno con su propio backend y credenciales, reusando un módulo común', en: 'Separate per-environment directories, each with its own backend and credentials, reusing a shared module' } },
      { id: 'b', text: { es: 'Un solo directorio y workspaces de Terraform para dev y prod', en: 'A single directory and Terraform workspaces for dev and prod' } },
      { id: 'c', text: { es: 'Copiar y pegar todo el HCL en dos repos sin módulos', en: 'Copy-paste all the HCL into two repos with no modules' } },
      { id: 'd', text: { es: 'Un solo state global para todos los entornos', en: 'A single global state for all environments' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El consenso es directorios separados por entorno, cada uno con su backend (o cuenta) y permisos propios, reusando un módulo común. Así el blast radius queda acotado: un apply en dev no puede tocar prod.',
      en: 'The consensus is separate per-environment directories, each with its own backend (or account) and permissions, reusing a shared module. That bounds the blast radius: an apply in dev cannot touch prod.',
    },
  },
  {
    id: '06-myw-3',
    topic: '06-terraform',
    text: {
      es: '¿Cuál es la principal limitación de usar workspaces de Terraform para separar dev y prod?',
      en: 'What is the main limitation of using Terraform workspaces to separate dev and prod?',
    },
    options: [
      { id: 'a', text: { es: 'Los workspaces no permiten tener más de un recurso', en: 'Workspaces do not allow having more than one resource' } },
      { id: 'b', text: { es: 'Todos los workspaces comparten el mismo backend y el mismo código: no hay permisos por entorno y un apply desde la carpeta equivocada puede tocar prod', en: 'All workspaces share the same backend and the same code: no per-environment permissions, and an apply from the wrong folder can touch prod' } },
      { id: 'c', text: { es: 'Cada workspace exige un provider distinto', en: 'Each workspace requires a different provider' } },
      { id: 'd', text: { es: 'Los workspaces no guardan state', en: 'Workspaces do not store state' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Los workspaces dan states paralelos pero comparten backend y código, así que no puedes dar permisos distintos por entorno y es fácil tocar prod por error. Sirven para variaciones efímeras y de bajo riesgo, no como frontera dev/prod.',
      en: 'Workspaces give parallel states but share backend and code, so you cannot grant different per-environment permissions and it is easy to touch prod by mistake. They suit ephemeral, low-risk variations, not the dev/prod boundary.',
    },
  },
];
