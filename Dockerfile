# Dockerfile.build: Stage for building the Next.js app
FROM node:20-alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./
RUN apk add --no-cache git \
  && yarn install --frozen-lockfile \
  && yarn cache clean

COPY . .
RUN yarn build

# Final Dockerfile: Stage for serving the built app with Nginx
FROM nginx:latest

# Copy the build files from the builder stage
COPY --from=builder /app/.next /usr/share/nginx/html
COPY --from=builder /app/public /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx/nginx.conf /etc/nginx/nginx.conf

# Expose the port that the application runs on
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
