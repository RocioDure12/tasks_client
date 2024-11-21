import { handleApiRequest } from "./useApi";
//Hook genérico para manejar operaciones CRUD de cualquier entidad

export default function useCrudApi<T>(entity:string){
    const create=async(data:T)=>{
        return handleApiRequest<T>("post",`/${entity}/create`,data)

    }
    // Leer entidad por ID
    const read = async (id: number) => {
        return handleApiRequest<T>("get", `/${entity}/${id}`);
    };

    // Actualizar entidad por ID
    const update = async (id: number, data: T) => {
        return handleApiRequest<T>("put", `/${entity}/${id}`, data);
    };

    // Eliminar entidad por ID
    const deleteEntity = async (id: number) => {
        return handleApiRequest<T>("delete", `/${entity}/${id}`);
    };

    return { create, read, update, deleteEntity };
    }


