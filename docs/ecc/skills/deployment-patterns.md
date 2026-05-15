---
sidebar_position: 14
---

# deployment-patterns

> *Deployment workflows, CI/CD pipeline patterns, Docker containerization, health checks, rollback strategies.*

CI/CD 和生产部署最佳实践。

## 触发条件

- 设置 CI/CD pipeline
- 容器化应用
- 规划部署策略（蓝绿/金丝雀/滚动）
- 准备生产发布

## 部署策略

| 策略 | 说明 | 适用 |
|------|------|------|
| 滚动更新 | 逐步替换旧实例 | 无状态服务 |
| 蓝绿部署 | 新旧两套环境，切换流量 | 需要快速回滚 |
| 金丝雀 | 小比例流量先到新版 | 高风险变更 |

## 健康检查

```yaml
# Kubernetes
livenessProbe:
  httpGet:
    path: /health
    port: 3000
  initialDelaySeconds: 10
readinessProbe:
  httpGet:
    path: /ready
    port: 3000
```
