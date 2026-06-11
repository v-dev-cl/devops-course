import type { QuizQuestion } from '../types';

export const questions: QuizQuestion[] = [
  {
    id: 'm02-1',
    topic: '02-linux-redes',
    text: {
      es: '¿Qué hace `cat app.log | grep ERROR | wc -l`?',
      en: 'What does `cat app.log | grep ERROR | wc -l` do?',
    },
    options: [
      { id: 'b', text: { es: 'Borra las líneas con ERROR del archivo', en: 'Deletes the lines with ERROR from the file' } },
      { id: 'c', text: { es: 'Muestra solo la primera línea con ERROR', en: 'Shows only the first line with ERROR' } },
      { id: 'a', text: { es: 'Cuenta las líneas del archivo que contienen ERROR', en: 'Counts the lines in the file that contain ERROR' } },
      { id: 'd', text: { es: 'Reemplaza ERROR por wc en todo el archivo', en: 'Replaces ERROR with wc throughout the file' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El pipe pasa la salida de cada comando al siguiente: grep filtra las líneas con ERROR y wc -l las cuenta.',
      en: 'The pipe passes each command’s output to the next: grep filters the ERROR lines and wc -l counts them.',
    },
  },
  {
    id: 'm02-2',
    topic: '02-linux-redes',
    text: {
      es: '¿Qué hace `2>&1` al final de un comando?',
      en: 'What does `2>&1` at the end of a command do?',
    },
    options: [
      { id: 'b', text: { es: 'Ejecuta el comando dos veces', en: 'Runs the command twice' } },
      { id: 'a', text: { es: 'Redirige stderr al mismo destino que stdout', en: 'Redirects stderr to the same destination as stdout' } },
      { id: 'c', text: { es: 'Silencia toda la salida del comando', en: 'Silences all command output' } },
      { id: 'd', text: { es: 'Redirige stdout al archivo llamado 1', en: 'Redirects stdout to a file named 1' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El descriptor 2 es stderr y &1 apunta a donde va stdout, así ambos flujos terminan juntos.',
      en: 'Descriptor 2 is stderr and &1 points to wherever stdout goes, so both streams end up together.',
    },
  },
  {
    id: 'm02-3',
    topic: '02-linux-redes',
    text: {
      es: 'Tu app NestJS no responde y quieres que se cierre ordenadamente (terminar requests en curso). ¿Qué señal envías?',
      en: 'Your NestJS app is unresponsive and you want it to shut down gracefully (finishing in-flight requests). Which signal do you send?',
    },
    options: [
      { id: 'a', text: { es: 'SIGKILL (kill -9)', en: 'SIGKILL (kill -9)' } },
      { id: 'b', text: { es: 'SIGSTOP', en: 'SIGSTOP' } },
      { id: 'c', text: { es: 'SIGTERM (kill por defecto)', en: 'SIGTERM (default kill)' } },
      { id: 'd', text: { es: 'SIGUSR1', en: 'SIGUSR1' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'SIGTERM pide un cierre ordenado y el proceso puede atraparla para limpiar; SIGKILL lo mata de inmediato sin opción a limpiar.',
      en: 'SIGTERM requests a graceful shutdown and the process can trap it to clean up; SIGKILL kills it immediately with no chance to clean up.',
    },
  },
  {
    id: 'm02-4',
    topic: '02-linux-redes',
    text: {
      es: 'En una unidad systemd, ¿qué logra `Restart=on-failure`?',
      en: 'In a systemd unit, what does `Restart=on-failure` achieve?',
    },
    options: [
      { id: 'b', text: { es: 'Reinicia el servidor físico cuando el servicio falla', en: 'Reboots the physical server when the service fails' } },
      { id: 'c', text: { es: 'Impide que el servicio arranque al boot', en: 'Prevents the service from starting at boot' } },
      { id: 'd', text: { es: 'Reinicia el servicio cada cierto intervalo fijo', en: 'Restarts the service on a fixed interval' } },
      { id: 'a', text: { es: 'Reinicia el servicio solo si termina con un código de salida distinto de cero', en: 'Restarts the service only if it exits with a non-zero exit code' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'on-failure hace que systemd reinicie el proceso cuando sale con error (código distinto de cero o señal), pero no en una salida limpia.',
      en: 'on-failure makes systemd restart the process when it exits with an error (non-zero code or signal), but not on a clean exit.',
    },
  },
  {
    id: 'm02-5',
    topic: '02-linux-redes',
    text: {
      es: 'Un servicio no resuelve `db.internal`. ¿Qué herramienta consultas primero para aislar si es un problema de DNS?',
      en: 'A service can’t resolve `db.internal`. Which tool do you reach for first to isolate whether it’s a DNS problem?',
    },
    options: [
      { id: 'd', text: { es: '`dig db.internal` para ver qué responde el resolver', en: '`dig db.internal` to see what the resolver returns' } },
      { id: 'b', text: { es: '`ss -tlnp` para ver puertos en escucha', en: '`ss -tlnp` to see listening ports' } },
      { id: 'c', text: { es: '`top` para ver el uso de CPU', en: '`top` to see CPU usage' } },
      { id: 'a', text: { es: '`chmod 600` sobre el archivo de hosts', en: '`chmod 600` on the hosts file' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'dig consulta directamente al resolver DNS y te muestra si el nombre resuelve y a qué IP, separando el problema de DNS de los de TCP o aplicación.',
      en: 'dig queries the DNS resolver directly and shows whether the name resolves and to which IP, separating the DNS problem from TCP or application ones.',
    },
  },
];
