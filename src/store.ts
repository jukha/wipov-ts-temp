import { configureStore } from "@reduxjs/toolkit";
import videoSetupSliceReducer from "./components/home/videoSetupSlice";

export const store = configureStore({
  reducer: {
    videoSetup: videoSetupSliceReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
