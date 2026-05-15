---
sidebar_position: 5
---

# api-design

> *REST API patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting.*

REST API 设计规范和最佳实践。

## 触发条件

- 设计新 API 端点
- 审查已有 API 契约
- 添加分页、筛选、排序
- 规划 API 版本策略

## 资源命名

```
GET    /api/users          # 列表
POST   /api/users          # 创建
GET    /api/users/42       # 详情
PATCH  /api/users/42       # 部分更新
DELETE /api/users/42       # 删除
```

## 状态码

| 场景 | 状态码 |
|------|------|
| 成功获取 | 200 |
| 成功创建 | 201 |
| 请求错误 | 400 |
| 未认证 | 401 |
| 无权限 | 403 |
| 未找到 | 404 |
| 服务器错误 | 500 |
