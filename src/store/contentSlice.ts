/**
 * store/contentSlice.ts
 * Manages the static content data for the application including projects,
 * blog posts, and career history. In a full stack app, this would fetch from an API.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AboutPageContent, BlogPost, CareerItem, ContentState, Project } from '../types';

/** Initial static data for Projects */
const initialProjects: Project[] = [
  // --- 1. CURRENT & EXECUTIVE (FEATURED) ---
  {
    description: 'Leading the vision and execution of the company’s technology platform as CTO. Driving innovation in real estate investing through improved accessibility, process efficiency, and digital product experiences. Successfully modernized online marketplaces and advanced core capabilities for enterprise-scale growth.',
    featured: true,
    id: 'nw-1',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    slug: 'new-western-tech',
    summary: 'Modernizing the nation\'s #1 real estate investment marketplace.',
    tags: ['Executive', 'Platform', 'Real Estate', 'Transformation'],
    title: 'New Western Technology Platform',
    year: 'Present'
  },
  {
    description: 'Designed and implemented a unified product operating model consolidating Product, Engineering, Design, BI/Data, and Marketing into a single execution framework. Established shared principles, operating agreements, documentation standards, and outcome-driven workflows to reduce silos and increase delivery velocity.',
    featured: true,
    id: 'exec-oneteam',
    imageUrl: 'https://picsum.photos/800/600?random=101',
    slug: 'one-team-operating-model',
    summary: 'Unified product operating model consolidating Product, Engineering, Data, Design, and Marketing.',
    tags: ['Executive', 'Transformation', 'Strategy', 'Leadership', 'Enterprise', 'Operating Model'],
    title: 'One Team Operating Model',
    year: '2024–Present'
  },
  {
    description: 'Designed and led foundational core services, APIs, integrations, and QA platforms powering all Anywhere brands, partners, and internal tools. Built scalable, compliant systems operating across 119 countries. Implemented platform-wide GDPR, CCPA, CPRA, and CAN-SPAM compliance capabilities. Designed distributed caching, policy enforcement, and customization frameworks. Established API and service standards enabling consistent scalability and governance. Delivered enterprise observability: logging, tracing, debugging, alerting. Championed serverless and low-ops architectures to reduce operational overhead.',
    featured: true,
    id: 'anywhere-1',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    slug: 'anywhere-global-core',
    summary: 'Global, multi-brand, multi-tenant platform powering Anywhere Real Estate across 119 countries.',
    tags: ['Enterprise', 'Platform', 'Global', 'Compliance', 'Serverless'],
    title: 'Global Core Services Platform',
    year: '2021-2023'
  },

  // --- 2. ENTERPRISE COMPLIANCE & PLATFORM ARCHITECTURE (NEW) ---
  {
    description: 'Platform-wide design and implementation of GDPR, CCPA, CPRA, and CAN-SPAM compliance systems across multi-tenant, multi-brand global services. Included data governance, consent management, auditability, and enforcement mechanisms.',
    id: 'exec-compliance',
    imageUrl: 'https://picsum.photos/800/600?random=102',
    slug: 'enterprise-compliance-systems',
    summary: 'GDPR, CCPA, CPRA, and CAN-SPAM compliance systems across global services.',
    tags: ['Enterprise', 'Compliance', 'Global', 'Platform', 'Security', 'Privacy'],
    title: 'Enterprise Compliance Systems',
    year: '2021–2023',
  },
  {
    description: 'Designed and deployed enterprise-grade logging, tracing, monitoring, alerting, and debugging systems supporting distributed microservices at global scale using DataDog and cloud-native tooling.',
    id: 'exec-observability',
    imageUrl: 'https://picsum.photos/800/600?random=103',
    slug: 'core-platform-observability',
    summary: 'Enterprise-grade logging, tracing, monitoring, and debugging systems.',
    tags: ['Platform', 'Enterprise', 'Reliability', 'Observability', 'Cloud', 'Microservices'],
    title: 'Core Platform Observability',
    year: '2021–2023',
  },
  {
    description: 'Defined and enforced API standards, service templates, and integration patterns to support global scalability, multi-tenancy, partner ecosystems, and internal developer velocity.',
    id: 'arch-api-standards',
    imageUrl: 'https://picsum.photos/800/600?random=104',
    slug: 'api-integration-standards',
    summary: 'API standards and service templates for global scalability.',
    tags: ['Platform', 'API', 'Enterprise', 'Global', 'Microservices', 'Governance'],
    title: 'Core API & Integration Standards',
    year: '2021–2023',
  },
  {
    description: 'Championed adoption of serverless-first and low-operations architectures, reducing infrastructure complexity, operational burden, and deployment risk while improving scalability and cost efficiency.',
    id: 'arch-serverless',
    imageUrl: 'https://picsum.photos/800/600?random=105',
    slug: 'serverless-infrastructure',
    summary: 'Adoption of serverless-first and low-operations architectures.',
    tags: ['Serverless', 'Cloud', 'AWS', 'Platform', 'Enterprise', 'Innovation'],
    title: 'Serverless & Low-Ops Initiative',
    year: '2021–2023',
  },
  {
    description: 'Designed distributed caching layers and policy-driven customization frameworks enabling per-brand, per-region behavior across shared services.',
    id: 'arch-caching',
    imageUrl: 'https://picsum.photos/800/600?random=106',
    slug: 'distributed-caching-framework',
    summary: 'Distributed caching layers and policy-driven customization.',
    tags: ['Platform', 'Global', 'Enterprise', 'Performance', 'Architecture'],
    title: 'Distributed Caching Framework',
    year: '2021–2023',
  },

  // --- 3. PLATFORM & PRODUCT (EXISTING + REFINED) ---
  {
    description: 'Architected real-time indexing and search frameworks using ElasticSearch and event-driven systems. Enabled fast, scalable discovery across listings, brokers, agents, offices, media, and campaign data. Designed distributed services supporting payments, profiles, documents, events, and DAM. Integrated AWS infrastructure using Terraform and cloud-native services.',
    id: 'anywhere-2',
    imageUrl: 'https://picsum.photos/800/600?random=3',
    slug: 'anywhere-realtime-search',
    summary: 'Real-time indexing and search frameworks using ElasticSearch and event-driven systems.',
    tags: ['Platform', 'Search', 'ElasticSearch', 'AWS'],
    title: 'Real-Time Search & Indexing',
    year: '2019-2020'
  },
  {
    description: 'Defined technical vision and multi-year roadmaps for fintech and edtech products. Architected core data platforms, services, and APIs. Led vendor integrations and third-party service strategy. Oversaw infrastructure, security, and risk management. Recruited and mentored cross-functional product and engineering teams. Supported market, product, and user research initiatives.',
    featured: true,
    id: 'everprep-1',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    slug: 'everprep-platforms',
    summary: 'Technical vision, architecture, and roadmaps for Everprep Inc.',
    tags: ['Startup', 'Fintech', 'EdTech', 'Strategy'],
    title: 'Fintech & EdTech Platforms',
    year: '2020-Present'
  },
  {
    description: 'Led engineering for high-traffic consumer-facing platforms. Delivered SEO, structured data, performance, and availability improvements. Overhauled faceted search and user interaction tracking. Supported creation of a world-class, data-driven terpene resource. Project-managed the 2019 Leafly brand evolution.',
    id: 'leafly-1',
    imageUrl: 'https://picsum.photos/800/600?random=5',
    slug: 'leafly-audience-journey',
    summary: 'Engineering leadership for high-traffic consumer-facing platforms at Leafly.',
    tags: ['Consumer', 'Growth', 'SEO', 'Web'],
    title: 'Audience Journey Platform',
    year: '2018-2019'
  },
  {
    description: 'Built scalable microservices supporting Premiere Agent products. Designed analytics platforms and reporting APIs for sales and BI teams. Implemented real-time communication systems using Twilio (voice, SMS, routing). Led CI/CD, containerization, and cloud deployment pipelines. Achieved and maintained strict SLA and KPI targets. Platform work highlighted by Zillow executives during earnings and media coverage.',
    id: 'zillow-1',
    imageUrl: 'https://picsum.photos/800/600?random=6',
    slug: 'zillow-premiere-agent',
    summary: 'Scalable microservices and analytics for Zillow Group.',
    tags: ['Microservices', 'Analytics', 'Real-time', 'Cloud'],
    title: 'Premiere Agent Platform',
    year: '2016-2018'
  },
  {
    description: 'Designed microservices and APIs powering agent analytics, reporting, and sales intelligence used by internal teams and customers at scale.',
    id: 'data-agent-analytics',
    imageUrl: 'https://picsum.photos/800/600?random=107',
    slug: 'agent-analytics-bi',
    summary: 'Microservices powering agent analytics and sales intelligence.',
    tags: ['Analytics', 'BI', 'Enterprise', 'Microservices', 'Real-time'],
    title: 'Agent Analytics & BI Platform',
    year: '2016–2018',
  },
  {
    description: 'Integrated Twilio voice, SMS, routing, and task workflows at call-center scale, enabling real-time interactions between agents, sales teams, and consumers.',
    id: 'data-realtime-comms',
    imageUrl: 'https://picsum.photos/800/600?random=108',
    slug: 'realtime-communications-platform',
    summary: 'Integrated Twilio voice, SMS, and routing at scale.',
    tags: ['Real-time', 'Communications', 'Cloud', 'Enterprise', 'Platform'],
    title: 'Real-Time Communications',
    year: '2016–2018',
  },

  // --- 4. ENGINEERING FOUNDATIONS & TOOLING (NEW) ---
  {
    description: 'Created foundational service templates, libraries, and deployment packages to accelerate new service development and enforce consistency across teams.',
    id: 'eng-templates',
    imageUrl: 'https://picsum.photos/800/600?random=109',
    slug: 'service-templates-tooling',
    summary: 'Foundational templates and libraries for developer velocity.',
    tags: ['Tooling', 'Platform', 'Developer Experience', 'Microservices'],
    title: 'Core Service Templates',
    year: '2019–2023',
  },
  {
    description: 'Led implementation of GitLab CI, Docker, ECS, Terraform, and automated pipelines for build, test, and deployment across multiple organizations.',
    id: 'eng-cicd',
    imageUrl: 'https://picsum.photos/800/600?random=110',
    slug: 'cicd-automation',
    summary: 'GitLab CI, Docker, ECS, and Terraform pipelines.',
    tags: ['DevOps', 'Automation', 'Cloud', 'Infrastructure'],
    title: 'CI/CD & Deployment Automation',
    year: '2016–2023',
  },

  // --- 5. CREATIVE & INNOVATION ---
  {
    description: 'Spherez: Non-intrusive visual notification system (Custom hardware + thin client C + backend services Go). ZArcade: Stand-up arcade machine with classic games (Custom hardware, software, and industrial design). ZLeaderboard: Company-wide achievement and leaderboard system (Initial vision, design, and lead development).',
    featured: true,
    id: 'zillow-2',
    imageUrl: 'https://picsum.photos/800/600?random=7',
    slug: 'zillow-hack-week',
    summary: 'Multiple Judges’ Choice Awards for custom hardware and visualization systems.',
    tags: ['Innovation', 'Hardware', 'Creative', 'Hackathon'],
    title: 'Zillow Hack Week Innovation',
    year: '2016-2018'
  },
  {
    description: 'Built custom hardware projects combining embedded systems, thin clients, and backend services, blending physical computing with cloud platforms.',
    id: 'creative-hardware',
    imageUrl: 'https://picsum.photos/800/600?random=114',
    slug: 'custom-hardware-embedded',
    summary: 'Embedded systems, thin clients, and backend services.',
    tags: ['Hardware', 'Innovation', 'Embedded', 'Creative'],
    title: 'Custom Hardware Experiments',
    year: '2016–2018',
  },
  {
    description: 'Professional UI/UX, branding, and digital design projects since the late 1990s. Web interfaces, product mockups, promotional graphics, and 3D renders. Tools include Photoshop, Cinema 4D, and modern design workflows.',
    featured: true,
    id: 'creative-1',
    imageUrl: 'https://picsum.photos/800/600?random=9',
    slug: 'design-visual-systems',
    summary: 'Professional UI/UX, branding, and digital design projects.',
    tags: ['Design', 'UI/UX', 'Branding', 'Creative'],
    title: 'Design & Visual Systems',
    year: 'Ongoing'
  },
  {
    description: 'Produced and released multiple electronic music records under aliases Malware and Cult of Skaro. Live performances across the Midwest and West Coast. Custom synthesizer and sound design experimentation. Featured mixes and releases including: "Incoming!", "Release the Beast", "Return to the Jungle", "Interdimensional Time Travel", and "Trapped in the Pyramid".',
    id: 'creative-2',
    imageUrl: 'https://picsum.photos/800/600?random=10',
    slug: 'music-production',
    summary: 'Electronic music production and audio engineering (Malware, Cult of Skaro).',
    tags: ['Creative', 'Music', 'Audio', 'Production'],
    title: 'Music Production',
    year: 'Ongoing'
  },
  {
    description: 'Development of custom synthesizers, sound design tools, and production workflows used in music releases and live performance.',
    id: 'creative-audio-tools',
    imageUrl: 'https://picsum.photos/800/600?random=115',
    slug: 'custom-audio-tools',
    summary: 'Synthesizers, sound design tools, and production workflows.',
    tags: ['Creative', 'Audio', 'Tooling', 'Music', 'Production'],
    title: 'Custom Audio Tools',
    year: 'Ongoing',
  },

  // --- 6. WEB APPLICATIONS, OSS, & FOUNDATIONAL ---
  {
    description: 'Contributed application components and service integrations for a mission-critical legal case management system. Supported law firms, banks, corporations, and government agencies. Built SOAP, REST, COM, and XML integrations. Ensured compliance with legal and regulatory standards.',
    id: 'app-caseaware',
    imageUrl: 'https://picsum.photos/800/600?random=11',
    slug: 'caseaware-platform',
    summary: 'Mission-critical legal case management system.',
    tags: ['Web App', 'Enterprise', 'Legal Tech'],
    title: 'CaseAware Legal Platform',
    year: 'Legacy'
  },
  {
    description: 'Designed and built a secure educational web application for K-12 initiatives for Washington University.',
    id: 'app-washu',
    imageUrl: 'https://picsum.photos/800/600?random=12',
    slug: 'washu-k12',
    summary: 'Secure educational web application for Washington University.',
    tags: ['Web App', 'Education', 'Private'],
    title: 'Wash-U K12 Program',
    year: 'Legacy'
  },
  {
    description: 'Built a private extranet system supporting enterprise partner workflows for Accent International.',
    id: 'app-accent',
    imageUrl: 'https://picsum.photos/800/600?random=13',
    slug: 'accent-extranet',
    summary: 'Enterprise partner workflow extranet.',
    tags: ['Web App', 'Enterprise', 'B2B'],
    title: 'Accent International Extranet',
    year: 'Legacy'
  },
  {
    description: 'Custom MVC framework showcasing object-oriented design, modularity, event systems, and rapid application tooling — evolving since initial release.',
    id: 'oss-starfish',
    imageUrl: 'https://picsum.photos/800/600?random=14',
    slug: 'project-starfish',
    summary: 'Custom PHP5 MVC Framework.',
    tags: ['Open Source', 'Framework', 'PHP'],
    title: 'Project Starfish',
    year: 'Legacy'
  },
  {
    description: 'Widely shared RSS utility hosted on Planet Source Code with high community ratings and thousands of downloads. Simplified RSS discovery and syndication for web publishers.',
    id: 'oss-rss',
    imageUrl: 'https://picsum.photos/800/600?random=15',
    slug: 'rss-generator',
    summary: 'Widely distributed open source RSS utility.',
    tags: ['Open Source', 'Tooling', 'Legacy'],
    title: 'RSS Button Generator',
    year: 'Legacy'
  },
  
  // --- 7. EARLY CAREER & SYSTEMS WORK (NEW & UPDATED) ---
  {
    description: 'Led modernization of development operations including source control, testing frameworks, deployment pipelines, and Agile adoption across multiple client projects at The GDR Group.',
    id: 'early-gdr',
    imageUrl: 'https://picsum.photos/800/600?random=111',
    slug: 'gdr-devops',
    summary: 'Modernization of development operations and Agile adoption.',
    tags: ['Operations', 'Transformation', 'Leadership', 'Enterprise'],
    title: 'DevOps Modernization',
    year: '2014–2016',
  },
  {
    description: 'Migrated legacy systems to modern PHP MVC architectures, improving scalability, security, and maintainability for commercial and agency clients.',
    id: 'early-cms',
    imageUrl: 'https://picsum.photos/800/600?random=112',
    slug: 'cms-mvc-migrations',
    summary: 'Migrated legacy systems to modern PHP MVC architectures.',
    tags: ['Legacy', 'Web Dev', 'Frameworks', 'PHP', 'Modernization'],
    title: 'Custom CMS Migrations',
    year: '2002–2010',
  },
  {
    description: 'Managed ISO 9001-certified IT infrastructure, custom intranet systems, and enterprise workstation deployments across multiple locations for Design Systems Inc.',
    id: 'early-infra',
    imageUrl: 'https://picsum.photos/800/600?random=113',
    slug: 'enterprise-network-systems',
    summary: 'ISO 9001-certified IT infrastructure and intranet systems.',
    tags: ['Infrastructure', 'Systems', 'Networking', 'Enterprise'],
    title: 'Enterprise Network Systems',
    year: '1999–2001',
  },
  {
    description: 'Supported migration of @Home network nodes to ATTBI infrastructure. Built internal tools and integrations for large-scale network operations. Worked with high-speed networking, routing, and optical equipment.',
    id: 'early-2',
    imageUrl: 'https://picsum.photos/800/600?random=40',
    slug: 'att-network-migration',
    summary: 'Network migration and internal tools for large-scale operations.',
    tags: ['Infrastructure', 'Networking', 'Legacy'],
    title: 'AT&T Network Infrastructure',
    year: 'Early Career'
  },

  // --- 8. PAST WEB DEVELOPMENT & DESIGN (EXISTING) ---
  {
    description: 'Full website development and design for a technical trade school, focusing on informative structure and user engagement.',
    id: 'web-wyotech',
    imageUrl: 'https://picsum.photos/800/600?random=20',
    slug: 'wyotech',
    summary: 'Web development and design for a technical trade school.',
    tags: ['Web Dev', 'Design', 'Education'],
    title: 'WyoTech',
    year: 'Legacy'
  },
  {
    description: 'Designed and developed multiple sites for Everest College across North America, ensuring brand consistency and responsive delivery.',
    id: 'web-everest',
    imageUrl: 'https://picsum.photos/800/600?random=21',
    slug: 'everest-college',
    summary: 'Multi-site development for North America.',
    tags: ['Web Dev', 'Design', 'Education'],
    title: 'Everest College',
    year: 'Legacy'
  },
  {
    description: 'End-to-end website redesign and development for a well-known educational institution.',
    id: 'web-heald',
    imageUrl: 'https://picsum.photos/800/600?random=22',
    slug: 'heald-college',
    summary: 'End-to-end website redesign and development.',
    tags: ['Web Dev', 'Design', 'Education'],
    title: 'Heald College',
    year: 'Legacy'
  },
  {
    description: 'Created dual web platforms supporting firefighting career preparation and professional development for Fire Division Chief Paul Lepore.',
    id: 'web-firefighters',
    imageUrl: 'https://picsum.photos/800/600?random=23',
    slug: 'aspiring-firefighters',
    summary: 'Dual web platforms for career preparation.',
    tags: ['Web Dev', 'Niche', 'Professional'],
    title: 'Aspiring Firefighters',
    year: 'Legacy'
  },
  {
    description: 'Custom site design and development for a niche creative brand.',
    id: 'web-littlebrother',
    imageUrl: 'https://picsum.photos/800/600?random=24',
    slug: 'little-brother-ink',
    summary: 'Custom site design for a niche creative brand.',
    tags: ['Web Dev', 'Design', 'Creative'],
    title: 'Little Brother Ink',
    year: 'Legacy'
  },
  {
    description: 'Website development for a St. Louis-based cultural institution with emphasis on visual communication.',
    id: 'web-parsons',
    imageUrl: 'https://picsum.photos/800/600?random=25',
    slug: 'parsons-blewett',
    summary: 'Website for a cultural institution.',
    tags: ['Web Dev', 'Non-Profit', 'Culture'],
    title: 'Parsons Blewett',
    year: 'Legacy'
  },
  {
    description: 'Built site to showcase services and portfolio for a local print provider.',
    id: 'web-acapulco',
    imageUrl: 'https://picsum.photos/800/600?random=26',
    slug: 'acapulco-printing',
    summary: 'Portfolio site for a local print provider.',
    tags: ['Web Dev', 'Small Business'],
    title: 'Acapulco Screen Printing',
    year: 'Legacy'
  },
  {
    description: 'Custom online presence for a fabrication and manufacturing business.',
    id: 'web-prime',
    imageUrl: 'https://picsum.photos/800/600?random=27',
    slug: 'prime-fabrication',
    summary: 'Online presence for manufacturing.',
    tags: ['Web Dev', 'Manufacturing'],
    title: 'Prime Fabrication',
    year: 'Legacy'
  },
  {
    description: 'Complete site for university athletics, including schedules, rosters, and multimedia integration.',
    id: 'web-umsl',
    imageUrl: 'https://picsum.photos/800/600?random=28',
    slug: 'umsl-sports',
    summary: 'Complete site for university athletics.',
    tags: ['Web Dev', 'Education', 'Sports'],
    title: 'UMSL Sports',
    year: 'Legacy'
  },
  {
    description: 'Developed a civic and community organization website with accessible resources and governance content.',
    id: 'web-jcrc',
    imageUrl: 'https://picsum.photos/800/600?random=29',
    slug: 'jcrc',
    summary: 'Civic and community organization website.',
    tags: ['Web Dev', 'Non-Profit', 'Community'],
    title: 'JCRC',
    year: 'Legacy'
  },
  {
    description: 'Built online presence for a major non-profit animal welfare organization.',
    id: 'web-humane',
    imageUrl: 'https://picsum.photos/800/600?random=30',
    slug: 'humane-society',
    summary: 'Online presence for animal welfare.',
    tags: ['Web Dev', 'Non-Profit'],
    title: 'Humane Society of Missouri',
    year: 'Legacy'
  },
  {
    description: 'Custom web platform for a children’s outreach and camp organization.',
    id: 'web-camp',
    imageUrl: 'https://picsum.photos/800/600?random=31',
    slug: 'camp-for-all-kids',
    summary: 'Platform for children’s outreach.',
    tags: ['Web Dev', 'Non-Profit', 'Youth'],
    title: 'Camp for All Kids',
    year: 'Legacy'
  },
  {
    description: 'Development and design for a digital engagement studio’s site.',
    id: 'web-oceanfront',
    imageUrl: 'https://picsum.photos/800/600?random=32',
    slug: 'oceanfront-labs',
    summary: 'Digital engagement studio site.',
    tags: ['Web Dev', 'Design', 'Agency'],
    title: 'OceanFront Labs',
    year: 'Legacy'
  },
  {
    description: 'Non-profit rescue ranch site design and implementation.',
    id: 'web-longmeadow',
    imageUrl: 'https://picsum.photos/800/600?random=33',
    slug: 'longmeadow-ranch',
    summary: 'Non-profit rescue ranch site.',
    tags: ['Web Dev', 'Non-Profit'],
    title: 'Longmeadow Rescue Ranch',
    year: 'Legacy'
  },
  {
    description: 'Developed and integrated arts-focused site experience.',
    id: 'web-cam',
    imageUrl: 'https://picsum.photos/800/600?random=34',
    slug: 'cam-st-louis',
    summary: 'Contemporary Art Museum site.',
    tags: ['Web Dev', 'Arts', 'Culture'],
    title: 'CAM St. Louis',
    year: 'Legacy'
  },
  {
    description: 'Portal and information hub for youth recreation camp (YMCA).',
    id: 'web-lakewood',
    imageUrl: 'https://picsum.photos/800/600?random=35',
    slug: 'camp-lakewood',
    summary: 'Portal for youth recreation camp.',
    tags: ['Web Dev', 'Non-Profit', 'Recreation'],
    title: 'Camp Lakewood',
    year: 'Legacy'
  },
  {
    description: 'Built web presence for a faith-based outreach organization.',
    id: 'web-desire',
    imageUrl: 'https://picsum.photos/800/600?random=36',
    slug: 'desire-street',
    summary: 'Web presence for outreach organization.',
    tags: ['Web Dev', 'Non-Profit'],
    title: 'Desire Street Ministries',
    year: 'Legacy'
  },
  {
    description: 'Developed site for a civic leadership and advocacy group.',
    id: 'web-coro',
    imageUrl: 'https://picsum.photos/800/600?random=37',
    slug: 'coro-leadership',
    summary: 'Site for civic leadership group.',
    tags: ['Web Dev', 'Non-Profit', 'Leadership'],
    title: 'CORO',
    year: 'Legacy'
  },
  {
    description: 'Web platform for youth mentorship and scholarship programs.',
    id: 'web-boyshope',
    imageUrl: 'https://picsum.photos/800/600?random=38',
    slug: 'boys-hope',
    summary: 'Platform for youth mentorship.',
    tags: ['Web Dev', 'Non-Profit', 'Education'],
    title: 'Boys Hope Girls Hope',
    year: 'Legacy'
  },
  {
    description: 'Site development for a franchising association.',
    id: 'web-ogr',
    imageUrl: 'https://picsum.photos/800/600?random=39',
    slug: 'ogr',
    summary: 'Site development for franchising association.',
    tags: ['Web Dev', 'Association'],
    title: 'Intl Order of the Golden Rule',
    year: 'Legacy'
  }
];

