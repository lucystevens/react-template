# build environment
FROM node:13.12.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN apk add --update python make g++ && rm -rf /var/cache/apk/*

COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY service/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
