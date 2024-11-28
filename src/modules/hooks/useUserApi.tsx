import useCrudApi from "../api/useCrudApi";
import User from "../models/User";
import { handleApiRequest } from "../api/useApi";
import { ActionResult } from "../api/useApi";

export interface LoginData {
  username: string;
  password: string;
}

export default function useUserApi(){
  const api=useCrudApi<User>("users")

  const createUser=async (user: Partial<User>): Promise<ActionResult<User>> => {
    return await api.create(user as User);
  
}
  const verifyEmailAccount = async (token: string):Promise<ActionResult<User>>=> {
    return await handleApiRequest("post",`users/verification/${token}`);
      
  }
  const currentUser = async (): Promise<ActionResult<User>> => {
    return handleApiRequest<User>("get","/users/readme")
  };

  const logout=async():Promise<ActionResult<string>>=>{
    return handleApiRequest<string>("post","/users/logout")
  }

  
  return {createUser, verifyEmailAccount,currentUser,logout}
}
