import { useAppDispatch } from "../../hooks";
import { add } from "../slicers/cartSlice";
import Product from "../models/Product";
import { useAppSelector } from "../../hooks";
import { useEffect } from "react";
import { setProductsList, decrementStock} from "../slicers/productsSlice";
import { selectProductsList } from "../slicers/productsSlice";



export const shoes: Product[] = [
  { id: 1, name: "Borcegos de cuero", price: 59.99, stock: 4 },
  { id: 2, name: "Botas de montaña", price: 79.99, stock: 4 },
  { id: 3, name: "Zapatillas deportivas", price: 49.99, stock: 4 },
  { id: 4, name: "Borcegos de seguridad", price: 69.99, stock: 4 },
  { id: 5, name: "Botas vaqueras", price: 89.99, stock: 4 },
  { id: 6, name: "Zapatillas urbanas", price: 39.99, stock: 4 },
  { id: 7, name: "Borcegos de invierno", price: 79.99, stock: 4 },
  { id: 8, name: "Botas de trabajo", price: 99.99, stock: 4 },
  { id: 9, name: "Zapatillas de running", price: 59.99, stock: 4 },
  { id: 10, name: "Borcegos de cuero sintético", price: 49.99, stock: 4 },
  { id: 11, name: "Botas de senderismo", price: 69.99, stock: 4 },
  { id: 12, name: "Zapatillas de moda", price: 69.99, stock: 0 },
];

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const productList=useAppSelector(selectProductsList)

  useEffect(() => {
    // Dispatch la acción para establecer la lista de productos cuando el componente se monta
    dispatch(setProductsList(shoes));
  }, [dispatch]);
  
function addToCart(product:Product){
  dispatch(decrementStock(product.id))
  dispatch(add(product))
}

  return (
    <ul className="card">
      {productList.map((item) => (
        <li key={item.id}>
          <span>{item.name}</span>
          <span> ${item.price}</span>
          {item.stock > 0 ? (
            <button onClick={()=>addToCart(item)}>🛒(cantidad agregada)</button>
          ) : (
            <span> No hay más stock de este producto</span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
