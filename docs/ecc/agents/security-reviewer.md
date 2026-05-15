---
sidebar_position: 4
---

# security-reviewer

> *Identifies vulnerabilities: hardcoded secrets, injection, insecure dependencies.*

安全审查 agent。扫描 SQL 注入、XSS、密钥泄露等安全漏洞。

## 何时派发

- 实现认证/授权
- 新建 API 端点
- 操作密钥
- `/security-scan` 命令

## 检查清单

- 硬编码密钥/token
- SQL 注入
- XSS 漏洞
- 输入验证缺失
- 不安全的依赖
- 路径遍历风险
