# 常见问题

## 安装相关

**Q: 安装插件后没有看到新的命令？**
重启 Claude Code 会话。部分插件需要重启才能加载。

**Q: 可以同时安装 ECC 和 Superpowers 吗？**
可以，两者互补。建议先装 Superpowers 建立工作流习惯，再装 ECC 补充工具箱。

**Q: 插件安装在哪里？**
`~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/`

## 使用相关

**Q: Skill 为什么没有自动触发？**
检查：1) description 描述的场景是否匹配当前任务；2) 部分 skill 需要项目有特定配置文件。

**Q: 如何知道哪些 skill 可用？**
运行 `/help` 查看已加载的 skill 列表。

**Q: 命令和 skill 有什么区别？**
命令手动调用（`/xxx`），skill AI 自动判断触发。

**Q: ECC 的 rules 没有生效？**
Rules 需手动复制到 `~/.claude/rules/ecc/` 或项目的 `.claude/rules/` 目录。

## 开发相关

**Q: 如何创建自己的插件？**
参考[插件开发教程](../dev-guide/create-skill)。最小可行插件只需一个 SKILL.md。

**Q: Skill 的 description 怎么写？**
清楚描述"什么时候该用这个 skill"。比 body 内容更重要。

**Q: 可以发布私有插件吗？**
可以。在私有 GitHub 仓库托管，通过 git 来源注册 marketplace。
