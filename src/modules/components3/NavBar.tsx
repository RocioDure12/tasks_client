import { useAppDispatch, useAppSelector } from "../../hooks";
import { selectTotal } from "../slicers/cartSlice";
import { selectItemsCart } from "../slicers/cartSlice";
import { updateStockAndRemoveToCart } from "../slicers/productsSlice";



export default function NavBar() {
  const total = useAppSelector(selectTotal);
  const itemsCart=useAppSelector(selectItemsCart)
  const dispatch=useAppDispatch()

  return (
    <div className="card">
      <span>🛒</span>
      <span>${total}</span>
      <ul>
        {itemsCart.map((item)=>
          <li key={item.product.id}>{item.product.name} ({item.quantity}) ${item.product.price}
          <button onClick={()=>dispatch(updateStockAndRemoveToCart(itemsCart))}>Eliminar</button>
          </li> 
        )}
      </ul>

 
    </div>
  );
}
