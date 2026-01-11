import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';
import { RootState } from '../store/store';

/**
 * Insights Page
 * 
 * Aggregates Blog Posts, Expertise Deep Dives, and Working Style philosophy.
 */
const Insights: React.FC = () => {
  const { blogPosts } = useSelector((state: RootState) => state.content);

  // Define Expertise Areas for display
  const expertiseAreas = useMemo(() => [
    {
      category: 'Strategic Leadership',
      items: [
        { path: '/expertise/strategic-leadership', title: 'Strategic Leadership' },
        { path: '/expertise/empowered-teams', title: 'Empowered Teams' },
        { path: '/expertise/shared-understanding', title: 'Shared Understanding' },
        { path: '/expertise/better-morale', title: 'Better Morale' },
        { path: '/expertise/culture-of-mastery', title: 'Culture of Mastery' },
      ]
    },
    {
      category: 'Platform & Architecture',
      items: [
        { path: '/expertise/platform-architecture', title: 'Platform Architecture' },
        { path: '/expertise/cloud-architecture', title: 'Cloud Architecture' },
        { path: '/expertise/immutable-infrastructure', title: 'Immutable Infrastructure' },
        { path: '/expertise/systems-infrastructure', title: 'Systems Infrastructure' },
        { path: '/expertise/event-sourcing', title: 'Event Sourcing' },
        { path: '/expertise/cdc-pipelines', title: 'CDC Pipelines' },
        { path: '/expertise/data-mesh', title: 'Data Mesh' },
        { path: '/expertise/observability', title: 'Observability' },
      ]
    },
    {
      category: 'Security & Governance',
      items: [
        { path: '/expertise/zero-trust', title: 'Zero Trust' },
        { path: '/expertise/policy-as-code', title: 'Policy As Code' },
        { path: '/expertise/system-documentation', title: 'System Documentation' },
        { path: '/expertise/technical-rfcs', title: 'Technical RFCs' },
      ]
    },
    {
      category: 'Product & Engineering',
      items: [
        { path: '/expertise/product-engineering', title: 'Product Engineering' },
        { path: '/expertise/modern-frontend', title: 'Modern Simple Frontend' },
        { path: '/expertise/design-systems', title: 'Design Systems' },
        { path: '/expertise/design-tokens', title: 'Design Tokens' },
        { path: '/expertise/component-library', title: 'Component Library' },
        { path: '/expertise/data-driven-ux', title: 'Data-Driven UX' },
        { path: '/expertise/product-trios', title: 'Product Trios' },
        { path: '/expertise/faster-discovery', title: 'Faster Discovery' },
        { path: '/expertise/dora-metrics', title: 'DORA Metrics' },
      ]
    }
  ], []);

  const workingStyleLinks = [
    { desc: 'How I operate (INTJ Architect).', path: '/about/working-style', title: 'My Working Style' },
    { desc: 'Rational decision making in engineering.', path: '/about/working-style/logic-over-emotion', title: 'Logic Over Emotion' },
    { desc: 'Why writing things down scales leadership.', path: '/about/working-style/written-culture', title: 'Written Culture' },
    { desc: 'Protecting focus for complex problem solving.', path: '/about/working-style/deep-work', title: 'Deep Work' },
  ];


  return (
    <>
      <SEO
        title="Insights & Expertise"
        description="Deep dives into engineering leadership, platform architecture, and my working philosophy."
        canonical="https://rentfro.net/insights"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'blogPost': blogPosts.map(post => ({
            '@type': 'BlogPosting',
            'datePublished': post.date,
            'description': post.excerpt,
            'headline': post.title,
            'url': `https://rentfro.net/insights/${post.slug}`
          })),
          'name': 'Ryan Rentfro\'s Insights'
        }}
      />
      <div className="max-w-6xl mx-auto space-y-20 animate-fade-in mb-20">

        {/* Header */}
        <header className="text-center md:text-left max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights & Expertise</h1>
          <p className="text-white/60 text-xl leading-relaxed">
            A collection of thoughts on engineering strategy, system architecture, and leadership philosophy.
          </p>
        </header>

        {/* 1. Blog Posts Section */}
        <section aria-labelledby="latest-thinking">
          <h2 id="latest-thinking" className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-mint rounded-full"></span>
            Latest Thinking
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Link key={post.id} to={`/insights/${post.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded-2xl h-full">
                <GlassCard hoverEffect className="group h-full flex flex-col">
                  <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-3">
                    <time className="text-brand-mint">{post.date}</time>
                    <span aria-hidden="true">•</span>
                    <span>{post.readTime} read</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-teal transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs border border-white/10 px-2 py-0.5 rounded text-white/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

        {/* 2. Expertise Deep Dives */}
        <section aria-labelledby="expertise-areas">
          <h2 id="expertise-areas" className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-teal rounded-full"></span>
            Expertise Deep Dives
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {expertiseAreas.map((area, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-lg font-bold text-white/90 border-b border-white/10 pb-2">{area.category}</h3>
                <ul className="space-y-2">
                  {area.items.map((item, i) => (
                    <li key={i}>
                      <Link
                        to={item.path}
                        className="block text-white/60 hover:text-brand-mint transition-colors text-sm py-1 hover:translate-x-1 duration-200"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Working Philosophy */}
        <section aria-labelledby="philosophy">
          <h2 id="philosophy" className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-1 bg-white/50 rounded-full"></span>
            Working Philosophy
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {workingStyleLinks.map((link, idx) => (
              <Link key={idx} to={link.path} className="block group">
                <GlassCard hoverEffect className="h-full flex flex-col justify-center">
                  <h3 className="text-lg font-bold text-white group-hover:text-brand-mint transition-colors mb-2">
                    {link.title}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {link.desc}
                  </p>
                </GlassCard>
              </Link>
            ))}
          </div>
        </section>

      </div>
    </>
  );
};

export default Insights;
