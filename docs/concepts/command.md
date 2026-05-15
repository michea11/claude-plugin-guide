# Command 是什么

Command 是用户**主动输入** `/命令` 触发的操作。和 skill 不同，command 不依赖 AI 判断——你想用的时候直接输入。

:::tip[核心理解]
Skill 是"AI 自动做"，Command 是"你叫 AI 做"。前者像助理的直觉，后者像明确的指令。
:::

## 定义

位于 `commands/<name>.md`，文件名自动注册为命令：

```markdown
---
description: Code review the current changes
---

# Code Review
...behaviour definition...
```

`code-review.md` → 自动注册为 `/code-review`。

## Command vs Skill

| | Command | Skill |
|------|------|------|
| 触发 | 用户 `/命令` | AI 自动 |
| 谁决定 | 你 | AI |
| 适合 | 明确操作 | 场景化指导 |
| 例子 | /plan, /build-fix | brainstorming, tdd |

## ECC 命令一览

| 分类 | 数量 | 最常用 |
|------|------|-------|
| Core Workflow | 6 | /plan, /tdd, /code-review, /build-fix |
| Testing | 7 | /e2e, /test-coverage |
| Code Review | 5 | /python-review, /go-review |
| Build Fixers | 6 | /go-build, /rust-build |
| Planning | 8 | /multi-plan, /multi-workflow |
| Session | 6 | /save-session, /checkpoint |
| Learning | 9 | /learn, /skill-create |
| Infrastructure | 5 | /harness-audit, /eval |

:::info[完整速查]
详见 [ECC Commands 速查](../ecc/commands-reference)，支持搜索和分类筛选。
:::

## 设计提示

- 命令名简短好记（`/plan` 好过 `/generate-implementation-plan`）
- ECC 命令大多会派发给专门 agent
- 一个 command 文件可定义复杂行为，不只是简单文本