/** Initial static data for Blog Posts */
const initialBlogPosts: BlogPost[] = [
  {
    content: `In the rush to deliver features, it is easy to lose sight of the broader ecosystem in which our code lives. Systems Thinking is the discipline of seeing the whole—understanding the interrelationships between parts rather than focusing on the parts themselves.

## The Invisible Interconnections

Every microservice we deploy, every database schema we alter, and every UI component we render exists within a complex web of dependencies. When we optimize for a single metric—say, API response time—without considering the impact on data consistency or user workflow, we often create "local maximums" that degrade the overall system health.

## Feedback Loops

Great systems are built on feedback loops. In engineering, this looks like observability, automated testing, and CI/CD. In product management, it looks like user research and A/B testing. In leadership, it looks like 1:1s and retrospectives.

## Principles over Patches

I have found that the most durable platforms emerge when we define clear operating principles early on. 
- **Consistency vs. Availability:** CAP theorem isn't just for databases; it applies to organizational communication too.
- **Loose Coupling:** Just as we decouple services to prevent cascading failures, we should decouple teams to prevent decision paralysis.

## Conclusion

Systems thinking requires us to step back. It asks us to be architects of flow, not just bricklayers of code. When we design for the system, we build resilience, scalability, and ultimately, a better experience for the humans at the end of the wire.`,
    date: 'Dec 12, 2023',
    excerpt: 'Why research, planning, and execution are the foundation of any great solution.',
    id: '1',
    readTime: '5 min',
    slug: 'systems-thinking',
    tags: ['Systems Thinking', 'Leadership', 'Philosophy'],
    title: 'The Art of Systems Thinking'
  },
  {
    content: `I am often asked how my background in electronic music production influences my work as a CTO. To some, they seem like polar opposites: one is fluid and expressive, the other rigid and logical. To me, they are the same discipline expressed through different mediums.

## Signal Flow is Data Flow

In a synthesizer, an oscillator generates a raw waveform (data source). That signal flows through a filter (transformation), then an envelope (state management), and finally to an amplifier (output). 
Software architecture is identical. We ingest raw data, pipe it through business logic services, manage its state in a store or database, and render it to a UI. Thinking in terms of "signal chain" helps visualize data pipelines and spot bottlenecks intuitively.

## The Mix: Balancing the Spectrum

In music mixing, you cannot have every instrument playing at full volume. You have to carve out frequency space for the bass, the leads, and the vocals. 
Similarly, in product design, you cannot emphasize every feature. If everything is important, nothing is. Visual hierarchy is the "EQ" of web design. We must decide what plays the melody (the primary call to action) and what provides the rhythm (the supporting content).

## Iteration as Performance

Electronic music is often loop-based. You start with a simple pattern and layer complexity over time. This is Agile development. You don't write a symphony from bar 1 to bar 100 in one go. You build a core loop (MVP), test it, refine it, and then arrange it into a full track (Scale).

## Conclusion

Creativity is not the absence of structure; it is the mastery of structure to induce delight. Whether I am patching a modular synth or architecting a cloud-native platform, the goal is the same: to orchestrate a complex system into a harmonious result.`,
    date: 'Nov 05, 2023',
    excerpt: 'How musical composition informs software architecture and product design.',
    id: '2',
    readTime: '7 min',
    slug: 'creativity-code',
    tags: ['Creativity', 'Engineering', 'Design'],
    title: 'Bridging Creativity & Code'
  }
];

