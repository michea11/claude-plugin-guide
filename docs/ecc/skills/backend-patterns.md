---
sidebar_position: 7
---

# backend-patterns

> *Backend architecture patterns for Node.js, Express, and Next.js API routes.*

后端架构最佳实践。

## 触发条件

- 设计 API 端点
- 实现 Repository/Service/Controller 层
- 优化数据库 N+1 查询
- 添加缓存（Redis、内存、HTTP 缓存头）
- 设置后台任务或异步处理
- 构建中间件（认证、日志、限流）

## 分层结构

```
Controller → 接收 HTTP 请求，调用 Service
Service    → 业务逻辑，调用 Repository
Repository → 数据访问，封装 ORM/DB
```

## 缓存策略

| 模式 | 适用 |
|------|------|
| Cache-aside | 查缓存→未命中→查 DB→写缓存 |
| Write-through | 写 DB 同时更新缓存 |
| TTL 过期 | 设定固定过期时间 |
