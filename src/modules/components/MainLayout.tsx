import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

export interface MainLayoutProps extends PropsWithChildren {

}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className={"bg-primary-50 h-full"}>
      <NavBar />
      <div className="p-6 max-w-sm mx-auto flex items-center">
        {props.children}
        </div>
    </div>
  );
}
