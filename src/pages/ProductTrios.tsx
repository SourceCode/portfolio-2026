import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const ProductTrios: React.FC = () => {
    return (
        <>
            <SEO
                title="Product Trios | Ryan Rentfro"
                description="Co-creating value with the Product Trio model: Engineering Lead, Product Manager, and Product Designer working in lockstep."
                canonical="https://rentfro.net/expertise/product-trios"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Product Trios</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Ensuring the Engineering Lead, Product Manager, and Product Designer create a trio that co-creates the roadmap.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Co-Creation vs. Handoffs</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Traditional waterfall (and even some agile) processes suffer from the handoff problem: PM defines what, design draws how it looks, and engineering is told how to build it. This siloes knowledge and leads to feasibility issues and wasted cycles.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I advocate for the Product Trio model. The Engineering Lead, Product Manager, and Lead Designer work as equal partners from the discovery phase. Engineers provide feasibility and innovation constraints early, ensuring that what we design is actually buildable and impactful.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">The Trio Responsibilities</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-bold text-brand-mint mb-1">Product Manager</div>
                                <div className="text-sm text-white/80">Focus: Value & Viability. "Is this useful and can the business support it?"</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-mint mb-1">Product Designer</div>
                                <div className="text-sm text-white/80">Focus: Usability. "can users figure out how to use this?"</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-mint mb-1">Engineering Lead</div>
                                <div className="text-sm text-white/80">Focus: Feasibility. "Can we build this? Is there a cheaper/faster way?"</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Benefits */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Benefits of the Trio</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/expertise/shared-understanding" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-mint/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Shared Understanding</h3>
                                    <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">No more lost in translation. Everyone understands the why behind the feature.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/faster-discovery" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-violet/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-violet group-hover:text-white transition-colors">Faster Discovery</h3>
                                    <svg className="w-5 h-5 text-brand-violet opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Engineers can often suggest technical shortcuts that achieve 80% of the value with 20% of the effort.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/better-morale" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-blue/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-blue group-hover:text-white transition-colors">Better Morale</h3>
                                    <svg className="w-5 h-5 text-brand-blue opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Engineers feel like problem solvers, not just ticket-takers.</p>
                            </GlassCard>
                        </Link>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Product', 'Engineering', 'Process', 'Agile']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/empowered-teams" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Empowered Teams
                    </Link>
                </div>

            </article>
        </>
    );
};

export default ProductTrios;
