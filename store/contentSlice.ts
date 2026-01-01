/**
 * store/contentSlice.ts
 * Manages the static content data for the application including projects,
 * blog posts, and career history. In a full stack app, this would fetch from an API.
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ContentState, Project, BlogPost, CareerItem, AboutPageContent } from '../types';

/** Initial static data for Projects */
const initialProjects: Project[] = [
  // --- 1. CURRENT & EXECUTIVE (FEATURED) ---
  {
    id: 'nw-1',
    title: 'New Western Technology Platform',
    slug: 'new-western-tech',
    summary: 'Modernizing the nation\'s #1 real estate investment marketplace.',
    description: 'Leading the vision and execution of the company’s technology platform as CTO. Driving innovation in real estate investing through improved accessibility, process efficiency, and digital product experiences. Successfully modernized online marketplaces and advanced core capabilities for enterprise-scale growth.',
    tags: ['Executive', 'Platform', 'Real Estate', 'Transformation'],
    year: 'Present',
    imageUrl: 'https://picsum.photos/800/600?random=1',
    featured: true
  },
  {
    id: 'exec-oneteam',
    title: 'One Team Operating Model',
    slug: 'one-team-operating-model',
    summary: 'Unified product operating model consolidating Product, Engineering, Data, Design, and Marketing.',
    description: 'Designed and implemented a unified product operating model consolidating Product, Engineering, Design, BI/Data, and Marketing into a single execution framework. Established shared principles, operating agreements, documentation standards, and outcome-driven workflows to reduce silos and increase delivery velocity.',
    tags: ['Executive', 'Transformation', 'Strategy', 'Leadership', 'Enterprise', 'Operating Model'],
    year: '2024–Present',
    imageUrl: 'https://picsum.photos/800/600?random=101',
    featured: true
  },
  {
    id: 'anywhere-1',
    title: 'Global Core Services Platform',
    slug: 'anywhere-global-core',
    summary: 'Global, multi-brand, multi-tenant platform powering Anywhere Real Estate across 119 countries.',
    description: 'Designed and led foundational core services, APIs, integrations, and QA platforms powering all Anywhere brands, partners, and internal tools. Built scalable, compliant systems operating across 119 countries. Implemented platform-wide GDPR, CCPA, CPRA, and CAN-SPAM compliance capabilities. Designed distributed caching, policy enforcement, and customization frameworks. Established API and service standards enabling consistent scalability and governance. Delivered enterprise observability: logging, tracing, debugging, alerting. Championed serverless and low-ops architectures to reduce operational overhead.',
    tags: ['Enterprise', 'Platform', 'Global', 'Compliance', 'Serverless'],
    year: '2021-2023',
    imageUrl: 'https://picsum.photos/800/600?random=2',
    featured: true
  },

  // --- 2. ENTERPRISE COMPLIANCE & PLATFORM ARCHITECTURE (NEW) ---
  {
    id: 'exec-compliance',
    title: 'Enterprise Compliance Systems',
    slug: 'enterprise-compliance-systems',
    summary: 'GDPR, CCPA, CPRA, and CAN-SPAM compliance systems across global services.',
    description: 'Platform-wide design and implementation of GDPR, CCPA, CPRA, and CAN-SPAM compliance systems across multi-tenant, multi-brand global services. Included data governance, consent management, auditability, and enforcement mechanisms.',
    tags: ['Enterprise', 'Compliance', 'Global', 'Platform', 'Security', 'Privacy'],
    year: '2021–2023',
    imageUrl: 'https://picsum.photos/800/600?random=102',
  },
  {
    id: 'exec-observability',
    title: 'Core Platform Observability',
    slug: 'core-platform-observability',
    summary: 'Enterprise-grade logging, tracing, monitoring, and debugging systems.',
    description: 'Designed and deployed enterprise-grade logging, tracing, monitoring, alerting, and debugging systems supporting distributed microservices at global scale using DataDog and cloud-native tooling.',
    tags: ['Platform', 'Enterprise', 'Reliability', 'Observability', 'Cloud', 'Microservices'],
    year: '2021–2023',
    imageUrl: 'https://picsum.photos/800/600?random=103',
  },
  {
    id: 'arch-api-standards',
    title: 'Core API & Integration Standards',
    slug: 'api-integration-standards',
    summary: 'API standards and service templates for global scalability.',
    description: 'Defined and enforced API standards, service templates, and integration patterns to support global scalability, multi-tenancy, partner ecosystems, and internal developer velocity.',
    tags: ['Platform', 'API', 'Enterprise', 'Global', 'Microservices', 'Governance'],
    year: '2021–2023',
    imageUrl: 'https://picsum.photos/800/600?random=104',
  },
  {
    id: 'arch-serverless',
    title: 'Serverless & Low-Ops Initiative',
    slug: 'serverless-infrastructure',
    summary: 'Adoption of serverless-first and low-operations architectures.',
    description: 'Championed adoption of serverless-first and low-operations architectures, reducing infrastructure complexity, operational burden, and deployment risk while improving scalability and cost efficiency.',
    tags: ['Serverless', 'Cloud', 'AWS', 'Platform', 'Enterprise', 'Innovation'],
    year: '2021–2023',
    imageUrl: 'https://picsum.photos/800/600?random=105',
  },
  {
    id: 'arch-caching',
    title: 'Distributed Caching Framework',
    slug: 'distributed-caching-framework',
    summary: 'Distributed caching layers and policy-driven customization.',
    description: 'Designed distributed caching layers and policy-driven customization frameworks enabling per-brand, per-region behavior across shared services.',
    tags: ['Platform', 'Global', 'Enterprise', 'Performance', 'Architecture'],
    year: '2021–2023',
    imageUrl: 'https://picsum.photos/800/600?random=106',
  },

  // --- 3. PLATFORM & PRODUCT (EXISTING + REFINED) ---
  {
    id: 'anywhere-2',
    title: 'Real-Time Search & Indexing',
    slug: 'anywhere-realtime-search',
    summary: 'Real-time indexing and search frameworks using ElasticSearch and event-driven systems.',
    description: 'Architected real-time indexing and search frameworks using ElasticSearch and event-driven systems. Enabled fast, scalable discovery across listings, brokers, agents, offices, media, and campaign data. Designed distributed services supporting payments, profiles, documents, events, and DAM. Integrated AWS infrastructure using Terraform and cloud-native services.',
    tags: ['Platform', 'Search', 'ElasticSearch', 'AWS'],
    year: '2019-2020',
    imageUrl: 'https://picsum.photos/800/600?random=3'
  },
  {
    id: 'everprep-1',
    title: 'Fintech & EdTech Platforms',
    slug: 'everprep-platforms',
    summary: 'Technical vision, architecture, and roadmaps for Everprep Inc.',
    description: 'Defined technical vision and multi-year roadmaps for fintech and edtech products. Architected core data platforms, services, and APIs. Led vendor integrations and third-party service strategy. Oversaw infrastructure, security, and risk management. Recruited and mentored cross-functional product and engineering teams. Supported market, product, and user research initiatives.',
    tags: ['Startup', 'Fintech', 'EdTech', 'Strategy'],
    year: '2020-Present',
    imageUrl: 'https://picsum.photos/800/600?random=4',
    featured: true
  },
  {
    id: 'leafly-1',
    title: 'Audience Journey Platform',
    slug: 'leafly-audience-journey',
    summary: 'Engineering leadership for high-traffic consumer-facing platforms at Leafly.',
    description: 'Led engineering for high-traffic consumer-facing platforms. Delivered SEO, structured data, performance, and availability improvements. Overhauled faceted search and user interaction tracking. Supported creation of a world-class, data-driven terpene resource. Project-managed the 2019 Leafly brand evolution.',
    tags: ['Consumer', 'Growth', 'SEO', 'Web'],
    year: '2018-2019',
    imageUrl: 'https://picsum.photos/800/600?random=5'
  },
  {
    id: 'zillow-1',
    title: 'Premiere Agent Platform',
    slug: 'zillow-premiere-agent',
    summary: 'Scalable microservices and analytics for Zillow Group.',
    description: 'Built scalable microservices supporting Premiere Agent products. Designed analytics platforms and reporting APIs for sales and BI teams. Implemented real-time communication systems using Twilio (voice, SMS, routing). Led CI/CD, containerization, and cloud deployment pipelines. Achieved and maintained strict SLA and KPI targets. Platform work highlighted by Zillow executives during earnings and media coverage.',
    tags: ['Microservices', 'Analytics', 'Real-time', 'Cloud'],
    year: '2016-2018',
    imageUrl: 'https://picsum.photos/800/600?random=6'
  },
  {
    id: 'data-agent-analytics',
    title: 'Agent Analytics & BI Platform',
    slug: 'agent-analytics-bi',
    summary: 'Microservices powering agent analytics and sales intelligence.',
    description: 'Designed microservices and APIs powering agent analytics, reporting, and sales intelligence used by internal teams and customers at scale.',
    tags: ['Analytics', 'BI', 'Enterprise', 'Microservices', 'Real-time'],
    year: '2016–2018',
    imageUrl: 'https://picsum.photos/800/600?random=107',
  },
  {
    id: 'data-realtime-comms',
    title: 'Real-Time Communications',
    slug: 'realtime-communications-platform',
    summary: 'Integrated Twilio voice, SMS, and routing at scale.',
    description: 'Integrated Twilio voice, SMS, routing, and task workflows at call-center scale, enabling real-time interactions between agents, sales teams, and consumers.',
    tags: ['Real-time', 'Communications', 'Cloud', 'Enterprise', 'Platform'],
    year: '2016–2018',
    imageUrl: 'https://picsum.photos/800/600?random=108',
  },

  // --- 4. ENGINEERING FOUNDATIONS & TOOLING (NEW) ---
  {
    id: 'eng-templates',
    title: 'Core Service Templates',
    slug: 'service-templates-tooling',
    summary: 'Foundational templates and libraries for developer velocity.',
    description: 'Created foundational service templates, libraries, and deployment packages to accelerate new service development and enforce consistency across teams.',
    tags: ['Tooling', 'Platform', 'Developer Experience', 'Microservices'],
    year: '2019–2023',
    imageUrl: 'https://picsum.photos/800/600?random=109',
  },
  {
    id: 'eng-cicd',
    title: 'CI/CD & Deployment Automation',
    slug: 'cicd-automation',
    summary: 'GitLab CI, Docker, ECS, and Terraform pipelines.',
    description: 'Led implementation of GitLab CI, Docker, ECS, Terraform, and automated pipelines for build, test, and deployment across multiple organizations.',
    tags: ['DevOps', 'Automation', 'Cloud', 'Infrastructure'],
    year: '2016–2023',
    imageUrl: 'https://picsum.photos/800/600?random=110',
  },

  // --- 5. CREATIVE & INNOVATION ---
  {
    id: 'zillow-2',
    title: 'Zillow Hack Week Innovation',
    slug: 'zillow-hack-week',
    summary: 'Multiple Judges’ Choice Awards for custom hardware and visualization systems.',
    description: 'Spherez: Non-intrusive visual notification system (Custom hardware + thin client C + backend services Go). ZArcade: Stand-up arcade machine with classic games (Custom hardware, software, and industrial design). ZLeaderboard: Company-wide achievement and leaderboard system (Initial vision, design, and lead development).',
    tags: ['Innovation', 'Hardware', 'Creative', 'Hackathon'],
    year: '2016-2018',
    imageUrl: 'https://picsum.photos/800/600?random=7',
    featured: true
  },
  {
    id: 'creative-hardware',
    title: 'Custom Hardware Experiments',
    slug: 'custom-hardware-embedded',
    summary: 'Embedded systems, thin clients, and backend services.',
    description: 'Built custom hardware projects combining embedded systems, thin clients, and backend services, blending physical computing with cloud platforms.',
    tags: ['Hardware', 'Innovation', 'Embedded', 'Creative'],
    year: '2016–2018',
    imageUrl: 'https://picsum.photos/800/600?random=114',
  },
  {
    id: 'creative-1',
    title: 'Design & Visual Systems',
    slug: 'design-visual-systems',
    summary: 'Professional UI/UX, branding, and digital design projects.',
    description: 'Professional UI/UX, branding, and digital design projects since the late 1990s. Web interfaces, product mockups, promotional graphics, and 3D renders. Tools include Photoshop, Cinema 4D, and modern design workflows.',
    tags: ['Design', 'UI/UX', 'Branding', 'Creative'],
    year: 'Ongoing',
    imageUrl: 'https://picsum.photos/800/600?random=9',
    featured: true
  },
  {
    id: 'creative-2',
    title: 'Music Production',
    slug: 'music-production',
    summary: 'Electronic music production and audio engineering (Malware, Cult of Skaro).',
    description: 'Produced and released multiple electronic music records under aliases Malware and Cult of Skaro. Live performances across the Midwest and West Coast. Custom synthesizer and sound design experimentation. Featured mixes and releases including: "Incoming!", "Release the Beast", "Return to the Jungle", "Interdimensional Time Travel", and "Trapped in the Pyramid".',
    tags: ['Creative', 'Music', 'Audio', 'Production'],
    year: 'Ongoing',
    imageUrl: 'https://picsum.photos/800/600?random=10'
  },
  {
    id: 'creative-audio-tools',
    title: 'Custom Audio Tools',
    slug: 'custom-audio-tools',
    summary: 'Synthesizers, sound design tools, and production workflows.',
    description: 'Development of custom synthesizers, sound design tools, and production workflows used in music releases and live performance.',
    tags: ['Creative', 'Audio', 'Tooling', 'Music', 'Production'],
    year: 'Ongoing',
    imageUrl: 'https://picsum.photos/800/600?random=115',
  },

  // --- 6. WEB APPLICATIONS, OSS, & FOUNDATIONAL ---
  {
    id: 'app-caseaware',
    title: 'CaseAware Legal Platform',
    slug: 'caseaware-platform',
    summary: 'Mission-critical legal case management system.',
    description: 'Contributed application components and service integrations for a mission-critical legal case management system. Supported law firms, banks, corporations, and government agencies. Built SOAP, REST, COM, and XML integrations. Ensured compliance with legal and regulatory standards.',
    tags: ['Web App', 'Enterprise', 'Legal Tech'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=11'
  },
  {
    id: 'app-washu',
    title: 'Wash-U K12 Program',
    slug: 'washu-k12',
    summary: 'Secure educational web application for Washington University.',
    description: 'Designed and built a secure educational web application for K-12 initiatives for Washington University.',
    tags: ['Web App', 'Education', 'Private'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=12'
  },
  {
    id: 'app-accent',
    title: 'Accent International Extranet',
    slug: 'accent-extranet',
    summary: 'Enterprise partner workflow extranet.',
    description: 'Built a private extranet system supporting enterprise partner workflows for Accent International.',
    tags: ['Web App', 'Enterprise', 'B2B'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=13'
  },
  {
    id: 'oss-starfish',
    title: 'Project Starfish',
    slug: 'project-starfish',
    summary: 'Custom PHP5 MVC Framework.',
    description: 'Custom MVC framework showcasing object-oriented design, modularity, event systems, and rapid application tooling — evolving since initial release.',
    tags: ['Open Source', 'Framework', 'PHP'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=14'
  },
  {
    id: 'oss-rss',
    title: 'RSS Button Generator',
    slug: 'rss-generator',
    summary: 'Widely distributed open source RSS utility.',
    description: 'Widely shared RSS utility hosted on Planet Source Code with high community ratings and thousands of downloads. Simplified RSS discovery and syndication for web publishers.',
    tags: ['Open Source', 'Tooling', 'Legacy'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=15'
  },
  
  // --- 7. EARLY CAREER & SYSTEMS WORK (NEW & UPDATED) ---
  {
    id: 'early-gdr',
    title: 'DevOps Modernization',
    slug: 'gdr-devops',
    summary: 'Modernization of development operations and Agile adoption.',
    description: 'Led modernization of development operations including source control, testing frameworks, deployment pipelines, and Agile adoption across multiple client projects at The GDR Group.',
    tags: ['Operations', 'Transformation', 'Leadership', 'Enterprise'],
    year: '2014–2016',
    imageUrl: 'https://picsum.photos/800/600?random=111',
  },
  {
    id: 'early-cms',
    title: 'Custom CMS Migrations',
    slug: 'cms-mvc-migrations',
    summary: 'Migrated legacy systems to modern PHP MVC architectures.',
    description: 'Migrated legacy systems to modern PHP MVC architectures, improving scalability, security, and maintainability for commercial and agency clients.',
    tags: ['Legacy', 'Web Dev', 'Frameworks', 'PHP', 'Modernization'],
    year: '2002–2010',
    imageUrl: 'https://picsum.photos/800/600?random=112',
  },
  {
    id: 'early-infra',
    title: 'Enterprise Network Systems',
    slug: 'enterprise-network-systems',
    summary: 'ISO 9001-certified IT infrastructure and intranet systems.',
    description: 'Managed ISO 9001-certified IT infrastructure, custom intranet systems, and enterprise workstation deployments across multiple locations for Design Systems Inc.',
    tags: ['Infrastructure', 'Systems', 'Networking', 'Enterprise'],
    year: '1999–2001',
    imageUrl: 'https://picsum.photos/800/600?random=113',
  },
  {
    id: 'early-2',
    title: 'AT&T Network Infrastructure',
    slug: 'att-network-migration',
    summary: 'Network migration and internal tools for large-scale operations.',
    description: 'Supported migration of @Home network nodes to ATTBI infrastructure. Built internal tools and integrations for large-scale network operations. Worked with high-speed networking, routing, and optical equipment.',
    tags: ['Infrastructure', 'Networking', 'Legacy'],
    year: 'Early Career',
    imageUrl: 'https://picsum.photos/800/600?random=40'
  },

  // --- 8. PAST WEB DEVELOPMENT & DESIGN (EXISTING) ---
  {
    id: 'web-wyotech',
    title: 'WyoTech',
    slug: 'wyotech',
    summary: 'Web development and design for a technical trade school.',
    description: 'Full website development and design for a technical trade school, focusing on informative structure and user engagement.',
    tags: ['Web Dev', 'Design', 'Education'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=20'
  },
  {
    id: 'web-everest',
    title: 'Everest College',
    slug: 'everest-college',
    summary: 'Multi-site development for North America.',
    description: 'Designed and developed multiple sites for Everest College across North America, ensuring brand consistency and responsive delivery.',
    tags: ['Web Dev', 'Design', 'Education'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=21'
  },
  {
    id: 'web-heald',
    title: 'Heald College',
    slug: 'heald-college',
    summary: 'End-to-end website redesign and development.',
    description: 'End-to-end website redesign and development for a well-known educational institution.',
    tags: ['Web Dev', 'Design', 'Education'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=22'
  },
  {
    id: 'web-firefighters',
    title: 'Aspiring Firefighters',
    slug: 'aspiring-firefighters',
    summary: 'Dual web platforms for career preparation.',
    description: 'Created dual web platforms supporting firefighting career preparation and professional development for Fire Division Chief Paul Lepore.',
    tags: ['Web Dev', 'Niche', 'Professional'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=23'
  },
  {
    id: 'web-littlebrother',
    title: 'Little Brother Ink',
    slug: 'little-brother-ink',
    summary: 'Custom site design for a niche creative brand.',
    description: 'Custom site design and development for a niche creative brand.',
    tags: ['Web Dev', 'Design', 'Creative'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=24'
  },
  {
    id: 'web-parsons',
    title: 'Parsons Blewett',
    slug: 'parsons-blewett',
    summary: 'Website for a cultural institution.',
    description: 'Website development for a St. Louis-based cultural institution with emphasis on visual communication.',
    tags: ['Web Dev', 'Non-Profit', 'Culture'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=25'
  },
  {
    id: 'web-acapulco',
    title: 'Acapulco Screen Printing',
    slug: 'acapulco-printing',
    summary: 'Portfolio site for a local print provider.',
    description: 'Built site to showcase services and portfolio for a local print provider.',
    tags: ['Web Dev', 'Small Business'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=26'
  },
  {
    id: 'web-prime',
    title: 'Prime Fabrication',
    slug: 'prime-fabrication',
    summary: 'Online presence for manufacturing.',
    description: 'Custom online presence for a fabrication and manufacturing business.',
    tags: ['Web Dev', 'Manufacturing'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=27'
  },
  {
    id: 'web-umsl',
    title: 'UMSL Sports',
    slug: 'umsl-sports',
    summary: 'Complete site for university athletics.',
    description: 'Complete site for university athletics, including schedules, rosters, and multimedia integration.',
    tags: ['Web Dev', 'Education', 'Sports'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=28'
  },
  {
    id: 'web-jcrc',
    title: 'JCRC',
    slug: 'jcrc',
    summary: 'Civic and community organization website.',
    description: 'Developed a civic and community organization website with accessible resources and governance content.',
    tags: ['Web Dev', 'Non-Profit', 'Community'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=29'
  },
  {
    id: 'web-humane',
    title: 'Humane Society of Missouri',
    slug: 'humane-society',
    summary: 'Online presence for animal welfare.',
    description: 'Built online presence for a major non-profit animal welfare organization.',
    tags: ['Web Dev', 'Non-Profit'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=30'
  },
  {
    id: 'web-camp',
    title: 'Camp for All Kids',
    slug: 'camp-for-all-kids',
    summary: 'Platform for children’s outreach.',
    description: 'Custom web platform for a children’s outreach and camp organization.',
    tags: ['Web Dev', 'Non-Profit', 'Youth'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=31'
  },
  {
    id: 'web-oceanfront',
    title: 'OceanFront Labs',
    slug: 'oceanfront-labs',
    summary: 'Digital engagement studio site.',
    description: 'Development and design for a digital engagement studio’s site.',
    tags: ['Web Dev', 'Design', 'Agency'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=32'
  },
  {
    id: 'web-longmeadow',
    title: 'Longmeadow Rescue Ranch',
    slug: 'longmeadow-ranch',
    summary: 'Non-profit rescue ranch site.',
    description: 'Non-profit rescue ranch site design and implementation.',
    tags: ['Web Dev', 'Non-Profit'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=33'
  },
  {
    id: 'web-cam',
    title: 'CAM St. Louis',
    slug: 'cam-st-louis',
    summary: 'Contemporary Art Museum site.',
    description: 'Developed and integrated arts-focused site experience.',
    tags: ['Web Dev', 'Arts', 'Culture'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=34'
  },
  {
    id: 'web-lakewood',
    title: 'Camp Lakewood',
    slug: 'camp-lakewood',
    summary: 'Portal for youth recreation camp.',
    description: 'Portal and information hub for youth recreation camp (YMCA).',
    tags: ['Web Dev', 'Non-Profit', 'Recreation'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=35'
  },
  {
    id: 'web-desire',
    title: 'Desire Street Ministries',
    slug: 'desire-street',
    summary: 'Web presence for outreach organization.',
    description: 'Built web presence for a faith-based outreach organization.',
    tags: ['Web Dev', 'Non-Profit'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=36'
  },
  {
    id: 'web-coro',
    title: 'CORO',
    slug: 'coro-leadership',
    summary: 'Site for civic leadership group.',
    description: 'Developed site for a civic leadership and advocacy group.',
    tags: ['Web Dev', 'Non-Profit', 'Leadership'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=37'
  },
  {
    id: 'web-boyshope',
    title: 'Boys Hope Girls Hope',
    slug: 'boys-hope',
    summary: 'Platform for youth mentorship.',
    description: 'Web platform for youth mentorship and scholarship programs.',
    tags: ['Web Dev', 'Non-Profit', 'Education'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=38'
  },
  {
    id: 'web-ogr',
    title: 'Intl Order of the Golden Rule',
    slug: 'ogr',
    summary: 'Site development for franchising association.',
    description: 'Site development for a franchising association.',
    tags: ['Web Dev', 'Association'],
    year: 'Legacy',
    imageUrl: 'https://picsum.photos/800/600?random=39'
  }
];

/** Initial static data for Blog Posts */
const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Systems Thinking',
    slug: 'systems-thinking',
    excerpt: 'Why research, planning, and execution are the foundation of any great solution.',
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
    readTime: '5 min',
    tags: ['Systems Thinking', 'Leadership', 'Philosophy']
  },
  {
    id: '2',
    title: 'Bridging Creativity & Code',
    slug: 'creativity-code',
    excerpt: 'How musical composition informs software architecture and product design.',
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
    readTime: '7 min',
    tags: ['Creativity', 'Engineering', 'Design']
  }
];

/** Initial static data for Career History */
const initialCareer: CareerItem[] = [
  {
    id: 'c1',
    role: 'Chief Technology Officer',
    company: 'New Western',
    period: 'Present',
    description: 'Leading the vision and execution of the company’s technology platform — driving innovation in real estate investing through improved accessibility, process efficiency, and digital product experiences. Overseeing modernization of web platforms, API ecosystems, and customer-centric workflows. Driving innovation around process automation, data tooling, and cross-team collaboration.'
  },
  {
    id: 'c2',
    role: 'Director of Software Engineering',
    company: 'Anywhere Real Estate',
    period: 'Previous',
    description: 'Led global core engineering teams responsible for foundational services powering all brands. Designed and delivered scalable, multi-tenant core services operating across 119 countries. Championed low-ops / no-ops and serverless architectures to reduce operational overhead.'
  },
  {
    id: 'c3',
    role: 'Engineering Manager',
    company: 'Leafly',
    period: 'Previous',
    description: 'Led the Audience Journey team for high-traffic public platforms. Delivered SEO, structured data, performance, and availability improvements.'
  },
  {
    id: 'c4',
    role: 'Senior Software Engineer',
    company: 'Zillow Group',
    period: 'Previous',
    description: 'Built scalable microservices, real-time systems, and data platforms. Played a key role in Premiere Agent platforms and analytics.'
  },
  {
    id: 'c5',
    role: 'Foundational Roles',
    company: 'Various',
    period: '1999 - 2016',
    description: 'Developed deep technical and systems expertise across a breadth of roles including Lead Programmer, Systems Architect, Systems Manager, Software Analyst, and DevOps Engineer. Worked at firms including The GDR Group, AT&T broadband migration teams, jWeb, and 501 Creative partnerships.'
  }
];

/** New Leadership Content */
const initialAboutContent: AboutPageContent = {
  executiveSummary: "I’m a lifelong technology builder, creative problem solver, and multidisciplinary creator — with roots in software engineering, design, and music that trace back to early personal computing in the 1990’s. My passion for technology started at a very young age with foundational platforms like Basic, QBasic, and Visual Basic, and has evolved into a deep expertise across modern software systems, cloud architecture, data platforms, and scalable digital products. I believe in clarity of purpose, intentional design, and thoughtful execution. Whether I’m designing systems that power millions of users or crafting a visual logo or track in a DAW, my guiding principle is the same: solve complex problems with simple, elegant solutions.",
  philosophy: "I believe that research, planning, and execution — combined with clear documentation — are the foundation of any great solution. My work spans Engineering & Architecture, Product & Platform Strategy, Design & Visual Communication, Creative Expression through Music, and Leadership & Systems Thinking.",
  leadershipStrengths: [
    { title: "Visionary Leadership", description: "Driving innovation through improved accessibility, process efficiency, and digital product experiences." },
    { title: "Systems Thinking", description: "Standardizing engineering practices and delivering solutions that are performant, maintainable, and secure." },
    { title: "Multidisciplinary Creator", description: "Blending deep technical expertise with visual design and musical composition." },
    { title: "Modernization Strategy", description: "Overseeing modernization of web platforms, API ecosystems, and customer-centric workflows." },
    { title: "Execution & Delivery", description: "Delivering large-scale solutions that are robust, reliable, and crafted with intentional oversight." },
    { title: "Mentorship", description: "Building and leading technical organizations with a focus on cross-team collaboration." }
  ],
  functionalExpertise: [
    { category: "Engineering & Technology", items: ["Full-stack software engineering (PHP, HTML5, JS, SQL)", "API design & scalable system architecture", "Cloud-native development & virtualization", "DevOps, CI/CD, test automation", "Distributed systems & web services"] },
    { category: "Product & Design", items: ["UX/UI strategy & visual communication", "Adobe Creative Suite & 3D rendering", "Product discovery & user workflows", "Integration of technology and aesthetics"] },
    { category: "Leadership & Collaboration", items: ["Cross-functional team leadership", "Technical strategy alignment", "Agile & Scrum methodologies", "Governance & scalable operating systems"] },
    { category: "Data & Systems Thinking", items: ["Data-driven decision-making models", "Observability & performance tuning", "Risk & compliance-aware system design"] },
    { category: "Creative & Media", items: ["Digital design & branding", "Photography curation & visual storytelling", "Music production & sound design", "Electronic composition"] }
  ],
  strategicFocus: {
    title: "Creative Philosophy",
    description: "Whether writing elegant software or composing music, my approach is rooted in three core phases:",
    bullets: [
      "Research & Understanding: Explore every angle and articulate the full landscape of a problem.",
      "Thoughtful Planning: Map out structured, aligned strategies before execution.",
      "Disciplined Execution: Deliver solutions that are robust, reliable, and crafted with intentional oversight."
    ]
  },
  valueProposition: "I’m always excited to collaborate with forward-thinking teams and organizations that value innovation, craftsmanship, and system-level excellence. Whether you’re seeking digital transformation leadership, technical strategy partnership, design thinking expertise, or creative collaboration — let’s connect."
};

const initialState: ContentState = {
  projects: initialProjects,
  blogPosts: initialBlogPosts,
  career: initialCareer,
  aboutContent: initialAboutContent,
  loading: false,
};

/**
 * Content Slice
 * Handles logic for content retrieval and state updates.
 */
const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    /** Sets the global loading state for content */
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    }
  }
});

export const { setLoading } = contentSlice.actions;
export default contentSlice.reducer;
