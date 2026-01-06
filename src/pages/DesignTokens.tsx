import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const DesignTokens: React.FC = () => {
    return (
        <>
            <SEO
                title="Design Tokens | Ryan Rentfro"
                description="Defining the atomic units of style (colors, typography, spacing) for cross-platform consumption."
                canonical="https://rentfro.net/expertise/design-tokens"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Design Tokens</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        The atomic units of style—colors, spacing, typography, and motion—defined once and consumed everywhere.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-mint">Semantic Abstraction</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Hardcoded hex values (e.g., `#00FF00`) are technical debt. When a rebranding happens, "Find and Replace" is a nightmare.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Design Tokens introduce a layer of semantic meaning. Instead of `color: #EF4444`, we use `color: var(--color-critical-action)`. This allows us to change the visual implementation (Dark Mode, High Contrast Mode, or a complete rebrand) without touching a single line of component code.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">The Token Hierarchy</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">1.</span>
                                <div className="text-white/80"><strong>Primitive Tokens:</strong> Raw values. <br /><code className="text-xs bg-black/30 px-2 py-1 rounded text-brand-mint">blue-500: #3B82F6</code></div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">2.</span>
                                <div className="text-white/80"><strong>Semantic Tokens:</strong> Intent-based. <br /><code className="text-xs bg-black/30 px-2 py-1 rounded text-brand-mint">color-primary-action: $blue-500</code></div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">3.</span>
                                <div className="text-white/80"><strong>Component Tokens:</strong> Specific context. <br /><code className="text-xs bg-black/30 px-2 py-1 rounded text-brand-mint">button-bg-default: $color-primary-action</code></div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>


                {/* Related Projects */}
                <RelatedProjects tags={['Design', 'UI', 'Frontend']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/design-systems" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Design Systems
                    </Link>
                </div>

            </article>
        </>
    );
};

export default DesignTokens;
