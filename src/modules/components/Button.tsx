import { forwardRef } from 'react';

type ButtonProps = {
  //loading?: boolean; // custom prop
} & React.PropsWithChildren<React.ComponentPropsWithRef<'button'>>;


export const Button: React.FC<ButtonProps> = forwardRef(
    ({  children, ...props }, ref) => {
      return (
        <button {...props} ref={ref}>
          {children}
        </button>
      );
    }
  );