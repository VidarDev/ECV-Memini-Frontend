import React, { useState } from 'react';
import { Image } from '@nextui-org/image';
import OneIcons from '@/components/images/oneIcons';
const TextImage = (props: any) => {
  const { children, ...otherProps } = props;

  return (
    <div
      className={
        'flex aspect-[3/4] w-2/3 overflow-hidden rounded-3xl bg-red-600 *:min-h-full *:min-w-full'
      }
      {...otherProps}
    >
      <Image
        alt={'gtgt'}
        className={'h-full w-full object-cover'}
        height={100}
        radius={'none'}
        src={
          'https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg'
        }
        width={100}
      />
    </div>
  );
};

export default TextImage;
