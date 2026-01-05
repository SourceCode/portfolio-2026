import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';
import { RootState } from '../store/store';
import { Project } from '../types';

const categoryOrder = [
  'Current & Executive',
  'Enterprise Compliance & Platform Architecture',
  'Data Strategy & Analytics',
  'Platform & Product',
  'Engineering Foundations & Tooling',
  'Creative & Innovation',
  'Web Applications, OSS & Foundational',
  'Early Career & Systems Work',
  'Past Web Development & Design'
];

/**
 * Projects Page
 */
const Projects: React.FC = () => {
  const { projects } = useSelector((state: RootState) => state.content);

  const groupedProjects = useMemo(() => {
    const groups: Record<string, Project[]> = {};
    projects.forEach(p => {
      const cat = p.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(p);
    });
    return groups;
  }, [projects]);

  return (
    <>
      <SEO
        title="Projects"
        description="Explore a collection of technical projects, from 3D visualizations to enterprise platforms."
        canonical="https://rentfro.net/projects"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ItemList',
          'itemListElement': projects.map((p, index) => ({
            '@type': 'ListItem',
            'item': {
              '@type': 'SoftwareSourceCode',
              'description': p.summary,
              'name': p.title,
              'url': `https://rentfro.net/projects/${p.slug}`
            },
            'position': index + 1
          }))
        }}
      />

      <div className="space-y-10 animate-fade-in">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">Selected Works</h1>
            <p className="text-white/60">Architectural feats and product launches.</p>
          </div>
        </div>

        <div className="space-y-16">
          {categoryOrder.map(category => {
            const categoryProjects = groupedProjects[category];
            if (!categoryProjects?.length) return null;

            return (
              <section key={category} className="space-y-8">
                <h2 className="text-2xl font-bold text-white/90 border-b border-white/10 pb-4">
                  {category}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {categoryProjects.map((project) => (
                    <div key={project.id} className="block h-full focus:outline-none rounded-2xl">
                      <GlassCard hoverEffect className="h-full flex flex-col group">
                        <Link to={`/projects/${project.slug}`} className="contents">
                          <div className="mb-4 overflow-hidden rounded-lg relative aspect-video">
                            <img
                              src={project.imageUrl}
                              alt=""
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-brand-dark/0 transition-colors" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-start mb-2">
                              <span className="text-xs font-mono text-brand-teal">{project.year}</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3 group-hover:text-brand-teal transition-colors">{project.title}</h3>
                            <p className="text-white/60 text-sm leading-relaxed mb-4">
                              {project.summary}
                            </p>
                          </div>
                        </Link>
                        <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5 relative z-10">
                          {project.tags.slice(0, 3).map(tag => (
                            <Link
                              key={tag}
                              to={`/tags/${encodeURIComponent(tag)}`}
                              className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded hover:bg-brand-mint/20 hover:text-brand-mint transition-colors"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      </GlassCard>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
