'use client'; // Ajoutez cette ligne au début du fichier

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from '@/context/AuthContext';
import { useData } from '@/context/DataContext';
import { siteConfig } from '@/config/site';
import TextImage from '@/components/TextImage';
import TextCard from '@/components/TextCard';
import clsx from 'clsx';

interface DataItem {
  content: string;
  date: string;
  mediaName: string;
  mood: string;
}

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
        {data.map((item: any, index) => (
          <div
            className={clsx(
              index % 2 === 0 ? 'justify-start' : 'justify-end',
              'flex w-full justify-end',
            )}
          >
            <TextCard key={index}>{item.content}</TextCard>
          </div>
        ))}
      </div>
      <div
        className={`block aspect-square bg-emotions-${params.group} absolute left-16 top-4 h-auto w-[70vw] -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl`}
      />
    </section>
  );
};

export default MemoryCreate;
