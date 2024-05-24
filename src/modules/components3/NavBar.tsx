import { useAppSelector } from "../../hooks";
import { deleteItem, selectTotal } from "../slicers/cartSlice";
import { selectItemsCart } from "../slicers/cartSlice";
import { useAppDispatch } from "../../hooks";
import { resetStock } from "../slicers/productsSlice";
import CartItem from "../models/CartItem";



export default function NavBar() {
  const total = useAppSelector(selectTotal);
  const itemsCart=useAppSelector(selectItemsCart)
  const dispatch=useAppDispatch()

  function removeFromCart(item:CartItem){
    dispatch(resetStock(item.product.id))
    item.quantity
    dispatch(deleteItem(item.product.id))

  }
  
  return (
    <div className="card">
      <span>🛒</span>
      <span>${total}</span>
      <ul>
        {itemsCart.map((item)=>
          <li key={item.product.id}>{item.product.name} ({item.quantity}) ${item.product.price}
          <button onClick={()=>removeFromCart(item)}>Eliminar</button>
          </li> 
        )}
      </ul>

 
    </div>
  );
}
