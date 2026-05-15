# ECC 实战：从头开发一个功能

以一个真实项目为例，演示 ECC 完整开发流程。

## 场景：实现做市商流动性评分计算器

需求：根据交易量、买卖价差、活跃交易者数量和最后交易时间，计算 0-100 的流动性评分。

**技术栈**：TypeScript + Jest

---

## 步骤 1：Plan — 先规划，再写代码

```bash
/plan 实现一个做市商流动性评分计算器，根据交易量、买卖价差、活跃交易者数量和最后交易时间计算 0-100 的评分
```

:::tip[为什么要先 Plan？]
直接让 AI 写代码可能偏离需求。`/plan` 让 planner agent 先分析需求、识别风险、拆解步骤，你确认后再动手。
:::

**Planner 输出的实现计划：**

```markdown
## 实现计划：做市商流动性评分计算器

### 阶段 1：定义接口
- 创建 MarketData 接口定义输入数据
- 定义 calculateLiquidityScore 函数签名

### 阶段 2：编写测试
- 编写覆盖各种场景的单元测试
- 边界条件：零交易量、极端值
- 错误处理：缺失字段、无效类型

### 阶段 3：实现计算
- 实现加权评分算法
- 归一化到 0-100 范围

### 风险
- MEDIUM：评分算法可能需要调整权重
- LOW：边界条件处理

等待确认：是否按此计划进行？
```

确认后进入实现阶段。

---

## 步骤 2：TDD — 先写测试，再写实现

```bash
/tdd 按计划实现做市商流动性评分计算器
```

Tdd-guide agent 强制执行 RED → GREEN → REFACTOR。

### RED：先写失败的测试

```typescript
// lib/liquidity.ts — 先定义接口
export interface MarketData {
  totalVolume: number
  bidAskSpread: number
  activeTraders: number
  lastTradeTime: Date
}

export function calculateLiquidityScore(market: MarketData): number {
  throw new Error('Not implemented')
}
```

```typescript
// lib/liquidity.test.ts — 测试先行
import { calculateLiquidityScore } from './liquidity'

describe('calculateLiquidityScore', () => {
  it('高流动性市场应返回高分', () => {
    const market = {
      totalVolume: 100000,
      bidAskSpread: 0.01,
      activeTraders: 500,
      lastTradeTime: new Date()
    }

    const score = calculateLiquidityScore(market)

    expect(score).toBeGreaterThan(80)
    expect(score).toBeLessThanOrEqual(100)
  })

  it('低流动性市场应返回低分', () => {
    const market = {
      totalVolume: 100,
      bidAskSpread: 0.5,
      activeTraders: 2,
      lastTradeTime: new Date(Date.now() - 86400000) // 1 天前
    }

    const score = calculateLiquidityScore(market)

    expect(score).toBeLessThan(30)
  })

  it('零交易量边界条件', () => {
    const market = {
      totalVolume: 0,
      bidAskSpread: 0,
      activeTraders: 0,
      lastTradeTime: new Date()
    }

    const score = calculateLiquidityScore(market)
    expect(score).toBe(0)
  })
})
```

运行测试，确认失败：

```
FAIL lib/liquidity.test.ts
  ✕ 高流动性市场应返回高分 — Error: Not implemented
```

### GREEN：最小实现

```typescript
export function calculateLiquidityScore(market: MarketData): number {
  if (market.totalVolume === 0) return 0

  const volumeScore = Math.min(market.totalVolume / 1000, 100)
  const spreadScore = Math.max(100 - market.bidAskSpread * 1000, 0)
  const traderScore = Math.min(market.activeTraders / 10, 100)

  const hoursSinceLastTrade =
    (Date.now() - market.lastTradeTime.getTime()) / (1000 * 60 * 60)
  const recencyScore = Math.max(100 - hoursSinceLastTrade * 10, 0)

  const score =
    volumeScore * 0.4 + spreadScore * 0.3 +
    traderScore * 0.2 + recencyScore * 0.1

  return Math.min(Math.max(score, 0), 100)
}
```

运行测试，确认通过：

```
PASS lib/liquidity.test.ts
  ✓ 高流动性市场应返回高分
  ✓ 低流动性市场应返回低分
  ✓ 零交易量边界条件
3 tests passed
```

### REFACTOR：优化代码

