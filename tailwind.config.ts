import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      light: '#FAEDCD',
      dark: '#111416',
      gray: '#A1A1A1',
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
  },
  plugins: [],
}
export default config
