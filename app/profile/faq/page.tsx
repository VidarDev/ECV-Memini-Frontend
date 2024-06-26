'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { button as buttonStyles } from '@nextui-org/theme';
import { Link } from '@nextui-org/link';
import React from 'react';

import { useAuth } from '@/context/AuthContext';
import { siteConfig } from '@/config/site';
import ThemedAccordion from '@/components/ThemedAccordion';

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
          <Link className={`px-4 text-theme-neutral`} href={siteConfig.href.profile}>
            <span className={'memicon-arrow-left text-5xl'} />
          </Link>
          <div className={'relative w-fit'}>
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>
              Foire aux questions
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
          <ThemedAccordion
            key="1"
            aria-label="Quelles sont les fonctionnalités principales de l'application Memini ?"
            title="Quelles sont les fonctionnalités principales de l'application Memini ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="2"
            aria-label="Comment puis-je créer un nouveau souvenir ?"
            title="Comment puis-je créer un nouveau souvenir ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="3"
            aria-label="Comment organiser mes souvenirs en projets ?"
            title="Comment organiser mes souvenirs en projets ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="4"
            aria-label="L'application fonctionne-t-elle hors ligne ?"
            title="L'application fonctionne-t-elle hors ligne ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="5"
            aria-label="Mes souvenirs sont-ils sécurisés ?"
            title="Mes souvenirs sont-ils sécurisés ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="6"
            aria-label="Puis-je partager mes souvenirs avec d'autres personnes ?"
            title="Puis-je partager mes souvenirs avec d'autres personnes ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>{' '}
          <ThemedAccordion
            key="7"
            aria-label="Y a-t-il une limite au nombre de souvenirs que je peux enregistrer ?"
            title="Y a-t-il une limite au nombre de souvenirs que je peux enregistrer ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="8"
            aria-label="L'application est-elle gratuite ?"
            title="L'application est-elle gratuite ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="9"
            aria-label="Où puis-je télécharger Memini ?"
            title="Où puis-je télécharger Memini ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
        </div>
        <div className="mt-8 flex w-full px-4">
          <Link
            isExternal
            className={`${buttonStyles()} min-h-10 w-full gap-2 rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
            href={siteConfig.href.uikit}
          >
            Ecris-nous ! <span className={'memicon-arrow'} />
          </Link>
        </div>
      </section>
    </>
  );
}
