FROM node:25.8.2

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY src ./src

CMD ["node", "src/index.js"]
