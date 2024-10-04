import { useState, useEffect } from "react"
import useUserApi from "../hooks/useUserApi"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function VerifyEmailAccount() {
     
    //const [token, setToken]=useState("")
    const userApi=useUserApi()
    const navigate = useNavigate();
    const { token } = useParams<{ token: string }>();

    useEffect(() => {
        if (token) {
        handle_email_verification(token)
        navigate("/users/login")}
        else{
            console.log("No se encontro el token")
        }
      }, [token]);
    


        /*const handleChange=(evt:React.ChangeEvent<HTMLInputElement>)=>{
            setToken(evt.target.value)

    }

    const handleSubmit=async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        const result=await userApi.verifyEmailAccount(token)
        if (result.data){
            navigate("/users/login")
        }else{
            console.log("error en verificacion del email")
        }
    }*/

    const handle_email_verification=async(token:string)=>{
        const result=await userApi.verifyEmailAccount(token)
        if (result.data){
            navigate("/users/login")
        }else{
            console.log("error en verificacion del email")
            }
        }


    return(<>
        <div>Ingresa a tu casilla de correo electronico y verifica tu email</div>
        
        </>
        
    
    )
}