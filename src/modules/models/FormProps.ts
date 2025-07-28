import Field from "./Field";

export interface FormProps<T>{
    title?: string;
    fields:Field[]
    initialValues:Partial<T>
    onFormSubmit:(data:T)=>void
    buttonText:string
    buttons?:{ label: string; onClick: (e: React.FormEvent<HTMLFormElement>, values: Partial<T>) => void }[];

}