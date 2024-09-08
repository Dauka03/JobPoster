# ./root/server/Dockerfile

# Используем официальный Node.js образ
FROM node:18-alpine

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы проекта в контейнер
COPY . .

# Устанавливаем переменные окружения
ENV PORT 5000

# Запуск приложения
CMD ["npm", "run", "dev"]
