FROM node:20-alpine as build

# Create html and workdir
RUN mkdir -p /var/www/html/
RUN mkdir -p /home/myFrontend

WORKDIR /home/myFrontend

# install package.json 
COPY package.json /home/myFrontend/package.json
COPY . /home/myFrontend

#Install npm
RUN npm install -g @angular/cli
RUN npm install

# Build
RUN npm run build

# Étape de production
FROM nginx:alpine

COPY --from=build /app/dist/front/ /usr/share/nginx/html

# Copie d'une configuration personnalisée de Nginx si nécessaire
# COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
