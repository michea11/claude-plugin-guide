# ECC Commands 速查

ECC 提供 75 个 slash 命令，按功能分为 11 类。

## Core Workflow (6)

| 命令 | 功能 |
|------|------|
| `/plan` | 需求分析和实现规划 |
| `/tdd` | 测试驱动开发流程 |
| `/code-review` | 代码审查 |
| `/build-fix` | 修复构建错误 |
| `/verify` | 验证实现正确性 |
| `/quality-gate` | 运行质量门禁 |

## Testing (7)

| 命令 | 功能 |
|------|------|
| `/e2e` | 端到端测试 |
| `/test-coverage` | 分析测试覆盖率 |
| `/go-test` | Go TDD 测试 |
| `/kotlin-test` | Kotlin TDD 测试 |
| `/rust-test` | Rust TDD 测试 |
| `/cpp-test` | C++ TDD 测试 |
| `/flutter-test` | Flutter 测试 |

## Code Review (5)

| 命令 | 功能 |
|------|------|
| `/python-review` | Python 专项审查 |
| `/go-review` | Go 专项审查 |
| `/kotlin-review` | Kotlin 专项审查 |
| `/rust-review` | Rust 专项审查 |
| `/cpp-review` | C++ 专项审查 |

## Build Fixers (6)

| 命令 | 功能 |
|------|------|
| `/go-build` | Go 构建修复 |
| `/kotlin-build` | Kotlin 构建修复 |
| `/rust-build` | Rust 构建修复 |
| `/cpp-build` | C++ 构建修复 |
| `/gradle-build` | Gradle 构建修复 |
| `/flutter-build` | Flutter 构建修复 |

## Planning (8)

| 命令 | 功能 |
|------|------|
| `/multi-plan` | 多 agent 并行规划 |
| `/multi-workflow` | 多 agent 并行开发 |
| `/multi-backend` | 后端专项工作流 |
| `/multi-frontend` | 前端专项工作流 |
| `/multi-execute` | 多 agent 并行执行 |
| `/plan-orchestrate` | 编排执行计划 |
| `/prp-plan` | PRP 方式规划 |
| `/prp-implement` | PRP 方式实现 |

## Session Management (6)

| 命令 | 功能 |
|------|------|
| `/save-session` | 保存会话状态 |
| `/resume-session` | 恢复之前的会话 |
| `/sessions` | 管理会话历史 |
| `/checkpoint` | 创建检查点 |
| `/aside` | 快速旁路问题 |
| `/context-budget` | 审计上下文使用 |

## Learning & Evolution (9)

| 命令 | 功能 |
|------|------|
| `/learn` | 从会话中提取模式 |
| `/learn-eval` | 评估学习质量 |
| `/evolve` | 将模式进化为 skill |
| `/promote` | 提升项目 scope 到全局 |
| `/instinct-status` | 查看已学本能 |
| `/instinct-export` | 导出本能 |
| `/instinct-import` | 导入本能 |
| `/skill-create` | 从 git 历史创建 skill |
| `/skill-health` | Skill 健康仪表盘 |

## Refactoring (2)

| 命令 | 功能 |
|------|------|
| `/refactor-clean` | 安全删除死代码 |
| `/prompt-optimize` | 优化 prompt |

## Docs (3)

| 命令 | 功能 |
|------|------|
| `/docs` | 查询库/框架文档 |
| `/update-docs` | 同步文档 |
| `/update-codemaps` | 生成架构 codemap |

## Automation (3)

| 命令 | 功能 |
|------|------|
| `/loop-start` | 启动自主循环 |
| `/loop-status` | 查看循环状态 |
| `/pm2` | PM2 进程管理 |

## Infrastructure (5)

| 命令 | 功能 |
|------|------|
| `/projects` | 列出已知项目 |
| `/harness-audit` | 审查 harness 配置 |
| `/eval` | 运行评估 |
| `/model-route` | 推荐最佳模型 |
| `/project-init` | 初始化新项目 ECC |

## 使用提示

- ECC 命令大多会派发专门的 agent 执行
- 语言专用命令（如 `/go-build`）需要对应语言的代码库
- 完整命令列表运行 `ls commands/` 查看
