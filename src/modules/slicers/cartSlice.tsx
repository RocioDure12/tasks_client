//extracting state logic into a reducer

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import Product from "../models/Product";
import Cart from "../models/Cart";
import type { PayloadAction } from '@reduxjs/toolkit'
import produce from "immer";
import CartItem from "../models/CartItem";

// Define a type for the slice state
interface CartState {
  cart: Cart;

}

// Define the initial state using that type
const initialState: CartState = {

  cart: { itemsCart: [] },

};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add: (state, action:PayloadAction<Product>) => {
      const newItem = action.payload;
      const index=state.cart.itemsCart.findIndex(item=> newItem.id === item.product.id)
      
      if(index !== -1){
        state.cart.itemsCart[index].quantity+=1

      } 
      else{
        state.cart.itemsCart.push({ product: newItem, quantity: 1 })
      } 
     

   
      //state.cart.itemsCart.map(item=> console.log(item.quantity))
   

    },

    delete: (state) => {},
  },
});

export const { add } = cartSlice.actions;

export const selectItemsCart = (state: RootState) => state.cart;


//export const selectTotal=(state: RootState) => state.cart //sumar total
export const selectTotal = (state: RootState) =>
  state.cart.cart.itemsCart.reduce(

    (accumulator, item) => accumulator + item.product.price * item.quantity,
    0
  );


export default cartSlice.reducer;
