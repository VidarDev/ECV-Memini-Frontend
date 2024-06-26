import { Image } from '@nextui-org/image';
import { button as buttonStyles } from '@nextui-org/theme';
import { siteConfig } from '@/config/site';
import { Link } from '@nextui-org/link';
import React from 'react';
import { Input } from '@nextui-org/input';
import { Accordion, AccordionItem } from '@nextui-org/accordion';
import ThemedAccordion from '@/components/ThemedAccordion';

export default function Home() {
  return (
    <>
      <section
        className={
          'bg-theme-primary-200 relative flex min-h-[250px] flex-col rounded-b-[80px] px-4'
        }
      >
        <div className={'mb-20 mt-8 flex flex-col gap-8'}>
          <span className={'memicon-arrow px-4 text-5xl'}></span>
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
          'app-translate-y-3 relative flex min-h-48 flex-col items-center justify-center pb-4'
        }
      >
        <div className={'flex w-full flex-col gap-4 px-4'}>
          <ThemedAccordion
            key="1"
            aria-label="Quelles sont les fonctionnalités
principales de l'application Memini ?"
            title="Quelles sont les fonctionnalités
principales de l'application Memini ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="1"
            aria-label="Quelles sont les fonctionnalités
principales de l'application Memini ?"
            title="Quelles sont les fonctionnalités
principales de l'application Memini ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
          <ThemedAccordion
            key="1"
            aria-label="Quelles sont les fonctionnalités
principales de l'application Memini ?"
            title="Quelles sont les fonctionnalités
principales de l'application Memini ?"
          >
            Memini permet aux utilisateurs de créer, enregistrer et organiser des souvenirs sous
            forme de notes écrites, vocales ou de vidéo.{' '}
          </ThemedAccordion>
        </div>
        <div className="mt-8 flex w-full px-4">
          <Link
            isExternal
            className={`${buttonStyles()} min-h-10 w-full gap-2 rounded-full bg-theme-neutral px-6 font-raleway text-sm font-bold text-theme-neutral-invert`}
            href={'/uikit'}
          >
            Ecris-nous ! <span className={'memicon-arrow'} />
          </Link>
        </div>
      </section>
    </>
  );
}
