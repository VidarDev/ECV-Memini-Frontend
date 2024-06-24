import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { Input } from '@nextui-org/input';

import { title } from '@/components/primitives';
import { siteConfig } from '@/config/site';

export default function UikitPage() {
  return (
    <div>
      <h1 className={title()}>Pricing</h1>
      <h2 className={'text-theme-neutral text-lg'}>Buttons</h2>
      <h3 className={'text-theme-neutral text-sm'}>Primary</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-primary text-theme-neutral min-h-10 w-fit gap-2 rounded-full px-6 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-primary text-theme-neutral h-14 w-14 min-w-14 gap-2 rounded-full p-2 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-primary text-theme-neutral bg-theme-gradient min-h-10 w-fit gap-2 rounded-full px-6 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-primary text-theme-neutral bg-theme-gradient h-14 w-14 min-w-14 gap-2 rounded-full p-2 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-disabled-background text-theme-disabled min-h-10 w-fit gap-2 rounded-full border-0 px-6 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-disabled-background text-theme-disabled h-14 w-14 min-w-14 gap-2 rounded-full border-0 p-2 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
      </div>
      <h3 className={'text-theme-neutral text-sm'}>Secondary</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Link
          isExternal
          className={`${buttonStyles()} border-theme-neutral text-theme-neutral min-h-10 w-fit gap-2 rounded-full border bg-transparent px-6 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} border-theme-neutral text-theme-neutral h-14 w-14 min-w-14 gap-2 rounded-full border bg-transparent p-2 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-neutral text-theme-neutral-invert min-h-10 w-fit gap-2 rounded-full px-6 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-neutral text-theme-neutral-invert h-14 w-14 min-w-14 gap-2 rounded-full p-2 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
      </div>
      <h3 className={'text-theme-neutral text-sm'}>Neutral</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-neutral text-theme-neutral-invert bg-theme-gradient-neutral min-h-10 w-fit gap-2 rounded-full px-6 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          Documentation
          <span className={'memicon-arrow'} />{' '}
        </Link>
        <Link
          isExternal
          className={`${buttonStyles()} bg-theme-neutral text-theme-neutral-invert bg-theme-gradient-neutral h-14 w-14 min-w-14 gap-2 rounded-full p-2 text-sm font-bold`}
          href={siteConfig.links.docs}
        >
          <span className={'memicon-arrow'} />{' '}
        </Link>
      </div>
      <h3 className={'text-theme-neutral text-sm'}>Secondary</h3>
      <div className={'flex flex-wrap gap-2'}>
        <Input label="Email" type="email" className={'themed-input'} />
      </div>
    </div>
  );
}
