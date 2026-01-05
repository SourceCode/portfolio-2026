
export const setupIntersectionObserverMock = () => {
    class IntersectionObserver {
        disconnect = jest.fn();
        observe = jest.fn();
        unobserve = jest.fn();
    }
    Object.defineProperty(window, 'IntersectionObserver', {
        configurable: true,
        value: IntersectionObserver,
        writable: true,
    });
    Object.defineProperty(global, 'IntersectionObserver', {
        configurable: true,
        value: IntersectionObserver,
        writable: true,
    });
};

export const setupResizeObserverMock = () => {
    class ResizeObserver {
        disconnect = jest.fn();
        observe = jest.fn();
        unobserve = jest.fn();
    }
    Object.defineProperty(window, 'ResizeObserver', {
        configurable: true,
        value: ResizeObserver,
        writable: true,
    });
    Object.defineProperty(global, 'ResizeObserver', {
        configurable: true,
        value: ResizeObserver,
        writable: true,
    });
};

export const setupMatchMediaMock = () => {
    Object.defineProperty(window, 'matchMedia', {
        value: jest.fn().mockImplementation(query => ({
            addEventListener: jest.fn(),
            addListener: jest.fn(), // deprecated
            dispatchEvent: jest.fn(),
            matches: false,
            media: query,
            onchange: null,
            removeEventListener: jest.fn(),
            removeListener: jest.fn(), // deprecated
        })),
        writable: true,
    });
};
