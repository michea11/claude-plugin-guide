# Agent 是什么

Agent（子代理）是专门处理某类任务的"微型 AI"。主 AI 判断任务类型后**派发**给对应 agent，agent 在隔离上下文中独立完成工作，返回结果。

:::tip[核心理解]
Agent 看不到你的对话历史——它只拿到任务描述和相关文件。这既是限制（缺少上下文）也是优势（不被无关信息干扰）。
:::

## 为什么需要 Agent

| 优势 | 说明 |
|------|------|
| 专注度高 | 一个 agent 只做一类事 |
| 上下文隔离 | 不会污染主会话 |
| 成本可控 | 简单任务用 haiku，复杂用 sonnet |
| 可并行 | 独立任务同时派发 |

## Agent 定义

位于 `agents/<name>.md`，YAML frontmatter + body：

```yaml
---
name: code-reviewer
description: Reviews code for quality, security, and maintainability
tools: Read, Grep, Glob, Bash
model: sonnet
---
```

| 字段 | 说明 |
|------|------|
| `name` | agent 标识 |
| `description` | 何时派发（主 AI 据此判断） |
| `tools` | agent 可用工具集 |
| `model` | 推荐模型（haiku/sonnet/opus） |

## ECC Agent 分类（60+）

### 规划类
| Agent | 用途 |
|------|------|
| planner | 需求分析，输出实现计划 |
| architect | 系统架构设计 |
| code-architect | 代码级架构 |
| code-explorer | 快速搜索和探索 |

### 审查类
| Agent | 专长 |
|------|------|
| code-reviewer | 通用代码审查 |
| security-reviewer | 安全漏洞检测 |
| python/go/kotlin/rust/cpp-reviewer | 语言专项审查 |
| django/fastapi/flutter/swift-reviewer | 框架专项审查 |
| database-reviewer | SQL 审查 |

### 构建修复
| Agent | 专长 |
|------|------|
| build-error-resolver | 通用构建修复 |
| go/kotlin/rust/cpp/java/dart-build-resolver | 语言专项 |

### 测试
| Agent | 用途 |
|------|------|
| tdd-guide | TDD 流程指导 |
| e2e-runner | E2E 测试执行 |

## Agent vs Skill

| | Agent | Skill |
|------|------|------|
| 执行方式 | 独立子 AI | 主 AI 加载为指令 |
| 上下文 | 完全隔离 | 融入主会话 |
| 适用 | 可独立完成的任务 | 需要对话上下文的任务 |
| 派发 | 主 AI 用 Agent 工具 | 主 AI 用 Skill 工具 |

:::warning[模型选择]
- 简单任务用 **haiku** agent（快且省 token）
- 审查类用 **sonnet**（需要判断力）
- 架构设计用 **opus**（需要全局视野）
- ECC 已为每个 agent 选好了推荐模型，不用自己判断
:::
