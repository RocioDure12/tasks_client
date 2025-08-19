import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {  Menu, X, LogOut } from "lucide-react";
import dayjs from "dayjs";
import useUserApi from "../hooks/useUserApi";
import useTaskApi from "../hooks/useTaskApi";
import toast from "react-hot-toast";

export const SideBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const userApi = useUserApi();
  const navigate = useNavigate();
  const taskApi = useTaskApi();


  const toggleMenu = () => setIsOpen((prev) => !prev);

  const logout = async () => {
    await userApi.logout();
    navigate("/users/login");
    setIsOpen(false);
  };

  const hasTasks = async (date: string) => {
    const result = await taskApi.get_tasks_paginated(1, 0, date);
    if (result.data && result.data[0].length > 0) {
      navigate(`/list/${date}`);
    } else {
      toast.error("No hay tareas para esa fecha");
    }
  };



  return (
    <div>
      {/* Botón hamburguesa */}
      <div className="fixed z-50 top-0 left-0 w-full flex p-2">
        <button
          className="border-0 focus:outline-none p-2 rounded-lg flex items-center text-primary-contrast-400 bg-primary-400 "
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <nav
        className={`fixed top-0 left-0 h-full w-64 bg-primary-400 text-primary-contrast-700 p-5 flex flex-col shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } z-50`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar dentro del sidebar */}
        <button
          className="border-0 focus:outline-none  absolute top-4 right-4 p-2 text-white bg-primary-400 "
          onClick={toggleMenu}
        >
          <X size={24} />
        </button>

        {/* Navegación */}
        <div className="mt-16 space-y-4 text-primary-900 font-semibold">
          <button className="border-0 focus:outline-none" onClick={() => navigate("/")} >
            Inicio
          </button>
          <button className="border-0 focus:outline-none" onClick={() => navigate("/categories")} >
            Panel de categorías
          </button >
          <button
            className="border-0 focus:outline-none"
            onClick={() => hasTasks(dayjs().format("YYYY-MM-DD"))}
         
          >
            Tareas para hoy
          </button>
          <button
            className="border-0 focus:outline-none"
            onClick={() => hasTasks(dayjs().add(1, "day").format("YYYY-MM-DD"))}
          >
            Tareas para mañana
          </button>
        </div>

        {/* Espaciador */}
        <div className="flex-grow" />

        {/* Iconos */}
        <div className="flex gap-3 justify-center mb-4">
          <LogOut
            onClick={logout}
            className="cursor-pointer text-xl text-primary-900 hover:text-primary-700"
          />
          {/*<Sun className="cursor-pointer text-xl text-primary-900 hover:text-primary-700" />
          <Moon className="cursor-pointer text-xl text-primary-900 hover:text-primary-700" />*/}
        </div>
      </nav>
    </div>
  );
};
