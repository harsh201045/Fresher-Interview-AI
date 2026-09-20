# FROM node

# WORKDIR /app

# COPY package*json ./

# RUN npm install

# COPY ./services/billing/package*json ./services/billing/

# RUN cd services/billing && npm install

# COPY services/billing ./services/billing

# COPY shared ./shared

# WORKDIR /app/services/billing

# EXPOSE 8004

# CMD [ "npm","start" ]

FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY services/billing/package*.json ./services/billing/
RUN cd services/billing && npm ci --omit=dev

COPY services/billing ./services/billing
COPY shared ./shared

WORKDIR /app/services/billing

ENV NODE_ENV=production
EXPOSE 8005
USER node

CMD ["node", "index.js"]