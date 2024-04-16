//Lista de tareas:
//Desarrolla un componente que permita al usuario agregar y eliminar
//tareas de una lista. Debe tener un campo de entrada donde se pueda
//escribir el nombre de la tarea y un botón para agregarla a la lista. 
//Además, cada tarea en la lista debe tener un botón para eliminarla.

import { useState } from "react"


export default function ToDoList(){
    const [inputValue, setInputValue]=useState(" ")
    const[tasks, setTasks]=useState([])

    function addTask(){


    }

    function deleteTask(){

    }

    return(
        <div className="card">
            <h3>Lista de tareas</h3>
            <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Agrega una nueva tarea"
            />
            <button onClick={addTask}>Agregar tarea</button>
            <ul>
            </ul>
            
       
        </div>
    )
}