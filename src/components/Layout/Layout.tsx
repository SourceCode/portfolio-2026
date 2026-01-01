import React from 'react';
import Navbar from './Navbar';
import GradientBackground from '../3d/GradientBackground';
import RouteAnnouncer from '../UI/RouteAnnouncer';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout Component
 * 
 * Provides the global layout structure.
 * 
 * Accessibility Updates:
 * - Added "Skip to content" link.
 * - Semantic <main> and <footer> landmarks.
 * - RouteAnnouncer for screen readers.
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white font-sans selection:bg-brand-mint/30 selection:text-white">
      {/* Route Announcer for Screen Readers */}
      <RouteAnnouncer />
      
      {/* Skip Navigation Link */}
      <a 
        href="#main-content"
        className="fixed top-4 left-4 z-[100] -translate-y-[200%] focus:translate-y-0 transition-transform bg-brand-mint text-black font-bold px-6 py-3 rounded shadow-lg"
      >
        Skip to content
      </a>

      {/* Background Shader Layer */}
      <GradientBackground />
      
      <Navbar />
      
      <main id="main-content" className="relative z-0 pt-24 pb-20 px-6 max-w-7xl mx-auto focus:outline-none" tabIndex={-1}>
        {children}
      </main>
      
      <footer className="relative z-10 py-8 text-center text-white/30 text-xs border-t border-white/5 mx-6">
        <p>&copy; {new Date().getFullYear()} Ryan Rentfro. Crafted with React, Three.js & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Layout;
