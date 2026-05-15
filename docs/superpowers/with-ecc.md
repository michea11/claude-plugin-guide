# ECC + Superpowers 协同实战

两个插件互补：**Superpowers 管流程（怎么做），ECC 管执行（用什么做）**。本文通过一个真实开发场景，展示两者如何配合作战。

## 分工总览

| 环节 | Superpowers 负责 | ECC 负责 |
|------|------|------|
| 需求澄清 | brainstorming（苏格拉底式提问） | `/plan`（技术可行性分析） |
| 方案设计 | brainstorming → spec 文档 | architect agent（架构审阅） |
| 任务拆解 | writing-plans（2-5 分钟粒度） | — |
| 编码执行 | subagent-driven-development | `/tdd` + `/code-review` |
| 构建修复 | — | `/build-fix`（语言专用构建修复） |
| 质量保障 | verification-before-completion | `/verify` + `/security-scan` |
| 审查合并 | requesting-code-review | code-reviewer agent |
| 发布收尾 | finishing-a-development-branch | CI/CD 工作流 |

---

## 实战案例：开发 Docusaurus 自定义组件

### 场景

在一个 Docusaurus 文档站中，需要开发一个 **插件命令速查表组件**，支持搜索过滤和分类展示。用户输入命令名即可快速定位。

技术栈：Docusaurus 3 + React 19 + TypeScript

### 阶段 1：需求澄清 — brainstorming + /plan

**Step 1：Superpowers brainstorming 澄清需求**

```
用户: 我要给文档站加一个命令速查组件，能搜索过滤

brainstorming: 先看看现有项目结构...
（检查 src/components/ 目录、docusaurus.config.ts）

brainstorming: 这个组件的数据从哪来？是写死的静态数据还是动态加载？
用户: 静态 JSON 就行

brainstorming: 搜索行为是什么样的？输入即过滤，还是按回车搜索？
用户: 输入即过滤

brainstorming: 需要哪些分类？全部分类、Skill、Agent、Command、Hook、MCP？
用户: 对，这 5 类

brainstorming: 方案 — 一个 React 组件 CommandTable，接收 JSON 数据，
支持实时过滤 + 分类标签切换。保存为 spec？
用户: 同意
```

:::tip[为什么 brainstorming 先于 /plan]
brainstorming 用对话澄清"要做什么"，产出的是需求文档。`/plan` 分析"技术上怎么做"，产出的是实现计划。两者顺序不能颠倒 — 需求没搞清楚就做技术规划，大概率要返工。
:::

**Step 2：ECC `/plan` 分析技术可行性**

brainstorming 完成后，调用 ECC 的 `/plan` 命令，让 planner agent 评估技术方案：

```bash
/plan 在 Docusaurus 项目中开发 CommandTable 组件：
- React 19 + TypeScript
- 接收 JSON 数据，支持实时文本过滤
- 5 个分类标签切换（全部/Skill/Agent/Command/Hook/MCP）
- 响应式布局，移动端友好
```

Planner agent 输出：

```markdown
## 实现计划：CommandTable 组件

### 阶段 1：定义类型和数据结构
- Command 接口：name, description, category, plugin
- 示例数据：5 条命令覆盖 5 个分类

### 阶段 2：编写测试（TDD）
- 渲染测试：所有数据正确显示
- 过滤测试：文本搜索筛选正确
- 分类测试：标签切换筛选正确
- 边界测试：空数据、无匹配结果

### 阶段 3：实现组件
- CommandTable 主组件
- 搜索输入框 + 分类标签栏
- 过滤逻辑（文本 + 分类联合过滤）

### 风险
- MEDIUM：Docusaurus 的 BrowserOnly 包裹可能影响 SSR
- LOW：大数据量下的搜索性能

等待确认：是否按此计划进行？
```

---

### 阶段 2：任务拆解 — writing-plans

Superpowers `writing-plans` 把 `/plan` 的输出拆成 2-5 分钟粒度的独立任务：

```
任务 1: 定义 Command 类型 + 创建示例数据      [2 分钟]
任务 2: 编写 4 个测试用例（RED 阶段）         [5 分钟]
任务 3: 实现 CommandTable 组件（GREEN 阶段）  [8 分钟]
任务 4: 重构优化（REFACTOR 阶段）             [3 分钟]
任务 5: 集成到 Docusaurus 页面                [3 分钟]
```

---

### 阶段 3：编码执行 — ECC `/tdd` + `/code-review`

这是 ECC 发挥核心价值的阶段。每个任务都走 `RED → GREEN → REFACTOR → REVIEW` 循环。

**任务 1-2：定义类型 + 写测试（RED）**

