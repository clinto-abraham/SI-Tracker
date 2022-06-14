import { createAction, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../store';
import { data } from '../../mockdata';

export interface LeverState {
  levers : {}[];
  selectedLevers: any[],
  showProceed: boolean;
  status: 'notSelected' | 'selected' | 'failed';
}

const initialState: LeverState = {
  levers: data,
  selectedLevers: [],
  showProceed: false,
  status: 'notSelected',
};

export const leverSlice = createSlice({
  name: 'levers',
  initialState,
  reducers: {
    selectedLeverUUID: (state, action) => {
      // const checked = action.payload;
      // const existingLever = state.selectedLevers.find((item) => item === checked.uuid)
      // if (existingLever) {
      //   state.selectedLevers.push(checked)
      // } 
      state.selectedLevers.push(action.payload) 
    },
    selected: (state, action) => {
      state.selectedLevers.push(action.payload) 
    },
    setShowProceedButton : (state, action) => {
      state.showProceed = action.payload;
      // state.showProceed = !state.showProceed;
    },
    cancelProject: (state) => {
        state.selectedLevers = []
    },
    changeStatus : (state, action) => {
      state.status = action.payload;
    },
    // toggleCheckboxes: (state) =>  state.checkboxState !== state.checkboxState,
    // state.checkboxState.includes(index) ? checkboxState.filter((d,i) => i !== index) : [...checkbox, index]
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(toggleCheckboxes, (state: any, action: any) => {
  //       state.checkbox[action.payload] = !state.checkbox[action.payload];
  //     });
  // },
  
});

// export const selectCheckbox = (state: RootState) => state.lever.checkbox;


export const { changeStatus, selectedLeverUUID, selected, setShowProceedButton, cancelProject } = leverSlice.actions;

export default leverSlice.reducer;


