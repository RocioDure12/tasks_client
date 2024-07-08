import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import type { RootState } from "../../store";

interface AuthState{
    //expirationRefreshToken?:Date | null
    user:User| null
    isAuthenticated:boolean
}

const initialState:AuthState={
    user:null,
    isAuthenticated:false
}

  const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authenticateUser:(state, action:PayloadAction<{user:User}>)=>{
            state.user=action.payload.user
            state.isAuthenticated=true
          
        },

        logout:(state)=>{
          state.isAuthenticated=false

        }
    },
  })



export const{authenticateUser, logout} =authSlice.actions

export const currentUser= (state:RootState)=> state.auth.user

export const selectIsAuthenticated= (state:RootState)=> state.auth.isAuthenticated

export default authSlice.reducer