/** Initial static data for Career History */
const initialCareer: CareerItem[] = [
  {
    company: 'New Western',
    description: 'Leading the vision and execution of the company’s technology platform — driving innovation in real estate investing through improved accessibility, process efficiency, and digital product experiences. Overseeing modernization of web platforms, API ecosystems, and customer-centric workflows. Driving innovation around process automation, data tooling, and cross-team collaboration.',
    id: 'c1',
    period: 'Present',
    role: 'Chief Technology Officer'
  },
  {
    company: 'Anywhere Real Estate',
    description: 'Led global core engineering teams responsible for foundational services powering all brands. Designed and delivered scalable, multi-tenant core services operating across 119 countries. Championed low-ops / no-ops and serverless architectures to reduce operational overhead.',
    id: 'c2',
    period: 'Previous',
    role: 'Director of Software Engineering'
  },
  {
    company: 'Leafly',
    description: 'Led the Audience Journey team for high-traffic public platforms. Delivered SEO, structured data, performance, and availability improvements.',
    id: 'c3',
    period: 'Previous',
    role: 'Engineering Manager'
  },
  {
    company: 'Zillow Group',
    description: 'Built scalable microservices, real-time systems, and data platforms. Played a key role in Premiere Agent platforms and analytics.',
    id: 'c4',
    period: 'Previous',
    role: 'Senior Software Engineer'
  },
  {
    company: 'Various',
    description: 'Developed deep technical and systems expertise across a breadth of roles including Lead Programmer, Systems Architect, Systems Manager, Software Analyst, and DevOps Engineer. Worked at firms including The GDR Group, AT&T broadband migration teams, jWeb, and 501 Creative partnerships.',
    id: 'c5',
    period: '1999 - 2016',
    role: 'Foundational Roles'
  }
];

