# Usar la imagen oficial de Node.js
FROM node:18

# Crear directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar los archivos del proyecto al contenedor
COPY package*.json ./
RUN npm install

# Copiar el resto del código
COPY . .

# Exponer el puerto 80
EXPOSE 80

# Comando que se ejecuta al iniciar el contenedor
CMD ["node", "app.js"]
