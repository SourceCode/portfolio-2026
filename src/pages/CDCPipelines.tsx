import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const CDCPipelines: React.FC = () => {
    return (
        <>
            <SEO
                title="CDC Pipelines | Ryan Rentfro"
                description="Change Data Capture (CDC) strategies using Debezium and Kafka to create real-time data streams from legacy databases."
                canonical="https://rentfro.net/expertise/cdc-pipelines"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-violet rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">CDC Pipelines</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Unlocking data from the database jail. Change Data Capture (CDC) turns static tables into dynamic streams of events.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-violet">Beyond Polling</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Traditional ETL jobs run nightly. In a modern business, yesterday's data is too late. We shouldn't be polling the database (`SELECT * FROM orders WHERE updated_at &gt; last_run`); we should be reacting to changes instantly.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            CDC tools hook directly into the database's write-ahead log (WAL). Every insert, update, and delete is captured immediately and pushed to a message broker with zero impact on query performance.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-violet">
                        <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Cache Invalidation:</strong> Instantly update Redis when the primary Postgres record changes.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Search Indexing:</strong> Keep ElasticSearch/OpenSearch perfectly in sync with your transactional DB.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Microservices Sync:</strong> Allow other services to subscribe to Order Updates without coupling them to the Orders service API.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Data', 'Infrastructure', 'Architecture', 'Backend']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/data-engineering" className="inline-flex items-center text-brand-violet hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Data Engineering
                    </Link>
                </div>

            </article>
        </>
    );
};

export default CDCPipelines;
