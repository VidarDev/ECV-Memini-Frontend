'use client';

import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
export default function ThemedAccordion(props: any) {
  const { children, ...otherProps } = props;

  return (
    <Accordion className={'themed-accordion'}>
      <AccordionItem
        className={'themed-accordion-item'}
        indicator={<span className={'memicon-arrow text-2xl text-theme-neutral'} />}
        {...otherProps}
      >
        {children}
      </AccordionItem>
    </Accordion>
  );
}
