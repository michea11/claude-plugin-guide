# 插件结构剖析

Claude Code 插件的完整目录结构和组件说明。

:::tip[先看这里]
看完这页，你会理解一个插件由哪些部分组成、各自放在哪里、怎么协作。
:::

## 标准目录结构

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json           # 插件清单（唯一的元数据文件）
├── skills/                   # Skill 定义
│   └── my-skill/
│       └── SKILL.md
├── commands/                 # Slash 命令
│   └── my-command.md
├── agents/                   # 子代理
│   └── reviewer.md
├── hooks/                    # Hook 配置
│   └── hooks.json
├── .mcp.json                 # MCP Server
└── scripts/                  # 辅助脚本
```

## plugin.json

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
  "hooks": "./hooks/hooks.json"
}
```

关键约定：
- 只有 `plugin.json` 放 `.claude-plugin/` 内，其他在根目录
- `skills`/`commands`/`agents` 支持目录（递归）或文件数组
- `${CLAUDE_PLUGIN_ROOT}` 引用插件安装目录

## ECC vs Superpowers

| 组件 | ECC | Superpowers |
|------|-----|-------------|
| Skills | 228 | 15 |
| Commands | 75 | 0 |
| Agents | 60+ | 0 |
| Hooks | 8 类 | 0 |
| Rules | 34 条 | 0 |

两种策略各有利弊：ECC 全栈覆盖，Superpowers 纯粹简单。

## 接下来可以学什么

- [Skill 详解](skill) → 最核心的组件
- [Agent 详解](agent) → 子代理系统
- [Command 详解](command) → 命令系统
