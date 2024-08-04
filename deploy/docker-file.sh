#!/bin/bash

echo "FROM nginx:alpine"

echo "COPY nginx.conf /etc/nginx/nginx.conf"

echo "COPY conf.d/default.conf /etc/nginx/conf.d/default.conf"

echo "EXPOSE 80"

echo 'CMD ["nginx", "-g", "daemon off;"]'