`/tdd` 命令启动 tdd-guide agent，强制测试先行：

```bash
/tdd 按计划实现 CommandTable 组件，先写测试
```

```typescript
// src/components/CommandTable/types.ts
export interface Command {
  name: string
  description: string
  category: 'skill' | 'agent' | 'command' | 'hook' | 'mcp'
  plugin: string
}

// src/components/CommandTable/__tests__/data.ts
export const testData: Command[] = [
  { name: '/tdd', description: '测试驱动开发', category: 'command', plugin: 'ecc' },
  { name: '/code-review', description: '代码审查', category: 'command', plugin: 'ecc' },
  { name: '/build-fix', description: '构建修复', category: 'command', plugin: 'ecc' },
  { name: 'brainstorming', description: '需求澄清', category: 'skill', plugin: 'superpowers' },
  { name: 'code-reviewer', description: '代码审查专家', category: 'agent', plugin: 'ecc' },
]
```

```typescript
// src/components/CommandTable/__tests__/CommandTable.test.tsx
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CommandTable } from '../CommandTable'
import { testData } from './data'

describe('CommandTable', () => {
  it('渲染所有命令数据', () => {
    render(<CommandTable data={testData} />)

    expect(screen.getByText('/tdd')).toBeInTheDocument()
    expect(screen.getByText('/code-review')).toBeInTheDocument()
    expect(screen.getByText('brainstorming')).toBeInTheDocument()
  })

  it('文本搜索过滤命令', async () => {
    render(<CommandTable data={testData} />)

    await userEvent.type(screen.getByPlaceholderText('搜索命令...'), 'tdd')

    expect(screen.getByText('/tdd')).toBeInTheDocument()
    expect(screen.queryByText('/code-review')).not.toBeInTheDocument()
    expect(screen.queryByText('brainstorming')).not.toBeInTheDocument()
  })

  it('分类标签切换过滤', async () => {
    render(<CommandTable data={testData} />)

    await userEvent.click(screen.getByText('Skill'))

    expect(screen.getByText('brainstorming')).toBeInTheDocument()
    expect(screen.queryByText('/tdd')).not.toBeInTheDocument()
    expect(screen.queryByText('code-reviewer')).not.toBeInTheDocument()
  })

  it('空数据时显示提示', () => {
    render(<CommandTable data={[]} />)

    expect(screen.getByText('没有匹配的命令')).toBeInTheDocument()
  })
})
```

运行测试确认 RED：

```bash
npm test -- CommandTable
# FAIL  src/components/CommandTable/__tests__/CommandTable.test.tsx
#   CommandTable
#     ✕ 渲染所有命令数据
#     ✕ 文本搜索过滤命令
#     ✕ 分类标签切换过滤
#     ✕ 空数据时显示提示
```

:::warning[RED 是必须的]
如果跳过 RED 直接写实现，测试只能"验证已有代码"，无法验证行为是否正确。tdd-guide agent 会阻止跳过此步骤。
:::

**任务 3：最小实现（GREEN）**

