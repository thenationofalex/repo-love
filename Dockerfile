FROM node:12

WORKDIR /root/app

COPY package.json /root/app
COPY package-lock.json /root/app

RUN npm i --quiet

# Files
COPY .env.defaults /root/app
COPY .eslintrc.js /root/app
COPY jest.config.js /root/app
COPY tsconfig.json /root/app

#Folders
COPY src /root/app/src
COPY __mocks__  /root/app/__mocks__
