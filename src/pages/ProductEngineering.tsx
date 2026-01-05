import React from 'react';
import { Link } from 'react-router-dom';

import RelatedProjects from '../components/RelatedProjects';
import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

const ProductEngineering: React.FC = () => {
    return (
        <>
            <SEO
                title="Product Engineering | Ryan Rentfro"
                description="Unifying engineering, design, and product vision to deliver exceptional, user-centric digital experiences."
                canonical="https://rentfro.net/expertise/product-engineering"
            />
            <article className="animate-fade-in space-y-16">

                {/* Header */}
                <section className="relative">
                    <div className="absolute top-0 left-0 w-32 h-1 bg-white/20 rounded-full mb-8"></div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-6 pt-8">Product Engineering</h1>
                    <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed max-w-4xl">
                        Unifying engineering, design, and product vision to deliver exceptional, user-centric digital experiences.
                    </p>
                </section>

                {/* Core Philosophy */}
                <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-white">The User is the North Star</h2>
                        <p className="text-white/70 leading-relaxed mb-6">
                            Great product engineering isn't just about clean code—it's about empathy. It requires engineers to understand the user's journey, the designer's intent, and the business's goals. I foster a culture where engineers are encouraged to ask "Why?" before discussing "How."
                        </p>
                        <p className="text-white/70 leading-relaxed mb-6">
                            My background as a multidisciplinary creator (Design, Music, Code) helps me bridge the often-siloed worlds of creative and technical teams. I speak the language of pixels and the language of pointers.
                        </p>
                    </div>
                    <GlassCard className="p-8 flex flex-col justify-center border-l-4 border-l-white">
                        <h3 className="text-xl font-bold text-white mb-4">Engineering Values</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <span className="text-white/50 mr-3">●</span>
                                <span className="text-white/80">User-Centric Architecture</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white/50 mr-3">●</span>
                                <span className="text-white/80">Design System Standards</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white/50 mr-3">●</span>
                                <span className="text-white/80">Performance as a Feature (Core Vitals)</span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-white/50 mr-3">●</span>
                                <span className="text-white/80">Accessibility (A11y) Leadership</span>
                            </li>
                        </ul>
                    </GlassCard>
                </section>

                {/* Case Study: Leafly */}
                <section>
                    <h2 className="text-3xl font-bold mb-8">Consumer-Facing Scale</h2>
                    <GlassCard className="p-8 md:p-10">
                        <div className="flex flex-col md:flex-row gap-6 mb-6">
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-white mb-2">Audience Journey & SEO</h3>
                                <p className="text-brand-mint font-medium mb-4">Leafly</p>
                                <p className="text-white/70 leading-relaxed">
                                    Led the engineering group responsible for the world's largest cannabis information resource, serving 120M+ annual visitors. We re-architected the consumer platform to optimize for Core Web Vitals and programmatic SEO, securing dominant search rankings for over 5,000 strain varieties and driving massive organic acquisition.
                                </p>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 border-t border-white/10 pt-8">
                            <div>
                                <span className="block text-3xl font-bold text-brand-teal mb-1">120M+</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Annual Visitors</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-brand-teal mb-1">SEO</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Dominant Market Share</span>
                            </div>
                            <div>
                                <span className="block text-3xl font-bold text-brand-teal mb-1">Modern</span>
                                <span className="text-sm text-white/50 uppercase tracking-widest">Headless Architecture</span>
                            </div>
                        </div>
                    </GlassCard>
                </section>

                {/* Focus Areas */}
                <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <Link to="/expertise/design-systems" className="block h-full group">
                        <GlassCard hoverEffect className="h-full p-6 border-transparent group-hover:border-brand-mint/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Design Systems</h3>
                                <svg className="w-4 h-4 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                            <p className="text-sm text-white/70">Building shared component libraries that ensure consistency, accelerate development, and bridge the gap between Figma and React.</p>
                        </GlassCard>
                    </Link>

                    <Link to="/expertise/modern-frontend" className="block h-full group">
                        <GlassCard hoverEffect className="h-full p-6 border-transparent group-hover:border-brand-mint/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Modern Frontend</h3>
                                <svg className="w-4 h-4 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                            <p className="text-sm text-white/70">Expertise in Next.js, React, TypeScript, and TailwindCSS to build interfaces that are performant, responsive, and maintainable.</p>
                        </GlassCard>
                    </Link>

                    <Link to="/expertise/data-driven-ux" className="block h-full group">
                        <GlassCard hoverEffect className="h-full p-6 border-transparent group-hover:border-brand-mint/30 transition-colors">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-lg font-bold text-brand-mint group-hover:text-white transition-colors">Data-Driven UX</h3>
                                <svg className="w-4 h-4 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </div>
                            <p className="text-sm text-white/70">Integrating A/B testing and analytics directly into the development workflow to validate hypotheses and iterate on user value.</p>
                        </GlassCard>
                    </Link>
                </section>

                {/* Related Projects */}
                <RelatedProjects tags={['Product', 'Education', 'UX', 'Mobile', 'Design', 'Strategy']} />

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

export default ProductEngineering;
