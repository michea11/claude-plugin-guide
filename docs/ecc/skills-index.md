# ECC Skills 精选索引

ECC 有 228 个 skill，AI 根据场景自动触发。以下按使用频率和重要度精选。

## 通用开发（必装即用）

### coding-standards
写新代码时自动激活，确保遵循项目编码规范。

**做什么**：
- 命名规范（变量/函数/类命名风格）
- 代码结构（不可变性优先、Optional 使用）
- 文件组织（每个文件单一职责）

:::note[何时触发]
当你写任何新文件或大量修改已有文件时。
:::

### tdd-workflow
实现功能或修 bug 时强制执行 TDD。

**流程**：
```
写失败测试 → 确认失败 → 最小实现 → 测试通过 → 重构
```

:::warning[硬关卡]
不允许跳过测试写实现。代码覆盖率低于 80% 不通过。
:::

### error-handling
添加错误处理时提供跨语言模式指导。

**覆盖**：
- 错误类型设计（typed errors）
- 错误传播（不吞错误）
- 用户友好错误信息
- 日志和监控集成

---

## 架构与设计

### api-design
设计 REST API 时自动激活。

**指导内容**：
- 资源命名（复数名词）
- 状态码选择（200/201/400/404/500）
- 分页设计（cursor-based vs offset）
- 认证头规范（Bearer token）

```yaml
# 好的设计
GET    /api/users          # 列表
POST   /api/users          # 创建
GET    /api/users/42       # 详情
PATCH  /api/users/42       # 部分更新
DELETE /api/users/42       # 删除
```

### hexagonal-architecture
架构设计时激活，指导端口与适配器模式。

**核心概念**：
- 领域层不依赖基础设施
- 接口定义在领域层，实现在基础设施层
- 测试时可以替换任何适配器

### database-migrations
数据库 schema 变更时激活。

**安全原则**：
- 扩展迁移 vs 收缩迁移分开
- 大表加列用 backfill default
- 不回滚已部署的迁移
- 索引变更在低峰期

---

## 数据库专项

### postgres-patterns
PostgreSQL 查询优化、索引设计、事务管理。

```sql
-- Skill 会建议这样的索引
CREATE INDEX idx_user_email ON users(email) WHERE deleted_at IS NULL;

-- 而不是全表索引
CREATE INDEX idx_user_email ON users(email);
```

### redis-patterns
Redis 数据结构选择、缓存策略、分布式锁。

**常见模式**：
- Cache-aside：查缓存 → 未命中 → 查 DB → 写缓存
- 分布式锁：`SET lock_key value NX EX 30`
- 限流器：滑动窗口 counter

---

## DevOps

### docker-patterns
Dockerfile 和 Compose 配置优化。

**最佳实践**：
```dockerfile
# 多阶段构建
FROM node:20 AS builder
WORKDIR /app
COPY package*.json .
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-slim
COPY --from=builder /app/dist /app
```

### git-workflow
分支策略、commit 规范、merge vs rebase。

:::tip
小 PR 好审。超过 400 行的 PR 拆分为多个。
:::

---

## 安全

### security-review
处理用户输入、认证、API、敏感数据时激活。

**检查项**：
- SQL 注入防护（参数化查询）
- XSS 防护（输出编码）
- CSRF token 验证
- 密码加密存储（bcrypt/argon2）
- 密钥不硬编码

### security-bounty-hunter
主动安全审计模式，扫描整个仓库。

**扫描范围**：
- 硬编码密钥和 token
- SSRF 漏洞
- 不安全加密算法（MD5/SHA1）
- 权限绕过风险

---

## AI/ML 工程

### agentic-engineering
构建 AI agent 应用时激活。覆盖 eval-first 开发、成本感知、工具设计。

### mle-workflow
ML 工程项目规范：数据契约、特征管道、训练复现、模型 serving。

---

## 查看完整列表

228 个 skill 的完整目录在：

```bash
ls ~/.claude/plugins/cache/ecc/ecc/2.0.0-rc.1/skills/
```

每个 skill 的 `SKILL.md` 包含完整的触发条件和使用说明。
