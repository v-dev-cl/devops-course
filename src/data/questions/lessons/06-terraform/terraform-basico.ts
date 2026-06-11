import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '06-tfb-1',
    topic: '06-terraform',
    text: {
      es: 'En un plan, ves la línea "-/+ destroy and then create" para tu base de datos. ¿Qué significa y por qué es peligroso?',
      en: 'In a plan, you see the line "-/+ destroy and then create" for your database. What does it mean and why is it dangerous?',
    },
    options: [
      { id: 'a', text: { es: 'Solo cambia un atributo en sitio, sin riesgo', en: 'It only changes an attribute in place, no risk' } },
      { id: 'b', text: { es: 'Terraform va a refrescar el state, no toca el recurso', en: 'Terraform will refresh the state, it does not touch the resource' } },
      { id: 'c', text: { es: 'El recurso se destruye y se recrea (recreación): para una base de datos eso es pérdida de datos', en: 'The resource is destroyed and recreated: for a database that is data loss' } },
      { id: 'd', text: { es: 'Es solo un aviso visual, apply lo ignora', en: 'It is just a visual warning, apply ignores it' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El símbolo -/+ indica que un cambio fuerza destruir y volver a crear el recurso. En una base de datos eso borra los datos. Por eso siempre se lee el plan antes de escribir yes.',
      en: 'The -/+ symbol indicates a change forces destroying and recreating the resource. On a database that wipes the data. That is why you always read the plan before typing yes.',
    },
  },
  {
    id: '06-tfb-2',
    topic: '06-terraform',
    text: {
      es: '¿Cuál es el orden correcto del ciclo de trabajo de Terraform?',
      en: 'What is the correct order of the Terraform workflow cycle?',
    },
    options: [
      { id: 'a', text: { es: 'init → plan → apply → destroy', en: 'init → plan → apply → destroy' } },
      { id: 'b', text: { es: 'plan → init → apply → destroy', en: 'plan → init → apply → destroy' } },
      { id: 'c', text: { es: 'apply → init → plan → destroy', en: 'apply → init → plan → destroy' } },
      { id: 'd', text: { es: 'init → apply → plan → destroy', en: 'init → apply → plan → destroy' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'init descarga providers y prepara el directorio; plan calcula y muestra el diff sin tocar nada; apply ejecuta los cambios; destroy elimina lo creado. plan siempre va antes de apply.',
      en: 'init downloads providers and prepares the directory; plan computes and shows the diff without touching anything; apply executes the changes; destroy removes what was created. plan always comes before apply.',
    },
  },
  {
    id: '06-tfb-3',
    topic: '06-terraform',
    text: {
      es: 'Necesitas pasarle a Terraform el token de tu proveedor. ¿Cuál es la mejor práctica?',
      en: 'You need to pass Terraform your provider\'s token. What is the best practice?',
    },
    options: [
      { id: 'a', text: { es: 'Hardcodearlo directamente en el bloque provider en main.tf', en: 'Hardcode it directly in the provider block in main.tf' } },
      { id: 'b', text: { es: 'Ponerlo en un output para tenerlo a mano', en: 'Put it in an output to have it handy' } },
      { id: 'c', text: { es: 'Pegarlo en el state a mano', en: 'Paste it into the state by hand' } },
      { id: 'd', text: { es: 'Declararlo como variable sensitive y pasarlo por TF_VAR_ o un tfvars fuera de git', en: 'Declare it as a sensitive variable and pass it via TF_VAR_ or a tfvars file kept out of git' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Un secreto se declara como variable sensitive (no aparece en logs ni en el plan) y se pasa por entorno (TF_VAR_hcloud_token) o un tfvars excluido de git. Nunca se hardcodea ni se commitea.',
      en: 'A secret is declared as a sensitive variable (it does not appear in logs or the plan) and passed via the environment (TF_VAR_hcloud_token) or a tfvars file excluded from git. Never hardcoded or committed.',
    },
  },
];
