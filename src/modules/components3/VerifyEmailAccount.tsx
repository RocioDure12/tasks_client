import { useState } from "react"
import useUserApi from "../hooks/useUserApi"
import { useNavigate } from "react-router-dom";


export default function VerifyEmailAccount() {
     
    const [token, setToken]=useState("")
    const userApi=useUserApi()
    const navigate = useNavigate();

        const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
            setToken(evt.target.value)

    }

    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const result=await userApi.verifyEmailAccount(token)
        if (result.data){
            navigate("users/login")
        }else{
            console.log("error en verificacion del email")
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            Ingresa el codigo que recibiste por email 

            <input
             type="text"
             name="token"
             value={token}
             onChange={handleChange}
             required
             />
             <button>Enviar</button>
        </form>
        
    
    )
}