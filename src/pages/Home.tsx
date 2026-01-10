import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';

import SEO from '../components/SEO/SEO';
import GlassCard from '../components/UI/GlassCard';

// Lazy load the heavy 3D component
const ReflectiveSphereRings = React.lazy(() => import('../components/3d/ReflectiveSphereRings'));

/**
 * Home Page
 */
const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Ryan Rentfro - CTO, Product & Platform Architect, and Executive Leader specializing in scalable systems and enterprise transformation."
        canonical="https://rentfro.net/"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          'jobTitle': 'Chief Technology Officer',
          'knowsAbout': ['Executive Leadership', 'Enterprise Architecture', 'Product Strategy', 'Scalable Systems', 'Digital Transformation'],
          'name': 'Ryan Rentfro',
          'sameAs': [
            'https://linkedin.com/in/ryanrentfro',
            'https://github.com/ryanrentfro'
          ],
          'url': 'https://ryanrentfro.com'
        }}
      />
      <div className="min-h-[80vh] flex flex-col justify-center animate-fade-in-up">
        {/* Hero Section */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-5" aria-label="Introduction">

          {/* Text Content */}
          <div className="flex-1 max-w-2xl z-20">
            <h2 className="text-brand-mint font-medium tracking-wider mb-4 uppercase text-sm drop-shadow-[0_0_5px_rgba(0,255,163,0.5)]">
              Executive Technology Leader
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-mint to-brand-teal pb-2">
              Ryan Rentfro
            </h1>
            <p className="text-xl md:text-2xl text-white font-light mb-8 max-w-2xl leading-relaxed">
              CTO • Product & Platform Architect • Leader
            </p>
            <p className="text-lg text-white/80 max-w-2xl mb-12 font-light">
              Driving business transformation through technical vision and architectural excellence. With executive leadership experience scaling platforms at New Western, Anywhere Real Estate, and Zillow Group, I build high-performance engineering cultures that turn complex challenges into market-leading products.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/projects">
                <button className="px-8 py-4 bg-brand-mint text-black font-bold rounded-full hover:bg-brand-teal hover:scale-105 transition-all duration-300 shadow-[0_0_15px_rgba(0,255,163,0.3)] focus:outline-none focus:ring-4 focus:ring-brand-mint/50">
                  View Work
                </button>
              </Link>
              <Link to="/contact">
                <button className="px-8 py-4 bg-white/5 text-white backdrop-blur-md border border-white/20 font-semibold rounded-full hover:bg-white/10 hover:border-brand-mint transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-white/50">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>

          {/* 3D Visual Hero */}
          <div className="hidden lg:block flex-1 w-full h-[500px] xl:h-[600px] relative" role="img" aria-label="Interactive 3D visualization of a moon with laser scanning drones">
            <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-white/20">Loading Visuals...</div>}>
              <ReflectiveSphereRings />
            </Suspense>
          </div>

        </section>

        {/* Feature Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-20" aria-label="Core Competencies">
          <Link to="/expertise/strategic-leadership" className="block h-full group">
            <GlassCard hoverEffect className="h-full border-transparent group-hover:border-brand-mint/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-brand-mint group-hover:text-white transition-colors">Strategic Leadership</h3>
                <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
              <p className="text-white/70 text-sm">Aligning technical strategy with business goals to drive enterprise transformation and sustainable growth.</p>
            </GlassCard>
          </Link>

          <Link to="/expertise/platform-architecture" className="block h-full group">
            <GlassCard hoverEffect className="h-full border-transparent group-hover:border-brand-teal/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-brand-mint group-hover:text-white transition-colors">Platform Architecture</h3>
                <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
              <p className="text-white/70 text-sm">Designing robust, scalable ecosystems that ensure security, reliability, and rapid product velocity.</p>
            </GlassCard>
          </Link>

          <Link to="/expertise/product-engineering" className="block h-full group">
            <GlassCard hoverEffect className="h-full border-transparent group-hover:border-white/30 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-semibold text-brand-mint group-hover:text-white transition-colors">Product Engineering</h3>
                <svg className="w-5 h-5 text-brand-mint opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </div>
              <p className="text-white/70 text-sm">Unifying engineering, design, and product vision to deliver exceptional, user-centric digital experiences.</p>
            </GlassCard>
          </Link>
        </section>
      </div>
    </>
  );
};

export default Home;