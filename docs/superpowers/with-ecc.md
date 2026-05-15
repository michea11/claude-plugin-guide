# ECC + Superpowers 配合使用

两个插件互补：ECC 提供工具箱，Superpowers 提供工作流程。

## 分工

| 方面 | Superpowers | ECC |
|------|-------------|-----|
| 需求分析 | brainstorming | /plan |
| 设计 | brainstorming + writing-plans | planner agent |
| 开发流程 | subagent-driven-development | /tdd + /code-review |
| 代码审查 | requesting-code-review | code-reviewer agent |
| 测试 | test-driven-development | tdd-guide agent |
| 构建 | - | /build-fix |
| 安全 | - | /security-scan |
| 部署 | - | deployment-patterns |

## 推荐配合方式

1. Superpowers 的 brainstorming 做需求分析
2. Superpowers 的 writing-plans 做实现计划
3. ECC 的 agent 执行具体任务（审查、测试、构建）
4. Superpowers 的 finishing 做收尾决策

## 实际工作流

```
brainstorming → writing-plans → subagent-driven-development
  (内含 ECC agents: reviewer, tdd-guide, build-fixer)
  → verification → finishing
```

"用 Superpowers 管流程，用 ECC 做执行。"
