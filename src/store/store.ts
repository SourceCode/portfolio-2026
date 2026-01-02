/**
 * store/store.ts
 * Configures the Redux store, combining all feature slices.
 */

import { configureStore } from '@reduxjs/toolkit';

import contentReducer from './contentSlice';

export const store = configureStore({
  reducer: {
    content: contentReducer,
  },
});

/** Type definition for the Root State */
export type RootState = ReturnType<typeof store.getState>;
/** Type definition for the App Dispatcher */
export type AppDispatch = typeof store.dispatch;
