
FROM node:12
WORKDIR /usr/src/app
RUN npm install express
RUN npm install request
COPY . .
EXPOSE 3333
CMD ["node","index.js"]
