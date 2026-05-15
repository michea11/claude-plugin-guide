---
sidebar_position: 11
---

# docker-patterns

> *Docker and Docker Compose patterns for local development, container security, networking, volume strategies.*

Docker 和 Docker Compose 最佳实践。

## 触发条件

- 设置本地开发用 Docker Compose
- 设计多容器架构
- 审查 Dockerfile 安全性和体积
- 迁移到容器化工作流

## 多阶段构建

```dockerfile
# Build stage
FROM node:20 AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-slim
COPY --from=builder /app/dist /app
USER node
EXPOSE 3000
CMD ["node", "/app/index.js"]
```

## Compose 示例

```yaml
services:
  app:
    build: .
    ports: ["3000:3000"]
    depends_on:
      db:
        condition: service_healthy
  db:
    image: postgres:16
    volumes: [pgdata:/var/lib/postgresql/data]
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
volumes:
  pgdata:
```
