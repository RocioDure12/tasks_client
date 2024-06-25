import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import type { RootState } from "../../store";

interface AuthState{
    accessToken?:string | null;
    refreshToken?:string | null;
    user:User| null
    isAuthenticated:boolean
}

const initialState:AuthState={
    accessToken:null,
    refreshToken:null,
    user:null,
    isAuthenticated:false
}

  const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state, action:PayloadAction<{accessToken:string, refreshToken:string; user:User}>)=>{
            state.accessToken=action.payload.accessToken;
            state.refreshToken=action.payload.refreshToken
            state.user=action.payload.user
            state.isAuthenticated=true
          
        },

        logout:(state)=>{
          state.isAuthenticated=false

        }
    },
  })



export const{login, logout} =authSlice.actions


export const selectIsAuthenticated= (state:RootState)=> state.auth.isAuthenticated

export default authSlice.reducer