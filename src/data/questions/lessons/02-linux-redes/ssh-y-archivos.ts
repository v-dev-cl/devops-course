import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '02-ssh-1',
    topic: '02-linux-redes',
    text: {
      es: 'SSH rechaza tu clave privada con un error de permisos. ¿Cuál es la causa más probable?',
      en: 'SSH rejects your private key with a permissions error. What is the most likely cause?',
    },
    options: [
      { id: 'a', text: { es: 'La clave usa el algoritmo ed25519 en vez de RSA', en: 'The key uses the ed25519 algorithm instead of RSA' } },
      { id: 'b', text: { es: 'El archivo de la clave es legible por otros usuarios (permisos demasiado abiertos)', en: 'The key file is readable by other users (permissions too open)' } },
      { id: 'c', text: { es: 'No copiaste la clave pública al servidor', en: 'You didn\'t copy the public key to the server' } },
      { id: 'd', text: { es: 'El ssh-agent no está corriendo', en: 'The ssh-agent isn\'t running' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'SSH es estricto a propósito: si la clave privada es legible por otros, se niega a usarla. La solución es chmod 600 en la clave y 700 en ~/.ssh.',
      en: 'SSH is strict on purpose: if the private key is readable by others, it refuses to use it. The fix is chmod 600 on the key and 700 on ~/.ssh.',
    },
  },
  {
    id: '02-ssh-2',
    topic: '02-linux-redes',
    text: {
      es: '¿Por qué rsync es preferible a scp para sincronizar un directorio repetidamente?',
      en: 'Why is rsync preferable to scp for syncing a directory repeatedly?',
    },
    options: [
      { id: 'a', text: { es: 'Porque rsync solo transfiere las diferencias, así que correrlo de nuevo no recopia lo que ya está igual', en: 'Because rsync only transfers the differences, so running it again doesn\'t recopy what\'s already identical' } },
      { id: 'b', text: { es: 'Porque scp no funciona sobre SSH', en: 'Because scp doesn\'t work over SSH' } },
      { id: 'c', text: { es: 'Porque rsync no necesita autenticación', en: 'Because rsync doesn\'t need authentication' } },
      { id: 'd', text: { es: 'Porque scp encripta y rsync no, lo que lo hace más rápido', en: 'Because scp encrypts and rsync doesn\'t, making it faster' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'rsync compara origen y destino y transfiere solo lo distinto: es idempotente y eficiente para resyncs. Ambos van sobre SSH y autentican igual.',
      en: 'rsync compares source and destination and transfers only what differs: it\'s idempotent and efficient for resyncs. Both run over SSH and authenticate the same way.',
    },
  },
  {
    id: '02-ssh-3',
    topic: '02-linux-redes',
    text: {
      es: 'Un servicio se cae y sospechas del disco. ¿Cuál es la secuencia de triage correcta?',
      en: 'A service goes down and you suspect the disk. What is the correct triage sequence?',
    },
    options: [
      { id: 'a', text: { es: 'ncdu primero para ver todo, luego df para confirmar', en: 'ncdu first to see everything, then df to confirm' } },
      { id: 'b', text: { es: 'tar para comprimir y liberar espacio de inmediato', en: 'tar to compress and free space immediately' } },
      { id: 'c', text: { es: 'df -h para ver qué partición está llena, luego du -sh por carpeta y ncdu para llegar al archivo', en: 'df -h to see which partition is full, then du -sh per folder and ncdu to reach the file' } },
      { id: 'd', text: { es: 'chmod en /var/log para que los logs dejen de crecer', en: 'chmod on /var/log so the logs stop growing' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'df -h te dice qué partición explotó, du -sh acota la carpeta culpable y ncdu te deja navegar al archivo. tar no libera espacio por sí solo y chmod no detiene la escritura de logs.',
      en: 'df -h tells you which partition blew up, du -sh narrows down the guilty folder, and ncdu lets you navigate to the file. tar doesn\'t free space by itself and chmod doesn\'t stop logs from being written.',
    },
  },
];
