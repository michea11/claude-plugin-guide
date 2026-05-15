---
sidebar_position: 3
---

# 第一个插件：开启 ECC

ECC (Everything Claude Code) 是功能最全面的 Claude Code 插件集合。安装后你会获得 60+ 专业 agent、228 个场景化 skill 和 75 个快捷命令。

## 安装

```bash
# 1. 注册 ECC 市场
/plugin marketplace add affaan-m/everything-claude-code

# 2. 安装 ECC
/plugin install ecc@ecc

# 3. 验证安装
/plugin list
```

## 验证安装成功

安装后，在对话中试输入 `/help`，你应该能看到新增的命令列表。

## 第一次体验核心流程

ECC 的核心工作流：**plan → tdd → code-review → build-fix**

### 1. 做一次规划

```
/plan 我想给项目加一个用户登出按钮
```

ECC 的 planner agent 会分析需求，生成包含架构、文件和接口的实现计划。

### 2. 启动 TDD 流程

```
/tdd auth.logout
```

TDD guide agent 强制先写失败的测试，再写最小实现，最后重构。

### 3. 代码审查

```
/code-review
```

Code reviewer agent 审查最近的代码变更，检查质量、安全和可维护性。

### 4. 修复构建

如果构建报错：

```
/build-fix
```

Build error resolver agent 分析并逐个修复错误。

## 推荐配置

在项目根目录创建 `.claude/settings.local.json`：

```json
{
  "model": "sonnet",
  "enabledPlugins": {
    "ecc@ecc": true
  }
}
```

确保 ECC 在项目中始终启用。

## 更多探索

ECC 的 228 个 skill 覆盖几乎所有开发场景。接下来了解[插件核心概念](../concepts/plugin-anatomy)，或直接跳到 [ECC 插件详解](../ecc/overview)。
