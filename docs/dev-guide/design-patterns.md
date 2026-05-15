# 从 ECC 和 Superpowers 学设计模式

研究两个最成熟插件背后的设计智慧。把这些模式应用到你的插件中。

## Superpowers 的 4 个设计智慧

### 1. Description 驱动触发
```yaml
description: Use before any creative work — creating features, building components
```
比 body 内容更重要。AI 据此决定是否加载 skill。

### 2. 硬关卡强制执行
brainstorming：不设计 = 不写代码。
test-driven-development：测试不失败 = 不准实现。
verification-before-completion：验证不通过 = 不算完成。

### 3. 一次一个问题
brainstorming 的苏格拉底式提问：一次只问一件事，逐步深入。避免信息过载。

### 4. 任务粒度极致
writing-plans：每个任务 2-5 分钟可完成。包含精确路径 + 完整代码 + 测试。零占位符。

## ECC 的 5 个设计智慧

### 1. Agent 专业化
60+ agent 按语言/框架/任务细分。不是一个大而全的 agent，而是各有所长的专家团队。

| 模式 | 反模式 |
|------|------|
| `python-reviewer` 只审 Python | 一个大 agent 审所有语言 |
| `tdd-guide` 只做 TDD | 一个 agent 管所有质量 |

### 2. 全栈六件套
Skill + Agent + Command + Hook + Rule + MCP。装一个插件 = 完整工具链。

### 3. 自动发现
`commands/<name>.md` → 自动注册为 `/<name>` 命令。零配置。

### 4. 跨平台适配
`.gemini/`、`.codex/`、`.trae/`、`.opencode/` 多平台支持。一份代码到处跑。

### 5. 持续学习
`/learn` 从会话提取模式 → `instinct` 跨会话持久 → `/evolve` 进化为 skill。

## 设计 Checklist

- [ ] Skill 的 description 描述的是场景，不是功能列表？
- [ ] 硬关卡有明确标注吗（:::warning）？
- [ ] Agent 只做一类事吗？
- [ ] Command 名简短好记吗（≤3 个词）？
- [ ] Hook 的 matcher 精确且不拖慢性能吗？

:::info[参考]
完整源码：[Superpowers](https://github.com/obra/superpowers) | [ECC](https://github.com/affaan-m/everything-claude-code)
:::
