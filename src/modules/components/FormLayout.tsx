import { PropsWithChildren } from "react";

export interface FormLayoutProps extends PropsWithChildren {

}
export default function FormLayout(props: FormLayoutProps) {
  return (
    <div className={"bg-primary-50 h-full flex justify-center items-center"}>
      <div className="p-6 max-w-sm mx-auto flex items-center justify-center">
        {props.children}
        </div>
      </div>

  );
}
