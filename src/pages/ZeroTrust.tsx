import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const ZeroTrust: React.FC = () => {
    return (
        <>
            <SEO
                title="Zero Trust Architecture | Ryan Rentfro"
                description="Assuming breach and implementing rigorous identity-based security with Service Mesh and mTLS."
                canonical="https://rentfro.net/expertise/zero-trust"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-violet rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Zero Trust</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        "Never trust, always verify." Moving security from the network perimeter to the identity of every workload and user.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-violet">Identity is the New Perimeter</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Traditional security relied on a "castle and moat" strategy: once you were inside the VPN, you were trusted. In a cloud-native world with remote employees and distributed microservices, the perimeter has dissolved.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            My approach to Zero Trust ensures that every request—whether from a user or a service—is authenticated, authorized, and encrypted. We assume the network is hostile.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-violet">
                        <h3 className="text-xl font-bold text-white mb-4">Service Mesh Implementation</h3>
                        <p className="text-white/70 mb-4">
                            Implementing a Service Mesh (like Istio or Linkerd) is the most effective way to enforce Zero Trust in a microservices architecture.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>mTLS (Mutual TLS):</strong> Automatically encrypts traffic between services and validates identity. Service A cannot talk to Service B without a valid certificate.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Traffic Control:</strong> Fine-grained allow/deny rules (e.g., "The frontend can call the Product API, but cannot call the Billing API directly").</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-violet mr-3">●</span>
                                <div className="text-white/80"><strong>Observability:</strong> Gaining deep visibility into traffic flow to detect anomalies or unauthorized access attempts.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Beyond the Mesh */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Holistic Security</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-violet mb-3">User Identity</h3>
                            <p className="text-sm text-white/70">Context-aware access via IDPs (Okta/Auth0). MFA is mandatory. Access depends on device health and location.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-violet mb-3">Least Privilege</h3>
                            <p className="text-sm text-white/70">IAM Roles for clouds services are scoped to the absolute minimum permissions required for the task.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-violet mb-3">Secrets Management</h3>
                            <p className="text-sm text-white/70">No hardcoded credentials. Secrets are injected at runtime via Vault or AWS Secrets Manager and rotated automatically.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Security', 'Architecture', 'Cloud', 'Identity']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/cloud-architecture" className="inline-flex items-center text-brand-violet hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Cloud Architecture
                    </Link>
                </div>

            </article >
        </>
    );
};

export default ZeroTrust;
