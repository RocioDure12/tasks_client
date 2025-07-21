import { forwardRef } from 'react';

type ButtonProps = React.PropsWithChildren<React.ComponentPropsWithRef<'button'>>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center
          px-4 py-2 bg-primary-500
          text-primary-contrast-500 rounded
          hover:bg-primary-900 hover:text-primary-contrast-700
          transition-colors duration-200
          disabled:opacity-50 disabled:cursor-not-allowed
          ${className}
        `}
        {...props}
      >
        {children}
      </button>
    );
  }
);
