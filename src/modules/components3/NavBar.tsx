import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectTotal } from "../slices/cartSlice";
import { selectItemsCart } from "../slices/cartSlice";
import { updateStockAndRemoveToCart } from "../slices/productsSlice";
import axios from "axios";



export default function NavBar() {
  const total = useAppSelector(selectTotal);
  const itemsCart=useAppSelector(selectItemsCart)
  const dispatch=useAppDispatch()


  return (
    <div style={{ background: '#6f8b94', borderRadius:"15px"}}>
 
      <span>🛒</span>
      <span>${total}</span>
      <ul>
        {itemsCart.map((item)=>
          <li key={item.product.id}>{item.product.name} ({item.quantity}) ${item.product.price}
          
          <button onClick={()=>dispatch(updateStockAndRemoveToCart(itemsCart))}>Eliminar</button>
          </li> 
        )}
      </ul>

        <button style={{ background: '#e6eba9', borderRadius:"10px"}}>Logout</button>
    </div>
  );
}
