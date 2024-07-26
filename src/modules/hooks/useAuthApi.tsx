import axios, { AxiosError } from "axios";
import User from "../models/User";


const api= axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, //Esto permite que las cookies se envíen con cada solicitud
});


//Éxito data contiene los datos esperados de tipo T.
//error y errorMessage son opcionales y, generalmente, estarán ausentes en este caso.
//Error:
//data es opcional y, generalmente, estará ausente en este caso.
//error: contiene el error que ocurrió, de tipo Error o AxiosError.
//errorMessage: un mensaje de error que describe el problema.

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

//estructura de datos para el inicio de sesion
export interface LoginData {
  username: string;
  password: string;
}

export default function useAuthApi() {
  const currentUser = async (): Promise<ActionResult<User>> => {
    try {
      const response = await api.get<User>("/users/readme");
      return { data: response.data };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Manejo de errores de Axios
        return { error, errorMessage: error.message };
      } else {
        // Otros tipos de errores
        return { error: error as Error, errorMessage: "Error al obtener el usuario actual" };
      }
    }
  };
  
  const getCookiesValues = async (): Promise<ActionResult<string>> => {
    try {
      const response = await api.get<{ message: string }>("/get-cookies");
      return { data: response.data.message };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Manejo de errores de Axios
        return { error, errorMessage: error.message };
      } else {
        // Otros tipos de errores
        return { error: error as Error, errorMessage: "Error al obtener las cookies" };
      }
    }
  };

  const logout=async():Promise<ActionResult<string>>=>{
    try{
      const response= await api.post<{message: string}>("/users/logout")
      return{data: response.data.message}
  

    }catch(error){
      if (axios.isAxiosError(error)) {
        return { error, errorMessage: error.message };
      } else {
        return { error: error as Error, errorMessage: "Error al eliminar las cookies" };

    }
  }
  };
  return { currentUser, getCookiesValues, logout };


}


