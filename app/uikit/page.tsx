import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { Input } from '@nextui-org/input';
import React from 'react';
import { RadioGroup } from '@nextui-org/radio';
import { Progress } from '@nextui-org/progress';
import { CheckboxGroup } from '@nextui-org/checkbox';

import { title } from '@/components/primitives';
import { siteConfig } from '@/config/site';
import ThemedRadio from '@/components/ThemedRadio';
import ThemedRadioImages from '@/components/ThemedRadioImage';
import ThemedCheckbox from '@/components/ThemedCheckbox';
import ThemedCheckboxImage from '@/components/ThemedCheckboxImage';

export default function UikitPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <h2 className={'text-lg text-theme-neutral'}>Buttons</h2>
      <h3 className={'text-sm text-theme-neutral'}>Primary</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Link
          isExternal
          className={`${buttonStyles()} min-h-10 w-fit gap-2 rounded-full bg-theme-primary px-6 text-sm font-bold text-theme-neutral`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} h-14 w-14 min-w-14 gap-2 rounded-full bg-theme-primary p-2 text-sm font-bold text-theme-neutral`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-gradient min-h-10 w-fit gap-2 rounded-full bg-theme-primary px-6 text-sm font-bold text-theme-neutral`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-gradient h-14 w-14 min-w-14 gap-2 rounded-full bg-theme-primary p-2 text-sm font-bold text-theme-neutral`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} min-h-10 w-fit gap-2 rounded-full border-0 bg-theme-disabled-background px-6 text-sm font-bold text-theme-disabled`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} h-14 w-14 min-w-14 gap-2 rounded-full border-0 bg-theme-disabled-background p-2 text-sm font-bold text-theme-disabled`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
      </div>
      <h3 className={'text-sm text-theme-neutral'}>Secondary</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Link
          isExternal
          className={`${buttonStyles()} min-h-10 w-fit gap-2 rounded-full border border-theme-neutral bg-transparent px-6 text-sm font-bold text-theme-neutral`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} h-14 w-14 min-w-14 gap-2 rounded-full border border-theme-neutral bg-transparent p-2 text-sm font-bold text-theme-neutral`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} min-h-10 w-fit gap-2 rounded-full bg-theme-neutral px-6 text-sm font-bold text-theme-neutral-invert`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} h-14 w-14 min-w-14 gap-2 rounded-full bg-theme-neutral p-2 text-sm font-bold text-theme-neutral-invert`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
      </div>
      <h3 className={'text-sm text-theme-neutral'}>Neutral</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-gradient-neutral min-h-10 w-fit gap-2 rounded-full bg-theme-neutral px-6 text-sm font-bold text-theme-neutral-invert`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-gradient-neutral h-14 w-14 min-w-14 gap-2 rounded-full bg-theme-neutral p-2 text-sm font-bold text-theme-neutral-invert`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
      </div>
      <h3 className={'text-sm text-theme-neutral'}>Secondary</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Input className={'themed-input'} label="Email" type="email" />
      </div>
      <h3 className={'text-sm text-theme-neutral'}>Radio</h3>
      <div className={'flex flex-wrap gap-2'}>
        <RadioGroup className={'w-full'} label="">
          <ThemedRadio value="free">Free</ThemedRadio>
          <ThemedRadio value="pro">Pro</ThemedRadio>
          <ThemedRadio value="enterprise">Enterprise</ThemedRadio>
        </RadioGroup>
      </div>
      <div className={'flex flex-wrap gap-2'}>
        <RadioGroup className={'w-full'} label="">
          <ThemedRadioImages value="free">
            <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
          </ThemedRadioImages>
          <ThemedRadioImages value="pro">
            <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
          </ThemedRadioImages>
          <ThemedRadioImages value="enterprise">
            <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
          </ThemedRadioImages>
        </RadioGroup>
      </div>
      <h3 className={'text-sm text-theme-neutral'}>Progress</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Progress
          isIndeterminate
          aria-label="Downloading..."
          className="themed-progress w-full"
          size="md"
          // value="50"
        />
      </div>
      <h3 className={'text-sm text-theme-neutral'}>Progress</h3>
      <div className={'flex flex-wrap gap-2'}>
        <CheckboxGroup className={'w-full'} label="">
          <ThemedCheckbox value="free">Free</ThemedCheckbox>
          <ThemedCheckbox value="pro">Pro</ThemedCheckbox>
          <ThemedCheckbox value="enterprise">Enterprise</ThemedCheckbox>
        </CheckboxGroup>
      </div>
      <div className={'flex flex-wrap gap-2'}>
        <CheckboxGroup className={'w-full'} label="">
          <ThemedCheckboxImage value="free">
            <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
          </ThemedCheckboxImage>
          <ThemedCheckboxImage value="okfoo">
            <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
          </ThemedCheckboxImage>
          <ThemedCheckboxImage value="ekfoekf">
            <img alt={''} src={'https://picsum.photos/id/237/200/200'} />
          </ThemedCheckboxImage>
        </CheckboxGroup>
      </div>
    </div>
  );
}
