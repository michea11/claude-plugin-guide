import React, { useState, useMemo } from 'react';
import styles from './CommandTable.module.css';

interface Command {
  name: string;
  category: string;
  description: string;
}

interface CommandTableProps {
  commands: Command[];
}

const CATEGORIES = [
  '核心工作流', '测试', '代码审查', '构建修复',
  '规划', '会话', '学习', '重构',
  '文档', '自动化', '基础设施',
];

const CATEGORY_COLORS: Record<string, string> = {
  '核心工作流': '#6366f1',
  '测试': '#22c55e',
  '代码审查': '#f59e0b',
  '构建修复': '#ef4444',
  '规划': '#8b5cf6',
  '会话': '#06b6d4',
  '学习': '#ec4899',
  '重构': '#64748b',
  '文档': '#14b8a6',
  '自动化': '#f97316',
  '基础设施': '#3b82f6',
};

export default function CommandTable({ commands }: CommandTableProps) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  const filtered = useMemo(() => {
    return commands.filter((cmd) => {
      const matchSearch = !search ||
        cmd.name.includes(search) ||
        cmd.description.toLowerCase().includes(search.toLowerCase());
      const matchCategory = !category || cmd.category === category;
      return matchSearch && matchCategory;
    });
  }, [commands, search, category]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.controls}>
        <input
          type="text"
          placeholder="搜索命令..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={styles.search}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className={styles.select}
        >
          <option value="">全部分类（{commands.length}）</option>
          {CATEGORIES.map((cat) => {
            const cnt = commands.filter(c => c.category === cat).length;
            return (
              <option key={cat} value={cat}>{cat}（{cnt}）</option>
            );
          })}
        </select>
        {(search || category) && (
          <button
            className={styles.clearBtn}
            onClick={() => { setSearch(''); setCategory(''); }}
          >
            清除筛选
          </button>
        )}
      </div>

      <div className={styles.count}>
        显示 {filtered.length} / {commands.length} 条命令
      </div>

      {filtered.length === 0 ? (
        <div className={styles.empty}>
          没有匹配的命令。试试换个关键词或清除筛选。
        </div>
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.thCmd}>命令</th>
              <th className={styles.thCat}>分类</th>
              <th>说明</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((cmd) => (
              <tr key={cmd.name}>
                <td><code className={styles.cmdName}>{cmd.name}</code></td>
                <td>
                  <span
                    className={styles.badge}
                    style={{
                      background: CATEGORY_COLORS[cmd.category] + '18',
                      color: CATEGORY_COLORS[cmd.category],
                      borderColor: CATEGORY_COLORS[cmd.category] + '40',
                    }}
                  >
                    {cmd.category}
                  </span>
                </td>
                <td className={styles.desc}>{cmd.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
