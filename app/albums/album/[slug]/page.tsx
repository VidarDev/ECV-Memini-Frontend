'use client'; // Ajoutez cette ligne au début du fichier

import React, { useEffect, useState } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import ThemedTextarea from '@/components/ThemedTextarea';
import { useAuth } from '@/context/AuthContext';
import { Link } from '@nextui-org/link';

const MemoryCreate = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const idAlbum = params.slug;
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

  const randomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <section className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between bg-theme-neutral px-4 text-theme-neutral-invert">
      <div className={'z-50 flex w-full pt-6'}>
        <div className={'flex w-full flex-col gap-8'}>
          <button
            className={'w-fit'}
            onClick={() => {
              router.push(siteConfig.href.albums);
            }}
          >
            <span className={'memicon-arrow-left text-5xl'} />
          </button>
          <span className={'font-pangaia text-3xl font-bold leading-10'}>Mon album perso</span>
        </div>
      </div>
      <div
        className={
          'fixed flex max-h-screen min-h-screen w-screen items-center justify-center pb-24 pt-36'
        }
      >
        <div
          className={
            'max-w-emotion max-h-emotion relative flex h-screen w-full flex-col items-center blur-lg'
          }
        >
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `10%`, left: `50%`, zIndex: 1 }}
          >
            <Link
              className={'bg-emotions-joy block aspect-square h-auto rounded-full opacity-95'}
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `27.5%`, left: `72.5%`, zIndex: 2 }}
          >
            <Link
              className={'bg-emotions-anger block aspect-square h-auto rounded-full opacity-95'}
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `50%`, left: `90%`, zIndex: 3 }}
          >
            <Link
              className={'bg-emotions-sadness block aspect-square h-auto rounded-full opacity-95'}
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `72.5%`, left: `72.5%`, zIndex: 4 }}
          >
            <Link
              className={'bg-emotions-fatigue block aspect-square h-auto rounded-full opacity-95'}
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `90%`, left: `50%`, zIndex: 5 }}
          >
            <Link
              className={
                'bg-emotions-excitement block aspect-square h-auto rounded-full opacity-95'
              }
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `72.5%`, left: `27.5%`, zIndex: 6 }}
          >
            <Link
              className={'bg-emotions-pride block aspect-square h-auto rounded-full opacity-95'}
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `50%`, left: `10%`, zIndex: 7 }}
          >
            <Link
              className={'bg-emotions-faith block aspect-square h-auto rounded-full opacity-95'}
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
          <div
            className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
            style={{ top: `27.5%`, left: `27.5%`, zIndex: 8 }}
          >
            <Link
              className={'bg-emotions-stress block aspect-square h-auto rounded-full opacity-95'}
              style={{ width: randomNumberInRange(25, 175) }}
              href={siteConfig.links.docs}
            ></Link>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default MemoryCreate;
