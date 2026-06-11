import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '02-proc-1',
    topic: '02-linux-redes',
    text: {
      es: '¿Cuál es la diferencia clave entre SIGTERM y SIGKILL?',
      en: 'What is the key difference between SIGTERM and SIGKILL?',
    },
    options: [
      { id: 'a', text: { es: 'SIGTERM mata más rápido que SIGKILL', en: 'SIGTERM kills faster than SIGKILL' } },
      { id: 'b', text: { es: 'SIGTERM se puede capturar para apagar ordenadamente; SIGKILL mata sin que el proceso pueda reaccionar', en: 'SIGTERM can be caught to shut down gracefully; SIGKILL kills without the process being able to react' } },
      { id: 'c', text: { es: 'SIGTERM reinicia el proceso y SIGKILL lo pausa', en: 'SIGTERM restarts the process and SIGKILL pauses it' } },
      { id: 'd', text: { es: 'No hay diferencia, son alias del mismo número de señal', en: 'There is no difference, they are aliases of the same signal number' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'SIGTERM (15) es la señal educada: el proceso la captura, cierra conexiones y sale limpio. SIGKILL (9) lo mata el kernel sin posibilidad de limpieza.',
      en: 'SIGTERM (15) is the polite signal: the process catches it, closes connections, and exits cleanly. SIGKILL (9) is the kernel killing it with no chance for cleanup.',
    },
  },
  {
    id: '02-proc-2',
    topic: '02-linux-redes',
    text: {
      es: 'Tu app NestJS pierde requests en vuelo cada vez que Kubernetes la reinicia. ¿Cuál es la causa más probable?',
      en: 'Your NestJS app drops in-flight requests every time Kubernetes restarts it. What is the most likely cause?',
    },
    options: [
      { id: 'a', text: { es: 'El terminationGracePeriodSeconds es demasiado largo', en: 'The terminationGracePeriodSeconds is too long' } },
      { id: 'b', text: { es: 'Kubernetes usa SIGKILL como primera señal', en: 'Kubernetes uses SIGKILL as the first signal' } },
      { id: 'c', text: { es: 'El proceso tiene demasiadas réplicas', en: 'The process has too many replicas' } },
      { id: 'd', text: { es: 'La app no maneja SIGTERM, así que no cierra el servidor ni las conexiones antes de salir', en: 'The app doesn\'t handle SIGTERM, so it doesn\'t close the server or connections before exiting' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Kubernetes manda SIGTERM y espera el grace period antes del SIGKILL. Si la app no escucha SIGTERM para cerrar HTTP y conexiones, los requests en vuelo se cortan.',
      en: 'Kubernetes sends SIGTERM and waits the grace period before SIGKILL. If the app doesn\'t listen for SIGTERM to close HTTP and connections, in-flight requests are cut.',
    },
  },
  {
    id: '02-proc-3',
    topic: '02-linux-redes',
    text: {
      es: 'En una unit systemd, ¿qué hace la directiva Restart=on-failure?',
      en: 'In a systemd unit, what does the Restart=on-failure directive do?',
    },
    options: [
      { id: 'a', text: { es: 'systemd vuelve a arrancar el proceso si termina con un código de error', en: 'systemd starts the process again if it exits with an error code' } },
      { id: 'b', text: { es: 'Reinicia el servidor completo cuando el servicio falla', en: 'Reboots the entire server when the service fails' } },
      { id: 'c', text: { es: 'Detiene el servicio permanentemente al primer fallo', en: 'Stops the service permanently on the first failure' } },
      { id: 'd', text: { es: 'Solo aplica durante el arranque del sistema', en: 'Only applies during system boot' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Restart=on-failure hace que systemd resucite el proceso si murió con error, igual que un restartPolicy de Kubernetes. k3s mismo corre así con Restart=always.',
      en: 'Restart=on-failure makes systemd resurrect the process if it died with an error, just like a Kubernetes restartPolicy. k3s itself runs this way with Restart=always.',
    },
  },
];
