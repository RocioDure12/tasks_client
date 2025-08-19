import { forwardRef } from 'react';

type ItemProps = {
  } & React.PropsWithChildren<React.ComponentPropsWithRef<'div'>>;

export const Item: React.FC<ItemProps> = forwardRef(
    ({  children }, _) => {
      return (
        <div>
          {children}
        </div>
      );
    }
  );