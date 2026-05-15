# ECC 插件总览

ECC (Everything Claude Code) 是功能最全面的 Claude Code 插件集合。由 Anthropic 黑客马拉松获奖者 Affaan Mustafa 经过 10 个月密集使用打磨，GitHub 150K+ Stars。

## 规模

| 组件 | 数量 |
|------|------|
| Agents | 60+ |
| Skills | 228 |
| Commands | 75 |
| Hooks | 8 类 |
| Rules | 34 条（12+ 语言） |
| MCP 预配置 | 多组 |

## 核心理念

**把最好的工程师经验编码为可复用的插件组件。** 每个 agent 是领域专家，每个 skill 是实战验证的工作流。

## 六大模块

### Agents
按语言/框架/任务细分的专业子代理：规划师、审查员、构建修复专家、测试教练。

### Skills
228 个覆盖全栈的"工作流手册"：前端、后端、数据库、DevOps、安全、AI/ML。

### Commands
75 个快捷命令。核心链路：`/plan` → `/tdd` → `/code-review` → `/build-fix`。

### Hooks
8 类生命周期自动化：Gateguard、会话持久化、安全扫描、跨会话学习。

### Rules
34 条编码最佳实践，覆盖 12+ 语言。统一团队编码标准。

### MCP 预配置
GitHub、Supabase、Vercel、Playwright 等开箱即用。

## 安装

```bash
/plugin marketplace add affaan-m/everything-claude-code
/plugin install ecc@ecc
```

## 社区数据

- 返工率降低 70-90%
- 测试覆盖率提升至 85-95%
- 多任务并行效率提升 3-4 倍
- 支持 Claude Code、Codex、Cursor、OpenCode、Gemini CLI

## 下一步

了解[核心工作流](core-workflow) — plan → tdd → code-review → build-fix 的完整开发流程。
