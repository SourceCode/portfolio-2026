import React, { PropsWithChildren } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';
import { MemoryRouter } from 'react-router-dom';
import { configureStore, Store } from '@reduxjs/toolkit';
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
        store = configureStore({
            reducer: {
                content: contentReducer,
            },
            preloadedState: preloadedState as any,
        }),
        ...renderOptions
    }: ExtendedRenderOptions = {}
) {
    function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
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
