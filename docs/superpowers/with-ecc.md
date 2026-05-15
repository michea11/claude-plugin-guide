# ECC + Superpowers 协同实战

两个插件互补：**Superpowers 管流程（怎么做），ECC 管执行（用什么做）**。本文以本项目（Claude Code 插件学习指南文档站）的真实开发过程为例，展示两者如何配合。

## 分工总览

| 环节 | Superpowers 负责 | ECC 负责 |
|------|------|------|
| 需求澄清 | brainstorming（苏格拉底式提问） | planner agent（技术可行性） |
| 方案设计 | brainstorming → spec 文档 | architect agent（架构审阅） |
| 任务拆解 | writing-plans（2-5 分钟粒度） | — |
| 编码执行 | subagent-driven-development | code-reviewer / build-error-resolver |
| 质量保障 | verification-before-completion | /build-fix / security-scan |
| 审查合并 | requesting-code-review | code-reviewer agent |
| 发布收尾 | finishing-a-development-branch | deploy 工作流 |

---

## 实战案例：构建本插件文档站

### 项目背景

目标：搭建一个 Docusaurus 中文文档站，系统讲解 Claude Code 插件生态，并开源部署到 GitHub Pages。

技术栈：Docusaurus 3 + React 19 + TypeScript + GitHub Actions

### 阶段 1：需求澄清 — brainstorming

用 Superpowers 的 `brainstorming` 启动项目。它不会直接写代码，而是通过一次一个问题的对话，帮你理清真正要做的事。

**实际对话流程：**

```
用户: 我想要把这个项目在github开源，并且部署在github服务器上

brainstorming: 先探索项目结构 → 你的 GitHub 用户名是什么？
用户: michea11

brainstorming: 仓库名叫 claude-plugin-site 还是其他？
用户: 你推荐什么？

brainstorming: 推荐保留 claude-plugin-site，零改动成本，语义清晰
用户: 要 guide

brainstorming: 好的，claude-plugin-guide。检查一下有没有敏感信息...
（自动扫描 .claude/ 目录，确认无 API key 泄露）

brainstorming: 方案总结 — ① 创建仓库 ② 更新配置 ③ 推送 ④ 启用 Pages
用户: 同意
```

:::tip[关键价值]
brainstorming 在这里做了 3 件人工容易漏的事：
1. **追问命名**：仓库名直接影响 URL，改一个字符要改 6 处配置
2. **安全检查**：推送前自动扫描密钥泄露
3. **方案显式化**：4 步清清楚楚，没有隐式假设
:::

### 阶段 2：技术执行 — ECC 工具链

设计方案确认后，进入实施。这里 ECC 和 Superpowers 开始并行发挥作用。

**配置更新（Superpowers 派发 + ECC 审查）：**

```bash
# Superpowers 的 dispatching-parallel-agents 并行处理多个独立任务：
# 任务 A：更新 docusaurus.config.ts（6 处占位符替换）
# 任务 B：重写 README.md（中英双语）
# 任务 C：更新 package.json（项目名）
```

每个任务完成后，ECC 的 `code-reviewer` agent 自动审查变更：

```
实际审查发现：
- docusaurus.config.ts:6 → url 从 your-github-username 更新为 michea11 ✅
- README.md → 新增中英双语完整文档 ✅
- package.json:2 → name 同步更新 ✅
- 无安全风险，无遗漏占位符
```

**Git 操作与部署：**

```bash
# 推送遇到 SSH 认证问题 → ECC 诊断
git push → Host key verification failed

# ECC 诊断链路：
1. 检查 known_hosts → 不存在
2. 创建 .ssh/known_hosts + ssh-keyscan github.com
3. 测试 ssh -T git@github.com → Permission denied (publickey)
4. 定位根因：未配置 SSH key → 引导用户配置
5. 配置完成后推送成功
```

**部署工作流更新：**

用户选择了 GitHub Actions 部署方式，原有 `peaceiris/actions-gh-pages` 不兼容。需要更新为官方 actions：

```yaml
# 更新前：第三方 action，依赖 gh-pages 分支
- uses: peaceiris/actions-gh-pages@v3
  with:
    github_token: ${{ secrets.GITHUB_TOKEN }}
    publish_dir: ./build

# 更新后：GitHub 官方 actions，原生 Pages 支持
- uses: actions/configure-pages@v4
- uses: actions/upload-pages-artifact@v3
  with:
    path: ./build
- uses: actions/deploy-pages@v4
```

