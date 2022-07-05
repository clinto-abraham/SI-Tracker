import { createSlice } from "@reduxjs/toolkit";

export interface formState {
  projectName: string;
  projectType: string;
  textarea: string;
  dateFrom: Date | string;
  dateTo: Date | string;
  clientName: string;
  collaborator: string;
  projectLevel: string;
  engagementDirector: string;
  description: string;
  fixedLever: boolean;
  customizedLever: boolean;
  budget: string;
  chargeCode: string | number;
}

const initialState: formState = {
  projectName: "",
  projectType: "",
  textarea: "",
  dateFrom: new Date(),
  dateTo: new Date(),
  clientName: "",
  collaborator: "",
  projectLevel: "",
  engagementDirector: "",
  description: "",
  fixedLever: false,
  customizedLever: false,
  budget: "",
  chargeCode: "",
};

export const formRegisterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    registerProjectName: (state, action) => {
      state.projectName = action.payload;
    },
    registerProjectType: (state, action) => {
      state.projectType = action.payload;
    },
    registerTextarea: (state, action) => {
      state.textarea = action.payload;
    },
    registerDateFrom: (state, action) => {
      state.dateFrom = new Date(action.payload);
    },
    registerDateTo: (state, action) => {
      state.dateTo = new Date(action.payload);
    },
    registerClientName: (state, action) => {
      state.clientName = action.payload;
    },
    registerCollaborator: (state, action) => {
      state.collaborator = action.payload;
    },
    registerEngagementDirector: (state, action) => {
      state.engagementDirector = action.payload;
    },
    registerProjectLevel: (state, action) => {
      state.projectLevel = action.payload;
    },
    registerFixedLever: (state, action) => {
      state.fixedLever = action.payload;
    },
    registerCustomizedLever: (state, action) => {
      state.customizedLever = action.payload;
    },
    registerBudget: (state, action) => {
      state.budget = action.payload;
    },
    registerChargeCode: (state, action) => {
      state.chargeCode = Number(action.payload);
    },
  },
});

export const {
  registerProjectName,
  registerProjectType,
  registerTextarea,
  registerDateFrom,
  registerDateTo,
  registerClientName,
  registerCollaborator,
  registerEngagementDirector,
  registerProjectLevel,
  registerFixedLever,
  registerCustomizedLever,
  registerBudget,
  registerChargeCode,
} = formRegisterSlice.actions;

export default formRegisterSlice.reducer;
