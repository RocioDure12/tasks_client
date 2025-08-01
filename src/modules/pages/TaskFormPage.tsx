import Field from "../models/Field";
import Task from "../models/Task";
import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import MainLayout from "../components/MainLayout";
import { Form } from "../components/Form";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import { toast } from "react-hot-toast"; 
import dayjs from "dayjs";
import FormLayout from "../components/FormLayout";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";


// Definición de los campos del formulario para crear/editar tareas
const taskFormFields: Field[] = [
  {
    type: "text",
    name: "task_name",
    label: "Titulo",
    required: true,
  },
  {
    type: "datetime-local",
    name: "due_date",                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    label: "Fecha de vencimiento",
    required:true,
  },
  {
    type:"select",
    name:"category_id", // Relaciona la tarea con una categoría por su ID
    label:"Categorias",
    required:true,
    options: [] // Las opciones se llenarán dinámicamente
  },
  {
    type: "textarea",
    name: "description",
    label: "Descripcion o nota (opcional)",
    rows:4,
    cols:4,


  }

];

// Componente principal para crear/editar tareas
export const TaskFormPage = () => {
  const [task, setTask] = useState<Partial<Task>>({}); //Estado local para la tarea
  const [categoriesList, setCategoriesList]=useState<{ value: string; label: string }[]>([]);  //Lista de categorias disponibles para el select
  const [newCategory, setNewCategory] = useState<Partial<Category>>({}); //Estado para manejar una nueva categoria


  const taskApi = useTaskApi(); 
  const { id } = useParams<{ id: string }>(); // Obtiene el ID de la tarea desde la URL
  const categoriesApi=useCategoriesApi()

    const navigate = useNavigate();


  //Convierte el ID de string a número
  const parseId = (id: string): number => {
    const numericId = parseInt(id);
    return numericId
  };
  
  // Efecto para cargar datos iniciales (tarea y categorías) cuando cambia el ID
  useEffect(() => {
    if (id !== undefined) {
      getTaskById(id); // Carga la tarea si el ID existe
    } else {
      setTask({}); // Limpia el estado si no hay ID
    }
    readCategories() // Carga la lista de categorías
  }, [id]);

  // Obtiene todas las categorías disponibles desde la API
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

  // Modifica dinámicamente los campos del formulario para incluir las categorías
  const dynamicTaskFormFields = taskFormFields.map((field) =>
    field.name === "category_id" ? { ...field, options: categoriesList} : field
  ) 

  /*
  useMemo(()=>
  taskFormFields.map((field) =>
    field.name === "category_id" ? { ...field, options: categoriesList} : field
  ), [categoriesList, taskFormFields]) 
  */

  const handleEditTask = async (data: Task, id: string) => {
    const numericId=parseId(id)
    const result = await taskApi.updateTask(numericId, data);
    if(result.data){
      toast.success("Tarea editada exitosamente ✅");
      const date= dayjs(data.due_date).format("YYYY-MM-DD");
      navigate(`/list/${date}`)


    }else{
      toast.error("Hubo un error al editar la tarea ❌");

    }
    
  };

  const handleCreateTask = async (data: Task) => {
  
    const result = await taskApi.createTask(data as Task);
    if(result.data){
      toast.success("Tarea creada exitosamente ✅");
      const date= dayjs(data.due_date).format("YYYY-MM-DD");
      navigate(`/list/${date}`)


    }else{
      toast.error("Hubo un error al crear la tarea ❌");

    }

    
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

    setTask({})

  };
 

  return (
    <FormLayout >
      <button  onClick={() => navigate(-1)}
        className="border-0 focus:outline-none absolute top-4 left-4 p-2 bg-primary-500
          text-primary-contrast-500"><ArrowLeft size={24} /></button>

      <Form
        title={id ? "Formulario de edición" : "Nueva tarea"}
        
        fields={dynamicTaskFormFields}
        initialValues={task} //Pasa los valores actuales de la tarea al formulario
        onFormSubmit={handleSubmit}
        buttonText={id ? "Editar" : "Guardar"}
        
      />
      
      

    </FormLayout>
    );
};
