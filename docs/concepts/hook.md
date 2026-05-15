# Hook 是什么

Hook 是在**特定事件发生时自动触发**的操作。比如：保存文件后自动格式化、写文件前验证内容、会话开始加载规则。

## 定义

位于 `hooks/<name>.json`，JSON 数组：

```json
[
  {
    "matcher": "Write|Edit",
    "hooks": [
      {
        "type": "command",
        "command": "${CLAUDE_PLUGIN_ROOT}/scripts/validate.sh"
      }
    ]
  }
]
```

## 触发事件

| 事件 | 触发时机 |
|------|---------|
| `PreToolUse` | 执行工具前 |
| `PostToolUse` | 执行工具后 |
| `SessionStart` | 会话开始 |
| `SessionEnd` | 会话结束 |
| `PreCompact` | 上下文压缩前 |
| `Stop` | 对话停止 |

## matcher 语法

- `"Write|Edit"` — 匹配文件写入或编辑
- `"Bash"` — 匹配 bash 命令
- `"*"` — 匹配所有工具
- 支持正则表达式

## Hook 类型

**Command Hook：** 执行外部脚本
```json
{ "type": "command", "command": "scripts/check.sh" }
```

**Notification Hook：** 发送通知
```json
{ "type": "notification", "message": "Build done" }
```

## ECC 的 Hook 实践

ECC 使用 hook 实现：
- **Gateguard**：写文件前要求事实声明
- **Session 持久化**：会话结束保存状态
- **安全扫描**：敏感操作前检查
- **跨会话记忆**：提取教训跨会话复用

## 实战提示

- 脚本放 `scripts/` 目录
- 用 `${CLAUDE_PLUGIN_ROOT}` 引用路径
- matcher 尽量精确，避免影响性能
