import './globals.css'
import type { Metadata } from 'next'
import clsx from 'clsx'

// Components
import { Navbar } from '@/components'

// Fonts
import localFont from 'next/font/local'
const satoshi = localFont({ src: '../../public/fonts/Satoshi-Variable.ttf' })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          satoshi.className,
          'text-white bg-dark-700 overflow-x-clip',
        )}
      >
        <div className="noise fixed pointer-events-none z-50 overflow-hidden w-full h-full m-0" />
        <header className="absolute max-w-7xl m-auto p-8 z-50">
          <Navbar />
        </header>
        <main className="max-w-[1600px] m-auto px-8">{children}</main>
      </body>
    </html>
  )
}
