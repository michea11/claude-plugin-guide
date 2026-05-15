---
sidebar_position: 2
---

# coding-standards

> *Baseline cross-project coding conventions for naming, readability, immutability, and code-quality review.*

写新代码、审查代码质量时激活。跨项目编码基线规范。

## 触发条件

- 开始新项目或模块
- 审查代码质量和可维护性

## 核心规则

| 规则 | 说明 |
|------|------|
| 命名清晰 | 变量/函数/类名自解释 |
| 不可变优先 | 能用 `const` 不用 `let`，能用 `readonly` 不用可变 |
| 文件单一职责 | 一个文件做一件事 |
| 无魔法数字 | 提取为命名常量 |

:::info[配套]
需要框架特定规范时，用 `frontend-patterns` 或 `backend-patterns`。需要最简规则层时用 `rules/common/coding-style.md`。
:::
