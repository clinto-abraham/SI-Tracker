import {  createSlice } from '@reduxjs/toolkit';
import { data } from '../../mockdata';

export interface LeverState {
  levers : {}[];
  // selectedLevers: string[],
  showProceed: boolean;
  // status: 'notSelected' | 'selected' | 'failed';
  totalLeverCount: number;
  // selectedSector: [];
}

const initialState: LeverState = {
  levers: data,
  // selectedLevers: [],
  showProceed: false,
  // status: 'notSelected',
  totalLeverCount : 0,
  // selectedSector: [],
};

export const leverSlice = createSlice({
  name: 'levers',
  initialState,
  reducers: {
    setShowProceedButton : (state) => {
      // state.showProceed = action.payload;
      state.showProceed = !state.showProceed;
    },
    totalLeverSelectedCount : (state, action) => {
      state.totalLeverCount = Number(action.payload);
    },
    // cancelProject: (state) => {
    //     state.selectedLevers = []
    // },
    // changeStatus : (state) => {
    //   if (state.selectedLevers.length <= 0){
    //     state.status = "notSelected";
    //   } else if (state.selectedLevers.length > 0 ){
    //     state.status = "selected";
    //   }
      
    // },
   

  },
  
  
});


export const { totalLeverSelectedCount, setShowProceedButton } = leverSlice.actions;

export default leverSlice.reducer;

   // const checked = action.payload;
      // const existingLever = state.selectedLevers.find((item) => item === checked.uuid)
      // if (existingLever) {
      //   state.selectedLevers.push(checked)
      // } 

      // toggleCheckboxes: (state) =>  state.checkboxState !== state.checkboxState,
    // state.checkboxState.includes(index) ? checkboxState.filter((d,i) => i !== index) : [...checkbox, index]
