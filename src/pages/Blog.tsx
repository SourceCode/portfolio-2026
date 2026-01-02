import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';
import { RootState } from '../store/store';

/**
 * Blog Page
 */
const Blog: React.FC = () => {
  const { blogPosts } = useSelector((state: RootState) => state.content);

  return (
    <>
      <SEO
        title="Insights"
        description="Thoughts on engineering, leadership, and the future of tech."
        canonical="https://rentfro.net/blog"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          'blogPost': blogPosts.map(post => ({
            '@type': 'BlogPosting',
            'datePublished': post.date,
            'description': post.excerpt,
            'headline': post.title,
            'url': `https://rentfro.net/blog/${post.slug}`
          })),
          'name': 'Ryan Rentfro\'s Insights'
        }}
      />
      <div className="max-w-3xl mx-auto space-y-12 animate-fade-in">
        <header className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Insights</h1>
          <p className="text-white/60">Thoughts on engineering, leadership, and the future of tech.</p>
        </header>

        <div className="space-y-6">
          {blogPosts.map((post) => (
            <Link key={post.id} to={`/blog/${post.slug}`} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded-2xl">
              <GlassCard hoverEffect className="group">
                <article className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 text-xs font-mono text-white/40 mb-3">
                      <time className="text-brand-mint">{post.date}</time>
                      <span aria-hidden="true">•</span>
                      <span>{post.readTime} read</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-brand-teal transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-white/70 leading-relaxed">
                      {post.excerpt}
                    </p>
                    <div className="flex gap-2 mt-4">
                      {post.tags.map(tag => (
                        <span key={tag} className="text-xs border border-white/10 px-2 py-0.5 rounded text-white/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </GlassCard>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
