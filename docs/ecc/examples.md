# ECC 实战示例

以一个真实场景展示 ECC 完整工作流。

## 场景：给博客添加搜索功能

### 1. Plan

```bash
/plan 给博客添加全文搜索，支持标题和内容搜索，分页显示结果
```

:::tip[写好需求]
需求越具体，规划越准确。"全文搜索+标题内容+分页"比"加个搜索"好 10 倍。
:::

Planner agent 输出：
- 技术方案：SQLite FTS5 全文索引
- 涉及文件：models.py, views.py, search.html, urls.py
- 实现步骤：迁移 → 索引 → API → 前端

### 2. TDD

```bash
/tdd search
```

```python
# RED — 测试先失败
def test_search_by_title():
    results = search("python tutorial")
    assert len(results) > 0
    assert all("python" in r.title.lower() for r in results)

# GREEN — 最小实现
def search(query):
    return Post.objects.filter(title__icontains=query)

# REFACTOR — SQLite FTS5
def search(query):
    return Post.objects.raw(
        "SELECT * FROM blog_post WHERE title MATCH %s",
        [query]
    )
```

### 3. Code Review

```bash
/code-review
```

Code reviewer 反馈：
- ✅ SQL 参数化查询（防注入）
- ⚠️ 搜索输入需要长度限制
- 💡 建议添加搜索 debounce

### 4. Build Fix

```bash
/build-fix
```

构建通过。如果有问题，build-error-resolver 会以最小 diff 修复。

## 完整时间线

| 步骤 | 命令 | 耗时 |
|------|------|------|
| 规划 | `/plan` | 2 分钟 |
| TDD | `/tdd search` | 15 分钟 |
| 审查 | `/code-review` | 1 分钟 |
| 构建 | `/build-fix` | 30 秒 |
| **合计** | | **~19 分钟** |

:::info[对比手工开发]
同样功能手工开发约需 1-2 小时（写代码 + 测试 + 审查）。ECC 把时间压缩到 ~20 分钟，且代码有测试覆盖和审查保障。
:::

## 进阶场景

### 多模块并行

```bash
/multi-workflow
搜索功能 + 评论功能 + 标签系统，三个 agent 并行推进。
```

### 安全审计

```bash
/security-scan
```

AgentShield 1282 测试 + 102 规则全面扫描。

### 持续学习

```bash
/learn
```

ECC 从当前会话提取编码模式，跨项目复用。

## 接下来可以学什么

- [ECC 命令速查](commands-reference) → 75 个命令详细用法
- [Skills 精选](skills-index) → 24 个最常用 skill
- [Superpowers 实战](../superpowers/workflow-chain) → 搭配使用
