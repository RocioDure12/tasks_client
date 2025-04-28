interface TaskOut {
    id: number;
    task_name: string;
    description?: string;
    due_date: Date;
    status: boolean;
}

export default TaskOut;