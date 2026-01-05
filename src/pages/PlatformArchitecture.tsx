import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const PlatformArchitecture: React.FC = () => {
    return (
        <>
            <SEO
                title="Platform Architecture | Ryan Rentfro"
                description="Designing robust, scalable ecosystems that ensure security, reliability, and rapid product velocity."
                canonical="https://rentfro.net/expertise/platform-architecture"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-teal rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Platform Architecture</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Designing robust, scalable ecosystems that ensure security, reliability, and rapid product velocity.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-teal">Resilience at Scale</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Architecture is the art of trade-offs. My philosophy circles around "Evolutionary Architecture"—building systems that are robust enough to handle today's load but flexible enough to adapt to tomorrow's unknown requirements. I prioritize decoupled services, event-driven communication, and rigorous observability.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Whether transitioning legacy monoliths to serverless microservices or designing greenfield event meshes, I enforce standards that reduce cognitive load for developers and eliminate "hero culture" in operations.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">Architectural Tenets</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80">Security & Compliance (SOC2 / NIST)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80">Event-Driven & Async Communication</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80">Infrastructure as Code (Terraform)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-teal mr-3">●</span>
                                <span className="text-white/80">Observability-First Development</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Case Study: Zillow */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">High-Volume Scale</h2>
                    <GlassCard className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Premiere Agent Platform</h3>
                                <p className="text-brand-mint font-medium mb-4">Zillow Group</p>
                                <p className="text-white/70 leading-relaxed">
                                    Designed and optimized the microservices architecture powering the $760M/year Premiere Agent business. Key initiatives included the "Concierge" lead qualification system—a real-time orchestration engine connecting homebuyers with agents via voice and SMS (Twilio) within seconds of inquiry.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-3xl font-bold text-brand-teal mb-1">Real-Time</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Voice & SMS Routing</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-brand-teal mb-1">99.99%</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">System Availability</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-brand-teal mb-1">TB+</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Data Ingestion</span>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Tech Stack Grid */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Technical Ecosystem</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                        {/* Cloud */}
                        <Link to="/expertise/cloud-architecture" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-teal/30 hover:bg-white/10 transition-all flex flex-col items-center text-center">
                                <h4 className="font-bold text-lg text-brand-teal mb-3 group-hover:text-white transition-colors">Cloud</h4>
                                <p className="text-xs text-white/60 mb-4 flex-grow">AWS (Lambda, ECS, DynamoDB), GCP</p>
                                <div className="text-brand-teal opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </GlassCard>
                        </Link>

                        {/* Systems */}
                        <Link to="/expertise/systems-infrastructure" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-teal/30 hover:bg-white/10 transition-all flex flex-col items-center text-center">
                                <h4 className="font-bold text-lg text-brand-teal mb-3 group-hover:text-white transition-colors">Systems</h4>
                                <p className="text-xs text-white/60 mb-4 flex-grow">Kubernetes, Terraform, Vault</p>
                                <div className="text-brand-teal opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </GlassCard>
                        </Link>

                        {/* Data */}
                        <Link to="/expertise/data-engineering" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-teal/30 hover:bg-white/10 transition-all flex flex-col items-center text-center">
                                <h4 className="font-bold text-lg text-brand-teal mb-3 group-hover:text-white transition-colors">Data</h4>
                                <p className="text-xs text-white/60 mb-4 flex-grow">Postgres, Redis, ElasticSearch, Kafka</p>
                                <div className="text-brand-teal opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </GlassCard>
                        </Link>

                        {/* Observability */}
                        <Link to="/expertise/observability" className="block h-full group">
                            <GlassCard className="p-6 h-full border-transparent group-hover:border-brand-teal/30 hover:bg-white/10 transition-all flex flex-col items-center text-center">
                                <h4 className="font-bold text-lg text-brand-teal mb-3 group-hover:text-white transition-colors">Observability</h4>
                                <p className="text-xs text-white/60 mb-4 flex-grow">DataDog, OpenTelemetry, Splunk</p>
                                <div className="text-brand-teal opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                                    <svg className="w-5 h-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                            </GlassCard>
                        </Link>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Platform', 'Cloud', 'Architecture', 'Serverless']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/about" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to About
                    </Link>
                </div>

            </article>
        </>
    );
};

export default PlatformArchitecture;
