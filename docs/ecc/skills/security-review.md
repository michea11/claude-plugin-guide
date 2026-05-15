---
sidebar_position: 13
---

# security-review

> *Comprehensive security checklist and patterns for authentication, user input, secrets, API endpoints, and payment features.*

安全审查 checklist 和最佳实践。

## 触发条件

- 实现认证或授权
- 处理用户输入或文件上传
- 创建新 API 端点
- 操作密钥或凭证
- 集成第三方 API

## 检查项

| 类别 | 检查 |
|------|------|
| 注入 | SQL 参数化查询、避免 OS 命令拼接 |
| XSS | 输出编码、CSP 头 |
| 认证 | bcrypt/argon2 哈希、JWT 过期 |
| 密钥 | 不硬编码、用环境变量/secret manager |
| 传输 | HTTPS 强制、HSTS 头 |

```python
# ❌ SQL 注入风险
cursor.execute(f"SELECT * FROM users WHERE id = {user_id}")

# ✅ 参数化查询
cursor.execute("SELECT * FROM users WHERE id = %s", (user_id,))
```
