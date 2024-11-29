export interface InputProps{
    type:string
    value?:string | number 
    name:string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    disabled?: boolean;
    required?: boolean;
    label?: string;
    id?: string;
    className?: string;
    checked?:Boolean;
    options?: { label: string; value: string | number }[]; // Opciones para select o radio

}