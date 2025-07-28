import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Input } from "../components/Input";
import { Button } from "../components/Button"
import FormLayout from "../components/FormLoginLayout";

export interface UserLogin{
    username:string
    password:string
}

const LoginForm:React.FC=()=>{
    const [userLogin, setUserLogin] =useState<Partial<UserLogin>>({});

    /*const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(userLogin)
        if (!userLogin.username || !userLogin.password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const result=await authApi.login(userLogin as UserLogin)
        if(result.error){
            console.log(result.errorMessage);
            return
        }
        if (result.data){
            
            dispatch(authenticateUser(result.data))
            navigate('/home')
        }else{
            alert("error desconocido")
        }
      

    }
*/


    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

  
    return(


        <FormLayout>
            <form className="m-2 rounded-lg  h-full p-5 flex flex-col gap-2 shadow-lg bg-primary-50 text-primary-950 dark:bg-neutralScale-800 dark:text-neutralScale-50" action="http://localhost:8000/users/login" method="POST" encType="multipart/form-data">
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
        </FormLayout>
    )

}

export default LoginForm;