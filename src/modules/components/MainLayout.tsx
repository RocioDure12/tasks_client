import { PropsWithChildren } from "react";
import {SideBar} from "./SideBar";

export interface MainLayoutProps extends PropsWithChildren {

}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={"flex min-h-screen bg-primary-50"}>
      <SideBar/>
      
      <main className="flex-1 p-4 md:p-6 lg:p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto" >
        {props.children}
        </div>
      </main>  
    </div>

  );
}
