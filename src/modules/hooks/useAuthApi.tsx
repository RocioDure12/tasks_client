import axios, { AxiosError } from "axios";
import User from "../models/User";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000",
});

//Estructura de la respuesta esperada despues de un inicio exitoso
export interface LoginResponse {
  //expiracionRefreshToken:Date
  user: User;
  accessToken:string
  refreshToken:string
}

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

//estructua de datos para el inicio de sesion
export interface LoginData {
  username: string;
  password: string;
}

export default function useAuthApi() {
  const login = async (
    data: LoginData
  ): Promise<ActionResult<LoginResponse>> => {
    try {
        const form=new FormData();
        form.append('username', data.username)
        form.append('password', data.password)
        
      const response = await api.post<LoginResponse>("users/login",form, {headers: { "Content-Type": "multipart/form-data" }});

      Cookies.set('accessToken',response.data.accessToken, {path:'',secure:true, sameSite:'strict'} )
      Cookies.set('refreshToken',response.data.refreshToken, {path:'',secure:true, sameSite:'strict'} )
      console.log("caca",Cookies.get('accessToken'))
      
      
      return { data: response.data};
    } catch (error) {
      //console.error(error);
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        return { error, errorMessage: "Credenciales inválidas." };
      }
      return { error: error as Error, errorMessage: "Error desconocido." };
    }
  };

  return { login };
}
