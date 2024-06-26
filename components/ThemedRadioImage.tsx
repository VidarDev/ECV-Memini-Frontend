import React from 'react';
import { Radio } from '@nextui-org/radio';
import { cn } from '@nextui-org/theme';

export default function ThemedRadioImage(props: any) {
  const { children, ...otherProps } = props;

  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          'themed-radio-image max-w-[58px] max-h-[58px] w-full cursor-pointer justify-center items-center rounded-full inline-flex',
          'p-0.5 m-0 border border-transparent bg-transparent aspect-square',
          'hover:transparent hover:border-theme-primary-hover data-[selected=true]:border-theme-primary-hover data-[selected=true]:bg-transparent',
        ),
      }}
    >
      {children}
    </Radio>
  );
}
