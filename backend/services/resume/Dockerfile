# FROM node

# WORKDIR /app

# COPY package*json ./

# RUN npm install

# COPY ./services/resume/package*json ./services/resume/

# RUN cd services/resume && npm install

# COPY services/resume ./services/resume

# COPY shared ./shared

# WORKDIR /app/services/resume

# EXPOSE 8002

# CMD [ "npm","start" ]

FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY services/resume/package*.json ./services/resume/
RUN cd services/resume && npm ci --omit=dev

COPY services/resume ./services/resume
COPY shared ./shared

WORKDIR /app/services/resume

ENV NODE_ENV=production
EXPOSE 8002
USER node

CMD ["node", "index.js"]