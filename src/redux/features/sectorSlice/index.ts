import { createSlice } from "@reduxjs/toolkit";

export interface SectorState {
  Agriculture: any[];
  Industry: any[];
  Sector: any[];
  Test: any[];
  Transport: any[];
  Power: any[];
  DuMmY: any[];
}

const initialState: SectorState = {
  Agriculture: [],
  Industry: [],
  Sector: [],
  Test: [],
  Transport: [],
  Power: [],
  DuMmY: [],
};

export const sectorSlice = createSlice({
  name: "sector",
  initialState,
  reducers: {
    getAllSectorUUID: {
      reducer(state, action) {
        if (action.payload.selectedSector === "Agriculture") {
          state.Agriculture.pop();
          state.Agriculture.push(action.payload.uuid);
        } else if (action.payload.selectedSector === "Industry") {
          state.Industry.pop();
          state.Industry.push(action.payload.uuid);
        } else if (action.payload.selectedSector === "Sector") {
          state.Sector.pop();
          state.Sector.push(action.payload.uuid);
        } else if (action.payload.selectedSector === "Test") {
          state.Test.pop();
          state.Test.push(action.payload.uuid);
        } else if (action.payload.selectedSector === "Transport") {
          state.Transport.pop();
          state.Transport.push(action.payload.uuid);
        } else if (action.payload.selectedSector === "Power") {
          state.Power.pop();
          state.Power.push(action.payload.uuid);
        } else if (action.payload.selectedSector === "DuMmY") {
          state.DuMmY.pop();
          state.DuMmY.push(action.payload.uuid);
        }
      },
      // @ts-ignore
      prepare(selectedSector , uuid ) {
        return {
          payload: {
            selectedSector,
            uuid,
          },
        };
      },
    },
  },
});

export const { getAllSectorUUID } = sectorSlice.actions;
export default sectorSlice.reducer;
