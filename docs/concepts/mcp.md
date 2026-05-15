# MCP 是什么

MCP（Model Context Protocol）是 Anthropic 提出的开放协议，让 AI 助手连接外部工具和数据源。Claude Code 通过 MCP 连接 GitHub、数据库、浏览器等。

:::tip[一句话]
MCP 之于 AI 工具，就像 USB 之于外设——统一标准，插上就用。
:::

## 它能连接什么

| 类型 | 例子 | 能做什么 |
|------|------|------|
| 代码托管 | GitHub | 读 PR、创建 issue、管理仓库 |
| 数据库 | Supabase、PostgreSQL | 查数据、管理 schema、调试慢查询 |
| 浏览器 | Playwright | 自动化测试、网页截图、表单填写 |
| 文档 | Context7 | 查询最新库/框架文档 |
| 搜索 | Exa | 网络搜索和信息检索 |
| 部署 | Vercel、Cloudflare | 部署预览、域名管理 |
| 通信 | Slack | 收发消息和通知 |

## 怎么工作

```
Claude Code ←→ MCP Server ←→ 外部工具
  (客户端)    (协议中转)    (GitHub/DB/浏览器)
```

1. MCP Server 是一个独立进程，连接到外部工具
2. Claude Code 通过 JSON-RPC 与 MCP Server 通信
3. MCP Server 把外部工具的能力暴露为 "Tools"（函数调用）
4. AI 判断需要用到某个工具时，像调用内置工具一样调用它

## 在插件中的位置

```
my-plugin/
└── .mcp.json          # ← MCP Server 配置放这里
```

```json
{
  "mcpServers": {
    "github": {
      "command": "npx",
      "args": ["-y", "@anthropic/mcp-server-github"]
    }
  }
}
```

## 内置工具 vs MCP 工具

| | 内置工具 | MCP 工具 |
|------|------|------|
| 例子 | Read, Write, Bash | GitHub API, Playwright 浏览器 |
| 谁提供 | Claude Code 自带 | MCP Server 提供 |
| 配置 | 不需要 | 需安装和启动 server |
| 触发 | AI 直接调用 | 通过协议通信后调用 |

:::info[ECC 预配置]
ECC 已经预配置了多个 MCP Server：GitHub、Supabase、Vercel、Playwright。装好 ECC 即可用，无需手动配置。
:::

## MCP vs Hook

| | MCP | Hook |
|------|------|------|
| 目的 | 连接外部工具 | 事件驱动自动化 |
| 触发 | AI 按需调用 | 特定事件自动触发 |
| 配置 | .mcp.json | hooks/*.json |
| 例子 | 查询 GitHub PR | 保存文件后格式化 |

## 接下来可以学什么

- [配置 MCP Server](../dev-guide/mcp-server) → 动手实践
- [插件组件对照表](component-reference) → 全局视角
