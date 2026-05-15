# writing-skills

**触发时机**：创建新 skill、编辑已有 skill、验证 skill 部署前的正确性。

## Skill 结构

```
skills/my-skill/
├── SKILL.md          # YAML frontmatter + Markdown body
└── scripts/          # 可选辅助脚本
```

## Frontmatter 关键字段

- `name`：skill 标识
- `description`：触发条件描述（最重要）
- `type`：flexible 或 rigid

## 设计原则

- description 比 body 更重要——决定触发时机
- 一次做一件事——一个 skill 只解决一个问题
- 给出可执行步骤——不是理论，是流程
- 硬关卡明确标注——不可跳过的步骤
