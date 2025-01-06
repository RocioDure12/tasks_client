import { PropsWithChildren } from "react";
import { CardProps } from "../models/CardProps";

export const Card: React.FC<PropsWithChildren<CardProps>> = (props) => {
  return (
  <div >
    {props.children}
  </div>
)
};