import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const DataEngineering: React.FC = () => {
    return (
        <>
            <SEO
                title="Data Engineering | Ryan Rentfro"
                description="Polyglot persistence strategies using Postgres, Redis, ElasticSearch, and Kafka for high-scale data pipelines."
                canonical="https://rentfro.net/expertise/data-engineering"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-teal rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Data Engineering</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Architecting data planes with Postgres, Redis, ElasticSearch, and Kafka. I believe in "Polyglot Persistence"—using the right data store for the specific access pattern.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Polyglot Persistence</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Monolithic databases often become the bottleneck of scaling. Instead of forcing all data models into a single relational DB, I design systems where data lives in the store best suited for its workload: Relational for transactions, Document/Search for discovery, and Key-Value for speed.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            This requires robust synchronization strategies. I rely heavily on Event Sourcing and Change Data Capture (CDC) patterns to propagate state across these distributed stores reliably.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">The Data Stack</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-bold text-brand-teal mb-1">PostgreSQL (Relational)</div>
                                <div className="text-sm text-white/80">The bedrock. ACID compliance for mission-critical relationships and transactions.</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-teal mb-1">Apache Kafka (Streaming)</div>
                                <div className="text-sm text-white/80">The central nervous system. Real-time event log for decoupling producers and consumers.</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-teal mb-1">ElasticSearch (Search)</div>
                                <div className="text-sm text-white/80">Full-text search, complex filtering, and aggregations that would choke a SQL DB.</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-teal mb-1">Redis (Cache)</div>
                                <div className="text-sm text-white/80">Sub-millisecond access for hot data, session management, and leaderboards.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Patterns */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Data Patterns</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/expertise/event-sourcing" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-mint/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Event Sourcing</h3>
                                    <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Storing the *changes* (events) as the source of truth, allowing us to replay history and rebuild state at any point.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/cdc-pipelines" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-violet/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-violet group-hover:text-white transition-colors">CDC Pipelines</h3>
                                    <svg className="w-5 h-5 text-brand-violet opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Using tools like Debezium to stream DB changes to Kafka, updating search indexes and caches in near-real-time.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/data-mesh" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-blue/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-blue group-hover:text-white transition-colors">Data Mesh</h3>
                                    <svg className="w-5 h-5 text-brand-blue opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Treating data as a product. Domain teams own their data and expose it via standardized contracts.</p>
                            </GlassCard>
                        </Link>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Data', 'Database', 'Engineering', 'Analytics', 'SQL']} />

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

export default DataEngineering;
