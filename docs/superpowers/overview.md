# Superpowers 插件总览

Superpowers 是一套**开发方法论插件**，由 Jesse Vincent 创建，GitHub 137K+ Stars，安装量超 23 万。

:::tip[一句话总结]
Superpowers 不是让 AI "更聪明"，而是给它装上**工程纪律**。把资深工程师的工作流程编码为 15 个可组合的 Skill。
:::

## 社区验证效果

| 指标 | 数据 |
|------|------|
| 返工减少 | 70-90% |
| 测试覆盖率 | 85-95%（TDD 强制） |
| 多任务提速 | 3-4 倍 |
| 核心理念 | "慢即是快" — 一次做对省过反复返工 |

## 15 个 Skill 全景

| 阶段 | Skill | 一句话 |
|------|------|------|
| 🧠 规划 | brainstorming | 不设计不写代码 |
| 🧠 规划 | writing-plans | 拆解为 2-5 分钟任务 |
| ⚙️ 执行 | subagent-driven-development | 每任务新 agent |
| ⚙️ 执行 | test-driven-development | RED→GREEN→REFACTOR |
| ⚙️ 执行 | systematic-debugging | 复现→定位→修复→验证 |
| ⚙️ 执行 | executing-plans | 独立 session 执行 |
| ⚙️ 执行 | using-git-worktrees | 环境隔离 |
| ⚙️ 执行 | dispatching-parallel-agents | 并行派发 |
| ✅ 质检 | verification-before-completion | 不验证不提交 |
| ✅ 质检 | requesting-code-review | 请求审查 |
| ✅ 质检 | receiving-code-review | 处理反馈 |
| ✅ 质检 | finishing-a-development-branch | 合并/PR/保留/丢弃 |
| 🔧 工具 | writing-skills | 创建和编辑 skill |
| 🔧 工具 | using-superpowers | 元 skill |
| 🔧 工具 | using-git-worktrees | 补充 worktree |

## 四步强制工作流

```
Brainstorming → Writing Plans → Execute → Verify → Finish
```

:::warning[硬关卡]
- brainstorming：不写设计文档 **禁止** 写代码
- test-driven-development：测试不先失败 **禁止** 写实现
- verification-before-completion：验证不通过 **禁止** 声称完成
:::

## 安装

```bash
/plugin install superpowers@claude-plugins-official
```

## 下一步

了解[核心流程链](workflow-chain) → [各 Skill 详解](skills/using-superpowers)。
