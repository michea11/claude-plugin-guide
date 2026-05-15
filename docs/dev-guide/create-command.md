# 创建 Command

Command 是用户 `/命令` 手动触发的操作。文件名自动注册为命令。

:::tip[自动注册]
`commands/my-cmd.md` → 自动注册为 `/my-cmd`。零配置。
:::

## 定义

```markdown
---
description: Do something useful
---

# My Command
...behaviour in Markdown...
```

## 设计提示

- 命令名 ≤3 个词，简短好记
- description 写清楚这个命令干什么
- 复杂行为可以派发给 agent
- 参考 ECC 的 `commands/` 目录学习实践

## 实例

```bash
# ECC 的 /plan 命令
# 文件: commands/plan.md
# 用户输入 /plan <需求> → planner agent 分析并输出计划
```
