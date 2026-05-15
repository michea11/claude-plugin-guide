# 插件组件对照表

快速查阅 Claude Code 插件的 6 大组件，理解各自分工。

## 对照总表

| 组件 | 位置 | 格式 | 触发方式 | 一句话 |
|------|------|------|---------|------|
| **Skill** | `skills/<name>/SKILL.md` | YAML + MD | AI 自动判断 | "这种场景下应该这样做" |
| **Command** | `commands/<name>.md` | MD + frontmatter | 用户 `/命令` | "帮我做这件事" |
| **Agent** | `agents/<name>.md` | YAML + MD | AI 判断后派发 | "派个专家去处理" |
| **Hook** | `hooks/<name>.json` | JSON 数组 | 生命周期事件 | "这种时候自动执行" |
| **MCP Server** | `.mcp.json` | JSON | 配置后持续 | "连上外部工具" |
| **Rule** | `rules/<name>.md` | Markdown | 始终生效 | "永远遵循的规范" |

## 选择指南

| 想做什么 | 用什么 | 为什么 |
|---------|--------|------|
| 让 AI 在写代码前先设计 | **Skill** | AI 自动判断场景加载 |
| 一键触发某个操作 | **Command** | 你决定何时执行 |
| 让 AI 派专人审查代码 | **Agent** | 隔离上下文，专注任务 |
| 保存文件时自动格式化 | **Hook** | 事件驱动，零手动 |
| 连接 Supabase/数据库 | **MCP Server** | 工具集成协议 |
| 强制所有代码遵循规范 | **Rule** | 始终生效 |

:::tip[怎么选？]
**不知道用什么 → 先用 Skill。** Skill 是最基础、最灵活的组件。复杂度上升后再加 Agent 和 Hook。
:::

## ECC 覆盖

| 组件 | 数量 | 代表 |
|------|------|------|
| Skills | 228 | tdd-workflow, postgres-patterns, security-review |
| Commands | 75 | /plan, /tdd, /code-review, /build-fix |
| Agents | 60+ | code-reviewer, planner, tdd-guide, e2e-runner |
| Hooks | 8 类 | Gateguard, 会话持久化, 安全扫描 |
| Rules | 34 条 | 12+ 语言编码规范 |

## Superpowers 覆盖

| 组件 | 数量 | 代表 |
|------|------|------|
| Skills | 15 | brainstorming, writing-plans, tdd, debugging |
| 其他 | 无 | 依赖 Claude Code 内置机制 |

:::info[设计哲学]
**ECC** 是全栈策略——所有组件类型都覆盖，装一个插件全有。**Superpowers** 是纯粹策略——只有 Skill，简单干净，依赖平台原生能力。
:::

## 接下来可以学什么

- [Skill 详解](skill) → 最核心的组件
- [Agent 详解](agent) → 子代理系统
- [Command 详解](command) → 命令系统
