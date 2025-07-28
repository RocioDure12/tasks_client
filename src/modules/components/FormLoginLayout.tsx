import { PropsWithChildren } from "react";

export interface FormLayoutProps extends PropsWithChildren {

}
export default function FormLayout(props: FormLayoutProps) {
  return (
    <div className={"bg-primary-500 h-full flex justify-center items-center"}>
      <div className="w-full max-w-md">
        {props.children}
        </div>
      </div>

  );
}
