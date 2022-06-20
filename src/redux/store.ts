import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import leverReducer from './features/leverSlice'
import formRegisterSlice from './features/formSlice';
import sectorSlice from './features/sectorSlice';
export const store = configureStore({
  reducer: {
    lever: leverReducer,
    project: formRegisterSlice,
    sectors: sectorSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
} );

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
