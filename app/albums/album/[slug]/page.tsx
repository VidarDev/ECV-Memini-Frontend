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

interface DataItem {
  content: string;
  date: string;
  mediaName: string;
  mood: string;
}

interface GroupedDataItem {
  position: number;
  name: string;
  nombre: number;
  items: DataItem[];
}

interface HomeProps {
  groupedData: GroupedDataItem[];
}

const positionData = [
  { top: '10%', left: '50%' },
  { top: '27.5%', left: '72.5%' },
  { top: '50%', left: '90%' },
  { top: '72.5%', left: '72.5%' },
  { top: '90%', left: '50%' },
  { top: '72.5%', left: '27.5%' },
  { top: '50%', left: '10%' },
  { top: '27.5%', left: '27.5%' },
];

function groupAndSortData(data: DataItem[]): GroupedDataItem[] {
  const moodMap: { [key: string]: DataItem[] } = {};

  data.forEach((item) => {
    if (!moodMap[item.mood]) {
      moodMap[item.mood] = [];
    }
    moodMap[item.mood].push(item);
  });

  const moodArray = Object.keys(moodMap).map((mood) => ({
    mood,
    items: moodMap[mood],
    nombre: moodMap[mood].length,
  }));

  moodArray.sort((a, b) => b.nombre - a.nombre);

  return moodArray.map((group, index) => ({
    position: index + 1,
    name: group.mood,
    nombre: group.nombre,
    items: group.items,
  }));
}
const MemoryCreate = ({ params }: { params: { slug: string } }) => {
  const { setData } = useData();
  const { user, loading } = useAuth();
  const router = useRouter();

  const groupedData = groupAndSortData(data);
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

  const handleNavigate = (group: string, items: any) => {
    setData(items);
    router.push(siteConfig.href.album + '/' + params.slug + '/' + group);
  };

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
            'max-w-emotion max-h-emotion relative flex h-screen w-full flex-col items-center blur-2xl'
          }
        >
          {groupedData.map((group: GroupedDataItem, key: number) => (
            <div
              key={key}
              className={'absolute inline-flex -translate-x-1/2 -translate-y-1/2 rounded-full'}
              style={{
                top: positionData[key].top,
                left: positionData[key].left,
                zIndex: group.position,
              }}
            >
              <Link
                className={clsx(
                  `bg-emotions-${group.name}`,
                  'anim-delay-' + randomNumberInRange(0, 9) * 100,
                  'floating-scaling block aspect-square h-auto rounded-full opacity-95',
                )}
                style={{ width: group.nombre * 100 }}
                onClick={() => handleNavigate(group.name, group.items)}
              ></Link>
            </div>
          ))}
        </div>
      </div>
      <div></div>
    </section>
  );
};

export default MemoryCreate;
