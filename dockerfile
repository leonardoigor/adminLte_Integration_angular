FROM node


WORKDIR /app
RUN apt-get update && apt-get install -y curl
RUN npm install -g npm
RUN npm install -g @angular/cli

EXPOSE 4200
RUN npm i
CMD npm  run start