import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import About from './About';

// Mock the 3D component
jest.mock('../components/3d/JerusalemCubeMandelbulb', () => () => <div data-testid="3d-fractal">3D Fractal</div>);

describe('About Page', () => {
    it('renders about content', () => {
        renderWithProviders(<About />);

        expect(screen.getByText(/About Me/i)).toBeInTheDocument();
        expect(screen.getByText(/About Me/i)).toBeInTheDocument();
        // expect(screen.getByTestId('3d-fractal')).toBeInTheDocument();

        // Check for skills section or similar static content
        const technicalElements = screen.getAllByText(/Technical/i);
        expect(technicalElements.length).toBeGreaterThan(0);
    });
});
