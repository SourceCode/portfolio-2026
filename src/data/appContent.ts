export interface ContentItem {
    category: 'Expertise' | 'Other' | 'Working Style';
    id: string;
    path: string;
    summary: string;
    tags: string[];
    title: string;
}

export const staticContent: ContentItem[] = [
    // --- BATCH 1: Engineering & DevOps ---
    {
        category: 'Expertise',
        id: 'observability',
        path: '/expertise/observability',
        summary: 'Implementing full-stack observability with DataDog and OpenTelemetry to reduce MTTR and improve reliability.',
        tags: ['Infrastructure', 'DevOps', 'Monitoring', 'Data', 'Platform', 'Reliability', 'Observability', 'Cloud', 'Microservices'],
        title: 'Core Platform Observability'
    },
    {
        category: 'Expertise',
        id: 'cdc-pipelines',
        path: '/expertise/cdc-pipelines',
        summary: 'Building real-time Change Data Capture pipelines to synchronize microservices and data lakes.',
        tags: ['Data', 'Infrastructure', 'Architecture', 'Backend'],
        title: 'CDC Data Pipelines'
    },
    {
        category: 'Expertise',
        id: 'dora-metrics',
        path: '/expertise/dora-metrics',
        summary: 'Measuring and improving software delivery performance using the four key DORA metrics.',
        tags: ['DevOps', 'Process', 'Engineering', 'Leadership', 'Metrics'],
        title: 'DORA Metrics'
    },
    {
        category: 'Expertise',
        id: 'system-documentation',
        path: '/expertise/system-documentation',
        summary: 'Creating living documentation and interactive playgrounds to accelerate developer onboarding.',
        tags: ['Documentation', 'Process', 'Design', 'Engineering'],
        title: 'System Documentation'
    },
    {
        category: 'Expertise',
        id: 'modern-frontend',
        path: '/expertise/modern-frontend',
        summary: 'Architecting scalable, performant, and accessible frontend applications using React and modern tools.',
        tags: ['Frontend', 'React', 'Architecture', 'UX', 'Mobile'],
        title: 'Modern Frontend Architecture'
    },

    // --- BATCH 2: Product & Culture ---
    {
        category: 'Expertise',
        id: 'data-driven-ux',
        path: '/expertise/data-driven-ux',
        summary: 'Using analytics and user behavior data to inform design decisions and product strategy.',
        tags: ['Product', 'Engineering', 'Process', 'Data', 'UX'],
        title: 'Data-Driven UX'
    },
    {
        category: 'Expertise',
        id: 'data-mesh',
        path: '/expertise/data-mesh',
        summary: 'Decentralizing data ownership and treating data as a product to unlock enterprise agility.',
        tags: ['Data', 'Architecture', 'Infrastructure', 'Scale'],
        title: 'Data Mesh Architecture'
    },
    {
        category: 'Expertise',
        id: 'event-sourcing',
        path: '/expertise/event-sourcing',
        summary: 'Designing systems based on immutable event logs for auditability, replayability, and state reconstruction.',
        tags: ['Architecture', 'Backend', 'Data', 'System'],
        title: 'Event Sourcing'
    },
    {
        category: 'Expertise',
        id: 'shared-understanding',
        path: '/expertise/shared-understanding',
        summary: 'Bridging the gap between Product, Design, and Engineering to ensure everyone builds the right thing.',
        tags: ['Product', 'Process', 'Engineering', 'Communication'],
        title: 'Shared Understanding'
    },
    {
        category: 'Expertise',
        id: 'better-morale',
        path: '/expertise/better-morale',
        summary: 'Fostering a culture of autonomy, mastery, and purpose to build high-performing, happy engineering teams.',
        tags: ['Leadership', 'Culture', 'Team', 'Engineering', 'Growth'],
        title: 'Better Morale'
    },

    // --- BATCH 3 & Working Style ---
    {
        category: 'Working Style',
        id: 'working-style-deep-work',
        path: '/about/working-style/deep-work',
        summary: 'Prioritizing focus and "Maker Time" to solve complex problems effectively.',
        tags: ['Leadership', 'Culture', 'Process', 'Engineering', 'Working Style'],
        title: 'Deep Work'
    },
    {
        category: 'Working Style',
        id: 'working-style-logic',
        path: '/about/working-style/logic-over-emotion',
        summary: 'Making decisions based on data, first principles, and rigorous analysis rather than gut feeling.',
        tags: ['Architecture', 'Data', 'Leadership', 'Decision Making', 'Working Style'],
        title: 'Logic Over Emotion'
    },
    {
        category: 'Working Style',
        id: 'working-style-written',
        path: '/about/working-style/written-culture',
        summary: 'Championing asynchronous written communication (RFCs, ADRs) for clarity and scale.',
        tags: ['Documentation', 'Process', 'Communication', 'Leadership', 'Working Style'],
        title: 'Written Culture'
    },

    // --- Other Expertise Found in Files ---
    {
        category: 'Expertise',
        id: 'design-systems',
        path: '/expertise/design-systems',
        summary: 'Building shared component libraries to bridge Design and Engineering.',
        tags: ['Design System', 'UI', 'Frontend', 'React', 'UX', 'Design'],
        title: 'Design Systems'
    },
    {
        category: 'Expertise',
        id: 'product-engineering',
        path: '/expertise/product-engineering',
        summary: 'Unifying engineering, design, and product vision.',
        tags: ['Product', 'Education', 'UX', 'Mobile', 'Design', 'Strategy'],
        title: 'Product Engineering'
    },
    {
        category: 'Expertise',
        id: 'strategic-leadership',
        path: '/expertise/strategic-leadership',
        summary: 'Aligning technical strategy with business goals.',
        tags: ['Executive', 'Strategy', 'Transformation', 'Leadership'],
        title: 'Strategic Leadership'
    },
    {
        category: 'Expertise',
        id: 'empowered-teams',
        path: '/expertise/empowered-teams',
        summary: 'Moving from command-and-control to context-and-trust.',
        tags: ['Leadership', 'Management', 'Executive', 'Teams'],
        title: 'Empowered Teams'
    },
    {
        category: 'Expertise',
        id: 'systems-infrastructure',
        path: '/expertise/systems-infrastructure',
        summary: 'Infrastructure as Code, Security, and Cloud Architecture.',
        tags: ['Infrastructure', 'DevOps', 'Cloud', 'Kubernetes', 'Security'],
        title: 'Systems & Infrastructure'
    },
    {
        category: 'Expertise',
        id: 'design-tokens',
        path: '/expertise/design-tokens',
        summary: 'Semantic abstraction for cross-platform design values.',
        tags: ['Design', 'UI', 'Frontend', 'System'],
        title: 'Design Tokens'
    },
    {
        category: 'Expertise',
        id: 'component-library',
        path: '/expertise/component-library',
        summary: 'Reusable, accessible React components.',
        tags: ['Frontend', 'UI', 'Design', 'React'],
        title: 'Component Library'
    },
    {
        category: 'Expertise',
        id: 'technical-rfcs',
        path: '/expertise/technical-rfcs',
        summary: 'Democratizing architectural decision making.',
        tags: ['Architecture', 'Communication', 'Engineering', 'Process'],
        title: 'Technical RFCs'
    },
    {
        category: 'Expertise',
        id: 'product-trios',
        path: '/expertise/product-trios',
        summary: 'Co-creation with Product, Design, and Engineering.',
        tags: ['Product', 'Engineering', 'Process', 'Agile'],
        title: 'Product Trios'
    },
    {
        category: 'Expertise',
        id: 'faster-discovery',
        path: '/expertise/faster-discovery',
        summary: 'Engineering involvement in early product discovery.',
        tags: ['Product', 'Engineering', 'Process', 'Discovery'],
        title: 'Faster Discovery'
    },
    {
        category: 'Expertise',
        id: 'platform-architecture',
        path: '/expertise/platform-architecture',
        summary: 'Scalable, distributed systems design.',
        tags: ['Platform', 'Cloud', 'Architecture', 'Serverless'],
        title: 'Platform Architecture'
    },
    {
        category: 'Expertise',
        id: 'policy-as-code',
        path: '/expertise/policy-as-code',
        summary: 'Automated governance and compliance checks.',
        tags: ['Compliance', 'Security', 'DevOps', 'Infrastructure'],
        title: 'Policy as Code'
    },
    {
        category: 'Expertise',
        id: 'immutable-infrastructure',
        path: '/expertise/immutable-infrastructure',
        summary: 'Servers as cattle, not pets.',
        tags: ['Infrastructure', 'DevOps', 'Cloud', 'Serverless'],
        title: 'Immutable Infrastructure'
    },
    {
        category: 'Expertise',
        id: 'zero-trust',
        path: '/expertise/zero-trust',
        summary: 'Never trust, always verify.',
        tags: ['Security', 'Architecture', 'Cloud', 'Identity'],
        title: 'Zero Trust Security'
    },
    {
        category: 'Expertise',
        id: 'cloud-architecture',
        path: '/expertise/cloud-architecture',
        summary: 'Cloud-native design patterns on AWS.',
        tags: ['Cloud', 'AWS', 'Serverless', 'Infrastructure'],
        title: 'Cloud Architecture'
    },
    {
        category: 'Expertise',
        id: 'culture-of-mastery',
        path: '/expertise/culture-of-mastery',
        summary: 'Continuous learning and rigorous quality standards.',
        tags: ['Leadership', 'Engineering', 'Team', 'Growth', 'Culture'],
        title: 'Culture of Mastery'
    }
];
