import { useState } from "react";
import { X } from "lucide-react";
import ModalProps from "../models/ModalProps"

//MODIFICAR MODAL PARA QUE MUESTRE INFORMACION DE LA TAREA

export const Modal: React.FC<ModalProps> = (props:ModalProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-primary-contrast-50 bg-opacity-50">
      <div
        className="relative p-4 w-full max-w-2xl bg-primary-50 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()} // Evita cerrar al hacer clic dentro
      >
        <div className="flex items-center justify-between p-4 border-b border-neutralScale-200 ">
          <h3 className="text-xl  text-neutralScale-950">
            {props.title}
          </h3>
          <button className="absolute top-4 right-4 p-2 text-white bg-primary-400">
            <X size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          <p className="text-base text-neutralScale-600">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base text-neutralScale-600">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </div>
      </div>
    </div>
  );
};
