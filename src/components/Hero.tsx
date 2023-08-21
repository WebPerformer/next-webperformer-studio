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
    <div className="absolute top-0 left-0 w-full h-screen flex items-center justify-center -z-10 pt-12">
      <div className="flex flex-col items-center text-center">
        <div className="absolute top-0 left-0 overflow-hidden -z-10">
          <Image
            src={lines}
            alt=""
            className="w-full h-screen opacity-30 scale-105"
          />
        </div>
        <Image src={brand} alt="" className="mb-10" />
        <h1
          className={clsx(
            walsheim.className,
            'text-lg font-semibold uppercase leading-none',
          )}
        >
          Digital Solution <br />{' '}
          <span>
            For{' '}
            <span className={clsx(saol.className, 'font-light lowercase')}>
              Your
            </span>{' '}
            Company
          </span>
        </h1>
        <p className="w-3/4 text-md text-gray my-16">
          Empower Your Business with Cutting-Edge Digital Services. Experience
          the most modern and innovative approach to elevate your business in
          the digital age.
        </p>
        <div className="text-md px-6 py-2 ring-1 ring-gray bg-dark-700 rounded-xl">
          <TextLoop />
        </div>
      </div>
    </div>
  )
}
