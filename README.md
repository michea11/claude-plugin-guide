# Claude Code 插件学习指南

一本从入门到精通的 Claude Code 插件生态中文教程，涵盖插件核心概念、ECC 全套组件详解、Superpowers 开发工作流，以及插件开发实战教程。

[![Deploy to GitHub Pages](https://github.com/michea11/claude-plugin-guide/actions/workflows/deploy.yml/badge.svg)](https://github.com/michea11/claude-plugin-guide/actions/workflows/deploy.yml)

## 目录

- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [本地开发](#本地开发)
- [构建与部署](#构建与部署)
- [贡献指南](#贡献指南)

### 快速开始

> **前置要求：** Node.js >= 20

```bash
git clone https://github.com/michea11/claude-plugin-guide.git
cd claude-plugin-guide
npm install
npm run start
```

浏览器访问 `http://localhost:3000/claude-plugin-guide/` 即可查看。

### 项目结构

```
claude-plugin-guide/
├── docs/                  # Markdown 文档（核心内容）
│   ├── intro.md           # 首页
│   ├── quickstart/        # 快速开始
│   ├── concepts/          # 插件核心概念
│   ├── ecc/               # ECC 详解
│   ├── superpowers/       # Superpowers 详解
│   ├── dev-guide/         # 插件开发教程
│   └── appendix/          # 附录（术语表、FAQ）
├── src/                   # 自定义页面与组件
├── static/                # 静态资源（图片、favicon 等）
├── docusaurus.config.ts   # Docusaurus 配置
├── sidebars.ts            # 侧边栏配置
└── .github/workflows/     # GitHub Actions 部署配置
```

### 本地开发

```bash
npm run start     # 启动开发服务器（支持热更新）
npm run build     # 生产构建
npm run serve     # 本地预览构建产物
npm run typecheck # TypeScript 类型检查
```

### 构建与部署

本项目使用 GitHub Actions 自动部署到 GitHub Pages。推送代码到 `main` 分支即可触发自动部署。

站点地址：[https://michea11.github.io/claude-plugin-guide/](https://michea11.github.io/claude-plugin-guide/)

### 贡献指南

欢迎提交 Issue 和 Pull Request！

- 文档内容位于 `docs/` 目录，为 Markdown 格式
- 提交前请运行 `npm run build` 确保构建通过
- 中文内容为主，建议附上英文摘要说明

---

# Claude Code Plugin Guide (English)

A comprehensive Chinese guide to the Claude Code plugin ecosystem — from beginner to advanced. Covers core plugin concepts (Skills, Agents, Commands, Hooks, MCP), the complete ECC (Everything Claude Code) suite, Superpowers development workflows, and hands-on plugin development tutorials. Built with [Docusaurus](https://docusaurus.io/).

[![Deploy to GitHub Pages](https://github.com/michea11/claude-plugin-guide/actions/workflows/deploy.yml/badge.svg)](https://github.com/michea11/claude-plugin-guide/actions/workflows/deploy.yml)

## Contents

- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Build & Deploy](#build--deploy)
- [Contributing](#contributing)

### Quick Start

> **Prerequisites:** Node.js >= 20

```bash
git clone https://github.com/michea11/claude-plugin-guide.git
cd claude-plugin-guide
npm install
npm run start
```

Open `http://localhost:3000/claude-plugin-guide/` in your browser.

### Project Structure

```
claude-plugin-guide/
├── docs/                  # Markdown docs (core content)
│   ├── intro.md           # Home page
│   ├── quickstart/        # Getting started
│   ├── concepts/          # Plugin core concepts
│   ├── ecc/               # ECC deep dive
│   ├── superpowers/       # Superpowers deep dive
│   ├── dev-guide/         # Plugin dev tutorials
│   └── appendix/          # Glossary, FAQ
├── src/                   # Custom pages & components
├── static/                # Static assets (images, favicon)
├── docusaurus.config.ts   # Docusaurus config
├── sidebars.ts            # Sidebar config
└── .github/workflows/     # GitHub Actions deploy config
```

### Local Development

```bash
npm run start     # Dev server with hot reload
npm run build     # Production build
npm run serve     # Preview production build locally
npm run typecheck # TypeScript type check
```

### Build & Deploy

This site is automatically deployed to GitHub Pages via GitHub Actions on every push to `main`.

Live site: [https://michea11.github.io/claude-plugin-guide/](https://michea11.github.io/claude-plugin-guide/)

### Contributing

Issues and pull requests are welcome!

- Documentation lives in `docs/` as Markdown files
- Run `npm run build` before submitting to ensure no broken links
- Content is primarily in Chinese; English summaries are appreciated alongside contributions
