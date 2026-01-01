import { useEffect } from 'react';

interface MetaData {
  title: string;
  description: string;
}

/**
 * useSEO Hook
 * 
 * Manages document title, meta description, and JSON-LD structured data injection.
 * Ensures the site is machine-readable for AI and Search Engines.
 * 
 * @param meta - Title and description for the page
 * @param schema - The Schema.org JSON-LD object
 */
export const useSEO = (meta: MetaData, schema?: Record<string, any>) => {
  useEffect(() => {
    // 1. Update Title
    document.title = `${meta.title} | Ryan Rentfro`;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', meta.description);

    // 3. Inject JSON-LD Schema
    if (schema) {
      const scriptId = 'json-ld-schema';
      let script = document.getElementById(scriptId) as HTMLScriptElement;
      
      if (!script) {
        script = document.createElement('script');
        script.id = scriptId;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schema);
    }

    // Cleanup schema on unmount to prevent stale data
    return () => {
      // Optional: Remove schema script or leave it until next route overwrites it
    };
  }, [meta, schema]);
};
