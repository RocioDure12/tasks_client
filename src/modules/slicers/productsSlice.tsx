
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
        incrementStock:(state,action:PayloadAction<number>)=>{
            const idItem=action.payload
            const product=state.productsList.findIndex(product=> product.id === idItem)
            if (product !== -1) { 
                state.productsList[idItem].stock+=1
                
            }

        },
        decrementStock:(state,action:PayloadAction<number>)=>{
            const idItem=action.payload
            const product=state.productsList.findIndex(product=> product.id === idItem)
            if (product !== -1) { 
                if (state.productsList[idItem].stock > 0){
                    state.productsList[idItem].stock-=1
                }
            }
            console.log(state.productsList.map(product=>product.stock))
             
            }

        },
        

    }
)

export const { setProductsList, decrementStock } = productListSlice.actions;

export const selectProductsList = (state: RootState) => state.productsList.productsList

export default productListSlice.reducer;
