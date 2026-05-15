# 创建你的第一个 Skill

Skill 是 Claude Code 插件最基本的组件。从零创建一个 skill，大约需要 10 分钟。

## 目录结构

```
my-plugin/
└── skills/
    └── my-skill/
        └── SKILL.md          # 唯一必需的文件
```

## SKILL.md 完整模板

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

:::warning[最关键的事]
`description` 决定了 AI 会不会在正确时机加载你的 skill。写具体的场景，不要写模糊的"当需要的时候"。
:::

## 设计清单

| # | 检查项 | 要点 |
|------|------|------|
| 1 | name | 简短有意义，小写连字符 |
| 2 | description | 具体场景描述，"when X happens" |
| 3 | When to Use | 列出 2-5 个触发条件 |
| 4 | What to Do | 编号的可执行步骤，不是理论 |
| 5 | 硬关卡 | 不可跳过的步骤用警告标注 |

## 实例参考

**Superpowers 的 brainstorming**：不设计 = 不写代码。一次一个问题。产出 spec 文档。

**ECC 的 tdd-workflow**：RED → GREEN → REFACTOR 强制流程。测试不先失败拦截实现。

```bash
# 查看学习
ls ~/.claude/plugins/cache/claude-plugins-official/superpowers/*/skills/*/SKILL.md
ls ~/.claude/plugins/cache/ecc/ecc/*/skills/*/SKILL.md
```

## 测试你的 Skill

1. 在项目中创建 `skills/my-skill/SKILL.md`
2. 写一个符合以上模板的内容
3. 重启 Claude Code
4. 制造触发场景——看 AI 是否自动调用了你的 skill

:::tip[调试技巧]
如果 skill 没有触发，检查 description 是否足够具体。尝试把触发条件的措辞直接包含在 description 中。
:::
