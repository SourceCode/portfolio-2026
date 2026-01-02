import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/utils';
import ProjectDetail from './ProjectDetail';;
import { Route, Routes } from 'react-router-dom';
import BlogDetail from './BlogDetail';

// Mock 3D BG
jest.mock('../components/3d/GradientBackground', () => () => <div data-testid="gradient-bg">BG</div>);

describe('Detail Pages', () => {
    const preloadedState = {
        content: {
            projects: [
                { id: '1', slug: 'test-project', title: 'Test Project', description: 'Desc', imageUrl: '', tags: [], category: 'Web', link: '', github: '', featured: false, date: '' }
            ],
            blogPosts: [
                { id: '1', slug: 'test-post', title: 'Test Post', excerpt: 'Excerpt', content: 'Content', date: '2025', imageUrl: '', tags: [], readTime: '5m', featured: false }
            ],
            loading: false,
            error: null,
            lastFetch: 0
        }
    };

    describe('ProjectDetail', () => {
        it('renders project content when found', () => {
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

    describe('BlogDetail', () => {
        it('renders blog content when found', () => {
            renderWithProviders(
                <Routes>
                    <Route path="/blog/:slug" element={<BlogDetail />} />
                </Routes>,
                {
                    preloadedState,
                    route: '/blog/test-post'
                }
            );

            expect(screen.getByText('Test Post')).toBeInTheDocument();
            expect(screen.getByText('Content')).toBeInTheDocument();
        });
    });
});
