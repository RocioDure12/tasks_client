import User from "../models/User";
import { ActionResult, handleApiRequest } from "./useApi";


//estructura de datos para el inicio de sesion
export interface LoginData {
  username: string;
  password: string;
}

export default function useAuthApi() {
  const currentUser = async (): Promise<ActionResult<User>> => {
    return handleApiRequest<User>("get","/users/readme")
  };
  
  return{currentUser};

  const getCookiesValues = async (): Promise<ActionResult<string>> => {
    return handleApiRequest<string>("get","/get-cookies")
  };
  
  return {getCookiesValues}

  };


