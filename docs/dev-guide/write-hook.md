# 编写 Hook

## Hook 是什么

在特定事件发生时自动触发的操作。

## 文件位置

```
my-plugin/
└── hooks/
    └── hooks.json
```

## 基本结构

```json
[
  {
    "matcher": "Write|Edit",
    "hooks": [
      {
        "type": "command",
        "command": "${CLAUDE_PLUGIN_ROOT}/scripts/format.sh"
      }
    ]
  }
]
```

## 事件类型

| 事件 | 说明 |
|------|------|
| PreToolUse | 工具使用前 |
| PostToolUse | 工具使用后 |
| SessionStart | 会话开始时 |
| SessionEnd | 会话结束时 |
| Stop | 对话停止时 |
| PreCompact | 上下文压缩前 |

## Hook 类型

- **command**：执行外部脚本
- **notification**：发送通知
- **agent**：派发 agent 验证

## 使用 `${CLAUDE_PLUGIN_ROOT}`

引用插件安装目录内的脚本：

```json
{ "command": "${CLAUDE_PLUGIN_ROOT}/scripts/check.sh" }
```
