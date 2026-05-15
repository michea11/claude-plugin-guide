# Command 是什么

Command 是用户主动输入 `/命令` 触发的操作。和 skill 不同，command 不依赖 AI 判断——你想用的时候就输入。

## 定义

位于 `commands/<name>.md`，Markdown + frontmatter：

```markdown
---
description: Code review the current changes
---
```

文件名 `code-review.md` → 自动注册为 `/code-review` 命令。

## Command vs Skill

| | Command | Skill |
|------|------|------|
| 触发 | 用户 `/` | AI 自动判断 |
| 谁决定 | 用户 | AI |
| 适合 | 明确操作 | 场景指导 |

## ECC 命令体系

| 分类 | 数量 | 代表命令 |
|------|------|---------|
| Core Workflow | 6 | /plan, /tdd, /code-review, /build-fix |
| Testing | 7 | /e2e, /test-coverage, /go-test |
| Code Review | 5 | /python-review, /go-review, /rust-review |
| Build Fixers | 6 | /go-build, /kotlin-build, /rust-build |
| Planning | 8 | /multi-plan, /multi-workflow |
| Session | 6 | /save-session, /resume-session |
| Learning | 9 | /learn, /learn-eval, /skill-create |
| Infrastructure | 5 | /harness-audit, /eval |

## 实战提示

- 命令名简短好记（`/plan` 好过 `/generate-plan`）
- ECC 的命令大多会派发给专门的 agent
- 全部详见 [ECC Commands 速查](../ecc/commands-reference)
