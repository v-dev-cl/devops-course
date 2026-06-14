import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-mig-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Por qué instalar Argo CD en modo observación (una `syncPolicy` sin el bloque `automated`) antes de tomar control de un cluster que ya está vivo?',
      en: 'Why install Argo CD in observe mode (a `syncPolicy` without the `automated` block) before taking control of a cluster that is already live?',
    },
    options: [
      { id: 'a', text: { es: 'Porque Argo CD no puede instalarse con `automated` en clusters de un solo nodo', en: 'Because Argo CD cannot be installed with `automated` on single-node clusters' } },
      { id: 'b', text: { es: 'Para que Argo CD compare git contra el estado vivo y muestre el diff sin aplicar ni cambiar nada', en: 'So that Argo CD compares git against the live state and shows the diff without applying or changing anything' } },
      { id: 'c', text: { es: 'Porque el modo observación despliega más rápido que el sync automático', en: 'Because observe mode deploys faster than automated sync' } },
      { id: 'd', text: { es: 'Para evitar tener que escribir manifiestos en git', en: 'To avoid having to write manifests in git' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Sin el bloque `automated`, Argo CD solo observa: marca la Application `OutOfSync` y diffea git contra el cluster, pero el sync es manual y no aplica nada. Así adoptas GitOps sobre un sistema vivo sin arriesgar que un sync automático sobreescriba el estado real.',
      en: 'Without the `automated` block, Argo CD only observes: it marks the Application `OutOfSync` and diffs git against the cluster, but the sync is manual and applies nothing. That is how you adopt GitOps on a live system without risking an automated sync overwriting the real state.',
    },
  },
  {
    id: '05-mig-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'En `edge-eu`, ya vivo, el `argocd app diff` muestra 4 réplicas y una variable de entorno que no están en git. ¿De qué te protege leer ese diff antes de sincronizar?',
      en: 'On the already-live `edge-eu`, `argocd app diff` shows 4 replicas and an environment variable that are not in git. What does reading that diff protect you from before syncing?',
    },
    options: [
      { id: 'a', text: { es: 'De que la imagen del contenedor pese demasiado', en: 'From the container image being too large' } },
      { id: 'b', text: { es: 'De que el certificado TLS del cluster expire', en: 'From the cluster TLS certificate expiring' } },
      { id: 'c', text: { es: 'De que Argo CD consuma demasiada CPU al sincronizar', en: 'From Argo CD using too much CPU while syncing' } },
      { id: 'd', text: { es: 'De que un sync automático sobreescriba el drift —ajustes hechos a mano— y rompa producción; primero reconcilias git con la realidad', en: 'From an automated sync overwriting the drift —hand-made tweaks— and breaking production; you first reconcile git with reality' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'El diff revela el drift entre git y lo que realmente corre (réplicas, variables, imágenes parcheadas a mano). Si sincronizaras de inmediato, Argo CD impondría git y borraría esos ajustes vivos. La jugada segura es editar git para que coincida con la realidad, de modo que el primer sync sea un no-op.',
      en: 'The diff reveals the drift between git and what is actually running (replicas, variables, hand-patched images). If you synced immediately, Argo CD would impose git and wipe those live tweaks. The safe move is to edit git to match reality, so the first sync is a no-op.',
    },
  },
  {
    id: '05-mig-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Ya tienes `dealhive-edge` reconciliado. ¿Cuál es la forma correcta de cortar a GitOps el resto de la flota y de hacer rollback?',
      en: 'You already have `dealhive-edge` reconciled. What is the correct way to cut the rest of the fleet over to GitOps and to roll back?',
    },
    options: [
      { id: 'a', text: { es: 'Promover un servicio a la vez agregando `automated`, y hacer rollback con `git revert` del commit del manifiesto', en: 'Promote one service at a time by adding `automated`, and roll back with a `git revert` of the manifest commit' } },
      { id: 'b', text: { es: 'Promover toda la flota a `automated` en un solo paso y hacer rollback con `kubectl apply` a mano', en: 'Promote the whole fleet to `automated` in one step and roll back with a hand `kubectl apply`' } },
      { id: 'c', text: { es: 'Dejar todo en modo observación para siempre y sincronizar a mano cada cambio', en: 'Leave everything in observe mode forever and sync every change by hand' } },
      { id: 'd', text: { es: 'Borrar y recrear cada cluster para que arranque ya en GitOps', en: 'Delete and recreate each cluster so it starts in GitOps already' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Promueves un Application a la vez agregando `automated` (`prune`/`selfHeal`); si uno falla, el resto sigue en observación, intacto. Una vez en GitOps, el rollback es un `git revert` del commit que metió el cambio, que Argo CD reconcilia solo —no un `kubectl apply` de pánico.',
      en: 'You promote one Application at a time by adding `automated` (`prune`/`selfHeal`); if one fails, the rest stays in observe mode, untouched. Once on GitOps, the rollback is a `git revert` of the commit that introduced the change, which Argo CD reconciles on its own —not a panicked `kubectl apply`.',
    },
  },
];
