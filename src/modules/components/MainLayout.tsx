import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

export interface MainLayoutProps extends PropsWithChildren {

}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={"bg-gray-300 h-full"}>
      <NavBar />
      <div className="p-3 max-w-screen-sm m-auto mt-5">
        {props.children}
        </div>
    </div>
  );
}
