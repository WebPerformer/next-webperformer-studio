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
      'light-gray': '#E4E4E7',
      'dark-400': '#393939',
      'dark-500': '#151617',
      'dark-600': '#0F0F0F',
      'dark-700': '#080808',
      pink: '#EE46D3',
      purple: '#907CFF',
      transparent: 'rgba(0, 0, 0, 0)',
    },
    fontSize: {
      xs: 'clamp(0.6rem, 0.6vw, 0.6rem)',
      sm: 'clamp(0.8rem, 0.8vw, 1rem)',
      base: 'clamp(1rem, 1vw, 1.2rem)',
      lg: 'clamp(1.2rem, 1.2vw, 1.8rem)',
      xl: 'clamp(1.4rem, 1.4vw, 2.2rem)',
      xxl: 'clamp(1.6rem, 3.1vw, 4.4rem)',
      link: 'clamp(2rem, 5vw, 6rem)',
      title: 'clamp(0rem, 7vw, 125rem)',
    },
    maxWidth: {
      content: '2000px',
    },
  },
  plugins: [],
}
export default config
