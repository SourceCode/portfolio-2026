import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const CloudArchitecture: React.FC = () => {
    return (
        <>
            <SEO
                title="Cloud Architecture | Ryan Rentfro"
                description="Designing serverless-first, scalable cloud ecosystems on AWS and GCP."
                canonical="https://rentfro.net/expertise/cloud-architecture"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-teal rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Cloud Architecture</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Expertise in AWS (Lambda, ECS, DynamoDB) and GCP. My philosophy is "Right tool for the right job," prioritizing Serverless-first architectures to minimize operational overhead.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">The Serverless Mindset</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I advocate for a "Serverless First" approach not because it's trendy, but because it radically shifts engineering focus from *maintenance* to *innovation*. By leveraging managed services like AWS Lambda and DynamoDB, we decouple our teams from patching OS kernels and scaling clusters, allowing them to focus entirely on business logic.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            However, serverless isn't a silver bullet. For long-running compute or specialized workloads, I utilize containerized solutions (ECS/Fargate/GKE) to balance cost and performance.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">AWS Proficiency</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Compute:</strong> Lambda, ECS Fargate, EC2</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Data:</strong> DynamoDB, RDS (Aurora), S3, ElastiCache</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Integration:</strong> EventBridge, SQS, SNS, API Gateway</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80"><strong>Security:</strong> IAM, WAF, Secrets Manager, KMS</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Architecture Patterns */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Common Patterns</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Event-Driven</h3>
                            <p className="text-sm text-white/70">Decoupling microservices via EventBridge and SQS to ensure system resilience and independent scaling.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">CQRS</h3>
                            <p className="text-sm text-white/70">Separating Read and Write paths (often using DynamoDB streams to ElasticSearch) for massive read scalability.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Strangler Fig</h3>
                            <p className="text-sm text-white/70">Iteratively migrating legacy monoliths to cloud-native services without "big bang" rewrites.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Operational Excellence & Security */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Operational Excellence</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/expertise/policy-as-code" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-mint/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Policy as Code</h3>
                                    <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Using OPA (Open Policy Agent) to enforce guardrails automatically in the CI/CD pipeline.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/zero-trust" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-violet/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-violet group-hover:text-white transition-colors">Zero Trust</h3>
                                    <svg className="w-5 h-5 text-brand-violet opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Implementing service meshes to ensure mutual TLS (mTLS) between all microservices.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/expertise/immutable-infrastructure" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-blue/30 transition-colors">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-blue group-hover:text-white transition-colors">Immutable</h3>
                                    <svg className="w-5 h-5 text-brand-blue opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Servers are cattle, not pets. We don't patch live instances; we replace them.</p>
                            </GlassCard>
                        </Link>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Cloud', 'AWS', 'Serverless', 'Infrastructure']} />

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

export default CloudArchitecture;
