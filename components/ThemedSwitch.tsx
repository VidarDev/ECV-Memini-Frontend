import React from 'react';
import { Switch } from '@nextui-org/switch';
import { cn } from '@nextui-org/theme';

export default function ThemedSwitch(props: any) {
  const { children, ...otherProps } = props;

  return (
    <Switch
      classNames={{
        wrapper:
          'p-0 h-4 bg-theme-neutral-invert overflow-visible group-data-[selected=true]:bg-theme-primary-light',
        thumb: cn(
          'bg-red-500 border-0 w-6 h-6 bg-theme-gradient shadow-lg',
          //selected
          'group-data-[selected=true]:ml-6',
          // pressed
          'group-data-[pressed=true]:w-7',
          'group-data-[selected]:group-data-[pressed]:ml-4',
        ),
      }}
      {...otherProps}
    >
      {children}
    </Switch>
  );
}
