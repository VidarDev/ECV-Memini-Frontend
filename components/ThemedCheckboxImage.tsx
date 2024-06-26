import React from 'react';
import { Checkbox } from '@nextui-org/checkbox';
import { cn } from '@nextui-org/theme';

export default function ThemedCheckbox(props: any) {
  const { children, ...otherProps } = props;

  return (
    <Checkbox
      {...otherProps}
      classNames={{
        base: cn(
          'themed-checkbox-image max-w-[58px] max-h-[58px] w-full cursor-pointer justify-center items-center rounded-full inline-flex',
          'p-0.5 m-0 border border-transparent bg-transparent aspect-square',
          'hover:transparent hover:border-theme-primary-hover data-[selected=true]:border-theme-primary-hover data-[selected=true]:bg-transparent',
        ),
      }}
    >
      {children}
    </Checkbox>
  );
}
