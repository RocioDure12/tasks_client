
import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import type { PayloadAction } from '@reduxjs/toolkit'
import Product from "../models/Product";

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
        resetStock:(state,action:PayloadAction<number>)=>{
            const idItem=action.payload
            const index=state.productsList.findIndex(product=> product.id === idItem)
      

            if (index !== -1) { 
                state.productsList[index].stock=1            
            }

        },
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

export const { setProductsList, decrementStock, resetStock } = productListSlice.actions;

export const selectProductsList = (state: RootState) => state.productsList.productsList

export default productListSlice.reducer;