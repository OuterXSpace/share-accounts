# # # nginx
# FROM nginx:latest
# WORKDIR /app

# COPY nginx/ /etc/nginx/

# Build
FROM node:20-alpine
WORKDIR /app

COPY package.json yarn.lock ./
RUN apk add --no-cache git \
  && yarn install --frozen-lockfile \
  && yarn cache clean

COPY . .
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]