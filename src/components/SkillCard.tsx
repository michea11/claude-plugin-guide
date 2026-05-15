import React from 'react';
import styles from './SkillCard.module.css';

interface SkillCardProps {
  name: string;
  description: string;
  trigger: string;
  category: string;
}

export default function SkillCard({ name, description, trigger, category }: SkillCardProps) {
  return (
    <div className={styles.card}>
      <span className={styles.category}>{category}</span>
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.trigger}>
        <span className={styles.triggerLabel}>触发时机：</span>
        {trigger}
      </div>
    </div>
  );
}
