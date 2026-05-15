---
sidebar_position: 3
---

# error-handling

> *Patterns for robust error handling across TypeScript, Python, and Go. Covers typed errors, error boundaries, retries, circuit breakers.*

跨语言的错误处理最佳实践。

## 触发条件

- 设计新模块的错误类型
- 为不稳定的外部依赖添加重试
- 审查 API 端点缺少的错误处理
- 调试级联故障或静默吞错

## 模式

```typescript
// Typed errors
class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

// Result type
type Result<T> = { ok: true; value: T } | { ok: false; error: Error };
```

```go
// Error propagation
if err != nil {
    return fmt.Errorf("fetching user %d: %w", id, err)
}
```

## 原则

- 不吞错误
- 错误包含足够上下文
- 区分可恢复和不可恢复
