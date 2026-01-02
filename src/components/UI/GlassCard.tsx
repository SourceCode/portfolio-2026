import React from 'react';

interface GlassCardProps {
  /** The content to be rendered inside the card */
  children: React.ReactNode;
  /** Optional additional CSS classes */
  className?: string;
  /** Whether to enable hover animation/elevation effects. Default false. */
  hoverEffect?: boolean;
  /** Optional click handler. If provided, the component renders as a semantic button. */
  onClick?: () => void;
}

/**
 * GlassCard Component
 * 
 * A UI container that implements the "Frosted Glass" aesthetic.
 * 
 * Accessibility Update:
 * - If `onClick` is provided, it renders as a `<button>` tag to ensure native keyboard focus and interaction.
 * - Otherwise, renders as a standard `<div>`.
 */
const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', hoverEffect = false, onClick }) => {
  const baseClasses = 'relative overflow-hidden bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-lg transition-all duration-300 text-left w-full';
  const hoverClasses = hoverEffect ? 'hover:bg-white/10 hover:border-white/20 hover:scale-[1.01] hover:shadow-2xl' : '';
  const interactiveClasses = onClick ? 'cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-mint' : '';

  const content = (
    <>
      {/* Noise Texture Overlay for texture/grain */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")'
        }}
        aria-hidden="true"
      />
      <div className="relative z-10 p-6 sm:p-8">
        {children}
      </div>
    </>
  );

  if (onClick) {
    return (
      <button 
        className={`${baseClasses} ${hoverClasses} ${interactiveClasses} ${className}`} 
        onClick={onClick}
        type="button"
      >
        {content}
      </button>
    );
  }

  return (
    <div className={`${baseClasses} ${hoverClasses} ${className}`}>
      {content}
    </div>
  );
};

export default React.memo(GlassCard);
