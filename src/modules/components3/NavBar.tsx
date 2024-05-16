import { useAppSelector } from "../../hooks";
import { deleteItem, selectTotal } from "../slicers/cartSlice";
import { selectItemsCart } from "../slicers/cartSlice";
import { useAppDispatch } from "../../hooks";


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
          <button onClick={()=>dispatch(deleteItem(item.product.id))}>Eliminar</button>
          </li> 
        )}
      </ul>

 
    </div>
  );
}
