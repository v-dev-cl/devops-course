# Curso Interactivo de DevOps · Interactive DevOps Course

**Live:** https://v-dev-cl.github.io/devops-course/

Curso bilingüe (es-CL / en-US) e interactivo de DevOps, pensado para devs backend/frontend que operan sus propios servicios: de CI manual a GitOps (GitHub Actions → ArgoCD → External Secrets Operator), con labs reales sobre un cluster kind local y un track aplicable a infraestructura on-premise (k3s) y AWS.

A bilingual (es-CL / en-US) interactive DevOps course for backend/frontend devs who operate their own services: from manual CI to GitOps (GitHub Actions → ArgoCD → External Secrets Operator), with real labs on a local kind cluster, applicable to on-premise (k3s) and AWS infrastructure.

## Features

- **8 módulos / 8 modules** — fundamentos, Linux/redes, Docker, CI/CD, Kubernetes+GitOps, Terraform, observabilidad, cloud/AWS. Módulos 1, 3, 4 y 5 con contenido completo; 2, 6, 7 y 8 con objetivos y quiz de módulo (en construcción).
- **Evaluación de nivel / placement assessment** — 16 preguntas; los temas con ≥80% se marcan como completados.
- **Quizzes por lección, terminal simulada, labs reales** con checklist de verificación (kind + ArgoCD + ESO).
- **Progreso en localStorage** (independiente del idioma) con export/import JSON.
- **`labs/sample-app`** — servicio "antes" con anti-patrones deliberados que los labs corrigen.

## Stack

Astro 6 + MDX + React islands + Tailwind 4, TypeScript estricto, Vitest. Sitio 100% estático desplegado a GitHub Pages por Actions.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321/devops-course/
pnpm test       # vitest (incl. curriculum consistency guard)
pnpm check      # astro check
pnpm build      # static build to dist/
```

## Adding a lesson / Agregar una lección

1. Añade el módulo/lección a `src/data/curriculum.ts` (fuente de verdad de IDs y orden).
2. Escribe el MDX en **ambos** idiomas: `src/content/lessons/{es,en}/<module>/<slug>.mdx`.
3. Crea el quiz en `src/data/questions/lessons/<module>/<slug>.ts` (3+ preguntas bilingües) y regístralo en `src/data/questions/index.ts`.
4. `pnpm test` — el guard de consistencia (`src/lib/consistency.test.ts`) falla si falta un idioma, un quiz o la cobertura del assessment.

Spec y plan de diseño: `docs/superpowers/specs/` y `docs/superpowers/plans/`.
