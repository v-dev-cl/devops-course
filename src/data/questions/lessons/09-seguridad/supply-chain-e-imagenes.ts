import type { QuizQuestion } from '../../types';

export const questions: QuizQuestion[] = [
  {
    id: '09-sup-1',
    topic: '09-seguridad',
    text: {
      es: 'Cae una CVE crítica nueva en una librería popular. ¿Para qué te sirve haber guardado un SBOM de cada imagen?',
      en: 'A new critical CVE drops in a popular library. What is having saved an SBOM of each image good for?',
    },
    options: [
      { id: 'a', text: { es: 'Para firmar la imagen sin par de llaves', en: 'To sign the image without a keypair' } },
      { id: 'b', text: { es: 'Para responder con un `grep` cuáles de tus servicios usan esa librería y en qué versión', en: 'To answer with a `grep` which of your services use that library and in which version' } },
      { id: 'c', text: { es: 'Para reducir el tamaño de la imagen final', en: 'To reduce the size of the final image' } },
      { id: 'd', text: { es: 'Para que el escaneo de Trivy corra más rápido', en: 'To make the Trivy scan run faster' } },
    ],
    correct: ['b'],
    explanation: {
      es: 'El SBOM es el inventario de todo lo que hay en la imagen (paquetes y versiones, directos y transitivos). El día que aparece una CVE nueva, responder "¿quién la usa?" es un grep sobre los SBOM guardados en vez de horas de arqueología.',
      en: 'The SBOM is the inventory of everything in the image (packages and versions, direct and transitive). The day a new CVE appears, answering "who uses it?" is a grep over the saved SBOMs instead of hours of archaeology.',
    },
  },
  {
    id: '09-sup-2',
    topic: '09-seguridad',
    text: {
      es: 'Corres `trivy image` en CI y te lista CVEs, pero el build sigue pasando aunque haya HIGH. ¿Qué falta para que sea un gate real?',
      en: 'You run `trivy image` in CI and it lists CVEs, but the build still passes even with HIGH findings. What is missing for it to be a real gate?',
    },
    options: [
      { id: 'a', text: { es: 'Agregar `--exit-code 1` (con `--severity HIGH,CRITICAL`) para que el step falle y bloquee el merge', en: 'Add `--exit-code 1` (with `--severity HIGH,CRITICAL`) so the step fails and blocks the merge' } },
      { id: 'b', text: { es: 'Firmar la imagen con cosign antes de escanearla', en: 'Sign the image with cosign before scanning it' } },
      { id: 'c', text: { es: 'Generar el SBOM en formato CycloneDX', en: 'Generate the SBOM in CycloneDX format' } },
      { id: 'd', text: { es: 'Cambiar la base de la imagen a distroless', en: 'Switch the image base to distroless' } },
    ],
    correct: ['a'],
    explanation: {
      es: 'Sin `--exit-code 1` Trivy solo informa: el step termina con código 0 y el build pasa. `--exit-code 1` hace que termine con error cuando encuentra algo, y `--severity HIGH,CRITICAL` limita el gate a lo que de verdad importa.',
      en: 'Without `--exit-code 1` Trivy only reports: the step exits 0 and the build passes. `--exit-code 1` makes it exit with an error when it finds something, and `--severity HIGH,CRITICAL` limits the gate to what actually matters.',
    },
  },
  {
    id: '09-sup-3',
    topic: '09-seguridad',
    text: {
      es: 'Una imagen está firmada con cosign y `cosign verify` pasa. ¿Qué te garantiza eso?',
      en: 'An image is signed with cosign and `cosign verify` passes. What does that guarantee you?',
    },
    options: [
      { id: 'a', text: { es: 'Que la imagen no tiene vulnerabilidades conocidas', en: 'That the image has no known vulnerabilities' } },
      { id: 'b', text: { es: 'Que la imagen corre como usuario no-root', en: 'That the image runs as a non-root user' } },
      { id: 'c', text: { es: 'Que sus dependencias están actualizadas a la última versión', en: 'That its dependencies are up to date to the latest version' } },
      { id: 'd', text: { es: 'Procedencia e integridad: quién la construyó y que no fue alterada desde entonces, pero no que esté libre de CVEs', en: 'Provenance and integrity: who built it and that it was not altered since, but not that it is free of CVEs' } },
    ],
    correct: ['d'],
    explanation: {
      es: 'La firma prueba procedencia e integridad (quién la construyó y que no la cambiaron por el camino), no ausencia de vulnerabilidades. Una imagen firmada puede estar plagada de CVEs; por eso firma y escaneo se complementan.',
      en: 'The signature proves provenance and integrity (who built it and that it was not changed along the way), not absence of vulnerabilities. A signed image can be riddled with CVEs; that is why signing and scanning complement each other.',
    },
  },
];
