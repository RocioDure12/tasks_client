import Task from "../models/Task";
import { Checkbox } from "@mantine/core";
import { Pencil, Trash2, Eye } from "lucide-react";

interface TaskListProps {
  title?: string
  list: Task[];
  handleTaskStatus: (taskId: number) => void;
  handleEditTask: (taskId: number) => void;
  handleDeleteTask: (taskId: number) => void;
  viewDetailTask: (taskId: number) => void;
  formattedTime: (date: Date | string) => string;

}

export const TasksList: React.FC<TaskListProps> = (props) => {
  return (
    <>


      <ul className="bg-primary-300 shadow-lg rounded-lg flex flex-col gap-3 p-4">
        {props.title && (
          <div className="flex justify-center p-2">
            <h2 className="text-xl font-semibold text-primary-900 ">{props.title}</h2>
          </div>
        )}
        {props.list.map((item) => (
          <li
            key={item.id}
            className="p-4 bg-primary-100 rounded-lg shadow hover:shadow-md transition text-primary-500 border-l-4 border-primary-500"
          >
            <div>
              <h3 className="text-lg block">{item.task_name}</h3>
              <span className="font-semibold">
                {new Date(item.due_date).toLocaleDateString("es-ES")}
              </span>
              <span className="block">
                {props.formattedTime(item.due_date)}
              </span>
              

              <div className="grid grid-cols-4 gap-2 mt-3 items-center">
                <Checkbox
                  checked={item.status}
                  onChange={() => {
                    props.handleTaskStatus(item.id);
                  }}
                  styles={(theme, params) => ({
                    input: {
                      borderColor: theme.colors.primary[5],
                      backgroundColor: params.checked ? theme.colors.primary[5] : undefined,
                    },
                  })}
                />

                <Pencil
                  className="cursor-pointer"
                  onClick={() => {
                    props.handleEditTask(item.id);
                  }}
                />
                <Trash2
                  className="cursor-pointer"
                  onClick={() => {
                    props.handleDeleteTask(item.id);
                  }}
                />
                <Eye
                  className="cursor-pointer"
                  onClick={() => {
                    props.viewDetailTask(item.id);
                  }}
                />
              </div>
            </div>
          </li>
        ))}
   
      </ul>

    </>
  );
};