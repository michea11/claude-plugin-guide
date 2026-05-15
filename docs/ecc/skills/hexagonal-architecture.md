---
sidebar_position: 6
---

# hexagonal-architecture

> *Design, implement, and refactor Ports & Adapters systems with clear domain boundaries, dependency inversion, and testable use-case orchestration.*

端口与适配器架构。领域逻辑独立于框架、传输层和持久化。

## 触发条件

- 构建需要长期可维护性的新功能
- 重构领域逻辑与 I/O 耦合的代码
- 替换基础设施而不重写业务逻辑

## 核心概念

```
领域层（纯业务逻辑）
    ↑ 依赖反转
端口（接口定义在领域层）
    ↑ 实现
适配器（HTTP/CLI/DB/MQ 在边缘实现）
```

## 原则

- 领域层零外部依赖
- 接口定义在领域层，实现在基础设施层
- 测试时替换任何适配器
