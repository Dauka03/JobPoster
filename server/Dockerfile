# Указываем базовый образ
FROM node:18

# Создаем рабочую директорию внутри контейнера
WORKDIR /usr/src/app

# Копируем package.json и package-lock.json (или yarn.lock) в рабочую директорию
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем все файлы в рабочую директорию
COPY . .

# Компилируем TypeScript в JavaScript
RUN npm run build

# Список директорий и файлов для проверки
RUN ls -R

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

# Запускаем приложение в продакшен режиме
CMD [ "npm", "run", "start" ]
