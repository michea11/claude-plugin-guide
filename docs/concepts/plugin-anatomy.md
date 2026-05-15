# 插件结构剖析

一个 Claude Code 插件是包含特定组件的**自包含目录**。了解插件结构是理解整个插件生态的基础。

## 标准目录结构

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json           # 插件清单（唯一放这里的文件）
├── skills/                   # Skills（每个一个子目录）
│   └── my-skill/
│       └── SKILL.md
├── commands/                 # Slash 命令（扁平 .md 文件）
├── agents/                   # 子代理定义
├── hooks/                    # Hook 配置
├── .mcp.json                 # MCP Server 定义
└── scripts/                  # 工具脚本
```

## plugin.json 清单

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "插件描述",
  "author": { "name": "作者" },
  "license": "MIT",
  "skills": "./skills/",
  "commands": ["./commands/"],
  "agents": ["./agents/reviewer.md"],
  "hooks": "./hooks/hooks.json",
  "mcpServers": "./mcp-config.json"
}
```

关键约定：
- `skills`、`commands`、`agents` 可以是**目录**（递归扫描）或**文件数组**
- `hooks` 和 `mcpServers` 可内联 JSON 或文件路径
- 只有 `plugin.json` 放在 `.claude-plugin/` 内，其他组件在根目录

## ECC vs Superpowers 对比

| 组件 | ECC | Superpowers |
|------|-----|-------------|
| Skills | 228 个 | 15 个 |
| Commands | 75 个 | 无 |
| Agents | 60+ 个 | 无 |
| Hooks | 丰富 | 无 |
| Rules | 有 | 无 |
| MCP | 有 | 无 |

两种策略：Superpowers 纯粹（仅 skill，依赖内置系统），ECC 全栈（全部组件覆盖）。

## 下一步

深入理解各组件：[Skill](skill) → [Agent](agent) → [Command](command) → [Hook](hook)。
