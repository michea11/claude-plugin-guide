---
sidebar_position: 2
---

# 安装与管理插件

## 市场注册

安装插件前，需要先注册插件市场。Claude Code 默认带有 `claude-plugins-official` 官方市场。

添加第三方市场：

```bash
# ECC 市场
/plugin marketplace add affaan-m/everything-claude-code

# Superpowers 市场（可选，官方市场已有）
/plugin marketplace add obra/superpowers-marketplace
```

## 安装插件

在 Claude Code 对话中直接输入：

```bash
# 安装 ECC
/plugin install ecc@ecc

# 安装 Superpowers
/plugin install superpowers@claude-plugins-official
```

## 查看已安装

```bash
# 列出已安装插件
/plugin list

# 交互式浏览
/plugins
```

## 插件文件位置

安装的插件缓存到：

```
~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/
```

插件在本地以完整文件形式存在，包括 skill 定义、命令、agent 等。你可以直接浏览和学习它们的实现。

## 更新与卸载

```bash
# 更新到最新版
/plugin update <name>@<marketplace>

# 卸载
/plugin uninstall <name>
```

## 注意事项

- ECC 的 Rules 需手动安装：将 rules 文件复制到项目的 `.claude/rules/ecc/` 目录
- 插件安装后需重启 Claude Code 会话使其生效
- 部分 skill 需要项目中有对应的配置文件才会自动触发

## 下一步

[安装第一个插件 ECC](first-ecc)，验证一切就绪。
