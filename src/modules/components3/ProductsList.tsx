import { useAppDispatch } from "../../hooks";
import { Product } from "../context/CartContext";
import {add} from "../slicers/cartSlice"


const shoes: Product[] = [
  { id: 1, name: "Borcegos de cuero", price: 59.99 },
  { id: 2, name: "Botas de montaña", price: 79.99 },
  { id: 3, name: "Zapatillas deportivas", price: 49.99 },
  { id: 4, name: "Borcegos de seguridad", price: 69.99 },
  { id: 5, name: "Botas vaqueras", price: 89.99 },
  { id: 6, name: "Zapatillas urbanas", price: 39.99 },
  { id: 7, name: "Borcegos de invierno", price: 79.99 },
  { id: 8, name: "Botas de trabajo", price: 99.99 },
  { id: 9, name: "Zapatillas de running", price: 59.99 },
  { id: 10, name: "Borcegos de cuero sintético", price: 49.99 },
  { id: 11, name: "Botas de senderismo", price: 69.99 },
  { id: 12, name: "Zapatillas de moda", price: 69.99 },
];

const ProductList: React.FC = () => {
  const dispatch=useAppDispatch()

  return (
    <ul className="card">
      {shoes.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span> ${item.price}</span>
          <button onClick={()=>dispatch(add(item))}>🛒</button>

        </li>
      ))}
    </ul>
  );
};

export default ProductList;
