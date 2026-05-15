---
sidebar_position: 1
---

# 什么是 Claude Code 插件

Claude Code 是 Anthropic 推出的 AI 编程终端工具，能够理解你的代码库，帮你完成文件编辑、命令执行、Git 工作流等任务。而**插件**是扩展 Claude Code 能力的标准方式。

## 插件能做什么

一个插件可以向 Claude Code 添加以下组件：

| 组件 | 作用 | 触发方式 |
|------|------|---------|
| **Skill** | 告诉 AI 在特定场景下应该做什么 | AI 自动判断触发 |
| **Command** | 用户输入 `/命令` 时执行的操作 | 用户主动调用 |
| **Agent** | 专门处理某类任务的子代理 | AI 判断后派发 |
| **Hook** | 在特定事件发生时自动执行（如保存文件后格式化） | 事件驱动 |
| **MCP Server** | 连接外部工具和服务（如数据库、浏览器） | 配置后持续可用 |

## 为什么需要插件

- **效率提升**：不用每次手动编写 prompt，skill 自动在恰当场景介入
- **质量保障**：TDD、code review、安全扫描等流程自动执行
- **知识复用**：社区最佳实践封装为 skill，开箱即用
- **工作流标准化**：从需求到交付的完整流程内置在插件中

## 两大核心插件

- **ECC (Everything Claude Code)**：全栈插件集合，60+ agents、228 skills、75 commands，覆盖开发全流程。Anthropic 黑客马拉松获奖项目，GitHub 150K+ Stars
- **Superpowers**：开发方法论插件，15 个 skill 形成设计→计划→执行→验证流程链。GitHub 137K+ Stars，"让返工减少 70-90%"

两者互补：ECC 提供丰富的**工具箱**，Superpowers 提供严谨的**工作流程**。

## 下一步

了解如何[安装和管理插件](install-manage)，然后[开启第一个插件 ECC](first-ecc)。
