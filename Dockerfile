FROM node:20-slim AS production

RUN npm install -g pm2

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .
# COPY --from=base /app/.next .next
# COPY --from=base /app/public public
# COPY --from=base /app/node_modules node_modules
# COPY --from=base /app/package*.json ./

RUN echo "NEXT_PUBLIC_BACKEND_URL=http://institucional-api.8ksoft.com" > .env.local

ENV NODE_ENV=production

RUN npm run build

EXPOSE 8530

CMD ["pm2-runtime", "start", "npm", "--name", "8ksoft-novo", "--", "run", "build"]