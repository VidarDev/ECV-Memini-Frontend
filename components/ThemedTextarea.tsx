import React from 'react';
import { Textarea } from '@nextui-org/input';

export default function ThemedTextarea(props: any) {
  const { ...otherProps } = props;

  return <Textarea className="themed-textarea" {...otherProps} />;
}
