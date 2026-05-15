# ECC 实战示例

以一个真实场景展示 ECC 完整工作流。

## 场景：给博客项目添加搜索功能

### 1. Plan — 需求规划

```
/plan 给博客添加全文搜索，支持按标题和内容搜索，结果分页显示
```

Planner agent 输出：
- 技术方案：SQLite FTS5 全文索引
- 涉及文件：models.py, views.py, search.html, urls.py
- 实现计划：数据库迁移 → 索引构建 → API → 前端

### 2. TDD — 先写测试

```
/tdd search
```

tdd-guide agent 的流程：
1. **RED**：写测试 `test_search_by_title`、`test_search_by_content`、`test_pagination`
2. 运行测试 → 全部失败（还没有实现）
3. **GREEN**：写最小实现让测试通过
4. 运行测试 → 全部通过
5. **REFACTOR**：提取 `SearchQuery` 类，优化 SQL

### 3. Code Review — 审查代码

```
/code-review
```

Code reviewer 的反馈：
- SQL 查询需要参数化，防注入 ✓
- 分页逻辑可提取为通用工具
- 搜索输入需要长度限制
- 建议：添加搜索 debounce

### 4. Build Fix — 确保构建

```
/build-fix
```

Build 通过，无需修复。

### 完整时间线

| 步骤 | 命令 | 耗时 |
|------|------|------|
| 规划 | `/plan` | 2 分钟 |
| TDD | `/tdd search` | 15 分钟 |
| 审查 | `/code-review` | 1 分钟 |
| 构建 | `/build-fix` | 30 秒 |

使用 ECC，从需求到交付的完整功能只需约 20 分钟，且代码有测试覆盖和安全保障。

## 进阶场景

### 多模块并行开发

```
/multi-workflow
```

同时开发搜索功能和评论功能，ECC 自动分配 agent 并行处理。

### 安全审查

```
/security-scan
```

AgentShield 扫描 1282 测试 + 102 规则，检测安全漏洞。

### 持续学习

```
/learn
```

ECC 从当前会话提取编码模式，保存为"本能"，跨会话复用。
