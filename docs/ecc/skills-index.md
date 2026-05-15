# ECC Skills 精选

ECC 有 228 个 skill，AI 根据场景自动触发。以下精选 24 个最常用 skill，按领域分类。

:::tip[如何阅读]
每个 skill 标注了真实触发条件（来自 `SKILL.md` 的 description）和实用示例。
:::

---

## 通用开发（4）

### 1. [coding-standards](skills/coding-standards)
> *Baseline cross-project coding conventions for naming, readability, immutability*

写任何新代码时激活。制定跨项目编码基线规范。

- 命名规范（变量/函数/类）
- 不可变性优先
- 文件单一职责

### 2. [tdd-workflow](skills/tdd-workflow)
> *Enforces test-driven development with 80%+ coverage including unit, integration, and E2E tests*

实现功能、修 bug、重构时激活。强制 RED → GREEN → REFACTOR 流程。

```
写失败测试 → 确认失败 → 最小实现 → 测试通过 → 重构
```

:::warning[硬关卡]
跳过测试写实现会被拦截。
:::

### 3. [error-handling](skills/error-handling)
> *Covers typed errors, error boundaries, retries, circuit breakers, and user-facing error messages*

设计错误类型、添加重试逻辑、审查 API 错误处理、调试级联故障时激活。

**覆盖语言**：TypeScript, Python, Go

### 4. [search-first](skills/search-first)
> *Research-before-coding workflow. Search for existing tools, libraries, and patterns before writing custom code*

引入新功能、添加依赖、准备写自定义工具前激活。

**原则**：先搜再写，不重复造轮子。

---

## 架构与设计（4）

### 5. [api-design](skills/api-design)
> *REST API patterns including resource naming, status codes, pagination, filtering, error responses, versioning, and rate limiting*

设计新 API、审查 API 契约、添加分页/筛选、规划 API 版本策略时激活。

```yaml
# 推荐
GET    /api/users
POST   /api/users
GET    /api/users/42
PATCH  /api/users/42
DELETE /api/users/42
```

### 6. [hexagonal-architecture](skills/hexagonal-architecture)
> *Design, implement, and refactor Ports & Adapters systems with clear domain boundaries*

构建需要长期可维护性的功能、重构耦合代码、替换基础设施而不重写业务逻辑时激活。

**核心**：领域层不依赖框架；适配器在边缘。

### 7. [backend-patterns](skills/backend-patterns)
> *Backend architecture patterns for Node.js, Express, and Next.js API routes*

设计 API 端点、实现 Repository/Service/Controller 层、优化数据库查询（N+1）、添加缓存、设置后台任务时激活。

### 8. [frontend-patterns](skills/frontend-patterns)
> *Frontend development patterns for React, Next.js, state management, performance optimization*

构建 React 组件、管理状态（useState/useReducer/Zustand）、数据获取（SWR/React Query）、性能优化（memo/virtualization）、表单处理时激活。

---

## 语言与框架（8）

### 9. **python-patterns**
> *PEP 8 standards, type hints, and best practices for building robust Python applications*

写、审查、重构 Python 代码时激活。

### 10. **golang-patterns**
> *Idiomatic Go patterns, concurrency, error handling, and best practices*

写、审查、重构 Go 代码时激活。强调简洁、并发安全、错误传播。

### 11. **rust-patterns**
> *Idiomatic Rust patterns, ownership, error handling, traits, and concurrency*

写、审查、重构 Rust 代码时激活。强调所有权、enum 模式匹配、零成本抽象。

### 12. **django-patterns**
> *Django architecture patterns, REST API design with DRF, ORM best practices*

构建 Django 应用、设计 DRF API、设置项目结构时激活。

### 13. **springboot-patterns**
> *Spring Boot architecture patterns, REST API design, layered services, JPA*

构建 Spring Boot REST API、设计 controller → service → repository 层时激活。

### 14. **fastapi-patterns**
> *FastAPI patterns for async APIs, dependency injection, Pydantic models, OpenAPI docs*

构建 FastAPI 服务、拆分 routers/schemas/dependencies 时激活。

### 15. **nestjs-patterns**
> *NestJS architecture patterns for modules, controllers, providers, DTO validation*

构建 NestJS API、设计 module 结构、添加 guards/interceptors 时激活。

### 16. **swiftui-patterns**
> *SwiftUI architecture, @Observable state management, view composition, navigation*

构建 SwiftUI 视图、管理状态（@State/@Observable）、设计 NavigationStack 导航时激活。

---

## 数据库（2）

### 17. [postgres-patterns](skills/postgres-patterns)
> *Query optimization, schema design, indexing, and security. Based on Supabase best practices*

写 SQL 查询或迁移、设计 schema、排查慢查询、实现 RLS、设置连接池时激活。

```sql
-- Skill 推荐的部分索引
CREATE INDEX idx_user_email ON users(email) WHERE deleted_at IS NULL;
```

### 18. [redis-patterns](skills/redis-patterns)
> *Caching strategies, distributed locks, rate limiting, pub/sub, and connection management*

添加缓存、实现限流、构建分布式锁、设置 session 存储时激活。

---

## DevOps（3）

### 19. [docker-patterns](skills/docker-patterns)
> *Docker Compose for local development, container security, networking, and multi-service orchestration*

设置 Docker Compose、设计多容器架构、审查 Dockerfile 安全性和体积时激活。

```dockerfile
# 多阶段构建（Skill 推荐）
FROM node:20 AS builder
WORKDIR /app
RUN npm ci && npm run build

FROM node:20-slim
COPY --from=builder /app/dist /app
```

### 20. [git-workflow](skills/git-workflow)
> *Branching strategies, commit conventions, merge vs rebase, and conflict resolution*

设置 Git 工作流、选择分支策略、写 commit message、解决合并冲突时激活。

:::tip
小 PR 好审。超过 400 行的 PR 拆分为多个。
:::

### 21. [deployment-patterns](skills/deployment-patterns)
> *CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies, and production readiness*

设置 CI/CD pipeline、容器化应用、规划部署策略（blue-green/canary/rolling）时激活。

---

## 安全（2）

### 22. [security-review](skills/security-review)
> *Comprehensive security checklist: authentication, user input, secrets, API endpoints, payment/sensitive features*

实现认证、处理用户输入、创建 API、操作密钥、集成第三方 API 时激活。

**检查范围**：SQL 注入、XSS、CSRF、密钥硬编码、加密算法。

### 23. **security-bounty-hunter**
> *Hunt for exploitable, bounty-worthy security issues in repositories*

安全审计模式下全仓库扫描，检测可利用漏洞。

---

## AI/ML 工程（1）

### 24. [agentic-engineering](skills/agentic-engineering)
> *Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing*

AI agent 大量参与编码、人类控制质量和风险的工程工作流中激活。

**原则**：定义完成标准 → 分解为 agent 尺寸任务 → 按复杂度路由模型 → evals 验证。

---

## 完整列表

全部 228 个 skill 在：

```bash
ls ~/.claude/plugins/cache/ecc/ecc/2.0.0-rc.1/skills/
```
