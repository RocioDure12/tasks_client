import { PropsWithChildren } from "react";
import {SideBar} from "./SideBar";

export interface MainLayoutProps extends PropsWithChildren {

}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={"bg-primary-50 pt-[80px] h-full"}>
      <SideBar/>
      
      <main className="w-[90%] m-auto max-w-screen-sm">
        {props.children}
      </main>  
    </div>

  );
}
