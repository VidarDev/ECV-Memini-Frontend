'use client';

import React from 'react';
import { Select, SelectItem } from '@nextui-org/select';
import { Avatar } from '@nextui-org/avatar';
export default function ThemedSelect(props: any) {
  const { children, ...otherProps } = props;

  return (
    <Select className="themed-select" variant={'bordered'} {...otherProps}>
      {/*{children}*/}
      <SelectItem
        key="argentina"
        startContent={
          <Avatar alt="Argentina" className="h-6 w-6" src="https://flagcdn.com/ar.svg" />
        }
      >
        Argentina
      </SelectItem>
      <SelectItem
        key="venezuela"
        startContent={
          <Avatar alt="Venezuela" className="h-6 w-6" src="https://flagcdn.com/ve.svg" />
        }
      >
        Venezuela
      </SelectItem>
    </Select>
  );
}
