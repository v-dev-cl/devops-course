import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '10-fw-1',
    topic: '10-seguridad-red',
    text: {
      es: 'En un k8s bare-metal pusiste una regla `ufw deny` sobre el puerto de un NodePort, pero el servicio sigue respondiendo desde afuera. ¿Por qué no lo bloquea ufw?',
      en: "On bare-metal k8s you added a `ufw deny` rule on a NodePort's port, but the service still answers from outside. Why doesn't ufw block it?",
    },
    options: [
      { id: 'a', text: { es: 'Porque ufw solo filtra tráfico saliente, no entrante', en: 'Because ufw only filters outbound traffic, not inbound' } },
      { id: 'b', text: { es: 'El CNI y kube-proxy programan reglas de iptables/nftables (incluido el DNAT en PREROUTING) que se evalúan antes que la cadena INPUT de ufw', en: "The CNI and kube-proxy program iptables/nftables rules (including DNAT in PREROUTING) that are evaluated before ufw's INPUT chain" } },
      { id: 'c', text: { es: 'Porque NodePort usa UDP y ufw solo entiende TCP', en: 'Because NodePort uses UDP and ufw only understands TCP' } },
      { id: 'd', text: { es: 'Porque hay que reiniciar el nodo para que ufw tome la regla', en: 'Because you must reboot the node for ufw to pick up the rule' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El CNI y kube-proxy insertan sus propias cadenas de iptables/nftables. El DNAT que redirige el NodePort ocurre en PREROUTING (tabla nat), que se evalúa antes que la cadena INPUT (tabla filter) donde vive la regla de ufw; por eso el tráfico ya fue reescrito y reenviado cuando ufw debería verlo.',
      en: "The CNI and kube-proxy insert their own iptables/nftables chains. The DNAT that redirects the NodePort happens in PREROUTING (nat table), which is evaluated before the INPUT chain (filter table) where the ufw rule lives; the traffic is already rewritten and forwarded by the time ufw would see it.",
    },
  },
  {
    id: '10-fw-2',
    topic: '10-seguridad-red',
    text: {
      es: 'Si el firewall del host no es el control de perímetro confiable, ¿qué dos controles sí gobiernan el acceso en un k8s bare-metal?',
      en: 'If the host firewall is not the reliable perimeter control, which two controls actually govern access on bare-metal k8s?',
    },
    options: [
      { id: 'a', text: { es: 'El firewall del proveedor/externo (delante del host) para el perímetro, y NetworkPolicy para el tráfico pod-a-pod dentro del cluster', en: 'The provider/external firewall (ahead of the host) for the perimeter, and NetworkPolicy for pod-to-pod traffic inside the cluster' } },
      { id: 'b', text: { es: 'Solo SELinux y AppArmor en cada nodo', en: 'Only SELinux and AppArmor on each node' } },
      { id: 'c', text: { es: 'Reglas de ufw más agresivas y un cron que las reaplica', en: 'More aggressive ufw rules plus a cron that re-applies them' } },
      { id: 'd', text: { es: 'El liveness probe y el readiness probe del pod', en: "The pod's liveness and readiness probes" } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El perímetro real es el firewall del proveedor o externo, que está fuera del host y filtra antes de que el paquete toque las cadenas del CNI. Para el tráfico entre pods dentro del cluster, NetworkPolicy (que el CNI hace cumplir) es el control adecuado.',
      en: 'The real perimeter is the provider or external firewall, which sits outside the host and filters before the packet ever reaches the CNI chains. For pod-to-pod traffic inside the cluster, NetworkPolicy (enforced by the CNI) is the right control.',
    },
  },
  {
    id: '10-fw-3',
    topic: '10-seguridad-red',
    text: {
      es: 'Estás auditando un cluster y quieres encontrar qué servicios están expuestos vía NodePort o LoadBalancer. ¿Qué afirmación es correcta?',
      en: 'You are auditing a cluster and want to find which services are exposed via NodePort or LoadBalancer. Which statement is correct?',
    },
    options: [
      { id: 'a', text: { es: 'Un servicio ClusterIP queda expuesto a internet por defecto en bare-metal', en: 'A ClusterIP service is exposed to the internet by default on bare-metal' } },
      { id: 'b', text: { es: 'NodePort y LoadBalancer abren puertos alcanzables en el nodo, así que cualquiera con ruta al nodo los alcanza salvo que un firewall externo lo impida', en: 'NodePort and LoadBalancer open reachable ports on the node, so anyone with a route to the node reaches them unless an external firewall stops it' } },
      { id: 'c', text: { es: 'NodePort solo es accesible desde dentro del cluster', en: 'NodePort is only reachable from inside the cluster' } },
      { id: 'd', text: { es: 'LoadBalancer requiere obligatoriamente una nube administrada y nunca funciona en bare-metal', en: 'LoadBalancer strictly requires a managed cloud and never works on bare-metal' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'ClusterIP es interno; NodePort y LoadBalancer (este último vía MetalLB u otro en bare-metal) abren un puerto alcanzable en el nodo. Como el DNAT del CNI/kube-proxy salta la cadena INPUT de ufw, quien tenga ruta al nodo llega al servicio salvo que un firewall externo lo bloquee antes.',
      en: 'ClusterIP is internal; NodePort and LoadBalancer (the latter via MetalLB or similar on bare-metal) open a reachable port on the node. Because the CNI/kube-proxy DNAT bypasses the ufw INPUT chain, anyone with a route to the node reaches the service unless an external firewall blocks it first.',
    },
  },
];
