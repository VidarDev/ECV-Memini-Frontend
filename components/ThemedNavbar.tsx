import { Navbar as NextUINavbar } from '@nextui-org/navbar';
import { Link } from '@nextui-org/link';
import React from 'react';

export const ThemedNavbar = () => {
  return (
    <>
      <NextUINavbar className={'themed-navbar bg-transparent backdrop-filter-none'}>
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
                  href="/"
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
                  href="/albums"
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
                  href="/rewards"
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
      </NextUINavbar>
    </>
  );
};
