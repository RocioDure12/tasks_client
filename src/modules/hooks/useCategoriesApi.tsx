import Category from "../models/Category";
import useCrudApi from "../api/useCrudApi";
import { ActionResult } from "../api/useApi";

export default function useCategoryApi() {
    const api=useCrudApi<Category>("categories")

    /*const getTaskById=async(id:number):Promise<ActionResult<Task>>=>{
        return await api.read_by_id(id)
    }*/

    const createCategory=async (category: Partial<Category>): Promise<ActionResult<Category>> => {
        return api.create(category as Category)
    }

    const readMyCategories= async (): Promise<ActionResult<Category[]>> => {
        return api.getItems("/my_categories")

    }
    
    const updateCategory=async (id:number,category:Category): Promise<ActionResult<Category>> => {
        return api.update(id, category)
    }

    const deleteCategory=async(id:number):Promise<ActionResult<Category>>=>{
        return api.deleteById(id)
    }

    return {createCategory, readMyCategories, updateCategory, deleteCategory}
}
    