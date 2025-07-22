interface Modal{
    title?:string
    hour?:string 
    description?:string
    onClose:()=>void
    children?: React.ReactNode;
 
}

export default Modal