'use client';

import { Image } from '@nextui-org/image';
import { Link } from '@nextui-org/link';
import React from 'react';
import ThreeIcons from '@/components/images/threeIcons';
import AddIcons from '@/components/images/AddIcons';
import { siteConfig } from '@/config/site';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AlbumsScreen() {
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
            <ThreeIcons
              className={'absolute -bottom-2 -right-4 h-[20px] w-[54px]'}
              startColor={'var(--theme-primary)'}
              endColor={'var(--theme-secondary)'}
            />
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Mes albums</h1>
            {/* TODO : replace */}
          </div>
        </div>
      </section>
      <section
        className={
          'app-translate-y-2 relative flex min-h-48 flex-col items-center justify-center pb-6'
        }
      >
        <div className={'w-full px-2'}>
          <div className={'mx-auto flex w-full flex-wrap gap-y-4'}>
            <div className={'w-full px-2'}>
              <div
                className={
                  'theme-shadow relative flex aspect-video max-h-[164px] min-h-[164px] w-full flex-wrap gap-4 overflow-hidden rounded-2xl bg-theme-neutral-background p-4'
                }
              >
                <Link
                  className={`-m-4 flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
                  href={siteConfig.href.uikit}
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
            </div>
            <div className={'w-1/2 px-2'}>
              <div
                className={
                  'app-min-h-card theme-shadow relative flex flex-1 overflow-hidden rounded-2xl bg-theme-neutral-background'
                }
              >
                <Link
                  className={`flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
                  href={siteConfig.href.uikit}
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
            </div>
            <div className={'w-1/2 px-2'}>
              <div
                className={
                  'app-min-h-card theme-shadow relative flex flex-1 overflow-hidden rounded-2xl bg-theme-neutral-background'
                }
              >
                <Link
                  className={`flex min-h-full w-full min-w-full flex-1 gap-2 bg-transparent *:w-full *:!max-w-full`}
                  href={siteConfig.href.uikit}
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
            <div className={'w-1/2 px-2'}>
              <Link
                className={`app-min-h-card theme-shadow relative flex min-h-full w-full min-w-full flex-1 flex-col gap-4 rounded-2xl bg-theme-neutral-invert p-4 text-[102px] *:w-full *:!max-w-full`}
                href={siteConfig.href.uikit}
              >
                <AddIcons
                  className={'h-[24px] w-[24px]'}
                  startColor={'var(--theme-primary)'}
                  endColor={'var(--theme-secondary)'}
                  centerColor={'var(--theme-neutral-invert)'}
                ></AddIcons>
                {/* TODO : replace */}
                <span className={'text-base font-medium text-theme-neutral'}>Mon album perso</span>
                {/* TODO : replace */}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
