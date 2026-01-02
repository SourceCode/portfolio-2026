/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import React from 'react';
import '@testing-library/jest-dom';
// Needs to include this to load fetch typings in client tests
// Required by @aws-amplify/adapter-nextjs
import 'whatwg-fetch';


// Mock React hooks and cache for client-side tests
// This provides mockable hooks that individual tests can override
const mockState = {
    agents: { items: [], loading: false, searchQuery: '', error: null },
    deals: { items: [], loading: false, error: null, viewMode: 'list' },
    contacts: { items: [], loading: false, error: null },
    leads: { items: [], loading: false, error: null },
    payroll: { items: [], loading: false, error: null },
    files: { items: [], loading: false, error: null, currentPath: '/', history: { stack: [], currentIndex: 0 }, selectedIds: [], viewMode: 'grid' },
    tasks: { items: [], loading: false, error: null },
    calendar: { events: [], loading: false, error: null },
    communication: { threads: [], loading: false, error: null },
    checkRequests: { items: [], loading: false, error: null },
    fundingRequests: { items: [], loading: false, error: null },
    salesContracts: { items: [], loading: false, error: null },
    documentation: {
        currentPage: { slug: 'intro', frontmatter: { title: 'Intro', section: 'Guide' }, content: '# Hello' },
        loading: false,
        navTree: [{ slug: 'intro', title: 'Intro', children: [] }],
        pages: [{ slug: 'intro', frontmatter: { title: 'Intro' }, content: '' }],
        searchQuery: ''
    },
    notifications: { items: [] },
    mobile: { isMobile: false },
    ui: { sidebarOpen: true, toasts: [] },
    window: { windows: [] },
    theme: { currentThemeId: 'default' },
    user: { currentUser: { id: 'test-user', roles: ['admin'] } }
};

jest.mock('@/store/index', () => ({
    useAppDispatch: () => jest.fn(),
    useAppSelector: jest.fn((selector) => selector(mockState)),
}));

jest.mock('@/hooks/useAuth', () => ({
    useAuth: () => ({
        isAuthenticated: true,
        user: { id: 'test-user', roles: ['admin'], firstName: 'Test', lastName: 'User' },
        logout: jest.fn(),
    }),
}));

jest.mock('react', () => {
    const actualReact = jest.requireActual('react');
    return {
        ...actualReact,
        cache: jest.fn((fn) => fn),
        // Create proper Jest mock functions that tests can use mockReturnValue on
        useState: jest.fn().mockImplementation(actualReact.useState),
        useEffect: jest.fn().mockImplementation(actualReact.useEffect),
        useCallback: jest.fn().mockImplementation(actualReact.useCallback),
        useMemo: jest.fn().mockImplementation(actualReact.useMemo),
        useRef: jest.fn().mockImplementation(actualReact.useRef),
        useContext: jest.fn().mockImplementation(actualReact.useContext),
        useReducer: jest.fn().mockImplementation(actualReact.useReducer),
        useLayoutEffect: jest.fn().mockImplementation(actualReact.useLayoutEffect),
    };
});

import requiredEnvVars from './requiredEnvVars.json';

// Polyfill structuredClone for AWS Amplify compatibility in client tests
if (typeof global.structuredClone === 'undefined') {
    global.structuredClone = (obj: any) => {
        // Simple JSON-based implementation for test environment
        if (obj === null || typeof obj !== 'object') {
            return obj;
        }
        try {
            return JSON.parse(JSON.stringify(obj));
        } catch {
            // Fallback for complex objects
            return obj;
        }
    };
}



// Mock PerformanceObserver for browser-specific APIs
global.PerformanceObserver = Object.assign(
    jest.fn().mockImplementation(() => ({
        observe: jest.fn(),
        disconnect: jest.fn(),
        takeRecords: jest.fn(),
    })),
    {
        supportedEntryTypes: [] as readonly string[],
    },
) as unknown as typeof PerformanceObserver;

