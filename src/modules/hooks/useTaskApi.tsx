import axios, { AxiosError } from "axios";
import { ActionResult } from "./useAuthApi";
import Task from "../models/Task";


const api= axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, //Esto permite que las cookies se envíen con cada solicitud
});



export default function useTaskApi(){
    const createTask= async (task:Partial<Task>):Promise<ActionResult<Task>>=>{
        try{
            const response= await api.post<Task>("tasks/create", task);
            return {data:response.data}
        }
        catch(error){
        if (axios.isAxiosError(error)){
            return{error, errorMessage:error.message}
        }else{
            return { error: error as Error, errorMessage: "Error al crear la tarea" };

        }
        }
      

    }

    return{createTask}

}