import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function Hero() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        <p className={styles.heroDesc}>
          以前用 Claude Code，你可能只会让它改个 bug、写段代码。
          <br />
          装上插件之后，它变成了一个会设计、会测试、会审查、会部署的完整工程团队。
        </p>
        <div className={styles.heroButtons}>
          <Link className="button button--primary button--lg" to="/docs/quickstart/what-is-plugin">
            开始学习 →
          </Link>
          <Link className="button button--outline button--lg" to="/docs/ecc/overview">
            探索 ECC
          </Link>
        </div>
      </div>
    </header>
  );
}

const identities = [
  { who: 'Claude Code 新手', gain: '从零了解插件是什么，安装第一个插件，体验 AI 编程的效率提升' },
  { who: '日常开发者', gain: '把 TDD、Code Review、构建修复自动化，省下大量返工时间' },
  { who: '技术 Leader', gain: '用 ECC Rules 统一团队编码规范，用 Superpowers 建立标准开发流程' },
  { who: '插件开发者', gain: '从成熟插件学习设计模式，创建并发布自己的 Claude Code 插件' },
  { who: '技术写作者/教育者', gain: '理解插件生态全貌，产出高质量的教程和分享内容' },
  { who: '任何人', gain: '用 AI 更聪明地工作——不管你是不是程序员' },
];

function WhoIsThisFor() {
  return (
    <section className={styles.whoSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>这门指南适合谁？</h2>
        <div className={styles.identityTable}>
          {identities.map((item, i) => (
            <div key={i} className={styles.identityRow}>
              <div className={styles.identityWho}>{item.who}</div>
              <div className={styles.identityGain}>{item.gain}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const pathStages = [
  {
    emoji: '📦',
    title: '新手入门',
    desc: '了解插件概念，安装 ECC 和 Superpowers，第一次体验 /plan 和 /code-review',
    link: '/docs/quickstart/what-is-plugin',
  },
  {
    emoji: '📖',
    title: '第一阶段',
    desc: '掌握 Skill、Agent、Command、Hook 等核心概念，理解插件运作机制',
    link: '/docs/concepts/plugin-anatomy',
  },
  {
    emoji: '⚡',
    title: '第二阶段',
    desc: '精通 ECC 核心工作流 plan→tdd→review→build，用 CommandTable 速查 75 个命令',
    link: '/docs/ecc/overview',
  },
  {
    emoji: '🦸',
    title: '第三阶段',
    desc: '运用 Superpowers 方法论：brainstorm→plan→execute→verify 完整开发流程',
    link: '/docs/superpowers/overview',
  },
  {
    emoji: '🔧',
    title: '进阶：开发插件',
    desc: '创建 Skill、Agent、Command，编写 Hook，配置 MCP，发布到 Marketplace',
    link: '/docs/dev-guide/create-skill',
  },
];

function LearningPath() {
  return (
    <section className={styles.pathSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>学习路径：从"会用 Claude Code"到"会搭 AI 工程体系"</h2>
        <div className={styles.pathGrid}>
          {pathStages.map((stage, i) => (
            <Link to={stage.link} key={i} className={styles.pathCard}>
              <div className={styles.pathEmoji}>{stage.emoji}</div>
              <h3 className={styles.pathCardTitle}>{stage.title}</h3>
              <p className={styles.pathCardDesc}>{stage.desc}</p>
              <span className={styles.pathArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

const nextSteps = [
  { emoji: '📦', title: '快速开始', desc: '安装插件，第一次体验', to: '/docs/quickstart/what-is-plugin' },
  { emoji: '🧩', title: '核心概念', desc: 'Skill / Agent / Command / Hook', to: '/docs/concepts/plugin-anatomy' },
  { emoji: '⚡', title: 'ECC 插件', desc: '60+ agents, 228 skills', to: '/docs/ecc/overview' },
  { emoji: '🦸', title: 'Superpowers', desc: '15 skill 的开发方法论', to: '/docs/superpowers/overview' },
];

function NextSteps() {
  return (
    <section className={styles.nextSection}>
      <div className="container">
        <h2 className={styles.sectionTitle}>接下来可以学什么</h2>
        <div className={styles.nextGrid}>
          {nextSteps.map((item, i) => (
            <Link to={item.to} key={i} className={styles.nextCard}>
              <div className={styles.nextEmoji}>{item.emoji}</div>
              <div>
                <h3 className={styles.nextTitle}>{item.title}</h3>
                <p className={styles.nextDesc}>{item.desc}</p>
              </div>
              <span className={styles.nextArrow}>→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout title={siteConfig.title} description="从入门到精通 Claude Code 插件生态">
      <Hero />
      <main>
        <WhoIsThisFor />
        <LearningPath />
        <NextSteps />
      </main>
    </Layout>
  );
}
