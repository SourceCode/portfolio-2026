import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const DORAmetrics: React.FC = () => {
    return (
        <>
            <SEO
                title="DORA Metrics | Ryan Rentfro"
                description="Measuring DevOps performance with the 4 key DORA metrics to optimize delivery velocity and stability."
                canonical="https://rentfro.net/expertise/dora-metrics"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">DORA Metrics</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Focusing on DevOps metrics (Deployment Frequency, Lead Time for Changes) to measure the health of the delivery pipeline, not just individual code output.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Measuring What Matters</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            You cannot improve what you do not measure. However, measuring the *wrong* things (like lines of code or hours worked) leads to perverse incentives. I rely on the DORA (DevOps Research and Assessment) framework because it empirically links software delivery performance to organizational reliability.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            These metrics give us a balanced view of "Speed" vs. "Stability," ensuring we don't sacrifice quality for velocity, or allow bureaucracy to stifle innovation.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">The 4 Key Metrics</h3>
                        <div className="space-y-4">
                            <div>
                                <h4 className="font-bold text-brand-mint">1. Deployment Frequency</h4>
                                <p className="text-sm text-white/70">How often do we successfully release to production?</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-mint">2. Lead Time for Changes</h4>
                                <p className="text-sm text-white/70">How long does it take for a commit to get into production?</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-mint">3. Mean Time to Restore (MTTR)</h4>
                                <p className="text-sm text-white/70">How quickly can we recover from a failure in production?</p>
                            </div>
                            <div>
                                <h4 className="font-bold text-brand-mint">4. Change Failure Rate</h4>
                                <p className="text-sm text-white/70">What percentage of deployments cause a failure in production?</p>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Elite Performance Scale */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Targeting Elite Performance</h2>
                    <GlassCard className="p-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="text-center">
                                <div className="text-brand-mint font-bold text-xl mb-2">On-Demand</div>
                                <div className="text-white/50 text-xs uppercase tracking-widest">Deploy Freq</div>
                            </div>
                            <div className="text-center">
                                <div className="text-brand-mint font-bold text-xl mb-2">&lt; One Hour</div>
                                <div className="text-white/50 text-xs uppercase tracking-widest">Lead Time</div>
                            </div>
                            <div className="text-center">
                                <div className="text-brand-mint font-bold text-xl mb-2">&lt; One Hour</div>
                                <div className="text-white/50 text-xs uppercase tracking-widest">MTTR</div>
                            </div>
                            <div className="text-center">
                                <div className="text-brand-mint font-bold text-xl mb-2">0-15%</div>
                                <div className="text-white/50 text-xs uppercase tracking-widest">Failure Rate</div>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['DevOps', 'Process', 'Engineering', 'Leadership']} />

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

export default DORAmetrics;
