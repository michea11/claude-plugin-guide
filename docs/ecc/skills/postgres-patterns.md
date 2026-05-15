---
sidebar_position: 9
---

# postgres-patterns

> *PostgreSQL database patterns for query optimization, schema design, indexing, and security. Based on Supabase best practices.*

PostgreSQL 查询优化、索引设计、安全配置。

## 触发条件

- 写 SQL 查询或迁移
- 设计数据库 schema
- 排查慢查询
- 实现 Row Level Security（RLS）
- 设置连接池

## 索引最佳实践

```sql
-- ✅ 部分索引（只索引活跃数据）
CREATE INDEX idx_active_users ON users(email)
WHERE deleted_at IS NULL;

-- ✅ 复合索引（匹配查询条件顺序）
CREATE INDEX idx_user_status ON users(user_id, status);

-- ❌ 避免：宽表全列索引
CREATE INDEX idx_everything ON users(id, email, name, status);
```

## RLS 示例

```sql
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "用户只能看自己的项目"
ON projects FOR SELECT
USING (auth.uid() = user_id);
```

## 连接池

```javascript
// pg-pool 配置
const pool = new Pool({
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
```
