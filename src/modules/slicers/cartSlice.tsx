//extracting state logic into a reducer

import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import Product from "../models/product";
import Cart from "../models/Cart";
import type { PayloadAction } from '@reduxjs/toolkit'
import produce from "immer";

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
      
      


  

      //state.itemsCart.push(newItem);
    },

    delete: (state) => {},
  },
});

export const { add } = cartSlice.actions;

export const selectItemsCart = (state: RootState) => state.cart;


//export const selectTotal=(state: RootState) => state.cart //sumar total
export const selectTotal = (state: RootState) =>
  state.cart.cart.itemsCart.reduce(
    (accumulator, item) => accumulator + item.product.price,
    0
  );


export default cartSlice.reducer;
