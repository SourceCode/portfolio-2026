import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const EmpoweredTeams: React.FC = () => {
    return (
        <>
            <SEO
                title="Empowered Teams | Ryan Rentfro"
                description="Moving from command-and-control to context-and-trust. Building cross-functional squads that own their roadmap, metrics, and outcomes."
                canonical="https://rentfro.net/expertise/empowered-teams"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-teal rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Empowered Teams</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Moving from command-and-control to context-and-trust. I build cross-functional squads that own their roadmap, metrics, and outcomes.
                    </p>
                </section>

                {/* The Model */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-teal">Context Over Control</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            The most effective engineering organizations are those where decision making is distributed to the edge, to the people closest to the customer and the code. My "Empowered Teams" model fundamentally shifts leadership focus from assigning tasks to providing context: defining the strategy, the business constraints, and the desired outcomes, then stepping back to let the team solve the puzzle.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            This requires a high-trust environment where failure is treated as a learning data point, not a punishable offense. It creates deep ownership, where engineers don't just ship code - they ship value.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">The Squad Model</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Cross-Functional:</strong> Product, Design, Engineering, and QA in one unit.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Mission-Driven:</strong> Aligned to a specific KPI or customer journey.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Autonomous:</strong> Full ownership of their stack and deployment to production.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Accountable:</strong> Measured by business outcomes, not just velocity.</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Distributed Decision Making */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Implementing Autonomy</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/expertise/technical-rfcs" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-mint/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Technical RFCs</h3>
                                    <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Democratizing architectural decisions through "Request for Comments." Any engineer can propose a change, fostering rigorous debate and collective ownership of the system design.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/dora-metrics" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-mint/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">DORA Metrics</h3>
                                    <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Focusing on Elite DevOps metrics (Deployment Frequency, Lead Time for Changes) to measure the health of the delivery pipeline, not individual developer activity.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/product-trios" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-mint/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Product Trios</h3>
                                    <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Ensuring the Engineering Lead, Product Manager, and Product Designer create a "Trio" that co-creates the roadmap, preventing the "throw over the wall" anti-pattern.</p>
                            </GlassCard>
                        </Link>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Leadership', 'Management', 'Executive', 'Teams']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/strategic-leadership" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Strategic Leadership
                    </Link>
                </div>

            </article>
        </>
    );
};

export default EmpoweredTeams;
