import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const TechnicalRFCs: React.FC = () => {
    return (
        <>
            <SEO
                title="Technical RFCs | Ryan Rentfro"
                description="Democratizing architectural decisions through a transparent Request for Comments process that fosters debate and collective ownership."
                canonical="https://rentfro.net/expertise/technical-rfcs"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Technical RFCs</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Democratizing architectural decisions through "Request for Comments." Any engineer can propose a change, fostering rigorous debate and collective ownership of the system design.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Writing is Thinking</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Architecture should not be handed down from an "Ivory Tower." The best systems emerge when decisions are debated openly, with context and trade-offs clearly articulated in writing.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I implement a structured RFC (Request for Comments) process where any engineer—junior or senior—can propose a significant change. This forces clarity of thought, creates an asynchronous decision trail, and ensures that we build the *right* thing, not just the *easy* thing.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">The RFC Lifecycle</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">1.</span>
                                <span className="text-white/80"><strong>Draft:</strong> Author defines the problem, proposed solution, and alternatives.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">2.</span>
                                <span className="text-white/80"><strong>Comment:</strong> Team reviews asynchronously (Google Docs/Notion/GitHub)./</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">3.</span>
                                <span className="text-white/80"><strong>Review:</strong> Targeted discussion to resolve contention (if needed).</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">4.</span>
                                <span className="text-white/80"><strong>Decision:</strong> Adopted, Rejected, or Deferred with reasoning recorded.</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Value Props */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Why It Matters</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Knowledge Sharing</h3>
                            <p className="text-sm text-white/70">The process itself educates the team. Junior engineers learn from senior feedback, and senior engineers get fresh perspectives.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Historical Context</h3>
                            <p className="text-sm text-white/70">"Why did we build it this way?" The RFC serves as a permanent record of the constraints and trade-offs accepted at the time.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Asynchronous Scale</h3>
                            <p className="text-sm text-white/70">Allows distributed/remote teams to contribute to decisions without needing synchronous "all-hands" architecture meetings.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Architecture', 'Communication', 'Engineering', 'Process']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/empowered-teams" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Empowered Teams
                    </Link>
                </div>

            </article >
        </>
    );
};

export default TechnicalRFCs;
