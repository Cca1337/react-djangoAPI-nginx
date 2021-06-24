FROM node

WORKDIR /react

COPY package.json /react


RUN npm install -g npm@7.18.1

RUN npm install --silent


COPY . ./

RUN rm -r /react/node_modules/babel-loader/
RUN rm -r /react/node_modules/webpack

RUN npm i babel-loader@8.1.0
RUN npm i webpack@4.44.2


RUN npm run build


EXPOSE 3000

CMD ["npm", "run", "skuska"]
