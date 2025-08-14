import { X } from "lucide-react";
import ModalProps from "../models/ModalProps"

//MODIFICAR MODAL PARA QUE MUESTRE INFORMACION DE LA TAREA

export const Modal: React.FC<ModalProps> = (props:ModalProps) => {
  return (
    <div onClick={props.onClose} className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 ">
      <div onClick={(e) => e.stopPropagation()}
        className="relative p-4 w-[90%] m-auto max-w-screen-sm bg-primary-50 rounded-lg shadow-lg"
        
      >
        <div className="flex items-center justify-between p-4 border-b border-neutralScale-200 ">
          <h2 className="text-xl  text-neutralScale-950">
            {props.title}
          </h2>
          <button onClick={props.onClose} className="absolute top-3 right-3 p-2 bg-primary-400 text-primary-contrast-400">
            <X size={20} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <p className="text-base text-neutralScale-600">
            {props.hour}
          </p>
          <p className="text-base text-neutralScale-600">{props.description}
          </p>
          {props.children}
        </div>
      </div>
    </div>
  );
};
