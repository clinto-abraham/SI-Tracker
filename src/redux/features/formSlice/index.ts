import { createSlice } from '@reduxjs/toolkit';

export interface formState {
    projectName: string;
    projectType: string;
    textarea : string;
    dateFrom : string;
    dateTo : string;
    clientName: string;
    collaborator : string;
    projectLevel: string;
    engagementDirector: string;
    description: string;
    fixedLever: boolean;
    customizedLever: boolean;
    budget: string;
    chargeCode: Number;
  
}

const initialState: formState = {
  projectName: '',
  projectType: '',
  textarea : '',
  dateFrom : '',
  dateTo : '',
  clientName: '',
  collaborator : '',
  projectLevel: '',
  engagementDirector: '',
  description: '',
  fixedLever: false,
  customizedLever: false,
  budget: '',
  chargeCode: 1,
};


export const formRegisterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    // registerForm: (state , { payload: {key, value} }) => {
    //   state = value;
    // },
    registerProjectName: (state , action) => {
      state.projectName = action.payload;
      console.log(action.payload)
    },
    registerProjectType: (state , action) => {
      state.projectType = action.payload;
    },
    registerTextarea: (state , action) => {
      state.textarea = action.payload;
    },
    registerDateFrom: (state , action) => {
      state.dateFrom = action.payload;
    },
    registerDateTo: (state , action) => {
      state.dateTo = action.payload;
    },
    registerClientName: (state , action) => {
      state.clientName = action.payload;
    },
    registerCollaborator: (state , action) => {
      state.collaborator = action.payload;
    },
    registerEngagementDirector: (state , action) => {
      state.engagementDirector = action.payload;
    },
    registerProjectLevel: (state , action) => {
      state.projectLevel = action.payload;
    },
    registerFixedLever: (state , action) => {
      state.fixedLever = action.payload;
    },
    registerCustomizedLever: (state , action) => {
      state.customizedLever = action.payload;
    },
    registerBudget: (state , action) => {
      state.budget = action.payload;
    },
    registerChargeCode: (state , action) => {
      state.chargeCode = action.payload;
    },

  },
});

export const {  registerProjectName, registerProjectType, registerTextarea, registerDateFrom, registerDateTo, registerClientName, registerCollaborator, registerEngagementDirector, registerProjectLevel, registerFixedLever, registerCustomizedLever, registerBudget, registerChargeCode } = formRegisterSlice.actions;

export default formRegisterSlice.reducer;
