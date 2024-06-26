'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Link } from '@nextui-org/link';
import React from 'react';

export default function AssistanceScreens() {
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
            <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>Assistance</h1>
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
            <Link href={'/uikit'} className={'flex items-center gap-2'}>
              <span className={'memicon-phone text-2xl text-theme-neutral'} />
              <span className={'w-fit font-pangaia text-3xl font-medium text-theme-neutral'}>
                31 14
              </span>
            </Link>
            <div className={'flex w-full flex-col items-center justify-center'}>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                Numéro national de prévention du suicide
              </span>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                7/7j - 24/24h
              </span>
            </div>
          </div>
          <div
            className={
              'relative flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <Link href={'/uikit'} className={'flex items-center gap-2'}>
              <span className={'memicon-phone text-2xl text-theme-neutral'} />
              <span className={'w-fit font-pangaia text-3xl font-medium text-theme-neutral'}>
                0800 23 13 13
              </span>
            </Link>
            <div className={'flex w-full flex-col items-center justify-center'}>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                Drogues info service
              </span>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                7/7 - 8h/2h
              </span>
            </div>
          </div>
          <div
            className={
              'relative flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <Link href={'/uikit'} className={'flex items-center gap-2'}>
              <span className={'memicon-phone text-2xl text-theme-neutral'} />
              <span className={'w-fit font-pangaia text-3xl font-medium text-theme-neutral'}>
                0 980 980 930
              </span>
            </Link>
            <div className={'flex w-full flex-col items-center justify-center'}>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                Alcool info service
              </span>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                7/7 - 8h/2h
              </span>
            </div>
          </div>
          <div
            className={
              'relative flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <Link href={'/uikit'} className={'flex items-center gap-2'}>
              <span className={'memicon-phone text-2xl text-theme-neutral'} />
              <span className={'w-fit font-pangaia text-3xl font-medium text-theme-neutral'}>
                01 40 44 46 45
              </span>
            </Link>
            <div className={'flex w-full flex-col items-center justify-center'}>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                SOS Suicide Phénix
              </span>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                Lundi au samedi - 13/23h.
              </span>
            </div>
          </div>
          <div
            className={
              'relative flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <Link href={'/uikit'} className={'flex items-center gap-2'}>
              <span className={'memicon-phone text-2xl text-theme-neutral'} />
              <span className={'w-fit font-pangaia text-3xl font-medium text-theme-neutral'}>
                39 89
              </span>
            </Link>
            <div className={'flex w-full flex-col items-center justify-center'}>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                Tabac info service
              </span>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                Lundi au samedi - 8/20h
              </span>
              <span className="text-center font-raleway text-sm font-normal text-theme-neutral">
                Si un contact avec un <span className="font-bold">tabacologue</span> est demandé, le
                service devient <span className="font-bold">payant</span> (prix d&apos;un appel non
                surtaxé)
              </span>
            </div>
          </div>
          <div
            className={
              'relative flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-6 py-4'
            }
          >
            <Link href={'/uikit'} className={'flex items-center gap-2'}>
              <span className={'memicon-phone text-2xl text-theme-neutral'} />
              <span className={'w-fit font-pangaia text-3xl font-medium text-theme-neutral'}>
                01 45 39 40 00
              </span>
            </Link>
            <div className={'flex w-full flex-col items-center justify-center'}>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                Suicide Écoute
              </span>
              <span className="text-center font-raleway text-sm font-bold text-theme-neutral">
                7/7j - 24/24h
              </span>
              <span className="text-center font-raleway text-sm font-normal text-theme-neutral">
                Coût d&apos;une communication locale. Ce service permet une écoute des personnes en
                grande <span className="font-bold">souffrance psychologique</span> ou confrontées au
                <span className="font-bold">suicide</span> , et de leur entourage.
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
