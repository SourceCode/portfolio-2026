import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';
import { ContentItem, staticContent } from '../data/appContent';
import { RootState } from '../store/store';
import { Project } from '../types';

const TagDetail: React.FC = () => {
    const { tagId } = useParams<{ tagId: string }>();
    const decodedTag = decodeURIComponent(tagId || '');

    const { projects: allProjects } = useSelector((state: RootState) => state.content);

    // Filter Content
    const { expertise, projects, workingStyle } = useMemo(() => {
        const lowerTag = decodedTag.toLowerCase();

        const filteredProjects = allProjects.filter((p: Project) =>
            p.tags.some(t => t.toLowerCase() === lowerTag)
        );

        const filteredStatic = staticContent.filter((item: ContentItem) =>
            item.tags.some(t => t.toLowerCase() === lowerTag)
        );

        return {
            expertise: filteredStatic.filter(i => i.category === 'Expertise'),
            projects: filteredProjects,
            workingStyle: filteredStatic.filter(i => i.category === 'Working Style')
        };
    }, [decodedTag, allProjects]);

    const hasResults = projects.length > 0 || expertise.length > 0 || workingStyle.length > 0;

    return (
        <>
            <SEO
                title={`${decodedTag} | Tag | Ryan Rentfro`}
                description={`Content tagged with "${decodedTag}" - Projects, Expertise, and Working Style.`}
                canonical={`https://rentfro.net/tags/${tagId}`}
            />
            <article className="animate-fade-in space-y-12">
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-violet rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4 pt-8 capitalize">
                        Tag: <span className="text-brand-violet">{decodedTag}</span>
                    </h1>
                    <p className="text-xl text-white/70 font-light">
                        {hasResults
                            ? `Found ${projects.length + expertise.length + workingStyle.length} results.`
                            : 'No content found for this tag.'}
                    </p>
                </section>

                {!hasResults && (
                    <div className="py-12 text-center text-white/50">
                        <Link to="/" className="text-brand-mint hover:underline">Return Home</Link>
                    </div>
                )}

                {/* Expertise Section */}
                {expertise.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="text-brand-blue mr-3">●</span>
                            Expertise
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {expertise.map(item => (
                                <div key={item.id} className="block h-full group">
                                    <GlassCard hoverEffect className="h-full flex flex-col">
                                        <Link to={item.path} className="flex-grow p-6 pb-0 block">
                                            <h3 className="text-xl font-bold text-white group-hover:text-brand-mint transition-colors mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-white/70 mb-4">
                                                {item.summary}
                                            </p>
                                        </Link>
                                        <div className="flex flex-wrap gap-2 mt-auto p-6 pt-0">
                                            {item.tags.slice(0, 3).map(t => (
                                                <Link
                                                    key={t}
                                                    to={`/tags/${encodeURIComponent(t)}`}
                                                    className="text-xs bg-white/5 px-2 py-1 rounded text-white/50 hover:bg-brand-mint/20 hover:text-brand-mint transition-colors relative z-10"
                                                >
                                                    {t}
                                                </Link>
                                            ))}
                                            {item.tags.length > 3 && (
                                                <span className="text-xs text-white/30 px-2 py-1">+{item.tags.length - 3}</span>
                                            )}
                                        </div>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects Section */}
                {projects.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="text-brand-violet mr-3">●</span>
                            Projects
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map((project: Project) => (
                                <div key={project.id} className="block h-full group">
                                    <GlassCard hoverEffect className="h-full p-0 overflow-hidden flex flex-col">
                                        <Link to={`/projects/${project.slug}`} className="contents">
                                            <div className="h-48 overflow-hidden relative">
                                                <img
                                                    src={project.imageUrl || '/placeholders/project-placeholder.jpg'}
                                                    alt={project.title}
                                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60"></div>
                                            </div>
                                            <div className="p-6 pb-2 flex flex-col flex-grow">
                                                <h3 className="text-xl font-bold text-white group-hover:text-brand-violet transition-colors mb-2">
                                                    {project.title}
                                                </h3>
                                                <p className="text-sm text-white/70 mb-4 flex-grow line-clamp-3">
                                                    {project.summary}
                                                </p>
                                            </div>
                                        </Link>
                                        <div className="flex flex-wrap gap-2 mt-auto p-6 pt-0">
                                            {project.tags.slice(0, 3).map((t: string) => (
                                                <Link
                                                    key={t}
                                                    to={`/tags/${encodeURIComponent(t)}`}
                                                    className="text-xs bg-white/10 px-2 py-1 rounded text-brand-violet hover:bg-brand-violet/20 transition-colors relative z-10"
                                                >
                                                    {t}
                                                </Link>
                                            ))}
                                        </div>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Working Style Section */}
                {workingStyle.length > 0 && (
                    <section>
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <span className="text-brand-mint mr-3">●</span>
                            Working Style
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {workingStyle.map(item => (
                                <div key={item.id} className="block h-full group">
                                    <GlassCard hoverEffect className="h-full flex flex-col">
                                        <Link to={item.path} className="flex-grow p-6 pb-0 block">
                                            <h3 className="text-xl font-bold text-white group-hover:text-brand-mint transition-colors mb-3">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-white/70 mb-4">
                                                {item.summary}
                                            </p>
                                        </Link>
                                        <div className="flex flex-wrap gap-2 mt-auto p-6 pt-0">
                                            {item.tags.map(t => (
                                                <Link
                                                    key={t}
                                                    to={`/tags/${encodeURIComponent(t)}`}
                                                    className="text-xs bg-white/5 px-2 py-1 rounded text-white/50 hover:bg-brand-mint/20 hover:text-brand-mint transition-colors relative z-10"
                                                >
                                                    {t}
                                                </Link>
                                            ))}
                                        </div>
                                    </GlassCard>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </>
    );
};

export default TagDetail;
