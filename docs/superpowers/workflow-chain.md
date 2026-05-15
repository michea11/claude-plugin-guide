# Superpowers 核心流程链

15 个 skill 形成的完整开发链路——从想法到交付。

## 流程全景

```
🧠 brainstorm ──→ 📋 write-plan ──→ ⚙️ execute ──→ ✅ verify ──→ 🚀 finish
    3-10 min          5-15 min        30-120 min      5 min        2 min
```

:::tip[记住]
"慢即是快"——走完整流程 90 分钟一次做对，好过 30 分钟编码 + 3 次返工。
:::

## 阶段一：规划（10-25 分钟）

### brainstorming
**硬关卡**：不写设计文档 = 不写代码。
苏格拉底式提问，一次一个问题，深入理解需求。

**产出**：`docs/superpowers/specs/YYYY-MM-DD-<topic>-design.md`

### writing-plans
**硬关卡**：无占位符（TBD/TODO）。
将设计拆为 2-5 分钟任务。每任务含：精确路径 + 完整代码 + 测试 + 预期结果。

**产出**：`docs/superpowers/plans/YYYY-MM-DD-<feature>.md`

## 阶段二：执行（30-120 分钟）

### subagent-driven-development
每任务派新子 agent → 两轮审查 → 通过后继续。

```
Task 1: implementer → spec review ✅ → quality review ✅ → done
Task 2: implementer → spec review ❌ → fix → review ✅ → done
Task 3: implementer → spec review ✅ → quality review ✅ → done
```

### test-driven-development
硬关卡：测试不先失败 = 不准写实现。
```
RED（失败测试）→ GREEN（最小实现）→ REFACTOR（优化）
```

### systematic-debugging
```
复现 → 隔离最小步骤 → 诊断根因 → 最小修复 → 回归验证
```

### using-git-worktrees
隔离开发环境，main 不受污染。完成后可合并/PR/保留/丢弃。

### dispatching-parallel-agents
2+ 独立任务的一条消息并行派发，不共享状态，无冲突。

## 阶段三：质检（5-10 分钟）

### verification-before-completion
检查：测试全过？构建成功？无未提交？全部需求实现？
任一不满足 = 还没完成。

### requesting-code-review + receiving-code-review
先自审 → 请求正式审查 → 逐条处理反馈 → 请求再审查。

## 阶段四：收尾（2 分钟）

### finishing-a-development-branch
决策矩阵：

| 情况 | 操作 |
|------|------|
| 准备好合并 | merge 到 main |
| 需要他人审 | 创建 PR |
| 实验性 | 保留分支 |
| 废案 | 丢弃分支 |

## 实际使用顺序

```
brainstorming → writing-plans → using-git-worktrees
  → subagent-driven-development（内含 tdd + debugging + parallel + review）
    → verification → finishing
```

## 接下来可以学什么

- [各 Skill 详解](skills/using-superpowers) → 逐个深入学习
- [与 ECC 配合使用](with-ecc) → 两个插件的最佳组合
