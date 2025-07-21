import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserApi from "../hooks/useUserApi";
import { Sun, Moon, Menu, X, LogOut } from "lucide-react";
import dayjs from "dayjs";

export const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userApi = useUserApi();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen((prevState) => !prevState);  // Asegura un comportamiento limpio y evita duplicaciones.

  const logout = async () => {
    await userApi.logout();
    navigate("/users/login");
    setIsOpen(false);
  };

  return (
    <div>
      {/* Botón hamburguesa siempre visible */}
      <div
        className="fixed top-4 left-4 z-50 p-2 rounded-lg  text-primary-contrast-700 bg-primary-400 border-2 border-shadow-xl"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-primary-400 text-primary-contrast-700 p-5 flex flex-col shadow-xl transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          } z-50 border-l-4 border-gray-400`} // Sombra izquierda
        onClick={(e) => e.stopPropagation()} // Evita que el clic cierre el menú
      >
        {/* Botón para cerrar menú (X) dentro del menú */}
        <button
          className="absolute top-4 right-4 p-2 text-white bg-primary-400"
          onClick={toggleMenu}
        >
          <X size={24} />
        </button>

        {/* Links de navegación */}
        <div className="mt-16 space-y-4 ">
          <Link to="/" className="p-3 text-primary-900 hover:text-primary-500 rounded block ">
            Inicio
          </Link>
          <Link to="/categories" className="p-3 text-primary-900 hover:text-primary-500 rounded block">
            Panel de categorías
          </Link>
          <Link to={`/list/${dayjs().format("YYYY-MM-DD")}`} className="p-3 text-primary-900 hover:text-primary-500 rounded block">
            Tareas para hoy
          </Link>
          <Link to={`/list/${dayjs().add(1, "day").format("YYYY-MM-DD")}`} className="p-3 text-primary-900 hover:text-primary-500 rounded block">
            Tareas para mañana
          </Link>
        </div>

        {/* Espacio flexible para separar los iconos hacia abajo */}
        <div className="flex-grow" />

        {/* Íconos de sol, luna y logout */}
        <div className="flex gap-3 justify-center mb-4">
          <LogOut onClick={logout} className="cursor-pointer text-xl text-primary-900 hover:text-primary-400 " />
          <Sun className="cursor-pointer text-xl text-primary-900 hover:text-primary-400" />
          <Moon className="cursor-pointer text-xl text-primary-900 hover:text-primary-400" />
        </div>
      </nav>
    </div>
  );
};
