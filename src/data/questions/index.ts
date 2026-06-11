import type { QuizQuestion } from './types';
import { questions as m01qed } from './lessons/01-fundamentos/que-es-devops';
import { questions as m01cdv } from './lessons/01-fundamentos/ciclo-de-vida';
import { questions as m01dora } from './lessons/01-fundamentos/metricas-dora';
import { questions as m01stack } from './lessons/01-fundamentos/devops-en-tu-stack';
import { questions as m02shell } from './lessons/02-linux-redes/shell-supervivencia';
import { questions as m02proc } from './lessons/02-linux-redes/procesos-systemd';
import { questions as m02red } from './lessons/02-linux-redes/redes-basicas';
import { questions as m02ssh } from './lessons/02-linux-redes/ssh-y-archivos';
import { questions as m03img } from './lessons/03-docker/imagenes-y-capas';
import { questions as m03dms } from './lessons/03-docker/dockerfile-multi-stage';
import { questions as m03cel } from './lessons/03-docker/compose-entornos-locales';
import { questions as m03ryt } from './lessons/03-docker/registries-y-tags';
import { questions as m03sec } from './lessons/03-docker/seguridad-de-imagenes';
import { questions as m04awf } from './lessons/04-cicd/anatomia-de-un-workflow';
import { questions as m04btp } from './lessons/04-cicd/ci-build-test-publish';
import { questions as m04tir } from './lessons/04-cicd/tags-inmutables-y-rollback';
import { questions as m04enp } from './lessons/04-cicd/environments-y-promocion';
import { questions as m04cicd } from './lessons/04-cicd/de-ci-a-cd';
import { questions as m05krp } from './lessons/05-kubernetes-gitops/kubernetes-repaso-practico';
import { questions as m05bpw } from './lessons/05-kubernetes-gitops/buenas-practicas-workloads';
import { questions as m05kbo } from './lessons/05-kubernetes-gitops/kustomize-base-overlays';
import { questions as m05acd } from './lessons/05-kubernetes-gitops/argocd-gitops';
import { questions as m05eso } from './lessons/05-kubernetes-gitops/secretos-con-eso';
import { questions as m05mas } from './lessons/05-kubernetes-gitops/multi-cluster-applicationset';
import { questions as m06iac } from './lessons/06-terraform/por-que-iac';
import { questions as m06tfb } from './lessons/06-terraform/terraform-basico';
import { questions as m06stb } from './lessons/06-terraform/state-y-backends';
import { questions as m06myw } from './lessons/06-terraform/modulos-y-workspaces';
import { questions as m073p } from './lessons/07-observabilidad/tres-pilares';
import { questions as m07pg } from './lessons/07-observabilidad/prometheus-grafana';
import { questions as m07as } from './lessons/07-observabilidad/alerting-slos';
import { questions as m07le } from './lessons/07-observabilidad/logs-estructurados';
import { questions as m08pan } from './lessons/08-cloud-aws/aws-panorama';
import { questions as m08iam } from './lessons/08-cloud-aws/iam-vpc';
import { questions as m08cmp } from './lessons/08-cloud-aws/computo-ecs-eks';
import { questions as m08dat } from './lessons/08-cloud-aws/datos-s3-rds';
import { questions as m08eso } from './lessons/08-cloud-aws/eso-secrets-manager';
import { questions as m09sl } from './lessons/09-seguridad/shift-left-seguridad';
import { questions as m09sast } from './lessons/09-seguridad/sast-con-semgrep';
import { questions as m09sca } from './lessons/09-seguridad/dependencias-y-sca';
import { questions as m09sec } from './lessons/09-seguridad/escaneo-de-secretos';

/** lessonId -> lesson quiz. Content tasks register each ready lesson here. */
export const lessonQuizzes: Record<string, QuizQuestion[]> = {
  '01-fundamentos/que-es-devops': m01qed,
  '01-fundamentos/ciclo-de-vida': m01cdv,
  '01-fundamentos/metricas-dora': m01dora,
  '01-fundamentos/devops-en-tu-stack': m01stack,
  '02-linux-redes/shell-supervivencia': m02shell,
  '02-linux-redes/procesos-systemd': m02proc,
  '02-linux-redes/redes-basicas': m02red,
  '02-linux-redes/ssh-y-archivos': m02ssh,
  '03-docker/imagenes-y-capas': m03img,
  '03-docker/dockerfile-multi-stage': m03dms,
  '03-docker/compose-entornos-locales': m03cel,
  '03-docker/registries-y-tags': m03ryt,
  '03-docker/seguridad-de-imagenes': m03sec,
  '04-cicd/anatomia-de-un-workflow': m04awf,
  '04-cicd/ci-build-test-publish': m04btp,
  '04-cicd/tags-inmutables-y-rollback': m04tir,
  '04-cicd/environments-y-promocion': m04enp,
  '04-cicd/de-ci-a-cd': m04cicd,
  '05-kubernetes-gitops/kubernetes-repaso-practico': m05krp,
  '05-kubernetes-gitops/buenas-practicas-workloads': m05bpw,
  '05-kubernetes-gitops/kustomize-base-overlays': m05kbo,
  '05-kubernetes-gitops/argocd-gitops': m05acd,
  '05-kubernetes-gitops/secretos-con-eso': m05eso,
  '05-kubernetes-gitops/multi-cluster-applicationset': m05mas,
  '06-terraform/por-que-iac': m06iac,
  '06-terraform/terraform-basico': m06tfb,
  '06-terraform/state-y-backends': m06stb,
  '06-terraform/modulos-y-workspaces': m06myw,
  '07-observabilidad/tres-pilares': m073p,
  '07-observabilidad/prometheus-grafana': m07pg,
  '07-observabilidad/alerting-slos': m07as,
  '07-observabilidad/logs-estructurados': m07le,
  '08-cloud-aws/aws-panorama': m08pan,
  '08-cloud-aws/iam-vpc': m08iam,
  '08-cloud-aws/computo-ecs-eks': m08cmp,
  '08-cloud-aws/datos-s3-rds': m08dat,
  '08-cloud-aws/eso-secrets-manager': m08eso,
  '09-seguridad/shift-left-seguridad': m09sl,
  '09-seguridad/sast-con-semgrep': m09sast,
  '09-seguridad/dependencias-y-sca': m09sca,
  '09-seguridad/escaneo-de-secretos': m09sec,
};
