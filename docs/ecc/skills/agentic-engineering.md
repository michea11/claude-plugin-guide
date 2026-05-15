---
sidebar_position: 15
---

# agentic-engineering

> *Operate as an agentic engineer using eval-first execution, decomposition, and cost-aware model routing.*

AI agent 参与编码时的工程方法论。

## 运营原则

1. 先定义完成标准，再执行
2. 拆解工作为 agent 尺寸的任务
3. 按任务复杂度路由模型
4. 用 evals 和回归检查度量

## Eval-First 循环

```
1. 定义能力 eval 和回归 eval
2. 写实现代码
3. 跑 eval
4. 如果 regressions → 修复
5. 如果 capability gaps → 回到步骤 2
```

## 模型路由

| 任务复杂度 | 模型 | 原因 |
|------|------|------|
| 简单/机械 | haiku | 便宜够用 |
| 中等/审查 | sonnet | 需判断力 |
| 高/架构 | opus | 需全局视野 |
