# ECC 插件总览

ECC (Everything Claude Code) 是功能最全面的 Claude Code 插件集合。由 Anthropic 黑客马拉松获奖者 Affaan Mustafa 创建，GitHub 150K+ Stars。

:::tip[一句话总结]
**把最好的工程师经验编码为可复用的插件组件。** 每个 agent 是领域专家，每个 skill 是实战验证的工作流。
:::

## 规模一览

| 组件 | 数量 | 说明 |
|------|------|------|
| Agents | 60+ | 按语言/框架/任务细分的专业子代理 |
| Skills | 228 | 覆盖全栈开发场景的"工作流手册" |
| Commands | 75 | 快捷命令，从规划到部署全覆盖 |
| Hooks | 8 类 | Gateguard、持久化、安全扫描、跨会话学习 |
| Rules | 34 条 | 12+ 语言编码规范 |
| MCP | 多组 | GitHub、Supabase、Vercel、Playwright 开箱即用 |

## 六大模块

### Agents — 专业子代理
按语言、框架、任务类型细分。规划师、审查员、构建修复专家、测试教练，每个环节都有专门 agent。

### Skills — 场景化技能
228 个工作流：前端、后端、数据库、DevOps、安全、AI/ML。AI 根据场景自动触发。

### Commands — 快捷命令
核心链路：`/plan` → `/tdd` → `/code-review` → `/build-fix`

### Hooks — 生命周期自动化
Gateguard 事实验证、会话持久化、自动安全扫描、跨会话持续学习。

### Rules — 编码规范
34 条最佳实践，覆盖 12+ 语言。统一团队编码标准，始终生效。

### MCP — 外部工具连接
GitHub、Supabase、Vercel、Playwright 等预配置，即装即用。

## 安装

```bash
/plugin marketplace add affaan-m/everything-claude-code
/plugin install ecc@ecc
```

:::warning[注意]
ECC 的 Rules 需手动安装：将 rules 文件复制到 `~/.claude/rules/ecc/` 目录。
:::

## 社区验证

| 指标 | 数据 |
|------|------|
| 返工率 | 降低 70-90% |
| 测试覆盖率 | 提升至 85-95% |
| 并行效率 | 提升 3-4 倍 |
| 跨平台 | Claude Code、Codex、Cursor、OpenCode、Gemini CLI |

## 下一步

了解[核心工作流](core-workflow) → 浏览 [Skills 精选](skills-index) → 查看 [Commands 速查](commands-reference)。
