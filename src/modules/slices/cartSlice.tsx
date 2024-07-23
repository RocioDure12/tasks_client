//extracting state logic into a reducer

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import Product from "../models/Product";
import Cart from "../models/Cart";
import type { PayloadAction } from '@reduxjs/toolkit'

// Define a type for the slice state
interface CartState {
 cart:Cart

}

// Define the initial state using that type
const initialState: CartState = {
  cart:{itemsCart:[]}

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action:PayloadAction<Product>) => {
      const newItem = action.payload;
      const index=state.cart.itemsCart.findIndex(item=> newItem.id === item.product.id)
      
      if(index != -1 && newItem.stock > 0 ){
          state.cart.itemsCart[index].quantity+=1
      } 
      else{
        state.cart.itemsCart.push({ product: newItem, quantity: 1,})
    
      } 
    
    },
    
    deleteItem: (state,action:PayloadAction<number>) => {
      const idItem=action.payload
      const itemsFiltered=state.cart.itemsCart.filter(item => item.product.id != idItem)
      state.cart.itemsCart=itemsFiltered 
    },

    decrementQuantity:(state, action:PayloadAction<number>)=>{
      const idItem=action.payload
      const index=state.cart.itemsCart.findIndex(item=> item.product.id === idItem)
      if (index !==1){
        state.cart.itemsCart[index].quantity-=1
      }
    },

    incrementQuantity:(state, action:PayloadAction<number>)=>{
      const idItem=action.payload
      const index=state.cart.itemsCart.findIndex(item=> item.product.id === idItem)
      if (index !==1){
        state.cart.itemsCart[index].quantity+=1
      }
   

    }
  },

  

});

export const { add, deleteItem} = cartSlice.actions;

export const selectItemsCart = (state: RootState) => state.cart.cart.itemsCart;

export const selectTotal = (state: RootState) =>
  state.cart.cart.itemsCart.reduce(

    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );


export default cartSlice.reducer;
