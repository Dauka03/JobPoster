# ./root/client/Dockerfile

# Используем официальный Node.js образ
FROM node:18-alpine AS builder

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Собираем приложение Next.js
RUN npm run build

# Устанавливаем легкий веб-сервер для Next.js
FROM node:18-alpine AS runner
WORKDIR /app

# Устанавливаем production-зависимости
COPY --from=builder /app/package*.json ./
RUN npm install --production

# Копируем собранные файлы приложения
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next

# Устанавливаем порт
ENV PORT 3000

# Запуск приложения
CMD ["npm", "start"]
