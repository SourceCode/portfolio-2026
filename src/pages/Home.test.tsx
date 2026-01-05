import { screen, waitFor } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import Home from './Home';

// Mock the 3D component to save resources
jest.mock('../components/3d/ReflectiveSphereRings', () => () => <div data-testid="3d-scene">3D Scene</div>);

describe('Home Page', () => {
    it('renders hero section and scene', async () => {
        renderWithProviders(<Home />);

        expect(screen.getByText(/Executive Technology Leader/i)).toBeInTheDocument();
        expect(screen.getByText(/Product & Platform Architect/i)).toBeInTheDocument();
        expect(screen.getByRole('img', { name: /Interactive 3D visualization/i })).toBeInTheDocument();

        // Wait for SEO
        await waitFor(() => {
            expect(document.title).toContain('Ryan Rentfro');
        });
    });
});
