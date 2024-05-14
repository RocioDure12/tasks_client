import { useAppSelector } from "../../hooks";
import { selectTotal } from "../slicers/cartSlice";


export default function NavBar() {
  const total = useAppSelector(selectTotal);
  return (
    <div className="card">
      <span>🛒</span>
      <span>{total}</span>

 
    </div>
  );
}
