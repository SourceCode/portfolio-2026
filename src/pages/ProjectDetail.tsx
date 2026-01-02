import React from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';
import { RootState } from '../store/store';

/**
 * ProjectDetail Page
 */
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { projects } = useSelector((state: RootState) => state.content);

  const project = projects.find(p => p.slug === slug);

  // Replace useSEO hook with SEO component in JSX
  /* useSEO hook removed */

  if (!project) {
    return <Navigate to="/projects" />;
  }

  return (
    <article className="max-w-4xl mx-auto space-y-12 animate-fade-in">
      {project && (
        <SEO
          title={project.title}
          description={project.summary}
          image={project.imageUrl}
          type="article"
          name="Ryan Rentfro"
          schema={{
            '@context': 'https://schema.org',
            '@type': 'SoftwareSourceCode',
            'author': {
              '@type': 'Person',
              'name': 'Ryan Rentfro'
            },
            'description': project.description,
            'name': project.title,
            'programmingLanguage': project.tags
          }}
        />
      )}
      <nav aria-label="Breadcrumb">
        <Link to="/projects" className="inline-flex items-center text-white/50 hover:text-brand-mint transition-colors focus:outline-none focus:ring-2 focus:ring-brand-mint rounded px-2 py-1">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          Back to Projects
        </Link>
      </nav>

      {/* Header */}
      <header className="space-y-6">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-brand-teal">{project.title}</h1>
        <div className="flex flex-wrap gap-4 text-sm text-brand-teal font-mono">
          {project.tags.map(tag => <span key={tag} className="bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">#{tag}</span>)}
          <span className="ml-auto text-white/40">{project.year}</span>
        </div>
      </header>

      {/* Main Image */}
      <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
        <img src={project.imageUrl} alt={`Overview of ${project.title}`} className="w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" loading="eager" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Content */}
        <div className="md:col-span-2 space-y-8">
          <GlassCard>
            <h2 className="text-xl font-bold mb-4 text-brand-mint">The Challenge</h2>
            <p className="text-white/80 leading-relaxed">{project.summary}</p>
          </GlassCard>

          <GlassCard>
            <h2 className="text-xl font-bold mb-4 text-brand-teal">The Approach</h2>
            <p className="text-white/80 leading-relaxed">{project.description}</p>
            <p className="text-white/80 leading-relaxed mt-4">
              Detailed technical implementation details typically go here. Describing architecture decisions,
              trade-offs, and technologies used (e.g., React, Node, AWS, etc).
            </p>
          </GlassCard>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <div className="bg-brand-slate/50 backdrop-blur-sm border border-white/10 p-6 rounded-xl">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-4">Tech Stack</h3>
            <ul className="space-y-2">
              {['React', 'TypeScript', 'Node.js', 'AWS Lambda'].map(tech => (
                <li key={tech} className="flex items-center text-white/90">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-mint mr-2 shadow-[0_0_5px_rgba(0,255,163,0.5)]" aria-hidden="true"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>

          <button className="w-full py-3 bg-white text-black font-bold rounded-lg hover:bg-brand-mint hover:scale-[1.02] transition-all focus:outline-none focus:ring-4 focus:ring-brand-mint/50">
            View Live Demo
          </button>
        </aside>
      </div>
    </article>
  );
};

export default ProjectDetail;
