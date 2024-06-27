'use client'; // Ajoutez cette ligne au début du fichier

import React, { useEffect, useState } from 'react';
import { Input } from '@nextui-org/input';
import { button as buttonStyles } from '@nextui-org/theme';
import { useTheme } from 'next-themes';
import FiveIcons from '@/components/images/fiveIcons';
import { Link } from '@nextui-org/link';
import { siteConfig } from '@/config/site';
import { Progress } from '@nextui-org/progress';
import clsx from 'clsx';
import TwoIcons from '@/components/images/twoIcons';
import ThreeIcons from '@/components/images/threeIcons';
import ThemedRadio from '@/components/ThemedRadio';
import { Select, SelectItem } from '@nextui-org/select';
import { Avatar } from '@nextui-org/avatar';
import FourIcons from '@/components/images/fourIcons';
import { RadioGroup } from '@nextui-org/radio';
import { useRouter } from 'next/navigation';
import ThemedRadioImages from '@/components/ThemedRadioImage';
import ThemedTextarea from '@/components/ThemedTextarea';
import AddIcons from '@/components/images/AddIcons';
import { useAuth } from '@/context/AuthContext';

const MemoryCreate = () => {
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState(1);
  const [type, setType] = useState(1);
  const router = useRouter();
  const { user, loading } = useAuth();
  const maxSteps: number = 5;
  const handleContinue = () => {
    // Increment step to show next set of fields
    setStep((prevStep) => prevStep + 1);
    setError(null); // Clear error message when moving to next step
  };

  const handlePrevious = () => {
    // Increment step to show next set of fields
    setStep((prevStep) => prevStep - 1);
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
        <div
          className={clsx('w-full flex-col gap-8', step > 1 && step < maxSteps ? 'flex' : 'hidden')}
        >
          <button
            className={'w-fit'}
            onClick={() => {
              if (step > 1) handlePrevious();
            }}
          >
            <span className={'memicon-arrow-left text-5xl'} />
          </button>
        </div>
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
                <span className={'font-pangaia text-3xl font-bold leading-10'}>Ta pensine</span>
                <span className={'font-raleway text-sm font-normal leading-tight'}>
                  Comment te sens-tu ?
                </span>
              </div>
              <div className={'flex w-full'}>
                <RadioGroup
                  className={
                    'flex w-full *:!flex-row *:!flex-wrap *:justify-center *:gap-0 *:gap-y-6'
                  }
                  label=""
                >
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="joy" className={'border-3'}>
                      <img alt={''} className={'h-auto w-full'} src={'/images/emotions/joy.svg'} />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">stress</span>
                  </div>
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="anger" className={'border-3'}>
                      <img
                        alt={''}
                        className={'h-auto w-full'}
                        src={'/images/emotions/anger.svg'}
                      />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">colère</span>
                  </div>
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="sadness" className={'border-3'}>
                      <img
                        alt={''}
                        className={'h-auto w-full'}
                        src={'/images/emotions/sadness.svg'}
                      />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">tristesse</span>
                  </div>
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="fatigue" className={'border-3'}>
                      <img
                        alt={''}
                        className={'h-auto w-full'}
                        src={'/images/emotions/fatigue.svg'}
                      />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">fatigue</span>
                  </div>
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="excitement" className={'border-3'}>
                      <img
                        alt={''}
                        className={'h-auto w-full'}
                        src={'/images/emotions/excitement.svg'}
                      />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">excitation</span>
                  </div>
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="pride" className={'border-3'}>
                      <img
                        alt={''}
                        className={'h-auto w-full'}
                        src={'/images/emotions/pride.svg'}
                      />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">fierté</span>
                  </div>
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="faith" className={'border-3'}>
                      <img
                        alt={''}
                        className={'h-auto w-full'}
                        src={'/images/emotions/faith.svg'}
                      />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">confiance</span>
                  </div>
                  <div
                    className={
                      'flex w-1/4 flex-col gap-1 px-3 *:max-h-full *:*:w-full *:max-w-full'
                    }
                  >
                    <ThemedRadioImages value="stress" className={'border-3'}>
                      <img
                        alt={''}
                        className={'h-auto w-full'}
                        src={'/images/emotions/stress.svg'}
                      />
                    </ThemedRadioImages>
                    <span className="text-center font-raleway text-xs font-normal">stress</span>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </>
        )}

        {step === 2 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div
                className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
              >
                <span className={'font-pangaia text-3xl font-bold leading-10'}>Ma pensine</span>
                <span className={'font-raleway text-sm font-normal leading-tight'}>
                  Qu’est ce que tu veux ajouter ?
                </span>
              </div>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <button
                  className={`${buttonStyles()} min-h-12 w-full max-w-48 gap-2 !rounded-full bg-theme-neutral-invert px-6 font-raleway text-sm font-bold text-theme-neutral`}
                  type={'button'}
                  onClick={() => {
                    setType(1);
                    handleContinue();
                  }}
                >
                  Ajouter une note
                  <span className={'memicon-text'} />
                </button>
                <button
                  className={`${buttonStyles()} min-h-12 w-full max-w-48 gap-2 !rounded-full border border-theme-neutral-invert bg-transparent px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
                  type={'button'}
                  onClick={() => {
                    setType(2);
                    handleContinue();
                  }}
                >
                  Ajouter une photo
                  <span className={'memicon-image'} />
                </button>
                <button
                  className={`${buttonStyles()} min-h-12 w-full max-w-48 gap-2 !rounded-full border border-theme-neutral-invert bg-transparent px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
                  type={'button'}
                  onClick={() => {
                    setType(3);
                    handleContinue();
                  }}
                >
                  Ajouter une vidéo
                  <span className={'memicon-image'} />
                </button>
              </div>
            </div>
          </>
        )}

        {step === 3 && type === 1 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div
                className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
              >
                <span className={'font-pangaia text-3xl font-bold leading-10'}>Ta pensine</span>
                <span className={'font-raleway text-sm font-normal leading-tight'}>
                  Décris ton souvenir !
                </span>
              </div>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <Input
                  id="title1"
                  className={'themed-input w-full'}
                  placeholder={'Title'}
                  type="text"
                  // value={}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <ThemedTextarea
                  id="description1"
                  className={'themed-textarea min-h-14'}
                  placeholder={'Ajoute ta note (255 caractères)'}
                  // value={}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  id="media1"
                  className={'themed-input themed-textarea w-full'}
                  placeholder={'Title'}
                  type="file"
                  // value={}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {step === 3 && type === 2 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div
                className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
              >
                <span className={'font-pangaia text-3xl font-bold leading-10'}>Ta pensine</span>
                <span className={'font-raleway text-sm font-normal leading-tight'}>
                  Ajour une photo !
                </span>
              </div>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <Input
                  id="title2"
                  className={'themed-input w-full'}
                  placeholder={'Title'}
                  type="text"
                  // value={}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  id="media2"
                  className={'themed-input themed-textarea w-full'}
                  placeholder={'Title'}
                  type="file"
                  // value={}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {step === 3 && type === 3 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div
                className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
              >
                <span className={'font-pangaia text-3xl font-bold leading-10'}>Ta pensine</span>
                <span className={'font-raleway text-sm font-normal leading-tight'}>
                  Ajoute une vidéo !
                </span>
              </div>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <Input
                  id="title3"
                  className={'themed-input w-full'}
                  placeholder={'Title'}
                  type="text"
                  // value={}
                  // onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  id="media3"
                  className={'themed-input themed-textarea w-full'}
                  placeholder={'Title'}
                  type="file"
                  // value={}
                  // onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
          </>
        )}

        {step === 4 && (
          <>
            <div className={'flex w-full flex-col items-center gap-11'}>
              <div
                className={'relative flex w-fit flex-col items-center justify-center gap-[14px]'}
              >
                <span className={'font-pangaia text-3xl font-bold leading-10'}>Ma pensine</span>
                <span className={'font-raleway text-sm font-normal leading-tight'}>
                  Qu’est ce que tu veux ajouter ?
                </span>
              </div>
              <div className={'flex w-full flex-col items-center gap-3.5'}>
                <button
                  className={`${buttonStyles()} min-h-12 !w-full justify-between gap-2 !rounded-full border border-theme-neutral-invert bg-transparent px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
                  type={'button'}
                >
                  Créer un album
                  <AddIcons
                    className={'h-[24px] w-[24px]'}
                    startColor={'var(--theme-primary)'}
                    endColor={'var(--theme-secondary)'}
                    centerColor={'var(--theme-neutral-invert)'}
                  ></AddIcons>
                </button>
                <RadioGroup className={'flex w-full flex-col *:gap-3.5'} label="">
                  <ThemedRadio value="1">Mon album personnel</ThemedRadio>
                  <ThemedRadio value="2">Album 2</ThemedRadio>
                  <ThemedRadio value="3">Album 3</ThemedRadio>
                </RadioGroup>
              </div>
            </div>
          </>
        )}

        {step === 5 && (
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
                  Ton souvenir a bien été ajouté !
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
