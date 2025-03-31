import useUserApi from "../hooks/useUserApi"
import { useNavigate } from "react-router-dom";
import { Sun,Moon } from 'lucide-react';


export const NavBar:React.FC=()=>{
    const userApi=useUserApi()
    const navigate=useNavigate()
    const logout=async()=>{
        const result=await userApi.logout()
        navigate(`users/login`)
    }
    return(
        <nav className="w-full flex shadow-lg text-lg p-3 justify-end fixed top-0">
            <a className="p-2" href="http://localhost:5173/">Inicio</a>
            <a className="p-2"href="http://localhost:5173/categories">Panel de categorias</a>
            <a href="http://localhost:5173/list" className="p-2">Tasks List</a>
            <button onClick={logout}>Logout</button>
            <Sun></Sun>
            <Moon></Moon>

        </nav>
    )
}



