import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const Observability: React.FC = () => {
    return (
        <>
            <SEO
                title="Observability | Ryan Rentfro"
                description="Implementing deep system visibility with DataDog, OpenTelemetry, and Splunk. Moving beyond 'monitoring' to true understanding."
                canonical="https://rentfro.net/expertise/observability"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-teal rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Observability</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Using DataDog, OpenTelemetry, and Splunk to answer the question: "Why is the system behaving this way?" Moving beyond simple monitoring to true understanding.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">"If It Moves, Measure It"</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            In a distributed microservices environment, you cannot debug with `ssh` and `grep`. You need a holistic view of a request's journey across the entire stack. Observability is not just about alerting when things break; it's about understanding the internal state of the system based on its external outputs.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I implement the "Three Pillars of Observability" (Metrics, Logs, Traces) correlated together. This allows us to jump from a spike in error rate (Metric) to the specific requests failing (Trace) and the detailed error messages (Logs) in seconds.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">The Stack</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-bold text-brand-teal mb-1">OpenTelemetry (OTel)</div>
                                <div className="text-sm text-white/80">Vendor-neutral standard for instrumentation. Future-proofing our telemetry data pipelines.</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-teal mb-1">DataDog</div>
                                <div className="text-sm text-white/80">Unified platform for APM, Metrics, and Logs. Excellent for visual correlation and dashboards.</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-teal mb-1">Splunk</div>
                                <div className="text-sm text-white/80">Deep log analysis and security information and event management (SIEM).</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* The 3 Pillars */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">The Pillars</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Distributed Tracing</h3>
                            <p className="text-sm text-white/70">Visualizing the waterfall of a request across services to identify bottlenecks (e.g., "Why did this API call take 2s?").</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Structured Logging</h3>
                            <p className="text-sm text-white/70">Logs must be machine-readable (JSON). No more parsing regex. We log context (userID, requestID) automatically.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">High-Cardinality Metrics</h3>
                            <p className="text-sm text-white/70">Ability to slice and dice metrics by unlimited tags (e.g., latency by `customer_id` or `build_version`).</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Infrastructure', 'DevOps', 'Monitoring', 'Data']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/platform-architecture" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Platform Architecture
                    </Link>
                </div>

            </article>
        </>
    );
};

export default Observability;