:::info[ECC 在此阶段的价值]
- code-reviewer 捕获了配置遗漏
- 系统化的 SSH 诊断链路节省了人工排查时间
- 工作流更新一步到位，部署一次成功
:::

### 阶段 3：质量保障 — verification + review

部署成功后，进入维护优化阶段。

**项目健康检查：**

用 Superpowers `verification-before-completion` 做全面检查：

```
检查清单：
☑ 站点可访问（HTTP 200）
☑ LICENSE 文件存在
☑ .gitignore 覆盖本地配置目录
☑ Git 身份配置正确
☒ CONTRIBUTING.md 缺失
☒ .claude/settings.local.json 被 git 追踪
```

**修复循环：**

每发现一个问题，ECC 执行 → Superpowers 验证：

```
问题 1: 缺少 LICENSE 和 CONTRIBUTING.md
  → ECC 创建 MIT LICENSE + 中英双语 CONTRIBUTING.md
  → Superpowers 验证：文件存在，内容完整 ✅

问题 2: .claude/ 目录被 git 追踪
  → ECC 更新 .gitignore + git rm --cached
  → Superpowers 验证：git status 干净 ✅

问题 3: Git 身份显示 yw@ywdeMacBook-Pro.local
  → 引导用户 git config --global user.name/email
  → Superpowers 验证：michea11 / 873130539@qq.com ✅
```

### 阶段 4：收尾 — finishing

```
finishing-a-development-branch 流程：
1. 确认所有变更已提交推送 ✅
2. 确认 GitHub Actions 部署成功 ✅
3. 确认站点可访问 ✅
4. 输出项目交付清单
```

---

## 协同要点

### 1. 流程归 Superpowers，执行归 ECC

不要混淆两者。Superpowers 告诉你"现在该做什么"，ECC 帮你"做这件事"。

```
❌ 错误：用 brainstorming 直接写代码
✅ 正确：brainstorming 产出方案 → writing-plans 拆任务 → ECC agents 执行
```

### 2. 安全扫描要趁早

在 brainstorming 阶段就做安全检查（如 `.claude/` 目录扫描），而不是等到推送前。本案例中，brainstorming 主动检查了敏感信息，避免了将本地配置推上 GitHub。

### 3. 每次变更后验证

不是"全部做完再检查"，而是"改一点验证一点"：

```
改配置 → 构建验证 → 改 README → 审查验证 → 改工作流 → 部署验证
```

### 4. 利用并行能力

独立任务用 `dispatching-parallel-agents` 并行执行：

```
更新 docusaurus.config.ts ──┐
重写 README.md         ────┼── 并行 → 统一提交
更新 package.json       ────┘
```

---

## 场景速查

| 你要做什么 | 启动命令/技能 | 说明 |
|-----------|-------------|------|
| 新项目从零开始 | `brainstorming` | 澄清需求 → 设计方案 |
| 实现具体功能 | `writing-plans` → ECC `/tdd` | 计划 → TDD → 审查 |
| 修复 Bug | ECC `/tdd` + `systematic-debugging` | 先定位根因再修复 |
| 代码审查 | `requesting-code-review` | 调用 ECC code-reviewer |
| 开源准备 | `brainstorming` + 安全检查 | 确认无密钥泄露 |
| 部署上线 | ECC CI/CD 配置 + `verification` | 构建 → 部署 → 验证 |
| 重构优化 | `brainstorming` → ECC `/refactor-clean` | 先设计再动手 |

---

## 本项目完整时间线

| 阶段 | 使用的工具 | 耗时 | 产出 |
|------|-----------|------|------|
| 需求澄清 | Superpowers brainstorming | 10 分钟 | 开源方案 + 命名决策 |
| 配置更新 | ECC Edit + Superpowers 并行派发 | 5 分钟 | 6 处配置 + README |
| SSH 调试 | ECC 诊断链路 | 5 分钟 | 推送成功 |
| 部署配置 | ECC 工作流更新 | 3 分钟 | 自动部署上线 |
| 质量检查 | Superpowers verification | 5 分钟 | 4 个问题发现并修复 |
| 收尾交付 | Superpowers finishing | 2 分钟 | 项目清单 |
| **合计** | | **~30 分钟** | 从零到开源上线 |

---

## 接下来可以学什么

- [Superpowers 核心流程链](workflow-chain) — 理解 15 个 skill 的完整编排
- [ECC 核心工作流](../ecc/core-workflow) — plan → tdd → review → build 详解
- [ECC 实战示例](../ecc/examples) — 代码级开发案例
- [插件开发教程](../dev-guide/create-skill) — 创建自己的 Skill
