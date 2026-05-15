# Agent 是什么

Agent（子代理）是专门处理某类任务的"微型 AI"。主 AI 判断任务类型后，将任务**派发**给对应 agent，agent 在隔离上下文中独立完成工作。

## 为什么要用 Agent

- **专注度高**：一个 agent 只做一类事，不被无关信息干扰
- **上下文隔离**：agent 看不见你的对话历史，避免污染
- **成本更低**：简单任务用轻量 agent，复杂任务用强 agent
- **可组合**：大型任务拆解后并行派发给多个 agent

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

- `name`：agent 标识
- `description`：何时派发此 agent（主 AI 据此判断）
- `tools`：agent 可用的工具集
- `model`：推荐模型

## ECC Agent 分类（60+）

| 分类 | 代表 agent | 用途 |
|------|-----------|------|
| 规划 | planner, architect | 需求分析和系统设计 |
| 审查 | code-reviewer, security-reviewer, go-reviewer | 代码质量/安全检查 |
| 构建 | build-error-resolver, go-build-resolver | 修复构建错误 |
| 测试 | tdd-guide, e2e-runner | TDD 和 E2E 测试 |
| 维护 | code-simplifier, refactor-cleaner | 代码清理和重构 |
| 编排 | loop-operator | 自动化循环控制 |

## Agent vs Skill

| | Agent | Skill |
|------|------|------|
| 执行方式 | 派发独立子 AI | 主 AI 加载为指令 |
| 上下文 | 完全隔离 | 融入主对话 |
| 适用 | 可独立完成的任务 | 需要对话上下文的任务 |

## 实战经验

- 简单任务用 haiku agent（快且省 token）
- 审查类用 sonnet（需判断力）
- 架构设计用 opus（需全局视野）
- ECC 已为每个 agent 选好推荐模型
