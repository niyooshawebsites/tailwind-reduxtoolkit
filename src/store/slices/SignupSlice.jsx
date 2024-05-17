import { createSlice } from "@reduxjs/toolkit";

const signupSlice = createSlice({
  name: "signup_Slice",
  initialState: {
    username: "",
    email: "",
    password: "",
  },
  reducers: {
    setSignupDetails: (state, action) => {
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const signupSliceActions = signupSlice.actions;
export default signupSlice.reducer;
