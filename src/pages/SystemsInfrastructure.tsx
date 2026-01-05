import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const SystemsInfrastructure: React.FC = () => {
    return (
        <>
            <SEO
                title="Systems & Infrastructure | Ryan Rentfro"
                description="Building immutable infrastructure with Kubernetes, Terraform, and Vault. Infrastructure as Code (IaC) is non-negotiable."
                canonical="https://rentfro.net/expertise/systems-infrastructure"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-teal rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Systems & Infrastructure</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Managing complexity with Kubernetes, Terraform, and Vault. My core tenets are Infrastructure as Code (IaC), Security as Code, and Immutable Infrastructure.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">Infrastructure as Software</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Gone are the days of manually SSH-ing into servers to install packages. I treat infrastructure provisioning with the same rigor as application code: it must be versioned, reviewed, tested, and reproducible.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Tools like Terraform allow us to define our entire stack declaratively. This eliminates "configuration drift" and enables us to spin up identical environments (Dev, Stage, Prod) in minutes, not weeks.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">The Toolchain</h3>
                        <ul className="space-y-4">
                            <li>
                                <div className="font-bold text-brand-teal mb-1">Terraform</div>
                                <div className="text-sm text-white/80">The standard for IaC. Managing state, modules, and multi-cloud providers.</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-teal mb-1">Kubernetes (k8s)</div>
                                <div className="text-sm text-white/80">Orchestrating containerized workloads at scale. Helm charts for package management.</div>
                            </li>
                            <li>
                                <div className="font-bold text-brand-teal mb-1">HashiCorp Vault</div>
                                <div className="text-sm text-white/80">Centralized secrets management. Dynamic secrets and encryption-as-a-service.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Security & Compliance */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Security as Code</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Policy as Code</h3>
                            <p className="text-sm text-white/70">Using OPA (Open Policy Agent) to enforce guardrails (e.g., "No public S3 buckets") automatically in the CI/CD pipeline.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Zero Trust</h3>
                            <p className="text-sm text-white/70">Implementing service meshes (Istio/Linkerd) to ensure mutual TLS (mTLS) between all microservices.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Immutable</h3>
                            <p className="text-sm text-white/70">Servers are cattle, not pets. We don't patch live instances; we replace them with new, hardened images.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Infrastructure', 'DevOps', 'Cloud', 'Kubernetes']} />

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

export default SystemsInfrastructure;
