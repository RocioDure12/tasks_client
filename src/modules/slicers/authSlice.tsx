import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import User from "../models/User";


interface AuthState{
    token:string | null;
    user:User| null
    loading:boolean
    error:string | null
}

const initialState:AuthState={
    token:null,
    user:null,
    loading:false,
    error:null


}
//sacar esto de aca
// Acción asíncrona para iniciar sesión
export const login = createAsyncThunk(
    'auth/login',
    async (credentials: { username: string; password: string }, thunkAPI) => {
        try {
            const response = await axios.post('http://127.0.0.1:8000/users/login', credentials);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.response?.data?.detail || 'Error desconocido');
        }
    }
);

  const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        logout(state){
            state.token=null,
            state.user=null,
            state.loading=false,
            state.error=null
    
        }

    },
  })



export const{logout} =authSlice.actions

export default authSlice.reducer