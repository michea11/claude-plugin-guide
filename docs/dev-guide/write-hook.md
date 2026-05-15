# 编写 Hook

Hook 是事件驱动的自动化触发器。

## 基本结构

```json
[{
  "matcher": "Write|Edit",
  "hooks": [{
    "type": "command",
    "command": "${CLAUDE_PLUGIN_ROOT}/scripts/format.sh"
  }]
}]
```

## 事件类型

| 事件 | 时机 |
|------|------|
| PreToolUse | 工具执行前（可拦截） |
| PostToolUse | 工具执行后 |
| SessionStart | 会话开始 |
| SessionEnd | 会话结束 |
| Stop | 对话停止 |

## Hook 类型

| 类型 | 说明 |
|------|------|
| `command` | 执行 shell 脚本 |
| `agent` | 派发 agent 验证 |
| `notification` | 发送通知 |

:::warning
matcher 尽量精确。`"*"` 匹配所有操作会严重影响性能。用 `"Write|Edit"` 只匹配文件操作。
:::

## 使用 `${CLAUDE_PLUGIN_ROOT}`

引用插件目录内的脚本：`"${CLAUDE_PLUGIN_ROOT}/scripts/check.sh"`
