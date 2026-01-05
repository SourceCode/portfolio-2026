import { ArrowLeft, Calendar, ExternalLink, Github, Globe, Linkedin, Tag, Youtube } from 'lucide-react';
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useParams } from 'react-router-dom';

import ProjectRadarChart from '../components/ProjectRadarChart';
import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';
import { RootState } from '../store/store';

/**
 * Helper component to render rich text content with basic formatting detection
 */
const RichTextRenderer: React.FC<{ content: string }> = ({ content }) => {
  const sections = useMemo(() => {
    // Split by double newlines to find potential sections
    const rawSegments = content.split('\n\n');

    return rawSegments.map((segment, index) => {
      // Check for bullet points
      if (segment.trim().startsWith('•') || segment.trim().startsWith('- ')) {
        const items = segment.split('\n').map(item => item.replace(/^[•-]\s*/, '').trim()).filter(Boolean);
        return <ul key={index} className="list-disc list-inside space-y-2 ml-4 text-white/80">{items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
      }

      // Check for headers (short lines without end punctuation, generally)
      const lines = segment.split('\n');
      const isHeaderCandidate = (line: string) => line.length < 80 && !line.endsWith('.') && !line.endsWith(':') && line.trim().length > 0;

      if (isHeaderCandidate(lines[0])) {
        if (lines.length === 1) {
          // Standalone header segment
          return <h3 key={index} className="text-xl font-bold text-brand-mint mt-8 mb-4">{lines[0]}</h3>;
        }
        // Header integral with paragraph
        return (
          <div key={index} className="space-y-4">
            <h3 className="text-xl font-bold text-brand-mint mt-6 mb-3">{lines[0]}</h3>
            {lines.slice(1).map((line, i) => (
              <p key={i} className="text-white/80 leading-relaxed">{line}</p>
            ))}
          </div>
        );
      }

      // Default paragraph
      return <p key={index} className="text-white/80 leading-relaxed whitespace-pre-line">{segment}</p>;
    });
  }, [content]);

  return <div className="space-y-6">{sections}</div>;
};

/**
 * ProjectDetail Page
 */
const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { aboutContent, projects } = useSelector((state: RootState) => state.content);

  const project = projects.find(p => p.slug === slug);

  // Helper to check intersection
  const hasIntersection = (tags1?: string[], tags2?: string[]) => {
    if (!tags1 || !tags2) return false;
    return tags1.some(t => tags2.includes(t));
  };

  const relatedLeadership = project ? aboutContent.leadershipStrengths.filter(l => hasIntersection(l.relatedTags, project.tags)) : [];
  const relatedExpertise = project ? aboutContent.functionalExpertise.filter(e => hasIntersection(e.relatedTags, project.tags)) : [];

  if (!project) {
    return <Navigate to="/projects" />;
  }

  return (
    <article className="min-h-screen animate-fade-in pb-24">
      <SEO
        title={project.title}
        description={project.summary}
        image={project.imageUrl}
        type="article"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareSourceCode',
          'author': {
            '@type': 'Person',
            'name': 'Ryan Rentfro'
          },
          'description': project.description,
          'name': project.title,
          'programmingLanguage': project.tags,
          'url': window.location.href
        }}
      />

      {/* Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8" aria-label="Breadcrumb">
        <Link
          to="/projects"
          className="group inline-flex items-center text-white/50 hover:text-brand-mint transition-colors focus:outline-none"
        >
          <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center mr-3 group-hover:bg-brand-mint/10 transition-colors">
            <ArrowLeft className="w-4 h-4" />
          </div>
          <span className="font-medium">Back to Projects</span>
        </Link>
      </nav>

      {/* Hero Section */}
      <header className="max-w-7xl mx-auto px-6 mb-16 space-y-8">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-4 text-brand-teal font-mono text-sm">
            <span className="flex items-center bg-brand-teal/10 px-3 py-1 rounded-full border border-brand-teal/20">
              <Calendar className="w-3.5 h-3.5 mr-2" />
              {project.year}
            </span>
            {project.tags.slice(0, 3).map(tag => (
              <span key={tag} className="flex items-center bg-white/5 px-3 py-1 rounded-full border border-white/10 text-white/60">
                <Tag className="w-3.5 h-3.5 mr-2" />
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-brand-teal/50">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
            {project.summary}
          </p>
        </div>
      </header>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left Column: Main Image & Content */}
        <main className="lg:col-span-8 space-y-12">
          {/* Hero Image */}
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl aspect-video group">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60 z-10" />
            <img
              src={project.imageUrl}
              alt={`Overview of ${project.title}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="eager"
            />
          </div>

          {/* Deep Dive Content */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold flex items-center">
              <span className="w-8 h-1 bg-brand-mint rounded-full mr-4"></span>
              Project Deep Dive
            </h2>
            <div className="prose prose-invert max-w-none">
              <GlassCard className="p-8 md:p-10">
                <RichTextRenderer content={project.description} />
              </GlassCard>
            </div>
          </section>
        </main>

        {/* Right Column: Sidebar */}
        <aside className="lg:col-span-4 space-y-8">

          {/* Connect / Links */}
          {project.links && Object.values(project.links).some(Boolean) && (
            <GlassCard className="p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6 flex items-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Project Links
              </h3>
              <div className="space-y-3">
                {project.links.web && (
                  <a href={project.links.web} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-brand-mint/10 hover:text-brand-mint transition-all group">
                    <Globe className="w-5 h-5 mr-3 text-white/60 group-hover:text-brand-mint" />
                    <span className="font-medium">Live Website</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-brand-mint/10 hover:text-brand-mint transition-all group">
                    <Github className="w-5 h-5 mr-3 text-white/60 group-hover:text-brand-mint" />
                    <span className="font-medium">Source Code</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {project.links.youtube && (
                  <a href={project.links.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-red-500/10 hover:text-red-400 transition-all group">
                    <Youtube className="w-5 h-5 mr-3 text-white/60 group-hover:text-red-400" />
                    <span className="font-medium">Video Demo</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
                {project.links.linkedin && (
                  <a href={project.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-3 rounded-lg bg-white/5 hover:bg-blue-500/10 hover:text-blue-400 transition-all group">
                    <Linkedin className="w-5 h-5 mr-3 text-white/60 group-hover:text-blue-400" />
                    <span className="font-medium">Case Study</span>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                )}
              </div>
            </GlassCard>
          )}

          {project.metrics && (
            <GlassCard className="p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-2">Dimensions</h3>
              <div className="-ml-4 relative">
                <ProjectRadarChart metrics={project.metrics} />
              </div>
            </GlassCard>
          )}

          {/* Tech Stack */}
          <GlassCard className="p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <Link
                  key={tag}
                  to={`/tags/${encodeURIComponent(tag)}`}
                  className="px-3 py-1.5 rounded-md bg-brand-slate/50 border border-white/10 text-sm hover:border-brand-mint/30 hover:text-brand-mint transition-colors"
                >
                  {tag}
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Related Expertise */}
          {(relatedLeadership.length > 0 || relatedExpertise.length > 0) && (
            <GlassCard className="p-6">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/40 mb-6">Related Expertise</h3>

              {relatedLeadership.length > 0 && (
                <div className="mb-6 space-y-3">
                  <p className="text-xs text-brand-teal uppercase font-bold">Leadership Areas</p>
                  <ul className="space-y-2">
                    {relatedLeadership.map((item, idx) => (
                      <li key={idx}>
                        <Link to="/about" className="block p-2 rounded bg-white/5 hover:bg-brand-mint/10 border border-white/5 hover:border-brand-mint/30 transition-all group">
                          <span className="text-sm font-medium text-white/80 group-hover:text-brand-mint block">{item.title}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {relatedExpertise.length > 0 && (
                <div className="space-y-3">
                  <p className="text-xs text-brand-teal uppercase font-bold">Functional Domains</p>
                  <ul className="space-y-2">
                    {relatedExpertise.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-white/70">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-mint/50 mr-2"></span>
                        {item.category}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </GlassCard>
          )}

          {/* Optional: Add "More Projects" or similar navigation here if needed in future */}
        </aside>

      </div>
    </article>
  );
};

export default ProjectDetail;
