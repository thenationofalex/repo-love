FROM node:12

WORKDIR /root/app

ENV TZ=Australia/Melbourne

# Run
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN mkdir public

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
