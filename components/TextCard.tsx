import React, { useState } from 'react';
import { Image } from '@nextui-org/image';
import OneIcons from '@/components/images/oneIcons';
const TextCard = (props: any) => {
  const { children, ...otherProps } = props;
  return (
    <div
      className={
        'flex aspect-[3/4] w-2/3 flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl bg-theme-neutral-background px-4 py-2'
      }
      {...otherProps}
    >
      {/*<span*/}
      {/*  className={*/}
      {/*    'flex w-full items-center gap-2 font-raleway text-sm font-bold text-theme-primary'*/}
      {/*  }*/}
      {/*>*/}
      {/*  C’était le 16 juin 2024 !*/}
      {/*  <OneIcons*/}
      {/*    className={'h-[21px] w-[13px]'}*/}
      {/*    startColor={'var(--theme-primary)'}*/}
      {/*    endColor={'var(--theme-secondary)'}*/}
      {/*  />*/}
      {/*</span>*/}
      <span className="font-raleway text-xs font-normal text-theme-neutral">{children}</span>
    </div>
  );
};

export default TextCard;
