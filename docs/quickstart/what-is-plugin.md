---
sidebar_position: 1
---

# 什么是 Claude Code 插件

Claude Code 是 Anthropic 推出的 AI 编程终端工具。而**插件**是扩展 Claude Code 能力的标准方式。

:::tip[一句话理解]
插件之于 Claude Code，就像 VS Code 扩展之于编辑器——装上之后，能力完全不同。
:::

## 插件能做什么

| 组件 | 作用 | 触发方式 |
|------|------|---------|
| **Skill** | 告诉 AI 在特定场景下应该做什么 | AI 自动判断触发 |
| **Command** | 用户输入 `/命令` 时执行的操作 | 用户主动调用 |
| **Agent** | 专门处理某类任务的子 AI | AI 判断后派发 |
| **Hook** | 在特定事件发生时自动执行 | 事件驱动 |
| **MCP Server** | 连接外部工具和服务 | 配置后持续可用 |

## 为什么需要插件

- **效率提升**：不用每次手动写 prompt，skill 自动在恰当场景介入
- **质量保障**：TDD、code review、安全扫描等流程自动执行
- **知识复用**：社区最佳实践封装为 skill，开箱即用
- **工作流标准化**：从需求到交付的完整流程内置在插件中

## 两大核心插件

| | ECC | Superpowers |
|------|------|------|
| 定位 | 全栈工具箱 | 开发方法论 |
| 规模 | 60 agents, 228 skills, 75 commands | 15 skills, 无 command/agent |
| 适合 | 想要开箱即用的全套工具 | 想要建立工程纪律和流程 |
| 安装 | `/plugin install ecc@ecc` | `/plugin install superpowers@claude-plugins-official` |

两者互补：ECC 提供丰富的**工具箱**，Superpowers 提供严谨的**工作流程**。

:::warning[重要前提]
插件不会自动让你变强。它们提供的是**方法和工具**——你仍然需要理解概念、实践运用。本指南的目标就是帮你做到这一点。
:::

## 接下来可以学什么

- [安装管理插件](install-manage) → 装好环境
- [开启第一个插件 ECC](first-ecc) → 第一次体验
- [理解插件核心概念](../concepts/plugin-anatomy) → 知其所以然
