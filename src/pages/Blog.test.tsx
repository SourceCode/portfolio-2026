import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/utils';
import Blog from './Blog';

describe('Blog Page', () => {
    it('renders blog list', () => {
        renderWithProviders(<Blog />);

        expect(screen.getByRole('heading', { name: /Insights/i })).toBeInTheDocument();
    });
});
