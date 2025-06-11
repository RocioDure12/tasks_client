import Task from "../models/Task";
import useCrudApi from "../api/useCrudApi";
import { ActionResult } from "../api/useApi";

export default function useTaskApi() {
    const api=useCrudApi<Task>("tasks")


    const getTaskById=async(id:number):Promise<ActionResult<Task>>=>{
        return await api.read_by_id(id);
    }
    const createTask=async (task: Partial<Task>): Promise<ActionResult<Task>> => {
        return api.create(task as Task)
    }

    const readMyTasks= async (): Promise<ActionResult<Task[]>> => {
        return api.getItems()

    }
    
    const updateTask=async (id:number,task:Task): Promise<ActionResult<Task>> => {
        return api.update(id, task)
    }

    const deleteTask=async(id:number):Promise<ActionResult<Task>>=>{
        return api.deleteById(id)
    }

    const count_tasks=async()=>{
        return api.countItems<number>("count_tasks")


    }

    //const countTasks=async():Promise<ActionResult<number>>=>{
        //return api.countItems()

    //}

    return {createTask, getTaskById, readMyTasks, updateTask, deleteTask, count_tasks}
}
    