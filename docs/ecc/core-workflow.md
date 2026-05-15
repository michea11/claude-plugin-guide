# ECC 核心工作流

ECC 的核心链路：**plan → tdd → code-review → build-fix**。四个步骤形成闭环开发流程。

```
Plan ──→ TDD ──→ Code Review ──→ Build Fix
  ↑                                    │
  └─────────── 迭代循环 ←──────────────┘
```

---

## 1. Plan — 需求规划

```bash
/plan 实现用户邮箱验证登录
```

Planner agent 会：

1. **分析现有代码**：扫描项目结构，理解已有模式
2. **拆解需求**：将一句话需求拆为可执行任务
3. **输出计划**：包含文件清单、接口设计、数据流、实现顺序

:::tip[实战建议]
需求描述越具体，规划越准确。避免"做一个系统"这种模糊描述。
:::

复杂需求建议用 `/multi-plan` 启动多 agent 并行规划。

---

## 2. TDD — 测试驱动开发

```bash
/tdd auth.service
```

强制三步循环：

```javascript
// Step 1: RED — AI 先生成失败的测试
describe('AuthService', () => {
  it('should reject invalid email', () => {
    const result = validateEmail('not-an-email');
    expect(result).toBe(false);
  });
});

// Step 2: GREEN — AI 写最小实现
function validateEmail(email) {
  return email.includes('@');
}

// Step 3: REFACTOR — AI 优化但保持测试通过
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
```

:::warning[硬关卡]
tdd-guide agent 会**先运行测试确认失败**，再允许写实现。想跳过这步会被拦截。
:::

---

## 3. Code Review — 代码审查

```bash
/code-review
```

审查维度：

| 维度 | 检查内容 |
|------|---------|
| 正确性 | 逻辑无误，边界条件覆盖 |
| 安全性 | SQL 注入、XSS、密钥泄露 |
| 可维护性 | 命名清晰、职责单一、无重复 |
| 模式一致性 | 是否遵循项目现有风格 |

语言专用审查：

```bash
/python-review      # Python (PEP 8, type hints, security)
/go-review          # Go (idioms, concurrency, error handling)
/rust-review        # Rust (ownership, lifetimes, unsafe usage)
/kotlin-review      # Kotlin (null safety, coroutines)
```

---

## 4. Build Fix — 构建修复

```bash
/build-fix
```

Build error resolver：
1. 读取构建错误日志
2. 分组同类错误
3. 逐个以最小 diff 修复
4. 不做大范围重构

语言专用：

```bash
/go-build           # go build / go vet
/rust-build         # cargo build / cargo check
/cpp-build          # cmake / make
/kotlin-build       # gradle / maven
/flutter-build      # flutter build
```

---

## 场景策略

| 场景 | 推荐流程 | 说明 |
|------|---------|------|
| 新功能 | plan → tdd → review | 三步走，稳扎稳打 |
| Bug 修复 | tdd → review | 先写复现测试 |
| 微改动 | tdd → review | 跳过 plan |
| 紧急修复 | fix → review → build | 事后补测试 |
| 安全审计 | security-scan | 专项扫描 |
| 大重构 | plan → multi-workflow | 多 agent 并行 |

:::info[搭配命令]

| 配合命令 | 用途 |
|---------|------|
| `/checkpoint` | 关键节点存快照 |
| `/test-coverage` | 检查覆盖率缺口 |
| `/update-docs` | 同步更新文档 |
| `/security-scan` | 穿插安全检查 |
:::
