import React from 'react';
import FiveIcons from '@/components/images/fiveIcons';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';

export default function AuthScreen() {
  return (
    <>
      <section className="min-w-screen flex h-full min-h-screen w-full items-center justify-center">
        <div className={'flex flex-col items-center gap-[80px] px-4'}>
          <div className={'flex flex-col items-center gap-[40px]'}>
            <span className={'memicon-logo text-[206px]'}></span>
            <div className={'relative w-fit pb-7'}>
              <FiveIcons
                className={'absolute -right-2 bottom-2 -rotate-[2.4deg]'}
                startColor={'var(--theme-primary)'}
                endColor={'var(--theme-secondary)'}
              />
              <span className={'font-pangaia text-3xl font-thin'}>ta mémoire immersive.</span>
            </div>
          </div>
          <div className={'flex w-fit flex-col items-center gap-4'}>
            <Link
              className={`${buttonStyles()} bg-theme-gradient min-h-10 w-full gap-2 rounded-full px-6 font-raleway text-sm font-bold text-theme-neutral`}
              href={siteConfig.href.login}
            >
              Se connecter
              <span className={'memicon-arrow'} />
            </Link>
            <Link
              className={`${buttonStyles()} min-h-10 w-full gap-2 rounded-full border border-theme-neutral bg-transparent px-6 font-raleway text-sm font-bold text-theme-neutral`}
              href={siteConfig.href.register}
            >
              S{"'"}inscrire
              <span className={'memicon-arrow'} />{' '}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
