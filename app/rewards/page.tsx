'use client';

import { siteConfig } from '@/config/site';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { button as buttonStyles } from '@nextui-org/theme';
import { Link } from '@nextui-org/link';
import React, { useEffect } from 'react';
import TwoIcons from '@/components/images/twoIcons';

export default function Albums() {
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
          'relative flex min-h-[250px] flex-col rounded-b-[80px] bg-theme-neutral-invert px-4'
        }
      >
        <div className={'mb-20 mt-16'}>
          <div className={'relative w-fit'}>
            <TwoIcons
              className={'absolute -right-5 -top-1 h-[24px] w-[27px]'}
              startColor={'var(--theme-primary)'}
              endColor={'var(--theme-secondary)'}
            />
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Mes badges</h1>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
      <section
        className={
          'app-translate-y-2 relative flex min-h-48 flex-col items-center justify-center px-4 pb-6'
        }
      >
        <h2 className={'w-full font-pangaia text-xl font-medium text-theme-neutral'}>
          Mes stats principales
          {/* TODO : replace */}
        </h2>
        <div
          className={
            'bg-theme-gradient relative mt-4 flex w-full flex-wrap gap-4 overflow-hidden rounded-2xl px-6 py-4'
          }
        >
          <div className={'flex flex-1 justify-between gap-3'}>
            <div className={'flex flex-col items-center justify-center gap-2'}>
              <span
                className={'memicon-image rounded-full bg-theme-neutral-invert p-2 text-2xl'}
              ></span>
              <div className={'flex flex-col items-center justify-center gap-1 font-raleway'}>
                <span className={'text-base font-bold leading-4 text-theme-neutral'}>65</span>
                {/* TODO : replace */}
                <span className={'text-center text-xs font-bold text-theme-neutral'}>
                  média postés
                </span>
                {/* TODO : replace */}
              </div>
            </div>
            <div className={'flex flex-col items-center justify-center gap-2'}>
              <span
                className={'memicon-user rounded-full bg-theme-neutral-invert p-2 text-2xl'}
              ></span>
              <div className={'flex flex-col items-center justify-center gap-1 font-raleway'}>
                <span className={'text-base font-bold leading-4 text-theme-neutral'}>10</span>
                {/* TODO : replace */}
                <span className={'text-center text-xs font-bold text-theme-neutral'}>
                  jours de connexion
                </span>
                {/* TODO : replace */}
              </div>
            </div>
            <div className={'flex flex-col items-center justify-center gap-2'}>
              <span
                className={'memicon-albums rounded-full bg-theme-neutral-invert p-2 text-2xl'}
              ></span>
              <div className={'flex flex-col items-center justify-center gap-1 font-raleway'}>
                <span className={'text-base font-bold leading-4 text-theme-neutral'}>10</span>
                {/* TODO : replace */}
                <span className={'text-center text-xs font-bold text-theme-neutral'}>
                  albums créés
                </span>
                {/* TODO : replace */}
              </div>
            </div>
          </div>
        </div>
        <div className={'app-min-h-card mt-10 flex w-full flex-col flex-wrap'}>
          <h2 className={'w-full font-pangaia text-xl font-medium text-theme-neutral'}>
            Ma collection de badges
            {/* TODO : replace */}
          </h2>
          <div className={'mt-[40px] flex flex-wrap justify-center gap-y-6'}>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
            <div className="inline-flex w-1/4 min-w-fit justify-center px-3">
              <div className={'h-14 w-14 rounded-full bg-white'}></div>
            </div>
          </div>
          <Link
            isExternal
            className={`${buttonStyles()} mt-[40px] min-h-12 w-full gap-2 rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
            href={siteConfig.href.uikit}
          >
            Tous mes badges
            <span className={'memicon-arrow'} />{' '}
          </Link>
        </div>
      </section>
    </>
  );
}
