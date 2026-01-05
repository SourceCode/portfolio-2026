import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const FasterDiscovery: React.FC = () => {
    return (
        <>
            <SEO
                title="Faster Discovery | Ryan Rentfro"
                description="Leveraging engineering insight during discovery to find the 80/20 technical shortcuts that deliver maximum value with minimum effort."
                canonical="https://rentfro.net/expertise/faster-discovery"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-violet rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Faster Discovery</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Engineers can often suggest technical shortcuts that achieve 80% of the value with 20% of the effort—but only if they are in the room when the problem is defined.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-violet">The Feasibility Feedback Loop</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Discovery is about answering four risks: Value (will they buy it?), Usability (can they use it?), Viability (does it work for our business?), and **Feasibility** (can we build it?).
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            When engineers are excluded from discovery, feasibility is assessed last. This leads to "beautiful but impossible" designs or months-long scope creep. By bringing Engineering upstream, we can vet feasibility in real-time. Often, a slight tweak to the requirements can reduce implementation time from months to weeks.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-violet">
                        <h3 className="text-xl font-bold text-white mb-4">Engineering-Led Efficiency</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>The 80/20 Rule:</strong> "If we remove this one complex filter requirement, we can use standard components and ship next sprint instead of next quarter."</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Leveraging Existing Tech:</strong> Reusing existing internal APIs or services that Product/Design might not know exist.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Prototyping in Code:</strong> Sometimes it's faster to build a live React prototype than a high-fidelity Figma mock.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Case Study / Example */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Discovery in Action</h2>
                    <GlassCard className="p-8">
                        <h3 className="text-xl font-bold text-white mb-4">The "Perfect" Search Bar</h3>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-brand-violet font-bold mb-2 uppercase text-sm tracking-wider">The Proposal</h4>
                                <p className="text-white/70 text-sm leading-relaxed mb-4">Product wanted a natural language search ("Show me 3-bedroom houses in Austin under $500k") to compete with a major rival.</p>
                            </div>
                            <div>
                                <h4 className="text-brand-mint font-bold mb-2 uppercase text-sm tracking-wider">The Engineering Pivot</h4>
                                <p className="text-white/70 text-sm leading-relaxed mb-4">Engineering pointed out that building a robust NLP engine would take 6 months. However, we could build a dynamic tag-based filter system ("Button: 3-bed", "Button: Austin") in 2 weeks that solved the same user need for speed and clarity.</p>
                            </div>
                        </div>
                        <div className="border-t border-white/10 mt-6 pt-6">
                            <p className="text-white/90 italic">
                                Result: We shipped the tag system in one sprint, saw a 15% conversion lift, and validated user intent before investing in AI/NLP later.
                            </p>
                        </div>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Product', 'Engineering', 'Process', 'Discovery']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/product-trios" className="inline-flex items-center text-brand-violet hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Product Trios
                    </Link>
                </div>

            </article>
        </>
    );
};

export default FasterDiscovery;
