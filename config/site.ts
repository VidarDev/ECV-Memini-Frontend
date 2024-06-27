export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Memini',
  description: 'Menini',
  theme: {
    uranus: {
      primary: '#000000',
      secondary: '#000000',
      neutral: '#000000',
      neutralInvert: '#000000',
    },
    saturne: {
      primary: '#000000',
      secondary: '#000000',
      neutral: '#000000',
      neutralInvert: '#000000',
    },
    venus: {
      primary: '#000000',
      secondary: '#000000',
      neutral: '#000000',
      neutralInvert: '#000000',
    },
    jupiter: {
      primary: '#000000',
      secondary: '#000000',
      neutral: '#000000',
      neutralInvert: '#000000',
    },
  },
  href: {
    auth: '/auth',
    login: '/auth/login',
    register: '/auth/register',
    home: '/',
    albums: '/albums',
    albumCreate: '/albums/create',
    memoryCreate: '/albums/memory/create',
    rewards: '/rewards',
    uikit: '/uikit',
    profile: '/profile',
    assistance: '/profile/assistance',
    faq: '/profile/faq',
    invite: '/profile/invite',
    premium: '/profile/premium',
    reminders: '/profile/reminders',
    settings: '/profile/settings',
  },
  links: {
    github: 'https://github.com/nextui-org/nextui',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    discord: 'https://discord.gg/9b6yyZKmH4',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
