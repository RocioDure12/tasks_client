import { PropsWithChildren } from "react";

export interface FormLayoutProps extends PropsWithChildren {

}
export default function AuthFormLayout(props: FormLayoutProps) {
  return (
    <div className={"bg-primary-500  flex justify-center items-center min-h-screen"}>
      <main className="w-[90%] m-auto max-w-screen-sm p-4">
        {props.children}
      
      </main>
    </div>

  );
}
