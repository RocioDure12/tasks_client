import { PropsWithChildren } from "react";
import {NavBar} from "../components/NavBar";

export interface MainLayoutProps extends PropsWithChildren {

}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={"bg-primary-50 h-full flex justify-center items-center"}>
      <NavBar/>
      <div className="p-6 max-w-sm mx-auto flex items-center justify-center">
        {props.children}
        </div>
      </div>

  );
}
