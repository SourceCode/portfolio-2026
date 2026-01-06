import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const ImmutableInfrastructure: React.FC = () => {
    return (
        <>
            <SEO
                title="Immutable Infrastructure | Ryan Rentfro"
                description="Treating servers as cattle, not pets. We don't patch live instances; we replace them with new, hardened images strategies."
                canonical="https://rentfro.net/expertise/immutable-infrastructure"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-blue rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Immutable Infrastructure</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Servers are cattle, not pets. We don't patch live instances; we replace them with new, hardened images.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-blue">Eradicating Drift</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            In traditional ops, servers ("Pets") were manually nursed back to health when they had issues. Over time, configuration drift made them unique snowflakes - impossible to replicate and terrifying to reboot.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Immutable Infrastructure prevents this. Once an artifact (AMI, Container Image) is built, it is never modified. If a configuration change is needed, we update the code, build a new image, and replace the old running instances entirely.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-blue">
                        <h3 className="text-xl font-bold text-white mb-4">The Benefits</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>Consistency:</strong> Dev, Staging, and Production run the exact same binary/image. "It works on my machine" is solved.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>Simple Rollbacks:</strong> Deployment failed? Just switch the load balancer back to the previous version's image.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>Security:</strong> If a server is compromised, it doesn't persist. The instance is terminated and replaced by a clean one automatically.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* The Toolchain */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Strategic Implementation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Packer</h3>
                            <p className="text-sm text-white/70">Automating the creation of machine images (AMIs) for EC2-based workloads. Golden Images are baked with all security patches and dependencies pre-installed.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Docker / Containers</h3>
                            <p className="text-sm text-white/70">The ultimate immutable unit. The `Dockerfile` is the source of truth. Container orchestration (K8s/ECS) handles the lifecycle of replacement.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Terraform / CDK</h3>
                            <p className="text-sm text-white/70">Infrastructure as Code orchestrates the deployment. It treats the infrastructure itself as versioned, immutable definitions.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Infrastructure', 'DevOps', 'Cloud', 'Serverless']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/cloud-architecture" className="inline-flex items-center text-brand-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Cloud Architecture
                    </Link>
                </div>

            </article >
        </>
    );
};

export default ImmutableInfrastructure;
