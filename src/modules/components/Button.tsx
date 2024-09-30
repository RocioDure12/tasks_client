import { forwardRef } from 'react';

type ButtonProps = {
  //loading?: boolean; // custom prop
} & React.PropsWithChildren<React.ComponentPropsWithRef<'button'>>;


export const Button: React.FC<ButtonProps> = forwardRef(
    ({  children, ...props }, ref) => {
      return (
        <button className="mt-2 my-2
                     px-4 py-2 bg-primary-500 
                     text-primary-contrast-500 rounded 
                     hover:bg-primary-900 hover:text-primary-contrast-700"{...props} ref={ref}>
          {children}
        </button>
      );
    }
  );