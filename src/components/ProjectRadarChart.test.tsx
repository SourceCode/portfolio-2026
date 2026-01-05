import { render, screen } from '@testing-library/react';
import React from 'react';

import ProjectRadarChart from '../components/ProjectRadarChart';
import { ProjectMetrics } from '../types';

// Mock Recharts since it doesn't render well in JSDOM
jest.mock('recharts', () => ({
    PolarAngleAxis: () => <div data-testid="polar-angle-axis" />,
    PolarGrid: () => <div data-testid="polar-grid" />,
    PolarRadiusAxis: () => <div data-testid="polar-radius-axis" />,
    Radar: () => <div data-testid="radar" />,
    RadarChart: ({ children }: { children: React.ReactNode }) => <div data-testid="radar-chart">{children}</div>,
    ResponsiveContainer: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    Tooltip: () => <div data-testid="tooltip" />,
}));

describe('ProjectRadarChart', () => {
    const mockMetrics: ProjectMetrics = {
        ambition: 8,
        creativity: 9,
        curiosity: 7,
        entrepreneurship: 6,
        learning: 8,
    };

    it('renders the radar chart with metrics', () => {
        render(<ProjectRadarChart metrics={mockMetrics} />);

        expect(screen.getByTestId('radar-chart')).toBeInTheDocument();
        expect(screen.getByTestId('polar-grid')).toBeInTheDocument();
        expect(screen.getByTestId('polar-angle-axis')).toBeInTheDocument();
        expect(screen.getByTestId('polar-radius-axis')).toBeInTheDocument();
        expect(screen.getByTestId('radar')).toBeInTheDocument();
    });
});
