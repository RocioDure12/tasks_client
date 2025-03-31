import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUserApi from "../hooks/useUserApi";
import { Sun, Moon, Menu, X } from "lucide-react";

export const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userApi = useUserApi();
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const logout = async () => {
    await userApi.logout();
    navigate("/users/login");
    setIsOpen(false);
  };

  return (
    <div>
      {/* Botón hamburguesa siempre visible */}
      <button
        className="fixed top-4 left-4 z-50 p-2 text-white rounded"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-primary-700 text-primary-contrast-700 p-5 flex flex-col shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
        onClick={(e) => e.stopPropagation()} // Evita que el clic cierre el menú
      >
        {/* Botón para cerrar menú (X) dentro del menú */}
        <button
          className="absolute top-4 right-4 p-2 text-white"
          onClick={toggleMenu}
        >
          <X size={24} />
        </button>

        {/* Links de navegación */}
        <div className="mt-16">
          <Link to="/" className="p-3 hover:bg-gray-700 rounded block">
            Inicio
          </Link>
          <Link to="/categories" className="p-3 hover:bg-gray-700 rounded block">
            Panel de categorías
          </Link>
          <Link to="/list" className="p-3 hover:bg-gray-700 rounded block">
            Tasks List
          </Link>
        </div>

        {/* Botón de logout */}
        <button
          className="mt-auto bg-red-600 hover:bg-red-700 text-white p-3 rounded"
          onClick={logout}
        >
          Logout
        </button>

        {/* Íconos de sol y luna */}
        <div className="flex gap-3 mt-4 justify-center">
          <Sun className="cursor-pointer" />
          <Moon className="cursor-pointer" />
        </div>
      </nav>
    </div>
  );
};
