import useCrudApi from "../api/useCrudApi";
import User from "../models/User";
import { handleApiRequest } from "../api/useApi";
import { ActionResult } from "../api/useApi";

export default function useUserApi(){
  const api=useCrudApi<User>("users")

  const createUser=async (user: Partial<User>): Promise<ActionResult<User>> => {
    return await api.create(user as User);
  
}
  const verifyEmailAccount = async (token: string):Promise<ActionResult<User>>=> {
    return await handleApiRequest("post",`users/verification/${token}`);
      
  }
  return {createUser, verifyEmailAccount}
}
/*
const api= axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, //Esto permite que las cookies se envíen con cada solicitud
});

export default function useUserApi(){
    const createUser= async (user:Partial<User>):Promise<ActionResult<User>>=>{
        try{
            const response= await api.post("/users/create", user);
            return {data:response.data}
        }
        catch(error){
        if (axios.isAxiosError(error)){
            return{error, errorMessage:error.message}
        }else{
            return { error: error as Error, errorMessage: "Error al crear el usuario" };

        }
        }
      

    }


      };

 

    return{createUser, verifyEmailAccount}

}*/