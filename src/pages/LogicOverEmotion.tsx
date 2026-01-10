import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const LogicOverEmotion: React.FC = () => {
    return (
        <>
            <SEO
                title="Logic Over Emotion | Working Style"
                description="My approach to architectural decision making: data-driven, objective, and evidence-based."
                canonical="https://rentfro.net/about/working-style/logic-over-emotion"
            />
            <article className="animate-fade-in space-y-16">
                {/* Header */}
                <section className="relative">
                    <Link to="/about/working-style" className="inline-flex items-center text-brand-mint hover:text-white transition-colors mb-8">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Working Style
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Logic Over Emotion</h1>
                    <p className="text-xl text-white/80 font-light leading-relaxed max-w-4xl">
                        "In God we trust. All others must bring data." — W. Edwards Deming
                    </p>
                </section>

                {/* Core Concept */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">The Anti-Pattern: "It Feels Right"</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            In software engineering, gut feelings are often a mask for unexamined bias or lack of rigor. I have seen too many architectures fail because they were built on hype ("resume-driven development") or personal preference rather than objective requirements.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            I challenge my teams to show their work. Why this database? Why this framework? What are the trade-offs? If we can't articulate the why with logic and data, we aren't ready to build it.
                        </p>
                    </div>
                    <GlassCard className="p-8 border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">My Standard of Evidence</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3 mt-1">1.</span>
                                <div className="text-white/80"><strong>Data &gt; Opinion:</strong> Use metrics, benchmarks, and prototypes to validate assumptions.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3 mt-1">2.</span>
                                <div className="text-white/80"><strong>First Principles:</strong> Break the problem down to its fundamental truths. Does the solution solve the actual problem?</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3 mt-1">3.</span>
                                <div className="text-white/80"><strong>Objectivity:</strong> A critique of your code is not a critique of you. We must be able to discuss technical flaws without emotional defense.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Architecture', 'Data', 'Leadership', 'Decision Making']} />
            </article>
        </>
    );
};

export default LogicOverEmotion;
