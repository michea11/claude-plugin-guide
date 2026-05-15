# Superpowers 插件总览

Superpowers 是一套**开发方法论插件**，由 Jesse Vincent 创建，GitHub 137K+ Stars，安装量超 23 万。

## 核心理念

Superpowers 不是让 AI "更聪明"，而是给它装上**工程纪律**。把资深工程师的工作流程编码为 15 个可组合的 Skill，强制执行结构化开发流程。

## 15 个 Skill 全景

| 阶段 | Skill | 作用 |
|------|------|------|
| 规划 | brainstorming | 需求讨论，产出设计文档 |
| 规划 | writing-plans | 将设计拆解为微小任务 |
| 执行 | executing-plans | 按计划逐步实现 |
| 执行 | subagent-driven-development | 每任务派新子 agent |
| 执行 | test-driven-development | 强制 RED→GREEN→REFACTOR |
| 执行 | systematic-debugging | 系统化调试方法 |
| 执行 | using-git-worktrees | Git worktree 环境隔离 |
| 执行 | dispatching-parallel-agents | 并行派发独立任务 |
| 质检 | verification-before-completion | 完成前验证 |
| 质检 | requesting-code-review | 请求代码审查 |
| 质检 | receiving-code-review | 处理审查反馈 |
| 质检 | finishing-a-development-branch | 完成开发分支 |
| 工具 | writing-skills | 创建/编辑 skill |
| 工具 | using-superpowers | 元 skill |
| 工具 | using-git-worktrees | Worktree 管理 |

## 四步强制工作流

```
Brainstorming → Writing Plans → Execute → Verify → Finish
     ↑                                              |
     └──────── 如有问题，回到设计 ←─────────────────┘
```

### 1. Brainstorming
硬关卡：不完成设计文档，绝不动手写代码。苏格拉底式提问，一次一个问题。

### 2. Writing Plans
将设计拆为 2-5 分钟可完成的任务。精确到文件路径、命令、完整代码。

### 3. Execute
每个任务派新子 agent，TDD 强制，两轮审查（规格 + 质量）。

### 4. Verify & Finish
全量测试、文档更新、合并或 PR。

## 社区效果数据

- 返工减少 70-90%
- 测试覆盖率 85-95%
- 多任务并行提速 3-4 倍
- "慢即是快"：90 分钟一次做对 vs 30 分钟 + 返工 3 次

## 安装

```bash
/plugin install superpowers@claude-plugins-official
```

## 下一步

了解[核心流程链](workflow-chain)，然后逐一学习各个 Skill。
