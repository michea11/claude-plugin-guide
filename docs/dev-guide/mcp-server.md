# 配置 MCP Server

## 什么是 MCP

MCP (Model Context Protocol) 让 Claude Code 连接外部工具和服务。

## 配置位置

插件根目录的 `.mcp.json` 或 `plugin.json` 的 `mcpServers` 字段。

## 配置格式

```json
{
  "mcpServers": {
    "my-server": {
      "command": "npx",
      "args": ["-y", "@my/mcp-server"]
    }
  }
}
```

## 常见 MCP Server

| Server | 用途 |
|------|------|
| GitHub | 仓库操作 |
| Playwright | 浏览器自动化 |
| Supabase | 数据库管理 |
| Vercel | 部署管理 |
| Context7 | 文档查询 |

## 配置提示

- 用 `${CLAUDE_PLUGIN_ROOT}` 引用本地 server 二进制
- MCP server 在会话启动时连接
- 每个 server 在独立进程中运行
