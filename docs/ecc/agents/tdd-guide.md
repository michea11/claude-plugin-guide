---
sidebar_position: 3
---

# tdd-guide

> *Enforces TDD during new features and bug fixes.*

TDD 指导 agent。强制 RED → GREEN → REFACTOR，80%+ 覆盖率。

## 何时派发

- `/tdd` 命令
- 新功能开发
- Bug 修复

## 强制流程

1. RED：先写测试，确认失败
2. GREEN：最小实现让测试通过
3. REFACTOR：优化代码保持测试绿色
4. 检查覆盖率 ≥80%
