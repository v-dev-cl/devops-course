import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '09-sca-1',
    topic: '09-seguridad',
    text: {
      es: 'Tu SAST de Semgrep pasa en verde. ¿Qué hace el SCA que el SAST no?',
      en: 'Your Semgrep SAST scan is green. What does SCA do that SAST does not?',
    },
    options: [
      { id: 'a', text: { es: 'Lee tu propio código en busca de patrones peligrosos como `eval`', en: 'Reads your own code for dangerous patterns like `eval`' } },
      { id: 'b', text: { es: 'Compara tus dependencias instaladas contra bases de CVEs conocidas', en: 'Compares your installed dependencies against databases of known CVEs' } },
      { id: 'c', text: { es: 'Detecta secretos commiteados en el historial de git', en: 'Detects secrets committed to git history' } },
      { id: 'd', text: { es: 'Prueba la app en runtime bajo carga real', en: 'Tests the app at runtime under real load' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'SAST mira tu código; SCA mira tus dependencias y las matchea contra CVEs conocidas. Cubren superficies distintas, por eso necesitas los dos.',
      en: 'SAST looks at your code; SCA looks at your dependencies and matches them against known CVEs. They cover different surfaces, which is why you need both.',
    },
  },
  {
    id: '09-sca-2',
    topic: '09-seguridad',
    text: {
      es: 'Tu `package.json` tiene 8 dependencias directas, pero un escaneo encuentra una CVE crítica. ¿Por qué casi siempre el riesgo viene de paquetes que no elegiste a mano?',
      en: 'Your `package.json` has 8 direct dependencies, but a scan finds a critical CVE. Why does the risk almost always come from packages you did not pick by hand?',
    },
    options: [
      { id: 'a', text: { es: 'Las dependencias directas se actualizan solas, así que nunca tienen CVEs', en: 'Direct dependencies update themselves, so they never have CVEs' } },
      { id: 'b', text: { es: 'Solo el código que tú escribes puede tener vulnerabilidades', en: 'Only the code you write can have vulnerabilities' } },
      { id: 'c', text: { es: 'El lockfile elimina las CVEs de las dependencias transitivas', en: 'The lockfile removes CVEs from transitive dependencies' } },
      { id: 'd', text: { es: 'Cada dependencia directa arrastra muchas transitivas, y el árbol completo (no lo que elegiste) es donde vive la mayor parte del riesgo', en: 'Each direct dependency drags in many transitive ones, and the whole tree (not what you chose) is where most of the risk lives' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'Tus 8 directas arrastran cientos de transitivas. La CVE casi nunca está en lo que elegiste, sino varios niveles más abajo (como Log4Shell). Por eso SCA escanea el árbol completo, no solo las directas.',
      en: 'Your 8 direct deps drag in hundreds of transitive ones. The CVE is almost never in what you chose but several levels down (like Log4Shell). That is why SCA scans the whole tree, not just the direct ones.',
    },
  },
  {
    id: '09-sca-3',
    topic: '09-seguridad',
    text: {
      es: '¿Por qué un `pnpm-lock.yaml` commiteado hace que el escaneo de SCA sea reproducible?',
      en: 'Why does a committed `pnpm-lock.yaml` make the SCA scan reproducible?',
    },
    options: [
      { id: 'a', text: { es: 'Cifra las dependencias para que el scanner no las modifique', en: 'It encrypts the dependencies so the scanner cannot modify them' } },
      { id: 'b', text: { es: 'Hace que Dependabot deje de abrir PRs de actualización', en: 'It makes Dependabot stop opening update PRs' } },
      { id: 'c', text: { es: 'Pinea la versión exacta de cada paquete (incluidas las transitivas), así el scanner ve siempre el mismo árbol resuelto', en: 'It pins the exact version of every package (including transitive ones), so the scanner always sees the same resolved tree' } },
      { id: 'd', text: { es: 'Convierte automáticamente los hallazgos HIGH en LOW', en: 'It automatically downgrades HIGH findings to LOW' } },
    ],
    correct: ['c'],
    explanation: {
      es: 'El `package.json` solo declara rangos (`^4.18.0`); el lockfile pinea la versión exacta resuelta de todo el árbol. Trivy lee ese pin, así que el escaneo es determinista: misma entrada, mismo resultado.',
      en: 'The `package.json` only declares ranges (`^4.18.0`); the lockfile pins the exact resolved version of the whole tree. Trivy reads that pin, so the scan is deterministic: same input, same result.',
    },
  },
];
