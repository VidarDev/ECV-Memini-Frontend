import { Image } from '@nextui-org/image';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import React from 'react';

export default function Albums() {
  return (
    <>
      <section
        className={
          'relative flex min-h-[250px] flex-col rounded-b-[80px] bg-theme-neutral-invert px-4'
        }
      >
        <div className={'mb-20 mt-16'}>
          <div className={'relative w-fit'}>
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Mes albums</h1>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
      <section
        className={
          'app-translate-y-2 relative flex min-h-48 flex-col items-center justify-center px-4 pb-4'
        }
      >
        <div
          className={
            'relative flex aspect-video max-h-[164px] min-h-[164px] w-full flex-wrap gap-4 overflow-hidden rounded-2xl bg-theme-neutral-background p-4'
          }
        >
          <Link
            className={`-m-4 flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
            href={'/uikit'}
          >
            <div className={'absolute flex min-h-full min-w-full *:w-full *:!max-w-full'}>
              <Image
                className={'min-h-full min-w-full object-cover'}
                height={150}
                src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                width={400}
                radius={'none'}
              />
            </div>
            <div
              className={
                'z-10 flex h-full w-full flex-1 items-center p-4 text-theme-neutral-invert'
              }
            >
              <span className={'text-xl font-medium'}>Mon album perso</span>
              {/* TODO : replace */}
            </div>
          </Link>
        </div>
        <div className={'app-min-h-card mt-4 flex w-full flex-wrap gap-4'}>
          <div
            className={
              'relative flex flex-1 overflow-hidden rounded-2xl bg-theme-neutral-background p-4'
            }
          >
            <Link
              className={`-m-4 flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
              href={'/uikit'}
            >
              <div className={'absolute flex min-h-full min-w-full *:w-full *:!max-w-full'}>
                <Image
                  className={'min-h-full min-w-full object-cover'}
                  height={150}
                  src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  width={400}
                  radius={'none'}
                />
              </div>
              <div className={'z-10 flex h-full w-full flex-1 p-4 text-theme-neutral-invert'}>
                <span className={'text-xl font-medium'}>Mes photos</span>
                {/* TODO : replace */}
              </div>
            </Link>
          </div>
          <div
            className={
              'relative flex flex-1 overflow-hidden rounded-2xl bg-theme-neutral-background p-4'
            }
          >
            <Link
              className={`-m-4 flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
              href={'/uikit'}
            >
              <div className={'absolute flex min-h-full min-w-full *:w-full *:!max-w-full'}>
                <Image
                  className={'min-h-full min-w-full object-cover'}
                  height={150}
                  src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  width={400}
                  radius={'none'}
                />
              </div>
              <div className={'z-10 flex h-full w-full flex-1 p-4 text-theme-neutral-invert'}>
                <span className={'text-xl font-medium'}>Ciné V’lille</span>
                {/* TODO : replace */}
              </div>
            </Link>
          </div>
        </div>
        <div className={'app-min-h-card mt-4 flex w-full flex-wrap pr-4'}>
          <div
            className={
              'relative flex w-1/2 flex-col gap-4 rounded-2xl bg-theme-neutral-invert p-4 text-[102px]'
            }
          >
            <span className={'memicon-add-color text-2xl'}></span>
            {/* TODO : replace */}
            <span className={'text-base font-medium'}>Mon album perso</span>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
    </>
  );
}
