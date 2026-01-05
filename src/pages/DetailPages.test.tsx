import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import ProjectDetail from './ProjectDetail';;
import { Route, Routes, useParams } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn()
}));

import InsightsDetail from './InsightsDetail';

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
                { category: 'Web', description: 'Desc', featured: false, id: '1', imageUrl: '', slug: 'test-project', summary: 'Summary', tags: [], title: 'Test Project', year: '2025' }
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
