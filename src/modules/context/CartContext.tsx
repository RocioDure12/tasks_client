import { createContext } from "react";

export interface Product{
    id:number
    name:string
    price:number
}

export interface CartItem{
    product:Product
    quantity:number
}

interface CartContext{
    itemsCart:CartItem[];
    setItems:(itemCart:CartItem[])=>any
   
}

const CartContext=createContext<CartContext | undefined>(undefined);

export default CartContext;