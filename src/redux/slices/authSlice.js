import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  userEmail: "",
  uniqueId: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    setUserEmail: (state, action) => {
      state.userEmail = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { logIn, logOut, setUserEmail, setUserId } = authSlice.actions;
export default authSlice.reducer;
