import { render } from '@testing-library/react';
import React, { useEffect } from 'react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';

import ScrollToTop from './ScrollToTop';

// Helper component to trigger route changes
const TestComponent = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/new-page');
    }, [navigate]);
    return <div>Test</div>;
};

describe('ScrollToTop', () => {
    it('scrolls to top on route change', () => {
        const scrollToMock = jest.fn();
        window.scrollTo = scrollToMock;

        render(
            <MemoryRouter initialEntries={['/']}>
                <ScrollToTop />
                <TestComponent />
            </MemoryRouter>
        );

        // Expect calls. The component mounts (calls effect?) and then navigates (calls effect again)
        expect(scrollToMock).toHaveBeenCalledWith(0, 0);
    });
});
