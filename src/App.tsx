import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./modules/context/ThemeProvider";
import CartProvider from "./modules/context/CartProvider";
import RequireAuth from "./modules/pages/RequireAuth";
import { SignUpForm } from "./modules/pages/SignUpForm";
import VerifyEmailAccount from "./modules/pages/VerifyEmailAccount";
import { TaskFormPage } from "./modules/pages/TaskFormPage";
import { TasksListPage } from "./modules/pages/TasksListPage";
import Home from "./modules/pages/Dashboard";
import { MantineProvider } from "@mantine/core";
import { Categories } from "./modules/pages/PanelCategories";
import { Toaster } from 'react-hot-toast';
import theme from "./theme";
import LoginForm from "./modules/pages/LoginForm";


const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
        <MantineProvider theme={theme}>
          <Router>
            <Toaster />
            <Routes>
              <Route path="/users/login" element={<LoginForm />} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/verifyemail/:token?" element={<VerifyEmailAccount />} />
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="/taskform"
                element={
                  <RequireAuth>
                    <TaskFormPage />
                  </RequireAuth>
                }
              />
             
              <Route
                path="/taskform/:id?"
                element={
                  <RequireAuth>
                    <TaskFormPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/list/:date?"
                element={
                  <RequireAuth>
                    <TasksListPage />
                  </RequireAuth>
                }
              />
              <Route
                path="/categories"
                element={
                  <RequireAuth>
                    <Categories />
                  </RequireAuth>
                }
              />
            </Routes>
          </Router>
        </MantineProvider>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;
