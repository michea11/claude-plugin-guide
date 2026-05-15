# ECC Agents 速查

ECC 有 60+ 专业 agent，由主 AI 自动派发。

:::tip[怎么用 Agent]
你不需要手动派发 agent。正常对话，AI 会在合适的时机自动选择合适的 agent 处理任务。
:::

## 规划与设计

| Agent | 模型 | 何时派发 |
|------|------|---------|
| planner | sonnet | 需求分析，输出实现计划 |
| architect | sonnet/opus | 系统架构设计 |
| code-architect | sonnet | 代码级架构和模块划分 |
| code-explorer | haiku | 快速搜索和探索代码库 |

## 代码审查

| Agent | 专长 |
|------|------|
| code-reviewer | 通用审查 |
| security-reviewer | 安全漏洞 |
| python/go/kotlin/rust/cpp-reviewer | 语言专项 |
| django/fastapi/flutter/swift-reviewer | 框架专项 |
| typescript/java/csharp/fsharp-reviewer | 语言专项 |
| database-reviewer | SQL 审查 |
| healthcare-reviewer | 医疗代码 |
| mle-reviewer | ML 工程 |

:::info[共计 14+ 审查 agent]
每种语言/框架都有专门的审查 agent——因为它们需要关注不同的模式和陷阱。
:::

## 构建修复

| Agent | 专长 |
|------|------|
| build-error-resolver | 通用构建 |
| go/kotlin/rust/cpp/java-build-resolver | 语言专项 |
| dart/django/pytorch-build-resolver | 框架专项 |

## 测试

| Agent | 用途 |
|------|------|
| tdd-guide | TDD 流程指导 |
| e2e-runner | E2E 测试（Playwright） |
| pr-test-analyzer | PR 测试质量分析 |

## 维护与优化

| Agent | 用途 |
|------|------|
| code-simplifier | 代码简化 |
| refactor-cleaner | 死代码清理 |
| doc-updater | 文档同步 |
| performance-optimizer | 性能优化 |
| silent-failure-hunter | 静默失败检测 |

## 编排

| Agent | 用途 |
|------|------|
| loop-operator | 自主循环监控 |
| gan-planner/generator/evaluator | GAN 式开发循环 |

## 接下来可以学什么

- [核心工作流](core-workflow) → plan→tdd→review→build
- [Skills 精选](skills-index) → 24 个最常用 skill
