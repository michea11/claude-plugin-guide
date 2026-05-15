---
sidebar_position: 8
---

# frontend-patterns

> *Frontend development patterns for React, Next.js, state management, performance optimization.*

现代前端最佳实践。

## 触发条件

- 构建 React 组件
- 管理状态（useState/useReducer/Zustand/Context）
- 数据获取（SWR/React Query/Server Components）
- 性能优化（memo/virtualization/code splitting）
- 表单处理（validation/controlled inputs/Zod）

## 状态管理选择

| 场景 | 推荐 |
|------|------|
| 组件内状态 | useState |
| 复杂表单 | useReducer |
| 全局状态 | Zustand |
| 服务端状态 | React Query / SWR |
| 主题/语言 | Context |

## 性能优化

- `React.memo` 避免不必要渲染
- `useMemo`/`useCallback` 稳定引用
- 大列表用虚拟滚动
- 图片懒加载
