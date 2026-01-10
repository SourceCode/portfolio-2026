import React from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const WorkingStyle: React.FC = () => {
    return (
        <>
            <SEO
                title="Working Style | Ryan Rentfro"
                description="An in-depth look at my Reforming Observer working style: analytical, systematic, and quality-driven."
                canonical="https://rentfro.net/about/working-style"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-mint rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">My Working Style</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        I am a Reforming Observer. I bring a quiet, analytical intensity to engineering leadership, valuing precision, logic, and structural integrity above all else.
                    </p>
                </section>

                {/* The Reforming Observer */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-mint">The Architect's Mindset</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            My natural mode is observation and analysis. I don't rush to the whiteboard to draw the first box; I listen, I gather data, and I look for the underlying patterns.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            I thrive in complexity. When others see chaos, I see a system that requires order. I am not satisfied with "it works"; I need to know why it works and how it will break. This makes me a stabilizing force in high-pressure environments—I don't panic, I plan.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-teal">
                        <h3 className="text-xl font-bold text-white mb-4">Core Strengths</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Precision:</strong> I am a perfectionist in the best sense. I care about the details because that's where the technical debt hides.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Objectivity:</strong> I detach my ego from the code. I welcome a brutal code review because it leads to a better product.</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-mint mr-3">●</span>
                                <div className="text-white/80"><strong>Reliability:</strong> My word is my bond. Delivery isn't about if - it's about when.</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Values */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">What I Value</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <Link to="/about/working-style/logic-over-emotion" className="block group">
                            <GlassCard className="p-6 h-full hover:bg-white/5 transition-colors border-transparent group-hover:border-brand-mint/30">
                                <h3 className="text-lg font-bold text-brand-mint mb-3 group-hover:underline">Logic Over Emotion</h3>
                                <p className="text-sm text-white/70">I am persuaded by data, facts, and sound reasoning. "Because we found it" or "It feels right" are not valid architectural arguments.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/about/working-style/written-culture" className="block group">
                            <GlassCard className="p-6 h-full hover:bg-white/5 transition-colors border-transparent group-hover:border-brand-mint/30">
                                <h3 className="text-lg font-bold text-brand-mint mb-3 group-hover:underline">Written Culture</h3>
                                <p className="text-sm text-white/70">If it isn't written down, it didn't happen. I champion asynchronous, written communication (RFCs, ADRs) because it forces clarity of thought.</p>
                            </GlassCard>
                        </Link>
                        <Link to="/about/working-style/deep-work" className="block group">
                            <GlassCard className="p-6 h-full hover:bg-white/5 transition-colors border-transparent group-hover:border-brand-mint/30">
                                <h3 className="text-lg font-bold text-brand-mint mb-3 group-hover:underline">Deep Work</h3>
                                <p className="text-sm text-white/70">I respect the Maker's Schedule. I protect my team (and myself) from fragmentation so we can solve hard problems.</p>
                            </GlassCard>
                        </Link>
                    </div>
                </section>

                {/* How to work with me */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <GlassCard className="p-8 border-l-4 border-l-brand-blue">
                        <h3 className="text-xl font-bold text-white mb-4">How to Communicate with Me</h3>
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Be logical and structured.</li>
                            <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Send reading material ahead of the meeting.</li>
                            <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Ask "what do you think?" instead of "how do you feel?"</li>
                            <li className="flex items-start"><span className="text-brand-blue mr-2">✓</span> Give me time to reflect before demanding a decision.</li>
                        </ul>
                    </GlassCard>
                    <GlassCard className="p-8 border-l-4 border-l-red-400">
                        <h3 className="text-xl font-bold text-white mb-4">What Drains Me</h3>
                        <ul className="space-y-3 text-white/70 text-sm">
                            <li className="flex items-start"><span className="text-red-400 mr-2">✕</span> Chaotic, unstructured meetings.</li>
                            <li className="flex items-start"><span className="text-red-400 mr-2">✕</span> Emotional arguments or office politics.</li>
                            <li className="flex items-start"><span className="text-red-400 mr-2">✕</span> Rushing to a quick fix without understanding the root cause.</li>
                            <li className="flex items-start"><span className="text-red-400 mr-2">✕</span> Disregard for agreed-upon standards.</li>
                        </ul>
                    </GlassCard>
                </section>

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

export default WorkingStyle;
