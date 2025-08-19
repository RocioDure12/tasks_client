import { useEffect } from "react"
import useUserApi from "../hooks/useUserApi"
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function VerifyEmailAccount() {

    const userApi = useUserApi()
    const navigate = useNavigate();
    const { token } = useParams<{ token: string }>();

    const handle_email_verification = async (token: string) => {
        const result = await userApi.verifyEmailAccount(token)
        if (result.data) {
            navigate("/users/login")
        } else {
            console.log("error en verificacion del email")
        }
    }

      useEffect(() => {
        if (token) {
            handle_email_verification(token)
            navigate("/users/login")
        }
        else {
            console.log("No se encontro el token")
        }
    }, [token]);


    return (
        <div className={"bg-primary-300 pt-[80px] min-h-screen "}>


            <main className="w-[90%] m-auto max-w-screen-sm space-y-6 text-center text-neutral-600 italic">
                Revisa tu casilla de correo electrónico y haz clic en el enlace de verificación<br />
                para activar tu cuenta. <br />
                <span className="not-italic font-medium text-neutral-700">¡Ya casi estás dentro!</span>
            </main>

        </div>




    )
}