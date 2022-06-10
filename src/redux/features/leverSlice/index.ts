import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { data } from '../../mockdata';

export interface LeverState {
  levers : {}[];
  selectedLevers: [],
  value: number;
  status: 'notSelected' | 'selected' | 'failed';
}

const initialState: LeverState = {
  levers : data,
  selectedLevers: [],
  value: 0,
  status: 'notSelected',
};

export const leverSlice = createSlice({
  name: 'levers',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    selected: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += state.value;
    },
    cancelProject: (state) => {
        state.selectedLevers = []
    },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
  
});

export const { selected, cancelProject } = leverSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCount = (state: RootState) => state.counter.value;

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState());
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount));
//     }
//   };

export default leverSlice.reducer;
