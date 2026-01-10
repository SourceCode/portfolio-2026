import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const DeepWork: React.FC = () => {
    return (
        <>
            <SEO
                title="Deep Work | Working Style"
                description="Protecting the Maker's Schedule: how I foster an environment for deep, uninterrupted engineering focus."
                canonical="https://rentfro.net/about/working-style/deep-work"
            />
            <article className="animate-fade-in space-y-16">
                {/* Header */}
                <section className="relative">
                    <Link to="/about/working-style" className="inline-flex items-center text-brand-mint hover:text-white transition-colors mb-8">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Working Style
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Deep Work</h1>
                    <p className="text-xl text-white/80 font-light leading-relaxed max-w-4xl">
                        The cost of a context switch is not zero.
                    </p>
                </section>

                {/* Core Concept */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-6">Protecting the Maker's Schedule</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Paul Graham's distinction between the Maker's Schedule and the Manager's Schedule is a cornerstone of my leadership philosophy. Engineers need long, uninterrupted blocks of time to load complex mental models into working memory.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            A single 30-minute meeting in the middle of the afternoon can destroy an entire half-day of productivity. I strive to shield my teams from this fragmentation.
                        </p>
                        <ul className="space-y-4 pt-4">
                            <li className="flex items-center text-white/80">
                                <span className="bg-brand-mint/10 text-brand-mint p-2 rounded-full mr-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                No-Meeting Days
                            </li>
                            <li className="flex items-center text-white/80">
                                <span className="bg-brand-mint/10 text-brand-mint p-2 rounded-full mr-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                </span>
                                Async Standups
                            </li>
                            <li className="flex items-center text-white/80">
                                <span className="bg-brand-mint/10 text-brand-mint p-2 rounded-full mr-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                </span>
                                Batched Communications
                            </li>
                        </ul>
                    </div>

                    <GlassCard className="p-8 h-full flex flex-col justify-center border-l-4 border-l-orange-400">
                        <h3 className="text-xl font-bold text-white mb-4">The Zone of Genius</h3>
                        <p className="text-white/70 leading-relaxed mb-4">
                            When an engineer enters "flow state," they are 5x more productive. My job as a leader is to create the environmental conditions where flow is possible.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            This means minimizing Slack notifications, refusing unnecessary calendar invites, and respecting the "headphones on" signal.
                        </p>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Leadership', 'Culture', 'Process', 'Engineering']} />
            </article>
        </>
    );
};

export default DeepWork;
