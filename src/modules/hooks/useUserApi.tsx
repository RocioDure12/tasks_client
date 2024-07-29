import axios, { AxiosError } from "axios";
import User from "../models/User";
import { ActionResult } from "./useAuthApi";


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

    const verifyEmailAccount = async (token: string):Promise<ActionResult<User>>=> {
        try {
          const response = await api.post(`users/verification/${token}`);
          console.log(response);
          return { data: response.data };
        } catch (error) {
          if (axios.isAxiosError(error)) {
            return { error, errorMessage: error.message };
          } else {
            return { error: error as Error, errorMessage: "Error" };
          }
        }
      };

 

    return{createUser, verifyEmailAccount}

}