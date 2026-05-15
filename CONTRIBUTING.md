# 贡献指南 / Contributing Guide

感谢你对本项目的关注！

## 如何贡献

### 报告问题

发现错误或有建议？请提交 [Issue](https://github.com/michea11/claude-plugin-guide/issues)，请尽量包含：

- 问题描述或改进建议
- 相关的页面链接或截图
- 期望的结果

### 提交文档修改

1. Fork 本仓库
2. 创建新分支：`git checkout -b fix/your-topic`
3. 修改 `docs/` 目录下的 Markdown 文件
4. 本地验证：`npm run build` 确保无报错
5. 提交 PR 到 `main` 分支

### 本地开发

```bash
npm install
npm run start     # http://localhost:3000/claude-plugin-guide/
npm run build     # 构建检查
```

### 内容规范

- 文档使用中文撰写，PR 标题和描述可使用中文或英文
- 保持与其他页面一致的语气和格式
- 术语参考 `docs/appendix/glossary.md`

---

# Contributing Guide

Thank you for your interest in contributing!

## How to Contribute

### Reporting Issues

Found an error or have a suggestion? Please open an [Issue](https://github.com/michea11/claude-plugin-guide/issues) with:

- Description of the problem or improvement
- Relevant page links or screenshots
- Expected outcome

### Submitting Changes

1. Fork this repository
2. Create a branch: `git checkout -b fix/your-topic`
3. Edit Markdown files in `docs/`
4. Verify locally: `npm run build`
5. Open a PR against `main`

### Local Development

```bash
npm install
npm run start     # http://localhost:3000/claude-plugin-guide/
npm run build     # Build check
```

### Content Guidelines

- Documentation is in Chinese; PR titles and descriptions can be in Chinese or English
- Maintain consistent tone and formatting with existing pages
- Check `docs/appendix/glossary.md` for terminology reference
