import React, { useState } from "react";
import User from "../models/User";
import { Button } from "antd";

export const SignUpForm:React.FC=()=>{
    const [user,setUser]=useState<Partial<User>>({disabled:false, isVerified:false})

    const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
        //const{name,value,type}=evt.target

    }

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        //validaciones
        // Aquí puedes realizar otras acciones, como enviar los datos a un servidor

    }



    return(
        <form onSubmit={handleSubmit}>
            <label>Nombre</label>
            <input
             type="text"
             name="name"
             value={user.name || ""}
             onChange={handleChange}
             required
             />

             <label>Apellido</label>
             <input 
             type="text"
             name="surname"
             value={user.surname || ""}
             onChange={handleChange}
             required
             />

             <label>Email</label>
             <input
             type="email"
             name="email"
             value={user.email || ""}
             onChange={handleChange}
             required
             />

             <label>Nombre de usuario</label>
             <input
             type="text"
             name="username"
             value={user.username || ""}
             onChange={handleChange}
             required
             
             
             />
             <button>Enviar</button>


        <p>¿Ya tienes una cuenta? Inicia sesión <a href="http://localhost:5173/users/login">aquí</a> </p>
        </form>
    )
}