import React, { useState } from "react";
import User from "../models/User";
import useUserApi from "../hooks/useUserApi";
import { useNavigate } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import {Form} from "../components/Form"
import Field from "../models/Field";


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
    label:"username",
    required:true,
},

{
    type:"password",
    name:"password",
    label:"Contraseña",
    required:true,
}
           
]

export const SignUpForm:React.FC=()=>{
    const [user,setUser]=useState<Partial<User>>({disabled:false, is_verified:false})
    const userApi=useUserApi()
    const navigate = useNavigate();


    const handleSubmit=async(data:User)=>{
        //validaciones
        // Aquí puedes realizar otras acciones, como enviar los datos a un servidor
        const result=await userApi.createUser(data)
        console.log(result)
        if (result.data){
            console.log(result.data.role_id)
            navigate("/verifyemail")
        } else{
            console.log("Error al crear usuario")
        }
    }

    return(
    <MainLayout>
        <Form
          fields={userSignUpFields}
          initialValues={user}
          onFormSubmit={handleSubmit}
          buttonText="Guardar"
        ></Form>

    </MainLayout>
    )
}