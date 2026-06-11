import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '09-pac-1',
    topic: '09-seguridad',
    text: {
      es: '¿Qué problema resuelve codificar tus guardarraíles como policy-as-code en vez de revisarlos a mano en cada PR?',
      en: 'What problem does codifying your guardrails as policy-as-code solve, versus reviewing them by hand on every PR?',
    },
    options: [
      { id: 'a', text: { es: 'Hace que las imágenes pesen menos', en: 'It makes images smaller' } },
      { id: 'b', text: { es: 'Reemplaza la necesidad de tener tests unitarios', en: 'It removes the need for unit tests' } },
      { id: 'c', text: { es: 'Las malas configuraciones (S3 público, correr como root) fallan automáticamente antes de shipear, sin depender de que alguien las note en la revisión', en: 'Misconfigurations (public S3, running as root) fail automatically before shipping, without relying on someone catching them in review' } },
      { id: 'd', text: { es: 'Cifra los secretos en el repositorio', en: 'It encrypts secrets in the repository' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Policy-as-code convierte la regla ("nada de S3 público", "nada de root") en un chequeo automático y repetible del pipeline. La mala configuración falla sola antes de llegar a producción, en vez de depender de que un humano la note en cada revisión.',
      en: 'Policy-as-code turns the rule ("no public S3", "no root") into an automatic, repeatable pipeline check. The misconfiguration fails on its own before reaching production, instead of relying on a human spotting it in every review.',
    },
  },
  {
    id: '09-pac-2',
    topic: '09-seguridad',
    text: {
      es: 'Aplicas una ClusterPolicy de Kyverno con `validationFailureAction: Audit`. Alguien despliega un Pod que la viola. ¿Qué pasa?',
      en: 'You apply a Kyverno ClusterPolicy with `validationFailureAction: Audit`. Someone deploys a Pod that violates it. What happens?',
    },
    options: [
      { id: 'a', text: { es: 'El despliegue se bloquea en admission y el Pod nunca se crea', en: 'The deploy is blocked at admission and the Pod is never created' } },
      { id: 'b', text: { es: 'El Pod se crea igual; la violación queda registrada en un policy report pero no se bloquea', en: 'The Pod is created anyway; the violation is recorded in a policy report but not blocked' } },
      { id: 'c', text: { es: 'Kyverno borra el Pod unos segundos después de crearse', en: 'Kyverno deletes the Pod a few seconds after it is created' } },
      { id: 'd', text: { es: 'El cluster entero queda en modo solo-lectura hasta arreglar la violación', en: 'The whole cluster goes read-only until the violation is fixed' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'En modo `Audit` Kyverno reporta las violaciones en los policy reports pero no bloquea la admisión: el recurso se crea igual. `Enforce` es el que rechaza el recurso en admission. Audit es el modo para estrenar una policy sin romper despliegues.',
      en: 'In `Audit` mode Kyverno reports violations in policy reports but does not block admission: the resource is still created. `Enforce` is the one that rejects the resource at admission. Audit is the mode for rolling out a policy without breaking deploys.',
    },
  },
  {
    id: '09-pac-3',
    topic: '09-seguridad',
    text: {
      es: 'Quieres impedir que un security group abierto a 0.0.0.0/0 llegue a producción y, por separado, que un Pod con imagen `:latest` se cree en el cluster. ¿Qué herramienta para cada caso?',
      en: 'You want to stop a security group open to 0.0.0.0/0 from reaching production and, separately, stop a Pod with a `:latest` image from being created in the cluster. Which tool for each case?',
    },
    options: [
      { id: 'a', text: { es: 'Kyverno para el security group, Checkov para el Pod', en: 'Kyverno for the security group, Checkov for the Pod' } },
      { id: 'b', text: { es: 'Checkov para ambos, en el pipeline', en: 'Checkov for both, in the pipeline' } },
      { id: 'c', text: { es: 'Kyverno para ambos, en admission', en: 'Kyverno for both, at admission' } },
      { id: 'd', text: { es: 'Checkov sobre el Terraform en CI (antes del deploy) para el security group, y Kyverno en admission de k8s para la imagen `:latest`', en: 'Checkov over the Terraform in CI (before deploy) for the security group, and Kyverno at k8s admission for the `:latest` image' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Checkov escanea IaC (Terraform, k8s, CloudFormation) en el pipeline, antes de aplicar: ahí atrapas el security group abierto. Kyverno es un admission controller dentro del cluster: ahí atrapas el Pod con `:latest` en el momento en que se intenta crear. Cada uno cubre una etapa distinta.',
      en: 'Checkov scans IaC (Terraform, k8s, CloudFormation) in the pipeline, before apply: that is where you catch the open security group. Kyverno is an admission controller inside the cluster: that is where you catch the `:latest` Pod at the moment it is being created. Each covers a different stage.',
    },
  },
];
