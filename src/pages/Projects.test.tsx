import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import Projects from './Projects';

describe('Projects Page', () => {
    it('renders projects list', () => {
        renderWithProviders(<Projects />);

        expect(screen.getByText(/Selected Works/i)).toBeInTheDocument();
        // Since projects are from initial state in slice, we expect some to be rendered
        // You might need to check if the mocked store has initial data
    });

});
