import { forwardRef } from 'react';

type ItemProps = {
  } & React.PropsWithChildren<React.ComponentPropsWithRef<'div'>>;

export const Item: React.FC<ItemProps> = forwardRef(
    ({  children, ...props }, ref) => {
      return (
        <div>
          {children}
        </div>
      );
    }
  );