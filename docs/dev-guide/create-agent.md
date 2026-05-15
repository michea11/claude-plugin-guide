# 创建 Agent

Agent 是专门处理某类任务的子 AI。主 AI 判断后派发，agent 在隔离上下文中独立完成。

:::tip[一句话]
Agent = 你团队里的专家——叫"Python reviewer"来处理 Python 代码，比让全科医生看所有问题更有效。
:::

## 文件位置

```
my-plugin/
└── agents/
    └── my-reviewer.md
```

## 完整定义

```yaml
---
name: my-reviewer
description: Reviews code for specific patterns and best practices
tools: Read, Grep, Glob, Bash
model: haiku
---
```

| 字段 | 说明 |
|------|------|
| name | 标识，小写连字符 |
| description | 何时派发（主 AI 判断依据） |
| tools | 可用工具列表 |
| model | 推荐模型（haiku/sonnet/opus） |

## 模型选择

| 任务 | 模型 | 原因 |
|------|------|------|
| 搜索/读取 | haiku | 便宜够用 |
| 审查/判断 | sonnet | 需判断力 |
| 架构/设计 | opus | 需全局视野 |

:::warning
Agent 看不到你的对话历史——它只拿任务描述。description 要写得足够清楚，让 agent 在零上下文下也能正确工作。
:::

## 参考

研究 ECC 的 agents 目录：`~/.claude/plugins/cache/ecc/ecc/*/agents/`
