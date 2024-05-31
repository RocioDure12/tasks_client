import { useState } from "react"
import { useAppDispatch } from "../../hooks"
import { login } from "../slicers/authSlice";

interface UserLogin{
    username:string
    password:string
}

const LoginForm:React.FC=()=>{
    const dispatch=useAppDispatch()
    const [userLogin, setUserLogin] =useState<Partial<UserLogin>>({});
    
    const handleSubmit=(e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        dispatch(login(userLogin as UserLogin))
    

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