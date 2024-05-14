import { useAppDispatch } from "../../hooks";
import {add} from "../slicers/cartSlice"
import Product from "../models/Product";



const shoes: Product[] = [
  { id: 1, name: "Borcegos de cuero", price: 59.99, stock:4},
  { id: 2, name: "Botas de montaña", price: 79.99, stock:4 },
  { id: 3, name: "Zapatillas deportivas", price: 49.99, stock:4 },
  { id: 4, name: "Borcegos de seguridad", price: 69.99, stock:4 },
  { id: 5, name: "Botas vaqueras", price: 89.99, stock:4 },
  { id: 6, name: "Zapatillas urbanas", price: 39.99, stock:4 },
  { id: 7, name: "Borcegos de invierno", price: 79.99, stock:4 },
  { id: 8, name: "Botas de trabajo", price: 99.99, stock:4 },
  { id: 9, name: "Zapatillas de running", price: 59.99, stock:4 },
  { id: 10, name: "Borcegos de cuero sintético", price: 49.99, stock:4 },
  { id: 11, name: "Botas de senderismo", price: 69.99, stock:4 },
  { id: 12, name: "Zapatillas de moda", price: 69.99, stock:4 },
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

