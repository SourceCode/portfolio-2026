
export const setupIntersectionObserverMock = () => {
    class IntersectionObserver {
        observe = jest.fn();
        unobserve = jest.fn();
        disconnect = jest.fn();
    }
    Object.defineProperty(window, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: IntersectionObserver,
    });
    Object.defineProperty(global, 'IntersectionObserver', {
        writable: true,
        configurable: true,
        value: IntersectionObserver,
    });
};

export const setupResizeObserverMock = () => {
    class ResizeObserver {
        observe = jest.fn();
        unobserve = jest.fn();
        disconnect = jest.fn();
    }
    Object.defineProperty(window, 'ResizeObserver', {
        writable: true,
        configurable: true,
        value: ResizeObserver,
    });
    Object.defineProperty(global, 'ResizeObserver', {
        writable: true,
        configurable: true,
        value: ResizeObserver,
    });
};

export const setupMatchMediaMock = () => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: false,
            media: query,
            onchange: null,
            addListener: jest.fn(), // deprecated
            removeListener: jest.fn(), // deprecated
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    });
};
