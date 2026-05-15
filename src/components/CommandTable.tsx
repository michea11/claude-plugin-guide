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
  'Core Workflow', 'Testing', 'Code Review', 'Build Fixers',
  'Planning', 'Session', 'Learning', 'Refactoring',
  'Docs', 'Automation', 'Infrastructure',
];

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
    <div>
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
          <option value="">全部分类</option>
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>命令</th>
            <th>分类</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((cmd) => (
            <tr key={cmd.name}>
              <td><code>{cmd.name}</code></td>
              <td><span className={styles.badge}>{cmd.category}</span></td>
              <td>{cmd.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
