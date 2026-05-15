---
sidebar_position: 12
---

# git-workflow

> *Git workflow patterns including branching strategies, commit conventions, merge vs rebase, conflict resolution.*

Git 最佳实践和团队协作规范。

## 触发条件

- 为新项目设置 Git 工作流
- 选择分支策略
- 写 commit message 和 PR 描述
- 解决合并冲突

## Commit 规范

```
<type>: <short description>

feat: add user authentication
fix: resolve login redirect loop
refactor: extract validation helper
docs: update API documentation
```

## 分支策略

| 策略 | 适用 |
|------|------|
| Trunk-based | 小团队，持续部署 |
| GitHub Flow | feature 分支 → PR → main |
| GitFlow | 大项目，多版本维护 |

:::tip
PR 越小越好审。超过 400 行建议拆分。
:::
