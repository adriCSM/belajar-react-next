import { configureStore } from '@reduxjs/toolkit';
import { pasienSlice, igdSlice } from './features/todos/todosSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      pasien: pasienSlice.reducer,
      igd: igdSlice.reducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
