import Field from "../models/Field";
import Task from "../models/Task";
import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { OtroForm } from "../components/otroForm";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";


const taskFormFields: Field[] = [
  {
    type: "text",
    name: "task_name",
    label: "Titulo",
    required: true,
  },
  {
    type: "date",
    name: "due_date",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    label: "Fecha de vencimiento",
    required:true,
  },
  {
    type:"select",
    name:"category_id", // Usamos directamente el campo de la base de datos
    label:"Categorias",
    required:true,
    options: []
  },
  {
    type:"text",
    name:"category",
    label:"Category"
  },
  {
    type: "textarea",
    name: "description",
    label: "Descripcion o nota (opcional)",
    required:false,
    rows:4,
    cols:4
  }

];

export const Task2Form = () => {
  const [task, setTask] = useState<Partial<Task>>({});
  const [categoriesList, setCategoriesList]=useState<{ value: string; label: string }[]>([]); 
  const [newCategory, setNewCategory] = useState<Partial<Category>>({});


  const taskApi = useTaskApi();
  const { id } = useParams<{ id: string }>();
  const categoriesApi=useCategoriesApi()

  const parseId = (id: string): number => {
    const numericId = parseInt(id);
    return numericId
  };
  

  useEffect(() => {
    if (id !== undefined) {
      getTaskById(id);
    } else {
      setTask({});
    }
    readCategories()
  }, [id]);

  const readCategories = async () => {
    const result = await categoriesApi.readMyCategories();
    console.log(result.data)
    if (result.data) {
      setCategoriesList(
        result.data.map((category:Category)=>({
          value:category.id.toString(),
          label:category.category_name,
        }))
      );
    } else {
      console.log("Error al obtener las categorias");
    }
  };

  const dynamicTaskFormFields = taskFormFields.map((field) =>
    field.name === "category_id" ? { ...field, options: categoriesList} : field
  ) 

  const handleEditTask = async (data: Task, id: string) => {
    const numericId=parseId(id)
    const result = await taskApi.updateTask(numericId, data);
  };

  const handleCreateTask = async (data: Task) => {
   
    const result = await taskApi.createTask(data as Task);
    
  };

  const getTaskById = async (id: string) => {
    const numericId=parseId(id)
    const result = await taskApi.getTaskById(numericId);
    if (result.data) {
      setTask(result.data);
    } else {
      console.log("Error al obtener tarea");
    }
  };

  const handleSubmit = async(data: Task) => {
    if (id !== undefined) {
      await handleEditTask(data, id);
   
    } else {
      await handleCreateTask(data as Task) // Crea una nueva tarea si taskId no está definido
    }
  };

  return (
    <MainLayout >

      <OtroForm
        fields={dynamicTaskFormFields}
        initialValues={task} // Pasa los valores actuales de la tarea al formulario
        onFormSubmit={handleSubmit}
        buttonText={id ? "Editar" : "Guardar"}
        
      />
      
      

    </MainLayout>
    );
};
