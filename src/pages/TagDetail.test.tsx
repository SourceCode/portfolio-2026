import { screen } from '@testing-library/react';
import React from 'react';
import { Route, Routes, useParams } from 'react-router-dom';

import TagDetail from './TagDetail';
import { renderWithProviders } from '../test/utils';

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
                    id: '1',
                    title: 'React Project',
                    slug: 'react-project',
                    tags: ['React', 'TypeScript'],
                    summary: 'A React App',
                    description: 'Full description for React project.',
                    imageUrl: 'img1.jpg',
                    year: '2024',
                    category: 'Web',
                    featured: false
                },
                {
                    id: '2',
                    title: 'Python Script',
                    slug: 'python-script',
                    tags: ['Python', 'Automation'],
                    summary: 'A Python Script',
                    description: 'Full description for Python project.',
                    imageUrl: 'img2.jpg',
                    year: '2023',
                    category: 'Backend',
                    featured: false
                }
            ],
            // Add other required state slices with empty/default values to satisfy types
            aboutContent: { functionalExpertise: [], leadershipStrengths: [] } as any,
            blogPosts: [],
            career: [],
            loading: false
        }
    };

    const renderTagPage = (tag: string) => {
        (useParams as jest.Mock).mockReturnValue({ tag });
        return renderWithProviders(
            <Routes>
                <Route path="/tags/:tag" element={<TagDetail />} />
            </Routes>,
            {
                preloadedState,
                route: `/tags/${encodeURIComponent(tag)}`
            }
        );
    };

    it('renders filtered projects matching the tag', () => {
        renderTagPage('React');

        // Should show the header
        expect(screen.getByRole('heading', { name: /React/i })).toBeInTheDocument();

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
                        id: '3',
                        title: 'React Native App',
                        slug: 'rn-app',
                        tags: ['React', 'Mobile'],
                        summary: 'Mobile App',
                        description: 'Full description',
                        imageUrl: 'img3.jpg',
                        year: '2025',
                        category: 'Mobile',
                        featured: false
                    }
                ]
            }
        };

        (useParams as jest.Mock).mockReturnValue({ tag: 'React' });
        renderWithProviders(
            <Routes>
                <Route path="/tags/:tag" element={<TagDetail />} />
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

        expect(screen.getByRole('heading', { name: /NonExistentTag/i })).toBeInTheDocument();
        expect(screen.getByText(/No projects found/i)).toBeInTheDocument();
    });
});
