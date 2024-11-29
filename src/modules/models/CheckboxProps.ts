export interface CheckboxProps{
    name:string
    checked:boolean
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    label?:string
    disabled?:boolean
    className?:string
    options?:{ value: string; label: string }[];

}