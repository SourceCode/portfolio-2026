import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import GlassCard from '../components/UI/GlassCard';
import SEO from '../components/SEO/SEO';

/**
 * SimpleMarkdownRenderer
 */
const SimpleMarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const blocks = content.split('\n\n');

  return (
    <div className="space-y-6 text-lg text-white/80 leading-relaxed font-light">
      {blocks.map((block, index) => {
        if (block.startsWith('## ')) {
          return (
            <h2 key={index} className="text-3xl font-bold text-brand-mint mt-10 mb-4 tracking-tight">
              {block.replace('## ', '')}
            </h2>
          );
        }

        if (block.startsWith('- ')) {
          const items = block.split('\n').filter(line => line.trim().startsWith('- '));
          return (
            <ul key={index} className="list-disc pl-6 space-y-3 my-4 border-l-2 border-white/10 ml-2">
              {items.map((item, i) => {
                const cleanItem = item.replace('- ', '').trim();
                const htmlContent = cleanItem.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
                return (
                  <li key={i} className="pl-2" dangerouslySetInnerHTML={{ __html: htmlContent }} />
                );
              })}
            </ul>
          );
        }

        const parsedBlock = block.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
        return <p key={index} dangerouslySetInnerHTML={{ __html: parsedBlock }} />;
      })}
    </div>
  );
};

/**
 * BlogDetail Page
 */
const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { blogPosts } = useSelector((state: RootState) => state.content);

  const post = blogPosts.find(p => p.slug === slug);

  // useSEO removed

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <article className="max-w-3xl mx-auto space-y-8 animate-fade-in">
      {post && (
        <SEO
          title={post.title}
          description={post.excerpt}
          type="article"
          schema={{
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Person",
              "name": "Ryan Rentfro"
            },
            "datePublished": post.date,
            "articleBody": post.content
          }}
        />
      )}
      {/* Navigation */}
      <nav aria-label="Breadcrumb">
        <Link to="/blog" className="inline-flex items-center text-white/50 hover:text-brand-mint transition-colors group focus:outline-none focus:ring-2 focus:ring-brand-mint rounded px-2 py-1">
          <svg className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Insights
        </Link>
      </nav>

      {/* Article Header */}
      <header className="space-y-6 border-b border-white/10 pb-8">
        <div className="flex flex-wrap gap-3 mb-4">
          {post.tags.map(tag => (
            <span key={tag} className="text-xs font-mono text-brand-teal bg-brand-teal/10 px-2 py-1 rounded border border-brand-teal/20">
              {tag}
            </span>
          ))}
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
          {post.title}
        </h1>
        <div className="flex items-center text-sm text-white/40 font-mono gap-4">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <time>{post.date}</time>
          </span>
          <span className="w-1 h-1 rounded-full bg-white/20" aria-hidden="true"></span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-brand-mint" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            {post.readTime} read
          </span>
        </div>
      </header>

      {/* Article Content */}
      <GlassCard className="p-8 md:p-12">
        <SimpleMarkdownRenderer content={post.content} />
      </GlassCard>

      {/* Footer / CTA */}
      <footer className="pt-8 border-t border-white/10 text-center">
        <p className="text-white/60 mb-6">Enjoyed this perspective? Let's discuss how it applies to your team.</p>
        <Link to="/contact">
          <button className="px-8 py-3 bg-white/5 border border-white/20 hover:bg-brand-mint hover:border-brand-mint hover:text-black rounded-full font-bold transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-brand-mint/50">
            Get in Touch
          </button>
        </Link>
      </footer>
    </article>
  );
};

export default BlogDetail;
