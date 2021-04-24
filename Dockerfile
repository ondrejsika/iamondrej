FROM node:15 as build-env
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn

FROM build-env as build
COPY . .
RUN yarn run static

FROM nginx:alpine
COPY --from=build /app/out /usr/share/nginx/html
