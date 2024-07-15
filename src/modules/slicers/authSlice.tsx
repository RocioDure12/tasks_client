import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import type { RootState } from "../../store";

interface AuthState {
  //expirationRefreshToken?:Date | null
  user?: User;
}

const initialState: AuthState = {};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authenticateUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload;
    },

    logout: (state) => {},
    setUserNull: (state) => {
      state.user = undefined;
    },
  },
});

export const { authenticateUser, logout, setUserNull } = authSlice.actions;

export const currentUser = (state: RootState) => state.auth.user;

//export const selectIsAuthenticated= (state:RootState)=> state.auth.isAuthenticated

export default authSlice.reducer;
