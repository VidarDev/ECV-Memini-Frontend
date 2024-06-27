'use client'; // Ajoutez cette ligne au début du fichier

import React, { useEffect, useState } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import clsx from 'clsx';
import { useRouter } from 'next/navigation';
import ThemedTextarea from '@/components/ThemedTextarea';
import { useAuth } from '@/context/AuthContext';
import ThemedRadio from '@/components/ThemedRadio';
import { RadioGroup } from '@nextui-org/radio';

const MemoryCreate = () => {
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const router = useRouter();
  const { user, loading } = useAuth();
  const maxSteps: number = 2;

  const handleContinue = () => {
    // Increment step to show next set of fields
    setStep((prevStep) => prevStep + 1);
    setError(null); // Clear error message when moving to next step
  };

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
    <section className="min-w-screen relative flex h-full min-h-screen w-full flex-col items-center justify-between bg-theme-neutral px-4 py-6 text-theme-neutral-invert">
      <div className={'flex w-full'}>
        <div className={clsx('w-full flex-col gap-8', step === 1 ? 'flex' : 'hidden')}>
          <button
            className={'w-fit'}
            onClick={() => {
              router.push(siteConfig.href.home);
            }}
          >
            <span className={'memicon-close text-5xl'} />
          </button>
        </div>
        {error && <p className="mb-4 text-theme-error">{error}</p>}
      </div>
      <form className={'flex w-full flex-col items-center gap-16'}>
        {step === 1 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div
                className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
              >
                <span className={'font-pangaia text-3xl font-bold leading-10'}>
                  Supprime un album
                </span>
              </div>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <RadioGroup className={'flex w-full flex-col *:gap-3.5'} label="">
                  <ThemedRadio value="1">Mon album personnel</ThemedRadio>
                  <ThemedRadio value="2">Album 2</ThemedRadio>
                  <ThemedRadio value="3">Album 3</ThemedRadio>
                </RadioGroup>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <img
                  src={'/images/check.svg'}
                  className={'w-[60px]'}
                  alt={''}
                  width={200}
                  height={200}
                />
                <span className="w-72 text-center font-pangaia text-3xl font-bold leading-10">
                  Ton album a bien été supprimé !
                </span>
              </div>
            </div>
          </>
        )}
      </form>
      <button
        className={`${buttonStyles()} min-h-12 w-full gap-2 !rounded-full bg-theme-primary px-6 font-raleway text-sm font-bold text-theme-neutral`}
        type={step < maxSteps ? 'button' : 'submit'}
        onClick={() => {
          if (step < maxSteps) handleContinue();
        }}
      >
        {/*{loginStatus === 'loading' ? 'Se connecte à...' : 'Se connecter'}*/}
        Continuer
        <span className={'memicon-arrow'} />{' '}
      </button>
    </section>
  );
};

export default MemoryCreate;
