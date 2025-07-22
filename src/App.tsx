import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./modules/context/ThemeProvider";
import CartProvider from "./modules/context/CartProvider";
import LoginForm from "./modules/pages/LoginForm";
import RequireAuth from "./modules/pages/RequireAuth";
import { SignUpForm } from "./modules/pages/SignUpForm"
import VerifyEmailAccount from "./modules/pages/VerifyEmailAccount";
import { Profile } from "./modules/old/Profile";
import { TaskFormPage } from "./modules/pages/TaskFormPage";
import { TasksListPage } from "./modules/pages/TasksListPage";
import Home from "./modules/pages/Dashboard";
import { MantineProvider } from "@mantine/core";
import { Categories } from "./modules/pages/PanelCategories";
import { DatesProvider } from "@mantine/dates";
import theme from "./theme";
import { Toaster } from 'react-hot-toast';

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <MantineProvider theme={theme}>
          <Router>
            <Toaster></Toaster>
            <Routes>
              <Route path="/users/login" element={<LoginForm></LoginForm>} />
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
                path="/profile"
                element={
                  <RequireAuth>
                    <Profile />
                  </RequireAuth>
                }
              />
              <Route
                path="/taskform/:id?"
                element={
                  <RequireAuth>
                    <TaskFormPage></TaskFormPage>
                  </RequireAuth>
                }
              />
              <Route
                path="/list/:date?"
                element={
                  <RequireAuth>
                    <TasksListPage></TasksListPage>
                  </RequireAuth>
                }
              />
              <Route
                path="/categories"
                element={
                  <RequireAuth>
                    <Categories></Categories>
                  </RequireAuth>
                }

              />
            </Routes>
          </Router>

        </MantineProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
