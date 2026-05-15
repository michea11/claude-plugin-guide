import React from 'react';
import styles from './LearningPath.module.css';

interface Stage {
  emoji: string;
  title: string;
  description: string;
}

interface LearningPathProps {
  stages: Stage[];
}

export default function LearningPath({ stages }: LearningPathProps) {
  return (
    <div className={styles.path}>
      {stages.map((stage, i) => (
        <div key={i} className={styles.stage}>
          <div className={styles.emoji}>{stage.emoji}</div>
          <h3 className={styles.title}>{stage.title}</h3>
          <p className={styles.description}>{stage.description}</p>
          {i < stages.length - 1 && <div className={styles.arrow}>→</div>}
        </div>
      ))}
    </div>
  );
}
