import { useEffect } from "react"
import useUserApi from "../hooks/useUserApi"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function VerifyEmailAccount() {

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