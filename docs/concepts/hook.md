# Hook 是什么

Hook 在**特定事件发生时自动触发**。保存文件后格式化、写文件前验证、会话开始加载规则——都是 hook。

:::tip[核心理解]
Hook 是"事件驱动自动化"。你设置好规则，它自动执行——不需要手动调用。
:::

## 定义

位于 `hooks/<name>.json`：

```json
[{
  "matcher": "Write|Edit",
  "hooks": [{
    "type": "command",
    "command": "${CLAUDE_PLUGIN_ROOT}/scripts/format.sh"
  }]
}]
```

## 触发事件

| 事件 | 时机 | 常用场景 |
|------|------|---------|
| PreToolUse | 工具执行前 | 安全拦截、权限检查 |
| PostToolUse | 工具执行后 | 自动格式化、日志记录 |
| SessionStart | 会话开始 | 加载规则、环境检查 |
| SessionEnd | 会话结束 | 状态保存、清理 |
| Stop | 对话停止 | 通知、归档 |
| Notification | 通知到达 | 自定义处理 |

## matcher 语法

- `"Write|Edit"` → 文件写入或编辑
- `"Bash"` → 命令行
- `"*"` → 全部
- 支持正则

## ECC 的 Hook 实践

| Hook | 事件 | 作用 |
|------|------|------|
| Gateguard | PreToolUse:Write/Edit | 写文件前验证事实声明 |
| Session 持久化 | SessionEnd | 会话结束保存状态 |
| 安全扫描 | PreToolUse:Bash | 危险命令拦截 |
| 跨会话记忆 | PostToolUse | 提取和保存经验 |

:::warning[性能注意]
matcher 尽量精确。`"*"` 匹配所有工具会每次触发，可能影响性能。
:::

## 接下来可以学什么

- [编写 Hook 教程](../dev-guide/write-hook) → 动手创建
- [插件结构剖析](plugin-anatomy) → 完整插件结构
