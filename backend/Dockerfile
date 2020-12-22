FROM node:12

WORKDIR /app/backend
COPY package.json .
COPY yarn.lock .
RUN yarn
COPY . .
RUN yarn build

CMD ["yarn", "start"]