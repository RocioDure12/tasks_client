import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import type { RootState } from "../../store";

interface AuthState{
    token:string | null;
    user:User| null
    isAuthenticated:boolean
}

const initialState:AuthState={
    token:null,
    user:null,
    isAuthenticated:false
}

  const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state, action:PayloadAction<{token:string; user:User}>)=>{
            state.token=action.payload.token;
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