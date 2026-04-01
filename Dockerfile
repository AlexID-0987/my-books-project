# Stage 1: Build Angular
FROM node:20-alpine AS build-env
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . ./
RUN npm run build --prod

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Копіюємо **только папку browser**, де index.html Angular
COPY --from=build-env /app/dist/my-books-project/browser /usr/share/nginx/html

# Nginx конфігурація для SPA
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]