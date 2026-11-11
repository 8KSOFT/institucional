# Site institucional: execução não-root e sem PM2

Data: 11/11/2026. Origem: teste de endurecimento de pods da plataforma 8KHost (`securityContext` com `runAsNonRoot`,
`allowPrivilegeEscalation: false`, `capabilities.drop: [ALL]`, `seccompProfile: RuntimeDefault`).

## O que acontecia
Com o endurecimento "estrito" (usuário não-root), o container **subia mas não respondia** (conexão recusada) e acabava morto
por falta de memória (`OOMKilled`). O log mostrava:

```
PM2 error: ENOENT: no such file or directory, open '/.pm2/pm2.pid'
PM2 error: ENOENT: no such file or directory, open '/.pm2/module_conf.json'
```

Causa: o PM2 grava em `$HOME/.pm2`. Um usuário sem cadastro no `/etc/passwd` tem `HOME=/`, que não é gravável por quem
não é root. Sem o PM2 de pé, o `npm run start` nunca era executado.

## O que foi medido (mesma imagem de produção, sem variáveis de ambiente, sem tráfego)
| Variante | Resultado |
|---|---|
| Sem PM2, uid 10001, **sem** volume em `.next/cache` | HTTP 200 |
| Sem PM2, uid 10001, com volume em `.next/cache` | HTTP 200 |
| Sem PM2, uid 1000 (usuário `node`), com volume | HTTP 200 |
| Com PM2 (como era), uid 10001, `HOME=/tmp` | HTTP 200 |

Ou seja: o problema era o `HOME` do PM2, não o `.next/cache`.

## O que mudou no Dockerfile
1. `USER 1000:1000` (numérico): permite `runAsNonRoot` na plataforma. Tudo o que o build gera pertence a esse usuário.
2. **PM2 removido.** Dentro de container, quem reinicia é o Kubernetes; o PM2 escondia quedas do kubelet e exigia `HOME`
   gravável. O `CMD` executa o `next start -p 8530` diretamente.
3. `NEXT_TELEMETRY_DISABLED=1`.

## O que NÃO foi verificado
- A **imagem nova não foi construída** (Docker local parado). O que foi validado é o comportamento em tempo de execução
  na imagem atual; falta confirmar o build (`npm install` e `npm run build` como usuário 1000).
- Sem variáveis reais nem tráfego: não testa funcionalidade que dependa do backend (`institucional-api`).
- Comportamento do cache de imagens do Next sob carga com o usuário novo.

## Como validar depois do build, antes de ligar o endurecimento
```
docker run --rm -u 1000:1000 --cap-drop ALL --security-opt no-new-privileges -p 8530:8530 <imagem>
curl -s -o /dev/null -w "%{http_code}\n" http://localhost:8530/
```

## Efeito na plataforma
Com `USER` numérico e sem PM2, o app passa a ser candidato ao nível **estrito** (`runAsNonRoot: true`, uid 1000).
O deploy só leva a imagem nova quando este branch for mergeado (a plataforma faz o build por webhook).

## Rollback
Reverter o commit. A imagem anterior (com PM2, root) continua funcionando no nível sem endurecimento.
