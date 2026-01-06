import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const PolicyAsCode: React.FC = () => {
    return (
        <>
            <SEO
                title="Policy as Code | Ryan Rentfro"
                description="Using OPA (Open Policy Agent) to enforce guardrails automatically in the CI/CD pipeline."
                canonical="https://rentfro.net/expertise/policy-as-code"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Policy as Code</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Compliance shouldn't be a PDF document that developers read once and forget. It should be executable code that runs on every commit.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-mint">Automated Guardrails</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            In highly regulated industries, "move fast and break things" is not an option. However, manual security reviews slow down velocity. The solution is Policy as Code.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            By defining infrastructure and security policies in a high-level language, we can automatically block non-compliant changes before they reach production. This gives developers confidence: if the build passes, it's safe to deploy.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">OPA (Open Policy Agent) Use Cases</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Infrastructure:</strong> "Ensure all S3 buckets are private and encrypted."</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Kubernetes:</strong> "Reject Pods running as root or without resource limits."</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Application:</strong> "Only users with the 'Billing' role can access the 'Invoices' API."</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Implementation Strategy */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">The Enforcement Pipeline</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">IDE / Local</h3>
                            <p className="text-sm text-white/70">Plugins provide real-time feedback to developers as they write Infrastructure as Code, flagging violations immediately.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">CI/CD Gate</h3>
                            <p className="text-sm text-white/70">The build fails hard if any policy is violated. No human intervention can override this without a policy change (which itself requires review).</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-mint mb-3">Runtime Audit</h3>
                            <p className="text-sm text-white/70">Continuous scanning of the live environment detects "drift" or manual changes that bypassed the pipeline.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Compliance', 'Security', 'DevOps', 'Infrastructure']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/cloud-architecture" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Cloud Architecture
                    </Link>
                </div>

            </article >
        </>
    );
};

export default PolicyAsCode;
