# executing-plans

**触发时机**：有写好的实现计划，需要在独立 session 中执行。

## vs subagent-driven-development

| | executing-plans | subagent-driven |
|------|---------|------|
| Session | 独立/并行 | 同一 session |
| Context | 需切换 | 保持 |
| 适合 | 大规模实现 | 快速迭代 |

## 使用场景

- 计划太大，适合在独立 session 执行
- 需要多 session 并行推进
- 当前 session 上下文已满
