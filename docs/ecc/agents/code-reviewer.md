---
sidebar_position: 2
---

# code-reviewer

> *Reviews code for quality, security, and maintainability.*

代码审查 agent。审查变更，输出分级的审查报告。

## 何时派发

- 代码变更后
- `/code-review` 命令
- PR 提交前

## 检查维度

| 级别 | 检查 |
|------|------|
| CRITICAL | 安全漏洞、密钥泄露 |
| HIGH | 函数/文件行数超标、console.log |
| MEDIUM | 测试缺失、可变模式、a11y |
