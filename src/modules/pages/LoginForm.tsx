import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button"
import AuthFormLayout from "../components/AuthFormLayout";

export interface UserLogin{
    username:string
    password:string
}

const LoginForm:React.FC=()=>{
    const [userLogin, setUserLogin] =useState<Partial<UserLogin>>({});




    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

  
    return(


        <AuthFormLayout>
            <form className="rounded-lg  p-5 flex flex-col gap-2 shadow-lg bg-primary-50 " action="http://localhost:8000/users/login" method="POST" encType="multipart/form-data">
                
                
                <Input
                    type="text"
                    name="username"
                    value={userLogin.username ?? ""}
                    onChange={handleChange}
                    required
                    label="Usuario"
                /> 
         
                <Input
                    type="password"
                    name="password"
                    value={userLogin.password ?? ""}
                    onChange={handleChange}
                    required
                    label="Contraseña"
                />

                <Button className="bg-primary-500 text-neutralScale-50" type="submit">Iniciar sesión</Button>

                <p className="text-sm p-1 mt-1 mb-1 text-center ">¿No tienes una cuenta? Registrate <a href="http://localhost:5173/signup">aquí</a> </p>

            </form>
        </AuthFormLayout>
    )

}

export default LoginForm;