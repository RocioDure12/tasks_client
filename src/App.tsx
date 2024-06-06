import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from "./modules/context/ThemeProvider";
import NavBar from "./modules/components3/NavBar";
import CartProvider from "./modules/context/CartProvider";
import LoginForm from "./modules/components3/LoginForm";
import Home from './modules/components3/Home';




export default function App() {

  return (
   
    <ThemeProvider>
    <CartProvider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <>
            <Route path='/home' element={<Home></Home>}/>
            <Route path='/login' element={<LoginForm></LoginForm>}/>

  
          </>
        </Routes>
      </Router>
      
    </CartProvider>
    </ThemeProvider>
   
  );
}
