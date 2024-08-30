import axios, { AxiosError } from "axios";
import { ActionResult } from "./useAuthApi";
import Task from "../models/Task";


const api= axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, //Esto permite que las cookies se envíen con cada solicitud
});



export default function useTaskApi() {
    const getTaskById=async(id:string):Promise<ActionResult<Task>>=>{
        try{
            const response=await api.get<Task>(`tasks/tasks/${id}`);
            return {data:response.data}
        }catch(error){
            if (axios.isAxiosError(error)){
                return { error, errorMessage: error.message };  
            } else{
                return { error: error as Error, errorMessage: "Error al obtener la tarea" };

            }
        }

    }
    const createTask = async (task: Partial<Task>): Promise<ActionResult<Task>> => {
        try {
            const response = await api.post<Task>("tasks/create", task);
            return { data: response.data };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error, errorMessage: error.message };
            } else {
                return { error: error as Error, errorMessage: "Error al crear la tarea" };
            }
        }
    };

    const readTasks = async (): Promise<ActionResult<Task[]>> => {
        try {
            const response = await api.get<Task[]>(`tasks/my_tasks`);
            return { data: response.data };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error, errorMessage: error.message };
            } else {
                return { error: error as Error, errorMessage: "Error al obtener las tareas" };
            }
        }
    };

    const updateTask = async (task: Task, id: string): Promise<ActionResult<Task>> => {
        try {
            const response = await api.put<Task>(`tasks/${id}`, task);
            return { data: response.data };
        } catch (error) {
            if (axios.isAxiosError(error)) {
                return { error, errorMessage: error.message };
            } else {
                return { error: error as Error, errorMessage: "Error al actualizar la tarea" };
            }
        }
    };

    const deleteTask=async(id:number):Promise<ActionResult<Task>>=>{
        try{
            const response=await api.delete<Task>(`tasks/${id}`)
            return{data: response.data};
        }catch(error){
            if(axios.isAxiosError(error)){
                return{error, errorMessage:error.message}
            }else{
                return { error: error as Error, errorMessage: "Error al eliminar la tarea" }
            }
        }
    }

    return { createTask, readTasks, updateTask, getTaskById, deleteTask};
}