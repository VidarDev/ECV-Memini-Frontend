import React, { useState } from 'react';
import { Image } from '@nextui-org/image';
const FlipCard = (props: any) => {
  const { children, ...otherProps } = props;
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  };

  return (
    <div
      className="perspective-1000 relative aspect-[3/4] w-2/3"
      {...otherProps}
      onClick={handleClick}
    >
      <div
        className={`transform-style-preserve-3d absolute inset-0 transition-transform duration-700 ${flipped ? 'rotate-y-180' : ''}`}
      >
        <div
          className={
            'backface-hidden inset flex h-full w-full flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl bg-theme-neutral-background px-4 py-2'
          }
        >
          <span className="font-raleway text-xs font-normal text-theme-neutral">{children}</span>
        </div>
        <div
          className={
            'rotate-y-180 backface-hidden inset absolute flex h-full w-full overflow-hidden rounded-3xl bg-red-600 *:min-h-full *:min-w-full'
          }
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
        <div className="rotate-y-180 backface-hidden absolute inset-0 flex transform items-center justify-center bg-blue-500 text-white">
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
