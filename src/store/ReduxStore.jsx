import { configureStore } from "@reduxjs/toolkit";
import SignupSliceReducer from "./slices/SignupSlice";

const mainStore = configureStore({
  reducer: {
    signup_Slice: SignupSliceReducer,
  },
});

export default mainStore;
