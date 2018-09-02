FROM node:8

RUN mkdir -p /var/www/app

WORKDIR /var/www/app

COPY ./package.json /var/www/app/package.json
COPY ./yarn.lock /var/www/app/yarn.lock
RUN yarn install

COPY ./routes.js /var/www/app/routes.js
COPY ./app.js /var/www/app/app.js
COPY ./carAdvert /var/www/app/carAdvert

EXPOSE 3000

CMD ["node", "app.js"]