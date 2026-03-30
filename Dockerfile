# FROM node:20-alpine AS build

# WORKDIR /app

# COPY package.json ./

# RUN npm i

# COPY . . 

# RUN npm run build

# FROM nginx:alpine

# COPY --from=build /app/dist /usr/share/nginx/html

# EXPOSE 5173

# CMD [ "nginx", "-g", "daemon off;" ]

FROM node:20-alpine AS build
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm install
COPY . . 
RUN npm run build

FROM nginx:alpine
# Copia o arquivo de configuração que criamos acima
COPY nginx.conf /etc/nginx/conf.d/default.conf
# Copia os arquivos do build para a pasta do nginx
COPY --from=build /app/dist /usr/share/nginx/html
# O Nginx roda na porta 80 por padrão em containers
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]