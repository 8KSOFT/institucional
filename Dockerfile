FROM node:20-slim AS production

# Roda como usuário NÃO-ROOT numérico (uid 1000 = usuário `node` da imagem). O número é de propósito:
# o Kubernetes só consegue exigir `runAsNonRoot` quando o USER da imagem é numérico.
# A pasta de trabalho e tudo o que o build gera pertencem a esse usuário, então `.next/cache`
# (cache de imagens/ISR do Next) é gravável sem volume extra.
WORKDIR /usr/src/app
RUN chown 1000:1000 /usr/src/app
USER 1000:1000

COPY --chown=1000:1000 package*.json ./

RUN npm install

COPY --chown=1000:1000 . .

RUN echo "NEXT_PUBLIC_BACKEND_URL=http://institucional-api.8ksoft:8532" > .env.local

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN npm run build

EXPOSE 8530

# Sem PM2: dentro de container quem reinicia é o Kubernetes. O PM2 escondia queda do kubelet e exigia um
# HOME gravável (`/.pm2`), o que quebrava o app com usuário não-root (medido em 11/11/2026).
# Executa o `next` direto (PID 1 recebe o SIGTERM e encerra limpo).
CMD ["node", "node_modules/next/dist/bin/next", "start", "-p", "8530"]
