---
sidebar_position: 7
---

# ECC Hooks 系统

ECC 使用 8 类生命周期 Hook 实现自动化。

## 什么是 Hook

Hook 在特定事件发生时自动触发操作。ECC 用 Hook 实现安全门禁、会话管理、跨会话学习。

## ECC 的 8 类 Hook

| Hook | 事件 | 作用 |
|------|------|------|
| Gateguard | PreToolUse:Write/Edit | 写文件前验证事实声明 |
| Session 持久化 | SessionEnd | 会话结束保存状态到 SQLite |
| 自动格式化 | PostToolUse:Write/Edit | 代码自动格式化 |
| 安全扫描 | PreToolUse:Bash | 拦截危险的 bash 命令 |
| 跨会话记忆 | PostToolUse | 提取经验保存为 instinct |
| Tmux 提醒 | Stop | 会话结束提醒保存 tmux |
| 控制台日志检测 | PostToolUse | 检测 console.log 残留 |
| 类型检查 | PreToolUse | 构建前运行类型检查 |

## Gateguard 详解

ECC 最核心的 Hook。在每次 `Write` 或 `Edit` 操作前运行。

**触发**: 写任何文件前  
**行为**: 验证是否声明了 4 项事实  
**拦截**: 事实不全则拦截写入

这就是你在用 ECC 时看到 "Before creating X, present these facts" 的原因。

## Session 持久化

**触发**: 会话结束时  
**行为**: 保存会话状态到 `~/.claude/session-data/`  
**目的**: 跨天恢复工作

## 配置位置

- `~/.claude/settings.json` — 用户级 Hook
- `.claude/settings.local.json` — 项目级 Hook
- ECC 插件 `hooks/` 目录 — 插件自带
