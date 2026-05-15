# ECC 核心工作流

ECC 提供了一条完整的开发链路：**plan → tdd → code-review → build-fix**。

## 流程概览

```
Plan  →  TDD  →  Code Review  →  Build Fix
 ↑                                    |
 └──────── 迭代循环 ←─────────────────┘
```

## 1. Plan — 需求规划

```
/plan 实现用户登录和注册功能
```

Planner agent 分析需求，拆解为可执行任务，输出包含架构和接口的实现计划。

## 2. TDD — 测试驱动开发

```
/tdd auth.service
```

三步循环：**RED**（写失败测试）→ **GREEN**（最小实现）→ **REFACTOR**（优化结构）。tdd-guide agent 强制执行此流程。

## 3. Code Review — 代码审查

```
/code-review
```

检查代码质量、安全隐患、是否遵循项目模式。语言专用：`/python-review`、`/go-review`、`/kotlin-review`。

## 4. Build Fix — 构建修复

```
/build-fix
```

分析构建日志，逐个定位并修复错误。语言专用：`/go-build`、`/rust-build`、`/kotlin-build`、`/cpp-build`。

## 实战建议

| 场景 | 推荐流程 |
|------|---------|
| 小任务 | 完整链路 plan → tdd → review → build |
| 微修复 | 跳过 plan，从 tdd 开始 |
| 多模块并行 | `/multi-workflow` |
| 需要安全审查 | 加 `/security-scan` |
| 重构遗留代码 | `/refactor-clean` |
| 更新文档 | `/update-docs` |
