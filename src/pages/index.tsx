import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/quickstart/what-is-plugin">
            开始学习 →
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {
    title: '从零开始',
    description: '了解插件是什么、如何安装、开启第一个插件。适合完全没接触过 Claude Code 插件的用户。',
    link: '/docs/quickstart/what-is-plugin',
    linkText: '快速开始',
  },
  {
    title: '深入核心插件',
    description: 'ECC（60+ agents, 228 skills）和 Superpowers（15 个 skill 的完整开发方法论）的详细文档与实战。',
    link: '/docs/ecc/overview',
    linkText: 'ECC 详解',
    linkAlt: '/docs/superpowers/overview',
    linkAltText: 'Superpowers 详解',
  },
  {
    title: '开发自己的插件',
    description: '从创建 Skill、Agent、Command，到编写 Hook、配置 MCP，再到发布到 Marketplace 的完整教程。',
    link: '/docs/dev-guide/create-skill',
    linkText: '开始开发',
  },
];

function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((f, i) => (
            <div key={i} className={clsx('col col--4', styles.feature)}>
              <div className={styles.featureCard}>
                <h3>{f.title}</h3>
                <p>{f.description}</p>
                <div className={styles.featureLinks}>
                  <Link className="button button--primary button--sm" to={f.link}>
                    {f.linkText}
                  </Link>
                  {f.linkAlt && (
                    <Link className="button button--outline button--sm" to={f.linkAlt}>
                      {f.linkAltText}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pathStages = [
  { emoji: '📦', title: '安装插件', description: '注册市场，安装 ECC 和 Superpowers' },
  { emoji: '📖', title: '理解概念', description: 'Skill / Agent / Command / Hook 入门' },
  { emoji: '⚡', title: '掌握 ECC', description: 'plan → tdd → review → build' },
  { emoji: '🦸', title: '运用 Superpowers', description: 'brainstorm → plan → execute → verify' },
  { emoji: '🔧', title: '开发插件', description: '创建并发布你的第一个插件' },
];

function LearningPathSection() {
  return (
    <section className={styles.pathSection}>
      <div className="container">
        <h2 className={styles.pathTitle}>学习路线</h2>
        <div className={styles.path}>
          {pathStages.map((stage, i) => (
            <div key={i} className={styles.pathStage}>
              <div className={styles.pathEmoji}>{stage.emoji}</div>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              {i < pathStages.length - 1 && <div className={styles.pathArrow}>→</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="从入门到精通 Claude Code 插件生态">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <LearningPathSection />
      </main>
    </Layout>
  );
}
