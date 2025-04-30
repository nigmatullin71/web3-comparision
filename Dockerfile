# Базовый образ с Node.js
FROM node:20-alpine AS base

# Установка зависимостей для сборки
FROM base AS deps
WORKDIR /app

# Копирование файлов package.json и package-lock.json
COPY package.json package-lock.json* ./

# Установка зависимостей
RUN npm ci

# Сборка приложения
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Сборка приложения
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Рабочий образ
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Создание непривилегированного пользователя
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Копирование необходимых файлов
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Переключение на непривилегированного пользователя
USER nextjs

# Открытие порта
EXPOSE 3000

# Переменная окружения для прослушивания всех интерфейсов
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Запуск приложения
CMD ["node", "server.js"]