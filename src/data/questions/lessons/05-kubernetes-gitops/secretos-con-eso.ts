import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '05-eso-1',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'En ESO, ¿cuál es la diferencia entre SecretStore y ExternalSecret?',
      en: 'In ESO, what is the difference between SecretStore and ExternalSecret?',
    },
    options: [
      { id: 'a', text: { es: 'SecretStore dice dónde viven los secretos (qué backend y cómo autenticarse); ExternalSecret dice qué secreto traer y cómo materializarlo en un Secret de k8s', en: 'SecretStore says where secrets live (which backend and how to authenticate); ExternalSecret says what secret to fetch and how to materialize it into a k8s Secret' } },
      { id: 'b', text: { es: 'Son sinónimos; da igual cuál uses', en: 'They are synonyms; it does not matter which you use' } },
      { id: 'c', text: { es: 'SecretStore cifra el secreto en git; ExternalSecret lo descifra', en: 'SecretStore encrypts the secret in git; ExternalSecret decrypts it' } },
      { id: 'd', text: { es: 'ExternalSecret es el backend y SecretStore es la app', en: 'ExternalSecret is the backend and SecretStore is the app' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'SecretStore es la conexión al backend (el "dónde"); ExternalSecret es la receta (el "qué" y hacia qué Secret). ESO observa el ExternalSecret, va al backend vía el SecretStore y materializa un Secret nativo.',
      en: 'SecretStore is the connection to the backend (the "where"); ExternalSecret is the recipe (the "what" and into which Secret). ESO watches the ExternalSecret, goes to the backend via the SecretStore, and materializes a native Secret.',
    },
  },
  {
    id: '05-eso-2',
    topic: '05-kubernetes-gitops',
    text: {
      es: 'Con ESO funcionando, ¿qué queda en git y qué queda solo en el cluster?',
      en: 'With ESO working, what stays in git and what stays only in the cluster?',
    },
    options: [
      { id: 'a', text: { es: 'En git queda el valor del secreto cifrado; en el cluster nada', en: 'The encrypted secret value stays in git; nothing in the cluster' } },
      { id: 'b', text: { es: 'En git quedan las recetas (SecretStore y ExternalSecret, sin valores); el valor del secreto vive en el backend y, ya materializado, en el cluster', en: 'The recipes stay in git (SecretStore and ExternalSecret, without values); the secret value lives in the backend and, once materialized, in the cluster' } },
      { id: 'c', text: { es: 'En git queda todo, incluido el valor en texto plano', en: 'Everything stays in git, including the plaintext value' } },
      { id: 'd', text: { es: 'Nada queda en git; todo se genera en cada deploy', en: 'Nothing stays in git; everything is generated on each deploy' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El ExternalSecret y el SecretStore son recetas sin valores y se versionan en git. El valor real solo existe en el backend y, una vez traído, en el Secret materializado dentro del cluster.',
      en: 'The ExternalSecret and SecretStore are value-less recipes versioned in git. The real value exists only in the backend and, once fetched, in the materialized Secret inside the cluster.',
    },
  },
  {
    id: '05-eso-3',
    topic: '05-kubernetes-gitops',
    text: {
      es: '¿Por qué rotar un secreto con ESO es más fácil que con SOPS o Sealed Secrets?',
      en: 'Why is rotating a secret with ESO easier than with SOPS or Sealed Secrets?',
    },
    options: [
      { id: 'a', text: { es: 'Porque ESO no usa Secrets de k8s', en: 'Because ESO does not use k8s Secrets' } },
      { id: 'b', text: { es: 'Porque SOPS no soporta rotación', en: 'Because SOPS does not support rotation' } },
      { id: 'c', text: { es: 'Porque ESO desactiva el historial de git', en: 'Because ESO disables git history' } },
      { id: 'd', text: { es: 'Porque rotar es cambiar el valor en el backend y ESO re-sincroniza solo; no hay nada cifrado en git que rotar ni descifrar, porque el secreto nunca estuvo en git', en: 'Because rotating is changing the value in the backend and ESO re-syncs on its own; there is nothing encrypted in git to rotate or decrypt, because the secret was never in git' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Con SOPS/Sealed Secrets el valor cifrado vive en git y rotar implica re-cifrar y comitear. Con ESO el secreto nunca entró a git: cambias el valor en el backend y ESO re-sincroniza según el refreshInterval.',
      en: 'With SOPS/Sealed Secrets the encrypted value lives in git and rotating means re-encrypting and committing. With ESO the secret never entered git: you change the value in the backend and ESO re-syncs per the refreshInterval.',
    },
  },
];
