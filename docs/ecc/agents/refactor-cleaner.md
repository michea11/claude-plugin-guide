---
sidebar_position: 8
---

# refactor-cleaner

> *Dead code cleanup and consolidation. Runs analysis tools to identify dead code and safely removes it.*

死代码清理 agent。安全检测并删除，每次变更后验证。

## 何时派发

- `/refactor-clean` 命令
- 需要代码清理
- 移除未使用的代码

## 安全原则

- 先分析再删除
- 每次删除后验证
- 支持撤销
