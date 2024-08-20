import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from "./modules/context/ThemeProvider";
import CartProvider from "./modules/context/CartProvider";
import LoginForm from "./modules/components3/LoginForm";
import Home from './modules/components3/Home';
import RequireAuth from './modules/components3/RequireAuth';
import { TaskForm } from './modules/components3/TaskForm';
import { SignUpForm } from './modules/components3/SignUpForm';
import VerifyEmailAccount from './modules/components3/VerifyEmailAccount';
import { Profile } from './modules/components3/Profile';
import { TaskDetails } from './modules/components3/TaskDetails';
import { EditTaskForm } from './modules/components3/EditTaskForm';
import { TasksList } from './modules/components3/TasksList';


export default function App() {

  return (
   
    <ThemeProvider>
    <CartProvider>
      <Router>
        <Routes>
          <Route path='/signup' element={<SignUpForm/>}/>
          <Route path='/users/login' element={<LoginForm></LoginForm>}/>
          <Route path='/verifyemail' element={<VerifyEmailAccount/>} />
          

          <Route path='/' element={<RequireAuth><Home/></RequireAuth>}/>
          <Route path='/taskform' element={<RequireAuth><TaskForm/></RequireAuth>}/>
          <Route path='/task/:id' element={<RequireAuth><TaskDetails/></RequireAuth>}/>
          <Route path='/task/edit/:id' element={<RequireAuth><EditTaskForm/></RequireAuth>}/>
          <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>}/>
          <Route path='/taskslist' element={<RequireAuth><TasksList/></RequireAuth>}/>

        </Routes>
      </Router>
      
    </CartProvider>
    </ThemeProvider>
   
  );
}
