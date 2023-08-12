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
const panchang = localFont({ src: '../../public/fonts/Panchang-Variable.ttf' })

export default function Hero() {
  return (
    <div className="w-full h-full flex flex-col items-center text-center pt-52 pb-32">
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden -z-10">
        <Image src={lines} alt="" className="opacity-30 scale-105" />
      </div>
      <Image src={brand} alt="" className="mb-5" />
      <h1
        className={clsx(
          panchang.className,
          'text-lg font-semibold uppercase mb-10',
        )}
      >
        Digital Solutions <br />{' '}
        <span className="font-light">For Your Company</span>
      </h1>
      <p className="w-1/2 text-md text-gray mb-10">
        Empower Your Business with Cutting-Edge Digital Services. Experience the
        most modern and innovative approach to elevate your business in the
        digital age.
      </p>
      <div className="font-bold px-6 py-2 ring-1 ring-gray bg-dark-700 rounded-xl">
        <TextLoop />
      </div>
    </div>
  )
}