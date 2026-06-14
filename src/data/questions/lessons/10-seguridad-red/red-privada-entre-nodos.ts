import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '10-mesh-1',
    topic: '10-seguridad-red',
    text: {
      es: 'Los nodos de DealHive están repartidos en tres proveedores y hoy se hablan por internet público con una allowlist de IPs en cada firewall. ¿Qué ventaja concreta aporta moverlos a un mesh privado (WireGuard/Tailscale)?',
      en: "DealHive's nodes are spread across three providers and today talk over the public internet with an IP allowlist on each firewall. What concrete advantage does moving them to a private mesh (WireGuard/Tailscale) bring?",
    },
    options: [
      { id: 'a', text: { es: 'Elimina la necesidad de autenticar los datastores, porque el mesh ya es seguro', en: 'It removes the need to authenticate datastores, because the mesh is already secure' } },
      { id: 'b', text: { es: 'Los nodos se hablan por IPs de overlay estables y cifradas de punta a punta; los servicios no quedan expuestos en IPs públicas ni dependen de allowlists que cambian', en: "Nodes talk over stable, end-to-end encrypted overlay IPs; services aren't exposed on public IPs nor depend on changing allowlists" } },
      { id: 'c', text: { es: 'Hace innecesario el firewall del proveedor en todos los casos', en: 'It makes the provider firewall unnecessary in all cases' } },
      { id: 'd', text: { es: 'Reduce la latencia entre regiones porque el tráfico deja de ir cifrado', en: 'It lowers cross-region latency because traffic stops being encrypted' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El mesh forma una red overlay cifrada entre los nodos: cada uno recibe una IP privada estable y el tráfico va cifrado de punta a punta, sin exponer puertos en IPs públicas ni depender de allowlists frágiles. No reemplaza la auth de los datastores ni el perímetro: es una capa más de defensa en profundidad, y el cifrado no se sacrifica por latencia.',
      en: 'The mesh forms an encrypted overlay network among the nodes: each gets a stable private IP and traffic is end-to-end encrypted, without exposing ports on public IPs or depending on fragile allowlists. It does not replace datastore auth or the perimeter: it is one more layer of defense in depth, and encryption is not traded away for latency.',
    },
  },
  {
    id: '10-mesh-2',
    topic: '10-seguridad-red',
    text: {
      es: 'El hub de Argo CD sincroniza a cada spoke abriendo una conexión al API server de cada cluster (lo viste en hub-and-spoke). Si montas un mesh privado, ¿qué cambia para ese plano de control hub→spoke?',
      en: "The Argo CD hub syncs each spoke by opening a connection to each cluster's API server (you saw it in hub-and-spoke). If you set up a private mesh, what changes for that hub→spoke control plane?",
    },
    options: [
      { id: 'a', text: { es: 'El hub deja de necesitar credenciales para cada cluster porque el mesh autentica por él', en: 'The hub stops needing credentials per cluster because the mesh authenticates for it' } },
      { id: 'b', text: { es: 'Cada spoke tiene que exponer su API server en una IP pública para que el hub lo alcance', en: 'Each spoke has to expose its API server on a public IP so the hub can reach it' } },
      { id: 'c', text: { es: 'El hub pasa a sincronizar en modo pull desde cada spoke, invirtiendo la dirección', en: 'The hub switches to pull mode from each spoke, reversing the direction' } },
      { id: 'd', text: { es: 'El hub le habla a cada spoke por su IP de overlay, así el API server solo escucha en la red privada y nunca aparece en el internet público', en: "The hub talks to each spoke over its overlay IP, so the API server only listens on the private network and never appears on the public internet" } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Con el mesh, la conexión hub→spoke viaja por la overlay privada: el API server de cada cluster solo escucha en la IP de mesh y no queda expuesto en internet, dejando de depender de una allowlist. El hub sigue necesitando sus credenciales por cluster y la dirección de sync no cambia; el mesh solo mueve el tráfico fuera de la red abierta.',
      en: 'With the mesh, the hub→spoke connection travels over the private overlay: each cluster API server only listens on the mesh IP and is not exposed on the internet, so it stops depending on an allowlist. The hub still needs its per-cluster credentials and the sync direction does not change; the mesh just moves the traffic off the open network.',
    },
  },
  {
    id: '10-mesh-3',
    topic: '10-seguridad-red',
    text: {
      es: '¿Cuál es la diferencia entre un gateway VPN clásico (concentrador) y un mesh full como el de WireGuard/Tailscale?',
      en: 'What is the difference between a classic VPN gateway (concentrator) and a full mesh like WireGuard/Tailscale?',
    },
    options: [
      { id: 'a', text: { es: 'No hay diferencia real; "mesh" es solo otro nombre para un concentrador VPN', en: 'There is no real difference; "mesh" is just another name for a VPN concentrator' } },
      { id: 'b', text: { es: 'El mesh no cifra el tráfico, mientras que el gateway VPN clásico sí', en: 'The mesh does not encrypt traffic, while the classic VPN gateway does' } },
      { id: 'c', text: { es: 'La VPN clásica enruta todo por un concentrador central (cuello de botella y único punto de falla); el mesh full arma túneles WireGuard directos peer-to-peer entre cada par de nodos, por el camino más corto', en: 'The classic VPN routes everything through a central concentrator (bottleneck and single point of failure); the full mesh builds direct peer-to-peer WireGuard tunnels between each pair of nodes, over the shortest path' } },
      { id: 'd', text: { es: 'El mesh solo funciona dentro de un mismo proveedor; el gateway VPN clásico es el único que cruza proveedores', en: 'The mesh only works within a single provider; the classic VPN gateway is the only one that crosses providers' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'Una VPN clásica es hub-and-spoke a nivel de red: todo pasa por un concentrador central que es cuello de botella y único punto de falla. Un mesh full es peer-to-peer: cada par de nodos arma un túnel WireGuard directo por el camino más corto, sin chokepoint. Ambos cifran (WireGuard es el protocolo) y el mesh está pensado justamente para cruzar proveedores y regiones.',
      en: 'A classic VPN is hub-and-spoke at the network level: everything passes through a central concentrator that is a bottleneck and single point of failure. A full mesh is peer-to-peer: each pair of nodes builds a direct WireGuard tunnel over the shortest path, with no chokepoint. Both encrypt (WireGuard is the protocol), and the mesh is designed precisely to cross providers and regions.',
    },
  },
];
