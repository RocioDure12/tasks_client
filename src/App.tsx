import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import ThemeProvider from "./modules/context/ThemeProvider";
import CartProvider from "./modules/context/CartProvider";
import LoginForm from "./modules/components/LoginForm";
import Home from './modules/components/Home';
import RequireAuth from './modules/components/RequireAuth';
import { TaskForm } from './modules/components/TaskForm';
import { SignUpForm } from './modules/components/SignUpForm';
import VerifyEmailAccount from './modules/components/VerifyEmailAccount';
import { Profile } from './modules/components/Profile';
import { TaskDetails } from './modules/components/TaskDetails';
import { EditTaskForm } from './modules/components/EditTaskForm';
import { TasksList } from './modules/components/TasksList';


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
