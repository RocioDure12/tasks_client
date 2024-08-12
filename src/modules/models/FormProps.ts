import Field from "./Field";

export interface FormProps<T>{
    fields:Field[]
    initialData:Partial<T>
    onSubmit:(data:T)=>void
}