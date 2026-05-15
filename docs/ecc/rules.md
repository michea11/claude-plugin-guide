---
sidebar_position: 8
---

# ECC Rules 规则系统

ECC 包含 34 条编码规则，覆盖 12+ 语言，始终生效。

## 什么是规则

Rules 是始终激活的编码约束。不像 Skill 需要场景匹配触发，Rules **无条件**一直应用。

## 安装

```bash
# 需要手动复制，插件不会自动分发 Rules
cp -r ~/.claude/plugins/cache/ecc/ecc/*/rules/common ~/.claude/rules/ecc/
cp -r ~/.claude/plugins/cache/ecc/ecc/*/rules/go ~/.claude/rules/ecc/
```

:::warning[注意]
Rules 不能通过 `/plugin install` 安装——插件系统的限制。必须手动复制。
:::

## 规则分类

| 分类 | 覆盖 | 示例规则 |
|------|------|------|
| common | 跨语言 | 命名规范、文件大小、注释规范 |
| typescript | TS/JS | 不可变优先、async/await、无 any |
| python | Python | PEP 8、type hints、列表推导 |
| go | Go | 错误传播、goroutine 安全 |
| rust | Rust | 所有权、unsafe 使用 |
| kotlin | Kotlin | null safety、coroutine 规范 |
| cpp | C++ | 内存安全、现代 C++ |
| java | Java | Optional 使用、stream API |
| sql | SQL | 参数化查询、索引规范 |
| react | React | 组件模式、hooks 规则 |

## 与 Skill 的区别

| | Rule | Skill |
|------|------|------|
| 生效 | 始终 | 场景匹配时 |
| 安装 | 手动复制 | 插件自动 |
| 位置 | `.claude/rules/` | `skills/` |
| 格式 | Markdown | YAML + Markdown |
