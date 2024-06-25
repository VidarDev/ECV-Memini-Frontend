import '@/styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';
import { ScrollShadow } from '@nextui-org/scroll-shadow';

import { Providers } from './providers';

import { siteConfig } from '@/config/site';
import { ThemedNavbar } from '@/components/ThemedNavbar';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.ico',
  },
  applicationName: siteConfig.name,
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: siteConfig.name,
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: {
      default: siteConfig.name,
      template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning className={'bg-theme-neutral-background'} lang="en">
      <head />
      <body
        className={clsx('min-h-screen overflow-y-hidden bg-transparent font-pangaia antialiased')}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <ThemedNavbar />
          <div className="relative flex min-h-screen flex-col">
            <ScrollShadow
              hideScrollBar
              className="relative flex max-h-screen min-h-screen flex-col"
              size={48}
            >
              <main className="container mx-auto max-w-[756px] flex-grow">{children}</main>
              <footer className="hidden w-full items-center justify-center py-3">
                <span className="text-theme-neutral">Powered by Memini</span>
              </footer>
            </ScrollShadow>
          </div>
        </Providers>
      </body>
    </html>
  );
}
