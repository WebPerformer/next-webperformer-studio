import React from 'react'
import Image from 'next/image'
import clsx from 'clsx'

// Components
import { TextLoop } from '.'

// Images
import brand from '../../public/images/brand.svg'
import lines from '../../public/images/lines.svg'

// Fonts
import localFont from 'next/font/local'
const walsheim = localFont({
  src: '../../public/fonts/GT-Walsheim-Condensed-Black.woff2',
})
const saol = localFont({
  src: '../../public/fonts/SaolDisplay-LightItalic.woff2',
})

export default function Hero() {
  return (
    <div className="relative pt-40 pb-20">
      <div className="absolute top-0 left-0 h-full overflow-hidden -z-10">
        <Image src={lines} alt="" className="opacity-20" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div>
          <Image src={brand} alt="" />
        </div>
        <h1
          className={clsx(walsheim.className, 'text-title leading-none my-10')}
        >
          DIGITAL{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-dark-500 to-gray">
            SOLUTIONS
          </span>{' '}
          <br /> FOR{' '}
          <span
            className={clsx(
              saol.className,
              'font-light text-transparent bg-clip-text bg-gradient-to-r from-pink to-blue',
            )}
          >
            your
          </span>{' '}
          COMPANY
        </h1>
        <p className="w-2/3 text-center text-base text-gray">
          Empower Your Business with Cutting-Edge Digital Services. Experience
          the most modern and innovative approach to elevate your business in
          the digital age.
        </p>
        <div className="mt-20 px-6 py-3 ring-1 ring-gray rounded-2xl text-base font-semibold">
          <TextLoop />
        </div>
      </div>
    </div>
  )
}
