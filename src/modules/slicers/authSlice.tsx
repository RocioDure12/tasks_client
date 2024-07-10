import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import User from "../models/User";
import type { RootState } from "../../store";

interface AuthState{
    //expirationRefreshToken?:Date | null
    user:User| null

}

const initialState:AuthState={
    user:null,
 
}

  const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        authenticateUser:(state, action:PayloadAction<{user:User}>)=>{
            state.user=action.payload.user
          
        
          
        },

        logout:(state)=>{
         

        },
      setUserNull:(state)=>{
        state.user= null;

      }
    },
    
  })



export const{authenticateUser, logout, setUserNull} =authSlice.actions

export const currentUser= (state:RootState)=> state.auth.user

//export const selectIsAuthenticated= (state:RootState)=> state.auth.isAuthenticated

export default authSlice.reducer