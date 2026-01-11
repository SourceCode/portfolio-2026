import { screen } from '@testing-library/react';
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import { renderWithProviders } from '../test/utils';
import TagDetail from './TagDetail';

// Mock dependencies
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}));

jest.mock('../components/3d/GradientBackground', () => () => <div data-testid="gradient-bg">BG</div>);

describe('TagDetail Page', () => {
    const preloadedState = {
        content: {
            projects: [
                {
                    category: 'Web',
                    description: 'Full description for React project.',
                    featured: false,
                    id: '1',
                    imageUrl: 'img1.jpg',
                    slug: 'react-project',
                    summary: 'A React App',
                    tags: ['React', 'TypeScript'],
                    title: 'React Project',
                    year: '2024'
                },
                {
                    category: 'Backend',
                    description: 'Full description for Python project.',
                    featured: false,
                    id: '2',
                    imageUrl: 'img2.jpg',
                    slug: 'python-script',
                    summary: 'A Python Script',
                    tags: ['Python', 'Automation'],
                    title: 'Python Script',
                    year: '2023'
                }
            ],
            // Add other required state slices with empty/default values to satisfy types
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            aboutContent: { functionalExpertise: [], leadershipStrengths: [] } as any,
            blogPosts: [],
            career: [],
            loading: false
        }
    };

    const renderTagPage = (tag: string) => {
        (useParams as jest.Mock).mockReturnValue({ tagId: tag });
        return renderWithProviders(
            <Routes>
                <Route path="/tags/:tagId" element={<TagDetail />} />
            </Routes>,
            {
                preloadedState,
                route: `/tags/${encodeURIComponent(tag)}`
            }
        );
    };

    it('renders filtered projects matching the tag', () => {
        renderTagPage('React');

        // Should show the header (H1)
        expect(screen.getByRole('heading', { level: 1, name: /Tag: React/i })).toBeInTheDocument();

        // Should show the matching project
        expect(screen.getByText('React Project')).toBeInTheDocument();

        // Should NOT show unrelated projects
        expect(screen.queryByText('Python Script')).not.toBeInTheDocument();
    });

    it('renders multiple projects if they share a tag', () => {
        // Add another React project to the state for this specific test
        const multiState = {
            ...preloadedState,
            content: {
                ...preloadedState.content,
                projects: [
                    ...preloadedState.content.projects,
                    {
                        category: 'Mobile',
                        description: 'Full description',
                        featured: false,
                        id: '3',
                        imageUrl: 'img3.jpg',
                        slug: 'rn-app',
                        summary: 'Mobile App',
                        tags: ['React', 'Mobile'],
                        title: 'React Native App',
                        year: '2025'
                    }
                ]
            }
        };

        (useParams as jest.Mock).mockReturnValue({ tagId: 'React' });
        renderWithProviders(
            <Routes>
                <Route path="/tags/:tagId" element={<TagDetail />} />
            </Routes>,
            {
                preloadedState: multiState,
                route: '/tags/React'
            }
        );

        expect(screen.getByText('React Project')).toBeInTheDocument();
        expect(screen.getByText('React Native App')).toBeInTheDocument();
    });

    it('shows empty state when no projects match', () => {
        renderTagPage('NonExistentTag');

        // H1 should be present
        expect(screen.getByRole('heading', { level: 1, name: /Tag: NonExistentTag/i })).toBeInTheDocument();
        // Updated text matcher to match actual component output
        expect(screen.getByText(/No content found/i)).toBeInTheDocument();
    });
});
