import { useState } from "react"
import { useAppDispatch } from "../../hooks"
import useAuthApi from "../hooks/useAuthApi";
import { login } from "../slicers/authSlice";

export interface UserLogin{
    username:string
    password:string
}

const LoginForm:React.FC=()=>{
    
    const dispatch=useAppDispatch()
    const [userLogin, setUserLogin] =useState<Partial<UserLogin>>({});
    const authApi = useAuthApi()
    
    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{
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
            
            dispatch(login(result.data))
        }else{
            alert("error desconocido")
        }
      

    }

    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

    return(
        <form onSubmit={handleSubmit}>
            Usuario 
            <input
                 type="text"
                 name="username"
                 value={userLogin.username ?? ""}
                 onChange={handleChange}
            /> 
            Contraseña 
            <input
                type="password"
                 name="password"
                 value={userLogin.password ?? ""}
                 onChange={handleChange}
            />

            <button type="submit">Iniciar sesión</button>

        </form>
    )

}

export default LoginForm;