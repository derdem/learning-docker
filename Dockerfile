FROM node:latest

WORKDIR /application

RUN chmod +x /application

RUN rm -rf node_modules
RUN npm cache clear --force
RUN npm install
ENTRYPOINT [ "npm", "start" ] 

EXPOSE 3000



