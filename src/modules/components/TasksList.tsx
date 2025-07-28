import Task from "../models/Task";
import { Checkbox } from "@mantine/core";
import { Pencil, Trash2, Eye} from "lucide-react";

interface TaskListProps{
  list: Task[];
  handleTaskStatus: (taskId: number) => void;
  handleEditTask: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void;
  viewDetailTask: (taskId: number) => void;
  formattedTime: (date: Date | string) => string;

}

export const TasksList: React.FC<TaskListProps> = (props) => {
  return (
        <ul className="p-2 bg-primary-300 shadow-lg rounded-lg">
          {props.list.map((item) => (
      
              <li
                key={item.id}
                className="p-4 bg-primary-100 rounded-lg shadow hover:shadow-md transition m-2 text-primary-500 border-l-4 border-primary-500"
              >
                <div className="flex flex-col space-y-2">
                  <h3 className="font-bold block">{item.task_name}</h3>
                  <span className="block">
                    {props.formattedTime(item.due_date)}
                  </span>
                  <span>{new Date(item.due_date).toLocaleDateString("es-ES")}</span>
            
              <div className="flex space-x-3 ">
                <Checkbox
                checked={item.status}
                onChange={()=>{props.handleTaskStatus(item.id)}}
             
                styles={(theme, params) => ({
                  input: {
                    borderColor: theme.colors.primary[5],
                    backgroundColor: params.checked ? theme.colors.primary[5] : undefined,
                  },
                 })}
                />

                  <Pencil
                    onClick={() => {
                      props.handleEditTask(item.id);
                    }}
                  >
                    Editar
                  </Pencil>
                  <Trash2
                    onClick={() => {
                      props.handleDeleteTask(item.id);
                    }}
                  >
                    Eliminar
                  </Trash2>
                  <Eye
                    onClick={() => {
                      props.viewDetailTask(item.id);
                    }}
                  >
                    Visualizar
                  </Eye>
                </div>
                </div>
              </li>
      
       
          ))}
        </ul>
       

)}
