//extracting state logic into a reducer

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { CartItem } from "../context/CartContext";
import produce from 'immer';


// Define a type for the slice state
interface CartState{
    itemsCart:CartItem[]
    total:number   
}

// Define the initial state using that type
const initialState:CartState={
    itemsCart:[],
    total:0,

}


export const cartSlice =createSlice({
    name:"cart",
    initialState,
    reducers:{
        add:(state,action)=>{
            const newItem = action.payload;
            state.itemsCart.push(newItem);
         
        },

        delete:(state)=>{
            
        }
    }
})


export const {add} = cartSlice.actions;

export const selectItemsCart = (state: RootState) => state.cart.itemsCart;

export const selectTotal=(state: RootState) => state.cart

export default cartSlice.reducer;
