import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../store/store';
import GlassCard from '../components/UI/GlassCard';
import { useSEO } from '../hooks/useSEO';

/**
 * Projects Page
 */
const Projects: React.FC = () => {
  const { projects } = useSelector((state: RootState) => state.content);
  const [filter, setFilter] = useState<string>('All');

  useSEO(
    { title: 'Projects', description: 'Selected works, architectural feats, and product launches.' },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": projects.map((p, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "item": {
          "@type": "SoftwareSourceCode",
          "name": p.title,
          "description": p.summary,
          "url": `https://ryanrentfro.com/#/projects/${p.slug}`
        }
      }))
    }
  );

  // Extract unique tags
  const allTags: string[] = ['All', ...Array.from(new Set(projects.flatMap(p => p.tags))) as string[]];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <div className="space-y-10 animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Selected Works</h1>
          <p className="text-white/60">Architectural feats and product launches.</p>
        </div>
        
        {/* Filter Scrollable */}
        <div role="group" aria-label="Project Filter" className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              aria-pressed={filter === tag}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint ${
                filter === tag 
                  ? 'bg-white text-black' 
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link key={project.id} to={`/projects/${project.slug}`} className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded-2xl">
            <GlassCard hoverEffect className="h-full flex flex-col group">
              <div className="mb-4 overflow-hidden rounded-lg relative aspect-video">
                <img 
                  src={project.imageUrl} 
                  alt="" // Decorative image, title serves as label
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
              <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-white/5">
                {project.tags.slice(0, 3).map(tag => (
                  <span key={tag} className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
