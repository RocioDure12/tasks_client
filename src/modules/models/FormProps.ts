import Field from "./Field";

export interface FormProps<T>{
    fields:Field[]
    initialValues:Partial<T>
    onSubmit:(data:T)=>void
}