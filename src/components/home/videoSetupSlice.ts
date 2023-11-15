import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface CounterState {
  duration: number;
  format: string;
  noOfBlocks: number;
  videoSource: string;
}

const initialState: CounterState = {
  duration: 30000,
  format: "9:16",
  noOfBlocks: 4,
  videoSource: "",
};

export const videoSetupSlice = createSlice({
  name: "videoSetup",
  initialState,
  reducers: {
    setDuration: (state, action: PayloadAction<number>) => {
      state.duration = action.payload;
    },

    setFormat: (state, action: PayloadAction<string>) => {
      state.format = action.payload;
    },

    setBlocks: (state, action: PayloadAction<number>) => {
      state.noOfBlocks = action.payload;
    },

    setVideoSource: (state, action: PayloadAction<string>) => {
      state.videoSource = action.payload;
    },
  },
});

export const { setDuration, setFormat, setBlocks, setVideoSource } =
  videoSetupSlice.actions;

export const selectDuration = (state: RootState) => state.videoSetup.duration;

export const selectVideoSource = (state: RootState) =>
  state.videoSetup.videoSource;

export const selectFormat = (state: RootState) => state.videoSetup.format;

export const selectNoOfBlocks = (state: RootState) =>
  state.videoSetup.noOfBlocks;

export default videoSetupSlice.reducer;
