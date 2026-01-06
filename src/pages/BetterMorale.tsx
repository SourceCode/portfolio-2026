import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const BetterMorale: React.FC = () => {
    return (
        <>
            <SEO
                title="Better Morale | Ryan Rentfro"
                description="Transforming engineers from ticket-takers into empowered problem solvers to drive engagement, retention, and innovation."
                canonical="https://rentfro.net/expertise/better-morale"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-blue rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Better Morale</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        When engineers are treated as problem solvers, not just ticket-takers, they feel a sense of ownership. Engaged teams build better software and stick around longer.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-blue">Autonomy, Mastery, Purpose</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            The easiest way to burn out a high-performing engineer is to turn them into a widget in a feature factory—micromanaged, disconnected from the user, and focused only on velocity.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            By involving engineers in the product trio, we tap into purpose. They see the human impact of their work. They understand who they are building for, not just what they are coding. This connection fuels the intrinsic motivation to do their best work.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-blue">
                        <h3 className="text-xl font-bold text-white mb-4">From Mercenaries to Missionaries</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>Mercenaries:</strong> "Just tell me what to build." build whatever is on the ticket, disengage at 5 PM, and leave for a higher salary.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>Missionaries:</strong> "How can we solve this customer problem?" Engage deeply, challenge assumptions, and stay to see the mission through.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* The Culture Shift */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Creating the Environment</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Celebration of Impact</h3>
                            <p className="text-sm text-white/70">We celebrate "Customer Outcomes Achieved," not just "Code Deployed." When a feature drives revenue or retention, the engineering team gets the credit.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Safe to Fail</h3>
                            <p className="text-sm text-white/70">Innovation requires risk. We create psychological safety where failed experiments are treated as learning, not failure.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Career Growth</h3>
                            <p className="text-sm text-white/70">Engineers grow faster when they understand the business. The Product Trio model prepares Senior Engineers for Staff/Principal roles by teaching them product thinking.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Leadership', 'Culture', 'Team', 'Engineering']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/product-trios" className="inline-flex items-center text-brand-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Product Trios
                    </Link>
                </div>

            </article>
        </>
    );
};

export default BetterMorale;
