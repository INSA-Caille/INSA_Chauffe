# Étape 1: Construire l'application
FROM node:20-alpine as build

WORKDIR /app

# Copier les fichiers de dépendance
COPY package.json package-lock.json* ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers de l'application
COPY . .

# Construire l'application pour le serveur et le navigateur
RUN npm run build

# Étape 2: Serveur Node.js pour Angular Universal
FROM node:20-alpine as server

WORKDIR /app

# Copier le build du serveur
COPY --from=build /app/dist/mon-app/server/ ./
COPY --from=build /app/node_modules/ ./node_modules/

# Exposer le port sur lequel le serveur Node.js écoute (ajuste selon ta configuration)
EXPOSE 4000

CMD ["node", "server.mjs"]

