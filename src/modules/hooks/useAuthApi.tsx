import User from "../models/User";
import { ActionResult, handleApiRequest } from "../api/useApi"


//estructura de datos para el inicio de sesion
export interface LoginData {
  username: string;
  password: string;
}

export default function useAuthApi() {
  const currentUser = async (): Promise<ActionResult<User>> => {
    return handleApiRequest<User>("get","/users/readme")
  };

  const logout=async():Promise<ActionResult<string>>=>{
    return handleApiRequest<string>("post","/users/logout")
  }

  return{currentUser, logout}
  


  };


