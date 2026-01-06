import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const DataMesh: React.FC = () => {
    return (
        <>
            <SEO
                title="Data Mesh | Ryan Rentfro"
                description="Decentralizing data ownership. Treating data as a product with standardized contracts and federated governance."
                canonical="https://rentfro.net/expertise/data-mesh"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-blue rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Data Mesh</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Moving beyond the Data Lake. Treating data as a first-class product owned by domain teams.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-blue">Domain Ownership</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Scalability isn't just about disk space; it's about organizational throughput. A centralized team eventually becomes a bottleneck. They eventually lose domain context of the data they are ingesting.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Data Mesh shifts ownership to the left. The Checkout Team owns the `Checkout` data product. They are responsible for its quality, its schema, and its uptime.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-blue">
                        <h3 className="text-xl font-bold text-white mb-4">The Four Pillars</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">1.</span>
                                <div className="text-white/80"><strong>Domain Ownership:</strong> Teams own their data end-to-end.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">2.</span>
                                <div className="text-white/80"><strong>Data as a Product:</strong> Data is treated with the same rigor (SLAs, documentation) as a microservice API.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">3.</span>
                                <div className="text-white/80"><strong>Self-Serve Infrastructure:</strong> A central platform team provides the tools (buckets, pipelines, catalogs) so domains can build easily.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">4.</span>
                                <div className="text-white/80"><strong>Federated Governance:</strong> Global rules (security, PII handling) applied locally by each domain.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Implementation */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Data Contracts</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Schema Enforcement</h3>
                            <p className="text-sm text-white/70">Schemas act as the contract. Breaking changes are caught at compile time, not in production pipelines.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Quality SLAs</h3>
                            <p className="text-sm text-white/70">"This dataset is updated every 15 minutes." "This field is never null." Consumers can trust the data they are using.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Discoverability</h3>
                            <p className="text-sm text-white/70">A centralized Data Catalog allows anyone in the company to find and request access to data products.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Data', 'Architecture', 'Infrastructure', 'Scale']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/data-engineering" className="inline-flex items-center text-brand-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Data Engineering
                    </Link>
                </div>

            </article>
        </>
    );
};

export default DataMesh;
