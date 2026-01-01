import React from 'react';

/**
 * LoadingScreen Component
 * 
 * A minimalistic loading indicator using the brand color palette.
 * Used as a fallback during lazy loading of routes or heavy components.
 */
const LoadingScreen: React.FC = () => (
  <div className="flex items-center justify-center w-full h-full min-h-[50vh] animate-fade-in">
    <div className="relative w-16 h-16">
       {/* Outer Ring */}
       <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
       {/* Spinning Segment */}
       <div className="absolute inset-0 border-t-2 border-brand-mint rounded-full animate-spin"></div>
       {/* Inner Glow */}
       <div className="absolute inset-0 bg-brand-mint/5 rounded-full blur-xl animate-pulse"></div>
    </div>
  </div>
);

export default React.memo(LoadingScreen);