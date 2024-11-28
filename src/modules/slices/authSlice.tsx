import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import type { RootState } from "../../store";

interface AuthState {
  user?: User;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthenticatedUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },


    clearAuthenticatedUser: (state) => {
      state.user = undefined;
    },
  },
});

export const { setAuthenticatedUser,clearAuthenticatedUser } = authSlice.actions;

export const selectAuthenticatedUser = (state: RootState) => state.auth.user;

export default authSlice.reducer;
