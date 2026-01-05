import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const SharedUnderstanding: React.FC = () => {
    return (
        <>
            <SEO
                title="Shared Understanding | Ryan Rentfro"
                description="Eliminating 'lost in translation' errors by aligning Engineering, Product, and Design from day one."
                canonical="https://rentfro.net/expertise/shared-understanding"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Shared Understanding</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        No more "lost in translation." When Engineering, Product, and Design explore the problem space together, everyone understands the why behind the feature.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-mint">Breaking the Silos</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            In traditional workflows, requirements behave like a game of telephone. Product writes a spec, Design interprets it, and Engineering builds their interpretation of the design. By the time code reaches production, the original intent is often diluted or misunderstood.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            <strong>Shared Understanding</strong> means that the Product Trio (PM, Designer, Lead Engineer) conducts user interviews together, analyzes data together, and sketches solutions together. This creates a collective brain that is far more powerful than the sum of its parts.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">The Impact of Alignment</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Zero Handoff Errors:</strong> Engineers don't need to ask "how should this state look?" because they co-designed the flow.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Faster Decisions:</strong> When everyone knows the context, small decisions happen instantly without scheduling a meeting.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Empathy for the User:</strong> Engineers who watch user sessions build better, more resilient products than those who just read tickets.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Practical Application */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">How We Achieve It</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Joint Discovery</h3>
                            <p className="text-sm text-white/70">Engineers join customer calls. Not to sell, but to listen, observe, and understand the pain points firsthand.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Event Storming</h3>
                            <p className="text-sm text-white/70">We map out complex business flows together on a whiteboard (physical or virtual) before writing a single line of code.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Opportunity Solution Trees</h3>
                            <p className="text-sm text-white/70">Visualize the path from customer outcomes to potential solutions, ensuring every feature maps back to real value.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Product', 'Process', 'Engineering', 'Communication']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/product-trios" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Product Trios
                    </Link>
                </div>

            </article>
        </>
    );
};

export default SharedUnderstanding;
