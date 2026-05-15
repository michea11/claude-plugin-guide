# 从 ECC 和 Superpowers 学设计模式

## Superpowers 的设计智慧

### 1. 流程强制
- "在 ANY 响应前检查 skill"
- 硬关卡不跳过（brainstorming → 不设计不写代码）

### 2. Description 是触发关键
```yaml
description: Use before any creative work — creating features, building components
```

比 body 内容更重要。

### 3. 一次一个问题
brainstorming 的苏格拉底式提问：避免信息过载。

### 4. 任务粒度极致
"2-5 分钟可完成"——确保子 agent 不会迷路。

## ECC 的设计智慧

### 1. Agent 专业化
不是一个大 agent，而是 60+ 按语言/框架/任务细分的 agent。

### 2. 全栈覆盖
Skill + Agent + Command + Hook + Rule + MCP 六件套，用户安一个插件全有。

### 3. 自动发现
commands/ 下放 .md 文件即自动注册为 / 命令。

### 4. 跨平台适配
通过 `.gemini/GEMINI.md`、`.codex/`、`.trae/` 等多平台支持。

### 5. 持续学习
instinct 系统从会话提取模式，跨会话持久化。

## 设计 checklist

- [ ] Skill 的 description 清晰吗？
- [ ] 有硬关卡吗？标注了吗？
- [ ] Agent 只做一类事吗？
- [ ] Command 简短好记吗？
- [ ] Hook 只在必要时触发吗？
- [ ] MCP config 引用路径正确吗？
