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
      md: '1rem',
    },
  },
  plugins: [],
}
export default config
