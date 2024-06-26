'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Image } from '@nextui-org/image';
import { button as buttonStyles } from '@nextui-org/theme';
import { Link } from '@nextui-org/link';
import React from 'react';
import ThemedRadioImages from '@/components/ThemedRadioImage';
import { RadioGroup } from '@nextui-org/radio';
import AddIcons from '@/components/images/AddIcons';

export default function Albums() {
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
          'relative flex min-h-[250px] flex-col rounded-b-[80px] bg-theme-neutral-invert px-4'
        }
      >
        <div className={'mt-10 flex flex-col gap-4'}>
          <div className={'flex items-center gap-6'}>
            <div className={'app-bg-avatar relative'}>
              <Image
                alt="NextUI hero Image with delay"
                className={'aspect-square h-auto w-[72px] rounded-full object-cover'}
                height={100}
                radius={'full'}
                src="https://app.requestly.io/delay/1000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                width={100}
              />
              <AddIcons
                className={'absolute -bottom-1 right-1 z-10 h-[24px] w-[24px]'}
                startColor={'var(--theme-primary)'}
                endColor={'var(--theme-secondary)'}
                centerColor={'var(--theme-neutral-invert)'}
              ></AddIcons>
            </div>
            <div className={'relative w-fit'}>
              <h1 className={'w-fit font-pangaia text-3xl font-bold leading-10'}>
                Flavie la vie {'<'}3
              </h1>
              {/* TODO : replace */}
            </div>
          </div>
          <div className={'flex flex-col gap-4'}>
            <h2 className={'w-fit font-raleway text-lg font-semibold text-theme-neutral'}>
              Mon objectif
            </h2>
            <div className={'flex flex-nowrap items-center gap-4 overflow-x-auto'}>
              <Link
                className={`${buttonStyles()} h-8 min-h-8 w-fit gap-2 rounded-full border border-theme-primary-400 bg-theme-primary-400 px-4 font-raleway text-sm font-normal text-theme-neutral`}
                href={'#'}
              >
                Me remettre d’un épisode difficile
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section
        className={'relative mt-8 flex min-h-48 flex-col items-center justify-center px-4 pb-36'}
      >
        <div
          className={
            'theme-shadow relative flex w-full flex-1 flex-col items-center justify-center gap-4 rounded-2xl bg-theme-neutral-invert px-3 py-4'
          }
        >
          <span
            className={
              'text-center font-raleway text-sm font-normal leading-tight text-theme-neutral'
            }
          >
            Si vous faites face à une urgence, ou que vous ressentez le besoin de parler, parlez dès
            maintenant à un spécialiste !
          </span>
          {/* TODO : replace */}
          <Link
            isExternal
            className={`${buttonStyles()} min-h-10 w-fit gap-2 rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
            href={'tel:+33606060606'}
          >
            J&apos;appelle un spécialiste
            <span className={'memicon-arrow'} />
          </Link>
        </div>
        <div className={'mt-6 flex w-full flex-col gap-2'}>
          <div
            className={
              'theme-shadow relative flex w-full flex-1 flex-col items-start justify-center gap-6 rounded-2xl bg-theme-neutral-invert px-3 py-4'
            }
          >
            <div className={'flex w-full flex-col border-b-1 border-[#ACA4A6] pb-2'}>
              <h2 className={'font-pangaia text-xl font-medium text-theme-neutral'}>
                Mon objectif
              </h2>
            </div>
            <Link
              className={`font-raleway text-sm font-normal leading-tight text-theme-neutral`}
              href={'/settings'}
            >
              Paramètres
            </Link>
            <Link
              className={`font-raleway text-sm font-normal leading-tight text-theme-neutral`}
              href={'/reminders'}
            >
              Rappels
            </Link>
          </div>
          <div
            className={
              'theme-shadow relative flex w-full flex-1 flex-col items-start justify-center gap-6 rounded-2xl bg-theme-neutral-invert px-3 py-4'
            }
          >
            <div className={'flex w-full flex-col border-b-1 border-[#ACA4A6] pb-2'}>
              <h2 className={'font-pangaia text-xl font-medium text-theme-neutral'}>Abonnement</h2>
            </div>
            <Link
              className={`font-raleway text-sm font-normal leading-tight text-theme-neutral`}
              href={'/premium'}
            >
              Passer au premium
            </Link>
            <Link
              className={`font-raleway text-sm font-normal leading-tight text-theme-neutral`}
              href={'#'}
            >
              Restaurer un achat
            </Link>
            <Link
              className={`font-raleway text-sm font-normal leading-tight text-theme-neutral`}
              href={'/invite'}
            >
              Inviter un proche à collaborder
            </Link>
          </div>
          <div
            className={
              'theme-shadow relative flex w-full flex-1 flex-col items-start justify-center gap-6 rounded-2xl bg-theme-neutral-invert px-3 py-4'
            }
          >
            <div className={'flex w-full flex-col border-b-1 border-[#ACA4A6] pb-2'}>
              <h2 className={'font-pangaia text-xl font-medium text-theme-neutral'}>Aide</h2>
            </div>
            <Link
              className={`font-raleway text-sm font-normal leading-tight text-theme-neutral`}
              href={'/faq'}
            >
              F.A.Q
            </Link>
            <Link
              className={`font-raleway text-sm font-normal leading-tight text-theme-neutral`}
              href={'/assistance'}
            >
              Assistance
            </Link>
          </div>
          <div
            className={
              'theme-shadow relative flex w-full flex-1 flex-col items-start justify-center gap-6 rounded-2xl bg-theme-neutral-invert px-3 py-4'
            }
          >
            <div className={'relative w-fit'}>
              <h2 className={'font-pangaia text-xl font-medium text-theme-neutral'}>
                Personnalise ton espace !
              </h2>
            </div>
            <RadioGroup
              className={'flex w-full items-center gap-4 *:w-full *:flex-row *:justify-start'}
              label=""
            >
              <ThemedRadioImages value="free">
                <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
              </ThemedRadioImages>
              <ThemedRadioImages value="pro">
                <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
              </ThemedRadioImages>
              <ThemedRadioImages value="enterprise">
                <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
              </ThemedRadioImages>
              <ThemedRadioImages value="enterprise2">
                <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
              </ThemedRadioImages>
            </RadioGroup>
          </div>
        </div>
        <Link
          isExternal
          className={`${buttonStyles()} mt-6 min-h-10 w-full gap-2 rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
          href={'/uikit'}
        >
          Me déconnecter
          <span className={'memicon-arrow'} />
        </Link>
      </section>
    </>
  );
}
