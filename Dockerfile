FROM node:20-alpine AS build
WORKDIR /app
COPY ./package.json /app/
RUN npm install
COPY . /app/
# this will build the browser and server files:

RUN npm run build
FROM nginx:latest AS client-browser
COPY --from=build /app/dist/front/browser/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

FROM node:20-alpine AS ssr-server
COPY --from=build /app/dist /app/dist/
COPY ./package.json /app/package.json
WORKDIR /app
EXPOSE 4000
CMD npm run serve:ssr:front
