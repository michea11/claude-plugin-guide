# using-git-worktrees

**触发时机**：开始在隔离环境中进行功能开发。

## 为什么需要

- 不影响 main 分支
- 可同时进行多个独立功能
- 出错可随时丢弃重来
- 完成后选择合并/PR/保留/丢弃

## 流程

1. 从 main 创建 git worktree
2. 在新 worktree 中开发
3. 完成后决定如何整合
