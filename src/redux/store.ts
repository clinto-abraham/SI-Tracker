import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from './features/counterSlice';
import leverReducer from './features/leverSlice'
import { reducer as formReducer } from 'redux-form'
import formRegisterSlice from './features/formSlice';
import sectorSlice from './features/sectorSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    lever: leverReducer,
    form: formReducer,
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
