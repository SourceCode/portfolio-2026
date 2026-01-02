import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar Component
 * 
 * The main navigation header. It adapts its appearance based on scroll position.
 * 
 * Accessibility Updates:
 * - Semantic <nav> element.
 * - Semantic <ul> and <li> for links.
 * - ARIA attributes for mobile menu button state.
 */
const Navbar: React.FC = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Monitor scroll position to toggle background styles
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? 'bg-brand-dark/90 backdrop-blur-md border-white/10 py-4' 
            : 'bg-transparent border-transparent py-6'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight text-white hover:text-brand-mint transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded-lg px-2"
            aria-label="Ryan Rentfro Portfolio Home"
          >
            Ryan Rentfro
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center space-x-8 list-none m-0 p-0">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className={`text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint rounded px-2 py-1 ${
                    isActive(link.path) 
                      ? 'text-brand-mint drop-shadow-[0_0_8px_rgba(0,255,163,0.5)]' 
                      : 'text-white/60 hover:text-white'
                  }`}
                  aria-current={isActive(link.path) ? 'page' : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button 
            className="md:hidden text-white hover:text-brand-mint transition-colors p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  {mobileMenuOpen ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
              </svg>
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl"
          >
            <ul className="flex flex-col space-y-4 list-none m-0 p-0">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-lg font-medium block p-2 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint ${
                      isActive(link.path) ? 'text-brand-mint' : 'text-white/70'
                    }`}
                    aria-current={isActive(link.path) ? 'page' : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
