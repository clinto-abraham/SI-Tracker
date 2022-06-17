import {  createSlice } from '@reduxjs/toolkit';
import { data } from '../../mockdata';

export interface LeverState {
  levers : {}[];
  selectedLevers: string[],
  showProceed: boolean;
  status: 'notSelected' | 'selected' | 'failed';
  AgriLeverCount: number;
}

const initialState: LeverState = {
  levers: data,
  selectedLevers: [],
  showProceed: false,
  status: 'notSelected',
  AgriLeverCount : 10,
};

export const leverSlice = createSlice({
  name: 'levers',
  initialState,
  reducers: {
    selectedLeverUUID: (state, action) => {
      if (state.selectedLevers.length === 0) {
        state.selectedLevers.push(action.payload)
      } else {
        state.selectedLevers.pop()
        state.selectedLevers.push(action.payload)
      }
       
      // state.selectedLevers = [...state.selectedLevers, action.payload];
      // var index = day_list.indexOf(checked_day);
      //           if (index > -1) {
      //               day_list.splice(index, 1);}
    },
    // selected: (state, action) => {
    //   state.selectedLevers.push(action.payload) 
    // },
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
agriCount : (state, action) => {
  state.AgriLeverCount = action.payload;
},
  },

  
});

// export const selectCheckbox = (state: RootState) => state.lever.checkbox;


export const { changeStatus, agriCount, selectedLeverUUID, setShowProceedButton, cancelProject } = leverSlice.actions;

export default leverSlice.reducer;

   // const checked = action.payload;
      // const existingLever = state.selectedLevers.find((item) => item === checked.uuid)
      // if (existingLever) {
      //   state.selectedLevers.push(checked)
      // } 


        // extraReducers: (builder) => {
  //   builder
  //     .addCase(toggleCheckboxes, (state: any, action: any) => {
  //       state.checkbox[action.payload] = !state.checkbox[action.payload];
  //     });
  // },

      // toggleCheckboxes: (state) =>  state.checkboxState !== state.checkboxState,
    // state.checkboxState.includes(index) ? checkboxState.filter((d,i) => i !== index) : [...checkbox, index]