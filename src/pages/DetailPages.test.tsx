import { screen, waitFor } from '@testing-library/react';
import React from 'react';
import { Route, Routes, useParams, Navigate } from 'react-router-dom';

import { renderWithProviders } from '../test/utils';
import InsightsDetail from './InsightsDetail';
import ProjectDetail from './ProjectDetail';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
    // Navigate will be mocked by the router, but we can spy on it if we wanted.
    // However, Integration test with MemoryRouter handles Navigate automatically.
}));

// Mock 3D BG
jest.mock('../components/3d/GradientBackground', () => () => <div data-testid="gradient-bg">BG</div>);

describe('Detail Pages', () => {
    const preloadedState = {
        content: {
            aboutContent: {
                functionalExpertise: [],
                leadershipStrengths: []
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } as any,
            blogPosts: [
                { content: 'Content', date: '2025', excerpt: 'Excerpt', featured: false, id: '1', imageUrl: '', readTime: '5m', slug: 'test-post', tags: [], title: 'Test Post' }
            ],
            career: [],
            loading: false,
            projects: [
                {
                    category: 'Web',
                    description: 'Desc',
                    featured: false,
                    id: '1',
                    imageUrl: '',
                    slug: 'test-project',
                    summary: 'Summary',
                    tags: ['Tag1'],
                    title: 'Test Project',
                    year: '2025'
                },
                {
                    category: 'Rich',
                    description: 'Header Section\nOnly header\n\n• Bullet 1\n- Bullet 2',
                    featured: false,
                    id: '2',
                    imageUrl: '',
                    slug: 'rich-project',
                    summary: 'Rich Content',
                    tags: [],
                    title: 'Rich Project',
                    year: '2025'
                }
            ]
        }
    };

    describe('ProjectDetail', () => {
        it('renders project content when found', () => {
            (useParams as jest.Mock).mockReturnValue({ slug: 'test-project' });
            renderWithProviders(
                <Routes>
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                </Routes>,
                {
                    preloadedState,
                    route: '/projects/test-project'
                }
            );

            expect(screen.getByText('Test Project')).toBeInTheDocument();
            expect(screen.getByText('Desc')).toBeInTheDocument();
        });

        it('redirects when project not found', () => {
            (useParams as jest.Mock).mockReturnValue({ slug: 'unknown-project' });

            // To test redirect, we can check if we land on projects page
            // Or assume renderWithProviders wraps in MemoryRouter and we can check final state?
            // Actually renderWithProviders takes `route`.
            // Use a dummy route to verify redirect happens?
            // Or just check that ProjectDetail doesn't render content.

            renderWithProviders(
                <Routes>
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                    <Route path="/projects" element={<div>Projects List</div>} />
                </Routes>,
                {
                    preloadedState,
                    route: '/projects/unknown-project'
                }
            );

            expect(screen.getByText('Projects List')).toBeInTheDocument();
        });

        it('renders rich text content (headers and bullets)', () => {
            (useParams as jest.Mock).mockReturnValue({ slug: 'rich-project' });
            renderWithProviders(
                <Routes>
                    <Route path="/projects/:slug" element={<ProjectDetail />} />
                </Routes>,
                {
                    preloadedState,
                    route: '/projects/rich-project'
                }
            );

            expect(screen.getByText('Rich Project')).toBeInTheDocument();
            // Header candidate: line < 80 chars, no end punct
            expect(screen.getByText('Header Section')).toBeInTheDocument();
            // Bullet points
            expect(screen.getByText('Bullet 1')).toBeInTheDocument();
            expect(screen.getByText('Bullet 2')).toBeInTheDocument();
        });
    });

    describe('InsightsDetail', () => {
        it('renders blog content when found', () => {
            (useParams as jest.Mock).mockReturnValue({ slug: 'test-post' });
            renderWithProviders(
                <Routes>
                    <Route path="/insights/:slug" element={<InsightsDetail />} />
                </Routes>,
                {
                    preloadedState,
                    route: '/insights/test-post'
                }
            );

            expect(screen.getByText('Test Post')).toBeInTheDocument();
            expect(screen.getByText('Content')).toBeInTheDocument();
        });
    });
});
