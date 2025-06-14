//Este archivo define una función genérica para manejar las solicitudes HTTP a una API utilizando AXIOS
//La intencion es centralizar el manejo de errores y el envio de solicitudes en una unica funcion reutilizable
import axios, { AxiosError, isAxiosError } from "axios";

//Instancia personalizada de axios
const api= axios.create({
    baseURL: "http://localhost:8000",
    withCredentials: true, //Esto permite que las cookies se envíen con cada solicitud
  });

//Tipo generico de resultado
export type ActionResult<T> =
  | {
      data: T;
      error?: Error | AxiosError;
      errorMessage?: string;
    }
  | {
      data?: T;
      error?: Error | AxiosError;
      errorMessage: string;
    };
//Éxito data contiene los datos esperados de tipo T.
//error y errorMessage son opcionales y, generalmente, estarán ausentes en este caso.
//Error:
//data es opcional y, generalmente, estará ausente en este caso.
//error: contiene el error que ocurrió, de tipo Error o AxiosError.
//errorMessage: un mensaje de error que describe el problema.

export async function handleApiRequest<T>(
    method:"get"|"post"|"put"|"delete", // El método HTTP a usar
    url:string,// El endpoint al que se quiere hacer la solicitud
    data?:T// Datos opcionales para solicitudes POST o PUT

):Promise<ActionResult<T>>{
    try{
        const response=await api({
            method,
            url,
            data,
        })
        return {data:response.data}
    }catch(error){
        if (isAxiosError(error)){
            return { error, errorMessage: error.response?.data?.message || error.message };
        } else{
          return { error: error as Error, errorMessage: "Ocurrió un error inesperado" };

        }
    }
    
}