```typescript
const WEIGHTS = { VOLUME: 0.4, SPREAD: 0.3, TRADERS: 0.2, RECENCY: 0.1 } as const
const SCALE = { VOLUME: 1000, SPREAD: 1000, TRADERS: 10, RECENCY_PENALTY: 10 } as const

function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

export function calculateLiquidityScore(market: MarketData): number {
  if (market.totalVolume === 0) return 0

  const volumeScore = Math.min(market.totalVolume / SCALE.VOLUME, 100)
  const spreadScore = clamp(100 - market.bidAskSpread * SCALE.SPREAD, 0, 100)
  const traderScore = Math.min(market.activeTraders / SCALE.TRADERS, 100)

  const hoursSinceLastTrade =
    (Date.now() - market.lastTradeTime.getTime()) / (1000 * 60 * 60)
  const recencyScore = clamp(100 - hoursSinceLastTrade * SCALE.RECENCY_PENALTY, 0, 100)

  return clamp(
    volumeScore * WEIGHTS.VOLUME + spreadScore * WEIGHTS.SPREAD +
    traderScore * WEIGHTS.TRADERS + recencyScore * WEIGHTS.RECENCY,
    0, 100
  )
}
```

重构后测试仍全部通过。覆盖率 100%。

:::warning[关键理解]
TDD 的核心不是"先写测试"，而是**测试先行 → 确认失败 → 最小实现 → 测试保护下重构**。跳过任何一步都不是真正的 TDD。
:::

---

## 步骤 3：Code Review — 自动审查

```bash
/code-review
```

:::info[注意]
Code reviewer agent 会发现人容易忽略的问题。你不需要手动检查每一行。
:::

**真实审查报告：**

```markdown
## Code Review Report

### Security Issues (CRITICAL)
✅ 未发现硬编码密钥
✅ 无 SQL 注入漏洞
✅ 无 XSS 漏洞

### Code Quality (HIGH)
✅ 函数行数合规（最大 8 行）
✅ 文件行数合规（25 行）
✅ 无缺失的错误处理
⚠️  lib/liquidity.ts:15 有 console.log

### Best Practices (MEDIUM)
✅ 使用不可变模式
✅ 无 TODO/FIXME
✅ 所有新代码有测试
✅ 公开 API 有 JSDoc

## Summary
- Critical: 0
- High: 1（console.log）
- Medium: 0

建议：移除 console.log 后即可提交。
```

修复后：

```typescript
// console.log(`Calculated score: ${score}`)  // 已移除
return clamp(weightedScore, 0, 100)
```

---

## 步骤 4：Verify — 全面验证

```bash
/verify
```

**验证输出：**

```
VERIFICATION: PASS

Build:    OK
Types:    OK (0 errors)
Lint:     OK (0 issues)
Tests:    3/3 passed, 100% coverage
Secrets:  OK (0 found)
Logs:     OK (0 console.logs)

Ready for PR: YES ✅
```

:::tip[提交之前必做]
`/verify` 是最后一道防线。如果输出 `Ready for PR: NO ❌`，逐项修复后再提交。
:::

---

## 步骤 5：提交

```bash
git add lib/liquidity.ts lib/liquidity.test.ts
git commit -m "feat: add market liquidity score calculator

- 基于交易量、价差、活跃交易者、最近交易时间计算 0-100 评分
- 100% 测试覆盖率
- 处理零交易量等边界条件
- 重构提取常量和辅助函数

Closes #123"
```

---

## 完整时间线

| 步骤 | 命令 | 实际耗时 | 产出 |
|------|------|------|------|
| 规划 | `/plan` | 2 分钟 | 实现计划文档 |
| TDD | `/tdd` | 15 分钟 | 3 个测试 + 实现代码 |
| 审查 | `/code-review` | 1 分钟 | 审查报告 |
| 验证 | `/verify` | 30 秒 | 全面验证通过 |
| 提交 | `git commit` | 10 秒 | commit + push |
| **合计** | | **~19 分钟** | |

:::info[对比手工开发]
同样功能手工开发约需 1-2 小时（写代码 + 手动测试 + 审查）。ECC 压缩到 ~19 分钟，且有自动测试覆盖和审查保障。
:::

---

## 常见错误

### ❌ 跳过 RED，直接写代码

```
先实现函数 → 再写测试
```

后果：测试只是"验证已有实现"，不是真正验证行为。

### ❌ 测试覆盖率不够

```
只写一个测试，覆盖率 40%
```

后果：大量代码没有测试保护，重构时易引入 bug。**ECC 的 tdd-guide 强制 80%+ 覆盖。**

### ❌ 忽略 code-review 的 CRITICAL 问题

后果：安全漏洞带到生产环境。**CRITICAL 问题必须先修复。**

### ❌ 提交前不跑 /verify

后果：构建失败浪费 CI 资源，类型错误导致运行时崩溃。

---

## 记住这个流程

```
需求 → /plan → /tdd → /code-review → /verify → 提交
```

每个新功能都走这个工作流。先用 ECC 跑通几次，它就会变成肌肉记忆。

## 接下来可以学什么

- [核心工作流](core-workflow) → 深入理解每个步骤的原理
- [Commands 速查](commands-reference) → 75 个命令详细用法
- [Superpowers 实战](../superpowers/workflow-chain) → 搭配使用效果更好
