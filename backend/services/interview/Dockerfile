# FROM node

# WORKDIR /app

# COPY package*json ./

# RUN npm install

# COPY ./services/interview/package*json ./services/interview/

# RUN cd services/interview && npm install

# COPY services/interview ./services/interview

# COPY shared ./shared

# WORKDIR /app/services/interview

# EXPOSE 8003

# CMD [ "npm","start" ]

FROM node:22-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev

COPY services/interview/package*.json ./services/interview/
RUN cd services/interview && npm ci --omit=dev

COPY services/interview ./services/interview
COPY shared ./shared

WORKDIR /app/services/interview

ENV NODE_ENV=production
EXPOSE 8003
USER node

CMD ["node", "index.js"]