import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * RouteAnnouncer
 * 
 * Accessibility component that announces page navigation events to screen readers.
 * Essential for Single Page Applications (SPAs) where standard browser navigation events don't fire.
 */
const RouteAnnouncer: React.FC = () => {
  const location = useLocation();
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    // Simple mapping of paths to readable names
    const pageName = location.pathname === '/' ? 'Home' : location.pathname.replace('/', '').replace(/-/g, ' ');
    // Capitalize first letter
    const formattedName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
    
    setAnnouncement(`Navigated to ${formattedName}`);
  }, [location]);

  return (
    <div 
      role="status" 
      aria-live="polite" 
      aria-atomic="true" 
      className="sr-only"
    >
      {announcement}
    </div>
  );
};

export default RouteAnnouncer;
