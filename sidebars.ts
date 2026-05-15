import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  mainSidebar: [
    {
      type: 'category',
      label: '快速开始',
      items: [
        'quickstart/what-is-plugin',
        'quickstart/install-manage',
        'quickstart/first-ecc',
      ],
    },
    {
      type: 'category',
      label: '插件核心概念',
      items: [
        'concepts/plugin-anatomy',
        'concepts/skill',
        'concepts/agent',
        'concepts/command',
        'concepts/hook',
        'concepts/component-reference',
      ],
    },
    {
      type: 'category',
      label: 'ECC 插件详解',
      items: [
        'ecc/overview',
        'ecc/core-workflow',
        'ecc/skills-index',
        {
          type: 'category',
          label: '各 Skill 详解',
          items: [
            'ecc/skills/tdd-workflow',
            'ecc/skills/coding-standards',
            'ecc/skills/error-handling',
            'ecc/skills/search-first',
            'ecc/skills/api-design',
            'ecc/skills/hexagonal-architecture',
            'ecc/skills/backend-patterns',
            'ecc/skills/frontend-patterns',
            'ecc/skills/postgres-patterns',
            'ecc/skills/redis-patterns',
            'ecc/skills/docker-patterns',
            'ecc/skills/git-workflow',
            'ecc/skills/security-review',
            'ecc/skills/deployment-patterns',
            'ecc/skills/agentic-engineering',
          ],
        },
        'ecc/commands-reference',
        'ecc/agents-index',
        'ecc/examples',
      ],
    },
    {
      type: 'category',
      label: 'Superpowers 详解',
      items: [
        'superpowers/overview',
        'superpowers/workflow-chain',
        {
          type: 'category',
          label: '各 Skill 详解',
          items: [
            'superpowers/skills/using-superpowers',
            'superpowers/skills/brainstorming',
            'superpowers/skills/writing-plans',
            'superpowers/skills/executing-plans',
            'superpowers/skills/subagent-driven-development',
            'superpowers/skills/verification-before-completion',
            'superpowers/skills/finishing-a-development-branch',
            'superpowers/skills/test-driven-development',
            'superpowers/skills/systematic-debugging',
            'superpowers/skills/requesting-code-review',
            'superpowers/skills/receiving-code-review',
            'superpowers/skills/dispatching-parallel-agents',
            'superpowers/skills/writing-skills',
            'superpowers/skills/using-git-worktrees',
          ],
        },
        'superpowers/with-ecc',
      ],
    },
    {
      type: 'category',
      label: '插件开发教程',
      items: [
        'dev-guide/create-skill',
        'dev-guide/create-agent',
        'dev-guide/create-command',
        'dev-guide/write-hook',
        'dev-guide/mcp-server',
        'dev-guide/publish',
        'dev-guide/design-patterns',
      ],
    },
    {
      type: 'category',
      label: '附录',
      items: [
        'appendix/glossary',
        'appendix/faq',
      ],
    },
  ],
};

export default sidebars;
