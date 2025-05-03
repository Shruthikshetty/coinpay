import {configureStore} from '@reduxjs/toolkit';
import reduxExampleReducer from './redux-example-slice';

// Redux store for the app, where all the global data is stored
export const store = configureStore({
  // This combines all the slice reducers
  reducer: {
    // The `exampleData` slice is added to the store.
    exampleData: reduxExampleReducer,
    // Add other slices below this as your app grows
  },
});

// Infer the `RootState`, `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: { exampleData: ExampleState } — RootState contains the full state structure
export type AppDispatch = typeof store.dispatch;
// `AppDispatch` type is inferred directly from the store's dispatch method
export type AppStore = typeof store;
// `AppStore` type gives the complete store structure
