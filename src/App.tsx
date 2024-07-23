import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from "./modules/context/ThemeProvider";
import CartProvider from "./modules/context/CartProvider";
import LoginForm from "./modules/components3/LoginForm";
import Home from './modules/components3/Home';
import RequireAuth from './modules/components3/RequireAuth';
import { TaskForm } from './modules/components3/TaskForm';
import ProductList from './modules/components3/ProductsList';
import NavBar from './modules/components3/NavBar';

export default function App() {

  return (
   
    <ThemeProvider>
    <CartProvider>
      <Router>
        <NavBar></NavBar>
        <Routes>
          <>
            
            <Route path='/users/login' element={<LoginForm></LoginForm>}/>
            <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
            <Route path='/taskform' element={<RequireAuth><TaskForm/></RequireAuth>}/>
            <Route path='productlist' element={<ProductList></ProductList>}/>
      
          </>
        </Routes>
      </Router>
      
    </CartProvider>
    </ThemeProvider>
   
  );
}
