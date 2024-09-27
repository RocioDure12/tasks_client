import { PropsWithChildren } from "react";
import { CardProps } from "../models/CardProps";

export const Card: React.FC<PropsWithChildren<CardProps>> = (props) => {
  return (
  <div className=" bg-primary-200 max-w-sm rounded-xl flex items-center  p-6 border-l-8 border-purple-500 mt-2" >
    {props.children}
  </div>
)
};