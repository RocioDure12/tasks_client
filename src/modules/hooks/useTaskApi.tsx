import Task from "../models/Task";
import useCrudApi from "../api/useCrudApi";
import { ActionResult } from "../api/useApi";
import { handleApiRequest } from "../api/useApi";

export default function useTaskApi() {
    const api = useCrudApi<Task>("tasks")


    const getTaskById = async (id: number): Promise<ActionResult<Task>> => {
        return await api.read_by_id(id);
    }
    const createTask = async (task: Partial<Task>): Promise<ActionResult<Task>> => {
        return api.create(task as Task)
    }

    const readMyTasks = async (): Promise<ActionResult<Task[]>> => {
        return api.getItems()

    }

    const updateTask = async (id: number, task: Task): Promise<ActionResult<Task>> => {
        return api.update(id, task)
    }

    const deleteTask = async (id: number): Promise<ActionResult<Task>> => {
        return api.deleteById(id)
    }

    const count_tasks = async () => {
        return api.countItems<number>("count_tasks")


    }


    const calculate_percentage_tasks_completed = async () => {
        return handleApiRequest<number>("get", "/tasks/percentage")

    }

    const get_dates_for_calendar = async (): Promise<ActionResult<string[]>> => {
        return handleApiRequest<string[]>("get", "/tasks/dates_for_calendar");
    }

    const get_upcoming_tasks = async (): Promise<ActionResult<Task[]>> => {
        return handleApiRequest<Task[]>("get", "/tasks/upcoming_tasks");
    }

    const get_tasks_paginated = async (limit: number, offset: number, date: string): Promise<ActionResult<[Task[], number]>> => {
        const url = `/tasks/pagination?limit=${limit}&offset=${offset}` + (date ? `&date=${date}` : "");
        return handleApiRequest<[Task[], number]>("get", url);
    }




    return {
        createTask, getTaskById, readMyTasks, updateTask, deleteTask, count_tasks, calculate_percentage_tasks_completed, get_dates_for_calendar,
        get_upcoming_tasks, get_tasks_paginated
    }
}

