import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const WrittenCulture: React.FC = () => {
    return (
        <>
            <SEO
                title="Written Culture | Working Style"
                description="Why I champion asynchronous, written communication: RFCs, ADRs, and clarity of thought."
                canonical="https://rentfro.net/about/working-style/written-culture"
            />
            <article className="animate-fade-in space-y-16">
                {/* Header */}
                <section className="relative">
                    <Link to="/about/working-style" className="inline-flex items-center text-brand-mint hover:text-white transition-colors mb-8">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Working Style
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Written Culture</h1>
                    <p className="text-xl text-white/80 font-light leading-relaxed max-w-4xl">
                        "If it isn't written down, it didn't happen."
                    </p>
                </section>

                {/* Core Concept */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">The Amazon Approach</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I am a strong proponent of the "narrative over slides" culture popularized by Amazon. PowerPoint presentations are often sales pitches—they hide complexity in bullet points and charisma.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            A written document (6-pager, RFC, ADR) forces the author to think deeply. You cannot hand-wave a logical inconsistency in a paragraph of text. Writing exposes gaps in thinking.
                        </p>
                        <h3 className="text-xl font-bold text-brand-mint mb-3">Asynchronous by Default</h3>
                        <p className="text-white/70 leading-relaxed">
                            Written artifacts enable asynchronous work. A well-written design doc allows a distributed team to review, comment, and align without finding a magical hour where everyone is awake. It respects everyone's time.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <GlassCard className="p-6 border-l-4 border-l-blue-400">
                            <h3 className="text-lg font-bold text-white mb-2">RFCs (Request for Comments)</h3>
                            <p className="text-sm text-white/70">
                                Before we build a major feature, we write an RFC. It details the problem, the proposed solution, and the alternatives considered. The team reviews it *before* a single line of code is written.
                            </p>
                        </GlassCard>
                        <GlassCard className="p-6 border-l-4 border-l-purple-400">
                            <h3 className="text-lg font-bold text-white mb-2">ADRs (Architectural Decision Records)</h3>
                            <p className="text-sm text-white/70">
                                When we make a significant technical choice (e.g., "Use Postgres instead of Mongo"), we document it. This creates a history of *why* decisions were made, preventing endless re-litigation.
                            </p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Documentation', 'Process', 'Communication', 'Leadership']} />
            </article>
        </>
    );
};

export default WrittenCulture;
