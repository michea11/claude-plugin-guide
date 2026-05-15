# ECC + Superpowers 配合使用

两个插件互补：ECC 提供工具箱，Superpowers 提供工作流程。配合使用是效率最高的方式。

## 分工对照

| 环节 | Superpowers 负责 | ECC 负责 |
|------|------|------|
| 需求分析 | brainstorming（一次一个问题的苏格拉底式提问） | /plan（技术规划和架构设计） |
| 设计文档 | brainstorming 产出 spec 文档 | planner agent 审阅技术可行性 |
| 任务拆解 | writing-plans（2-5 分钟粒度） | - |
| 环境隔离 | using-git-worktrees | - |
| 执行 | subagent-driven-development（每任务新 agent） | /tdd + /code-review |
| 测试 | test-driven-development（强制 RED→GREEN→REFACTOR） | /tdd（语言专用测试） |
| 审查 | requesting-code-review + receiving-code-review | code-reviewer agent（自动审查） |
| 构建 | - | /build-fix（语言专用构建修复） |
| 安全 | - | /security-scan（AgentShield 扫描） |
| 收尾 | verification-before-completion + finishing-a-development-branch | /verify + /quality-gate |

## 推荐工作流

```
📦 brainstorming（Superpowers） → 设计文档
         ↓
📋 writing-plans（Superpowers） → 实现计划
         ↓
🌿 using-git-worktrees（Superpowers） → 隔离环境
         ↓
⚙️ subagent-driven-development（Superpowers）
         ├── 📝 tdd（Superpowers + ECC /tdd）
         ├── 👀 review（Superpowers requesting-review + ECC code-reviewer）
         └── 🔨 build（ECC /build-fix）
         ↓
✅ verification → finishing（Superpowers）
```

:::tip[实际体验]
用 Superpowers 管"怎么做"，用 ECC 管"用什么做"。流程交给 Superpowers，具体执行交给 ECC 的 agents。
:::

## 场景选择

| 场景 | 推荐 |
|------|------|
| 新功能（大） | Superpowers 全流程 + ECC agent |
| 新功能（小） | ECC `/plan` → `/tdd` → `/code-review` |
| Bug 修复 | ECC `/tdd` → `/code-review` |
| 安全审计 | ECC `/security-scan` |
| 重构 | Superpowers brainstorming → ECC `/refactor-clean` |
| 学习归档 | ECC `/learn` → ECC `/evolve` |

## 接下来可以学什么

- [Superpowers 核心流程链](workflow-chain) → 理解 15 个 skill 的协同
- [ECC 核心工作流](../ecc/core-workflow) → 掌握 plan→tdd→review→build
- [插件开发教程](../dev-guide/create-skill) → 创建自己的插件
