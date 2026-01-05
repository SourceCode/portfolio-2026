import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const StrategicLeadership: React.FC = () => {
    return (
        <>
            <SEO
                title="Strategic Leadership | Ryan Rentfro"
                description="Aligning technical strategy with business goals to drive enterprise transformation and sustainable growth."
                canonical="https://rentfro.net/expertise/strategic-leadership"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Strategic Leadership</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Aligning technical strategy with business goals to drive enterprise transformation and sustainable growth.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-mint">The CTO as Business Catalyst</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            In the modern enterprise, technology is no longer a support function - it is the primary driver of value creation. My approach to strategic leadership is defined by closing the gap between engineering execution and executive vision. I specialize in translating complex market opportunities into technical roadmaps that deliver measurable impact.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            At <strong>New Western</strong>, I partner directly with the C-suite to modernize our businessies and our two-sided marketplace, ensuring that our platform investments directly translate to increased transaction volume, velocity and investor retention.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">Key Leadership Focus</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80">Digital Transformation & Change Management</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80">M&A Technical Due Diligence</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80">Org Design & High-Performance Culture</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80">P&L Management & Capital Allocation</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Case Study 1: Anywhere Real Estate */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Enterprise Transformation at Scale</h2>
                    <GlassCard className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Global Core Services Platform</h3>
                                <p className="text-brand-teal font-medium mb-4">Anywhere Real Estate (Century 21, Coldwell Banker, Sotheby's)</p>
                                <p className="text-white/70 leading-relaxed">
                                    Tasked with unifying the fractured technology landscape of a global conglomerate, I led the strategy and execution of the "Global Core"—a centralized platform serving 119 countries. This involved navigating complex stakeholder relationships across distinct brands while strictly adhering to GDPR/CCPA compliance.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-3xl font-bold text-brand-mint mb-1">119</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Countries Supported</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-brand-mint mb-1">300k+</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Agents Served</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-brand-mint mb-1">-40%</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Infra Costs (Serverless)</span>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Philosophy: Org Design */}
                <section className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold mb-4">Organizational Architecture</h2>
                        <p className="text-white/70">
                            You cannot build scalable software with an unscalable organization. Conway's Law is a constraint I actively manage by designing teams that mirror the desired architecture.
                        </p>
                    </div>
                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link to="/expertise/empowered-teams" className="block h-full group">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 group-hover:border-brand-teal/50 transition-all h-full">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-teal group-hover:text-white transition-colors">Empowered Teams</h3>
                                    <svg className="w-5 h-5 text-brand-teal opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Moving from command-and-control to context-and-trust. I build cross-functional squads that own their roadmap, metrics, and outcomes.</p>
                            </div>
                        </Link>

                        <Link to="/expertise/culture-of-mastery" className="block h-full group">
                            <div className="bg-white/5 p-6 rounded-xl border border-white/10 group-hover:border-brand-teal/50 transition-all h-full">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-lg font-bold text-brand-teal group-hover:text-white transition-colors">Culture of Mastery</h3>
                                    <svg className="w-5 h-5 text-brand-teal opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </div>
                                <p className="text-sm text-white/70">Implementing career ladders, mentorship circles, and "Gold Standard" architectural review boards to foster continuous growth.</p>
                            </div>
                        </Link>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Executive', 'Strategy', 'Transformation', 'Leadership']} />

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

export default StrategicLeadership;
