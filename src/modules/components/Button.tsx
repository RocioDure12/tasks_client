import { PropsWithChildren } from "react";

export const Button=(props:PropsWithChildren)=>{
    return(
        <button>{props.children}</button>
    )

}