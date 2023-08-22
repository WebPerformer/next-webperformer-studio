import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      gray: '#5A5A5A',
      'dark-500': '#1D1D1D',
      'dark-700': '#080808',
      pink: '#D59FFF',
      blue: '#75D7F5',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    screens: {
      xl: { raw: '(max-width: 1440px)' },
      lg: { raw: '(max-width: 1024px)' },
      md: { raw: '(max-width: 768px)' },
      sl: { raw: '(max-width: 425px)' },
      sm: { raw: '(max-width: 375px)' },
      xs: { raw: '(max-width: 320px)' },
      'h-md': { raw: '(max-height: 700px)' },
    },
    fontSize: {
      xs: 'clamp(0.6rem, .8vw, 0.4rem)',
      sm: 'clamp(0.6rem, 1vw, 0.8rem)',
      base: 'clamp(0.9rem, 1.4vw, 1.2rem)',
      lg: 'clamp(1.25rem, 1.8vw, 1.6rem)',
      xl: 'clamp(2rem, 3vw, 2.6rem)',
      xxl: 'clamp(3rem, 5vw, 4.6rem)',
      title: 'clamp(3rem, 6vw, 9rem)',
    },
  },
  plugins: [],
}
export default config
