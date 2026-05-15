# 插件组件对照表

快速查阅 Claude Code 插件的 6 大组件。

## 对照总表

| 组件 | 位置 | 格式 | 触发方式 | 用途 |
|------|------|------|---------|------|
| **Skill** | `skills/<name>/SKILL.md` | YAML + MD | AI 自动判断 | 场景化行为指令 |
| **Command** | `commands/<name>.md` | MD + frontmatter | 用户 `/命令` | 快捷操作 |
| **Agent** | `agents/<name>.md` | YAML + MD | AI 判断后派发 | 专门子任务 |
| **Hook** | `hooks/<name>.json` | JSON 数组 | 生命周期事件 | 自动化触发 |
| **MCP Server** | `.mcp.json` | JSON | 配置后持续 | 外部工具连接 |
| **Rule** | `rules/<name>.md` | Markdown | 始终生效 | 全局约束 |

## 选择指南

| 想做什么 | 用什么 |
|---------|--------|
| 让 AI 在写代码前先设计 | Skill |
| 一键触发某个操作 | Command |
| 让 AI 派专人审查代码 | Agent |
| 保存文件时自动格式化 | Hook |
| 连接 Supabase/数据库 | MCP Server |
| 强制所有代码遵循规范 | Rule |

## ECC 中的覆盖

| 组件 | ECC | 示例 |
|------|-----|------|
| Skills | 228 | tdd-workflow, postgres-patterns, security-review |
| Commands | 75 | /plan, /tdd, /code-review, /build-fix |
| Agents | 60+ | code-reviewer, planner, e2e-runner |
| Hooks | 8 类 | Gateguard, 会话持久化, 安全扫描 |
| Rules | 34 条 | 12+ 语言编码规范 |
| MCP | 多组 | GitHub, Supabase, Vercel, Playwright |

## Superpowers 中的覆盖

Superpowers 仅有 **Skills**（15 个），依赖 Claude Code 内置系统处理其他组件。

| 组件 | 数量 | 示例 |
|------|------|------|
| Skills | 15 | brainstorming, tdd, debugging, code-review |
