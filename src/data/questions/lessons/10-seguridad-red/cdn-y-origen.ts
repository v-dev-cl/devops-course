import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '10-cdn-1',
    topic: '10-seguridad-red',
    text: {
      es: 'Tu sitio está detrás de un CDN con WAF, pero un atacante igual lo golpea sin que el WAF vea nada. ¿Cuál es el mecanismo del bypass?',
      en: 'Your site is behind a CDN with a WAF, but an attacker still hits it without the WAF seeing anything. What is the bypass mechanism?',
    },
    options: [
      { id: 'a', text: { es: 'El WAF deja pasar el ataque porque sus reglas están en modo de solo monitoreo', en: 'The WAF lets the attack through because its rules are in monitor-only mode' } },
      { id: 'b', text: { es: 'El CDN no cachea HTML, así que reenvía el ataque al origen sin filtrarlo', en: 'The CDN does not cache HTML, so it forwards the attack to the origin unfiltered' } },
      { id: 'c', text: { es: 'El atacante encontró la IP de origen (vía escáneres de internet, DNS pasivo o logs de Certificate Transparency) y le habla directo, evitando el CDN por completo', en: 'The attacker found the origin IP (via internet scanners, passive DNS, or Certificate Transparency logs) and talks to it directly, avoiding the CDN entirely' } },
      { id: 'd', text: { es: 'El certificado TLS del CDN expiró y el tráfico cae al origen', en: "The CDN's TLS certificate expired and traffic falls back to the origin" } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El WAF solo puede inspeccionar el tráfico que pasa por el CDN. Si el origen sigue respondiendo en 80/443 a cualquiera, el atacante averigua su IP —escáneres tipo Shodan/Censys, DNS pasivo, Certificate Transparency— y le habla directo, saltándose el WAF por completo. No es un fallo del WAF: el tráfico nunca pasó por él.',
      en: 'The WAF can only inspect traffic that passes through the CDN. If the origin still answers anyone on 80/443, the attacker discovers its IP —Shodan/Censys-style scanners, passive DNS, Certificate Transparency— and talks to it directly, bypassing the WAF entirely. It is not a WAF failure: the traffic never passed through it.',
    },
  },
  {
    id: '10-cdn-2',
    topic: '10-seguridad-red',
    text: {
      es: '¿Cuál es el arreglo durable para que el origen no pueda ser alcanzado directo?',
      en: 'What is the durable fix so the origin cannot be reached directly?',
    },
    options: [
      { id: 'a', text: { es: 'Subir el nivel de bloqueo del WAF a "alto" en el panel del CDN', en: 'Raise the WAF blocking level to "high" in the CDN dashboard' } },
      { id: 'b', text: { es: 'Cerrar el firewall del origen para permitir 80/443 solo desde los rangos de IP publicados del CDN y denegar el resto, idealmente sumando authenticated origin pull', en: "Lock the origin firewall to allow 80/443 only from the CDN's published IP ranges and deny the rest, ideally adding authenticated origin pull" } },
      { id: 'c', text: { es: 'Mover el origen a un puerto no estándar como el 8443', en: 'Move the origin to a non-standard port such as 8443' } },
      { id: 'd', text: { es: 'Desactivar IPv6 en el servidor de origen', en: 'Disable IPv6 on the origin server' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'Los CDN publican sus rangos de IP de salida justo para que el origen pueda hacer allowlist. Configuras el firewall del origen para aceptar 80/443 solo desde esos rangos y denegar todo lo demás, de modo que el único camino al origen sea a través del CDN. Authenticated origin pull agrega una segunda capa: el origen solo acepta TLS si el cliente presenta el certificado del CDN.',
      en: 'CDNs publish their egress IP ranges precisely so the origin can allowlist them. You configure the origin firewall to accept 80/443 only from those ranges and deny everything else, so the only path to the origin is through the CDN. Authenticated origin pull adds a second layer: the origin only accepts TLS if the client presents the CDN certificate.',
    },
  },
  {
    id: '10-cdn-3',
    topic: '10-seguridad-red',
    text: {
      es: 'Te descubrieron la IP de origen. ¿Por qué cambiarla (o "esconderla") no es un arreglo suficiente?',
      en: 'Your origin IP was discovered. Why is changing it (or "hiding" it) not a sufficient fix?',
    },
    options: [
      { id: 'a', text: { es: 'Porque cambiar la IP rompe el DNS y deja el sitio caído de forma permanente', en: 'Because changing the IP breaks DNS and takes the site down permanently' } },
      { id: 'b', text: { es: 'Porque el CDN factura por cada cambio de IP de origen', en: 'Because the CDN charges a fee for every origin IP change' } },
      { id: 'c', text: { es: 'Porque las IPs nuevas tardan 60 días en propagarse y el sitio queda inaccesible', en: 'Because new IPs take 60 days to propagate and the site stays unreachable' } },
      { id: 'd', text: { es: 'Porque la IP nueva se vuelve a exponer sola: los escáneres de internet la reencuentran, el próximo certificado aparece en Certificate Transparency y el DNS pasivo registra cualquier resolución filtrada; lo único que se sostiene es la allowlist en el firewall del origen', en: 'Because the new IP re-exposes itself: internet scanners re-find it, the next certificate shows up in Certificate Transparency, and passive DNS records any leaked resolution; the only thing that holds is the allowlist on the origin firewall' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Esconder la IP es ofuscación, y la ofuscación se deshace sola: apenas el origen nuevo responde en 443 los escáneres lo reencuentran, cada certificado emitido es público en los logs de Certificate Transparency y el DNS pasivo guarda resoluciones filtradas. Lo único durable es la regla aplicada en el borde del origen: si solo el CDN puede conectarse, da igual cuántos descubran la IP.',
      en: 'Hiding the IP is obfuscation, and obfuscation undoes itself: as soon as the new origin answers on 443 the scanners re-find it, every issued certificate is public in the Certificate Transparency logs, and passive DNS keeps leaked resolutions. The only durable thing is the rule enforced at the origin edge: if only the CDN can connect, it does not matter how many discover the IP.',
    },
  },
];
