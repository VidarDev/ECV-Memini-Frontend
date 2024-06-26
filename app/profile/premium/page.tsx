'use client';

import { siteConfig } from '@/config/site';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { button as buttonStyles } from '@nextui-org/theme';
import { Link } from '@nextui-org/link';
import React from 'react';
import PreniumIcons from '@/components/images/premiumIcons';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(siteConfig.href.auth);
    }
  }, [loading, user, router]);

  if (loading) {
    return <p>Loading...</p>; // ou un spinner de chargement
  }

  if (!user) {
    return null; // Ou un composant de chargement supplémentaire
  }

  return (
    <>
      <section
        className={
          'relative flex min-h-[250px] flex-col rounded-b-[80px] bg-transparent text-theme-neutral-invert'
        }
      >
        <img
          src={'/background-premium.svg'}
          alt={'background'}
          className={'absolute left-0 top-0 w-full'}
        />
        {/*<BgShape className={'absolute left-0 top-0 h-auto w-full'} />*/}
        <div className={'mb-36 mt-8 flex flex-col gap-8 px-4'}>
          <Link className={`px-4 text-theme-neutral`} href={siteConfig.href.profile}>
            <span className={'memicon-arrow-left text-5xl text-theme-neutral-invert'}></span>
          </Link>
          <div className={'relative w-fit'}>
            <PreniumIcons
              className={'absolute -right-8 -top-8 h-[36px] w-[47px] rotate-[29deg]'}
              startColor={'var(--theme-neutral-invert)'}
              endColor={'var(--theme-neutral-invert)'}
            />
            <h1 className={'w-fit max-w-64 font-pangaia text-5xl font-bold leading-10'}>
              J&apos;invite un proche
            </h1>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
      <section
        className={
          'app-translate-y-3 relative flex min-h-48 flex-col items-center justify-center pb-36'
        }
      >
        <div className={'flex w-full flex-col gap-4 px-4'}>
          <div
            className={
              'relative flex w-full flex-1 flex-col justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <span className="font-pangaia text-xl font-bold">Version gratuite</span>
            <div className={'flex w-full flex-col gap-4'}>
              <div className={'inline-flex w-full items-center gap-4'}>
                <span className="memicon-check text-2xl text-theme-neutral"></span>
                <span className="font-raleway text-sm font-normal">
                  <span className={'font-bold'}>3</span> albums gratuits
                </span>
              </div>
              <div className={'inline-flex w-full items-center gap-4'}>
                <span className="memicon-check text-2xl text-theme-neutral"></span>
                <span className="font-raleway text-sm font-normal">
                  <span className={'font-bold'}>4</span> participants maximum par album
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              'relative mt-2 flex w-full flex-1 flex-col justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <span className="font-pangaia text-xl font-bold">Version gratuite</span>
            <div className={'flex w-full flex-col gap-4'}>
              <div className={'inline-flex w-full items-center gap-4'}>
                <span className="memicon-check text-2xl text-theme-neutral"></span>
                <span className="font-raleway text-sm font-normal">
                  <span className={'font-bold'}>3</span> albums gratuits
                </span>
              </div>
              <div className={'inline-flex w-full items-center gap-4'}>
                <span className="memicon-check text-2xl text-theme-neutral"></span>
                <span className="font-raleway text-sm font-normal">
                  <span className={'font-bold'}>4</span> participants maximum par album
                </span>
              </div>
            </div>
            <span className="font-pangaia text-xl font-medium">5€/ mois sans engagement</span>
          </div>
          <div
            className={
              'relative mt-2 flex w-full flex-1 flex-col items-center justify-center gap-4'
            }
          >
            <span className="w-full text-center font-raleway text-sm font-medium text-black">
              même si vous restaurez votre abonnement, vos albums seront conservés.
            </span>

            <span className="w-full text-center font-raleway text-sm font-medium text-black">
              Coming soon
            </span>
            <Link
              isExternal
              className={`${buttonStyles()} min-h-10 w-fit gap-2 rounded-full border-0 bg-theme-disabled-background px-6 font-raleway text-sm font-bold text-theme-disabled`}
              href={siteConfig.links.docs}
            >
              Je veux ma mémoire digitale
              <span className={'memicon-arrow'} />{' '}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
