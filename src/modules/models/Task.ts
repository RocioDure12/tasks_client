interface Task{
    id: number;
    task_name: string;
    description: string;
    status:boolean;
    deleted_at?:Date;
    created_at:Date;
    updated_at?:Date;
    user_id?:number
    
}

export default Task;