```typescript
// src/components/CommandTable/CommandTable.tsx
import { useState, useMemo } from 'react'
import type { Command } from './types'

const CATEGORIES = ['全部', 'Skill', 'Agent', 'Command', 'Hook', 'MCP'] as const

interface Props {
  data: Command[]
}

export function CommandTable({ data }: Props) {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState<string>('全部')

  const filtered = useMemo(() => {
    return data.filter((cmd) => {
      const matchText =
        cmd.name.toLowerCase().includes(query.toLowerCase()) ||
        cmd.description.toLowerCase().includes(query.toLowerCase())
      const matchCategory =
        category === '全部' || cmd.category === category.toLowerCase()
      return matchText && matchCategory
    })
  }, [data, query, category])

  if (filtered.length === 0) {
    return (
      <div>
        <input
          placeholder="搜索命令..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <div className="categories">
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setCategory(cat)}>
              {cat}
            </button>
          ))}
        </div>
        <p>没有匹配的命令</p>
      </div>
    )
  }

  return (
    <div>
      <input
        placeholder="搜索命令..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="categories">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            style={{ fontWeight: category === cat ? 'bold' : 'normal' }}
          >
            {cat}
          </button>
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>名称</th>
            <th>描述</th>
            <th>分类</th>
            <th>插件</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((cmd) => (
            <tr key={cmd.name}>
              <td><code>{cmd.name}</code></td>
              <td>{cmd.description}</td>
              <td>{cmd.category}</td>
              <td>{cmd.plugin}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

运行测试确认 GREEN：

```bash
npm test -- CommandTable
# PASS  src/components/CommandTable/__tests__/CommandTable.test.tsx
#   CommandTable
#     ✓ 渲染所有命令数据
#     ✓ 文本搜索过滤命令
#     ✓ 分类标签切换过滤
#     ✓ 空数据时显示提示
```

**任务 4：重构（REFACTOR）**

测试全绿后，安全重构。ECC 的 code-reviewer agent 审查代码：

```bash
/code-review
```

```
Code Review Report:
- ⚠️ SearchInput 和 CategoryBar 逻辑内嵌在主组件中，建议提取为独立组件
- ⚠️ 分类高亮样式使用内联 style，建议改用 CSS 类名
- ✅ 过滤逻辑使用 useMemo 优化
- ✅ 类型定义完整
```

根据审查意见重构：

```typescript
// 重构后提取 CategoryBar 组件
function CategoryBar({
  current,
  onSelect,
}: {
  current: string
  onSelect: (cat: string) => void
}) {
  return (
    <div className="command-table__categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat}
          className={`command-table__category ${current === cat ? 'is-active' : ''}`}
          onClick={() => onSelect(cat)}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
```

**任务 5：集成到页面**

如果集成时遇到构建错误，ECC 的 `/build-fix` 接管：

```bash
# 假设构建报错
npm run build
# Error: Module not found: Can't resolve './CommandTable'

# 启动 /build-fix
/build-fix
# build-error-resolver agent 诊断：
# 1. 检查导入路径 → 路径错误
# 2. 修正导入 → ./CommandTable/CommandTable
# 3. 重新构建 → 通过
```

---

### 阶段 4：质量保障 — verification + review

Superpowers `verification-before-completion` 做最终检查：

```
检查清单：
☑ 所有测试通过（4/4）
☑ 覆盖率 92%（> 80%）
☑ 构建成功
☒ 缺少组件使用文档
```

```bash
# 补充文档后，再次验证
/verify
# VERIFICATION: PASS ✅
```

---

## 本例中 ECC 的具体作用

回顾整个流程，ECC 在以下环节直接参与执行：

| 步骤 | ECC 命令 | 具体做了什么 |
|------|---------|------------|
| 技术分析 | `/plan` | planner agent 评估可行性 + 识别 SSR 风险 |
| 测试驱动 | `/tdd` | tdd-guide agent 强制执行 RED→GREEN→REFACTOR |
| 代码审查 | `/code-review` | code-reviewer 发现组件耦合和内联样式问题 |
| 构建修复 | `/build-fix` | build-error-resolver 诊断并修复导入路径错误 |
| 全面验证 | `/verify` | 构建 + 类型 + 测试 + 覆盖率的全量检查 |

Superpowers 负责**编排**这些 ECC 命令的调用时机，ECC 负责**执行**每个命令的具体工作。

---

## 协同要点

### 1. brainstorming 在前，/plan 在后

```
❌ 错误：拿到需求直接 /plan，技术方案基于不完整的需求
✅ 正确：brainstorming 产出 spec → /plan 基于 spec 评估可行性
```

### 2. /tdd 不做架构决策，brainstorming 不写代码

```
brainstorming → writing-plans：回答"做什么、怎么做"
/plan → /tdd → /code-review：回答"用什么技术、写什么代码"
```

### 3. 改一点验证一点

```
/tdd 修改代码 → /code-review 审查 → /build-fix（如有问题）→ /verify 验证
```

不是"全部做完再检查"，而是每步都验证。

### 4. 利用并行能力

独立任务用 `dispatching-parallel-agents` 并行执行：

```
任务 A: 创建 types.ts    ──┐
任务 B: 创建测试数据      ──┼── 并行 → 统一验证
任务 C: 创建测试用例      ──┘
```

---

## 场景速查

| 你要做什么 | 启动方式 | 说明 |
|-----------|---------|------|
| 新功能从零开始 | `brainstorming` → `/plan` → `/tdd` | 全流程 |
| 修复 Bug | `/tdd` + `systematic-debugging` | 先写复现测试 |
| 代码审查 | `/code-review` | 自动审查 |
| 构建报错 | `/build-fix` | 自动诊断修复 |
| 安全审计 | `/security-scan` | AgentShield 扫描 |
| 开源发布 | `brainstorming` + `/verify` | 防密钥泄露 |
| 重构优化 | `brainstorming` → `/refactor-clean` | 先设计再动手 |

---

## 接下来可以学什么

- [Superpowers 核心流程链](workflow-chain) — 理解 15 个 skill 的完整编排
- [ECC 核心工作流](../ecc/core-workflow) — plan → tdd → review → build 详解
- [ECC 实战示例](../ecc/examples) — 代码级开发案例
- [/tdd 详解](../ecc/skills/tdd-workflow) — TDD 工作流的每个步骤
