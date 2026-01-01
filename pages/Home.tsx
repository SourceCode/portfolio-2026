import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import GlassCard from '../components/UI/GlassCard';
import LoadingScreen from '../components/UI/LoadingScreen';
import { useSEO } from '../hooks/useSEO';

// Lazy load the heavy 3D component
const ReflectiveSphereRings = React.lazy(() => import('../components/3d/ReflectiveSphereRings'));

/**
 * Home Page
 */
const Home: React.FC = () => {
  // Schema.org Structured Data
  useSEO(
    { title: 'Home', description: 'Ryan Rentfro - CTO, Product & Platform Architect, and Executive Leader specializing in scalable systems and enterprise transformation.' },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Ryan Rentfro",
      "url": "https://ryanrentfro.com",
      "jobTitle": "Chief Technology Officer",
      "sameAs": [
        "https://linkedin.com/in/ryanrentfro",
        "https://github.com/ryanrentfro"
      ],
      "knowsAbout": ["Executive Leadership", "Enterprise Architecture", "Product Strategy", "Scalable Systems", "Digital Transformation"]
    }
  );

  return (
    <div className="min-h-[80vh] flex flex-col justify-center animate-fade-in-up">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-12 mb-5" aria-label="Introduction">
        
        {/* Text Content */}
        <div className="flex-1 max-w-2xl z-20">
          <h2 className="text-brand-mint font-medium tracking-wider mb-4 uppercase text-sm drop-shadow-[0_0_5px_rgba(0,255,163,0.5)]">
            Executive Technology Leader
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-brand-mint to-brand-teal">
            Ryan Rentfro
          </h1>
          <p className="text-xl md:text-2xl text-white font-light mb-8 max-w-2xl leading-relaxed">
            CTO • Product & Platform Architect • Leader
          </p>
          <p className="text-lg text-white/80 max-w-2xl mb-12 font-light">
            Driving business transformation through technical vision and architectural excellence. I build scalable platforms and high-performance engineering cultures that turn complex challenges into market-leading products.
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
        <GlassCard hoverEffect>
          <h3 className="text-xl font-semibold mb-2 text-brand-teal">Strategic Leadership</h3>
          <p className="text-white/70 text-sm">Aligning technical strategy with business goals to drive enterprise transformation and sustainable growth.</p>
        </GlassCard>
        <GlassCard hoverEffect>
          <h3 className="text-xl font-semibold mb-2 text-brand-mint">Platform Architecture</h3>
          <p className="text-white/70 text-sm">Designing robust, scalable ecosystems that ensure security, reliability, and rapid product velocity.</p>
        </GlassCard>
        <GlassCard hoverEffect>
          <h3 className="text-xl font-semibold mb-2 text-white">Product Engineering</h3>
          <p className="text-white/70 text-sm">Unifying engineering, design, and product vision to deliver exceptional, user-centric digital experiences.</p>
        </GlassCard>
      </section>
    </div>
  );
};

export default Home;