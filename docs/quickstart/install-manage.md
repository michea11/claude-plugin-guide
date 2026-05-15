---
sidebar_position: 2
---

# 安装与管理插件

## 市场注册

安装插件前，需先注册插件市场。Claude Code 默认带有 `claude-plugins-official` 官方市场。

添加第三方市场：

```bash
# ECC 市场（推荐）
/plugin marketplace add affaan-m/everything-claude-code

# Superpowers 备用市场
/plugin marketplace add obra/superpowers-marketplace
```

:::tip[什么是市场？]
市场（Marketplace）是插件的发布和分发平台。就像 App Store 之于手机应用——你从一个市场安装和更新插件。
:::

## 安装插件

```bash
# 安装 ECC
/plugin install ecc@ecc

# 安装 Superpowers
/plugin install superpowers@claude-plugins-official
```

格式：`/plugin install <插件名>@<市场名>`

## 管理命令速查

| 命令 | 作用 |
|------|------|
| `/plugin list` | 列出已安装插件 |
| `/plugins` | 交互式浏览和搜索 |
| `/plugin update <name>@<market>` | 更新到最新版 |
| `/plugin uninstall <name>` | 卸载插件 |
| `/plugin marketplace list` | 查看已注册市场 |

## 插件文件位置

安装的插件缓存到本地：

```
~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/
```

:::info[学习价值]
插件以完整文件形式存在本地。浏览 `skills/`、`agents/`、`commands/` 目录是学习插件开发的最佳方式。
:::

## 常见问题

**Q: 安装后没有新命令？**
重启 Claude Code 会话。部分插件需要重启才能加载。

**Q: ECC 的 rules 没生效？**
Rules 需手动复制：将 rules 文件复制到 `~/.claude/rules/ecc/` 或项目的 `.claude/rules/` 目录。

**Q: 可以同时装多个插件吗？**
可以。ECC + Superpowers 是推荐组合——一个提供工具，一个提供流程。

## 接下来可以学什么

- [开启第一个插件 ECC](first-ecc) → 第一次实际体验
- [理解插件核心概念](../concepts/plugin-anatomy) → 知其所以然
- [浏览 ECC Skills 精选](../ecc/skills-index) → 了解 228 个 skill
