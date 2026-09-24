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

# make sure uploads exists and is writable by the node user
RUN mkdir -p uploads && chown -R node:node /app/services/resume/uploads

ENV NODE_ENV=production
EXPOSE 8002
USER node

CMD ["node", "index.js"]