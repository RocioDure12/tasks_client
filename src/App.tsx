import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeProvider from "./modules/context/ThemeProvider";
import CartProvider from "./modules/context/CartProvider";
import LoginForm from "./modules/pages/LoginForm";
import RequireAuth from "./modules/pages/RequireAuth";
import { TaskForm } from "./modules/old/TaskForm";
import { SignUpForm } from "./modules/pages/SignUpForm";
import VerifyEmailAccount from "./modules/pages/VerifyEmailAccount";
import { Profile } from "./modules/old/Profile";
import { Task2Form } from "./modules/pages/Task2Form";
import { TasksList } from "./modules/pages/TasksList";
import Home from "./modules/pages/Home";
import { MantineProvider } from "@mantine/core";

export default function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <MantineProvider>
          <Router>
            <Routes>
              <Route path="/users/login" element={<LoginForm></LoginForm>} />
              <Route path="/signup" element={<SignUpForm />} />
              <Route path="/verifyemail" element={<VerifyEmailAccount />} />

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
                    <Task2Form />
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
                path="/formulario/:id?"
                element={
                  <RequireAuth>
                    <Task2Form></Task2Form>
                  </RequireAuth>
                }
              />
              <Route
                path="/list"
                element={
                  <RequireAuth>
                    <TasksList></TasksList>
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
