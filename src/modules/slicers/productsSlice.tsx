
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { PayloadAction } from '@reduxjs/toolkit'
import Product from "../models/Product";
import { add, deleteItem } from "./cartSlice";
import { AppDispatch } from "../../store";
import CartItem from "../models/CartItem";

interface productListState{
    productsList:Product[]

}

const initialState:productListState={
    productsList:[]
}


export const productListSlice=createSlice({
    
    name:"productList",
    initialState,
    reducers:{
        setProductsList:(state,action:PayloadAction <Product[]>)=>{
            state.productsList=action.payload
        },
        resetStock: (state, action: PayloadAction<{ id: number, quantity: number }[]>) => {
            action.payload.forEach(({ id, quantity }) => {
                const index = state.productsList.findIndex(product => product.id === id);
                if (index !== -1) {
                    state.productsList[index].stock = quantity;
                }
            });

            }

        ,
        decrementStock:(state,action:PayloadAction<number>)=>{
            const idItem=action.payload
            const index=state.productsList.findIndex(product=> product.id === idItem)
            if (index !== -1) { 
                if (state.productsList[index].stock > 0){
                    state.productsList[index].stock-=1
                }
            }
             
            }

        },
        

    }
)


export const updateStockAndAddToCart= (product:Product)=>(dispatch:AppDispatch)=>{
    dispatch(decrementStock(product.id))
    dispatch(add(product))

}

export const updateStockAndRemoveToCart=(itemsCart:CartItem[])=>(dispatch:AppDispatch)=>{
    const itemsToUpdate = itemsCart.map(item => ({
        id: item.product.id,
        quantity: item.quantity
    }));

    dispatch(resetStock(itemsToUpdate));
    itemsCart.forEach(item => dispatch(deleteItem(item.product.id)));
   
}

export const { setProductsList, decrementStock, resetStock} = productListSlice.actions;

export const selectProductsList = (state: RootState) => state.productsList.productsList

export default productListSlice.reducer;
