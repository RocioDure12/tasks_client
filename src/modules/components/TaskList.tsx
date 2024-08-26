import useTaskApi from "../hooks/useTaskApi"
import { useState } from "react"
import Task from "../models/Task"

export const TaskList=()=>{
    
const [list, setList] = useState<Task[]>([]);

const taskApi= useTaskApi()

const getTasks=()=>{
    
}





return(<></>)



}