/** New Leadership Content */
const initialAboutContent: AboutPageContent = {
  executiveSummary: 'I’m a lifelong technology builder, creative problem solver, and multidisciplinary creator — with roots in software engineering, design, and music that trace back to early personal computing in the 1990’s. My passion for technology started at a very young age with foundational platforms like Basic, QBasic, and Visual Basic, and has evolved into a deep expertise across modern software systems, cloud architecture, data platforms, and scalable digital products. I believe in clarity of purpose, intentional design, and thoughtful execution. Whether I’m designing systems that power millions of users or crafting a visual logo or track in a DAW, my guiding principle is the same: solve complex problems with simple, elegant solutions.',
  functionalExpertise: [
    { category: 'Engineering & Technology', items: ['Full-stack software engineering (PHP, HTML5, JS, SQL)', 'API design & scalable system architecture', 'Cloud-native development & virtualization', 'DevOps, CI/CD, test automation', 'Distributed systems & web services'] },
    { category: 'Product & Design', items: ['UX/UI strategy & visual communication', 'Adobe Creative Suite & 3D rendering', 'Product discovery & user workflows', 'Integration of technology and aesthetics'] },
    { category: 'Leadership & Collaboration', items: ['Cross-functional team leadership', 'Technical strategy alignment', 'Agile & Scrum methodologies', 'Governance & scalable operating systems'] },
    { category: 'Data & Systems Thinking', items: ['Data-driven decision-making models', 'Observability & performance tuning', 'Risk & compliance-aware system design'] },
    { category: 'Creative & Media', items: ['Digital design & branding', 'Photography curation & visual storytelling', 'Music production & sound design', 'Electronic composition'] }
  ],
  leadershipStrengths: [
    { description: 'Driving innovation through improved accessibility, process efficiency, and digital product experiences.', title: 'Visionary Leadership' },
    { description: 'Standardizing engineering practices and delivering solutions that are performant, maintainable, and secure.', title: 'Systems Thinking' },
    { description: 'Blending deep technical expertise with visual design and musical composition.', title: 'Multidisciplinary Creator' },
    { description: 'Overseeing modernization of web platforms, API ecosystems, and customer-centric workflows.', title: 'Modernization Strategy' },
    { description: 'Delivering large-scale solutions that are robust, reliable, and crafted with intentional oversight.', title: 'Execution & Delivery' },
    { description: 'Building and leading technical organizations with a focus on cross-team collaboration.', title: 'Mentorship' }
  ],
  philosophy: 'I believe that research, planning, and execution — combined with clear documentation — are the foundation of any great solution. My work spans Engineering & Architecture, Product & Platform Strategy, Design & Visual Communication, Creative Expression through Music, and Leadership & Systems Thinking.',
  strategicFocus: {
    bullets: [
      'Research & Understanding: Explore every angle and articulate the full landscape of a problem.',
      'Thoughtful Planning: Map out structured, aligned strategies before execution.',
      'Disciplined Execution: Deliver solutions that are robust, reliable, and crafted with intentional oversight.'
    ],
    description: 'Whether writing elegant software or composing music, my approach is rooted in three core phases:',
    title: 'Creative Philosophy'
  },
  valueProposition: 'I’m always excited to collaborate with forward-thinking teams and organizations that value innovation, craftsmanship, and system-level excellence. Whether you’re seeking digital transformation leadership, technical strategy partnership, design thinking expertise, or creative collaboration — let’s connect.'
};

const initialState: ContentState = {
  aboutContent: initialAboutContent,
  blogPosts: initialBlogPosts,
  career: initialCareer,
  loading: false,
  projects: initialProjects,
};

/**
 * Content Slice
 * Handles logic for content retrieval and state updates.
 */
const contentSlice = createSlice({
  initialState,
  name: 'content',
  reducers: {
    /** Sets the global loading state for content */
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setLoading } = contentSlice.actions;
export default contentSlice.reducer;
