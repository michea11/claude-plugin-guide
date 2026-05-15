# 创建 Command

## Command 是什么

用户输入 `/命令` 手动触发的操作。

## 文件位置

```
my-plugin/
└── commands/
    └── my-command.md
```

文件名 `my-command.md` → 自动注册为 `/my-command`。

## 定义格式

```markdown
---
description: Do something useful
---

# My Command

... behaviour definition in Markdown ...
```

## 设计提示

- 命令名简短好记
- description 清晰说明功能
- 复杂行为可以派发给 agent
- 参考 ECC 的 commands 目录学习实践
