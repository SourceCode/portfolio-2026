import { render, screen, waitFor, act } from '@testing-library/react';
import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { store } from './store/store';

// Mock HashRouter to behave like a pass-through so we can use MemoryRouter
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    HashRouter: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

// Mock 3D components to avoid WebGL errors in JSDOM
jest.mock('./components/3d/ReflectiveSphereRings', () => () => <div data-testid="mock-sphere-rings" />);
jest.mock('./components/3d/GradientBackground', () => () => <div data-testid="mock-gradient-bg" />);

// Mock matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
    })),
});

describe('App Integration', () => {
    const renderApp = (route = '/') => {
        return render(
            <Provider store={store}>
                <HelmetProvider>
                    <MemoryRouter initialEntries={[route]}>
                        <App />
                    </MemoryRouter>
                </HelmetProvider>
            </Provider>
        );
    };

    it('renders Home page by default', async () => {
        renderApp('/');
        await waitFor(() => {
            expect(screen.getByText(/Executive Technology Leader/i)).toBeInTheDocument();
        });
    });

    it('renders About page', async () => {
        renderApp('/about');
        await waitFor(() => {
            expect(screen.getByRole('heading', { name: /About Me/i })).toBeInTheDocument();
        });
    });

    it('renders Projects page', async () => {
        renderApp('/projects');
        await waitFor(() => {
            expect(screen.getByRole('heading', { name: /Selected Works/i })).toBeInTheDocument();
        });
    });

    it('renders Blog page', async () => {
        renderApp('/blog');
        await waitFor(() => {
            expect(screen.getByRole('heading', { name: /Insights/i })).toBeInTheDocument();
        });
    });

    it('renders Contact page', async () => {
        renderApp('/contact');
        await waitFor(() => {
            expect(screen.getByRole('heading', { name: /Get in Touch/i })).toBeInTheDocument();
        });
    });

    it('renders Project Detail page', async () => {
        renderApp('/projects/new-western-tech');
        await waitFor(() => {
            // Wait for the detail content. The title matches the slug data from contentSlice
            expect(screen.getByText(/New Western Technology Platform/i)).toBeInTheDocument();
        });
    });

    it('renders Blog Detail page', async () => {
        renderApp('/blog/systems-thinking');
        await waitFor(() => {
            // Wait for the blog post content.
            expect(screen.getByText(/The Art of Systems Thinking/i)).toBeInTheDocument();
        });
    });
});
