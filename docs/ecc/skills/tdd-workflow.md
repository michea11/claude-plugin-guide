---
sidebar_position: 1
---

# tdd-workflow

> *Enforces test-driven development with 80%+ coverage including unit, integration, and E2E tests.*

实现功能、修 bug、重构代码时自动激活。强制执行 TDD 流程。

## 触发条件

- 写新功能或功能逻辑
- 修复 bug
- 重构已有代码
- 添加 API 端点
- 创建新组件

## 强制流程

```
RED（失败测试）→ GREEN（最小实现）→ REFACTOR（优化结构）
```

:::warning[硬关卡]
不先写测试 = 不准写实现。tdd-guide agent 会运行测试确认失败后才允许进入 GREEN 阶段。
:::

## 示例

```python
# RED: 先写测试
def test_calculate_discount():
    assert calculate_discount(100, 0.1) == 90

# 运行 → FAIL ✓

# GREEN: 最小实现
def calculate_discount(price, rate):
    return price * (1 - rate)

# 运行 → PASS ✓

# REFACTOR: 优化
def calculate_discount(price: float, rate: float) -> float:
    if rate < 0 or rate > 1:
        raise ValueError("Rate must be between 0 and 1")
    return round(price * (1 - rate), 2)
```

## 覆盖要求

- 单元测试：覆盖所有函数和分支
- 集成测试：覆盖 API 端点
- E2E 测试：覆盖关键用户流程
- 最低覆盖率：80%
- 金融计算、认证逻辑等关键代码：100%

## 下一步

- [coding-standards](coding-standards) → 编码规范
- [error-handling](error-handling) → 错误处理
