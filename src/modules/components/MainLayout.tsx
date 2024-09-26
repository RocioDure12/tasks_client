import { PropsWithChildren } from "react";
import NavBar from "./NavBar";

export interface MainLayoutProps extends PropsWithChildren {}
export default function MainLayout(props: MainLayoutProps) {
  return (
    <div className="bg-red-500">
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
}
