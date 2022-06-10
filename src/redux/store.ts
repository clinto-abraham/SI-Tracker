import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import leverReducer from './features/leverSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lever: leverReducer,
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
