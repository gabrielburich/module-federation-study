FROM node:14.7.0-alpine as build-stage

ENV WORKDIR /opt/app

WORKDIR $WORKDIR

COPY public $WORKDIR/public
COPY src $WORKDIR/src
COPY package.json $WORKDIR/
COPY webpack.config.js $WORKDIR/

RUN cd $WORKDIR &&  yarn install --ignore-engines && yarn run build

FROM node:14.7.0-alpine as final

ENV PORT=3001

COPY --from=build-stage /opt/app/dist /opt/app

RUN yarn global add serve

ENTRYPOINT serve -s /opt/app -l ${PORT}
