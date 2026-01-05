import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const DesignSystems: React.FC = () => {
    return (
        <>
            <SEO
                title="Design Systems | Ryan Rentfro"
                description="Building shared component libraries that ensure consistency, accelerate development, and bridge the gap between design and engineering."
                canonical="https://rentfro.net/expertise/design-systems"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Design Systems</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Building shared component libraries that ensure consistency, accelerate development, and bridge the gap between Figma and React.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Systematizing Creativity</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            A design system is more than just a UI kit; it is the shared language of a product organization. By defining tokens, primitives, and composite patterns, we eliminate the repetitive "pixel-pushing" and allow teams to focus on solving unique user problems.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I treat Design Systems as internal products. They require documentation, versioning, and developer advocacy to be successful. My approach bridges the gap between design tools (Figma) and code (React/TypeScript), ensuring a single source of truth.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">The "Paved Road" Benefits</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">✓</span>
                                <span className="text-white/80">Accelerated Velocity</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">✓</span>
                                <span className="text-white/80">Visual Consistency</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">✓</span>
                                <span className="text-white/80">Accessibility Out-of-the-Box</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">✓</span>
                                <span className="text-white/80">Reduced Tech Debt</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Technical Strategy */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Implementation Strategy</h2>
                    <GlassCard className="p-8 md:p-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <Link to="/expertise/design-tokens" className="block group">
                                <div className="h-full">
                                    <h3 className="text-xl font-bold text-brand-mint mb-3 group-hover:text-white transition-colors flex items-center">
                                        Design Tokens
                                        <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Defining the atomic units of style (colors, typography, spacing, semantic intent) in a format that can be consumed by web, iOS, and Android platforms.
                                    </p>
                                </div>
                            </Link>

                            <Link to="/expertise/component-library" className="block group">
                                <div className="h-full">
                                    <h3 className="text-xl font-bold text-brand-violet mb-3 group-hover:text-white transition-colors flex items-center">
                                        Component Library
                                        <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Building accessible, strongly-typed React components. Utilizing systematic composition to allow flexibility without breaking the brand guidelines.
                                    </p>
                                </div>
                            </Link>

                            <Link to="/expertise/system-documentation" className="block group">
                                <div className="h-full">
                                    <h3 className="text-xl font-bold text-brand-blue mb-3 group-hover:text-white transition-colors flex items-center">
                                        Documentation
                                        <svg className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </h3>
                                    <p className="text-white/70 text-sm leading-relaxed">
                                        Interactive storybooks (Storybook/Styleguidist) that serve as live documentation for developers and designers alike, reducing onboarding time.
                                    </p>
                                </div>
                            </Link>
                        </div>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Design System', 'UI', 'Frontend', 'React', 'UX']} />

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

export default DesignSystems;
