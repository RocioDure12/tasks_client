import {Form} from "./Form"
import Field from "../models/Field";
import  Task  from "../models/Task";
import useTaskApi from "../hooks/useTaskApi"
import { useEffect, useState } from "react";



//const initialValues:Partial<Task>=({})

const taskFormFields:Field[]=[
    {
        type: "text",
        name: "task_name",
        label: "Tarea",
        required:true
    },
    {
        type: "text",
        name: "description",
        label: "Descripcion",
    },
    {
        type:"datetime-local",
        name:"due_date",
        label:"Fecha de vencimiento"

    },
    {
        type:"checkbox",
        name:"status",
        label:""



    }
]

//const handleEditTask=(data:Task)=>{
//    const result=taskApi.editTask(data)
//
//}

export const Task2Form=({taskId}:{taskId?:number})=>{
    const [task,setTask]=useState<Partial<Task>>({status:false, due_date:undefined})
    const taskApi= useTaskApi()

    useEffect(()=>{
        if (taskId !== undefined){
            //consulta a la api
            //si la tarea ya existe rellena el form con los campos existentes (setTask)
        }

        else{
            setTask({status:false, due_date:undefined})
        }

    },[taskId])

    const handleEditTask=(data:Task)=>{
        console.log("caca")
    }

    const handleCreateTask=async(data:Task)=>{
        const result=await taskApi.createTask(data)
        console.log(result)
    
    }

    const handleSubmit = (data: Task) => {
        if (taskId !== undefined) {
            handleEditTask(data); // Edita la tarea si taskId está definido
        } else {
            handleCreateTask(data); // Crea una nueva tarea si taskId no está definido
        }
    };



    return(
        
        <Form
        fields={taskFormFields}
        initialValues={task}// Pasa los valores actuales de la tarea al formulario
        onFormSubmit={handleSubmit}
        buttonText={taskId !== undefined? "Editar" : "Guardar"}

        />
    
 

    )
}