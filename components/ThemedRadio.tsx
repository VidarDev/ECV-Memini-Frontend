import React from 'react';
import { Radio } from '@nextui-org/radio';
import { cn } from '@nextui-org/theme';

export default function ThemedRadio(props: any) {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'themed-radio w-full px-6 max-w-full cursor-pointer justify-between items-center flex-row-reverse rounded-full inline-flex',
          'm-0 bg-theme-neutral-invert min-h-14 border-theme-primary-light border hover:border-theme-primary-light',
          ' hover:bg-theme-primary-light data-[selected=true]:border-theme-primary-light data-[selected=true]:bg-theme-primary-light',
        ),
      }}
    >
      {children}
    </Radio>
  );
}
