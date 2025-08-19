import { useState } from "react"
import { Input } from "../components/Input";
import { Button } from "../components/Button"
import AuthFormLayout from "../components/FormLayout";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from 'react-hot-toast';

export interface UserLogin{
    username:string
    password:string
}

const LoginForm:React.FC=()=>{
    const [userLogin, setUserLogin] =useState<Partial<UserLogin>>({});
    const [params] = useSearchParams();
    const [loading, setLoading] = useState(false);
    const loginUrl = import.meta.env.VITE_API_URL + '/users/login'
    const registerUrl =  '/signup'

    useEffect(() => {
    const toastType = params.get("toast");
    if (toastType) {
      switch (toastType) {
        case "email_not_verified":
          toast.error("Tu email no está verificado. Revisa tu correo.");
          break;
        case "disabled_account":
          toast.error("Tu cuenta está deshabilitada. Contacta soporte.");
          break;
        case "invalid_credentials":
          toast.error("Usuario o contraseña incorrectos.");
          break;
        default:
          break;
      }
          // Limpio el query param para que no se muestre de nuevo al refrescar
    params.delete("toast");
    // Para actualizar la URL sin recargar la página:
    window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, [params]);







    const handleChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value
        })

    }

  
    return(


        <AuthFormLayout>
            <form className="rounded-lg  p-5 flex flex-col gap-2 shadow-lg bg-primary-50 " action={loginUrl} method="POST" encType="multipart/form-data" onSubmit={() => setLoading(true)}>
                <h2 className="text-xl font-semibold text-center mb-4">Iniciar sesión  para continuar</h2>
                
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

                <Button disabled={loading} className="bg-primary-500 text-neutralScale-50" type="submit"> {loading ? "Cargando..." : "Ingresar"}</Button>

                <p className="text-sm p-1 mt-1 mb-1 text-center ">¿No tienes una cuenta? Registrate <a href={registerUrl}>aquí</a> </p>

            </form>
        </AuthFormLayout>
    )

}

export default LoginForm;