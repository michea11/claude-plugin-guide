# 创建你的第一个 Skill

## Skill 是什么

Skill 告诉 AI "在什么场景下、应该做什么、怎么做"。是 Claude Code 插件最基本的组件。

## 目录结构

```
my-plugin/
└── skills/
    └── my-skill/
        └── SKILL.md
```

## SKILL.md 格式

```markdown
---
name: my-skill
description: When the user wants to do X, use this skill
---

# My Skill

## When to Use
- Scenario A: user mentions X
- Scenario B: user asks about Y

## What to Do
1. First, understand the user's goal
2. Research existing solutions
3. Present 2-3 approaches with trade-offs
4. Let the user decide before implementing

## Key Principles
- Don't jump to implementation
- Ask clarifying questions
```

## 设计清单

1. **name**：简短有意义的标识
2. **description**：清晰描述"什么时候该用"
3. **When to Use**：具体的触发场景
4. **What to Do**：可执行的步骤（不是理论）
5. **硬关卡**：如果有不可跳过的步骤，明确标注

## 实例参考

学习 Superpowers 的 [brainstorming SKILL.md](https://github.com/obra/superpowers/blob/main/skills/brainstorming/SKILL.md) 和 ECC 的 skills 目录。
