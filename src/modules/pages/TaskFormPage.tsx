import Field from "../models/Field";
import Task from "../models/Task";
import useTaskApi from "../hooks/useTaskApi";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import dayjs from "dayjs";
import FormLayout from "../components/FormLayout";
import { ArrowLeft } from "lucide-react";
import { Form } from "../components/Form";
import Category from "../models/Category";
import useCategoriesApi from "../hooks/useCategoriesApi";
import Loading from "../components/Loading";

const taskFormFields: Field[] = [
  { type: "text", name: "task_name", label: "Titulo", required: true },
  {
    type: "datetime-local",
    name: "due_date",
    label: "Fecha de vencimiento",
    required: true,
  },
  {
    type: "select",
    name: "category_id",
    label: "Categorias",
    required: true,
    options: [],
  },
  {
    type: "textarea",
    name: "description",
    label: "Descripcion o nota (opcional)",
    rows: 4,
    cols: 4,
  },
];

export const TaskFormPage = () => {
  const [task, setTask] = useState<Partial<Task>>({});
  const [categoriesList, setCategoriesList] = useState<
    { value: string; label: string }[]
  >([]);
  const [loading, setLoading] = useState(false);

  const taskApi = useTaskApi();
  const categoriesApi = useCategoriesApi();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const parseId = (id: string) => parseInt(id);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      if (id) {
        await getTaskById(id);
      } else {
        setTask({});
      }
      await readCategories();
      setLoading(false);
    };
    fetchData();
  }, [id]);

  const readCategories = async () => {
    const result = await categoriesApi.readMyCategories();
    if (result.data) {
      setCategoriesList(
        result.data.map((cat: Category) => ({
          value: cat.id.toString(),
          label: cat.category_name,
        }))
      );
    } else {
      console.log("Error al obtener las categorias");
    }
  };

  const dynamicTaskFormFields = taskFormFields.map((field) =>
    field.name === "category_id" ? { ...field, options: categoriesList } : field
  );

  const getTaskById = async (id: string) => {
    const numericId = parseId(id);
    const result = await taskApi.getTaskById(numericId);
    if (result.data) {
      setTask(result.data);
    } else {
      console.log("Error al obtener tarea");
    }
  };

  const handleEditTask = async (data: Task, id: string) => {
    const numericId = parseId(id);
    const result = await taskApi.updateTask(numericId, data);
    if (result.data) {
      toast.success("Tarea editada exitosamente ✅");
      const date = dayjs(data.due_date).format("YYYY-MM-DD");
      navigate(`/list/${date}`);
    } else {
      toast.error("Hubo un error al editar la tarea ❌");
    }
  };

  const handleCreateTask = async (data: Task) => {
    const result = await taskApi.createTask(data);
    if (result.data) {
      toast.success("Tarea creada exitosamente ✅");
      const date = dayjs(data.due_date).format("YYYY-MM-DD");
      navigate(`/list/${date}`);
    } else {
      toast.error("Hubo un error al crear la tarea ❌");
    }
  };

  const handleSubmit = async (data: Task) => {
    if (id) {
      await handleEditTask(data, id);
    } else {
      await handleCreateTask(data);
    }
    setTask({});
  };

  if (loading) return <Loading />;

  return (
    <FormLayout>
      <button
        onClick={() => navigate(-1)}
        className="border-0 focus:outline-none absolute top-4 left-4 p-2 bg-primary-500 text-primary-contrast-500"
      >
        <ArrowLeft size={24} />
      </button>

      <Form
        title={id ? "Formulario de edición" : "Nueva tarea"}
        fields={dynamicTaskFormFields}
        initialValues={task}
        onFormSubmit={handleSubmit}
        buttonText={id ? "Editar" : "Guardar"}
      />
    </FormLayout>
  );
};
