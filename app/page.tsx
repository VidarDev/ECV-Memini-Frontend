import { Image } from '@nextui-org/image';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import React from 'react';

export default function Home() {
  return (
    <>
      <section
        className={'bg-theme-gradient relative flex min-h-[250px] flex-col rounded-b-[80px] px-4'}
      >
        <div className={'absolute right-0 top-0 z-10 flex justify-end text-[100px]'}>
          <div className={'app-bg-avatar relative pr-4 pt-8'}>
            <Image
              alt="NextUI hero Image with delay"
              className={'aspect-square h-auto w-[72px] rounded-full object-cover'}
              height={100}
              radius={'full'}
              src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              width={100}
            />
          </div>
        </div>
        <div className={'mb-20 mt-16'}>
          <div className={'relative w-fit'}>
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Hello Flavie,</h1>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
      <section
        className={
          'app-translate-y relative flex min-h-48 flex-col items-center justify-center px-4 pb-4'
        }
      >
        <div
          className={
            'app-min-h-card flex max-h-fit w-full flex-col gap-4 rounded-2xl bg-theme-neutral-invert px-4 py-8'
          }
        >
          <span className={'text-xl font-medium'}>Aujourd’hui, le 24/06/2024</span>
          {/* TODO : replace */}
          <div className={'flex flex-1 flex-nowrap justify-between gap-3.5 overflow-x-auto'}>
            <div
              className={
                'flex flex-1 flex-col items-center justify-center rounded-lg bg-theme-neutral-background px-4 py-3 font-raleway'
              }
            >
              <span className={'text-base font-medium'}>Jour</span>
              {/* TODO : replace */}
              <span className={'text-lg font-medium'}>10</span>
              {/* TODO : replace */}
            </div>
            <div
              className={
                'flex flex-1 flex-col items-center justify-center rounded-lg bg-theme-neutral-background px-4 py-3 font-raleway'
              }
            >
              <span className={'text-base font-medium'}>Jour</span>
              {/* TODO : replace */}
              <span className={'text-lg font-medium'}>11</span>
              {/* TODO : replace */}
            </div>
            <div
              className={
                'bg-theme-primary-400 flex flex-1 flex-col items-center justify-center rounded-lg px-4 py-3 font-raleway text-theme-neutral-invert'
              }
            >
              <span className={'text-base font-medium'}>Jour</span>
              {/* TODO : replace */}
              <span className={'text-lg font-medium'}>12</span>
              {/* TODO : replace */}
            </div>
            <div
              className={
                'flex flex-1 flex-col items-center justify-center rounded-lg bg-theme-neutral-background px-4 py-3 font-raleway'
              }
            >
              <span className={'text-base font-medium'}>Jour</span>
              {/* TODO : replace */}
              <span className={'text-lg font-medium'}>13</span>
              {/* TODO : replace */}
            </div>
          </div>
        </div>
        <div className={'app-min-h-card mt-4 flex w-full flex-wrap gap-4'}>
          <div
            className={
              'app-album-home relative flex flex-1 rounded-2xl bg-theme-neutral-invert p-4 text-[102px]'
            }
          >
            <span className={'text-base font-medium'}>Mon album perso</span>
            {/* TODO : replace */}
          </div>
          <div
            className={
              'bg-theme-primary-400 flex flex-1 flex-col items-center justify-center gap-2.5 rounded-2xl px-4 py-5 text-theme-neutral-invert'
            }
          >
            <span className={'font-raleway text-5xl font-bold leading-10'}>3</span>
            {/* TODO : replace */}
            <span className={'font-pangaia text-base font-medium'}>nombre d’albums</span>
            {/* TODO : replace */}
          </div>
        </div>
        <div
          className={
            'app-min-h-card relative mt-4 flex w-full flex-wrap gap-4 overflow-hidden rounded-2xl bg-theme-neutral-background'
          }
        >
          <div className={'absolute flex min-h-full min-w-full *:w-full *:!max-w-full'}>
            <Image
              className={'min-h-full min-w-full'}
              height={150}
              src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              width={400}
              radius={'none'}
            />
          </div>
          <div className={'z-10 flex h-auto w-full items-end p-4'}>
            <Link
              isExternal
              className={`${buttonStyles()} bg-theme-primary-400 min-h-10 w-fit gap-2 rounded-full px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
              href={siteConfig.links.docs}
            >
              C’était il y a 3 mois
            </Link>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
    </>
  );
}
