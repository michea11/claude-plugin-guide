---
sidebar_position: 9
---

# ECC MCP 预配置

ECC 预配置了多个 MCP Server，即装即用。

## 什么是 MCP

MCP (Model Context Protocol) 让 Claude Code 连接外部工具和服务。详见 [概念页](../concepts/mcp)。

## ECC 预配置的 MCP Server

| Server | 用途 | 命令 |
|------|------|------|
| GitHub | 仓库操作、PR 管理 | `gh` |
| Supabase | 数据库、认证管理 | `supabase` |
| Vercel | 部署和域名管理 | `vercel` |
| Playwright | 浏览器自动化测试 | `npx playwright` |
| Context7 | 实时文档查询 | 自动 |
| Exa | 网络搜索 | 自动 |

## 启用方式

MCP Server 在 `.mcp.json` 中配置，ECC 安装后即可用。AI 会根据任务自动调用对应的 MCP 工具。

:::info[ECC 的 MCP 策略]
ECC 的作者建议：不一定所有 MCP 都要常驻加载（会占上下文）。可以按需启用，或者把常用功能改为 Command 或 Skill。
:::
