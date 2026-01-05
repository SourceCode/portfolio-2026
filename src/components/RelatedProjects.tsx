import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { RootState } from '../store/store';
import GlassCard from './UI/GlassCard';

interface RelatedProjectsProps {
    className?: string;
    tags: string[];
    title?: string;
}

const RelatedProjects: React.FC<RelatedProjectsProps> = ({
    className = '',
    tags,
    title = 'Related Projects'
}) => {
    const { projects } = useSelector((state: RootState) => state.content);

    // Filter projects that have at least one matching tag
    const relatedProjects = projects.filter(p =>
        p.tags.some(t => tags.includes(t))
    ).slice(0, 3);

    if (relatedProjects.length === 0) return null;

    return (
        <section className={`space-y-8 ${className}`}>
            <h2 className="text-3xl font-bold text-white/90 border-b border-white/10 pb-4">
                {title}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {relatedProjects.map((project) => (
                    <Link key={project.id} to={`/projects/${project.slug}`} className="block h-full group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded-2xl">
                        <GlassCard hoverEffect className="h-full flex flex-col">
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
                                <h3 className="text-xl font-bold mb-2 group-hover:text-brand-teal transition-colors">{project.title}</h3>
                                <p className="text-white/60 text-sm leading-relaxed mb-4 line-clamp-3">
                                    {project.summary}
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/5">
                                {project.tags.slice(0, 3).map(tag => (
                                    <Link
                                        key={tag}
                                        to={`/tags/${encodeURIComponent(tag)}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="text-xs text-white/40 bg-white/5 px-2 py-1 rounded hover:bg-brand-mint/20 hover:text-brand-mint transition-colors relative z-10"
                                    >
                                        {tag}
                                    </Link>
                                ))}
                            </div>
                        </GlassCard>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RelatedProjects;
