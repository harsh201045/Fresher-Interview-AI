# FROM node

# WORKDIR /app

# COPY package*json ./

# RUN npm install

# COPY ./services/auth/package*json ./services/auth/

# RUN cd services/auth && npm install

# COPY services/auth ./services/auth

# COPY shared ./shared

# WORKDIR /app/services/auth

# EXPOSE 8001

# CMD [ "npm","start" ]

FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY services/auth/package*.json ./services/auth/
RUN cd services/auth && npm ci --omit=dev

COPY services/auth ./services/auth
COPY shared ./shared

WORKDIR /app/services/auth

ENV NODE_ENV=production
EXPOSE 8001
USER node

CMD ["node", "index.js"]