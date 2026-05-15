# 常见问题

## 安装

**Q: 安装插件后没有看到新命令？**
重启 Claude Code 会话。部分插件需要重启才能加载。

**Q: 可以同时安装 ECC 和 Superpowers 吗？**
可以，两者互补。建议先装 Superpowers 建立工作流习惯，再装 ECC 补充工具箱。

:::tip[推荐安装顺序]
1. Superpowers（建立流程纪律）→ 2. ECC（补充全栈工具）。
::

**Q: 插件安装在哪里？**
`~/.claude/plugins/cache/<marketplace>/<plugin>/<version>/`

## 使用

**Q: Skill 为什么没有自动触发？**
检查：1) description 描述的场景是否匹配当前任务；2) 部分 skill 需要项目有特定配置文件。

**Q: 如何知道哪些 skill 可用？**
运行 `/help` 查看已加载的 skill 列表。或者在插件目录直接看 `skills/` 下的文件。

**Q: Command 和 Skill 有什么区别？**
命令手动调用（`/xxx`），skill AI 自动判断触发。前者你叫 AI 做，后者 AI 自己决定做。

**Q: ECC 的 rules 没有生效？**
Rules 需手动复制到 `~/.claude/rules/ecc/` 或项目的 `.claude/rules/` 目录。

## 开发

**Q: 如何创建自己的插件？**
参考[插件开发教程](../dev-guide/create-skill)。最小可行插件只需一个 SKILL.md。

**Q: Skill 的 description 怎么写？**
写具体场景，不写模糊功能。"When the user wants to add authentication to a web app" 好过 "For authentication"。

**Q: 可以发布私有插件吗？**
可以。在私有 GitHub 仓库托管，通过 git 来源注册 marketplace。
