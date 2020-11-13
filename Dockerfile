FROM node:12.18.3
WORKDIR /usr/webApp
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]