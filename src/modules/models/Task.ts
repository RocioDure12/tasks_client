import Subtask from "./Subtask";

interface Task{
    id: number;
    task_name: string;
    description: string;
    status:boolean;
    due_date:Date;
    start_time?:Date;
    end_time?:Date;
    deleted_at?:Date;
    created_at:Date;
    updated_at?:Date;
    user_id?:number;
    category_id:number;
    subtask?:Subtask[]
    
}

export default Task;