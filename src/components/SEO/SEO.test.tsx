import React from 'react';
import { renderWithProviders } from '../../test/utils';
import SEO from './SEO';
import { waitFor } from '@testing-library/react';

describe('SEO Component', () => {
    it('sets default titles and meta tags', async () => {
        renderWithProviders(<SEO title="Test Page" description="Test Description" />);

        await waitFor(() => {
            expect(document.title).toBe('Test Page | Ryan Rentfro');
            const metaDesc = document.querySelector('meta[name="description"]');
            expect(metaDesc).toHaveAttribute('content', 'Test Description');
        });
    });

    it('sets canonical url correctly', async () => {
        renderWithProviders(<SEO title="Test" description="Desc" canonical="https://example.com/test" />);
        await waitFor(() => {
            // console.log(document.head.innerHTML);
            const linkCanonical = document.querySelector('link[rel="canonical"]');
            expect(linkCanonical).toHaveAttribute('href', 'https://example.com/test');
        });
    });
});
