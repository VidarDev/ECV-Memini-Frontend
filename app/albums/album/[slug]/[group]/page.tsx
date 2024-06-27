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

const MemoryCreate = () => {
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

  return (
    <section className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between bg-theme-neutral px-4 text-theme-neutral-invert"></section>
  );
};

export default MemoryCreate;
