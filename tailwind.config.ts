import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFAFF',
      gray: '#7B7B7B',
      'dark-400': '#393939',
      'dark-500': '#151617',
      'dark-600': '#0F0F0F',
      'dark-700': '#080808',
      pink: '#EE46D3',
      blue: '#907CFF',
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
      title: 'clamp(3rem, 7vw, 10rem)',
    },
  },
  plugins: [],
}
export default config
