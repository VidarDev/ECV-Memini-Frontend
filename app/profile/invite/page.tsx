'use client';

import { siteConfig } from '@/config/site';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { button as buttonStyles } from '@nextui-org/theme';
import { Link } from '@nextui-org/link';
import React, { useEffect } from 'react';
import { Input } from '@nextui-org/input';

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
          'relative flex min-h-[250px] flex-col rounded-b-[80px] bg-theme-primary-200 px-4'
        }
      >
        <div className={'mb-20 mt-8 flex flex-col gap-8'}>
          <Link className={`px-4 text-theme-neutral`} href={siteConfig.href.uikit}>
            <span className={'memicon-arrow-left text-5xl'}></span>
          </Link>
          <div className={'relative w-fit'}>
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>
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
              'relative flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <span className={'font-raleway text-sm font-normal leading-tight'}>
              La personne à qui vous enverrez ce lien aura{' '}
              <strong className={'font-bold'}>accès</strong> à un album collaboratif.Il pourra
              ajouter du contenu <strong className={'font-bold'}>accès</strong>comme vous pour
              alimenter vos souvenirs <strong className={'font-bold'}>ensemble</strong> !
            </span>
          </div>
          <div className={'mt-4 flex w-full flex-nowrap items-center gap-4 overflow-x-auto'}>
            <Link
              className={`${buttonStyles()} min-h-10 w-full gap-2 rounded-full border border-theme-neutral bg-transparent px-6 font-raleway text-sm font-bold text-theme-neutral`}
              href={siteConfig.href.profile}
            >
              Documentation
              <span className={'memicon-arrow'} />{' '}
            </Link>
          </div>
          <div className={'mt-4 flex w-full flex-col flex-nowrap overflow-x-auto'}>
            <span className="font-raleway text-sm font-normal leading-tight">
              Ou je l’invite par e-mail
            </span>
            <Input className={'themed-input mt-6'} label="Email" type="email" />
            <Link
              className={`${buttonStyles()} bg-theme-gradient-neutral mt-4 min-h-10 w-full gap-2 rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
              href={siteConfig.href.uikit}
            >
              Documentation
              <span className={'memicon-arrow'} />{' '}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
