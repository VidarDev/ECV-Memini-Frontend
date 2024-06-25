import { Link } from '@nextui-org/link';
import { button as buttonStyles } from '@nextui-org/theme';
import { Input } from '@nextui-org/input';

import { title } from '@/components/primitives';
import { siteConfig } from '@/config/site';

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
      <div className={'flex flex-wrap gap-2'}></div>
      <nav
        className={
          'bottom-navbar fixed bottom-4 left-1/2 z-50 flex min-h-16 -translate-x-1/2 rounded-full bg-theme-neutral-invert text-theme-neutral-background shadow-lg'
        }
      >
        <ul className={'relative flex w-full justify-center gap-2 px-6 pb-1.5 pt-4'}>
          <div className={'flex gap-6'}>
            <li className={'flex'}>
              <Link
                className={
                  'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary'
                }
                href="/uikit"
              >
                <span
                  className={
                    'memicon-home text-[2rem] text-theme-neutral group-hover:text-theme-primary'
                  }
                />
              </Link>
            </li>
            <li className={'flex'}>
              <Link
                className={
                  'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary'
                }
                href="/about"
              >
                <span
                  className={
                    'memicon-albums text-[2rem] text-theme-neutral group-hover:text-theme-primary'
                  }
                />
              </Link>
            </li>
          </div>
          <div className={'flex h-full min-w-20 justify-center'}>
            <li className={'absolute left-1/2 top-0 flex -translate-x-1/2 -translate-y-1/2'}>
              <Link href="/services">
                <span className={'memicon-add-color pl-0.5 text-[3rem] text-theme-neutral'} />
              </Link>
            </li>
          </div>
          <div className={'flex gap-6'}>
            <li className={'flex'}>
              <Link
                className={
                  'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary'
                }
                href="/contact"
              >
                <span
                  className={
                    'memicon-star text-[2rem] text-theme-neutral group-hover:text-theme-primary'
                  }
                />
              </Link>
            </li>
            <li className={'flex'}>
              <Link
                className={
                  'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary'
                }
                href="/profile"
              >
                <span
                  className={
                    'memicon-user text-[2rem] text-theme-neutral group-hover:text-theme-primary'
                  }
                />
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
}
