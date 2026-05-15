# ECC Agents 速查

ECC 有 60+ 专业 agent，按任务类型分派。

## 规划与设计

| Agent | 模型 | 用途 |
|------|------|------|
| planner | sonnet | 需求分析和实现计划 |
| architect | sonnet/opus | 系统架构设计 |
| code-architect | sonnet | 代码级架构设计 |
| code-explorer | haiku | 快速代码库探索 |

## 代码审查

| Agent | 模型 | 用途 |
|------|------|------|
| code-reviewer | sonnet | 通用代码审查 |
| security-reviewer | sonnet | 安全漏洞检测 |
| python-reviewer | sonnet | Python 专项 |
| go-reviewer | sonnet | Go 专项 |
| kotlin-reviewer | sonnet | Kotlin 专项 |
| rust-reviewer | sonnet | Rust 专项 |
| cpp-reviewer | sonnet | C++ 专项 |
| typescript-reviewer | sonnet | TypeScript 专项 |
| java-reviewer | sonnet | Java 专项 |
| django-reviewer | sonnet | Django 专项 |
| fastapi-reviewer | sonnet | FastAPI 专项 |
| flutter-reviewer | sonnet | Flutter 专项 |
| swift-reviewer | sonnet | Swift 专项 |
| database-reviewer | sonnet | SQL 审查 |

## 构建修复

| Agent | 模型 | 用途 |
|------|------|------|
| build-error-resolver | sonnet | 通用构建修复 |
| go-build-resolver | haiku | Go 构建 |
| kotlin-build-resolver | haiku | Kotlin 构建 |
| rust-build-resolver | haiku | Rust 构建 |
| cpp-build-resolver | haiku | C++ 构建 |
| java-build-resolver | haiku | Java 构建 |
| dart-build-resolver | haiku | Dart 构建 |
| django-build-resolver | haiku | Django 构建 |

## 测试

| Agent | 模型 | 用途 |
|------|------|------|
| tdd-guide | sonnet | TDD 流程指导 |
| e2e-runner | sonnet | E2E 测试执行 |

## 维护与优化

| Agent | 模型 | 用途 |
|------|------|------|
| code-simplifier | haiku | 代码简化和清理 |
| refactor-cleaner | haiku | 死代码检测和删除 |
| doc-updater | haiku | 文档和 codemap 更新 |
| comment-analyzer | haiku | 注释质量分析 |
| harness-optimizer | sonnet | 配置性能优化 |
| performance-optimizer | sonnet | 运行时性能优化 |

## 编排

| Agent | 模型 | 用途 |
|------|------|------|
| loop-operator | sonnet | 自主循环监控 |
| docs-lookup | haiku | 文档快速查询 |

## 使用提示

- Agent 由主 AI 自动派发，不需要手动选择
- ECC 已为每个 agent 预设了推荐模型
- 简单任务自动派 haiku（快且省），复杂任务派 sonnet/opus
