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
import data from '@/config/album.json';
import { GetStaticProps } from 'next';
import { useData } from '@/context/DataContext';
import { d } from '@nextui-org/slider/dist/use-slider-a94a4c83';
import { Image } from '@nextui-org/image';
import OneIcons from '@/components/images/oneIcons';

const MemoryCreate = ({ params }: { params: { group: string } }) => {
  const { data } = useData();
  const { user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.push(siteConfig.href.auth);
    }
  }, [loading, user, router]);

  useEffect(() => {
    if (data.length === 0) {
      router.push(siteConfig.href.albums);
    }
  }, [data]);

  if (loading) {
    return <p>Loading...</p>; // ou un spinner de chargement
  }

  if (!user) {
    return null; // Ou un composant de chargement supplémentaire
  }

  console.log(data);
  console.log(params.group);

  return (
    <section className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center gap-12 overflow-hidden bg-theme-neutral px-4 text-theme-neutral-invert">
      <div className={'z-50 flex w-full pt-6 text-theme-neutral'}>
        <div className={'flex w-full items-center gap-8'}>
          <button
            className={'w-fit'}
            onClick={() => {
              router.push(siteConfig.href.albums);
            }}
          >
            <span className={'memicon-arrow-left text-5xl'} />
          </button>
          <span className={'font-pangaia text-3xl font-bold capitalize leading-10'}>
            {params.group}
          </span>
        </div>
      </div>
      <div className={'z-10 flex w-full flex-col items-center gap-8 pb-8'}>
        <div className={'flex w-full justify-end'}>
          <div
            className={
              'flex aspect-[3/4] w-2/3 overflow-hidden rounded-3xl bg-red-600 *:min-h-full *:min-w-full'
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
        </div>
        <div className={'flex w-full justify-start'}>
          <div
            className={
              'flex aspect-[3/4] w-2/3 flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl bg-theme-neutral-background px-4 py-2'
            }
          >
            <span
              className={
                'flex w-full items-center gap-2 font-raleway text-sm font-bold text-theme-primary'
              }
            >
              C’était le 16 juin 2024 !
              <OneIcons
                className={'h-[21px] w-[13px]'}
                startColor={'var(--theme-primary)'}
                endColor={'var(--theme-secondary)'}
              />
            </span>
            <span className="font-raleway text-xs font-normal text-theme-neutral">
              Ceci est une note prise tel jour ou beaucoup de choses on était écrite et raconté
              blabla j’ai plus d’idée mais le texte doit être long.
            </span>
          </div>
        </div>
        <div className={'flex w-full justify-end'}>
          <div
            className={
              'flex aspect-[3/4] w-2/3 overflow-hidden rounded-3xl bg-red-600 *:min-h-full *:min-w-full'
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
        </div>
        <div className={'flex w-full justify-start'}>
          <div
            className={
              'flex aspect-[3/4] w-2/3 flex-col items-center justify-center gap-2 overflow-hidden rounded-3xl bg-theme-neutral-background px-4 py-2'
            }
          >
            <span
              className={
                'flex w-full items-center gap-2 font-raleway text-sm font-bold text-theme-primary'
              }
            >
              C’était le 16 juin 2024 !
              <OneIcons
                className={'h-[21px] w-[13px]'}
                startColor={'var(--theme-primary)'}
                endColor={'var(--theme-secondary)'}
              />
            </span>
            <span className="font-raleway text-xs font-normal text-theme-neutral">
              Ceci est une note prise tel jour ou beaucoup de choses on était écrite et raconté
              blabla j’ai plus d’idée mais le texte doit être long.
            </span>
          </div>
        </div>
      </div>
      <div
        className={`block aspect-square bg-emotions-${params.group} absolute left-16 top-4 h-auto w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl`}
      ></div>
    </section>
  );
};

export default MemoryCreate;
