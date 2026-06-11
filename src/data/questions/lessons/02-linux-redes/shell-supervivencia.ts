import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '02-shell-1',
    topic: '02-linux-redes',
    text: {
      es: '¿Qué hace el pipe (|) entre dos comandos?',
      en: 'What does the pipe (|) between two commands do?',
    },
    options: [
      { id: 'a', text: { es: 'Ejecuta los dos comandos en paralelo sin conectarlos', en: 'Runs both commands in parallel without connecting them' } },
      { id: 'b', text: { es: 'Conecta el stdout del primer comando al stdin del segundo', en: 'Connects the first command\'s stdout to the second command\'s stdin' } },
      { id: 'c', text: { es: 'Redirige la salida a un archivo en disco', en: 'Redirects the output to a file on disk' } },
      { id: 'd', text: { es: 'Manda el primer comando al background', en: 'Sends the first command to the background' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El pipe arma una tubería: la salida normal (stdout) del comando de la izquierda se convierte en la entrada (stdin) del de la derecha. Redirigir a archivo es >, y el background es &.',
      en: 'The pipe builds a pipeline: the left command\'s normal output (stdout) becomes the right command\'s input (stdin). Redirecting to a file is >, and backgrounding is &.',
    },
  },
  {
    id: '02-shell-2',
    topic: '02-linux-redes',
    text: {
      es: 'Quieres capturar TODO el output de un proceso (salida normal y errores) en un solo archivo. ¿Cuál es correcto?',
      en: 'You want to capture ALL of a process\'s output (normal output and errors) in a single file. Which is correct?',
    },
    options: [
      { id: 'a', text: { es: 'node server.js 2> server.log', en: 'node server.js 2> server.log' } },
      { id: 'b', text: { es: 'node server.js 2>&1 > server.log', en: 'node server.js 2>&1 > server.log' } },
      { id: 'c', text: { es: 'node server.js > server.log 2>&1', en: 'node server.js > server.log 2>&1' } },
      { id: 'd', text: { es: 'node server.js >> server.log', en: 'node server.js >> server.log' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El archivo primero, 2>&1 al final: > apunta stdout al archivo y 2>&1 manda stderr al mismo destino. Ponerlo al revés (2>&1 antes del >) deja stderr en la pantalla porque se evalúa antes de cambiar stdout.',
      en: 'File first, 2>&1 last: > points stdout at the file and 2>&1 sends stderr to the same destination. The reverse order (2>&1 before the >) leaves stderr on screen because it is evaluated before stdout is redirected.',
    },
  },
  {
    id: '02-shell-3',
    topic: '02-linux-redes',
    text: {
      es: 'Necesitas el conteo de líneas que contienen ERROR en app.log. ¿Cuál es la forma más directa?',
      en: 'You need the count of lines containing ERROR in app.log. What is the most direct way?',
    },
    options: [
      { id: 'a', text: { es: 'grep -c ERROR app.log', en: 'grep -c ERROR app.log' } },
      { id: 'b', text: { es: 'grep -v ERROR app.log', en: 'grep -v ERROR app.log' } },
      { id: 'c', text: { es: 'cat app.log | awk ERROR', en: 'cat app.log | awk ERROR' } },
      { id: 'd', text: { es: 'find app.log -name ERROR', en: 'find app.log -name ERROR' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'El flag -c de grep cuenta las líneas que matchean. -v invierte (las que NO matchean), awk no se usa así, y find busca archivos, no contenido.',
      en: 'grep\'s -c flag counts matching lines. -v inverts (lines that do NOT match), awk is not used like that, and find searches for files, not content.',
    },
  },
];
