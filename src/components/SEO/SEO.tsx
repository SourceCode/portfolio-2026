import { config } from '@/config';
import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    canonical?: string;
    description: string;
    image?: string;
    schema?: Record<string, unknown>;
    title: string;
    type?: 'article' | 'website';
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
    canonical,
    description,
    image = '/og-default.jpg', // Ensure you have a default OG image
    schema,
    title,
    type = 'website'
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
