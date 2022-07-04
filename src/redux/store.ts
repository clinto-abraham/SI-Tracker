import { configureStore } from '@reduxjs/toolkit';
import leverReducer from './features/leverSlice'
import formRegisterSlice from './features/formSlice';
import sectorSlice from './features/sectorSlice';
export const store = configureStore({
  reducer: {
    lever: leverReducer,
    project: formRegisterSlice,
    sectors: sectorSlice,
  }
} );

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
