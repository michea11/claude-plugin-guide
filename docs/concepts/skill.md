# Skill 是什么

Skill 是 Claude Code 插件最核心的组件。它告诉 AI **在什么场景下、应该做什么、怎么做**。

## 结构

每个 skill 是一个目录，内含 `SKILL.md`：

```
skills/my-skill/
├── SKILL.md          # 定义（YAML frontmatter + Markdown body）
└── scripts/          # 可选：辅助脚本
```

### SKILL.md 格式

```markdown
---
name: my-skill
description: When the user wants to do X, use this skill
---

# My Skill

## When to Use
- Scenario A
- Scenario B

## What to Do
1. Step one
2. Step two
```

## 触发机制

Skill **不是**手动调用的。AI 根据 frontmatter 中的 `description` 判断当前场景是否匹配，匹配时自动通过 `Skill` 工具加载。

这意味着：写得好的 description 比 body 更重要 —— 它决定了 skill 能否在正确的时机被触发。

## 实战示例：Superpowers 的 brainstorming

来自 Superpowers 插件：

```yaml
name: brainstorming
description: |
  Use before any creative work — creating features, building components,
  adding new functionality. Turns ideas into designs before coding.
```

设计要点：
- **硬关卡**：不完成设计文档，绝不允许写代码
- **一次一个问题**：苏格拉底式提问，避免信息过载
- **产出规格文档**：目标、非目标、约束、验收标准

## Skill vs Command

| | Skill | Command |
|------|------|------|
| 触发方 | AI 自动判断 | 用户手动 `/` |
| 时机 | 场景匹配 | 用户决定 |
| 适合 | 方法论、最佳实践 | 快捷操作、工具调用 |

## 好的 Skill 设计原则

1. **描述精准**：description 是触发关键，写清楚"什么时候该用"
2. **一次一件事**：一个 skill 只解决一个问题
3. **给步骤而非理论**：AI 需要可执行的流程
4. **硬关卡明确**：不可跳过的步骤要明确标注
