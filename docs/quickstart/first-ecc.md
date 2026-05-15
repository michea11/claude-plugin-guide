---
sidebar_position: 3
---

# 第一个插件：开启 ECC

ECC 安装后的第一次体验——从安装到跑通核心工作流。

## 安装

```bash
/plugin marketplace add affaan-m/everything-claude-code
/plugin install ecc@ecc
```

安装后输入 `/plugin list` 确认 ECC 在列表中。

## 验证：看看多了什么

```bash
# 查看命令列表
/help
```

你应该看到 75 个新命令：`/plan`、`/tdd`、`/code-review`、`/build-fix` 等。

:::tip[不止是命令]
ECC 的 228 个 skill 和 60+ agent **不会出现在命令列表中**——它们由 AI 自动判断触发。你只需要正常对话，它们会在正确时机自动介入。
:::

## 第一次体验核心流程

### 1. 做一次规划

```
/plan 我想给项目加一个用户登出按钮
```

Planner agent 会分析你的项目，输出包含文件清单和实现步骤的计划。

### 2. 体验 TDD

```
/tdd auth.logout
```

三步循环的具体表现：

```javascript
// AI 先生成测试（你看到了吗？这就是 RED）
describe('logout', () => {
  it('should clear session', () => {
    logout();
    expect(getSession()).toBeNull();
  });
});

// 然后写实现 —— GREEN
function logout() {
  clearSession();
}

// 最后优化 —— REFACTOR
function logout() {
  invalidateToken();
  clearSession();
  redirectTo('/login');
}
```

### 3. 代码审查

```
/code-review
```

Code reviewer agent 审查最近的变更，输出一份包含质量、安全、模式一致性的报告。

### 4. 修复构建

如果构建出错：

```
/build-fix
```

:::warning[注意]
第一次用时，给每个命令 1-2 分钟运行时间。Agent 需要分析代码库，第一次可能稍慢。
:::

## 推荐阅读顺序

| 顺序 | 内容 | 预计时间 |
|------|------|------|
| 1 | [ECC 总览](../ecc/overview) | 5 分钟 |
| 2 | [核心工作流](../ecc/core-workflow) | 10 分钟 |
| 3 | [Skills 精选](../ecc/skills-index) | 15 分钟 |
| 4 | [Commands 速查](../ecc/commands-reference) | 10 分钟 |
| 5 | [实战示例](../ecc/examples) | 10 分钟 |

按这个顺序，约 1 小时可以掌握 ECC 的核心用法。

## 接下来可以学什么

- [ECC 插件总览](../ecc/overview) → 了解六大模块
- [Superpowers 总览](../superpowers/overview) → 搭配使用效果更好
- [插件核心概念](../concepts/plugin-anatomy) → 理解底层机制
