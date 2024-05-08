FROM nginx:latest

WORKDIR /app
COPY ./.next .
COPY nginx/ /etc/nginx/