// Mock other performance APIs that might not be available in Jest
global.performance = {
    ...global.performance,
    mark: jest.fn(),
    measure: jest.fn(),
    clearMarks: jest.fn(),
    clearMeasures: jest.fn(),
    getEntriesByName: jest.fn(() => []),
    getEntriesByType: jest.fn(() => []),
    now: jest.fn(() => Date.now()),
};


// Completely silence all console output during tests
const originalConsole = {
    log: console.log,
    error: console.error,
    warn: console.warn,
    info: console.info,
    debug: console.debug,
    trace: console.trace,
    dir: console.dir,
    dirxml: console.dirxml,
    group: console.group,
    groupCollapsed: console.groupCollapsed,
    groupEnd: console.groupEnd,
    time: console.time,
    timeLog: console.timeLog,
    timeEnd: console.timeEnd,
    count: console.count,
    countReset: console.countReset,
    clear: console.clear,
    table: console.table,
    assert: console.assert,
    profile: console.profile,
    profileEnd: console.profileEnd,
    timeStamp: console.timeStamp,
};

beforeAll(() => {




    // Mock all console methods to do nothing
    Object.keys(originalConsole).forEach((key) => {
        (console as any)[key] = jest.fn();
    });

    // next/router is already mocked at module level above (REMOVED)

    requiredEnvVars.requiredEnvVars.forEach((key) => {
        process.env[key] = process.env[key] || `mocked-${key}`;
    });

    // Enhanced DOM elements mocking for MUI transitions
    Object.defineProperty(window, 'scrollTo', {
        value: jest.fn(),
        writable: true,
    });
    Object.defineProperty(Element.prototype, 'scrollIntoView', {
        value: jest.fn(),
        writable: true,
    });
    Object.defineProperty(Element.prototype, 'scrollTop', {
        value: 0,
        writable: true,
    });
    Object.defineProperty(Element.prototype, 'scrollHeight', {
        value: 100,
        writable: true,
    });
    Object.defineProperty(Element.prototype, 'clientHeight', {
        value: 100,
        writable: true,
    });

    // Ensure document.body.style exists for MUI Modal components
    if (document.body) {
        // Add properties that MUI Modal expects
        Object.defineProperty(document.body.style, 'overflowY', {
            value: '',
            writable: true,
        });
        Object.defineProperty(document.body.style, 'paddingRight', {
            value: '',
            writable: true,
        });
    }

    // Fix getComputedStyle for toHaveStyle testing
    const originalGetComputedStyle = window.getComputedStyle;
    window.getComputedStyle = jest.fn().mockImplementation((element) => {
        const result = originalGetComputedStyle
            ? originalGetComputedStyle(element)
            : ({} as CSSStyleDeclaration);

        // Create a mock CSSStyleDeclaration with getPropertyValue
        return {
            ...result,
            getPropertyValue: jest.fn((prop: string) => {
                // Convert camelCase to kebab-case
                const kebabProp = prop.replace(
                    /[A-Z]/g,
                    (match: string) => `-${match.toLowerCase()}`,
                );
                return (
                    (result as unknown as Record<string, string>)[prop] ||
                    (result as unknown as Record<string, string>)[kebabProp] ||
                    ''
                );
            }),
            // Add common style properties
            cursor: (result as unknown as Record<string, string>).cursor || '',
            margin: (result as unknown as Record<string, string>).margin || '',
            minWidth: (result as unknown as Record<string, string>).minWidth || '',
            bottom: (result as unknown as Record<string, string>).bottom || '',
            right: (result as unknown as Record<string, string>).right || '',
        };
    });
    Object.defineProperty(Element.prototype, 'offsetHeight', {
        value: 100,
        writable: true,
    });
    Object.defineProperty(Element.prototype, 'offsetWidth', {
        value: 100,
        writable: true,
    });
    Object.defineProperty(Element.prototype, 'scrollWidth', {
        value: 100,
        writable: true,
    });
    Object.defineProperty(Element.prototype, 'getBoundingClientRect', {
        value: jest.fn(() => ({
            top: 0,
            left: 0,
            bottom: 100,
            right: 100,
            width: 100,
            height: 100,
        })),
        writable: true,
    });

    // Mock document and window methods that MUI transitions use
    Object.defineProperty(document, 'documentElement', {
        value: {
            scrollTop: 0,
            scrollHeight: 100,
            clientHeight: 100,
            style: {},
        },
        writable: true,
    });

    // Define missing global variables that components expect
    (global as unknown as Record<string, unknown>).theme = {
        palette: {
            primary: { main: '#1976d2', dark: '#115293' },
            secondary: { main: '#dc004e', dark: '#9a0036' },
            grey: { 200: '#eeeeee', 500: '#9e9e9e' },
        },
        spacing: (factor: number) => `${factor * 8}px`,
        typography: { htmlFontSize: 16 },
        breakpoints: {
            up: jest.fn(),
            down: jest.fn(),
            only: jest.fn(),
        },
    };





    // Mock other common global variables
    (global as unknown as Record<string, unknown>).gtag = jest.fn();
    (global as unknown as Record<string, unknown>).fbq = jest.fn();
    (global as unknown as Record<string, unknown>).analytics = {
        track: jest.fn(),
        identify: jest.fn(),
        page: jest.fn(),
        reset: jest.fn(),
    };

    // Enhanced document methods mocking for MUI compatibility
    jest.spyOn(document, 'getElementById').mockImplementation((id) => {
        const mockElement = document.createElement('div');
        mockElement.id = id;
        // Add all properties that MUI transitions might access
        Object.defineProperty(mockElement, 'scrollTop', {
            value: 0,
            writable: true,
        });
        Object.defineProperty(mockElement, 'scrollHeight', {
            value: 100,
            writable: true,
        });
        Object.defineProperty(mockElement, 'clientHeight', {
            value: 100,
            writable: true,
        });
        Object.defineProperty(mockElement, 'offsetHeight', {
            value: 100,
            writable: true,
        });
        Object.defineProperty(mockElement, 'offsetWidth', {
            value: 100,
            writable: true,
        });
        Object.defineProperty(mockElement, 'scrollWidth', {
            value: 100,
            writable: true,
        });
        Object.defineProperty(mockElement, 'getBoundingClientRect', {
            value: () => ({
                top: 0,
                left: 0,
                bottom: 100,
                right: 100,
                width: 100,
                height: 100,
            }),
            writable: true,
        });
        return mockElement;
    });

    // Mock querySelector and querySelectorAll to return elements with scrollTop
    jest.spyOn(document, 'querySelector').mockImplementation(() => {
        const mockElement = document.createElement('div');
        Object.defineProperty(mockElement, 'scrollTop', {
            value: 0,
            writable: true,
        });
        Object.defineProperty(mockElement, 'clientHeight', {
            value: 100,
            writable: true,
        });
        Object.defineProperty(mockElement, 'offsetHeight', {
            value: 100,
            writable: true,
        });
        return mockElement;
    });

    jest.spyOn(document, 'querySelectorAll').mockImplementation(() => {
        const mockElement = document.createElement('div');
        Object.defineProperty(mockElement, 'scrollTop', {
            value: 0,
            writable: true,
        });
        Object.defineProperty(mockElement, 'clientHeight', {
            value: 100,
            writable: true,
        });
        return [mockElement] as unknown as NodeListOf<Element>;
    });
});

// Note: Mocks for stateBridgeHooks and AuthStatusProvider should be added
// in individual test files or test utilities as needed, not globally

afterAll(() => {
    jest.restoreAllMocks();
    // Restore original console methods
    Object.keys(originalConsole).forEach((key) => {
        (console as any)[key] = (originalConsole as any)[key];
    });
});

export { React };
