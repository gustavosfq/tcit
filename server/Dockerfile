FROM node:10

WORKDIR /app

COPY ./package.json .
COPY ./package-lock.json .

RUN npm install
RUN npm install nodemon -g

COPY . .

EXPOSE 3000

CMD npm start