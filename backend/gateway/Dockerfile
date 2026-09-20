# FROM node

# WORKDIR /app

# COPY package*json ./

# RUN npm install

# COPY ./gateway/package*json ./gateway/

# RUN npm install

# COPY gateway ./gateway 

# COPY shared ./shared

# WORKDIR /app/gateway

# EXPOSE 8000

# CMD [ "npm","start" ]

FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY gateway/package*.json ./gateway/
RUN cd gateway && npm ci --omit=dev

COPY gateway ./gateway
COPY shared ./shared

WORKDIR /app/gateway

ENV NODE_ENV=production
EXPOSE 8000
USER node

CMD ["node", "index.js"]