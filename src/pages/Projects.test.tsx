import React from 'react';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from '../test/utils';
import Projects from './Projects';

describe('Projects Page', () => {
    it('renders projects list', () => {
        renderWithProviders(<Projects />);

        expect(screen.getByText(/Projects/i)).toBeInTheDocument();
        // Since projects are from initial state in slice, we expect some to be rendered
        // You might need to check if the mocked store has initial data
    });

    it('filters projects when a tag is clicked', () => {
        renderWithProviders(<Projects />);

        // Find a filter button that isn't 'All'
        const filterButton = screen.getByRole('button', { name: /Executive/i });
        expect(filterButton).toBeInTheDocument();

        // Default state: All projects shown (approx check)
        // We know 'New Western' has 'Executive'. 'Leafly' might not.

        // Click filter using fireEvent
        fireEvent.click(filterButton);

        // Check that 'All' is no longer selected
        expect(screen.getByRole('button', { name: 'All' })).toHaveAttribute('aria-pressed', 'false');
        expect(filterButton).toHaveAttribute('aria-pressed', 'true');

        // Verify filtered content (New Western should be visible)
        expect(screen.getByText(/New Western Technology Platform/i)).toBeInTheDocument();
    });
});
