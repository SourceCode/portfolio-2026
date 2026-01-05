import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const DataDrivenUX: React.FC = () => {
    return (
        <>
            <SEO
                title="Data-Driven UX | Ryan Rentfro"
                description="Integrating A/B testing and analytics directly into the development workflow to validate hypotheses and iterate on user value."
                canonical="https://rentfro.net/expertise/data-driven-ux"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Data-Driven UX</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Integrating A/B testing and analytics directly into the development workflow to validate hypotheses and iterate on user value.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Hypothesis-Driven Development</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Intuition starts the conversation; data finishes it. I believe in embedding instrumentation deep into the product engineering workflow. Every feature should have a defined success metric before a single line of code is written.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            By integrating tools like Optimizely, Amplitude, or Google Optimize alongside standard observability (DataDog/New Relic), we create a complete picture of how technical changes impact user behavior. This closes the loop between engineering output and business outcome.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">The Feedback Loop</h3>
                        <ol className="space-y-4">
                            <li className="flex gap-4">
                                <span className="font-bold text-brand-mint">1.</span>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Formulate Hypothesis</h4>
                                    <p className="text-xs text-white/50">"Improving LCP will increase signup conversion by X%."</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-bold text-brand-mint">2.</span>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Instrument & Implement</h4>
                                    <p className="text-xs text-white/50">Deploy features with tracking events and feature flags.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <span className="font-bold text-brand-mint">3.</span>
                                <div>
                                    <h4 className="font-bold text-white text-sm">Analyze & Iterate</h4>
                                    <p className="text-xs text-white/50">Review quantitative data and qualitative feedback to pivot or persevere.</p>
                                </div>
                            </li>
                        </ol>
                    </GlassCard>
                </section>

                {/* Case Study: Agent Analytics */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Real-World Application</h2>
                    <GlassCard className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Agent Analytics Dashboard</h3>
                                <p className="text-brand-mint font-medium mb-4">Zillow Group</p>
                                <p className="text-white/70 leading-relaxed">
                                    Developed high-throughput analytics pipelines to capture agent performance metrics and sales interactions. This data fueled the "Agent Hub" dashboard, providing real-time insights to agents about their lead conversion rates, response times, and ROI.
                                </p>
                            </div>
                        </div>
                        <div className="pt-6 border-t border-white/10">
                            <p className="text-sm text-white/60">
                                This system processed terabytes of interaction data to empower data-driven sales coaching and automated performance nudges, turning raw data into actionable behavioral change.
                            </p>
                        </div>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Product', 'Engineering', 'Process', 'Data']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/product-engineering" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Product Engineering
                    </Link>
                </div>

            </article>
        </>
    );
};

export default DataDrivenUX;
