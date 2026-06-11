# sample-app — servicio "antes" para los labs del curso

> **ADVERTENCIA: Este directorio contiene anti-patrones deliberados.**
> Son los errores que los labs enseñan a corregir. No copies este código a producción tal como está.

## ¿Qué es esto?

`labs/sample-app` es un micro-servicio Node.js que replica el estado "antes" de los servicios reales del curso. Está diseñado para ser el punto de partida de los labs de los módulos 04 y 05: un repo funcional pero con malas prácticas concretas, listo para que las corrijas tú.

La app expone dos endpoints:

- `GET /health` → `{"status":"ok"}`
- `GET /config` → `{"greeting":"<env GREETING>","apiKeyPresent":<bool>}`

## Anti-patrones deliberados (y qué lab los corrige)

| Anti-patrón | Dónde está | Se corrige en |
|---|---|---|
| **Tags de rama mutables** (`development`, `master`) | `k8s/overlays/*/kustomization.yaml` → campo `newTag` | Lab 1 — módulo 04 (*Tags inmutables y rollback*) |
| **Secretos comiteados en git** (`API_KEY=super-secret-*-key`) | `k8s/overlays/*/kustomization.yaml` → `secretGenerator.literals` | Lab 3 — módulo 05 (*Secretos con ESO*) |
| **Deploy manual con skaffold / sin CD** | `skaffold.yaml` + ausencia de paso de commit-back en el workflow | Lab 2 — módulo 05 (*Argo CD y GitOps*) |

El workflow en `.github/workflows/build-and-publish.yml` es el estado **antes** del Lab 1: publica la imagen con el tag de rama (`type=ref,event=branch`), sin SHA inmutable ni commit-back. El workflow está **inerte** dentro de este repo del curso porque GitHub solo ejecuta los workflows del `.github/` raíz; se activa cuando lo copias a un scratch repo (ver abajo).

## Cómo usar este directorio en los labs

GitHub solo ejecuta workflows del `.github/` **raíz** de cada repo. El workflow dentro de `labs/sample-app` está inerte aquí. Para activarlo:

```bash
# Copia el directorio a un scratch repo propio
cp -r labs/sample-app /tmp/lab1
cd /tmp/lab1
git init -b master && git add -A && git commit -m "before state"

# Crea un repo vacío en GitHub y súbelo
git remote add origin git@github.com:<tu-usuario>/lab1.git
git push -u origin master
```

A partir de ahí sigue las instrucciones de cada lab en el curso.

## Smoke test local

Asegúrate de tener Docker instalado y ejecuta:

```bash
# Desde este directorio (labs/sample-app)
docker build -t sample-app .
docker run -p 3000:3000 sample-app
```

En otra terminal:

```bash
curl localhost:3000/health
# {"status":"ok"}

curl localhost:3000/config
# {"greeting":"hola","apiKeyPresent":false}
```

Para verificar que los overlays de Kustomize renderizan sin errores:

```bash
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod
```

---

# sample-app — "before"-state service for the course labs

> **WARNING: This directory contains deliberate anti-patterns.**
> These are the mistakes the labs teach you to fix. Do not copy this code to production as-is.

## What is this?

`labs/sample-app` is a Node.js micro-service that replicates the "before" state of the real services in the course. It is designed to be the starting point for the labs in modules 04 and 05: a working repo with concrete bad practices, ready for you to fix.

The app exposes two endpoints:

- `GET /health` → `{"status":"ok"}`
- `GET /config` → `{"greeting":"<env GREETING>","apiKeyPresent":<bool>}`

## Deliberate anti-patterns (and which lab fixes them)

| Anti-pattern | Where | Fixed in |
|---|---|---|
| **Mutable branch tags** (`development`, `master`) | `k8s/overlays/*/kustomization.yaml` → `newTag` field | Lab 1 — module 04 (*Immutable tags and rollback*) |
| **Secrets committed to git** (`API_KEY=super-secret-*-key`) | `k8s/overlays/*/kustomization.yaml` → `secretGenerator.literals` | Lab 3 — module 05 (*Secrets with ESO*) |
| **Manual skaffold deploy / no CD** | `skaffold.yaml` + no commit-back step in the workflow | Lab 2 — module 05 (*Argo CD and GitOps*) |

The workflow at `.github/workflows/build-and-publish.yml` is the **before** state for Lab 1: it publishes the image with a branch tag (`type=ref,event=branch`), no immutable SHA, no commit-back. The workflow is **inert** inside this course repo because GitHub only runs workflows from the root `.github/`; it activates when you copy it to a scratch repo (see below).

## How to use this directory in the labs

GitHub only runs workflows from the **root** `.github/` of each repo. The workflow inside `labs/sample-app` is inert here. To activate it:

```bash
# Copy the directory to your own scratch repo
cp -r labs/sample-app /tmp/lab1
cd /tmp/lab1
git init -b master && git add -A && git commit -m "before state"

# Create an empty GitHub repo and push
git remote add origin git@github.com:<your-username>/lab1.git
git push -u origin master
```

Then follow the instructions in each lab inside the course.

## Local smoke test

Make sure Docker is installed, then run:

```bash
# From this directory (labs/sample-app)
docker build -t sample-app .
docker run -p 3000:3000 sample-app
```

In another terminal:

```bash
curl localhost:3000/health
# {"status":"ok"}

curl localhost:3000/config
# {"greeting":"hola","apiKeyPresent":false}
```

To verify that the Kustomize overlays render without errors:

```bash
kubectl kustomize k8s/overlays/dev
kubectl kustomize k8s/overlays/prod
```
