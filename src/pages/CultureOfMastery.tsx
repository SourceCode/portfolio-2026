import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const CultureOfMastery: React.FC = () => {
    return (
        <>
            <SEO
                title="Culture of Mastery | Ryan Rentfro"
                description="Implementing career ladders, mentorship circles, and 'Gold Standard' architectural review boards to foster continuous growth."
                canonical="https://rentfro.net/expertise/culture-of-mastery"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Culture of Mastery</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Implementing career ladders, mentorship circles, and "Gold Standard" architectural review boards to foster continuous growth.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-mint">Growth as a Keystone Habit</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            A Culture of Mastery isn't about knowing everything—it's about the relentless pursuit of improvement. I believe that retention is driven by growth. If your engineers are not learning, they are leaving. My organization design is centered on explicit pathways for advancement, not just for managers, but for individual contributors (ICs).
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            By establishing the "Staff Engineer" track, I ensure that technical excellence is rewarded with the same prestige and compensation as people management, keeping our best architects building our critical systems.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-mint">
                        <h3 className="text-xl font-bold text-white mb-4">Pillars of Growth</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80"><strong>Dual-Track Ladders:</strong> Explicit IC & Management paths.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80"><strong>Gold Standard ARB:</strong> Architectural Review Boards that teach, not justgate.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80"><strong>Mentorship Circles:</strong> Structured peer-to-peer and leader-to-peer coaching.</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <span className="text-white/80"><strong>L&D Budget:</strong> Dedicated resources for conferences, courses, and certifications.</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Constructive Critique */}
                <section>
                    <GlassCard className="p-8 border-l-4 border-l-brand-teal">
                        <h2 className="text-2xl font-bold text-white mb-4">The Gift of Critique</h2>
                        <p className="text-white/70 leading-relaxed mb-4">
                            In my teams, we detach our ego from our code. I value tough, accurate, unrelenting critique because it is the fastest path to quality.
                        </p>
                        <p className="text-white/70 leading-relaxed">
                            I model this behavior by inviting feedback on my own architectural decisions. When a junior engineer points out a flaw in my design, they are celebrated. This psychological safety allows us to focus entirely on the *work*, not the *politics*.
                        </p>
                    </GlassCard>
                </section>

                {/* Mechanisms for Mastery */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Systems of Excellence</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-teal mb-3">Architectural Review Board</h3>
                            <p className="text-sm text-white/70">A rotating body of senior engineers that reviews major design decisions. The goal is to ensure consistency and spread knowledge, transforming "tribal knowledge" into institutional documentation.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-teal mb-3">Internal Tech Radar</h3>
                            <p className="text-sm text-white/70">Maintaining a "ThoughtWorks-style" Tech Radar to explicitly categorize technologies into Adopt, Trial, Assess, and Hold rings, removing ambiguity about the "right tool for the job."</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-teal mb-3">Hackathons & R&D</h3>
                            <p className="text-sm text-white/70">Dedicated time for "Permissionless Innovation." Some of our best features started as Hackathon projects. It gives teams the space to fail safely and experiment wildly.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Leadership', 'Engineering', 'Team', 'Growth', 'Culture']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/strategic-leadership" className="inline-flex items-center text-brand-mint hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Strategic Leadership
                    </Link>
                </div>

            </article >
        </>
    );
};

export default CultureOfMastery;
