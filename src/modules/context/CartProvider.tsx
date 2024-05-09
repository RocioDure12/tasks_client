import { useState } from "react"
import CartContext from "./CartContext"
import {CartItem} from "./CartContext"


interface CartProviderProps{
    children:React.ReactNode
}

export default function CartProvider(props:CartProviderProps){
    const [itemsCart, setItems] = useState<CartItem[]>([]);

    return(
        < CartContext.Provider value={{itemsCart, setItems}}>
            {props.children}
        </CartContext.Provider>
    )
}