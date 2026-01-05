import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';
import WorkingStyleRadarChart from '../components/WorkingStyleRadarChart';
import { RootState } from '../store/store';

/**
 * About Page
 */
const About: React.FC = () => {
  const { aboutContent, career, projects } = useSelector((state: RootState) => state.content);

  // Helper to find related projects
  const getRelatedProjects = (tags: string[] | undefined) => {
    if (!tags || tags.length === 0) return [];
    return projects.filter(p => p.tags.some(t => tags.includes(t))).slice(0, 3);
  };

  return (
    <>
      <SEO
        title="About"
        description="Biography, leadership philosophy, and career history of Ryan Rentfro."
        canonical="https://rentfro.net/about"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          'mainEntity': {
            '@type': 'Person',
            'description': aboutContent.executiveSummary,
            'jobTitle': 'Chief Technology Officer',
            'name': 'Ryan Rentfro'
          }
        }}
      />
      <article className="space-y-20 animate-fade-in">

        {/* 1. Hero / Executive Summary */}
        <section aria-labelledby="about-heading">
          <h1 id="about-heading" className="text-4xl md:text-5xl font-bold mb-8">About Me — Who I Am</h1>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <p className="text-xl text-white/90 leading-relaxed font-light mb-6">
                {aboutContent.executiveSummary}
              </p>
              <div className="flex flex-wrap gap-3 mt-8">
                <span className="px-4 py-2 bg-brand-mint/10 border border-brand-mint/20 text-brand-mint rounded-full text-sm font-medium">Engineer</span>
                <span className="px-4 py-2 bg-brand-teal/10 border border-brand-teal/20 text-brand-teal rounded-full text-sm font-medium">Architect</span>
                <span className="px-4 py-2 bg-white/5 border border-white/10 text-white rounded-full text-sm font-medium">Strategist</span>
              </div>
            </div>

            {/* Value Prop Highlight */}
            <aside className="lg:col-span-1">
              <GlassCard className="h-full bg-gradient-to-br from-brand-mint/5 to-brand-teal/5 border-l-4 border-l-brand-mint">
                <h3 className="text-lg font-bold text-white mb-4">Let's Build</h3>
                <p className="text-white/70 italic leading-relaxed">
                  "{aboutContent.valueProposition}"
                </p>
              </GlassCard>
            </aside>
          </div>
        </section>

        {/* 2. Philosophy */}
        <section aria-labelledby="philosophy-heading">
          <h2 id="philosophy-heading" className="text-3xl font-bold mb-6 flex items-center gap-3">
            <span className="w-8 h-1 bg-brand-teal rounded-full"></span>
            Overview
          </h2>
          <GlassCard className="p-8 md:p-10">
            <p className="text-lg text-white/80 leading-relaxed">
              {aboutContent.philosophy}
            </p>
          </GlassCard>
        </section>

        {/* Working Style Teaser */}
        <section aria-labelledby="style-heading">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Link to="/about/working-style" className="block group h-full">
              <GlassCard className="p-8 h-full border-transparent group-hover:border-brand-mint/30 transition-colors bg-gradient-to-br from-brand-mint/5 to-transparent flex flex-col justify-center">
                <div className="flex justify-between items-center mb-6">
                  <h2 id="style-heading" className="text-2xl font-bold text-white group-hover:text-brand-mint transition-colors">My Working Style</h2>
                  <svg className="w-6 h-6 text-brand-mint transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                </div>

                <div className="flex flex-col gap-6 mb-6">
                  <div className="space-y-2">
                    <h3 className="text-xs uppercase tracking-widest text-brand-mint/80 font-bold">Core Archetype</h3>
                    <p className="text-white/90 leading-relaxed font-medium">
                      "Reforming Observer"—analytical, objective, and deeply focused on structural quality.
                    </p>
                  </div>

                  <div className="space-y-2 border-t border-white/10 pt-6">
                    <h3 className="text-xs uppercase tracking-widest text-brand-mint/80 font-bold">INTJ (The Architect)</h3>
                    <p className="text-white/70 text-sm leading-relaxed">
                      Strategic, systems-first mindset—valuing logic, efficiency, and long-term vision. I optimize workflows and architect scalable solutions from first principles.
                    </p>
                  </div>
                </div>

                <div className="flex items-center text-sm font-medium text-brand-mint group-hover:underline mt-auto">
                  Explore full profile
                </div>
              </GlassCard>
            </Link>
            <div className="h-full">
              <WorkingStyleRadarChart />
            </div>
          </div>
        </section>

        {/* 3. Core Leadership Strengths */}
        <section aria-labelledby="leadership-heading">
          <h2 id="leadership-heading" className="text-3xl font-bold mb-8">Professional Leadership & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutContent.leadershipStrengths.map((item, idx) => {
              const related = getRelatedProjects(item.relatedTags);

              const CardContent = (
                <GlassCard hoverEffect={!item.link} className={`group h-full flex flex-col ${item.link ? 'cursor-pointer' : ''}`}>
                  <div className="mb-4 text-brand-mint group-hover:scale-110 transition-transform origin-left">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-brand-mint transition-colors">{item.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6 flex-grow">
                    {item.description}
                  </p>

                  {/* Related Projects Mini-List */}
                  {related.length > 0 && (
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <p className="text-xs font-bold text-white/40 uppercase mb-2">Related Projects</p>
                      <ul className="space-y-1">
                        {related.map(p => (
                          <li key={p.id}>
                            <Link to={`/projects/${p.slug}`} className="text-xs text-brand-mint hover:underline truncate block">
                              {p.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {item.link && (
                    <div className="mt-4 flex items-center text-brand-mint text-sm font-medium group-hover:underline">
                      Learn more <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                    </div>
                  )}
                </GlassCard>
              );

              return item.link ? (
                <Link to={item.link} key={idx} className="block h-full no-underline">
                  {CardContent}
                </Link>
              ) : (
                <div key={idx} className="h-full">
                  {CardContent}
                </div>
              );
            })}
          </div>
        </section>

        {/* 4. Functional Expertise */}
        <section aria-labelledby="skills-heading">
          <h2 id="skills-heading" className="text-3xl font-bold mb-8">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.functionalExpertise.map((area, idx) => {
              const related = getRelatedProjects(area.relatedTags);

              return (
                <div key={idx} className="bg-white/5 border border-white/5 rounded-xl p-6 hover:bg-white/10 transition-colors flex flex-col h-full">
                  <h3 className="text-xl font-bold text-brand-teal mb-4">{area.category}</h3>
                  <ul className="space-y-3 mb-6 flex-grow">
                    {area.items.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start text-sm text-white/80">
                        <span className="mr-3 text-brand-teal/50 mt-1" aria-hidden="true">●</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                  {/* Related Projects for Expertise */}
                  {related.length > 0 && (
                    <div className="pt-4 border-t border-white/10 mt-auto">
                      <p className="text-xs font-bold text-white/40 uppercase mb-3">Seen in Action</p>
                      <div className="flex flex-wrap gap-2">
                        {related.map(p => (
                          <Link key={p.id} to={`/projects/${p.slug}`} className="text-xs bg-white/5 hover:bg-brand-mint/10 border border-white/10 rounded px-2 py-1 text-white/70 hover:text-brand-mint transition-colors">
                            {p.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 5. Strategic Philosophy */}
        <section aria-labelledby="strategic-heading">
          <GlassCard className="border-t-4 border-t-brand-teal/50 relative overflow-hidden">
            {/* Decorative Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-teal/10 blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 id="strategic-heading" className="text-3xl font-bold mb-6">{aboutContent.strategicFocus.title}</h2>
                <p className="text-white/80 leading-relaxed mb-6">
                  {aboutContent.strategicFocus.description}
                </p>
              </div>
              <div className="bg-brand-dark/30 rounded-xl p-6 border border-white/10">
                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-mint mb-4">Core Phases</h3>
                <ul className="space-y-4">
                  {aboutContent.strategicFocus.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-brand-mint mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      <span className="text-white/90 text-sm">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </GlassCard>
        </section >

        {/* 6. Timeline */}
        <section aria-labelledby="timeline-heading" >
          <h2 id="timeline-heading" className="text-3xl font-bold mb-8">Career & Technical Journey</h2>
          <div className="relative border-l border-white/10 ml-4 space-y-12 pb-4">
            {career.map((item) => (
              <div key={item.id} className="relative pl-8 md:pl-12">
                <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-brand-mint shadow-[0_0_10px_#00FFA3]" aria-hidden="true" />
                <div className="flex flex-col md:flex-row md:items-baseline mb-2">
                  <h3 className="text-xl font-bold text-white mr-3">{item.role}</h3>
                  <span className="text-brand-teal font-medium">{item.company}</span>
                  <span className="md:ml-auto text-sm text-white/40 font-mono mt-1 md:mt-0">{item.period}</span>
                </div>
                <p className="text-white/70 max-w-3xl leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="flex justify-center pt-8 pb-8">
          <button className="px-8 py-4 border border-white/20 rounded-lg text-white hover:bg-white/10 hover:border-brand-mint transition-colors flex items-center gap-3 group focus:outline-none focus:ring-4 focus:ring-brand-mint/50">
            <span className="group-hover:text-brand-mint transition-colors font-medium">Download Resume</span>
            <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
          </button>
        </section>
      </article >
    </>
  );
};

export default About;
