'use client';

import { Navbar as NextUINavbar } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import React from 'react';
import NavIcons from '@/components/images/NavIcons';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { siteConfig } from '@/config/site';

export const ThemedNavbar = () => {
  const splitPathname = usePathname().split('/');

  if (splitPathname[1] === 'auth') {
    return null;
  }

  if (splitPathname[1] === 'albums' && splitPathname[2] === 'create') {
    return null;
  }

  return (
    <>
      <NextUINavbar className={'themed-navbar bg-transparent backdrop-filter-none'}>
        <nav
          className={
            'bottom-navbar fixed bottom-8 left-1/2 z-50 flex min-h-16 -translate-x-1/2 rounded-full bg-theme-neutral-invert text-theme-neutral-background shadow-lg'
          }
        >
          <ul className={'relative flex w-full justify-center gap-2 px-6 pb-1.5 pt-4'}>
            <div className={'flex gap-6'}>
              <li className={'flex'}>
                <Link
                  className={clsx(
                    splitPathname[1] === ''
                      ? '!text-theme-primary *:!text-theme-primary after:!bg-theme-primary'
                      : '',
                    'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary',
                  )}
                  href={siteConfig.href.home}
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
                  className={clsx(
                    splitPathname[1] === 'albums'
                      ? '!text-theme-primary *:!text-theme-primary after:!bg-theme-primary'
                      : '',
                    'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary',
                  )}
                  href={siteConfig.href.albums}
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
                <Link href="/uikit">
                  <NavIcons
                    className={'ml-1'}
                    startColor={'var(--theme-primary)'}
                    endColor={'var(--theme-secondary)'}
                    centerColor={'var(--theme-neutral)'}
                  ></NavIcons>
                </Link>
              </li>
            </div>
            <div className={'flex gap-6'}>
              <li className={'flex'}>
                <Link
                  className={clsx(
                    splitPathname[1] === 'rewards'
                      ? '!text-theme-primary *:!text-theme-primary after:!bg-theme-primary'
                      : '',
                    'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary',
                  )}
                  href={siteConfig.href.rewards}
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
                  className={clsx(
                    splitPathname[1] === 'profile'
                      ? '!text-theme-primary *:!text-theme-primary after:!bg-theme-primary'
                      : '',
                    'group flex flex-col gap-1 after:h-[5px] after:w-[5px] after:rounded-full after:bg-transparent hover:after:bg-theme-primary',
                  )}
                  href={siteConfig.href.profile}
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
      </NextUINavbar>
    </>
  );
};
