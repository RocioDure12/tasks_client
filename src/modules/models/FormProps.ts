import Field from "./Field";

export interface FormProps<T>{
    fields:Field[]
    initialValues:Partial<T>
    onFormSubmit:(data:T)=>void
}