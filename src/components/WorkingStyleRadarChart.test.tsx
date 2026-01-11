import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import WorkingStyleRadarChart from './WorkingStyleRadarChart';

// Mock Recharts fully
jest.mock('recharts', () => ({
    Legend: () => <div data-testid="legend" />,
    PolarAngleAxis: () => <div data-testid="polar-angle-axis" />,
    PolarGrid: () => <div data-testid="polar-grid" />,
    PolarRadiusAxis: () => <div data-testid="polar-radius-axis" />,
    Radar: () => <div data-testid="radar-slice" />,
    RadarChart: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="radar-chart">{children}</div>
    ),
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => (
        <div data-testid="responsive-container" style={{ height: 600, width: 600 }}>
            {children}
        </div>
    ),
    Tooltip: () => <div data-testid="tooltip" />,
}));

describe('WorkingStyleRadarChart', () => {
    it('renders the chart and analysis text', () => {
        renderWithProviders(<WorkingStyleRadarChart />);

        // Check header
        expect(screen.getByText('Working Style Analysis')).toBeInTheDocument();
        expect(screen.getByText(/Conscious \(Adapting\) vs Less Conscious \(Natural\)/i)).toBeInTheDocument();

        // Check mocked chart components
        expect(screen.getByTestId('responsive-container')).toBeInTheDocument();
        expect(screen.getByTestId('radar-chart')).toBeInTheDocument();
        expect(screen.getByTestId('polar-grid')).toBeInTheDocument();
        expect(screen.getByTestId('polar-angle-axis')).toBeInTheDocument();
        // Check for the 2 radar slices
        expect(screen.getAllByTestId('radar-slice')).toHaveLength(2);

        // Check content description
        expect(screen.getByText(/Cool Blue/i)).toBeInTheDocument();
        expect(screen.getByText(/Fiery Red/i)).toBeInTheDocument();
    });
});
