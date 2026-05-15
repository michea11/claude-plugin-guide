# 创建 Agent

## Agent 是什么

Agent 是专门处理某类任务的子 AI。主 AI 判断任务类型后派发，agent 在隔离上下文中独立完成。

## 文件位置

```
my-plugin/
└── agents/
    └── my-reviewer.md
```

## 定义格式

```yaml
---
name: my-reviewer
description: Reviews code for specific patterns and best practices
tools: Read, Grep, Glob, Bash
model: haiku
---
```

## 字段说明

| 字段 | 必填 | 说明 |
|------|------|------|
| name | 是 | agent 标识，小写连字符 |
| description | 是 | 何时派发此 agent |
| tools | 是 | agent 可用的工具 |
| model | 否 | 推荐模型 |

## 模型选择指南

| 任务类型 | 推荐模型 |
|------|------|
| 简单搜索/读取 | haiku |
| 审查/判断 | sonnet |
| 架构/设计 | opus |

## 实例参考

研究 ECC 的 agents 目录：`~/.claude/plugins/cache/ecc/`。code-reviewer、tdd-guide、build-error-resolver 都是很好的参考。
