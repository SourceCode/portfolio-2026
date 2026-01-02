import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../../test/utils';
import GlassCard from './GlassCard';
import LoadingScreen from './LoadingScreen';
import RouteAnnouncer from './RouteAnnouncer';

describe('UI Components', () => {
    describe('GlassCard', () => {
        it('renders as a div by default', () => {
            renderWithProviders(
                <GlassCard className="custom-class">
                    <div data-testid="content">Card Content</div>
                </GlassCard>
            );
            // The inner div renders the content. Matches structure: Div(Wrapper) -> [Noise, Div(ContentWrapper) -> Children]
            // We want the wrapper.
            // Using testid on child helps, but we want the component root.
            // Let's use the className to find it if possible, or just the noise sibling.
            // Or simpler: verify text presence and check container.

            // The structure is:
            // <div class="base... custom-class">
            //   <div noise />
            //   <div class="relative ...">...children...</div>
            // </div>

            // So closest('div') from text gives the inner wrapper. Parent of that is the root.
            const contentWrapper = screen.getByTestId('content').closest('.relative.z-10');
            const cardRoot = contentWrapper?.parentElement;

            expect(cardRoot).toBeInTheDocument();
            expect(cardRoot).toHaveClass('custom-class');
            expect(cardRoot).not.toHaveClass('hover:scale-[1.01]');
        });

        it('renders as a button when onClick is provided', () => {
            const handleClick = jest.fn();
            renderWithProviders(
                <GlassCard onClick={handleClick}>
                    Click Me
                </GlassCard>
            );
            const button = screen.getByRole('button', { name: /click me/i });
            expect(button).toBeInTheDocument();
            button.click();
            expect(handleClick).toHaveBeenCalledTimes(1);
        });

        it('applies hover effects when enabled', () => {
            renderWithProviders(
                <GlassCard hoverEffect>
                    <div data-testid="hover-content">Hover Me</div>
                </GlassCard>
            );
            const contentWrapper = screen.getByTestId('hover-content').closest('.relative.z-10');
            const cardRoot = contentWrapper?.parentElement;
            expect(cardRoot).toHaveClass('hover:scale-[1.01]');
        });
    });

    describe('LoadingScreen', () => {
        it('renders loading spinner', () => {
            renderWithProviders(<LoadingScreen />);
            // Assuming it has some accessible role or text, usually 'status' or just visual.
            // Adjust based on actual implementation.
            // If it's a 3D canvas, it might be harder to test, but we can check container
            const container = document.querySelector('.animate-spin');
            expect(container).toBeInTheDocument();
        });
    });

    describe('RouteAnnouncer', () => {
        it('announces Home on root path', () => {
            renderWithProviders(<RouteAnnouncer />, { route: '/' });
            // Since it's aria-live, we can query by role 'status'
            expect(screen.getByRole('status')).toHaveTextContent('Navigated to Home');
        });

        it('announces page name on other paths', () => {
            renderWithProviders(<RouteAnnouncer />, { route: '/about' });
            expect(screen.getByRole('status')).toHaveTextContent('Navigated to About');
        });

        it('formats complex paths correctly', () => {
            renderWithProviders(<RouteAnnouncer />, { route: '/project-detail' });
            expect(screen.getByRole('status')).toHaveTextContent('Navigated to Project detail');
        });
    });
});
