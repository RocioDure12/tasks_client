import React, { useState } from "react";
import User from "../models/User";
import useUserApi from "../hooks/useUserApi";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import {Form} from "../components/Form"
import Field from "../models/Field";

//falta form fields
//user
//configurar la info del form sign up para enviarla via props 

const userSignUpFields:Field[]=[
{
type: "text",
name: "name",
label: "Nombre",
required: true,

},
{
type:"text",
name:"surname",
label:"Apellido",
required:true,
},
{
    type: "email",
name:"email",
required:true,
label:"email",

},
{
type:"text",
name:"username",
required:true,
label:"username",
},

{
type:"password",
name:"password",
required:true,
label:"Contraseña"
}
           
]

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
    <MainLayout>
        <Form
          fields={userSignUpFields}
          initialValues={user} // Pasa los valores actuales de la tarea al formulario
          onFormSubmit={handleSubmit}
          buttonText="Guardar"
        ></Form>

    </MainLayout>
    )
}