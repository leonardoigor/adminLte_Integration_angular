FROM node:16.13.0


WORKDIR /app
RUN apt-get update && apt-get install -y curl
RUN npm install -g npm
RUN npm install -g @angular/cli
COPY app/package.json /app
COPY app/package-lock.json /app
EXPOSE 4200
RUN npm i
CMD npm  run start