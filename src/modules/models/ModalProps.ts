interface Modal{
    title?:string
    hour?:string 
    description?:string
    onClose: () => void; //funcion para cerrar el modal
}

export default Modal