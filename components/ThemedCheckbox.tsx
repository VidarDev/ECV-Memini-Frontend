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
          'themed-checkbox w-full px-6 max-w-full cursor-pointer justify-between items-center flex-row-reverse rounded-full inline-flex',
          'm-0 bg-theme-neutral-invert min-h-14 border-theme-primary-light border hover:border-theme-primary-light',
          ' hover:bg-theme-primary-light data-[selected=true]:border-theme-primary-light data-[selected=true]:bg-theme-primary-light',
        ),
      }}
    >
      {children}
    </Checkbox>
  );
}
