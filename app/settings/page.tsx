'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import React from 'react';
import { Input } from '@nextui-org/input';

export default function Home() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
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
          <Link className={`px-4 text-theme-neutral`} href={'/profile'}>
            <span className={'memicon-arrow-left text-5xl'}></span>
          </Link>
          <div className={'relative w-fit'}>
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Paramètres</h1>
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
          <Input
            className={'themed-input font-raleway'}
            label="Modifier mon nom d'utilisateur"
            type="text"
          />
          <Input className={'themed-input font-raleway'} label="Modifier mon email" type="email" />
          <Input
            className={'themed-input font-raleway'}
            label="Modifier mon mot de passe"
            type="password"
          />
        </div>
        <div className={'mt-8 flex w-full flex-col gap-4 px-4'}>
          <Link
            className={`font-raleway text-sm font-normal leading-tight text-theme-neutral underline`}
            href={'/uikit'}
          >
            Importer mes données
          </Link>
          <Link
            className={`font-raleway text-sm font-normal leading-tight text-theme-neutral underline`}
            href={'/uikit'}
          >
            Exporter mes données
          </Link>
        </div>
        <div className={'mt-8 flex w-full flex-col gap-4 px-4'}>
          <Link
            isExternal
            className={`${buttonStyles()} min-h-10 w-full gap-2 rounded-full border border-theme-error bg-transparent px-6 font-raleway text-sm font-bold text-theme-error`}
            href={siteConfig.links.docs}
          >
            Supprimer mon compte
            <span className={'memicon-arrow'} />{' '}
          </Link>
        </div>
        <div className={'mt-8 flex w-full flex-col gap-4 px-4'}>
          <Link
            className={`font-raleway text-sm font-normal leading-tight text-theme-neutral underline`}
            href={'/uikit'}
          >
            Conditions d’utilisation
          </Link>
          <Link
            className={`font-raleway text-sm font-normal leading-tight text-theme-neutral underline`}
            href={'/uikit'}
          >
            Politique de confidentialité
          </Link>
        </div>
      </section>
    </>
  );
}
