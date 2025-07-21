import { PropsWithChildren } from "react";
import {SideBar} from "./SideBar";

export interface MainLayoutProps extends PropsWithChildren {

}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={"flex min-h-screen bg-primary-50"}>
      <SideBar/>
      
      <main className="flex-1 p-4 pt-12 pl-12 sm:pt-6 sm:pl-6 max-w-4xl mx-auto overflow-auto">
        <div className="max-w-6xl mx-auto p-4" >
        {props.children}
        </div>
      </main>  
    </div>

  );
}
