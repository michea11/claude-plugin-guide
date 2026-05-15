# 打包与发布

## 准备清单

1. `.claude-plugin/plugin.json` 填写完整
2. 所有 skill/agent/command 经过测试
3. LICENSE 文件
4. README.md 说明文档

## plugin.json 检查

```json
{
  "name": "my-plugin",
  "version": "1.0.0",
  "description": "...",
  "author": { "name": "..." },
  "license": "MIT",
  "keywords": ["keyword"],
  "repository": "https://github.com/user/repo"
}
```

## 发布流程

1. Push 到 GitHub 仓库
2. 创建 marketplace 入口（`.claude-plugin/marketplace.json`）
3. 注册 marketplace：`/plugin marketplace add <你的仓库>`
4. 用户安装：`/plugin install <name>@<marketplace>`

## Marketplace 清单

```json
{
  "name": "my-marketplace",
  "plugins": [
    {
      "name": "my-plugin",
      "source": { "source": "github", "repo": "user/repo" },
      "description": "..."
    }
  ]
}
```
