import type { QuizQuestion } from './types';

export const assessmentQuestions: QuizQuestion[] = [
  {
    id: 'a-01-1',
    topic: '01-fundamentos',
    text: {
      es: '¿Qué métrica DORA mide cuánto tarda un commit en llegar a producción?',
      en: 'Which DORA metric measures how long a commit takes to reach production?',
    },
    options: [
      { id: 'a', text: { es: 'Lead time for changes', en: 'Lead time for changes' } },
      { id: 'b', text: { es: 'Frecuencia de deploy', en: 'Deployment frequency' } },
      { id: 'c', text: { es: 'MTTR', en: 'MTTR' } },
      { id: 'd', text: { es: 'Tasa de fallas por cambio', en: 'Change failure rate' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Lead time for changes mide el tiempo desde el commit hasta que el cambio corre en producción.',
      en: 'Lead time for changes measures the time from commit until the change runs in production.',
    },
  },
  {
    id: 'a-01-2',
    topic: '01-fundamentos',
    text: {
      es: '¿Qué representa la "A" en el modelo CALMS?',
      en: 'What does the "A" in the CALMS model stand for?',
    },
    options: [
      { id: 'b', text: { es: 'Availability', en: 'Availability' } },
      { id: 'a', text: { es: 'Automation', en: 'Automation' } },
      { id: 'c', text: { es: 'Agility', en: 'Agility' } },
      { id: 'd', text: { es: 'Architecture', en: 'Architecture' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'En CALMS la "A" es Automation: automatizar el trabajo repetitivo es uno de los pilares de DevOps.',
      en: 'In CALMS the "A" stands for Automation: automating repetitive work is one of the pillars of DevOps.',
    },
  },
  {
    id: 'a-02-1',
    topic: '02-linux-redes',
    text: {
      es: '¿Qué comando muestra qué proceso está escuchando en el puerto 4000?',
      en: 'Which command shows which process is listening on port 4000?',
    },
    options: [
      { id: 'b', text: { es: '`ps aux`', en: '`ps aux`' } },
      { id: 'c', text: { es: '`top`', en: '`top`' } },
      { id: 'a', text: { es: '`ss -tlnp`', en: '`ss -tlnp`' } },
      { id: 'd', text: { es: '`ifconfig`', en: '`ifconfig`' } },
    ],
    correct: ['a'],
    explanation: {
      es: '`ss -tlnp` lista los sockets TCP en escucha con el proceso dueño de cada puerto.',
      en: '`ss -tlnp` lists listening TCP sockets along with the process owning each port.',
    },
  },
  {
    id: 'a-02-2',
    topic: '02-linux-redes',
    text: {
      es: 'Un contenedor no puede resolver `db.internal`. ¿Qué capa revisas primero?',
      en: "A container can't resolve `db.internal`. Which layer do you check first?",
    },
    options: [
      { id: 'b', text: { es: 'Ruteo TCP', en: 'TCP routing' } },
      { id: 'c', text: { es: 'Certificados TLS', en: 'TLS certificates' } },
      { id: 'd', text: { es: 'Reglas de firewall', en: 'Firewall rules' } },
      { id: 'a', text: { es: 'Resolución DNS (resolv.conf / DNS del clúster)', en: 'DNS resolution (resolv.conf / cluster DNS)' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Que un nombre no resuelva es un problema de DNS, así que partes por resolv.conf o el DNS del clúster.',
      en: 'A name failing to resolve is a DNS problem, so you start with resolv.conf or the cluster DNS.',
    },
  },
  {
    id: 'a-03-1',
    topic: '03-docker',
    text: {
      es: '¿Por qué los multi-stage builds producen imágenes más chicas?',
      en: 'Why do multi-stage builds produce smaller images?',
    },
    options: [
      { id: 'b', text: { es: 'Comprimen mejor las capas', en: 'They compress layers better' } },
      { id: 'a', text: { es: 'El stage final copia solo los artefactos necesarios y descarta las herramientas de build', en: 'The final stage copies only needed artifacts, dropping build tools' } },
      { id: 'c', text: { es: 'Corren los stages en paralelo', en: 'They run stages in parallel' } },
      { id: 'd', text: { es: 'Deduplican las imágenes base', en: 'They deduplicate base images' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El stage final solo copia los artefactos que necesitas y deja afuera compiladores y dependencias de build.',
      en: 'The final stage copies only the artifacts you need and leaves out compilers and build dependencies.',
    },
  },
  {
    id: 'a-03-2',
    topic: '03-docker',
    text: {
      es: '¿Qué problema hay en hacer deploy de `myapp:latest` a producción?',
      en: "What's wrong with deploying `myapp:latest` to production?",
    },
    options: [
      { id: 'a', text: { es: 'El tag es mutable, así que no sabes ni puedes hacer rollback de lo que realmente está corriendo', en: "The tag is mutable, so you can't know or roll back what's actually running" } },
      { id: 'b', text: { es: 'Las imágenes `latest` no están optimizadas', en: '`latest` images are unoptimized' } },
      { id: 'c', text: { es: 'Siempre vuelve a bajar la imagen', en: 'It always pulls the image' } },
      { id: 'd', text: { es: 'Se salta los escaneos de seguridad', en: 'It skips security scans' } },
    ],
    correct: ['a'],
    explanation: {
      es: '`latest` es un tag mutable: distintos pushes lo reapuntan, así que no puedes identificar ni hacer rollback de la versión exacta en producción.',
      en: '`latest` is a mutable tag: different pushes repoint it, so you cannot identify or roll back the exact version running in production.',
    },
  },
  {
    id: 'a-04-1',
    topic: '04-cicd',
    text: {
      es: 'En GitHub Actions, ¿qué logra `concurrency` con un group compartido?',
      en: 'In GitHub Actions, what does `concurrency` with a shared group accomplish?',
    },
    options: [
      { id: 'b', text: { es: 'Corre los jobs en paralelo', en: 'Runs jobs in parallel' } },
      { id: 'c', text: { es: 'Cachea las dependencias', en: 'Caches dependencies' } },
      { id: 'd', text: { es: 'Limita los minutos de runner', en: 'Limits runner minutes' } },
      { id: 'a', text: { es: 'Serializa los runs para que no compitan entre sí', en: "Serializes runs so they don't race each other" } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Un `concurrency` group compartido serializa los runs y puede cancelar los anteriores, evitando que dos pipelines compitan.',
      en: 'A shared `concurrency` group serializes runs and can cancel earlier ones, preventing two pipelines from racing.',
    },
  },
  {
    id: 'a-04-2',
    topic: '04-cicd',
    text: {
      es: '¿Qué distingue a CD (continuous delivery/deployment) de CI?',
      en: 'What distinguishes CD (continuous delivery/deployment) from CI?',
    },
    options: [
      { id: 'b', text: { es: 'CD corre más rápido', en: 'CD runs faster' } },
      { id: 'c', text: { es: 'CI es solo para monorepos', en: 'CI is for monorepos only' } },
      { id: 'a', text: { es: 'CI construye y testea; CD efectivamente lleva el artefacto a un ambiente', en: 'CI builds and tests; CD actually gets the artifact into an environment' } },
      { id: 'd', text: { es: 'CD requiere Kubernetes', en: 'CD requires Kubernetes' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'CI se encarga de construir y testear; CD toma ese artefacto y lo entrega a un ambiente (staging o producción).',
      en: 'CI builds and tests; CD takes that artifact and delivers it into an environment (staging or production).',
    },
  },
  {
    id: 'a-05-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Qué provoca que falle un liveness probe?',
      en: 'What does a liveness probe failure cause?',
    },
    options: [
      { id: 'b', text: { es: 'El pod se saca de los endpoints del Service', en: 'The pod is removed from Service endpoints' } },
      { id: 'a', text: { es: 'El kubelet reinicia el contenedor', en: 'The kubelet restarts the container' } },
      { id: 'c', text: { es: 'El deployment hace rollback', en: 'The deployment rolls back' } },
      { id: 'd', text: { es: 'El nodo se marca como cordoned', en: 'The node is cordoned' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Cuando falla el liveness probe, el kubelet asume que el contenedor está colgado y lo reinicia.',
      en: 'When the liveness probe fails, the kubelet assumes the container is stuck and restarts it.',
    },
  },
  {
    id: 'a-05-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'En GitOps (por ejemplo ArgoCD), ¿cómo llegan los cambios al clúster?',
      en: 'In GitOps (e.g. ArgoCD), how do changes reach the cluster?',
    },
    options: [
      { id: 'b', text: { es: 'CI hace push de los manifests con kubectl', en: 'CI pushes manifests with kubectl' } },
      { id: 'c', text: { es: 'Un admin aplica los manifests después de revisarlos', en: 'An admin applies manifests after review' } },
      { id: 'd', text: { es: 'Webhooks aplican los diffs directamente', en: 'Webhooks apply diffs directly' } },
      { id: 'a', text: { es: 'Un controlador dentro del clúster hace pull del estado deseado desde git y reconcilia', en: 'A controller in the cluster pulls desired state from git and reconciles' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'En GitOps un controlador en el clúster hace pull del estado deseado desde git y reconcilia el estado real con él.',
      en: 'In GitOps a controller in the cluster pulls the desired state from git and reconciles the actual state to match it.',
    },
  },
  {
    id: 'a-06-1',
    topic: '06-terraform',
    text: {
      es: '¿Para qué sirve el archivo de state de Terraform?',
      en: 'What is the Terraform state file for?',
    },
    options: [
      { id: 'a', text: { es: 'Mapear los recursos declarados con los objetos reales para que Terraform pueda hacer diff', en: 'Mapping declared resources to real-world objects so Terraform can diff' } },
      { id: 'b', text: { es: 'Guardar las credenciales del provider', en: 'Storing provider credentials' } },
      { id: 'c', text: { es: 'Cachear los planes', en: 'Caching plans' } },
      { id: 'd', text: { es: 'Fijar las versiones de los módulos', en: 'Locking module versions' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El state mapea cada recurso declarado con el objeto real, lo que le permite a Terraform calcular el diff entre lo deseado y lo existente.',
      en: 'State maps each declared resource to the real object, letting Terraform compute the diff between desired and existing.',
    },
  },
  {
    id: 'a-06-2',
    topic: '06-terraform',
    text: {
      es: '¿Por qué usar un backend remoto (por ejemplo S3) para el state?',
      en: 'Why use a remote backend (e.g. S3) for state?',
    },
    options: [
      { id: 'b', text: { es: 'Planes más rápidos', en: 'Faster plans' } },
      { id: 'c', text: { es: 'Almacenamiento más barato', en: 'Cheaper storage' } },
      { id: 'a', text: { es: 'State compartido + locking para que el equipo no lo corrompa', en: "Shared state + locking so the team doesn't corrupt it" } },
      { id: 'd', text: { es: 'Es obligatorio para los módulos', en: 'Required for modules' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Un backend remoto comparte el state entre el equipo y agrega locking para que dos personas no lo escriban a la vez y lo corrompan.',
      en: 'A remote backend shares state across the team and adds locking so two people do not write it at once and corrupt it.',
    },
  },
  {
    id: 'a-07-1',
    topic: '07-observabilidad',
    text: {
      es: 'Logs, métricas y trazas: ¿cuál es la más adecuada para "la latencia p95 subió a las 14:30"?',
      en: 'Logs, metrics, and traces: which is best suited to "p95 latency went up at 14:30"?',
    },
    options: [
      { id: 'b', text: { es: 'Logs', en: 'Logs' } },
      { id: 'c', text: { es: 'Trazas', en: 'Traces' } },
      { id: 'd', text: { es: 'Crash dumps', en: 'Crash dumps' } },
      { id: 'a', text: { es: 'Métricas', en: 'Metrics' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Las métricas son series de tiempo agregadas, ideales para ver percentiles como la p95 a lo largo del tiempo.',
      en: 'Metrics are aggregated time series, ideal for tracking percentiles like p95 over time.',
    },
  },
  {
    id: 'a-07-2',
    topic: '07-observabilidad',
    text: {
      es: '¿Qué representa el error budget de un SLO?',
      en: 'What does an SLO error budget represent?',
    },
    options: [
      { id: 'b', text: { es: 'La cuota mensual de alertas', en: 'Monthly alert quota' } },
      { id: 'a', text: { es: 'Cuánta falta de confiabilidad puedes gastar antes de congelar cambios riesgosos', en: 'How much unreliability you can spend before freezing risky changes' } },
      { id: 'c', text: { es: 'El límite de cantidad de incidentes', en: 'Incident count limit' } },
      { id: 'd', text: { es: 'Las horas de on-call', en: 'On-call hours' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El error budget es la diferencia entre el 100% y tu objetivo de SLO: cuánta falla puedes gastar antes de frenar los cambios riesgosos.',
      en: 'The error budget is the gap between 100% and your SLO target: how much failure you can spend before halting risky changes.',
    },
  },
  {
    id: 'a-08-1',
    topic: '08-cloud-aws',
    text: {
      es: '¿Qué servicio de AWS le da a una instancia EC2 permiso para leer un bucket S3 sin guardar llaves?',
      en: 'Which AWS service grants an EC2 instance permission to read an S3 bucket without storing keys?',
    },
    options: [
      { id: 'b', text: { es: 'Un security group', en: 'Security group' } },
      { id: 'c', text: { es: 'Una llave KMS', en: 'KMS key' } },
      { id: 'a', text: { es: 'Un IAM role asociado vía instance profile', en: 'IAM role attached via instance profile' } },
      { id: 'd', text: { es: 'Un VPC endpoint', en: 'VPC endpoint' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Un IAM role asociado vía instance profile entrega credenciales temporales a la EC2, así no guardas llaves de larga vida.',
      en: 'An IAM role attached via an instance profile hands temporary credentials to the EC2 instance, so you store no long-lived keys.',
    },
  },
  {
    id: 'a-08-2',
    topic: '08-cloud-aws',
    text: {
      es: '¿Cuál es el principal trade-off entre on-premise y cloud?',
      en: 'What is the main trade-off of on-premise vs cloud?',
    },
    options: [
      { id: 'a', text: { es: 'CapEx + carga operacional vs OpEx + servicios administrados', en: 'CapEx + ops burden vs OpEx + managed services' } },
      { id: 'b', text: { es: 'On-prem siempre es más barato', en: 'On-prem is always cheaper' } },
      { id: 'c', text: { es: 'Cloud siempre es más rápido', en: 'Cloud is always faster' } },
      { id: 'd', text: { es: 'On-prem no puede correr Kubernetes', en: "On-prem can't run Kubernetes" } },
    ],
    correct: ['a'],
    explanation: {
      es: 'On-premise implica CapEx y la carga de operar el hardware; la cloud lo cambia por OpEx y servicios administrados.',
      en: 'On-premise means CapEx and the burden of operating the hardware; cloud trades that for OpEx and managed services.',
    },
  },
  {
    id: 'a-09-1',
    topic: '09-seguridad',
    text: {
      es: 'Hardcodeaste una llave de AWS y la commiteaste hace 30 commits. ¿Qué tipo de scanner la encuentra?',
      en: 'You hardcoded an AWS key and committed it 30 commits ago. Which kind of scanner finds it?',
    },
    options: [
      { id: 'a', text: { es: 'SAST (análisis estático del código)', en: 'SAST (static code analysis)' } },
      { id: 'b', text: { es: 'Un escáner de secretos sobre el historial de git (gitleaks)', en: 'A secret scanner over git history (gitleaks)' } },
      { id: 'c', text: { es: 'SCA (análisis de dependencias)', en: 'SCA (dependency analysis)' } },
      { id: 'd', text: { es: 'Un escáner de imágenes de contenedor', en: 'A container image scanner' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Los secretos quedan en el historial de git para siempre; un escáner de secretos como gitleaks revisa todos los commits, no solo el árbol actual.',
      en: 'Secrets live in git history forever; a secret scanner like gitleaks inspects every commit, not just the current tree.',
    },
  },
  {
    id: 'a-09-2',
    topic: '09-seguridad',
    text: {
      es: '¿Qué significa "shift-left" en seguridad?',
      en: 'What does "shift-left" mean in security?',
    },
    options: [
      { id: 'a', text: { es: 'Mover los chequeos de seguridad temprano, al pipeline, en vez de una auditoría al final', en: 'Move security checks early, into the pipeline, instead of a late audit' } },
      { id: 'b', text: { es: 'Migrar la infraestructura a la izquierda del diagrama de red', en: 'Migrate infrastructure to the left of the network diagram' } },
      { id: 'c', text: { es: 'Correr todo en un solo cluster', en: 'Run everything in a single cluster' } },
      { id: 'd', text: { es: 'Delegar la seguridad al equipo de operaciones', en: 'Delegate security to the operations team' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Shift-left es correr SAST, SCA, escaneo de secretos e imágenes en CI: encontrar problemas cuando arreglarlos es barato, no en una auditoría tardía.',
      en: 'Shift-left is running SAST, SCA, secret and image scanning in CI: catching issues when they are cheap to fix, not in a late audit.',
    },
  },
];
