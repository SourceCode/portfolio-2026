import React from 'react';
import { Helmet } from 'react-helmet-async';

import { config } from '../../config';

interface SEOProps {
    title: string;
    description: string;
    canonical?: string;
    type?: 'website' | 'article';
    name?: string;
    image?: string;
    schema?: Record<string, any>;
}

/**
 * SEO Component
 * 
 * Manages document head for SEO including:
 * - Title and Meta Description
 * - Open Graph tags (Facebook/Reference)
 * - Twitter Card tags
 * - JSON-LD Structured Data
 */
const SEO: React.FC<SEOProps> = ({
    title,
    description,
    canonical,
    type = 'website',
    name = 'Ryan Rentfro',
    image = '/og-default.jpg', // Ensure you have a default OG image
    schema
}) => {
    const { siteUrl } = config;
    const fullTitle = `${title} | Ryan Rentfro`;
    const fullUrl = canonical ? canonical : typeof window !== 'undefined' ? window.location.href : '';

    return (
        <Helmet>
            {/* Standard Meta */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {canonical && <link rel="canonical" href={canonical} />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:site_name" content="Ryan Rentfro | Portfolio" />
            {image && <meta property="og:image" content={`${siteUrl}${image}`} />}

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:creator" content="@RyanRentfro" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {image && <meta name="twitter:image" content={`${siteUrl}${image}`} />}

            {/* Structured Data */}
            {schema && (
                <script type="application/ld+json">
                    {JSON.stringify(schema)}
                </script>
            )}
        </Helmet>
    );
};

export default SEO;
