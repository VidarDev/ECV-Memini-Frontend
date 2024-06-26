import React from 'react';
import { Slider } from '@nextui-org/slider';

import ThemedSwitch from '@/components/ThemedSwitch';
import { Link } from '@nextui-org/link';

export default function Home() {
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
        className={'app-translate-y-3 relative flex flex-col items-center justify-center pb-36'}
      >
        <div className={'flex w-full flex-col items-center justify-center gap-4 px-4'}>
          <div
            className={
              'theme-shadow flex w-fit items-center gap-8 rounded-2xl bg-theme-neutral-invert p-6'
            }
          >
            <div className="font-pangaia text-xl font-medium text-black">Notifications</div>
            <ThemedSwitch />
          </div>
        </div>
        <div className={'mt-8 flex w-full flex-col gap-4 px-4'}>
          <h2 className="font-pangaia text-xl font-medium text-theme-neutral">
            Quantité préférentielle
          </h2>
          <Slider
            aria-label="Temperature"
            className="themed-slider"
            defaultValue={0.7}
            maxValue={1}
            minValue={0}
            size="md"
            step={0.01}
          />
          <div className={'flex w-full items-center justify-between'}>
            <span className="w-16 text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              1 fois par semaine
            </span>
            <span className="w-16 text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              3 fois par semaine
            </span>
            <span className="w-16 text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              chaque jour
            </span>
          </div>
        </div>
        <div className={'mt-8 flex w-full flex-col gap-4 px-4'}>
          <div className={'flex w-full items-center justify-between'}>
            <h2 className="font-pangaia text-xl font-medium text-theme-neutral">
              Créneau de rappel
            </h2>
            <span className="text-center font-raleway text-sm font-normal leading-tight text-theme-neutral">
              13h - 15h
            </span>
          </div>
          <Slider
            aria-label="Temperature"
            className="themed-slider two-value"
            defaultValue={[0.7, 0.8]}
            maxValue={1}
            minValue={0}
            size="md"
            step={0.01}
          />
        </div>
      </section>
    </>
  );
}
