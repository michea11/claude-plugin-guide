# Superpowers 核心流程链

Superpowers 的 15 个 skill 形成一条完整开发链路，从想法到交付。

## 流程全景

```
🧠 brainstorm ──→ 📋 write-plan ──→ ⚙️ execute ──→ ✅ verify ──→ 🚀 finish
                                         │
                              ┌──────────┼──────────┐
                              │          │          │
                           🌿 worktree  📝 tdd    🔍 debug
                              │          │          │
                           📨 parallel  👀 review  ✍️ write-skill
```

## 阶段一：规划

### brainstorming
**触发**：开始任何创意/构建工作
**硬关卡**：不写设计文档不写代码
**产出**：结构化规格（目标、非目标、约束、验收标准）

### writing-plans
**触发**：spec 批准后
**产出**：2-5 分钟级任务列表，每任务含精确路径+代码+测试

## 阶段二：执行

### subagent-driven-development
**触发**：执行计划时
**机制**：每任务派新子 agent → 两轮审查 → 继续下一任务

### test-driven-development
**触发**：实现功能或修 bug
**流程**：RED（失败测试）→ GREEN（最小实现）→ REFACTOR

### using-git-worktrees
**触发**：开始新功能
**机制**：创建隔离 worktree，main 不受污染

### systematic-debugging
**触发**：遇到 bug
**流程**：复现 → 定位 → 最小修复 → 验证

### dispatching-parallel-agents
**触发**：2+ 独立任务
**机制**：并行派发，无冲突，同步等待完成

## 阶段三：质检

### verification-before-completion
**触发**：声称工作完成
**检查**：测试通过？构建成功？无未提交？

### requesting-code-review
**触发**：完成功能
**流程**：自我审查 → 请求正式 review

### receiving-code-review
**触发**：收到 review 反馈
**流程**：逐条处理 → 修复 → 请求再审查

## 阶段四：收尾

### finishing-a-development-branch
**触发**：所有任务完成
**决策**：合并 / 发 PR / 保留 / 丢弃

## 实际使用顺序

```
brainstorming → writing-plans → using-git-worktrees → subagent-driven-development
  (内含 tdd + debugging + parallel + review) → verification → finishing
```
