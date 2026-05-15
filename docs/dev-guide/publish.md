# 打包与发布

## 准备清单

- [ ] `.claude-plugin/plugin.json` 填写完整
- [ ] 所有 skill/agent/command 经过测试
- [ ] LICENSE 文件
- [ ] README.md 说明文档

## plugin.json 模板

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "...",
  "author": { "name": "作者", "email": "email@example.com" },
  "license": "MIT",
  "keywords": ["claude-code", "skill"],
  "repository": "https://github.com/user/repo"
}
```

## 发布步骤

1. Push 到 GitHub 仓库
2. 创建 marketplace 入口文件 `.claude-plugin/marketplace.json`
3. 用户注册你的市场：`/plugin marketplace add <你的仓库>`
4. 用户安装：`/plugin install <name>@<marketplace>`

:::tip[测试先行]
在公开发布前，先用 `/plugin install` 从本地目录安装测试一次，确认所有组件正常工作。
:::
