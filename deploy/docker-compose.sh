echo "version: '3'
services:
  ${1}-nextjs:
    build: ./
  ${1}-nginx:
    build: ./nginx
    ports:
      - 3000:80
"

# docker-compose up --build
# docker-compose up -d