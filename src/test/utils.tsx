import { configureStore, Store } from '@reduxjs/toolkit';
import { render, RenderOptions } from '@testing-library/react';
import React, { PropsWithChildren } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';

import contentReducer from '../store/contentSlice';
import { ContentState } from '../types';

// Define RootState interface based on the slice
interface RootState {
    content: ContentState;
}

// Create a custom render function
interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
    preloadedState?: Partial<RootState>;
    route?: string;
    store?: Store;
}

export function renderWithProviders(
    ui: React.ReactElement,
    {
        preloadedState = {},
        route = '/',
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        store = configureStore({ preloadedState: preloadedState as any, reducer: { content: contentReducer } as any }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function Wrapper({ children }: PropsWithChildren<any>): React.ReactNode {
        return (
            <Provider store={store}>
                <HelmetProvider>
                    <MemoryRouter initialEntries={[route]}>
                        {children}
                    </MemoryRouter>
                </HelmetProvider>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
