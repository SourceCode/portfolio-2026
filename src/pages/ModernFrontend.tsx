import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const ModernFrontend: React.FC = () => {
    return (
        <>
            <SEO
                title="Modern Frontend Architecture | Ryan Rentfro"
                description="Expertise in Next.js, React, TypeScript, and TailwindCSS to build interfaces that are performant, responsive, and maintainable."
                canonical="https://rentfro.net/expertise/modern-frontend"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Modern Frontend Architecture</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Expertise in Next.js, React, TypeScript, and TailwindCSS to build interfaces that are performant, responsive, and maintainable.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Performance-First Engineering</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            The modern web is complex, but the user experience shouldn't be. I advocate for architectures that prioritize Core Web Vitals (LCP, CLS, FID) from day one. Using tools like Next.js for server-side rendering and static generation allows us to deliver content instantly while maintaining the interactivity of single-page applications.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Maintainability is equally critical. I enforce strict TypeScript typing, composable logic via custom hooks, and functional programming patterns to ensure that the codebase remains clean and scalable as the team grows.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">Core Stack</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <div className="font-bold text-brand-mint">React / Next.js</div>
                                <div className="text-sm text-white/70">Component Architecture</div>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-brand-mint">TypeScript</div>
                                <div className="text-sm text-white/70">Type Safety & Reliability</div>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-brand-mint">TailwindCSS</div>
                                <div className="text-sm text-white/70">Utility-First Styling</div>
                            </div>
                            <div className="space-y-2">
                                <div className="font-bold text-brand-mint">State Management</div>
                                <div className="text-sm text-white/70">Redux / Context / Query</div>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Case Study: Leafly */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Case Study: Modernizing High-Scale Search</h2>
                    <GlassCard className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Leafly Search Experience</h3>
                                <p className="text-white/70 leading-relaxed">
                                    At Leafly, we rebuilt the strain discovery experience using a headless architecture. We moved from a legacy monolithic frontend to a decoupled React application backed by a high-performance search API.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4 pt-4 border-t border-white/10">
                            <div>
                                <h4 className="font-bold text-white mb-1">Challenge</h4>
                                <p className="text-sm text-white/60">Legacy SEO debt, slow page loads, and poor mobile experience impacting conversion.</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">Solution</h4>
                                <p className="text-sm text-white/60">Implemented SSR for SEO critical paths, lazy-loading for heavy assets, and a responsive component system.</p>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Frontend', 'React', 'Architecture', 'UX']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/product-engineering" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Product Engineering
                    </Link>
                </div>

            </article>
        </>
    );
};

export default ModernFrontend;
