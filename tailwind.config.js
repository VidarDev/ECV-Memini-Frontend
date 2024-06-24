import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      colors: {
        theme: {
          text: "var(--theme-text)",
          success: "var(--theme-success)",
          successLight: "var(--theme-success-light)",
          successDark: "var(--theme-success-dark)",
          successBackground: "var(--theme-success-bg)",
          warning: "var(--theme-warning)",
          warningLight: "var(--theme-warning-light)",
          warningDark: "var(--theme-warning-dark)",
          error: "var(--theme-error)",
          errorLight: "var(--theme-error-light)",
          errorDark: "var(--theme-error-dark)",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
}
