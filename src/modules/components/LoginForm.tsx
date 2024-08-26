import { useState } from "react"
import { useNavigate } from "react-router-dom";

export interface UserLogin{
    username:string
    password:string
}

const LoginForm:React.FC=()=>{
    const [userLogin, setUserLogin] =useState<Partial<UserLogin>>({});
    const navigate=useNavigate()
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
        <form action="http://localhost:8000/users/login" method="POST" encType="multipart/form-data">
            Usuario 
            <input
                 type="text"
                 name="username"
                 value={userLogin.username ?? ""}
                 onChange={handleChange}
                 required
            /> 
            Contraseña 
            <input
                type="password"
                 name="password"
                 value={userLogin.password ?? ""}
                 onChange={handleChange}
                 required
            />

            <button type="submit">Iniciar sesión</button>

            <p>¿No tienes una cuenta? Registrate <a href="http://localhost:5173/signup">aquí</a> </p>

        </form>
    )

}

export default LoginForm;