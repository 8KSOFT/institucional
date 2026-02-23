Skip to content

Jenkins
institucional-8ksoft
#39
Search
Lucas
Status
Changes
Console Output
Edit Build Information
Sondagem de registro de atividades
Timings
Git Build Data
Pipeline Overview
Restart from Stage
Replay
Pipeline Steps
Previous Build
Console
Download

Copy
View as plain text
Started by GitHub push by lucopdev
Obtained Jenkinsfile from git git@github.com:8KSOFT/institucional.git
[Pipeline] Start of Pipeline
[Pipeline] node
Running on Jenkins in /var/jenkins_home/workspace/institucional-8ksoft
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Declarative: Checkout SCM)
[Pipeline] checkout
Selected Git installation does not exist. Using Default
The recommended git tool is: NONE
using credential git
 > git rev-parse --resolve-git-dir /var/jenkins_home/workspace/institucional-8ksoft/.git # timeout=10
Fetching changes from the remote Git repository
 > git config remote.origin.url git@github.com:8KSOFT/institucional.git # timeout=10
Fetching upstream changes from git@github.com:8KSOFT/institucional.git
 > git --version # timeout=10
 > git --version # 'git version 2.47.3'
using GIT_SSH to set credentials Chave SSH da 8Ksoft para uso no Jenkins
Verifying host key using known hosts file, will automatically accept unseen keys
 > git fetch --tags --force --progress -- git@github.com:8KSOFT/institucional.git +refs/heads/*:refs/remotes/origin/* # timeout=10
 > git rev-parse refs/remotes/origin/main^{commit} # timeout=10
Checking out Revision 494e949b1554762e1c4fc7e725054e79f6f4ba19 (refs/remotes/origin/main)
 > git config core.sparsecheckout # timeout=10
 > git checkout -f 494e949b1554762e1c4fc7e725054e79f6f4ba19 # timeout=10
Commit message: "fix merge"
 > git rev-list --no-walk 2b154ae42c903fd11be93d3693fbcd1adbd0c92a # timeout=10
[Pipeline] }
[Pipeline] // stage
[Pipeline] withEnv
[Pipeline] {
[Pipeline] stage
[Pipeline] { (Definir Ambiente)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
Branch detectada: main
[Pipeline] echo
Servidor de deploy: 144.22.165.128
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Baixar fonte)
[Pipeline] script
[Pipeline] {
[Pipeline] sh
+ ssh ubuntu@144.22.165.128 
                            rm -rf /home/ubuntu/apps/institucional-8ksoft;
                            mkdir -p /home/ubuntu/apps/institucional-8ksoft;
                            chown ubuntu:ubuntu /home/ubuntu/apps/institucional-8ksoft 2>/dev/null || true
                        
+ scp -r /var/jenkins_home/workspace/institucional-8ksoft/. ubuntu@144.22.165.128:/home/ubuntu/apps/institucional-8ksoft
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Remover containers antigos)
[Pipeline] script
[Pipeline] {
[Pipeline] sh
+ ssh ubuntu@144.22.165.128 cd /home/ubuntu/apps/institucional-8ksoft && sudo docker compose down --rmi local || true
 Container institucional-8ksoft  Stopping
 Container institucional-8ksoft  Stopped
 Container institucional-8ksoft  Removing
 Container institucional-8ksoft  Removed
 Image institucional-8ksoft-app:latest  Removing
 Network institucional-8ksoft_default  Removing
 Image institucional-8ksoft-app:latest  Removed
 Network institucional-8ksoft_default  Removed
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Build e Inicialização)
[Pipeline] script
[Pipeline] {
[Pipeline] echo
🔨 Build e deploy da aplicação...
[Pipeline] sh
+ ssh ubuntu@144.22.165.128 cd /home/ubuntu/apps/institucional-8ksoft && sudo docker compose up --build -d && echo '✅ Aplicação em execução'
 Service app  Building
#0 building with "default" instance using docker driver

#1 [app internal] load build definition from Dockerfile
#1 transferring dockerfile: 567B done
#1 DONE 0.0s

#2 [app internal] load metadata for docker.io/library/node:20-slim
#2 DONE 0.7s

#3 [app internal] load .dockerignore
#3 transferring context: 2B done
#3 DONE 0.0s

#4 [app 1/8] FROM docker.io/library/node:20-slim@sha256:c6585df72c34172bebd8d36abed961e231d7d3b5cee2e01294c4495e8a03f687
#4 DONE 0.0s

#5 [app internal] load build context
#5 transferring context: 7.36MB 0.1s done
#5 DONE 0.1s

#6 [app 2/8] RUN npm install -g pm2
#6 CACHED

#7 [app 3/8] WORKDIR /usr/src/app
#7 CACHED

#8 [app 4/8] COPY package*.json ./
#8 DONE 0.1s

#9 [app 5/8] RUN npm install
#9 5.383 npm error code ERESOLVE
#9 5.383 npm error ERESOLVE unable to resolve dependency tree
#9 5.383 npm error
#9 5.383 npm error While resolving: institucional@0.1.0
#9 5.383 npm error Found: eslint@10.0.1
#9 5.383 npm error node_modules/eslint
#9 5.383 npm error   dev eslint@"^10.0.1" from the root project
#9 5.383 npm error
#9 5.383 npm error Could not resolve dependency:
#9 5.383 npm error peer eslint@"^2 || ^3 || ^4 || ^5 || ^6 || ^7.2.0 || ^8 || ^9" from eslint-plugin-import@2.32.0
#9 5.383 npm error node_modules/eslint-plugin-import
#9 5.383 npm error   dev eslint-plugin-import@"^2.32.0" from the root project
#9 5.383 npm error
#9 5.383 npm error Fix the upstream dependency conflict, or retry
#9 5.383 npm error this command with --force or --legacy-peer-deps
#9 5.383 npm error to accept an incorrect (and potentially broken) dependency resolution.
#9 5.383 npm error
#9 5.383 npm error
#9 5.383 npm error For a full report see:
#9 5.383 npm error /root/.npm/_logs/2026-02-23T16_48_17_324Z-eresolve-report.txt
#9 5.388 npm notice
#9 5.388 npm notice New major version of npm available! 10.8.2 -> 11.10.1
#9 5.388 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.10.1
#9 5.388 npm notice To update run: npm install -g npm@11.10.1
#9 5.388 npm notice
#9 5.388 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-02-23T16_48_17_324Z-debug-0.log
#9 ERROR: process "/bin/sh -c npm install" did not complete successfully: exit code: 1
------
 > [app 5/8] RUN npm install:
5.383 npm error
5.383 npm error
5.383 npm error For a full report see:
5.383 npm error /root/.npm/_logs/2026-02-23T16_48_17_324Z-eresolve-report.txt
5.388 npm notice
5.388 npm notice New major version of npm available! 10.8.2 -> 11.10.1
5.388 npm notice Changelog: https://github.com/npm/cli/releases/tag/v11.10.1
5.388 npm notice To update run: npm install -g npm@11.10.1
5.388 npm notice
5.388 npm error A complete log of this run can be found in: /root/.npm/_logs/2026-02-23T16_48_17_324Z-debug-0.log
------
failed to solve: process "/bin/sh -c npm install" did not complete successfully: exit code: 1
[Pipeline] }
[Pipeline] // script
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Validar Saúde)
Stage "Validar Saúde" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] stage
[Pipeline] { (Avisar)
Stage "Avisar" skipped due to earlier failure(s)
[Pipeline] getContext
[Pipeline] }
[Pipeline] // stage
[Pipeline] }
[Pipeline] // withEnv
[Pipeline] }
[Pipeline] // node
[Pipeline] End of Pipeline
ERROR: script returned exit code 17
Finished: FAILURE
Jenkins 2.541.1