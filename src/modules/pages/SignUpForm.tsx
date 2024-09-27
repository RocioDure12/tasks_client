import React, { useState } from "react";
import User from "../models/User";
import useUserApi from "../hooks/useUserApi";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";

export const SignUpForm:React.FC=()=>{
    const [user,setUser]=useState<Partial<User>>({disabled:false, is_verified:false})
    const userApi=useUserApi()
    const navigate = useNavigate();

    const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
        setUser({
            ...user,
            [evt.target.name]: evt.target.value
        })


    }

    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        //validaciones
        // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
        const result=await userApi.createUser(user as User)
        if (result.data){
            navigate("/verifyemail")
        } else{
            console.log("Error al crear usuario")
        }
    }



    return(
    <MainLayout  >
        <form className="flex-col p-6 rounded-xl shadow-lg" onSubmit={handleSubmit}>
            <>Nombre</>
            <input
             type="text"
             name="name"
             value={user.name || ""}
             onChange={handleChange}
             required
             />

             <>Apellido</>
             <input 
             type="text"
             name="surname"
             value={user.surname || ""}
             onChange={handleChange}
             required
             />

             <>Email</>
             <input
             type="email"
             name="email"
             value={user.email || ""}
             onChange={handleChange}
             required
             />

             <>Nombre de usuario</>
             <input
             type="text"
             name="username"
             value={user.username || ""}
             onChange={handleChange}
             required
             />

             <>Contraseña</>
             <input
             name="password"
             value={user.password || ""}
             onChange={handleChange}
             required
             />
             <button>Enviar</button>


        <p>¿Ya tienes una cuenta? Inicia sesión <a href="http://localhost:5173/users/login">aquí</a> </p>
        </form>
    </MainLayout>
    )
}