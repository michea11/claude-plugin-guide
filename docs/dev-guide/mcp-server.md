# 配置 MCP Server

MCP (Model Context Protocol) 让 Claude Code 连接外部工具和服务。

:::tip[常见用途]
连接 GitHub、连接数据库、浏览器自动化、部署管理——通过 MCP 统一协议。
:::

## 配置

`.mcp.json` 或 `plugin.json` 的 `mcpServers` 字段：

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
| GitHub | 仓库操作和 PR 管理 |
| Playwright | 浏览器自动化测试 |
| Supabase | 数据库和认证管理 |
| Context7 | 实时文档查询 |
| Exa | 网络搜索 |

## 提示

- 用 `${CLAUDE_PLUGIN_ROOT}` 引用本地 server 二进制
- MCP server 会话启动时连接，独立进程运行
- 每个 server 需要单独配置
