import React, { useState } from "react";
import User from "../models/User";
import useUserApi from "../hooks/useUserApi";
import { Form } from "../components/Form";
import Field from "../models/Field";
import AuthFormLayout from "../components/FormLayout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Loading from "../components/Loading";

const userSignUpFields:Field[]=[
{
    type: "text",
    name: "name",
    label: "Nombre",
    required: true,

},
{
    type:"text",
    name:"surname",
    label:"Apellido",
    required:true,
},
{
    type: "email",
    name:"email",
    required:true,
    label:"Email",

},
{
    type:"text",
    name:"username",
    label:"Username",
    required:true,
},

{
    type:"password",
    name:"password",
    label:"Contraseña",
    required:true,
}
           
]

export const SignUpForm:React.FC=()=>{
    const [user,setUser]=useState<Partial<User>>({disabled:false, is_verified:false})
    const userApi=useUserApi()
    const navigate = useNavigate();
      const [loading, setLoading] = useState(false); // <-- estado loading

    const handleSubmit = async (data: User) => {
        setLoading(true)
        try {
            const result = await userApi.createUser(data);


            if (result.errorMessage) {       
            toast.error("Username o email ya existen");
            
            // Detectamos si el error es un AxiosError con código HTTP
            const axiosError = result.error;
            if (
                axiosError &&
                typeof axiosError === "object" &&
                "response" in axiosError &&
                axiosError.response &&
                typeof axiosError.response === "object"
            ) {
                const status = axiosError.response.status;
                if (status === 409) {
                // Usuario no verificado, redirigimos para que confirme email
                navigate("/verifyemail");
                }
            }
            setLoading(false)
            return; 
            }

            // Si llegamos acá es porque el usuario fue creado correctamente
            toast.success("Usuario creado exitosamente");
            navigate("/verifyemail");

        } catch (error: any) {
            toast.error("Error de conexión con el servidor");
            console.error(error);
        }
        };


    if (loading) return <Loading />; 
    return(
    <AuthFormLayout>
        <button  onClick={() => navigate(-1)}
        className="border-0 focus:outline-none absolute top-4 left-4 p-2 bg-primary-500
          text-primary-contrast-500"><ArrowLeft size={24} /></button>


      
        <Form
          title="Crea tu cuenta"
          fields={userSignUpFields}
          initialValues={user}
          onFormSubmit={handleSubmit}
          buttonText="Crear cuenta"
        ></Form>

    </AuthFormLayout>
)}
