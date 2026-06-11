import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-bpw-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Un servicio tarda 8 s en conectar a Mongo al arrancar. ¿Qué probe evita que reciba tráfico antes de estar listo, sin reiniciarlo en loop?',
      en: 'A service takes 8 s to connect to Mongo at startup. Which probe keeps it from receiving traffic before it is ready, without restarting it in a loop?',
    },
    options: [
      { id: 'a', text: { es: 'La readiness probe: si falla, saca el pod de los endpoints del Service pero no lo reinicia', en: 'The readiness probe: if it fails, it pulls the pod from the Service endpoints but does not restart it' } },
      { id: 'b', text: { es: 'La liveness probe: si falla, reinicia el contenedor', en: 'The liveness probe: if it fails, it restarts the container' } },
      { id: 'c', text: { es: 'Ambas son equivalentes, da igual cuál uses', en: 'Both are equivalent, it does not matter which you use' } },
      { id: 'd', text: { es: 'Ninguna; hay que subir initialDelaySeconds de la liveness', en: 'Neither; you must raise the liveness initialDelaySeconds' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Readiness saca de rotación sin reiniciar — ideal para arranques lentos. Si pusieras eso como liveness, k8s reiniciaría el pod para siempre porque nunca alcanza a arrancar dentro del umbral.',
      en: 'Readiness pulls out of rotation without restarting — ideal for slow starts. If you set that as liveness, k8s would restart the pod forever because it never finishes starting within the threshold.',
    },
  },
  {
    id: '05-bpw-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'En un nodo k3s compartido por decenas de servicios, ¿qué provoca NO declarar resource requests?',
      en: 'On a k3s node shared by dozens of services, what does NOT declaring resource requests cause?',
    },
    options: [
      { id: 'a', text: { es: 'Que las imágenes pesen más', en: 'Larger image sizes' } },
      { id: 'b', text: { es: 'Que el TLS deje de funcionar', en: 'TLS stops working' } },
      { id: 'c', text: { es: 'Sobrecompromiso: el scheduler asume que el pod no necesita nada y encaja de más, y cuando todos piden RAM real el kernel mata procesos (OOM)', en: 'Overcommit: the scheduler assumes the pod needs nothing and overpacks, and when everyone asks for real RAM the kernel kills processes (OOM)' } },
      { id: 'd', text: { es: 'Que el Deployment no cree ReplicaSet', en: 'The Deployment fails to create a ReplicaSet' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El scheduler usa el request para decidir en qué nodo cabe el pod. Sin requests asume cero, sobrecarga el nodo y un servicio con fuga de memoria puede tumbar a sus vecinos.',
      en: 'The scheduler uses the request to decide which node the pod fits on. Without requests it assumes zero, overcommits the node, and a service with a memory leak can take down its neighbors.',
    },
  },
  {
    id: '05-bpw-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Qué garantiza runAsNonRoot: true en el securityContext?',
      en: 'What does runAsNonRoot: true guarantee in the securityContext?',
    },
    options: [
      { id: 'a', text: { es: 'Que el pod use menos memoria', en: 'That the pod uses less memory' } },
      { id: 'b', text: { es: 'Que el Service balancee mejor', en: 'That the Service load-balances better' } },
      { id: 'c', text: { es: 'Que el contenedor tenga acceso de red restringido', en: 'That the container has restricted network access' } },
      { id: 'd', text: { es: 'Que k8s rechace arrancar el pod si la imagen correría como root, como defensa en profundidad ante un escape de contenedor', en: 'That k8s refuses to start the pod if the image would run as root, as defense in depth against a container escape' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Si una vuln permite escapar del contenedor, un root interno puede volverse root del nodo. runAsNonRoot obliga a correr como usuario no privilegiado (te empuja a USER node en la imagen).',
      en: 'If a vuln lets someone escape the container, an internal root can become node root. runAsNonRoot forces running as a non-privileged user (it pushes you to USER node in the image).',
    },
  },
];
