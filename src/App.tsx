
import Counter from "./modules/components3/Counter";
import Mode from "./modules/components3/Mode";
import Categories from "./modules/components3/Categories";
import ThemeProvider from "./modules/context/ThemeProvider";
import NavBar from "./modules/components3/NavBar";
import CartProvider from "./modules/context/CartProvider";
import ProductList from "./modules/components3/ProductsList";

export default function App() {
  return (
    <ThemeProvider>
    <CartProvider>
      <section>
        <NavBar></NavBar>
        <Counter></Counter>
        <Mode></Mode>
        <Categories />
        <ProductList></ProductList>

        
      </section>
    </CartProvider>
    </ThemeProvider>
  );
}
