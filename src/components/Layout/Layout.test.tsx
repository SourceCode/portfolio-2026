import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import Layout from './Layout';
import Navbar from './Navbar';

describe('Layout Component', () => {
    it('renders children and navbar', () => {
        renderWithProviders(
            <Layout>
                <div data-testid="child-content">Child Content</div>
            </Layout>
        );

        expect(screen.getByTestId('child-content')).toBeInTheDocument();
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });
});

describe('Navbar Component', () => {
    it('renders logo and navigation links', () => {
        renderWithProviders(<Navbar />);

        expect(screen.getByText(/Ryan Rentfro/i)).toBeInTheDocument();
        expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
    });

    it('toggles mobile menu', async () => {
        renderWithProviders(<Navbar />);

        // Mobile menu should be hidden initially (or button visible on small screens)
        // Since we can't easily resize window in jsdom to trigger CSS media queries,
        // we rely on the button being present in the DOM (md:hidden class doesn't remove it from DOM).
        const toggleButton = screen.getByLabelText(/Toggle Navigation Menu/i);

        // Click to open
        toggleButton.click();

        await waitFor(() => {
            expect(screen.getByRole('button', { expanded: true })).toBeInTheDocument();
            // Check for mobile menu container
            expect(document.getElementById('mobile-menu')).toBeInTheDocument();
        });

        // Click to close via link
        const mobileLink = screen.getAllByText(/About/i).find(el => el.closest('#mobile-menu'));
        if (mobileLink) {
            mobileLink.click();
            if (mobileLink) {
                mobileLink.click();
                await waitFor(() => {
                    expect(document.getElementById('mobile-menu')).not.toBeInTheDocument();
                });
            }
        }
    });

    it('highlights active link', () => {
        renderWithProviders(<Navbar />, { route: '/about' });

        // The About link should have the active class/style
        const aboutLinks = screen.getAllByText(/About/i);
        // We expect at least one of them (desktop or mobile) to have the active indicator
        // In this specific implementation, checking for the unique text color class is robust
        const activeLink = aboutLinks.find(link => link.className.includes('text-brand-mint'));
        expect(activeLink).toBeInTheDocument();

        // Ensure Home is NOT active (covers the specific branch in isActive checking for '/' not matching '/about')
        const homeLinks = screen.getAllByText(/Home/i);
        const activeHome = homeLinks.find(link => link.className.includes('text-brand-mint'));
        expect(activeHome).toBeUndefined();
    });

    it('changes style on scroll', async () => {
        renderWithProviders(<Navbar />);

        const nav = screen.getByRole('navigation');
        expect(nav.className).toContain('bg-transparent');

        // Simulate scroll
        Object.defineProperty(window, 'scrollY', { value: 100, configurable: true });
        window.dispatchEvent(new Event('scroll'));

        await waitFor(() => {
            expect(nav.className).toContain('bg-brand-dark/90');
        });
    });

    it('cleans up scroll listener on unmount', () => {
        const removeEventListener = jest.spyOn(window, 'removeEventListener');
        const { unmount } = renderWithProviders(<Navbar />);
        unmount();
        expect(removeEventListener).toHaveBeenCalledWith('scroll', expect.any(Function));
    });
});
