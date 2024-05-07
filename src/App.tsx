
import Counter from "./modules/components3/Counter";
import Mode from "./modules/components3/Mode";
import Categories from "./modules/components3/Categories";
import ThemeProvider from "./modules/context/ThemeProvider";

export default function App() {
  return (
    <ThemeProvider>
      <section>
        
        <Counter></Counter>
        <Mode></Mode>
        <Categories />

        
      </section>
    </ThemeProvider>
  );
}
