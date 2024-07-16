import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from "./modules/context/ThemeProvider";
import CartProvider from "./modules/context/CartProvider";
import LoginForm from "./modules/components3/LoginForm";
import Home from './modules/components3/Home';
import RequireAuth from './modules/components3/RequireAuth';

export default function App() {

  return (
   
    <ThemeProvider>
    <CartProvider>
      <Router>
        <Routes>
          <>
            
            <Route path='/users/login' element={<LoginForm></LoginForm>}/>
            <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
      
          </>
        </Routes>
      </Router>
      
    </CartProvider>
    </ThemeProvider>
   
  );
}
