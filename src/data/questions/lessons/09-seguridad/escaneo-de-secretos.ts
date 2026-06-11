import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '09-sec-1',
    topic: '09-seguridad',
    text: {
      es: 'Una llave de AWS se filtró hace tres semanas y ya no está en el árbol de trabajo actual. ¿Qué comando de gitleaks la encuentra?',
      en: 'An AWS key leaked three weeks ago and is no longer in the current working tree. Which gitleaks command finds it?',
    },
    options: [
      { id: 'a', text: { es: '`gitleaks detect --no-git`, porque escanea más rápido', en: '`gitleaks detect --no-git`, because it scans faster' } },
      { id: 'b', text: { es: 'Ninguno: si no está en el árbol actual, gitleaks no puede verlo', en: 'None: if it is not in the current tree, gitleaks cannot see it' } },
      { id: 'c', text: { es: 'Un pre-commit hook con `gitleaks` sobre el árbol de trabajo', en: 'A pre-commit hook running `gitleaks` over the working tree' } },
      { id: 'd', text: { es: '`gitleaks detect`, que recorre todos los commits del historial', en: '`gitleaks detect`, which walks every commit in the history' } },
    ],
    correct: ['d'],
    explanation: {
      es: '`gitleaks detect` escanea el historial completo (todos los commits), así que encuentra secretos que ya se filtraron aunque ya no estén en el árbol actual. `--no-git` solo mira los archivos en disco, que es lo que hace un pre-commit hook.',
      en: '`gitleaks detect` scans the full history (every commit), so it finds secrets that already leaked even if they are no longer in the current tree. `--no-git` only looks at files on disk, which is what a pre-commit hook does.',
    },
  },
  {
    id: '09-sec-2',
    topic: '09-seguridad',
    text: {
      es: 'Encontraste una contraseña commiteada. La borras del archivo, commiteas "remove secret" y haces push. ¿Por qué no basta?',
      en: 'You found a committed password. You delete it from the file, commit "remove secret," and push. Why is that not enough?',
    },
    options: [
      { id: 'a', text: { es: 'El commit viejo con la credencial sigue en el historial; cualquiera con un clon o `git log -p` la ve. Hay que rotar (revocar y reemitir) la credencial', en: 'The old commit with the credential is still in history; anyone with a clone or `git log -p` sees it. You must rotate (revoke and reissue) the credential' } },
      { id: 'b', text: { es: 'Borrar del HEAD ya invalida la credencial en el proveedor', en: 'Deleting from HEAD already invalidates the credential at the provider' } },
      { id: 'c', text: { es: 'Falta agregar el archivo al `.gitignore`', en: 'You just need to add the file to `.gitignore`' } },
      { id: 'd', text: { es: 'El commit de borrado no se firmó con GPG', en: 'The deletion commit was not GPG-signed' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Borrar del HEAD no toca el historial: el commit viejo conserva la credencial intacta. Lo único que cierra la brecha es rotarla en el proveedor (revocar la vieja, emitir una nueva). Reescribir el historial es higiene opcional, no la solución.',
      en: 'Deleting from HEAD does not touch history: the old commit keeps the credential intact. The only thing that closes the breach is rotating it at the provider (revoke the old one, issue a new one). Rewriting history is optional hygiene, not the fix.',
    },
  },
  {
    id: '09-sec-3',
    topic: '09-seguridad',
    text: {
      es: 'Ya tienes un pre-commit hook con gitleaks. ¿Por qué igual quieres un job de gitleaks en CI?',
      en: 'You already have a gitleaks pre-commit hook. Why do you still want a gitleaks job in CI?',
    },
    options: [
      { id: 'a', text: { es: 'CI escanea más rápido que el hook local', en: 'CI scans faster than the local hook' } },
      { id: 'b', text: { es: 'El hook local solo funciona en Linux', en: 'The local hook only works on Linux' } },
      { id: 'c', text: { es: 'El hook local se puede saltar (`--no-verify`) o no estar instalado; CI escanea cada push y PR y nadie lo puede esquivar', en: 'The local hook can be skipped (`--no-verify`) or not installed; CI scans every push and PR and nobody can bypass it' } },
      { id: 'd', text: { es: 'CI rota las credenciales filtradas automáticamente', en: 'CI rotates leaked credentials automatically' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El pre-commit previene en tu máquina, pero es opcional por diseño: se salta con `--no-verify` o simplemente no está instalado. CI es el gate obligatorio: escanea el historial en cada push/PR y nadie lo puede evitar.',
      en: 'Pre-commit prevents on your machine, but it is optional by design: it can be skipped with `--no-verify` or simply not installed. CI is the mandatory gate: it scans history on every push/PR and nobody can avoid it.',
    },
  },
];
