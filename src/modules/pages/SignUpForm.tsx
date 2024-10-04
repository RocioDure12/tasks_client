import React, { useState } from "react";
import User from "../models/User";
import useUserApi from "../hooks/useUserApi";
import { useNavigate } from "react-router-dom";

import {Form} from "../components/Form"
import Field from "../models/Field";
import FormLayout from "../components/FormLayout";


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
    label:"Email",

},
{
    type:"text",
    name:"username",
    label:"Username",
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
            navigate("/verifyemail")
        } else{
            console.log("Error al crear usuario")
        }
    }

    return(
    <FormLayout>
        <Form
          fields={userSignUpFields}
          initialValues={user}
          onFormSubmit={handleSubmit}
          buttonText="Guardar"
        ></Form>

    </FormLayout>
    )
}