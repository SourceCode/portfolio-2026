import { screen } from '@testing-library/react';
import React from 'react';

import { renderWithProviders } from '../test/utils';
import RelatedProjects from './RelatedProjects';

describe('RelatedProjects Component', () => {
    const preloadedState = {
        content: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            aboutContent: {} as any,
            blogPosts: [],
            career: [],
            error: null,
            loading: false,
            projects: [
                {
                    category: 'Cat A',
                    description: 'Desc A',
                    featured: false,
                    id: '1',
                    imageUrl: 'img1.jpg',
                    slug: 'project-a',
                    summary: 'Summary A',
                    tags: ['Tag1', 'Tag2'],
                    title: 'Project A',
                    year: '2023'
                },
                {
                    category: 'Cat A',
                    description: 'Desc B',
                    featured: false,
                    id: '2',
                    imageUrl: 'img2.jpg',
                    slug: 'project-b',
                    summary: 'Summary B',
                    tags: ['Tag3'],
                    title: 'Project B',
                    year: '2023'
                },
                {
                    category: 'Cat A',
                    description: 'Desc C',
                    featured: false,
                    id: '3',
                    imageUrl: 'img3.jpg',
                    slug: 'project-c',
                    summary: 'Summary C',
                    tags: ['Tag1', 'TagNext'],
                    title: 'Project C',
                    year: '2023'
                }
            ]
        }
    };

    it('renders related projects based on tags', () => {
        renderWithProviders(<RelatedProjects tags={['Tag1']} />, { preloadedState });

        expect(screen.getByText('Related Projects')).toBeInTheDocument();
        expect(screen.getByText('Project A')).toBeInTheDocument();
        expect(screen.getByText('Project C')).toBeInTheDocument();
        expect(screen.queryByText('Project B')).not.toBeInTheDocument();
    });

    it('renders nothing if no matches', () => {
        renderWithProviders(<RelatedProjects tags={['NonExistent']} />, { preloadedState });

        expect(screen.queryByText('Related Projects')).not.toBeInTheDocument();
    });

    it('limits to 3 projects', () => {
        const manyProjectsState = {
            content: {
                ...preloadedState.content,
                projects: [
                    ...preloadedState.content.projects,
                    { category: 'C', description: 'D', featured: false, id: '4', imageUrl: '', slug: 'd', summary: 'Sum', tags: ['Tag1'], title: 'Project D', year: '2023' },
                    { category: 'C', description: 'D', featured: false, id: '5', imageUrl: '', slug: 'e', summary: 'Sum', tags: ['Tag1'], title: 'Project E', year: '2023' }
                ]
            }
        };

        renderWithProviders(<RelatedProjects tags={['Tag1']} />, { preloadedState: manyProjectsState });

        // Should have 3 items (Project A, C, D) 
        // Note: exact matching validation might depend on order, but mainly checking count here implicitly by DOM elements or just trust logic 
        // Ideally count the link elements
        const links = screen.getAllByRole('link');
        const projectLinks = links.filter(link => link.getAttribute('href')?.startsWith('/projects/'));
        expect(projectLinks.length).toBe(3);
    });
});
