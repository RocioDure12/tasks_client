import {Form} from "./Form"
import Field from "../models/Field";
import  Task  from "../models/Task";
import useTaskApi from "../hooks/useTaskApi"
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

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

export const Task2Form=()=>{
    const [task,setTask]=useState<Partial<Task>>({status:false, due_date:undefined})
    const taskApi= useTaskApi()
    const {id}=useParams<{ id: string }>();

    useEffect(()=>{
        if (id !== undefined){
            //consulta a la api
            //si la tarea ya existe rellena el form con los campos existentes (setTask)
        }

        else{
            setTask({status:false, due_date:undefined})
        }

    },[id])

    const handleEditTask=async(data:Task,id:string)=>{
        const result=await taskApi.updateTask(data, id)
    }


    const handleCreateTask=async(data:Task)=>{
        const result=await taskApi.createTask(data)
    }

    const handleSubmit = (data: Task) => {
        if (id !== undefined) {
            handleEditTask(data, id);
        } else {
            handleCreateTask(data); // Crea una nueva tarea si taskId no está definido
        }
    };



    return(
        
        <Form
        fields={taskFormFields}
        initialValues={task}// Pasa los valores actuales de la tarea al formulario
        onFormSubmit={handleSubmit}
        buttonText={id? "Editar" : "Guardar"}

        />
    
 

    )
}