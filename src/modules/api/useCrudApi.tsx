import { ActionResult, handleApiRequest } from "./useApi";
//Hook genérico para manejar operaciones CRUD de cualquier entidad

export default function useCrudApi<T>(baseUrl:string){
    const create=async(data:T)=>{
        return handleApiRequest<T>("post",`/${baseUrl}/create`,data)

    }
    // Leer entidad por ID
    /*const read = async (id: number) => {
        return handleApiRequest<T>("get", `/${baseUrl}/${id}`);
    };*/

    const read_by_id=async(id:number)=>{
        return handleApiRequest<T>("get",`${baseUrl}/${id}`)
    }

    const getItems=async(extraURL:string=""):Promise<ActionResult<T[]>>=>{
        return handleApiRequest<T[]>("get",`${baseUrl}${extraURL}`)
    }

    const getItemsPaginated=async(offset:number, limit:number)=>{
        return handleApiRequest<T>("get",`${baseUrl}/?offset=${offset}&limit=/${limit}`)
    }

    // Actualizar entidad por ID
    const update = async (id: number, data: T) => {
        return handleApiRequest<T>("put",`/${baseUrl}/${id}`, data);
    };

    // Eliminar entidad por ID
    const deleteById= async (id: number) => {
        return handleApiRequest<T>("delete",`/${baseUrl}/${id}`);
    };

   /* const getCountItems = async () => {
        return handleApiRequest<T>("get",`/${baseUrl}/count`);
    };*/
    
    const countItems=async(extraURL:string=""):Promise<ActionResult<T>>=>{
        return handleApiRequest<T>("get",`/${baseUrl}/${extraURL}`);
    }

    return { create, read_by_id,update, deleteById, getItemsPaginated,getItems, countItems};
    }


