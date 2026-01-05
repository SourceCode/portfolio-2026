import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const SystemDocumentation: React.FC = () => {
    return (
        <>
            <SEO
                title="System Documentation | Ryan Rentfro"
                description="Interactive storybooks that serve as live documentation, reducing onboarding time for developers and designers."
                canonical="https://rentfro.net/expertise/system-documentation"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-brand-blue rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">System Documentation</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Code without documentation is a black box. A Design System without documentation is just a folder of files.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-brand-blue">Interactive Playgrounds</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Static documentation goes stale the moment it's written. I believe in **Living Documentation** generated directly from the code.
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Tools like Storybook allow developers and designers to interact with components in isolation. They can toggle props, test edge cases (e.g., extremely long text), and copy-paste code snippets directly into their features. This reduces "How do I use this?" questions to near zero.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-brand-blue">
                        <h3 className="text-xl font-bold text-white mb-4">Value for Everyone</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>For Engineers:</strong> "How does the `Button` handle the `loading` state?" (Click the toggle in Storybook and see).</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>For Designers:</strong> "Do we have a component for this?" (Browse the catalog to avoid re-inventing the wheel).</div>
                            </li>
                            <li className="flex items-start">
                                <span className="text-brand-blue mr-3">●</span>
                                <div className="text-white/80"><strong>For QA:</strong> "Does this break in Dark Mode?" (Testing visual regressions is easier in isolation).</div>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Best Practices */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">What We Document</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Usage Guidelines</h3>
                            <p className="text-sm text-white/70">"Do's and Don'ts." When should you use a `PrimaryButton` vs a `SecondaryButton`? What tone of voice do we use in `Alert` banners?</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Prop Tables</h3>
                            <p className="text-sm text-white/70">Auto-generated from TypeScript interfaces. Every prop, its type, default value, and description is always up to date.</p>
                        </GlassCard>
                        <GlassCard className="p-6">
                            <h3 className="text-lg font-bold text-brand-blue mb-3">Design Principles</h3>
                            <p className="text-sm text-white/70">The "Why" behind the system. Our spacing scale, color theory, and accessibility standards explained.</p>
                        </GlassCard>
                    </div>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Documentation', 'Process', 'Design', 'Engineering']} />

                {/* Back Link */}
                <div className="pt-8 border-t border-white/10">
                    <Link to="/expertise/design-systems" className="inline-flex items-center text-brand-blue hover:text-white transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" /></svg>
                        Back to Design Systems
                    </Link>
                </div>

            </article>
        </>
    );
};

export default SystemDocumentation;
