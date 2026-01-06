import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const ComponentLibrary: React.FC = () => {
    return (
        <>
            <SEO
                title="Component Library | Ryan Rentfro"
                description="Building accessible, strongly-typed React components that enforce brand guidelines while allowing flexibility."
                canonical="https://rentfro.net/expertise/component-library"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-violet rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Component Library</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        The LEGO bricks of your digital product. Accessible, consistent, and strongly-typed to accelerate specialized feature development.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-violet">Composition vs. Configuration</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I avoid creating God Components -  single `Button` with 50 props (`isBig`, `isRed`, `hasIcon`). This leads to unmaintainable spaghetti code.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Instead, I favor composition. By exposing sub-components (like `Card.Header`, `Card.Body`, `Card.Footer`), we give developers the flexibility to construct unique layouts while still adhering to the strict styling rules of the individual parts.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-violet">
                        <h3 className="text-xl font-bold text-white mb-4">The "Strict Mode" Approach</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>TypeScript First:</strong> Props are the contract. We use strict types (e.g., `size: 'sm' | 'md' | 'lg'`) to prevent misuse (no arbitrary pixel values).</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Accessibility (a11y):</strong> Components handle ARIA roles, keyboard navigation, and focus management internally, so every feature built with them is accessible by default.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Utility Props:</strong> We restrict ad-hoc styling. You can't just adding `margin-top: 13px`. You must use the spacing scale (`mt={2}`).</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Tech Stack */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Modern Tooling</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-violet mb-3">React & TypeScript</h3>
                            <p className="text-sm text-white/70">The industry standard for building declarative, type-safe UI.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-violet mb-3">Headless UI</h3>
                            <p className="text-sm text-white/70">Using unstyled, accessible primitives for complex interactions and applying our own Design Tokens on top.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-violet mb-3">Testing</h3>
                            <p className="text-sm text-white/70">Unit tests for logic and Interaction tests  for visual states.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Frontend', 'UI', 'Design', 'React']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/design-systems" className="inline-flex items-center text-brand-violet hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Design Systems
                    </Link>
                </div>

            </article>
        </>
    );
};

export default ComponentLibrary;
