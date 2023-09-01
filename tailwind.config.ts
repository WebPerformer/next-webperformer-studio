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
      xs: 'clamp(0.5rem, 0.6vw, 30rem)',
      sm: 'clamp(0.8rem, 0.8vw, 1rem)',
      base: 'clamp(1rem, 1vw, 1.4rem)',
      lg: 'clamp(1.2rem, 1.2vw, 1.8rem)',
      xl: 'clamp(1.4rem, 1.4vw, 2.2rem)',
      xxl: 'clamp(2.6rem, 2.6vw, 30rem)',
      title: 'clamp(0rem, 7vw, 125rem)',
    },
    maxWidth: {
      content: '2000px',
    },
  },
  plugins: [],
}
export default config
