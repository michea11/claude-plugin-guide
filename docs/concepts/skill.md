# Skill 是什么

Skill 是 Claude Code 插件最核心的组件。它告诉 AI **在什么场景下、应该做什么、怎么做**。

:::tip[核心理解]
Skill 不是手动调用的命令——AI 自动判断场景并加载。就像你不需要告诉资深工程师"该做 code review 了"，他们自然会做。
:::

## 结构

```
skills/my-skill/
├── SKILL.md          # 定义（YAML frontmatter + Markdown body）
└── scripts/          # 可选：辅助脚本
```

### SKILL.md 完整示例

```markdown
---
name: brainstorming
description: |
  Use before any creative work — creating features, building components,
  adding new functionality. Turns ideas into designs before coding.
---

# Brainstorming Ideas Into Designs

## When to Use
- User asks to build a new feature
- User wants to add functionality

## Hard Gates
Do NOT write any code before presenting a design and getting approval.

## What to Do
1. Explore project context — check files, docs, recent commits
2. Ask clarifying questions — one at a time
3. Propose 2-3 approaches with trade-offs
4. Present design, get user approval
5. Write design doc
6. Transition to implementation planning
```

## 触发机制

AI 根据 `description` 字段判断当前场景是否匹配，匹配时自动加载。

:::warning[关键认知]
**description 比 body 内容更重要。** 如果 description 写得不好，AI 永远不会在正确的时机加载你的 skill。
:::

## Skill vs Command

| | Skill | Command |
|------|------|------|
| 触发方 | AI 自动判断 | 用户手动 `/` |
| 时机 | 场景匹配时 | 用户决定时 |
| 适合 | 方法论、最佳实践 | 快捷操作、工具调用 |
| 示例 | brainstorming, tdd-workflow | /plan, /build-fix |

## 好的 Skill 设计原则

1. **描述精准**：description 是触发关键，写清楚"什么时候该用"。用具体的场景描述，不要写"当需要的时候"
2. **一次一件事**：一个 skill 只解决一个问题。15 个小 skill 好过一个巨型 skill
3. **可执行步骤**：AI 需要的是流程步骤，不是理论文章。编号列表优于段落文字
4. **硬关卡明确**：不可跳过的步骤用 `Hard Gates` 或 `:::warning` 标注
5. **类型标清**：flexible（灵活适应）还是 rigid（严格遵循）

:::info[学习建议]
研究 Superpowers 的 15 个 skill 和 ECC 的 skill 目录，它们是最好的教材。
:::
