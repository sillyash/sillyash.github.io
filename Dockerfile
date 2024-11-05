FROM node:lts-alpine

WORKDIR /code

COPY . /code

RUN npm install
RUN npm run build

RUN npm install http-server

CMD ["http-server", "./dist", "--port", "8080"]

