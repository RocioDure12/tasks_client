import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import User from "../models/User";


interface AuthState{
    token:string | null;
    user:User| null
}

const initialState:AuthState={
    token:null,
    user:null,
}

  const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authenticateUser:(state, action:PayloadAction<{token:string; user:User}>)=>{
            state.token=action.payload.token;
            state.user=action.payload.user
        }
        

    },
  })



export const{authenticateUser} =authSlice.actions

export default authSlice.reducer